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
        </div>
        `
    }
    domString += `</div></div>`
    printToDom('studentCards', domString);        
};

const form = document.getElementById('studentForm');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents refresh of page
    let newStudent = {}; 
    newStudent.firstName = `${inputFirstName.value}`; //adds to object
    newStudent.lastName = `${inputLastName.value}`;  //adds to object
    newStudent.assignedHouse = houseArr[Math.floor(Math.random()*houseArr.length)]; //adds to object
    studentCardArr.push(newStudent); //pushes new student object to main student array
    // cardPrinter(studentCardArr); //prints the cards
    inputFirstName.value = ''; //clears the input field
    inputLastName.value = '';  //clears the input field
    
    //TODO: Try and add an if statement to check whether the display is not set to none then print
        
    cardPrinter(studentCardArr);
    //Below selects the nodes and assigns the event listener to each card
    let myNodeList = document.querySelectorAll('.expel');
    for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].addEventListener('click', (e) => {
            let target = e.target.parentNode;
            target.style.display = 'none';
            //TODO: Add an option to add a class here for voldemort's army//
            //TODO: Add a property of expelled and set value to true or false. Check that value prior to printing to the DOM
        });
    };    
});

//TODO: Reprint the cards...

//TODO: 
//Currently the event listener is working on the expel buttons and cards can be displayed as none.
//BUG TO FIX is that when you click to submit a new student after you have expelled some then the others that were expelled will come back.








