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
		open: false,
		post: "Good morning. In less than 6 hours, players from here will join others from around the area. And you will be commencing an average size smash battle in this history of melee. Melee -- that word should have new meaning for all of us today. We can't be consumed by our salty tendencies anymore. We will be united in our common interest. Perhaps its fate that today is the 9th of August, and you will once again be fighting for our glory, not from tyranny, self-destructs, or tech flubs -- but from annihilation.$%\
\"We're fighting for our right to play, to exist.$%\
And should you win this day, the 9th of August will no longer be known as National Book Lovers Day, but as the day when the community declared in one voice:$%\
'We will not go quietly into the night!$%\
We will not get four-stocked without a fight!$%\
We're going to play on!$%\
We're going to improve!\"$%\
Today, we celebrate our Meleependence Day!$%\
---$%\
Mmmm, its New Game Plus 65: Rio Games!$%\
I was smoke signaled a few questions:$%\
Will there be medals tonight? No.$%\
When is melee gonna bein the Olympics? Never?$%\
Can I still rep my country? You do you.$%\
Our schedule for this glorious eve:$%\
6:00 - First round of friendly trials$%\
7:20 - Sign ups close$%\
7:30 - The Games begin!$%\
11:03 - We have the winner stand on stage and the 2nd/3rd crouch at lower heights$%\
Nothing fancy this week friends. Im on the way back from vacation so not sure I will make it in time. Don't rely on me to sign you up. But post here or arrive and time and you will be good famalam.$%\
---$%\
The city streets are empty now...$%\
https://www.youtube.com/watch?v=BDhJU_cNCZE"
	},
	{
		title: "New Game Plus: Teamwork Tuesday",
		date: "August 2nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1252446108101249/",
		open: false,
		post: "\"One man alone can be pretty dumb sometimes, but for real bona fide stupidity, there ain't nothin' can beat teamwork.\"$%\
---$%\
Oh yes. New Game Plus: Teamwork Tuesday!$%\
DOUBLES.$%\
ITS DOUBLES.$%\
IS IT SINGLES? NO. ITS DOUBLES.$%\
Alright so some things to think about:$%\
Can I team with a lvl 9 luigi? I guess if you pay double.$%\
Is Kongo legal? Nah but gentleman your hearts out.$%\
When is doubles after this? Final day of Rosh Hashana$%\
Timeline:$%\
6:00 Friendly city.$%\
7:07 You attempt to sign up as a super innapropriate team name and I say ok cause you won't make it to stream.$%\
7:20 Sign ups close$%\
7:30 Bracket starts$%\
Later Side events start$%\
So as it is doubles, make sure you and your teammate are signed up by bracket sign ups end. Post here, make sure one of you is on time, or message someone at the venue to make sure your team is in. I will sadly not be in attendance so hit up someone other than meeee$%\
Once bracket has progressed there should be some side brackets popping up, low tiers and reverse mains are usually a given but feel free to rally people for another event.$%\
---$%\
We're on our way home$%\
https://www.youtube.com/watch?v=sGndsQi9gQE"
	},
	{
		title: "New Game Plus 63: Impressionist Painters Edition",
		date: "July 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1247734015239125/",
		open: false,
		post: "Where's my in-game?$%\
I have no in-game in my headphones$%\
there you go$%\
Yeah$%\
yo, yo$%\
Have you ever been baited then disrespected against?$%\
I have, I've been four stocked and utterly shitted against$%\
Double shined then I start to cry, can't even DI$%\
Sick of this time so its motherfucking nothing but grind$%\
All this commotion emotions run deep as ocean's exploding$%\
Tempers flaring from dairings just shrug 'em off and keep going$%\
Not taking nothing from no one give 'em hell long as I'm breathing$%\
Keep kicking ass in the bracket and taking names as I stack it$%\
Leave 'em with a taste as salty as campbell's soup in they mouth$%\
See they can trigger me, but they'll never make me quit out$%\
Look at me now, I bet ya probably scared of me now, ain't you smashers?$%\
I'mma show you how I'm so ridiculous now$%\
I'm sorry smashers!$%\
I always meant to beat you!$%\
I always meant to make you cry; so tonight$%\
I'm taking out my demons (one more time)$%\
I said I'm sorry smashers!$%\
I always meant to beat you!$%\
I always meant to make you cry; so tonight$%\
I'm taking out my demons$%\
---$%\
Oh damn it's New Game Plus 63: Impressionist Painters Edition$%\
Some fire Q&A for you:$%\
Is Mass Madness gonna be the full crew? Yeeeeeee$%\
Will Mass Madness have VODS?! Yeeeeee$%\
Can you commentate? I don't know CAN you?! ahahahaha$%\
Here's one of those things with relevant times:$%\
6:00 - Friendlies/Match Analysis$%\$%\
7:20 - Sign ups for bracket close.$%\
7:30 - The true test begins as bracket commences$%\
8:03 - You casually report your upset like it was nothing$%\
We on that normal bracket life today. Sign up by commentating here, hit me up, do whatever it takes to get into bracket before sign ups close.$%\
AND OF COURSE BRING SETUPS. SETUPS ARE DOPE. SETUPS MAKE THINGS BETTER. SETUPS GET YOU 5 DOLLARS BACK.$%\
---$%\
Shake it up$%\
https://www.youtube.com/watch?v=dRwgmgEeT8c"
	},
	{
		title: "New Game Plus 62: Gators win",
		date: "July 19th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1243261529019707/",
		open: false,
		post: "A long long time ago$%\
I can still remember how$%\
That melee used to make me smile$%\
And I knew if he had the chance$%\
That fox could make those people dance$%\
And maybe they'd be happy for a while$%\
But EVO finals made me shiver$%\
With every rest Juan delivered$%\
Bad news for the nation$%\
He couldn't take one more set$%\
I can't remember if I cried$%\
When I looked upon his sorrowed eyes$%\
Something touched me deep inside$%\
The day the melee died$%\
So$%\
Why, why is it Jigglypuff time$%\
Played my chip on the strip but the strip was so dry$%\
And them good ole boys were drinking whiskey and lights$%\
Singin' this'll be the day the game died$%\
This'll be the day the game died$%\
---$%\
Now time for New Game Plus 62: Gators win.$%\
All jokes aside, congratulations to Luis for his work with HBox really coming through. That was quite the showing.$%\
Some Q&A to clear things up:$%\
Did you wake up just to post this? Yes. More rest inc.$%\
How happy was Tsai? Ecstatically so.$%\
Are icies bad again? Can't even 5x EVO top 8. So yeah.$%\
Times for things:$%\
6:00pm - Friendlies$%\
7:20pm - Sign ups close.$%\
7:30pm - Bracket starts!!!$%\
8:11pm - You get extra salty for no real reason losing to Puff.$%\
As I will not be in attendance tonight please contact Shi or Eduardo about getting in to bracket if you will be late!! Posting here probably should work as well as they are tagged in this.$%\
BRING SETUPS. We are going to be down 2 BenQs tonight so we really need to see them setups come out in force! Plus you get 5 dollars back! BRING SETUPS.$%\
---$%\
You'll be sorry... someday..$%\
https://www.youtube.com/watch?v=U0H_gxlXGsY"
	},
	{
		title: "New Game Plus 61: Mystics get better seeds edition",
		date: "July 12th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1238499162829277/",
		open: false,
		post: "\"It’s nice isn’t it? To play out there. … I couldn't wait to go looking through the pools trying to find times for all the players we’re gonna see fight in the next few days. … I just can’t wait for everyone to get pumped up in these next few days, cause that’s all anybody will ever remember about it. There’s one thing you could always say about Evo even when we weren't there; that event was neat. When we got back in to the joint, you know after Nintendo relented, I remember we were more excited for our community than I ever was of being a player. We loved it, the most. ‘Cause when we were donatin' in that drive those night it was like we were the strongest crew of people on earth. Forgotten. Unwanted. And it was really starting to piss us off, Friends, because of our love for smash. Our own little game and our love of smash. … I just want to see it stay for more years. It is fifteen fuckin’ years old.\"$%\
---$%\
It is time for New Game Plus 61: Mystics get better seeds edition$%\
Small question and answer section to get us ready.$%\
Mystic? So fuckin legit.$%\
Instinct? Eh at least its not Valor.$%\
Valor? Take a long look at yourself in the mirror.$%\
Goyls and Gargoyles our schedule tonight:$%\
6:00PM - Friendlies start.$%\
7:20PM - Brackets sign ups close.$%\
7:30PM - Bracket kicks off.$%\
11:22PM - A sea of blue surrounds the venue.$%\
So nothing too crazy in our pre-EVO NGP. Just hit me up if you will be late. Do so messaging me directly, or even better posting on this post. Or, you know, just arrive on time! Pretty simple stuff.$%\
BRING SETUPS GET 5 BACK.$%\
BRING SETUPS GET 5 BACK.$%\
BRING SETUPS GET 5 BACK.$%\
BRING SETUPS GET 5 BACK.$%\
---$%\
Mhm.$%\
https://www.youtube.com/watch?v=CEvsDuJYEnI"
	},
	{
		title: "New Game Plus 60: America is older edition",
		date: "July 5th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1233805329965327/",
		open: false,
		post: "Welcome to Melee. The first rule of Melee is: you do not whine about Melee. The second rule of Melee is: you DO NOT whine about Melee! Third rule of Melee: if someone presses ‘start’, self destructs, or rage quits, you take those. Fourth rule: only four stocks to a fight. Fifth rule: two fight at a time, fellas. Sixth rule: no items, no lame stages. Seventh rule: fights will go on as long as they are under 8 minutes. And the eighth and final rule: if this is your first night of Melee, you will get waxed.$%\
---$%\
Its New Game Plus 60: America is older edition$%\
Tiddly bit of Q&A:$%\
Is this MDZs last NE resident NGP? Yes.. Maybe?$%\
Has Younger replaced him as the MA Falco?! Yes.. Maybe?$%\
Is BVB the most overrated player? Yes.. yes.$%\
Aight schedule yo:$%\
6:00pm - Friendlies$%\
7:20pm - Bracket Sign ups CLOSE$%\
7:30pm - Bracket Starts!$%\
8:19pm - You regret trying a new character in bracket.$%\
So I am quite under the weather but fear not Eduardo and Avery will be there to New up your Game Plus! Message them directly or leave a reply on this post and you will be in bracket. Or just show up on time. All acceptable options.$%\
With increasing numbers we need SETUPS. BRING YO SETUPS. Discounts and good times for all!$%\
---$%\
It's a song!$%\
https://www.youtube.com/watch?v=jRHQPG1xd9o"
	},{
		title: "New Game Plus 59: Burritos are good edition",
		date: "June 28th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1229426060403254/",
		open: false,
		post: "Oh-oh oh-oh oh-oh$%\
I play my melee in my bedroom$%\
Then I go to locals$%\
Watching hungry people getting it on$%\
It doesn't make me nervous$%\
If anything I'm restless$%\
Yeah I've been around and I've played em all$%\
I get home, I pump the Brulo$%\
Binge on all my tech skill$%\
Make too many flubs, then I go to sleep$%\
And I matched all of my money$%\
Playin with the homies$%\
I’ve lost but I’ve got to melee$%\
All the time to keep me on my grind, ooh ooh$%\
'Le all the time to keep me on my grind, ooh ooh$%\
Spend my days locked in my base$%\
Trying to learn the frames, I want that crown$%\
Gotta melee all my life to continue getting good$%\
---$%\
Ok, go, New Game Plus 59: Burritos are good edition$%\
Little Q&A to kick us off:$%\
Burritos?! Burritos.$%\
How many in a row will Crush win? Well its 3 and counting. (4 with doubles)$%\
Can I play on stream? Yes, just ask and I will do my best.$%\
I feel no curiosity, I see the schedule ahead of me:$%\
6pm - Engage grinding.$%\
7:20pm - BRACKET SIGN UPS CLOSE$%\
7:30pm - Bracket begins$%\
8:47pm - You are saddened by your DQ after being called 10 times.$%\
So we got a solid night ahead of us. To get involved in the fun please post here, or contact me, or just show up BEFORE 7:20pm. Pretty simple. Someone will still mess it up. Don't be that someone.$%\
As always please please please bring setups so we can bang the bracket out and get to friendlies! Also get that 5 big ones back!$%\
---$%\
My plans for the weekend:$%\
https://www.youtube.com/watch?v=jPrQYYlFPA4"
	},
	{
		title: "New Game Plus 58: Review us on Yelp!",
		date: "June 21st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1224928324186361/",
		open: false,
		post: "Now you can give them melee whenever they want!$%\
Melee in the morning$%\
Melee in the evening$%\
Melee at supper time$%\
When Melee's on a GameCube$%\
You can play Melee anytime$%\
Smash Bros Melee, video game addiction on Nintendo GameCube!$%\
---$%\
Its New Game Plus 58: Review us on Yelp!$%\
A tiddly bit of Q&A:$%\
When's 64? Hopefully all night baby.$%\
More Bo5s then EVO tonight? Of course.$%\
Was STOC$ a MA sleeper agent? Yes.$%\
It takes a few moments of reading a schedule:$%\
6:00 - Friendly Nation$%\
7:20 - Be signed up in some capacity$%\
7:30 - Put your heart on the line in bracket$%\
8:12 - Be pissed you lost to PJFox.$%\
Very dope, very standard night. Sign up here = Show up on time > Message me > Message someone else > show up at 7:22 > show up after 7:30.$%\
Yes you get $5 back if you bring a setup! Yes it will make it run faster! Yes faster means earlier friendlies!$%\
---$%\
Yes.$%\
https://www.youtube.com/watch?v=uJM7TdshUbw"
	},
	{
		title: "New Game Plus 57: F'ing Flag Day Edition",
		date: "June 14th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1220233234655870/",
		open: false,
		post: "When am I gonna come down$%\
When am I going to land$%\
I should have stayed on the stage$%\
I should have not jumped to engage$%\
You know you won't beat me forever$%\
I didn't sign up to lose$%\
I'm not a present in your bracket to open$%\
This boy's too good to be losing, round twos$%\
So goodbye getting two O'd$%\
Where the noobs of tourny drown$%\$%\
You can't fight me with your secondary$%\
I'm going to get my crown$%\
Back to the grinding new tech in our hoods$%\
Dreaming of beastly game ones$%\
Oh I've finally decided my future lies$%\
Beyond me getting two O'd$%\
---$%\
Yaoooooo its New Game Plus 57: F'ing Flag Day Edition$%\
With months off of Q&A you can imagine I was backed up:$%\
What about tweets? I dunno I felt like doing this.$%\
Is JoyBoy now officially NE #1? Of course, thats how it works.$%\
Will you miss Matt? He's leaving me in Quincy. He's dead to me.$%\
Guess you get the gist of it but it's alright:$%\
6:00 - Super friendly action goes in!$%\
7:20 - Sign ups are fin!$%\
7:30 - Bracket is set to begin$%\
7:33 - You get your first win!$%\
Back to the old NGP, the straight singles NGP, the contact me NGP, the post here NGP, the Parking via Eduardo NGP.$%\
Bring in some setups please. Get 5 bucks back please.$%\
BRING 64 SETUPS(even just system + game w/ data)!?!!!?! cause we will only have one guaranteed and I wanna do a small bracket* in the later portions of the night. do it. do IT. DO IT.$%\
*not guaranteed$%\
---$%\
Should be waiting for the sun...$%\
https://www.youtube.com/watch?v=4V3ZH_F-YnI"
	},
	{
		title: "New Game Plus 56: Doublemint Gum!",
		date: "June 7th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1215712608441266/",
		open: false,
		post: "Wouldn't it be nice if Roy had tippers?$%\
Then he wouldn't have to be so close$%\
And wouldn't it be nice to not need gimmicks$%\
So that Bowser wouldnt be the butt of jokes$%\
You know it would make it that much better$%\
When we could still compete and play whoever$%\
Wouldn't it be nice to have the up-tilt$%\
From the game where Kirby is so good$%\
And Pichu having more than just a good nair$%\
Or Game and Watch with a shield thats not straight poo$%\
Playing Zelda could be time worth spending$%\
Bair wouldn't be the only move your using$%\
Wouldn't it be nice?$%\
Even if we think, and wish, and hope, and pray, it won't be true$%\
Sadly, its a dream of a game with many buffs to do$%\
There we'd be top tiers$%\
And then we'd be happy$%\
Wouldn't it be nice$%\
---$%\
Time for New Game Plus 56: Doublemint Gum!$%\
But seriously it is doubles tonight.$%\
DOUBLES TONIGHT. Figured I need to reiterate.$%\
A tweet to sum up the weekend:$%\
\"Withdrawing from the #NEinvitational $%\
It feels like a dream\"$%\
Congratulations again to Crush and Mafia winning their EVO trips!$%\
Discover that this is the schedule the evening brings:$%\
6:00 - Friendlies$%\
7:20 - Doubles sign ups end.$%\
7:30 - You and your pal play another pal and their pal. In NTSC of course.$%\
7:33 - Regret your choice of teammate.$%\
Tonight is going to be pretty casual, we will have bracket and then one big friendly fest. Come by, lose doubles to two floaties, and then hang out and play! There won't be a stream tonight as we keep things low key. As for sign ups just sign up in person, I will not be there tonight so if you are late have your partner take care of things. If you will both be late then you should contact someone you know is at the venue.$%\
As I said itll be pretty chilling tonight so the more setups we have the more everyone can hang and play. Also you get 5 bucks back my dude.$%\
---$%\
You and I travel to the beat of a different drum...$%\
https://www.youtube.com/watch?v=s3Nq48sHF8M"
	},
	{
		title: "New Game Plus 55: Summer time and living is easy",
		date: "May 31st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1211045502241310/",
		open: false,
		post: "This is the game that never ends$%\
We grind on and on my friends$%\
Some people started playing it, a party game it was $%\
But they continue playing it forever just because...$%\
This is the game that never ends$%\
We grind on and on my friends$%\
Some people started playing it, a party game it was $%\
But they continue playing it forever just because...$%\
xJason$%\
---$%\
Oh my lanta! Its New Game Plus 55: Summer time and living is easy$%\
I may not win but I'll sure watch:$%\
\"hyped AF for the NE Summit this weekend. Time to win my region\"$%\
#ssbm$%\
If you get confused listen to the melee play:$%\
6pm: Doors are open, friendlies are poppin$%\
7:20pm: Sign ups close. I mean it. mostly. kind of. please.$%\
7:30pm: Bracket startsssssssss$%\
8?9?10?: New England Invitational guest spots (and more details) are announced!$%\
Okay so. Ill be there taking sign ups. You can message me on the facebook, just drop a quick indication you want to be in down in the replies or just make it on time.$%\
Wouldn't it be cool if there were friendlies earlier? BRING SETUPS AND YOU CAN BE THE COOL. AND GET $$5$$ BACK.$%\
REMINDER NEXT WEEK IS DOUBLES.$%\
---$%\
Come back home...$%\
https://www.youtube.com/watch?v=rpO4lji8lR0"
	},
	{
		title: "New Game Plus 54: Icies rejoice; One less Peach player edition",
		date: "May 24th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1206662312679629/",
		open: false,
		post: "You know I - stomp em, dunk em, gimp em, dap em$%\
Cause I don't have to try to beat em$%\
Take em to the story, keep em tasting glory$%\
But I don't fuckin feed em$%\
First time they john I'm breezin$%\
Talkin bout, \"Oh thats the reasons?\"$%\
I'm a god in every sense of the word, scrub$%\
Better bust and deject em$%\
Out my lane where I keep em$%\
til I need a nut, til I need to bop some nubs$%\
Then it's, blip blip and I 4 stock em up$%\
Switch up to the bird and dunk$%\
Many kids wanna put these hands in losers$%\
Beat em so I lose these bucks$%\
Just because you played well last set, I'ma break sweat$%\
cause you think you on the come up? Shit I..$%\
don't drop nothin, y'all be frontin$%\
Me give a set to a dockid?$%\
Not for nothin, never happen$%\
I'll be forever smackin$%\
Game cold as alaskans, I got one passion$%\
I got no weakness$%\
And I'm not losin..$%\
So plug yo' ass in$%\
And let's SHI-I-I-I-I-INE.. check me out now$%\
SHI-I-I-I-I-INE, yeah$%\
And let's SHI-I-I-I-I-INE.. check me out now$%\
SHI-I-I-I-I-INE, yeah$%\
---$%\
Awww heck yo its New Game Plus 54: Icies rejoice; One less Peach player edition$%\
A family dividing tweet to kick it off:$%\
\"I have a terrible little brother. Can't even get off his phone for 2 minutes to help me test something in Melee.\"$%\
Kids these days right?$%\
Listen, here it comes again:$%\
6pm: Get warm with some friendlies.$%\
7:20pm: Feel the fire in you as sign ups are ending$%\
7:30pm: Burn brightly as you begin your bracket run$%\
7:54pm: Cool off with the salt of your tears.$%\
Nothin crazy this week. Sign up on this post or message me or whatever you wanna do to get in bracket on time.$%\
\"I got fiiiive on it\" - Well you will have that 5 if you bring a setup tonight! MORE MELEE. MORE FRIENDLIES. FUN.$%\
---$%\
In the mornin' you go gunnin' for the man who stole your water...$%\
https://www.youtube.com/watch?v=sil76t2X_DE"
	},
	{
		title: "New Game Plus 53: Where have all the flowers gone?",
		date: "May 17th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1202045639807963/",
		open: false,
		post: "\"As far back as I can remember, I always wanted to be a falcon main. To me, being a falcon main was better than being the best fox in the United States. Even before I first triple kneed into a luigi in a round one match I knew I wanted to be a part of them. It was there that I knew that I belonged. To me, it meant being somebody in the scene that was full of bad spacies and floaties. They weren’t like anybody else. I mean, they went as hard they wanted. They double four stocked a roy player and nobody ever called them a tier whore. In the summer when they comboed kids all night, nobody ever called them boring.\"$%\
----$%\
We doin this thing. New Game Plus 53: Where have all the flowers gone?$%\
With the shine shop open, we get a tweet from the to-be custom cube owner:$%\
\"I really like melee and I really like New England\"$%\
Heel yuh.$%\
It's easy sometimes when you just coast along:$%\
6pm: Friendlies and stuff.$%\
7:20pm: Bracket sign ups are ovaaaaa$%\
7:30pm: Bracket starteroonis$%\
8:12pm: \"Do you have a memory card?\" (\"Ask Shi\")$%\
Alrighty so with deep sadness I have to inform you I will not be in attendance tonight. But fret not there will be many capable hands to get the tourney running crispy. smash.gg/ngp53 for prereg!$%\
YO. BRING. SETUPS. 5. DOLLAHS. FOR. YOU.$%\
---$%\
I set out running but I'll take my time...$%\
https://www.youtube.com/watch?v=XacvydVrhuI"
	},
	{
		title: "New Game Plus 52: Where's the beef?",
		date: "May 10th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1197338473612013/",
		open: false,
		post: "All the puff things$%\
Back air, pain brings$%\
I'll rest off tilt$%\
Your fox is kill$%\
Always I know$%\
You'll be in chat oh$%\
Flaming, hateing, nonstop complaining$%\
Say its lame-o,$%\
I dont care yo,$%\
I'll still pop off,$%\
Like HBox so$%\
Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff$%\
Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff, Puff$%\
---$%\
Okay so. New Game Plus 52: Where's the beef?$%\
A tweet from a dedicated member:$%\
\"I have lost track of the number of events I have uploaded to @Smashboards. I may be destined to do this forever.\"$%\
You go hard my mans.$%\
Come waste your time with me:$%\
6:00pm: Friendlies!$%\
7:20pm: PLEASE BE SIGNED UP BY THIS TIME.$%\
7:21pm: NO SERIOUSLY PLEASE BE SIGNED UP.$%\
7:27pm: YOU ARE THE WORST.$%\
7:30pm: Bracket time homies$%\
8:07pm: I stare you straight in the eyes and call you match and you don't hear me.$%\
Uh don't think we are doing .gg so just leave a message after the beep. BEEP. Or make a call to the Vu-Line.$%\
No Joerson tonight but you guys are pretty dope and will be bringing setups and we will be pretty dope and hitting you with that $5 back.$%\
---$%\
Where do you go when the lights go out?$%\
https://www.youtube.com/watch?v=IM2uLVuEeo4"
	},
	{
		title: "New Game Plus 51: It's MORPHIN TIME",
		date: "May 3rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1192594967419697/",
		open: false,
		post: "Falcon was a good high-tier, and a good captain. He was one of us. He was a man who loved the stomp – and kneeing, and as a character, he explored the heights of the stages, from Battlefield to Dreamland and even Fountain. He died, he died as so many young players of his generation dropped him for new mains. In your wisdom, Hax, you took him, as you crushed so many bright flowering young players aspiring to prove it, with majors, and podiums. These young players gave up those dreams. And with it Falcon. Falcon, who loved kneeing. And so, Captain \"Eighth Best\" Falcon, in accordance with what we think your dying wishes might well have been, we commit to our final drop zone knees off final destination, which you did so well. Good night, sweet prince.$%\
---$%\
Time for New Game Plus 51: It's MORPHIN TIME$%\
Just another classic feeling:$%\
\"Trying so hard to not turn melee right now\"$%\
I am going 100% failure on that attempt.$%\
Please come round here another day:$%\
6:00PM: Sit yourself down when you're ready to play$%\
7:20PM: Bracket sign ups end.$%\
7:30PM: Bracket begins.$%\
7:54PM: You gleefully tell me of an upset. $%\
7:55PM: The upsetee has left.$%\
Yeah so I don't think we are doing pre-reg this week, just do the post here dealio. Or hit me up in whatever means best suits your tastes. Or give the Vuasaurus a shout. Your call.$%\
Don't be a square, bring a setup, get yo $5 back, play friendlies earlier, DO IT.$%\
---$%\
Let's get funky goyls and gargoyles$%\
https://www.youtube.com/watch?v=uWoZ0lSeoJw"
	},
	{
		title: "New Game Plus 50: Let's go crazy",
		date: "April 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1188053421207185/",
		open: false,
		post: "The shine of the fox goes plink plink plink$%\
plink plink plink$%\
plink plink plink$%\
The shine of the fox goes plink plink plink$%\
all game long$%\
The pillar of the bird goes dair shine dair$%\
dair shine dair$%\
dair shine dair$%\
The pillar of the bird goes dair shine dair$%\
all game long$%\
The combo of the marth goes fair fair dair$%\
fair fair dair$%\
fair fair dair$%\
The combo of the marth goes fair fair dair$%\
all game long$%\
The jump of the sheik goes tu tu tu$%\
tu tu tu$%\
tu tu tu$%\
The jump of the sheik goes tu tu tu$%\
all game long$%\
The dress of the peach goes round and round$%\
round and round$%\
round and round$%\
The dress of the peach goes round and round$%\
all game long$%\
The wall of the puff goes bair bair bair$%\
bair bair bair$%\
bair bair bair$%\
The wall of the puff goes bair bair bair$%\
all game long$%\
The popo and the nana tap a a a$%\
a a a$%\
a a a$%\
The popo and the nana tap a a a$%\
all game long$%\
The knee of the falcon goes in that ass$%\
in that ass$%\
in that ass$%\
The knee of the falcon goes in that ass$%\
all game long$%\
---$%\
That was long. Here we are. New Game Plus 50: Let's go crazy$%\
Sometimes the most simple of tweets sums things up:$%\
\"I love video games\"$%\
Right to the point with that one.$%\
Let's get down to the nitty gritty:$%\
6:00pm: We get this show on the road.$%\
7:20pm: Bracket sign ups are CLOSED(ish....)$%\
7:30pm: Bracket hits the ground running$%\
7:37pm: You tell me how it was a super close double 2 stock$%\
Tonight will just be on challonge so leave a dope message here to prereg, contact me with that hot fire, or show up before 7:20pm to make sure you get into the bracket.$%\
5 Crunch bars, 1/2 pound of rubber bands, One Finger Death Punch. What do they all have in common? YOU COULD BUY ONE OF THEM IF YOU BROUGHT A SETUP AND SAVED 5 DOLLARS TODAY INSTEAD OF PAYING VENUE FEE! DO IT!$%\
Also I will be bringing and 64 setup tonight so if we get a few more we can run a side bracket later on in the night as today is the 17th anniversary (yes its older than PJ) of the North American release!$%\
---$%\
Dearly beloved$%\
We are gathered here today$%\
To get through this thing called life$%\
https://www.youtube.com/watch?v=MJDuGjMwsow"
	},
	{
		title: "New Game Plus 49: Do your taxes",
		date: "April 12nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1179118748767319/",
		open: false,
		post: "Ready, go!$%\
My spacie don't mess around$%\
Because he loves me so$%\
And is S-tier for sure.$%\
Uh, but do opponents wanna$%\
But can't stand to see me$%\
Shine spike some more.$%\
Don't try to fight the plinkin'$%\
'Cause the thought along will kill you right now..$%\
Uh, thank god for Fox Mcloud$%\
For the hitbox on his up B $%\
'Cause Falco don't know how...$%\
HYAH!$%\
Tor... yah.$%\
Tor yah.$%\
Tor... yah.$%\
Tor yah.$%\
Tor... yah.$%\
Tor yah.$%\
Tor... yah.$%\
Tor yah.$%\
You think im fraudulent$%\
Oh, you think im fraudulent$%\
But fraudulent just don't get it$%\
'Til they're crying at home$%\
We play together$%\
Oh, we play together$%\
But separate's always better when I'm stomping you all$%\
If what they say is \"It's only cause the character\"$%\
Then what makes, then what makes, then what makes$%\
Then what makes, what makes, what makes you play baddies$%\
So why you, why you$%\
Why you, why you, why you $%\
Are you so in denial$%\
When we know we're not casuals here...$%\
Y'all don't wanna play me, you just wanna whine$%\
Tor... yah. (plink plink)$%\
Tor yah. (plink plink)$%\
Tor... yah. (Don't want to fight your DK, plink plink)$%\
Tor yah. (Just want you in my waveshine plink plink)$%\
Tor... yah. (plink plink, don't want to play a low tier plink plink)$%\
Tor yah.. (Just want to make you feel me plink plink)$%\
Tor... yah. (I'm, plink plink I'm, plink plink)$%\
Tor yah. (I'm just playing melee plink plink I'm just playing melee)$%\
---$%\
Now it time for New Game Plus 49: Do your taxes$%\
An astute observation for this week:$%\
\"Mofo hasn't played in 2 months still best ness\"$%\
And holy shit was that true. RIP th0rn.$%\
Normal stuff this week friends:$%\
6:00PM: Venue open for friendlies$%\
7:20PM: Bracket sign ups end.$%\
7:30PM: Bracket begins.$%\
7:35PM: You still ask where you are even though its displayed now.$%\
We got smash.gg rocking this week so prereg if you are cool at: www.smash.gg/NGP49. I will be abset for a second week in a row, as will Vudusa. So that means prereg or hit up SHI MO F'N DENG, or Avery, or post here (and hope they check), if you are to be a late arriver.$%\
Eduardo will be dealing with reserving the limited parking spots so get in contact with him if you are trying to park in the garage.$%\
Ever reach in to your pocket and pull out a 5 you didn't know you have? Relive that feeling by bringing a setup and paying with a 10 only to get a crisp* 5 dollar bill** back$%\
*not guaranteed crisp$%\
**could be 5 ones$%\
tl;dr Hi all. My tournament is tonight and you should go to it.$%\
---$%\
Slow down my friends$%\
https://www.youtube.com/watch?v=67PMG2nVs4k"
	},
	{
		title: "New Game Plus 48: How do I Slox edition",
		date: "April 5th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1174331255912735/",
		open: false,
		post: "\"Talent wins games, but team work and intelligence win championships.\" - Michael Jordan$%\
Teamwork motivation? You know what that means:$%\
New Game Plus 48: How do I Slox edition$%\
YES IT IS DOUBLES. DOUBLES TONIGHT. TWO PEOPLE BECOME ONE TEAM AND FIGHT ANOTHER TEAM.$%\
Following this June 7th is the next teams event.$%\
Straight to the top for the tweet this week:$%\
\"I bustered out at 9th so I guess @C9Mang0 has to win the tournament for me now.\"$%\
What a buster. bbesSquib$%\
Alright schedule pretty simple (I think) tonight.$%\
6:00PM - Friendly time$%\
6:16PM - Complain smash.gg doesnt allow team names$%\
7:20PM - Sign ups close.$%\
7:30PM - Bracket begins.$%\
So it is with great sadness I will not be in attendance tonight. Fret not though as you will still have a wonderful time. For side events I'm sure you can convince the big blue members there to get em poppin.$%\
A smash.gg link will be posted very soon where you and your homie can sign on up. Or if you prefer to speak to a representative, its Vu. Or Avery. Or Shi. But prereg is fly so I recommend it.$%\
Bring a setup, get your venue fee back! Yay! Excellent!$%\
Eduardo will be posting addressing Parking information shortly.$%\
---$%\
Tribute.$%\
https://www.youtube.com/watch?v=njlbh4LNL6s"
	},
	{
		title: "New Game Plus 47: Did France kill Mafia?",
		date: "March 29th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1167647706581090/",
		open: false,
		post: "I used to think that I could not go on$%\
And I was nothing but a DJ meme$%\
But now I know the meaning of survive$%\
I'm living on the everlasting stock$%\
If I can see it, then I can do it$%\
If I just believe it, there's nothing to it$%\
I can learn to DI$%\
I can learn how to not just die$%\
I think about it every time I play$%\
Flip my sticks, DI away$%\
I can learn to last more$%\
I see me living through that fox up throw$%\
I can learn to DI$%\
I can learn to DI$%\
I can learn to DI$%\
---$%\
New Game Plus 47: Did France kill Mafia?$%\
Quick note on parking:$%\
We have *5* spaces in the garage tonight. Eduardo$%\
The same suggestions for parking are below:$%\
There is street parking around the area just pay attention to signage.$%\
10$ - Right behind venue - http://boston.lazparking.com/?np_lot=ashburton-place$%\
13$ - downhill from the venue - http://boston.lazparking.com/?np_lot=center-plaza-garage$%\
We got as wish from the top of NE's PR this week:$%\
\"my 11:11 wish is that i'll wake up and Falco will be removed from the game\"$%\
See people don't only hate icices.$%\
Little bit of TMG action today:$%\
6:00: Venue open for friendlies$%\
6:30: BC vs MIT Melee Games$%\
7:20: Bracket sign ups end.$%\
7:30: Bracket begins.$%\
7:31: It becomes clear I missed somone during seeding.$%\
No fancy dancy pre-reg this week. Just hit this post up hard with the sign ups. It makes it easier for meeeeee. Otherwise if you will be late or just wanna get all up in there, let me or pikaVU know and we will get you in there pronto.$%\
Tryna get that 5 dollars back? Bring the setup yo, mo setups, mo friendlies, mo improvement.$%\
---$%\
Uh oh$%\
https://www.youtube.com/watch?v=zi9s1gPmR7g"
	},
	{
		title: "New Game Plus 46: We love you New England Melee edition",
		date: "March 22nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1159463550732839/",
		open: false,
		post: "If I should play, I'll only salt your way$%\
So I'll go, but I know I'll$%\
Think of you every tilt of the way$%\
And I will always wobble you$%\
I will always wobble you$%\
You, my darling you, hmmm,$%\
Johnning memories$%\
That is all I'm taking with me$%\
So, get good$%\
Please, don't cry$%\
We both know it's not why you, you lost$%\
And I will always wobble you$%\
I will always wobble you$%\
I hope peach treats you kind$%\
And I hope it's as free as you've dreamed of$%\
And I wish to you, joy and happiness$%\
But above all this, I'll beat you still$%\
And I will always wobble you$%\
I will always wobble you$%\
I will always wobble you$%\
I will always wobble you$%\
I will always wobble you$%\
I, I will always wobble you$%\
You, darling, I'll beat you$%\
Oh, I'll always, I will always wobble you$%\
---$%\
It's the 46th New Game Plus: We love you New England Melee edition$%\
A tweet for this week:$%\
\"yo! Shine 2016 is happening! it's lit\"$%\
One of many similar this week, you guys da besssss.$%\
Normal stuff this week friends:$%\
6:00PM: Venue open for friendlies$%\
7:20PM: Bracket sign ups end.$%\
7:30PM: Bracket begins.$%\
6-Midnight: High fiving for Shine!$%\
There is no pre-reg this week so do the thang. I'll be adding people who post here, people who message me directly and even people who make an entry in the Vudoopedia.$%\
We had a lot of setups last week. It was sick. There was 3-4 friendlies all night. Lets do it againnn. BRING SETUPS, GET 5 DOLLARS BACK!!!!!!!!$%\
---$%\
Been feeling this album (this is track 1) my friends.$%\
https://www.youtube.com/watch?v=fg5IOgbPlTg"
	},
	{
		title: "New Game Plus 45 - Special Announcement Edition",
		date: "March 15th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1153359794676548/",
		open: false,
		post: "\"One of the things I learned the hard way was that it doesn't pay to get discouraged. Keeping busy and making optimism a way of life can restore your faith in yourself.\"$%\
- Lucille Ball$%\
---$%\
It's time for the 45th installment of New Game Plus - Special Announcement Edition. Make sure to check twitter and tune in tonight!!!$%\
A tweet for this week:$%\
\"Can't sleep, keep thinking about Shk Shks puff... So much I don't know about melee. I want to keep learning!\"$%\
I mean who hasn't been there, if not the puff at least the man himself.$%\
Something fancy this week:$%\
6:00PM: Venue open for friendlies$%\
6:30PM: Boston College vs Colleges of the Fenway$%\
7:20PM: Bracket sign ups end.$%\
7:30PM: Bracket begins.$%\
X:XXPM: _e_ _n_____'s _i__t _ __y _a__r _h__e _0__ __ _n____c_d _i_ a _op_ _i__o __d r__ _o_s __v_! $%\
X:XX+5PM: Hype overwhelming.$%\
There is no pre-reg this week so you know what to do. Post here to get in early (suggested). Show up before 7:20 (pretty solid). Contact DaVuster or Meeeee (also solid). Show up after 7:20 and slip me a $100 (greatly suggested).$%\
Bring that setup homies. Get those 5 singles, a fiver, 20 quarters, whatever back and roll deep. Or just lose it in money matches. Point is BRING SOME SETUPS YO.$%\
---$%\
We all shine on...$%\
https://www.youtube.com/watch?v=vEjUQ15lyzk"
	},
	{
		title: "New Game Plus 44",
		date: "March 8th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1148548335157694/",
		open: false,
		post: "You think I'm just an ignorant scrublord$%\
And you've top eighted many events; I guess it must be so$%\
But still I cannot see, if the scrubby one is me$%\
How can there be so much that you don't know?$%\
You don't know...$%\
You think you own whatever stage you play on$%\
The game is just a dead thing you can claim$%\
But I know every Pichu and DK and Dorf main$%\
Has a life, has a spirit, has a name.$%\
You think the only people who are people$%\
Are the people who play a top tier like you$%\
But if you walk the footsteps of a Roy main$%\
You'll learn things you never knew you never knew$%\
Have you ever heard a Link cry to the Termina Bay moon$%\
Or asked the plumbing brothers why they plumbed$%\
Can you egg with all the angles of the Yoshi$%\
Can you gimp with all the colors of Kirby?$%\
Can you gimp with all the colors of Kirby?$%\
---$%\
Yeaaaahhh boiiiii its time for New Game Plus 44. Singles! Doubles is April 5th.$%\
Parking is available but if you do park in the church garage give your keys to the concierge or to Eduardo when you arrive.$%\
We start with our second smasher tweet/quote of the week:$%\
\"our friendship is determined by how much u enjoy the song \"hella good\" by no doubt at incredible volumes\"$%\
Our friendship would be rock steady to say the least.$%\
Nothing fancy this week, just another week of dope melee:$%\
6:00PM: Venue open for friendlies$%\
7:20PM: Bracket sign ups end.$%\
7:30PM: Bracket begins.$%\
7:35PM: I enter Ant into bracket.$%\
There is no pre-reg this week so you know what to do. You can post right here as a pseudo-prereg. You can personally message Vu-ney Tunes or myself and get in. I guess you could email me if for some reason you had my email. Point is the earlier the better but you can always just show up on time!$%\
You are a person that enjoys $5. You are a person that has a full setup. BRING THE SETUP KEEP THE $5 FOR VENUE! (vanilla setups are encouraged over any form of modded one but any will do and are appreciated).$%\
---$%\
Weeeeeeeeeeen$%\
https://www.youtube.com/watch?v=_F39uC9IlI0"
	},
	{
		title: "New Game Plus 43",
		date: "March 1st, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1143930058952855/",
		open: false,
		post: "Asked a pro what they want me to be$%\
They said baby, \"Can't you see$%\
I want you to be mad good, 4 stocks on the screen$%\
But you can do something in between\"$%\
Baby you can change your lane$%\
Yes I'm a flexin fox main$%\
Baby you can change your lane$%\
And maybe I'll play you$%\
I told the pro that my tech skill was good$%\
And they said baby, \"It's understood$%\
Shining scrubs is all very fine$%\
But I can show you a better time\"$%\
Baby you can change your lane$%\
Yes I'm a flexin fox main$%\
Baby you can change your lane$%\
And maybe I'll play you$%\
Plink plink m' plink plink yeah$%\
Baby you can change your lane$%\
Yes I'm a flexin fox main$%\
Baby you can change your lane$%\
And maybe I'll play you$%\
I told that pro I can train right away$%\
And they said, \"Listen baby I got something to say$%\
You're kinda bad and it's breaking my heart$%\
But I've found a tryhard and that's a start\"$%\
Baby you can change your lane$%\
Yes I'm a flexin fox main$%\
Baby you can change your lane$%\
And maybe I'll play you$%\
Plink plink m' plink plink yeah$%\
Plink plink m' plink plink yeah$%\
Plink plink m' plink plink yeah$%\
Plink plink m' plink plink yeah...$%\
---$%\
It is time for the SINGLES EVENT known as New Game Plus 43.$%\
No doubles until April 5th.$%\
We got the whole venue tonight so no cap or anything like that. But you can preregister here:$%\
smash.gg/ngp-43$%\
IF YOU ARE DRIVING AND PARKING IN THE VENUE GIVE YOUR KEYS TO THE CONCIERGE OR EDUARDO$%\
Some questions I had for myself:$%\
Are you going to stop doing Q&A? Yes. It's lame.$%\
What will replace it? Smasher/Quote of the week$%\
What will that be like? This.$%\
And our inagural tweet/overheard quote of the week:$%\
\"I think my fox can slay every puff at NGP now$%\
I'll either be eatin this tweet later or the puff players will be eatin these lazers ¯\_(ツ)_/¯\"$%\
Tweeted by someone very very notable.$%\
So we have some TMG Matches tonight that will take up a round or two of stream time.$%\
Schedule:$%\
6pm: Friendlies open up$%\
6pm-Endpm: CoF vs MCC, BC vs MCC, Berklee vs NEU, Berklee vs BU$%\
7:20pm: Bracket sign up ends$%\
7:30pm: Bracket begins$%\
If you will be late tonight, ideally you will just sign up early on the smash.gg link but in the worst case scenario you know what to do. Don't show up. JK just hit me up, or Do the Vu. Or just show up on time!$%\
Bring some setups, we got the space to set up a friendly area early if we have 16 setups too use (and we start with 12ish)! Plus you get the 5 bone dangalangs back.$%\
---$%\
I hope you like belgian prog rock:$%\
https://www.youtube.com/watch?v=6GaqYEG6e3s"
	},
	{
		title: "New Game Plus 42",
		date: "February 23rd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1139525522726642/",
		open: false,
		post: "\"At most 83 years from now, in a galaxy literally right here,$%\
It is a period of civil war. Rebel falcons, kneeing from a downward throw, have won their first victory against the evil Spacie Empire. During the battle, Rebel eskimos managed to steal secret plans to the Empire’s ultimate weapon, the FUCKING SHINE, some invincible spacie nonsense causing enough salt to wipe out all the snails.$%\
Pursued by the Empire’s sinister birds, Princess Peach floats back with her parasol, custodian of the stolen plans that can save her game and restore freedom from 20XX…\"$%\
---$%\
Yoyo its time for New Game Plus 42.$%\
GO CRAZY AND PREREGISTER (you don't pay online just note you are coming): $%\
https://smash.gg/tournament/new-game-plus-42$%\
Now we will be running a tight ship tonight as the Church has some guests staying over that we don't want to keep up all night.$%\
Final reminder of new location:$%\
Church on the Hill$%\
140 Bowdoin St, Boston, MA 02108$%\
The door is labeled 140 Bowdoin St, not the main entrance.$%\
Visualization: http://imgur.com/ElAo0IK$%\
Walk in and keep heading forward (up some stairs) until you find smashers. You will get to an office (possibly with someone working), look left, you found us.$%\
Also reminder for parkers: Parking is left of the door and there should be a concierge there to assist (LEAVE YOUR KEYS) but if not contact Eduardo.$%\
Questions? Sure. Relevant? Meh. Answers? Def.$%\
Street Figter 5 side bracket?! Please.$%\
What are you eating? Pineapple Fried Rice$%\
Will Crush remain undefeated at the Church? That's on you! YES YOU!$%\
We are keeping it the same suprisingly:$%\
6:00pm Friendlies start$%\
7:20pm Sign up ends.$%\
7:30pm Bracket begins.$%\
So even better than contacting us hit up that smash.gg my peops. But if for any reason you are unable to do that you are welcome to contact me or Vulociraptor about your arrival time.$%\
We do have a bunch of setups these days but who doesnt want more? Bring dem setups and get venue waived.$%\
---$%\
We mashing this week friends:$%\
https://www.youtube.com/watch?v=nN02ZxTRIqA"
	},
	{
		title: "New Game Plus 41",
		date: "February 16th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1135355416476986/",
		open: false,
		post: "\"We shall go on to the end. We shall fight in Dreamland, we shall fight on the Fountain and Stadium, we shall fight with growing confidence and growing strength in the air, we shall defend our stocks, whatever the cost may be. We shall fight on the Battlefield, we shall fight on the Final Destination, we shall fight on the platforms and on the stage, we shall fight on the Island; we shall never ragequit\" - Foxston Churchhill$%\
---$%\
It is time for NGP 41!$%\
Quick reminder of new location:$%\
Church on the Hill$%\
140 Bowdoin St, Boston, MA 02108$%\
The door is labeled 140 Bowdoin St, not the main entrance.$%\
Visualization: http://imgur.com/ElAo0IK$%\
Walk in and keep heading forward (up some stairs) until you find smashers. You will get to an office (possibly with someone working), look left, you found us.$%\
Also reminder for parkers: Parking is left of the door and there should be a concierge there to assist but if not contact Eduardo.$%\
Also reminder for ballers: Our main man Peter Fotis, bearded god of New England, in his ever vigilant mission to smash all over New England (and deny CT those sweet sweet Circuit points) unfortunately totaled his car returning fellow smashers to their homes. 3$ of all venue collected tonight will be going to him in efforts to get him back out there styling all over your faces in a fresh whip.$%\
Little bit of question, little bit of answer:$%\
There are rumblings of friendly setups being available all night, confirm or deny? Confirm, if we have 16 already for bracket.$%\
How tight is the Head2Head setup? Real tight.$%\
Can we order a bunch of food and just demolish it at the venue? Yes of course.$%\
As stated the schedule is unchanged:$%\
6:00pm Friendlies start$%\
7:20pm Sign up ends.$%\
7:30pm Bracket begins.$%\
Unfortunately this evening I will not be able to attend. But fret not The Fantastic Mr. Vudoo will be prepared to take sign ups and get that bracket moving. Contact him, Shi, or Eduardo, and you should be able to secure your spot in bracket! (There is no cap but bracket starts at 7:30 so if late just tell them!)$%\
Bring some setups yo, get some of that cheddar back, Tichinde will be there but with all these TVs, just think of the friendlies!$%\
---$%\
Take it easy friends,$%\
https://www.youtube.com/watch?v=GcCNcgoyG_0"
	},
	{
		title: "New Game Plus 40",
		date: "February 9th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1131327253546469/",
		open: false,
		post: "My princess's got humor$%\
She drops booty to ya funeral$%\
Knows her dress spinning is brutal$%\
I should've switched to her sooner$%\
All those times destroyed by stitch$%\
She is the last true topbitch$%\
Every Tuesday's getting more sleak$%\
A fresh turnip each week$%\
'We were born sick,' you heard them say it$%\
My church offers no absolutes$%\
She tells me 'worship in the kingdom'$%\
The only heaven I'll be sent to$%\
Is when I style hard with you$%\
I was born sick, but I love it$%\
Command me to be dope$%\
Amen. Amen. Amen$%\
Take me to church$%\
I'll worship like a toad at the land of your dreams$%\
I'll show you my heels and you can try to di$%\
Offer me that deathless death$%\
Good God, let me give you my life$%\
Take me to church... ON THE HILL FOR NEW GAME PLUS 40!$%\
Tonight is the first NGP for the New England RIP (Regional Improvement Plan)!$%\
----------------------------READ BELOW----------------------------$%\
DO NOT GO TO OSAKAS YOU WILL BE DISSAPOINTED IN LACK OF MELEE.$%\
GO TO:$%\
Church on the Hill$%\
140 Bowdoin St, Boston, MA 02108$%\
The door is labeled 140 Bowdoin St, not the main entrance.$%\
Visualization: http://imgur.com/ElAo0IK$%\
Please use caution if you are driving as its still gross out there, public trans is encouraged and convenient to the location.$%\
----------------------------READ ABOVE----------------------------$%\
Walk in and keep heading forward (up some stairs) until you find smashers.$%\
Now we have real Q&A.$%\
I am driving and want to park, what do?$%\
Contact Eduardo as you are arriving. If you need his number ask him or I for it. If for some reason you have failed to do any of those just contact me. I don't know what street parking is like there.$%\
Can I bring food and drink?$%\
Yes. THROW TRASH OUT.$%\
Has anything changed outside of location and food/drink policy?$%\
Yes, there is no cap. And the setup is doper (albeit with less tvs for seeing stream, just one big one). Also if we get <16 setups all the extras will be friendlies.$%\
As stated the schedule is unchanged:$%\
6:00pm Friendlies start$%\
6-7:20pm We finish those brackets we couldnt as best we can.$%\
7:20pm Sign up$%\
7:30 Bracket begins.$%\
Alright so again same stuff, different location, if you are going to be later than bracket sign ups end please contact Me or Darth Vudoo. We will get you in to bracket so you don't miss out on the fun. Even if you will be past bracket start we can do our best to delay you match (within reason) so you can still play!$%\
BRING SETUPS CAUSE JOERSON WILL NOT BE HERE AND YOU LOVE 5 DOLLARS!$%\
---$%\
We in there.$%\
https://www.youtube.com/watch?v=SfyesrGMCxI"
	},
	{
		title: "New Game Plus 39",
		date: "February 2nd, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1127428363936358/",
		open: false,
		post: "They say we're bad and we don't know$%\
We won't find out until we grow$%\
Well I don't know if all that's true$%\
'Cause you got me, and baby I got you$%\
Babe$%\
I got you babe$%\
I got you babe$%\
They say our love won't win the event$%\
Before it's earned, our money's all been spent$%\
I guess that's so, we don't have a shot$%\
But at least I'm sure of all the things we got$%\
Babe$%\
I got you babe$%\
I got you babe$%\
I got the grab for the wombo$%\
I got you to hit the combo$%\
And I'm offstage, you're coming down$%\
And if your stocks empty, mines yours ya know$%\
Don't let them say your approach is all wrong$%\
'Cause I don't care, with you I can't go wrong$%\
Then put your little hand in mine$%\
There ain't no teams or players we can't climb$%\
Babe$%\
I got you babe$%\
I got you babe$%\
---$%\
Oh yes New Game Plus 39.$%\
39$%\
3 x 3 = 9$%\
2/2/2016$%\
2 * 2 * 2 + 0 + 1 = 9$%\
9 = 9$%\
Doubles confirmed.$%\
Yes its doubles, yes the cap is 50 teams, yes there will be low tiers and reverse mains brackets to round out the night.$%\
Some silly questions, some serious answers:$%\
Did Punxsutawney Phil see his shadow? Nope! short winter! JK hes usually wrong.$%\
Does Blahyay have a teammate? I mean yeah right now, till MDZ cancels.$%\
Since today will repeat indefinitely will I get good at doubles? I'd hope so.$%\
Schedule pretty (completely) standard today$%\
6pm: friendlies begin$%\
7:20pm: Sign ups end$%\
7:30pm: Bracket time friends$%\
Sometimepm: Low Tiers and Reverse Mains sign ups and brackets$%\
39 NGPS later and the game is unchanged. Hit me or the Vu-lord up if you are going to be late or just want to secure your teams spot in bracket tonight.$%\
BRING DEE SETUPS. FRIENDLIES POP OFF EARLY ON DOUBLES NIGHTS SO MORE THE BETTER!$%\
As you should know to prevent some awkwardness next week. This is the final NGP at Osakas. We are moving next week to the Smash on the Hill Venue, aptly named Church on the Hill. Located at 140 Bowdoin St, Boston, MA 02108 it is just a few minute (uphill) walk from Park Street station. As I understand it there is also parking Eduardo can give further details on that.$%\
---$%\
Goodbye sweet Osakas:$%\
https://www.youtube.com/watch?v=0JAy_NEm8Gs"
	},
	{
		title: "New Game Plus 38",
		date: "January 26th, 2016",
		link: "https://www.facebook.com/groups/NewEnglandMelee/permalink/1123488934330301/",
		open: false,
		post: "It's close to bracket and something evil's lurking in the dark$%\
Under the dim light you see a sight that almost stops your heart$%\
You try to scream but terror takes the sound before you make it$%\
You start to freeze as ice blocks hit you right between the eyes,$%\
You're CaptureDamaged$%\
'Cause this is wobbling, wobbling night$%\
And no one's gonna save you from the beasts about to strike$%\
You know it's wobbling, wobbling night$%\
You're mashing for your life inside to sobbing wobbling, tonight$%\
You see the girl grab and realize there's nowhere left to run$%\
You watch the cold tilts and wonder if you'll ever break the stun$%\
You close your eyes and hope that this is just imagination$%\
But all the while you hear the tapping sound in ya mind$%\
You're out of time$%\
'Cause this is wobbling, wobbling night$%\
There ain't no second chance against eskimos with beady eyes$%\
You know it's wobbling, wobbling night$%\
You're mashing for your life inside to sobbing wobbling, tonight$%\
---$%\
You know what that means, it's time for New Game Plus 38!$%\
A man approached me in an alley with these questions:$%\
Of the top 8 who is left to win NGP? Puff and Shiek.$%\
Will the NE Summit have a dope name? Yeah, working on it.$%\
Will VODs ever be prompt again? Yes. Shi will remember the USB this week. One hopes.$%\
Nothing fancy tonight. DOUBLES IS NEXT WEEK. DOUBLES IS NEXT WEEK. There I said it twice.$%\
6:00 - Break in those hands, practice up some hawt techs$%\
7:20 - So help me Master Hand be signed up for bracket$%\
7:30 - Brackettttt yayyyyy woooo go youuuu$%\
We did not cap last week but anything is possible. The cap will exist indefinitely while we are at Osakas. As such get your preparation on and hit me or the TO formerly known as Vu know of your intent to enter bracket, or feel free to post right here on this very post with your tags.$%\
---$%\
So this weekend (all 3 are on Saturday) we have the first three NE Circuit events.$%\
Mass Madness:$%\
5 Venue, 10 Singles, 10/team Doubles$%\
Doubles (1:00pm), Singles (5:00pm)$%\
Game Underground$%\
1245 Worcester St, Ste 1094, Natick, Massachusetts 01760$%\
The Workshop 4:$%\
5 Venue, 10 Singles, 10/team Doubles$%\
Doubles (12:00pm), Singles (2:00pm)$%\
El Taller$%\
275 Essex St, Lawrence, Massachusetts 01840$%\
Maine Competitive Gaming Monthly:$%\
5 Venue, 10 Singles$%\
Singles (4:30pm)$%\
Howard Johnson$%\
675 Main St, South Portland, Maine 04106$%\
The full details of the circuit will be out Thursday night. Get pumped up.$%\
---$%\
Got 25 minutes to listen to one song?$%\
https://www.youtube.com/watch?v=fodtPNjze4I"
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
    			console.log($scope.tournamentList[i].post.indexOf("https:"));
    			var linkdest = $scope.tournamentList[i].post.substring($scope.tournamentList[i].post.indexOf("https://www"));
    			linkdest = "<a href=\""+linkdest+"\" target=\"_blank\">https:";
    			console.log(linkdest);
    			$scope.tournamentList[i].post = $scope.tournamentList[i].post.replace("https://www", linkdest);
    			$scope.tournamentList[i].post = $scope.tournamentList[i].post + "</a>";
    			console.log($scope.tournamentList[i].post);
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
