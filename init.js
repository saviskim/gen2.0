let clearButton = document.querySelector('#butClear');
let newGen = document.querySelector('#butGen');

newGen.addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('parentNameOutput').innerText = initPerson.parentName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('profOutput').innerText = initPerson.profession;
})

clearButton.addEventListener('click', () => {
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('parentNameOutput').innerText = "";
    document.getElementById('profOutput').innerText = "Не заданна";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('birthDateOutput').innerText = "дата рождения";

})

