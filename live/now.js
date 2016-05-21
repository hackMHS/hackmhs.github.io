app.controller('NowController', function($scope) {

	$scope.tweet = "";
	$scope.getTweet = function() {
		$.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=hackMHS&count=1", function(result) {
			console.log(result);
		});
	};
	
});