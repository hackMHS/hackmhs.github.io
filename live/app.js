var app = angular.module("app", ["firebase"]);

$("#mentor-req").click(function() {
	$(".overlay").fadeIn(500);
	$("#mentor-req-form").fadeIn(500);
	console.log("hi")
});

$("#sendRequest").click(function() {
	angular.element($(".main")).scope().sendRequest();
	angular.element($(".main")).scope().addAlert("Your request has been successfully submitted!");
	$(".overlay").fadeIn(500);
	$(".alert").fadeIn(500);
});

$("#newMsg").keypress(function (event) {
 var key = event.which;
 if (key == 13) {
    angular.element($(".main")).scope().addMsg($("#newMsg").val());
    $("#newMsg").val('');
    var chat = document.getElementById("chatList")
    setTimeout(function() {chat.scrollTop = chat.scrollHeight;}, 500);
    return false;  
 }
});   

$(".overlay").click(function() {
	$(".alert").fadeOut(500);
	$(".overlay").fadeOut(500);
})

$(".alert .close-button").click(function() {
	$(".alert").fadeOut(500);
	$(".overlay").fadeOut(500);
})

$(".changeUsername").click(function() {
	var u = "";
	while (u == "" || u.toUpperCase() == "HACKMHS")  {
		if (u.toUpperCase() == "HACKMHS") {
			alert("Sorry, that username is reserved. Please choose another.");
		}
		var u = prompt("What do you want your new username to be?");
	}
	angular.element($(".main")).scope().changeUsername(u);
})