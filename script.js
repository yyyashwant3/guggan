document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const modalOverlay = document.getElementById("modalOverlay");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    const promiseBtn = document.getElementById("promiseBtn");
    const noBtn = document.getElementById("noBtn");

    const messages = {
        special: [
            "Softie", "Jelly", "Dairy Milk", "Snickers", "Maggi", "Appy Fizz", "7 Up"
        ],
        heartfelt: [
            "You are the light of my life.",
            "Every moment with you is magical.",
            "Thank you for being my everything.",
            "You make my world brighter.",
            "Loving you is the easiest thing I've ever done.",
            "You are my forever and always.",
            "Every day, I fall more in love with you.",
            "You are my reason to smile.",
            "You make life so beautiful.",
            "I can't wait for all the memories we will create together.",
            "You are my best friend and soulmate.",
            "My heart is full because of you.",
            "You are my dream come true.",
            "I adore you more than words can express.",
            "You complete me in every way.",
            "You make every day worth living.",
            "I cherish you more than anything.",
            "You are my everything, Boo.",
            "Every little thing about you makes me happy.",
        ]
    };

    function createDay(num) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = num;
        dayDiv.addEventListener("click", () => handleDayClick(num));
        return dayDiv;
    }

    function handleDayClick(day) {
        if (day === 25) {
            showSpecialModal("Wishing you the happiest New Year, my love! You are my forever and always. Let's make this year magical together. ❤️");
        } else if (messages.special.includes(messages.heartfelt[day % messages.heartfelt.length])) {
            sendEmail(messages.special[day - 1]);
            showSpecialModal(`Surprise! Today is for ${messages.special[day - 1]}! ❤️`);
        } else {
            showSpecialModal(messages.heartfelt[day % messages.heartfelt.length]);
        }
    }

    function sendEmail(content) {
        const mailToLink = `mailto:skynet43210@gmail.com?subject=Advent Calendar Surprise&body=${encodeURIComponent(content)}`;
        window.location.href = mailToLink;
    }

    function showSpecialModal(message) {
        modalText.textContent = message;
        modalOverlay.style.display = "flex";
        promiseBtn.style.display = "none";
        noBtn.textContent = "Close";
        noBtn.addEventListener("click", () => {
            modalOverlay.style.display = "none";
        });
    }

    for (let i = 1; i <= 25; i++) {
        calendar.appendChild(createDay(i));
    }

    modalOverlay.style.display = "flex";
    promiseBtn.addEventListener("click", () => modalOverlay.style.display = "none");
    noBtn.addEventListener("click", () => {
        modalText.textContent = "Are you sure, Bubban?";
        promiseBtn.textContent = "I promise";
        noBtn.textContent = "No";
        noBtn.addEventListener("click", () => modalOverlay.style.display = "none");
        promiseBtn.addEventListener("click", () => modalOverlay.style.display = "none");
    });
});
