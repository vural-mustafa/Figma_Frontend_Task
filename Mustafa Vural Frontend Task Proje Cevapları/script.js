document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            pages.forEach(page => {
                page.classList.add("hidden");
                if (page.id === target) {
                    page.classList.remove("hidden");
                }
            });

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});