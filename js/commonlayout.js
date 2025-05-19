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

    $(function () {
        $('.list_right ul li').hover(
            function () {
                const className = $(this).attr('class');
                $('.list_left img').removeClass('active');
                $('.list_left img.' + className).addClass('active');
            },
            function () {
                $('.list_left img').removeClass('active'); // 마우스가 떠났을 때 다시 숨김 처리
            }
        );
    });
});