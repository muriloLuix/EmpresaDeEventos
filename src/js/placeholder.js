document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.getElementById('datepicker');
    const placeholder = document.querySelector('.placeholder');

    dateInput.addEventListener('change', function () {
        if (this.value !== '') {
            placeholder.style.opacity = '0';
        } else {
            placeholder.style.opacity = '1';
        }
    });
});