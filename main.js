//*************  NOTES  *********************//

//TODO: Reprint the cards...tip from Greg..

//TODO: BUG TO FIX is that when you click to submit a new student after you have expelled some then the others that were expelled will come back.

// 1. When you click the button if student is not expelled print to Dom
// 2. If the student is expelled display = none
// 3. When you click the button expel the student and display = none

//*****************************************//


const houseArr = [
    "Gryffindor",
    "Hufflepuff",
    "Slytherin",
    "Ravenclaw"
    ];

const studentCardArr = [];
const form = document.getElementById('studentForm');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');

//FUNCTIONS//
const toggleFormFunction = () => {
    const selectStudentForm = document.getElementById('studentForm');
    selectStudentForm.style.display = 'none';
    document.getElementById('getStartedBtn').addEventListener('click', () => {
        selectStudentForm.style.display = 'block';
        const selectJumbo = document.getElementsByClassName('jumbotron');
        selectJumbo[0].classList.add('movedOut');
    });
};

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};

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

const createNewStudent = () => {
    let newStudent = {}; 
    newStudent.firstName = `${inputFirstName.value}`; //adds to object
    newStudent.lastName = `${inputLastName.value}`;  //adds to object
    newStudent.assignedHouse = houseArr[Math.floor(Math.random()*houseArr.length)]; //adds to object
    newStudent.expelled = false;
    studentCardArr.push(newStudent); //pushes new student object to main student array
    // cardPrinter(studentCardArr); //prints the cards
    inputFirstName.value = ''; //clears the input field
    inputLastName.value = '';  //clears the input field
}

const assignExpelListener = () => {
    let myNodeList = document.querySelectorAll('.expel');
    for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].addEventListener('click', (e) => {
            e.stopPropagation();
            let target = e.target.parentNode;
            target.style.display = 'none';
            studentCardArr[i].expelled = true;
        //TODO: Add an option to add a class here for voldemort's army//
        });

    }; 
    
};

const reprinter = (arr) => {
    let domString = `

        `;
    for (let i = 0; i < arr.length; i++) {
        const currentObject = arr[i]; //select each object in array
        // if they are not expelled
        if (currentObject.expelled === false) {
        // add to String
            domString += `
            <div class="card col-12 col-md-6 col-lg-4 ${currentObject.assignedHouse}">
            <h2>${currentObject.firstName} ${currentObject.lastName}</h2>
            <h3>${currentObject.assignedHouse}</h3>
            <button type="button" class="btn btn-outline-dark expel" id="expel${i}">Expel</button>
            <h6 style="display: none">${currentObject.expelled}</h6>
            </div>
            `
        }
        
        printToDom('studentCards', domString);        
    };
}


const addListenersAndPrint = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents refresh of page
        // e.stopPropagation();
        createNewStudent();
        reprinter(studentCardArr);
        assignExpelListener();
        
    });
};

toggleFormFunction();
addListenersAndPrint();

// const reprinter = (arr) => {
//     let domString = `
//         <div class="container">
//         <div class="row">`;
//     for (let i = 0; i < arr.length; i++) {
//         const currentObject = arr[i]; //select each object in array
//         // if they are not expelled
//         if (currentObject.expelled == false) {
//         // add to String
//             domString += `
//             <div class="card col-12 col-md-6 col-lg-4 ${currentObject.assignedHouse}">
//             <h2>${currentObject.firstName} ${currentObject.lastName}</h2>
//             <h3>${currentObject.assignedHouse}</h3>
//             <button type="button" class="btn btn-outline-dark expel" id="expel${i}">Expel</button>
//             <h6 style="display: none">${currentObject.expelled}</h6>
//             </div>
//             `
//         }
//         domString += `</div></div>`
//         printToDom('studentCards', domString);        
//     };
// }

// reprinter(studentCardArr);



//****TESTING FUNCTIONS****//
// const eraseCards = () => {
//     const hiddenElementCollection = document.getElementsByTagName('h6');//this will provide h6 element collection
//     for (let i = 0; i < hiddenElementCollection.length; i++) {
//         const hiddenElement = hiddenElementCollection[i];
//         if (hiddenElement.innerText = "true") {
//             const findParent = hiddenElement.parentNode;
//             findParent.style.display = 'none';
//         };
//     };
// };

// eraseCards(); //TODO: When i run the eraseCards function in the console it erases all of the cards
//*********//

