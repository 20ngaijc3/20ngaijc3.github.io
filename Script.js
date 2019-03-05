var home = document.querySelector("#home");





var visiblePage = home;




function showHome() {
    if (visiblePage != home) {
        visiblePage.style.display = "none";
        home.style.display = "block";
        visiblePage = home;
    }
