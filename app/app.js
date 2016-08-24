'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("NGPArchive", []); 
app.controller("archiveController", function($scope) {
    $scope.tournamentList = [
    {
    	title: "New Game Plus 67: Seltzer Edition",
    	date: "August 23rd, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1268663286479531/"
    },
    {
    	title: "New Game Plus 66: T-10 Days",
    	date: "August 16th, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1262935230385670/"
    },
    {
    	title: "New Game Plus 65: Rio Games",
    	date: "August 9th, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1257539087591951/"
    },
    {
    	title: "New Game Plus: Teamwork Tuesday",
    	date: "August 2nd, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1252446108101249/"
    },
    {
    	title: "New Game Plus 63: Impressionist Painters Edition",
    	date: "July 26th, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1247734015239125/"
    },
    {
    	title: "New Game Plus 62: Gators win",
    	date: "July 19th, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1243261529019707/"
    },
    {
    	title: "New Game Plus 61: Mystics get better seeds edition",
    	date: "July 12th, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1238499162829277/"
    },
    {
    	title: "New Game Plus 60: America is older edition",
    	date: "July 5th, 2016",
    	link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1233805329965327/"
    },];

    console.log($scope.tournamentList);
});
