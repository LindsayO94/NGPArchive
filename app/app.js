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
	},{
		title: "New Game Plus 59: Burritos are good edition",
		date: "June 28th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1229426060403254/"
	},
	{
		title: "New Game Plus 58: Review us on Yelp!",
		date: "June 21st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1224928324186361/"
	},
	{
		title: "New Game Plus 57: F'ing Flag Day Edition",
		date: "June 14th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1220233234655870/"
	},
	{
		title: "New Game Plus 56: Doublemint Gum!",
		date: "June 7th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1215712608441266/"
	},
	{
		title: "New Game Plus 55: Summer time and living is easy",
		date: "May 31st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1211045502241310/"
	},
	{
		title: "New Game Plus 54: Icies rejoice; One less Peach player edition",
		date: "May 24th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1206662312679629/"
	},
	{
		title: "New Game Plus 53: Where have all the flowers gone?",
		date: "May 17th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1202045639807963/"
	},
	{
		title: "New Game Plus 52: Where's the beef?",
		date: "May 10th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1197338473612013/"
	},
	{
		title: "New Game Plus 51: It's MORPHIN TIME",
		date: "May 3rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1192594967419697/"
	},
	{
		title: "New Game Plus 50: Let's go crazy",
		date: "April 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1188053421207185/"
	},
	{
		title: "New Game Plus 49: Do your taxes",
		date: "April 12nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1179118748767319/"
	},
	{
		title: "New Game Plus 48: How do I Slox edition",
		date: "April 5th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1174331255912735/"
	},
	{
		title: "New Game Plus 47: Did France kill Mafia?",
		date: "March 29th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1167647706581090/"
	},
	{
		title: "New Game Plus 46: We love you New England Melee edition",
		date: "March 22nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1159463550732839/"
	},
	{
		title: "New Game Plus 45 - Special Announcement Edition",
		date: "March 15th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1153359794676548/"
	},
	{
		title: "New Game Plus 44",
		date: "March 8th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1148548335157694/"
	},
	{
		title: "New Game Plus 43",
		date: "March 1st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1143930058952855/"
	},
	{
		title: "New Game Plus 42",
		date: "February 23rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1139525522726642/"
	},
	{
		title: "New Game Plus 41 - NO COLIN POST",
		date: "February 16th, 2016",
		link: "#"
	},
	{
		title: "New Game Plus 40",
		date: "February 9th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1131327253546469/"
	},
	{
		title: "New Game Plus 39",
		date: "February 2nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1127428363936358/"
	},
	{
		title: "New Game Plus 38",
		date: "January 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1123488934330301/"
	},];

    console.log($scope.tournamentList);
});
