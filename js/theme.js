const changeTheme = (e) => {
    switch (e.target.value) {
        case "light":
            document.querySelector('body').style.backgroundColor = "white";
            document.querySelector('body').style.color = "black";
            [].forEach.call(document.querySelectorAll('input'), (elem) => elem.style.color = "black");
            break;
        case "dark":
            document.querySelector('body').style.backgroundColor = "#333333";
            document.querySelector('body').style.color = "white";
            [].forEach.call(document.querySelectorAll('input'), (elem) => elem.style.color = "white");
            break;
        case "blue":
            document.querySelector('body').style.backgroundColor = "#0e134d";
            // document.querySelector('body').style.backgroundColor = "#4779a1";
            document.querySelector('body').style.color = "white";
            [].forEach.call(document.querySelectorAll('input'), (elem) => elem.style.color = "white");
            break;
    }
}


const chTheme = document.getElementById("idTheme");
chTheme.addEventListener("change", changeTheme);