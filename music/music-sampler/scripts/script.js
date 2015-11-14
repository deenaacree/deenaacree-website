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
          switch ($(this).attr("id")){
              case "dol" :
                  $('#allWeAre').show('fast');
                  break;
              case "wakingUp1" :
                  $('#goodLife').show('fast');
                  break;
              case "native" :
                  $('#countingStars').show('fast');
                  break;
              case "wakingUp2" :
                  $('#everybodyLovesMe').show('fast');
                  break;
          };
      };

    $('.coverImages, img').click(function(){
      switch ($(this).attr("id")){
          case "dol" :
              $('#dolText').slidetoggle();
              break;
          case "wakingUp1" :
              $('#wup1Text').slidetoggle('slow');
              break;
          case "native" :
              $('#nativeText').slidetoggle('slow');
              break;
          case "wakingUp2" :
              $('#wup2Text').slidetoggle('slow');
              break;
          }
      });

});
