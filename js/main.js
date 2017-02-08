$(document).ready(function(){
 
//Adding Items to the list
 $('button').click(function(){
 	var toDo = $("#toDoItems").val();
 	$('#listItems').append('<li class ="list">'+toDo+ "<input type='checkbox' checked>");	

 $('.list').click(function(){
 	$(this).remove();

 })

	})

		});

$('body').css('display', 'block').css('text-align', 'center').css('background-color', '#efea47');
$('#listItems').css('text-align', 'center'); 