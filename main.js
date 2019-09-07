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

const selectItem = houseArr[Math.floor(Math.random()*houseArr.length)];

const studentCardArr = [
    {
    firstName: 'Harry',
    lastName: 'Potter',
    assignedHouse: houseArr[Math.floor(Math.random()*houseArr.length)]
    }
];

const cardPrinter = (arr) => {
    let domString = `<div class="container">`;
    for (let i = 0; i < arr.length; i++) {
        const currentObject = arr[i];
        domString += `
        <div class="card col-4">
        <h2>${currentObject.firstName} ${currentObject.lastName}</h2>
        <h3>${currentObject.assignedHouse}</h3>
        <button type="button" class="btn btn-outline-dark" id="expelBtn">Expel</button>
        </div>
        </div>
        `
    }
    printToDom('studentCards', domString);
}



const form = document.getElementById('studentForm');
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newStudent = {};
    newStudent.firstName = `${inputFirstName.value}`;
    newStudent.lastName = `${inputLastName.value}`;
    newStudent.assignedHouse = houseArr[Math.floor(Math.random()*houseArr.length)];
    studentCardArr.push(newStudent);
    cardPrinter(studentCardArr);
});

