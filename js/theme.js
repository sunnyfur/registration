const changeTheme = (e) => {
    switch (e.target.value) {
        case "light":
            document.querySelector('body').style.backgroundColor = "white";
            break;
        case "dark":
            document.querySelector('body').style.backgroundColor = "black";
            break;
        case "blue":
            document.querySelector('body').style.backgroundColor = "blue";
            break;
    }
}


const chTheme = document.getElementById("idTheme");
chTheme.addEventListener("change", changeTheme);