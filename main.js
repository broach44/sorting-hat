const selectStudentForm = document.getElementById('studentForm');
selectStudentForm.style.display = 'none';

document.getElementById('getStartedBtn').addEventListener('click', () => {
    selectStudentForm.style.display = 'block';
});

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const houseArr = [
    "Gryffindor",
    "Hufflepuff",
    "Slytherin",
    "Ravenclaw"
    ];

const studentCardArr = [];
const cardPrinter = (arr) => {
    let domString = `<div class="container">
                    <div class="row">`;
    for (let i = 0; i < arr.length; i++) {
        const currentObject = arr[i];
        domString += `
        <div class="card col-12 col-md-6 col-lg-4 ${currentObject.assignedHouse}">
            <h2>${currentObject.firstName} ${currentObject.lastName}</h2>
            <h3>${currentObject.assignedHouse}</h3>
            <button type="button" class="btn btn-outline-dark expel" id="expel${i}">Expel</button>
            <h6 style="display: none">${currentObject.expelled}</h6>
        </div>
        `
    
    }
    domString += `</div></div>`
    printToDom('studentCards', domString);        
};

const form = document.getElementById('studentForm');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');

//FUNCTIONS//
const createNewStudent = () => {
    let newStudent = []; 
    newStudent.firstName = `${inputFirstName.value}`; //adds to object
    newStudent.lastName = `${inputLastName.value}`;  //adds to object
    newStudent.assignedHouse = houseArr[Math.floor(Math.random()*houseArr.length)]; //adds to object
    newStudent.expelled = 'false';
    studentCardArr.push(newStudent); //pushes new student object to main student array
    // cardPrinter(studentCardArr); //prints the cards
    inputFirstName.value = ''; //clears the input field
    inputLastName.value = '';  //clears the input field
}



form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents refresh of page
    createNewStudent();

    cardPrinter(studentCardArr);
    //Below selects the nodes and assigns the event listener to each card
    let myNodeList = document.querySelectorAll('.expel');
    for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].addEventListener('click', (e) => {
            let target = e.target.parentNode;
            target.style.display = 'none';
            studentCardArr[i].expelled = 'true';
            //TODO: does not work on the first generated, works on all after....items are not hidden on display
            //TODO: Add an option to add a class here for voldemort's army//
        });
    };    
});

// const eraseCards = (arr) => {


// eraseCards(studentCardArr);

//TODO: Reprint the cards...tip from Greg..

//TODO: 
//Currently the event listener is working on the expel buttons and cards can be displayed as none.
//BUG TO FIX is that when you click to submit a new student after you have expelled some then the others that were expelled will come back.

//TODO: 9.13.19 - Try changing the event listeners into a function and altering the calling order of those functions. 


// 1. When you click the button if student is not expelled print to Dom
// 2. If the student is expelled display = none
// 3. When you click the button expel the student and display = none



