app.controller('MainController', function($scope, $firebaseArray) {

	var requests = new Firebase("//hackmhs.firebaseio.com/requests");
	var chat = new Firebase("//hackmhs.firebaseio.com/chat");
	$scope.requests = $firebaseArray(requests);
	$scope.chat = $firebaseArray(chat);
	$scope.username = "";
	$scope.alertMessage = "";
	$scope.currentTime;

	$scope.addMsg = function(msg) {
		var m = new Object();
		m.user = $scope.username;
		m.message = msg;
		$scope.chat.$add(m);
	}

	$scope.genRandUsername = function() {
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
		  	console.log(data.results[0]);
		    $scope.username = data.results[0].login.username;
		  }
		});
	}

	$scope.changeUsername = function(newName) {
		$scope.$apply(function() {$scope.username = newName;});
	}

	$scope.getCurrentTime = function() {
		var d = new Date();
		var hour = d.getHours();
		var min = "0" + d.getMinutes();
		min = min.substring(min.length - 2, min.length);
		$scope.$apply(function() {
			if (hour == 0) {
				$scope.currentTime = "12:" + min + " AM";
			}
			else if (d.getHours() > 12) {
				$scope.currentTime = (hour - 12) + ":" + min + " PM";
			}
			else {
				$scope.currentTime = hour + ":" + min;
			}
		});
	}

	$scope.sendRequest = function() {
		var r = new Object();
		r.name = $("#mentorRequest .name").val();
		r.teamName = $("#mentorRequest .teamName").val();
		r.tableNumber = $("#mentorRequest .tableNumber").val();
		r.details = $("#mentorRequest .details").val();
		r.timestamp = $scope.getCurrentTime();

		$scope.requests.$add(r);
		$("#mentorRequest .name").val("");
		$("#mentorRequest .teamName").val("");
		$("#mentorRequest .tableNumber").val("");
		$("#mentorRequest .details").val("");
	}

	$scope.addAlert = function(alert) {
		$scope.$apply(function() {
			$scope.alertMessage = alert;
		})
	}

	$scope.masterSetUsername = function(un) {
		$scope.$apply(function() {
			$scope.username = un;
		});
		console.log($scope.username);
	}

	$scope.getCurrentTime = function() {
		var d = new Date();
		var hour = d.getHours();
		var min = "0" + d.getMinutes();
		min = min.substring(min.length - 2, min.length);
		if (hour == 0) {
			$scope.currentTime = "12:" + min + " AM";
			return $scope.currentTime;
		}
		else if (d.getHours() > 12) {
			$scope.currentTime = (hour - 12) + ":" + min + " PM";
			return $scope.currentTime;
		}
		else {
			$scope.currentTime = hour + ":" + min;
			return $scope.currentTime;
		}
	}

	
});