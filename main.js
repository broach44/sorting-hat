const selectStudentForm = document.getElementById('studentForm');
selectStudentForm.style.display = 'none';

document.getElementById('getStartedBtn').addEventListener('click', () => {
    selectStudentForm.style.display = 'block';
});

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
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

cardPrinter(studentCardArr);

const firstNameInput = document.getElementById('firstName').value;
const lastNameInput = document.getElementById('lastName').value;

const sortStudent = document.getElementById('sortStudentBtn');
sortStudent.addEventListener('click', (e) => {
    alert('clicked');
});

