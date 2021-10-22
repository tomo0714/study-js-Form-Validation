// DOM
const form = document.querySelector('form');
const alerts = Array.from(document.getElementsByClassName('alert'));
const submitBtn = document.getElementById('submitBtn');
const textAlert = document.querySelector('#textSection .alert');
const textareaAlert = document.querySelector('#textareaSection .alert');
const selectAlert = document.querySelector('#selectSection .alert');
const radioAlert = document.querySelector('#radioSection .alert');
const checkboxAlert = document.querySelector('#checkboxSection .alert');

// Default
alerts.forEach(alert => {
    alert.style.display = 'none';
});

// Function
const validation = () => {

    // Variable
    let flag = true;

    // Text
    const text = document.getElementById('text');
    if(text.value === '') {
        textAlert.style.display = 'block';
        flag = false;
    } else {
        textAlert.style.display = 'none';
    }

    // Textarea
    const textarea = document.getElementById('textarea');
    if(textarea.value === '') {
        textareaAlert.style.display = 'block';
        flag = false;
    } else {
        textareaAlert.style.display = 'none';
    }

    // Select
    const select = document.getElementById('select');
    if(select.value === 'none') {
        selectAlert.style.display = 'block';
        flag = false;
    } else {
        selectAlert.style.display = 'none';
    }

    // Radio
    const radioCheck = document.querySelector('input[name="radio"]:checked');
    if(radioCheck === null) {
        radioAlert.style.display = 'block';
        flag = false;
    } else {
        radioAlert.style.display = 'none';
    }

    // Checkbox
    const checkboxCheck = document.querySelectorAll('input[name="checkbox"]:checked');
    if(checkboxCheck.length < 3) {
        checkboxAlert.style.display = 'block';
        flag = false;
    } else {
        checkboxAlert.style.display = 'none';
    }

    // Flag
    if(flag === false) {
        return false;
    }
};