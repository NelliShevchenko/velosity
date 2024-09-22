//TABS

const tabsBtns = document.querySelectorAll('.tabs__nav button');
const tabsItems = document.querySelectorAll('.tabs__item');

// Function to hide all tabs and remove the 'active' class from all buttons
function hideTabs() {
    tabsItems.forEach(item => item.classList.add('hide')); // Add 'hide' class to all tab items
    tabsBtns.forEach(item => item.classList.remove('active')); // Remove 'active' class from all buttons
}

// Function to show a specific tab and make the corresponding button active
function showTab(index) {
    tabsItems[index].classList.remove('hide'); // Remove 'hide' class from the selected tab item
    tabsBtns[index].classList.add('active'); // Add 'active' class to the selected button
}

// Hide all tabs initially, then show the first tab by default
hideTabs();
showTab(0);

// Add event listeners to all tab buttons
tabsBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideTabs(); // Hide all tabs
        showTab(index); // Show the clicked tab
    });
});

// ANCHORS

const anchors = document.querySelectorAll('.header__nav a');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior (page jump)

        const id = anchor.getAttribute('href'); // Get the href attribute
        const elem = document.querySelector(id); // Find the target element by id

        if (elem) { // Check if element exists
            window.scroll({
                top: elem.offsetTop - 80, // Offset by 80px (adjust as needed)
                behavior: 'smooth' // Smooth scroll
            });
        }
    });
});
