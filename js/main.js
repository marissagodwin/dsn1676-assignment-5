
var $form = $('.form');
var $newLine = $('.newLine');
var $name = $('#toDo');
var $list = $('.list');



$form.on('submit', function (e) {
    e.preventDefault();
    
    var nameValue = $name.val();
    var $li = $('<li>').html($name.val());
    var $button = $('<button>').html('X');
    
    $li.append($button);
    $list.append($li);
  });

$list.on('click', 'li', function(){
           $(this).toggleClass('js-strike'); 
 });

$list.on('click', 'button', function(){
           $(this).parent().remove(); 
 });