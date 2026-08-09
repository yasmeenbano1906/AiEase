window.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-input");
    const cards = document.querySelectorAll(".finder-card");
    const filters = document.querySelectorAll(".filter");

    function filterTools() {

        let search = searchInput.value.toLowerCase();

        cards.forEach(card => {

            let name = card.querySelector("h3").textContent.toLowerCase();
            let category = card.dataset.category;

            if (name.includes(search)) {

                card.style.display = "block";

            }
            else {

                card.style.display = "none";

            }

        });

    }


    if (searchInput) {
        searchInput.addEventListener("input", searchTools);
    }

    filters.forEach(button => {

        button.addEventListener("click", () => {

            filters.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            let category = button.dataset.category;

            cards.forEach(card => {

                if (category === "all" || card.dataset.category === category) {

                    card.style.display = "block";

                }
                else {

                    card.style.display = "none";

                }

            });

        });

    });

});