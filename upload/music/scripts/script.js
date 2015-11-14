$(document).ready(function(){

    function hideAll(){
          $('#allWeAre').hide();
          $('#goodLife').hide();
          $('#countingStars').hide();
          $('#everybodyLovesMe').hide();
          $('#dolText').hide();
          $('#wup1Text').hide();
          $('#nativeText').hide();
          $('#wup2Text').hide();
      }
    hideAll();

    $('.coverImages, img').click(function(){
      hideAll();
          switch ($(this).attr("id")){
              case "dol" :
                  $('#allWeAre').show('fast');
                  $('#dolText').slideToggle('fast');
                  break;
              case "wakingUp1" :
                  $('#goodLife').show('fast');
                  $('#wup1Text').slideToggle('fast');
                  break;
              case "native" :
                  $('#countingStars').show('fast');
                  $('#nativeText').slideToggle('fast');
                  break;
              case "wakingUp2" :
                  $('#everybodyLovesMe').show('fast');
                  $('#wup2Text').slideToggle('fast');
                  break;
          };
      });

});
