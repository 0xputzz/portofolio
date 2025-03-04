document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("click", function () {
            alert(`Anda mengklik proyek: ${this.querySelector("h3").innerText}`);
        });
    });

    const emailLink = document.querySelector("footer a");
    emailLink.addEventListener("mouseover", function () {
        this.style.color = "#ff9900";
    });

    emailLink.addEventListener("mouseout", function () {
        this.style.color = "#00ff99";
    });
});
