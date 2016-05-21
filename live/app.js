var app = angular.module("app", ["firebase"]);

$(window).load(function() {
	angular.element($(".main")).scope().genRandUsername();
	angular.element($("#now")).scope().getTweet();
	var chat = document.getElementById("chatList")
    setTimeout(function() {chat.scrollTop = chat.scrollHeight;}, 2000);
});

$("#mentor-req").click(function() {
	$(".overlay").fadeIn(500);
	$("#mentor-req-form").fadeIn(500);
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

$("#sendRequest").click(function() {
	angular.element($(".main")).scope().sendRequest();
	angular.element($(".main")).scope().addAlert("Your request has been successfully submitted!");
	$(".overlay").fadeIn(800);
	$(".alert").fadeIn(800);
});

$(".alert .close-button").click(function() {
	$(".alert").fadeOut(800);
	$(".overlay").fadeOut(800);
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