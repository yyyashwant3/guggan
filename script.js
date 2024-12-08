document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const modalOverlay = document.getElementById("modalOverlay");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    const promiseBtn = document.getElementById("promiseBtn");
    const noBtn = document.getElementById("noBtn");

    const specialItems = ["Softie", "Jelly", "Dairy Milk", "Snickers", "Maggi", "Appy Fizz", "7 Up"];
    const meaningfulMessages = [
        "You are my sunshine.",
        "You make life beautiful.",
        "You are the best thing that's ever happened to me.",
        "I adore you more than anything.",
        "You make my heart full.",
        "Every day is brighter with you in it.",
        "You are my one and only.",
        "Loving you is my favorite thing.",
        "You are perfect to me.",
        "My love for you is endless.",
        "You are my safe haven.",
        "You make me believe in magic.",
        "You are my forever.",
        "Thank you for being mine.",
        "You complete me in every way.",
        "You are my dream come true.",
        "Every moment with you is priceless.",
        "You are my soulmate.",
        "Life is better with you in it.",
    ];

    function createDay(day) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.addEventListener("click", () => handleDayClick(day));
        return dayDiv;
    }

    function handleDayClick(day) {
        if (day === 25) {
            showModal("Wishing you a beautiful New Year, my Boo! Let's make this year unforgettable together. ❤️");
        } else if (specialItems[day - 1]) {
            sendEmail(specialItems[day - 1]);
            showModal(`Surprise! Today is for ${specialItems[day - 1]}! 🎉`);
        } else {
            showModal(meaningfulMessages[(day - 1) % meaningfulMessages.length]);
        }
    }

    function sendEmail(content) {
        const mailToLink = `mailto:skynet43210@gmail.com?subject=Advent Calendar Surprise&body=${encodeURIComponent(content)}`;
        window.location.href = mailToLink;
    }

    function showModal(message) {
        modalText.textContent = message;
        modalOverlay.style.display = "flex";
    }

    promiseBtn.addEventListener("click", () => {
        modalOverlay.style.display = "none";
    });

    noBtn.addEventListener("click", () => {
        modalText.textContent = "Are you sure, Bubban?";
        noBtn.textContent = "Yes";
        noBtn.addEventListener("click", () => {
            modalOverlay.style.display = "none";
        });
    });

    for (let i = 1; i <= 25; i++) {
        calendar.appendChild(createDay(i));
    }
});

