
$(document).ready(function(){ /*Code goes here*/

});

$(window).on('hashchange load',function(){
   var hash = window.location.hash;
   var hostname = window.location.hostname;

   var elemento = ".container"; //elemento a ser afetado

   var path = "_conteudo/"; //path to content files

   if (hostname == "fpress.github.io"){ //if is GitHub, add github url from path
      path = "https://raw.githubusercontent.com/FPress/fpress.github.io/master/_conteudo/";
   }

   switch (hash) {
      case "#links":
         $(elemento).load(path + "links.html");
         break;

      case "#proposta":
         $('html').load(path + "proposta.html");
         break;

      default:
         $(elemento).load(path + "introducao.html");
   }
});
