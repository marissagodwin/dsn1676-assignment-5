
var $form = $('form');
var $theColor = $('#the-color');
var $newSquare = $('.newSquare');



$form.on('submit', function (e) {
    //Stop the form from submitting to thank you page
    e.preventDefault();
    $circle.css('background-color',$theColor.val());
  });

$newSquare.on('click', function() {
   var $div =$('<div>');
    $div.addClass('square');
    $('body').append($div);
});