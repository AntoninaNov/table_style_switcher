document.getElementById('style1').addEventListener('click', function() {
    changeTableStyle('table-style1');
});

document.getElementById('style2').addEventListener('click', function() {
    changeTableStyle('table-style2');
});

document.getElementById('style3').addEventListener('click', function() {
    changeTableStyle('table-style3');
});

document.getElementById('reset').addEventListener('click', function() {
    let table = document.querySelector('table');
    table.className = 'table-bordered'; // Clear all styles by resetting the class
});

function changeTableStyle(styleClass) {
    let table = document.querySelector('table');
    table.className = ''; // reset class
    table.classList.add(styleClass);
}