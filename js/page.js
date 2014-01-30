$("#page-content-wrapper").load("content.html");


$(document).ready(function(){
                 $("#contenido").click(function(){
                     $("#page-content-wrapper").load("content.html");
                 });
            });
$("#page-content-wrapper").load("contenido.html");

$(document).ready(function(){
                 $("#horarios").click(function(){
                     $("#page-content-wrapper").load("horarios.html");
                 });
            });

$(document).ready(function(){
                 $("#paradas").click(function(){
                     $("#page-content-wrapper").load("leaflet-map.html");
                 });
            });

$(document).ready(function(){
                 $("#acerca").click(function(){
                     $("#page-content-wrapper").load("acerca.html");
                 });
            });

function timer(inicial_count)
{
  var count=inicial_count;

  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     document.getElementById("timer").innerHTML="Bus en la parada, saliendo pronto"; // watch for spelling
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}