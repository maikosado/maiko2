/* 
var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var yourName = upperCaseFirstChar + restOfName;
alert("Hello, " + yourName + "! Welcome to Maiko's page🍎");

var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge-2)*4)+21;
alert("Your dog is " + humanAge + " years old in human years.");

var message = prompt("Message me within 100 characters!");
alert("You have written " + message.length + " characters." + " You can write more " + (100-message.length) + " characters.");

prompt("What is your beloved one's name?")
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " +loveScore + "%."); 
*/

//★top
$(".top-title").hover(
    function(){
        $(".top-title").slideUp().slideDown().animate({opacity: 0.5});  
    });


//★indication
$(".indication-logo1").hover(
    function(){
        $(".indication1").fadeIn();  
    },
    function(){
        $(".indication1").fadeOut();
    });

//★contact
$(".contact-btn").click(
    function(){
        $(".thanks-btn").show();  
    });
