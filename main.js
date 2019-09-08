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
        <div class="card col-4 ${currentObject.assignedHouse}">
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
    newStudent.firstName = `${inputFirstName.value}`;
    newStudent.lastName = `${inputLastName.value}`;
    newStudent.assignedHouse = houseArr[Math.floor(Math.random()*houseArr.length)];
    studentCardArr.push(newStudent);
    cardPrinter(studentCardArr);
    inputFirstName.value = '';
    inputLastName.value = ''; 
    let indexedId = studentCardArr.indexOf(newStudent) + newStudent.firstName + newStudent.lastName; 
    newStudent.customIndex = indexedId;
    // document.getElementsByClassName('expel').addEventListener('click', (e) => {
    //     let currentTarget = e.target.id;
    //     if (currentTarget.includes('expel')) {
    //         let idSplit = target.split('l');
    //         const arrLocation = parseInt(idSplit[1]);
    //         studentCardArr.splice(arrLocation, 1);
    //         cardPrinter(studentCardArr);
    // })

    // document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', (e) => {
    //     let id = e.target.id;
    //     alert(id + 'sort of works');
        // alert(indexedId.parentNode);
        // for (let i =0; i < studentCardArr.length; i++) {
        //     if (studentCardArr[i].indexedId === id) {
        //         delete studentCardArr[i];
        //     }
        // }
    // }));
});








