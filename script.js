document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keyup", searchNews);
    }

    highlightActivePage();
});

function searchNews() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    let found = false;

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });

    let msg = document.getElementById("noResults");

    if (msg) {

        msg.style.display = found ? "none" : "block";

    }

}

function filterNews(category) {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (category === "all") {

            card.style.display = "block";

        }

        else if (card.classList.contains(category)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}

function highlightActivePage() {

    let links = document.querySelectorAll("nav a");

    links.forEach(link => {

        if (link.href === window.location.href) {

            link.classList.add("active");

        }

    });

}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}

function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields");

        return false;

    }

    alert("Form Submitted Successfully");

    return true;

}

function addToReadingList(title) {

    let list = JSON.parse(localStorage.getItem("readingList")) || [];

    list.push(title);

    localStorage.setItem("readingList", JSON.stringify(list));

    alert("Added to Reading List");

}