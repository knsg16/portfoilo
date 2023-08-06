$(function(){

  var isDisplay = true
  setInterval(function(){
    if(isDisplay){
      $('#js-target').t({
        speed: 1,
        fin:function(_elm){
          isDisplay = false;
        }
      });
    }
  },10);


  $('#introductionTsx').on('click', function(e) {
    $('#introductionTsCode').hide();
    $('#introductionTsxCode').show();

    $('#introductionTsx').css('border-left','solid 3px #8BE9FD');

    $('#introductionTs').css('border-left','solid 3px #313437');
    $('#introductionTs').css('background-color','#313437');

    $('#introductionTsxTab').css('border-bottom','solid 3px #8BE9FD');

    $('#introductionTsTab').css('border-bottom','solid 3px #282A36');
  });

  $('#introductionTs').on('click', function(e) {
    $('#introductionTsxCode').hide();
    $('#introductionTsCode').show();

    $('#introductionTs').css('border-left','solid 3px #8BE9FD');

    $('#introductionTsx').css('border-left','solid 3px #313437');
    $('#introductionTsx').css('background-color','#313437');

    $('#introductionTsxTab').css('border-bottom','solid 3px #282A36');

    $('#introductionTsTab').css('border-bottom','solid 3px #8BE9FD');
  });

  $('#introductionTsTab').on('click', function(e) {
    // $('p').css('color','red');
    $('#introductionTsxCode').hide();
    $('#introductionTsCode').show();

    $('#introductionTs').css('border-left','solid 3px #8BE9FD');

    $('#introductionTsx').css('border-left','solid 3px #313437');
    $('#introductionTsx').css('background-color','#313437');

    $('#introductionTsxTab').css('border-bottom','solid 3px #282A36');

    $('#introductionTsTab').css('border-bottom','solid 3px #8BE9FD');
  });

  $('#introductionTsxTab').on('click', function(e) {
    $('#introductionTsCode').hide();
    $('#introductionTsxCode').show();

    $('#introductionTsx').css('border-left','solid 3px #8BE9FD');

    $('#introductionTs').css('border-left','solid 3px #313437');
    $('#introductionTs').css('background-color','#313437');

    $('#introductionTsxTab').css('border-bottom','solid 3px #8BE9FD');

    $('#introductionTsTab').css('border-bottom','solid 3px #282A36');

  });

  $('.close').on('click', function(e) {
    alert('消さないで〜〜');
  });
});