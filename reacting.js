$(document).ready(function(){
  $('.breakrow').click(function(){
    $(this).nextUntil('tr.breakrow').slideToggle(200);
  });
});
