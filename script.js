var learnMoreLinks = document.querySelectorAll('.learn-more');

function handleLearnMoreClick(event) {
    event.preventDefault();
    var allContainers = document.querySelectorAll('.container');
    allContainers.forEach(function(container) {
        if (container !== event.target.parentNode.parentNode) {
            container.style.display = 'none';
        }
    });
    var newContainer = event.target.parentNode.parentNode.querySelector('.new-container');
    newContainer.style.display = 'block';
}

learnMoreLinks.forEach(function(link) {
    link.addEventListener('click', handleLearnMoreClick);
});

var mainMenuButton = document.querySelector('#mainMenu');

function handleMainMenuClick() {
    var allContainers = document.querySelectorAll('.container');
    allContainers.forEach(function(container) {
        container.style.display = 'block';
    });
    var allNewContainers = document.querySelectorAll('.new-container');
    allNewContainers.forEach(function(newContainer) {
        newContainer.style.display = 'none';
    });
}

mainMenuButton.addEventListener('click', handleMainMenuClick);