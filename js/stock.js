
//wish누르면 alret로 관심상품추가됐다는 알림
let sw=false;
function wish() {
    let wish=document.querySelector('.wish');
    sw=!sw;
    if(sw) {
        alert("관심상품으로 등록되었습니다.");
    }else {
        alert("관심상품이 해제되었습니다.");
    }
}

$(function () {
    let total;
    let amount=parseInt($('#lastAmount > p').html());
    let piece=$('#optionCount > input').val();

    //옵션선택하면 옵션값이 html로 전달되고 display:block 되는명령
    $('#optionValue select').change(function () {
        let valueOp=$('select>option:selected').val();
        //alert(valueOp);
        piece=1;
        if(valueOp=='white'|| valueOp=='black') {
            $('.optionResult').css({
                visibility:'visible'
            });
            $('#stokeOptionsend').html('- '+valueOp);
            $('.total>p').html('TOTAL : ' + amount + '원(' + piece + '개)');
        }
    });

    //수량 버튼 누를때마다 가격 올라가는거
    //수량 input 태그에 값 집어넣기
    //.total에 최종 수량이랑 가격 뜨는거
 
    $('#optionCount > #optionCountP').click(function () {
        piece++;
        $('#optionCount > input').val(piece);
        total=amount*piece;
        $('.total>p').html('TOTAL : ' + total + '원(' + piece + '개)');


    });
    $('#optionCount > #optionCountM').click(function () {
        piece--;
        if(piece>0) {
            $('#optionCount > input').val(piece);
            total=amount*piece;
            $('.total>p').html('TOTAL : ' + total + '원(' + piece + '개)');

        }else {
            piece=1;
        }
    });

    //x 표시 누르면 optionResult 삭제
    $('.optionResult > #removeResult').click(function () {
        $('.optionResult').css({
            visibility:'hidden'
        });
        amount=parseInt($('#lastAmount > p').html());
        piece=0;
        total=amount*piece;
        $('#optionCount > input').val(piece);
        $('.total>p').html('TOTAL : ' + total + '원(' + piece + '개)');
    });
    
});



