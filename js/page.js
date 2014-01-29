$("#page-content-wrapper").load("content.html");


$(document).ready(function(){
                 $("#contenido").click(function(){
                     $("#page-content-wrapper").load("content.html");
                 });
                 e.preventDefault();
        		$("#wrapper").toggleClass("active");
            });
$("#page-content-wrapper").load("contenido.html");

$(document).ready(function(){
                 $("#horarios").click(function(){
                     $("#page-content-wrapper").load("horarios.html");
                 });
                 e.preventDefault();
        		$("#wrapper").toggleClass("active");
            });

$(document).ready(function(){
                 $("#paradas").click(function(){
                     $("#page-content-wrapper").load("leaflet-map.html");
                 });
                 e.preventDefault();
        		$("#wrapper").toggleClass("active");
            });

$(document).ready(function(){
                 $("#acerca").click(function(){
                     $("#page-content-wrapper").load("acerca.html");
                 });
                 e.preventDefault();
        		$("#wrapper").toggleClass("active");
            });