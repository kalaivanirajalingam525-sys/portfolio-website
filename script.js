// Contact form

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        this.reset();
    });

    fetch("http://localhost:5000/api/projects")
    .then(response => response.json())
    .then(projects => {
        console.log("Projects from backend:", projects);
    })
    .catch(error => {
        console.log("Backend connection error:", error);
    });