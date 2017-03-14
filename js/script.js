
$(document).ready(function(){
   $(".button-collapse").sideNav({closeOnClick: true});

   $( "#encounter" ).mouseenter(function() {
     $(this).html("<p>this<br>changes<br>");
   });

   $( "#encounter" ).mouseleave(function() {
     $(this).html("<h1>Encounter</h1>");
   });
});
