document.addEventListener("DOMContentLoaded", function() {
  
  var messages = [
    '– mięsień skroniowy \n– mięsień policzkowy \n– mięsień żwacz',
    '– mięsień piersiowy większy \n– mięsień piersiowy mniejszy',
    '– mięsień prosty brzucha \n– mięsień skośny zewnętrzny brzucha',
    '– mięsień naramienny \n– mięsień ramienno-promieniowy',
    '– mięsień czworoboczny \n– mięsień najszerszy grzbietu',
    '– mięsień prosty uda \n– mięsień obszerny boczny'
   ];
 
  $(".block").each(function(index) {
    $(this).on("click", function(){
      alert(messages[index])
      
    });  
  }); 
});
