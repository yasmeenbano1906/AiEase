/* =====================================================
   AI TOOLS SEARCH & FILTER
===================================================== */

const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const toolCards = document.querySelectorAll(".tool-card");


let currentFilter = "all";


function filterTools() {

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    toolCards.forEach(card => {

        const name = card.dataset.name.toLowerCase();

        const categories = card.dataset.category
            .toLowerCase();

        const matchesSearch =
            name.includes(searchTerm) ||
            categories.includes(searchTerm);

        const matchesFilter =
            currentFilter === "all" ||
            categories.includes(currentFilter);

        if (matchesSearch && matchesFilter) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}


/* SEARCH */

if (searchInput) {

    searchInput.addEventListener("input", filterTools);

}


/* FILTER BUTTONS */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterTools();

    });

});

