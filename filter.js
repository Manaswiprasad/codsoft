function filterProjects() {
    let searchInput = document.getElementById("searchBar").value.toLowerCase();
    let projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        let text = project.innerText.toLowerCase();
        project.style.display = text.includes(searchInput) ? "block" : "none";
    });
}
