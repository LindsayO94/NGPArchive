'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("NGPArchive", []); 
app.controller("archiveController", function($scope) {
	$scope.toggleText = "Open All";

	$scope.tournamentList = [
	{
		title: "New Game Plus 67: Seltzer Edition",
		date: "August 23rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1268663286479531/",
		open: false,
		post: "If you not toptier ladies and gentlemen$%\
Get ready to get fucked up$%\
Let's do it, ha ha$%\
L-A-S-E-R$%\
You know what$%\
McLoud$%\
Yeah$%\
All of the spacieholics$%\
Where you at$%\
Let's go$%\
When I battle on the field$%\
All eyes on me$%\
I'm with the Corneria crew$%\
All falcons are free$%\
We like Foooox$%\
We love Falcoooo$%\
We came to multi shine$%\
Everybody it's on$%\
Shine Shine Shine Shine Shine Shine$%\
Shine Shine Shine Shine Shine$%\
Shine Shine Shine Shine Shine$%\
Everybody$%\
---$%\
Oh shiz its New Game Plus 67: Seltzer Edition$%\
Qs and As:$%\
I should be a 1/2/3/4 seed, what gives? You playing yourself.$%\
But I beat MDZ once, surely that means something? Hah. Hahaha. Ha.$%\
What about my netplay accomplishments?! Not a real thing.$%\
Here's a list of NGP relevant times:$%\
6:00pm - Friendlies time kids, prac up$%\
6:01pm - You complain about your seed.$%\
7:20pm - Sign ups close. Seriously. Almost. Screw you guys.$%\
7:30pm - FINAL NGP BRACKET PRE-SHINE$%\
Nothing out the ordinary tonight. Hit me up for late arrivals by posting here or if you feel safer messaging me directly feel free.$%\
BRING SETUPS PEOPLES. YOU WANT FRIENDLIES. YOU WANNA PRACTICE. YOU WANT 5 BUCKS BACK!$%\
---$%\
A song$%\
https://www.youtube.com/watch?v=ztO93X31oHw"
	},
	{
		title: "New Game Plus 66: T-10 Days",
		date: "August 16th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1262935230385670/",
		open: false,
		post: "In the days of my youth$%\
I was told what it means to play melee$%\
Now I've reached the stage$%\
I can do all those things like the beast that I am$%\
No matter how you try$%\
I find my way to do the same old jam$%\
Fox mains, Puffs mains$%\
You know I played my share$%\
When a kid sat down$%\
Did a quad shine nair$%\
Well, I still don't seem to care$%\
Thirteen I fell in love$%\
With a game as good as could be$%\
Only took a couple of years$%\
Till I was so godly$%\
I swore I'd be the best all time$%\
And win until the end$%\
When I bustered just one year$%\
I won another ten$%\
Fox mains, Puffs mains$%\
You know I played my share$%\
When a kid sat down$%\
Did a quad shine nair$%\
Well, I still don't seem to care$%\
---$%\
Do it to it, its New Game Plus 66: T-10 Days$%\
A garden gnome came to life to ask me these questions:$%\
Can I still reg for Shine?! YES UNTIL END OF TODAY.$%\
Can I still volunteer at Shine? PLEASE. ->http://bit.ly/2bDl52S$%\
Can I get a preview of pools? No.$%\
Below is a list of times and what they imply:$%\
6:00 - Friendly setups are opennnn$%\
7:20 - Bracket sign up is closedddd$%\
7:30 - Bracket matches startttt$%\
8:44 - You lose to one of the regions talented luigis but still complain cause you think its a joke characterrrr$%\
Alright so everything is pretty much standard tonight. Leave a message here, message me directly, show up on time, have your pal sign you up, use your time machine after realizing its 7:35 and pop back to 7:15 are all acceptable options to get in to bracket before 7:20!$%\
BRING DAH SETUPS! GET DAH 5ERS! YEEEEE! BOIII!!!!!$%\
---$%\
Sometimes you remember being an angsty 13 year old$%\
https://www.youtube.com/watch?v=ausMFdf0nw4"
	},
	{
		title: "New Game Plus 65: Rio Games",
		date: "August 9th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1257539087591951/",
		open: false
	},
	{
		title: "New Game Plus: Teamwork Tuesday",
		date: "August 2nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1252446108101249/",
		open: false
	},
	{
		title: "New Game Plus 63: Impressionist Painters Edition",
		date: "July 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1247734015239125/",
		open: false
	},
	{
		title: "New Game Plus 62: Gators win",
		date: "July 19th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1243261529019707/",
		open: false
	},
	{
		title: "New Game Plus 61: Mystics get better seeds edition",
		date: "July 12th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1238499162829277/",
		open: false
	},
	{
		title: "New Game Plus 60: America is older edition",
		date: "July 5th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1233805329965327/",
		open: false
	},{
		title: "New Game Plus 59: Burritos are good edition",
		date: "June 28th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1229426060403254/",
		open: false
	},
	{
		title: "New Game Plus 58: Review us on Yelp!",
		date: "June 21st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1224928324186361/",
		open: false
	},
	{
		title: "New Game Plus 57: F'ing Flag Day Edition",
		date: "June 14th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1220233234655870/",
		open: false
	},
	{
		title: "New Game Plus 56: Doublemint Gum!",
		date: "June 7th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1215712608441266/",
		open: false
	},
	{
		title: "New Game Plus 55: Summer time and living is easy",
		date: "May 31st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1211045502241310/",
		open: false
	},
	{
		title: "New Game Plus 54: Icies rejoice; One less Peach player edition",
		date: "May 24th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1206662312679629/",
		open: false
	},
	{
		title: "New Game Plus 53: Where have all the flowers gone?",
		date: "May 17th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1202045639807963/",
		open: false
	},
	{
		title: "New Game Plus 52: Where's the beef?",
		date: "May 10th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1197338473612013/",
		open: false
	},
	{
		title: "New Game Plus 51: It's MORPHIN TIME",
		date: "May 3rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1192594967419697/",
		open: false
	},
	{
		title: "New Game Plus 50: Let's go crazy",
		date: "April 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1188053421207185/",
		open: false
	},
	{
		title: "New Game Plus 49: Do your taxes",
		date: "April 12nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1179118748767319/",
		open: false
	},
	{
		title: "New Game Plus 48: How do I Slox edition",
		date: "April 5th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1174331255912735/",
		open: false
	},
	{
		title: "New Game Plus 47: Did France kill Mafia?",
		date: "March 29th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1167647706581090/",
		open: false
	},
	{
		title: "New Game Plus 46: We love you New England Melee edition",
		date: "March 22nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1159463550732839/",
		open: false
	},
	{
		title: "New Game Plus 45 - Special Announcement Edition",
		date: "March 15th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1153359794676548/",
		open: false
	},
	{
		title: "New Game Plus 44",
		date: "March 8th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1148548335157694/",
		open: false
	},
	{
		title: "New Game Plus 43",
		date: "March 1st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1143930058952855/",
		open: false
	},
	{
		title: "New Game Plus 42",
		date: "February 23rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1139525522726642/",
		open: false
	},
	{
		title: "New Game Plus 41 - NO COLIN POST",
		date: "February 16th, 2016",
		link: "#",
		open: false
	},
	{
		title: "New Game Plus 40",
		date: "February 9th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1131327253546469/",
		open: false
	},
	{
		title: "New Game Plus 39",
		date: "February 2nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1127428363936358/",
		open: false
	},
	{
		title: "New Game Plus 38",
		date: "January 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1123488934330301/",
		open: false
	},];


    $scope.openPost = function(tournament) {
    	for (var i = 0;i < $scope.tournamentList.length; i++){
    		if ($scope.tournamentList[i].title === tournament.title){
    			$scope.tournamentList[i].open = !($scope.tournamentList[i].open);
    		}
    	}
    }

    $scope.formatText = function() {
    	for (var i = 0;i < $scope.tournamentList.length; i++){
    		if ($scope.tournamentList[i].post)
    		{
    			$scope.tournamentList[i].post = $scope.tournamentList[i].post.replace(/(\$%)/g, '<br />');

    		}
    	}
    }

    $scope.formatText();

    $scope.toggleButtonClass = function(){
    	var numopen = 0;
    	for (var i = 0;i < $scope.tournamentList.length; i++){
    		if ($scope.tournamentList[i].open){
    			numopen++;
    		}
    	}
    	if (numopen > 0){
    		$scope.toggleText = "Close All";
    		return "toggle-close";
    	}
    	else{
    		$scope.toggleText = "Open All";
    		return "toggle-open";
    	}
    }

    $scope.toggleButton = function () {
    	if ($scope.toggleText === "Open All"){
	    	for (var i = 0;i < $scope.tournamentList.length; i++){
	    		$scope.tournamentList[i].open = true;
	    	}
    		$scope.toggleText = "Close All";
    	}
    	else{
	    	for (var i = 0;i < $scope.tournamentList.length; i++){
	    		$scope.tournamentList[i].open = false;
	    	}
    		$scope.toggleText = "Open All";
    	}

    }
});

app.filter("trust", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);
