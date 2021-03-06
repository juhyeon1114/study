

$(document).on('change', 'input[type=file]', function(){




 var width = $(this).attr('data-width');

 var height = $(this).attr('data-height');

 var target = $(this);

 

 if(window.FileReader){ //FileReader를 지원하는 브라우저의 경우 IE 10이상, 크롬..
   var reader = new FileReader();
       reader.onload = function (e) {
           $('body').append('<img src="" id="temp_img" style="display:none;" />');  //보이지 않는 임시 img 태그를 생성.
           $img = $('#temp_img').attr('src', e.target.result);                          //파일을 선택했을 경우 정보를 $img 객체에 저장
           if($img.width() != $width || $img.height() != $height){                  //가로 세로 사이즈 비교 후 반환
                alert('지정된 크기와 맞지 않습니다.('+$width + 'x'+ $height +')');
                $target.val('');
                $('#temp_img').remove(); //위에서 생성한 임시 img 태그 삭제
                return;
            }
      };
      reader.readAsDataURL($(this)[0].files[0]);  //파일을 img 태그에 보여줄 수 있도록 base64로 url을 생성합니다.
 } else {                                               //FileReader를 지원하지 않는 브라우저의 경우 IE 9 이하
    $(this)[0].select();
    var src = document.selection.createRange().text;
    $('body').append('<img src="" id="temp_img" style="display:none;" />');
    $img = $('#temp_img').attr('src', src);
    $('#temp_img').remove();
    if($img.width() != $width || $img.height() != $height){
        alert('지정된 크기와 맞지 않습니다.('+$width + 'x'+ $height +')');
        $(this).val('');
        return;
    }
 }

 $('#temp_img').remove();

});