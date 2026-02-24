function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("click", function(e) {
    if (e.target.id === "logout") {
        localStorage.removeItem("session");
        window.location.href = "login.html";
    }
});

loadComponent("header-container", "header.html");
loadComponent("footer-container", "footer.html");