const getErrorDiv = (elem) => {
    let rez = elem.parentElement.querySelector(".form__error");
    if (!rez) rez = elem.parentElement.parentElement.querySelector(".form__error");
    return rez;
};

const addDivError = (elem, message) => {
    getErrorDiv(elem).innerHTML = message;
};

const validateAll = () => {

    let isValid = 0;

    const chekedValuesAll = document.getElementsByClassName("isRequered");
    for (let i = 0; i < chekedValuesAll.length; i++) {
        isValid += checkField(chekedValuesAll[i]);
    }
    isValid += checkField(document.getElementById('idPrivacy'));


    if (!document.querySelector('input[name="nameGender"]:checked')) {
        addDivError(document.querySelector('input[name="nameGender"'), "Поле обязательно для заполнения");
        isValid = false;
    }

    isValid += checkField(document.getElementById('idBirthDay'));
    isValid += checkField(document.getElementById('idEmail'));
    isValid += checkField(document.getElementById('idEmailCheck'));
    isValid += checkField(document.getElementById('idPassword'));
    isValid += checkField(document.getElementById('idPasswordCheck'));

    if (isValid == 0) {
        alert(`Добро пожаловать, ${document.getElementById('idLogin').value}`);
    } else {
        alert('Не все поля заполнены корректно!');
    }

}

const checkField = (field) => {
    let numerr = 0;
    switch (field.id) {
        case "idEmail":
            numerr += !isValidEmail(field);
            break;
        case "idEmailCheck":
            numerr += !isEqualFields(document.getElementById('idEmail'), document.getElementById('idEmailCheck'), "E-mail не совпадает")
            break;
        case "idPassword":
            numerr += !isValidPass(field);
            break;
        case "idPasswordCheck":
            numerr += !isEqualFields(document.getElementById('idPassword'), document.getElementById('idPasswordCheck'), "Пароль не совпадает")
            break;
        case "idBirthDay":
            numerr += !isValidAge(field);
            break;
        case "idPrivacy":
            if (field.checked) {
                addDivError(field, "");
            } else {
                numerr++;
                addDivError(field, "Нужно принять политику конфиденциальности");
            };
            break;
        default:
            addDivError(field, "");

    }
    if (!field.value && field.classList.contains("isRequered")) {
        numerr++;
        addDivError(field, "Поле обязательно для заполнения");
    };

    return numerr;
};


const buttonSubmit = document.getElementById("idSubmitRegistration");
buttonSubmit.addEventListener("click", validateAll);


const login = document.getElementById('formRegistration');
login.addEventListener("keyup", (event) => checkField(event.target));
login.addEventListener("change", (event) => checkField(event.target));