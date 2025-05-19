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

    $('.mp_list li').on('click', function () {
        // li에서 on 제거 후, 클릭된 li에 on 추가
        $('.mp_list li').removeClass('on');
        $(this).addClass('on');

        // 클래스명 추출 (on 제외)
        const className = $(this).attr('class').split(' ').find(cls => cls !== 'on');

        // mp_right 안에 있는 div의 on 제거 후, 해당 클래스에 on 추가
        $('.mp_right > div').removeClass('on');
        $('.mp_right > .' + className).addClass('on');
    });
});