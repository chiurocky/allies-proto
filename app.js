const bodyElem = document.querySelector(".body-content");
const fabElem = document.querySelector(".fab");
const titleElem = document.querySelector(".nav-title");
const titleBarRightElem = document.querySelector(".title-bar-right");
const modalRemoveElem = document.querySelector(".modal-remove");

function revertHomeNav() {
    fabElem.classList.add("remove");
    titleBarRightElem.innerHTML = `
    <button class="modal-remove">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    `;
}

function displayChat() {
    bodyElem.innerHTML = `
        <img class="modals chat" src="../imgs/chat.png">
    `;
    titleElem.textContent = "chat";
    revertHomeNav();
}

function displaySearch() {
    bodyElem.innerHTML = `
        <img class="modals search-scroll" src="../imgs/search.png">
    `;
    titleElem.textContent = "search";
    revertHomeNav();
}

function displayAllies() {
    bodyElem.innerHTML = `
        <img class="modals your-corner" src="../imgs/your-corner.png">
    `;
    titleElem.textContent = "your allies";
    revertHomeNav();
}

function closeModal() {
    bodyElem.innerHTML = `
    <img class="hero-img" src="../imgs/hero.png" alt="feed scroll">
    <img src="imgs/feed-scroll.png" alt="feed scroll">
    `;

    fabElem.classList.remove("remove");
    titleElem.textContent = "home";
    titleBarRightElem.innerHTML = `
    <button class="search-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2" />
            <path
                d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
                stroke="#33363F" stroke-width="2" stroke-linecap="round" />
            <path d="M20 20L17 17" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        </svg>

    </button>
    <button class="chat-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M19.3259 5.77772L18.4944 6.33329L18.4944 6.33329L19.3259 5.77772ZM19.3259 16.2223L18.4944 15.6667L18.4944 15.6667L19.3259 16.2223ZM18.2223 17.3259L17.6667 16.4944L17.6667 16.4944L18.2223 17.3259ZM14 17.9986L13.9956 16.9986C13.4451 17.001 13 17.4481 13 17.9986H14ZM14 18L14.8944 18.4472C14.9639 18.3084 15 18.1552 15 18H14ZM10 18H9C9 18.1552 9.03615 18.3084 9.10557 18.4472L10 18ZM10 17.9986H11C11 17.4481 10.5549 17.001 10.0044 16.9986L10 17.9986ZM5.77772 17.3259L6.33329 16.4944L6.33329 16.4944L5.77772 17.3259ZM4.67412 16.2223L5.50559 15.6667L5.50559 15.6667L4.67412 16.2223ZM4.67412 5.77772L5.50559 6.33329L5.50559 6.33329L4.67412 5.77772ZM5.77772 4.67412L6.33329 5.50559L6.33329 5.50559L5.77772 4.67412ZM18.2223 4.67412L17.6667 5.50559L17.6667 5.50559L18.2223 4.67412ZM21 11C21 9.61635 21.0012 8.50334 20.9106 7.61264C20.8183 6.70523 20.6225 5.91829 20.1573 5.22215L18.4944 6.33329C18.7034 6.64604 18.8446 7.06578 18.9209 7.81505C18.9988 8.58104 19 9.57473 19 11H21ZM20.1573 16.7779C20.6225 16.0817 20.8183 15.2948 20.9106 14.3874C21.0012 13.4967 21 12.3836 21 11H19C19 12.4253 18.9988 13.419 18.9209 14.1849C18.8446 14.9342 18.7034 15.354 18.4944 15.6667L20.1573 16.7779ZM18.7779 18.1573C19.3238 17.7926 19.7926 17.3238 20.1573 16.7779L18.4944 15.6667C18.2755 15.9943 17.9943 16.2755 17.6667 16.4944L18.7779 18.1573ZM14.0044 18.9986C15.0785 18.9939 15.9763 18.9739 16.7267 18.8701C17.4931 18.7642 18.1699 18.5636 18.7779 18.1573L17.6667 16.4944C17.3934 16.6771 17.0378 16.8081 16.4528 16.889C15.8518 16.9721 15.0792 16.9939 13.9956 16.9986L14.0044 18.9986ZM15 18V17.9986H13V18H15ZM13.7889 20.6584L14.8944 18.4472L13.1056 17.5528L12 19.7639L13.7889 20.6584ZM10.2111 20.6584C10.9482 22.1325 13.0518 22.1325 13.7889 20.6584L12 19.7639L12 19.7639L10.2111 20.6584ZM9.10557 18.4472L10.2111 20.6584L12 19.7639L10.8944 17.5528L9.10557 18.4472ZM9 17.9986V18H11V17.9986H9ZM5.22215 18.1573C5.83014 18.5636 6.50685 18.7642 7.2733 18.8701C8.02368 18.9739 8.92154 18.9939 9.99564 18.9986L10.0044 16.9986C8.92075 16.9939 8.14815 16.9721 7.54716 16.889C6.96223 16.8081 6.60665 16.6771 6.33329 16.4944L5.22215 18.1573ZM3.84265 16.7779C4.20744 17.3238 4.6762 17.7926 5.22215 18.1573L6.33329 16.4944C6.00572 16.2755 5.72447 15.9943 5.50559 15.6667L3.84265 16.7779ZM3 11C3 12.3836 2.99879 13.4967 3.0894 14.3874C3.18171 15.2948 3.3775 16.0817 3.84265 16.7779L5.50559 15.6667C5.29662 15.354 5.15535 14.9342 5.07913 14.1849C5.00121 13.419 5 12.4253 5 11H3ZM3.84265 5.22215C3.3775 5.91829 3.18171 6.70523 3.0894 7.61264C2.99879 8.50334 3 9.61635 3 11H5C5 9.57473 5.00121 8.58104 5.07913 7.81505C5.15535 7.06578 5.29662 6.64604 5.50559 6.33329L3.84265 5.22215ZM5.22215 3.84265C4.6762 4.20744 4.20744 4.6762 3.84265 5.22215L5.50559 6.33329C5.72447 6.00572 6.00572 5.72447 6.33329 5.50559L5.22215 3.84265ZM11 3C9.61635 3 8.50334 2.99879 7.61264 3.0894C6.70523 3.18171 5.91829 3.3775 5.22215 3.84265L6.33329 5.50559C6.64604 5.29662 7.06578 5.15535 7.81505 5.07913C8.58104 5.00121 9.57473 5 11 5V3ZM13 3H11V5H13V3ZM18.7779 3.84265C18.0817 3.3775 17.2948 3.18171 16.3874 3.0894C15.4967 2.99879 14.3836 3 13 3V5C14.4253 5 15.419 5.00121 16.1849 5.07913C16.9342 5.15535 17.354 5.29662 17.6667 5.50559L18.7779 3.84265ZM20.1573 5.22215C19.7926 4.6762 19.3238 4.20744 18.7779 3.84265L17.6667 5.50559C17.9943 5.72447 18.2755 6.00572 18.4944 6.33329L20.1573 5.22215Z"
        fill="#33363F" />
    <circle cx="16" cy="11" r="1" fill="#33363F" stroke="#33363F" stroke-linecap="round" />
    <circle cx="12" cy="11" r="1" fill="#33363F" stroke="#33363F" stroke-linecap="round" />
    <circle cx="8" cy="11" r="1" fill="#33363F" stroke="#33363F" stroke-linecap="round" />
</svg>
    </button>
    `;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        if (button.classList.contains('search-btn')) {
            button.addEventListener('click', displaySearch)
        } else {
            button.addEventListener('click', displayChat)
        }
    })

}

fabElem.addEventListener("click", displayAllies);
addGlobalEventListener("click", ".modal-remove", (e) => {
    closeModal(e);
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    if (button.classList.contains('search-btn')) {
        button.addEventListener('click', displaySearch)
    } else {
        button.addEventListener('click', displayChat)
    }
})


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
