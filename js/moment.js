window.onload=function () {
    //salePopup 띄우기
    window.open("salePopup.html", "salePopup","width=470, height=470, resizable=no ");
}
$(function () {
    //banner slide start
    $('.slider').append($('.slider_image').first().clone());
    $('.slider').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    let auto;
    moveSlider(index);
    autoSlider();
    $('.control_button').click(function (){
        index=$(this).index();
        moveSlider(index+1);
    });
    $('.left_control').click(function () {
        if(index > 1 ) {
            index--;
            moveSlider(index);
        }else {
            $('.slider').css('left',-5200);
            index=3;
            moveSlider(index);
        }
    });
    $('.right_control').click(function () {
        if(index < 3 ) {
            index++;
            moveSlider(index);
        }else {
            $('.slider').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    $('.banner').hover(function () {
        clearInterval(auto);
    },function () {
        autoSlider();
    });
    function moveSlider(index) {
        $('.slider').animate({
            left:-(index*1300)
        },'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index-1).addClass('active');
    }
    //자동슬라이드
    function autoSlider () {
        auto=setInterval(function () {
            $('.right_control').trigger('click'); 
        },3000);
    }
    //banner slide finish

    //weeklybest text animation start
    $('.weeklyImg .weeklyBig').hover(function () {
        $(this).find('.caption').animate({
            top:0
        },'fast');
    },function () {
        $(this).find('.caption').animate({
            top:395
        },'fast');
    });
    $('.weeklyImg .weeklySmall').hover(function () {
        $(this).find('.caption').animate({
            top:0
        },'fast');
    },function () {
        $(this).find('.caption').animate({
            top:195
        },'fast');
    });
    //weeklybest text animation finish

});
//#wish 색 빨간색으로 고정, alert로 위시리스트에 담겼습니다 뜨기(2초뒤에 사라짐)
let sw=[false,false,false,false,false,false];
function like(i) {
    let wish=document.querySelector('.wish'+i);
    sw[i]=!sw[i];
    if(sw[i]) {
        wish.style.color='red';
        alert("관심상품으로 등록되었습니다.");
    }else {
        wish.style.color='#999';
        alert("관심상품이 해제되었습니다.");
    }
}

