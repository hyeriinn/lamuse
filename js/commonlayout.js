document.addEventListener("DOMContentLoaded", function () {
    const langTriggers = document.querySelectorAll('.filter p');

    langTriggers.forEach(p => {
        p.addEventListener('click', function () {
            const selElement = this.closest('.filter');
            if (selElement) {
                selElement.classList.toggle('on');
            }
        });
    });
});