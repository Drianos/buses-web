$("#page-content-wrapper").load("content.html");

$(document).ready(function(){
                 $("#paradas").click(function(){
                     $("#page-content-wrapper").load("leaflet-map.html");
                 });
            });