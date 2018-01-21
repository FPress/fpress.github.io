$(document).ready(function(){ /*Code goes here*/
   //
});

//get variables from url
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(window).on('hashchange load',function(){
   var reference = getUrlParameter('pg');
   var hostname = window.location.hostname;

   var path = "_conteudo/"; //path to content files
   if (hostname == "fpress.github.io"){ //if is GitHub, add github url from path
      path = "https://raw.githubusercontent.com/FPress/fpress.github.io/master/_conteudo/";
   }

   switch (reference) {
      case 'teste':
         $('.container').load(path + "teste.html");
         break;

      default:
         $('.container').load(path + "introducao.html");
   }
});
