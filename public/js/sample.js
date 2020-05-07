$(function(){

  setInterval(function(){
    $('#fadeInCode').fadeIn("slow");
  },2000);

  $('#introductionTsx').on('click', function(e) {
    // $('p').css('color','blue');
    $('#introductionTsCode').hide();
    $('#introductionTsxCode').show();

    $('#introductionTsx').css('background-color','#4B4F53');
    $('#introductionTsx').css('border-left','solid 3px #8BE9FD');

    $('#introductionTs').css('border-left','solid 3px #313437');
    $('#introductionTs').css('background-color','#313437');

    $('#introductionTsxTab').css('background-color','#4B4F53');
    $('#introductionTsxTab').css('border-bottom','solid 3px #8BE9FD');

    $('#introductionTsTab').css('background-color','#282A36');
    $('#introductionTsTab').css('border-bottom','solid 3px #282A36');

  });

  $('#introductionTs').on('click', function(e) {
    // $('p').css('color','red');
    $('#introductionTsxCode').hide();
    $('#introductionTsCode').show();

    $('#introductionTs').css('background-color','#4B4F53');
    $('#introductionTs').css('border-left','solid 3px #8BE9FD');

    $('#introductionTsx').css('border-left','solid 3px #313437');
    $('#introductionTsx').css('background-color','#313437');

    $('#introductionTsxTab').css('background-color','#282A36');
    $('#introductionTsxTab').css('border-bottom','solid 3px #282A36');

    $('#introductionTsTab').css('background-color','#4B4F53');
    $('#introductionTsTab').css('border-bottom','solid 3px #8BE9FD');
  });

  $('#introductionTsTab').on('click', function(e) {
    // $('p').css('color','red');
    $('#introductionTsxCode').hide();
    $('#introductionTsCode').show();

    $('#introductionTs').css('background-color','#4B4F53');
    $('#introductionTs').css('border-left','solid 3px #8BE9FD');

    $('#introductionTsx').css('border-left','solid 3px #313437');
    $('#introductionTsx').css('background-color','#313437');

    $('#introductionTsxTab').css('background-color','#282A36');
    $('#introductionTsxTab').css('border-bottom','solid 3px #282A36');

    $('#introductionTsTab').css('background-color','#4B4F53');
    $('#introductionTsTab').css('border-bottom','solid 3px #8BE9FD');
  });

  $('#introductionTsxTab').on('click', function(e) {
    // $('p').css('color','blue');
    $('#introductionTsCode').hide();
    $('#introductionTsxCode').show();

    $('#introductionTsx').css('background-color','#4B4F53');
    $('#introductionTsx').css('border-left','solid 3px #8BE9FD');

    $('#introductionTs').css('border-left','solid 3px #313437');
    $('#introductionTs').css('background-color','#313437');

    $('#introductionTsxTab').css('background-color','#4B4F53');
    $('#introductionTsxTab').css('border-bottom','solid 3px #8BE9FD');

    $('#introductionTsTab').css('background-color','#282A36');
    $('#introductionTsTab').css('border-bottom','solid 3px #282A36');

  });
});