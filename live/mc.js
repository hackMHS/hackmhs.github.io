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
		m.time = $scope.getCurrentTime();
		$scope.chat.$add(m);
	}

	$scope.genRandUsername = function() {
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
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
		r.name = $("#mentor-req-form .name").val();
		r.teamName = $("#mentor-req-form .teamName").val();
		r.tableNumber = $("#mentor-req-form .tableNumber").val();
		r.details = $("#mentor-req-form .details").val();
		r.timestamp = $scope.getCurrentTime();

		$scope.requests.$add(r);
		$("#mentor-req-form .name").val("");
		$("#mentor-req-form .teamName").val("");
		$("#mentor-req-form .tableNumber").val("");
		$("#mentor-req-form .details").val("");
	}

	$scope.addAlert = function(alert) {
		$scope.$apply(function() {
			$scope.alertMessage = alert;
		})
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