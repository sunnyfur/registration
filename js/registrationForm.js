const getErrorDiv = (elem) => {
    let rez = elem.parentElement.querySelector(".form__error");
    if (!rez) rez = elem.parentElement.parentElement.querySelector(".form__error");
    return rez;
};

const addDivError = (elem, message) => {
    getErrorDiv(elem).innerHTML = message;
};


const validateAll = () => {

    let isValid = true;
    // очистить все поля
    // [].forEach.call(document.querySelectorAll("form__error"), (elem) => elem.innerHTML = "");

    // поля, обязательные для заполнения
    const chekedValuesAll = document.getElementsByClassName("isRequered");
    for (let i = 0; i < chekedValuesAll.length; i++) {
        if (!chekedValuesAll[i].value) {
            addDivError(chekedValuesAll[i], "Поле обязательно для заполнения");
            isValid = false;
        }
    }

    if (!isValidAge(document.getElementById('idBirthDay'))) isValid = false;

    if (!document.querySelector('input[name="nameGender"]:checked')) {
        addDivError(document.querySelector('input[name="nameGender"'), "Поле обязательно для заполнения");
        isValid = false;
    }
    if (!isValidEmail(document.getElementById('idEmail'))) {
        isValid = false;
    } else {
        if (!isEqualFields(document.getElementById('idEmail'), document.getElementById('idEmailCheck'), "E-mail не совпадает")) isValid = false;
    }

    if (!isValidPass(document.getElementById('idPassword'))) {
        isValid = false;
    } else {
        if (!isEqualFields(document.getElementById('idPassword'), document.getElementById('idPasswordCheck'), "Пароль не совпадает")) isValid = false;
    }

    if (!document.getElementById('idPrivacy').checked) {
        addDivError(document.getElementById('idPrivacy'), "Нужно принять политику конфиденциальности");
        isValid = false;
    };

    if (isValid) {
        alert(`Добро пожаловать, ${document.getElementById('idLogin').value}`);
    } else {
        alert('Не все поля заполнены корректно!');
    }

}

const checkOnline = (event) => {

    switch (event.target.id) {
        case "idEmail":
            isValidEmail(event.target);
            break;
        case "idEmailCheck":
            isEqualFields(document.getElementById('idEmail'), document.getElementById('idEmailCheck'), "E-mail не совпадает")
            break;
        case "idPassword":
            isValidPass(event.target);
            break;
        case "idPasswordCheck":
            isEqualFields(document.getElementById('idPassword'), document.getElementById('idPasswordCheck'), "Пароль не совпадает")
            break;
        case "idBirthDay":
            isValidAge(event.target);
            break;
        default:
            addDivError(event.target, "");

    }
}

const buttonSubmit = document.getElementById("idSubmitRegistration");
buttonSubmit.addEventListener("click", validateAll);



const login = document.getElementById('formRegistration');
login.addEventListener("keyup", checkOnline);
login.addEventListener("change", checkOnline);