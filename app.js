const bodyElem = document.querySelector(".body-content");
const fabElem = document.querySelector(".fab");
const titleElem = document.querySelector(".nav-title");
const titleBarRightElem = document.querySelector(".title-bar-right");
const modalRemoveElem = document.querySelector(".modal-remove");

function displayChat() {
    bodyElem.innerHTML = `
        <img class="chat-img" src="../imgs/chat-img.png">
    `;

    fabElem.classList.add("remove");
    titleElem.textContent = "chat support";
    titleBarRightElem.innerHTML = `
    <button class="modal-remove">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    `;
}

function closeModal() {
    bodyElem.innerHTML = `
    <div class="module mod-hero">
        <img src="/imgs/plant.png" alt="illustration of mom">
        <img src="/imgs/mom-sitting.png" alt="illustration of mom">
        <h1>You’re <span>on Track!</span></h1>
        <p>Your are 3 weeks & 2 days <br>in your 1st Trimester</p>
        <br>
        <p>Next Step:</p>
        <button>Screen Doulas &nbsp; ➜</button>
    </div>
    <img src="imgs/feed-scroll.png" alt="feed scroll">
    `;

    fabElem.classList.remove("remove");
    titleElem.textContent = "home";
    titleBarRightElem.innerHTML = `
    <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2" />
            <path
                d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
                stroke="#33363F" stroke-width="2" stroke-linecap="round" />
            <path d="M20 20L17 17" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        </svg>

    </button>
    <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                stroke="#33363F" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="8" r="4" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        </svg>
    </button>
    `;
}

fabElem.addEventListener("click", displayChat);
addGlobalEventListener("click", ".modal-remove", (e) => {
    closeModal(e);
});

//Event Delegation - dynamically added elements

//Event capture from document level. use event object, e.matches to target.
// document.addEventListener("click", (e) => {
//     if (e.target.matches(".modal-remove")) {
//         console.log(e.target);
//     }
// });

//Option 2 for resuable function for adding global event listeners
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    });
}

// addGlobalEventListener('click', 'button', e => {
//     console.log(e.target);
// })

//ZOOM 80%

function zoom() {
    document.body.style.zoom = "80%";
}

//CUSTOM CURSOR

// const cursorElem = document.querySelector('.tapCursor');

// const positionElem = (e) => {
//     const mouseY = e.clientY;
//     const mouseX = e.clientX;

//     const offsetX = mouseX - (window.innerWidth / 2);
//     const offsetY = mouseY - (window.innerHeight / 2);

//     cursorElem.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

// };

// window.addEventListener('mousemove', positionElem);
