const getErrorDiv = (elem) => {
    let rez = elem.parentElement.querySelector(".form__error");
    if (!rez) rez = elem.parentElement.parentElement.querySelector(".form__error");
    return rez;
}

const addDivError = (elem, message) => {

    getErrorDiv(elem).innerHTML += message + '\n';
}

const validateAll = () => {

    let isValid = true;
    // очистить все поля
    [].forEach.call(document.getElementsByClassName("form__error"), (elem) => elem.innerHTML = "");
    // поля, обязательные для заполнения
    const chekedValuesAll = document.getElementsByClassName("isRequered");

    for (let i = 0; i < chekedValuesAll.length; i++) {
        if (!chekedValuesAll[i].value) {
            addDivError(chekedValuesAll[i], "Поле обязательно для заполнения");
            isValid = false;
        }
    }
    let d = new Date();
    d = d.setYear(d.getFullYear() - 18);
    console.log(d);

    if (document.getElementById('idBirthDay').value && (d < new Date(document.getElementById('idBirthDay').value))) {
        addDivError(document.getElementById('idBirthDay'), "Регистрация только с 18 лет");
    }

    if (!document.querySelector('input[name="nameGender"]:checked')) {
        addDivError(document.querySelector('input[name="nameGender"'), "Поле обязательно для заполнения");
    }


    if (document.getElementById('idEmail').value != document.getElementById('idEmailCheck').value) {
        addDivError(document.getElementById('idEmailCheck'), "E-mail не совпадает");
        isValid = false;
    }
    if (document.getElementById('idPassword').value != document.getElementById('idPasswordCheck').value) {
        addDivError(document.getElementById('idPasswordCheck'), "Пароль не совпадает");
        isValid = false;
    }

    if (!document.getElementById('idPrivacy').checked) {
        addDivError(document.getElementById('idPrivacy'), "Нужно принять политику конфиденциальности");
    };


    if (isValid) {
        alert(`Добро пожаловать, ${document.getElementById('idLogin').value}`);
    } else {
        alert('Не все поля заполнены корректно!');
    }

}

const checkOnline = (event) => {
    // alert(event.target.value);


    if (event.target.value != "") {
        getErrorDiv(event.target).innerHTML = "";
    };

}

const buttonSubmit = document.getElementById("idSubmitRegistration");
buttonSubmit.addEventListener("click", validateAll);



const login = document.getElementById('formRegistration');
login.addEventListener("keyup", checkOnline);