const isEqualFields = (field1, field2, textError) => {
    if (field1.value != field2.value) {
        addDivError(field2, textError);
        return false;
    } else {
        addDivError(field2, "");
        return true;
    }
};

const isValidAge = (birthday) => {
    let d = new Date();
    d = d.setYear(d.getFullYear() - 18);
    if (birthday.value && (d < new Date(birthday.value))) {
        addDivError(birthday, "Регистрация только с 18 лет");
        return false;
    }
    return true;
};

const isValidEmail = (email) => {
    const validEmail = /[a-zA-Z_\d\.-]+@[a-zA-Z_\-]+(\.[a-zA-Z]+){1,6}/;
    if (!validEmail.test(email.value)) {
        addDivError(email, "Не корректно введен E-mail");
        return false;
    } else {
        addDivError(email, "");
        return true;
    }
};

const isValidPass = (pass) => {
    const validpass = /(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[^\da-zA-Zа-яА-Я\s])(?!.*\s).{8,}/;
    if (!validpass.test(pass.value)) {
        addDivError(pass, "Пароль должен быть больше 8 знаков, содержать хотя бы одну заглавную букву, одну цифру и спец символ");
        return false;
    } else {
        addDivError(pass, "");
        return true;
    }
};