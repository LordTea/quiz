/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var badQuiz = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        
        var q1Score = scoreQ1(q1Result);
        var q2Score = scoreQ2(q2Result);
        var q3Score = scoreQ3(q3Result);
        var q4Score = scoreQ4(q4Result);
        var q5Score = scoreQ5(q5Result);
        
        var score = calculateScore(q1Score, q2Score, q3Score, q4Score, q5Score);
        var result = giveResults(score);
        
        window.location.replace(result);
    });
});

function scoreQ1(name){
    if ((name).toUpperCase().trim() === "BEN SHAPIRO"){
        return 100;
        
    } else {
        return -50;
    }
}

function scoreQ2(num){
    if (num <= 10 && num >= 1){
        return (50 - (num*10));
    } else {
        return -100;
    }
}

function scoreQ3(side){
    if (side.toUpperCase().trim() === "LIBERAL"){
        return -2304;
    } else if (side.toUpperCase().trim() === "CONSERVATIVE"){
        return 200;
    } else if (side.toUpperCase().trim() === "BEN SHAPIRO"){
        return 1044;
    } else {
        return -1041;
    }
}

function scoreQ4(IQ){
    if (IQ >= 0 && IQ <= 200){
        return (IQ*10);
    } else {
        return -134;
    }
}

function scoreQ5(one){
    if (one.toUpperCase().trim() === "FACTS"){
        return 420;
    } else if (one.toUpperCase().trim() === "FEELINGS"){
        return -324;
    } else {
        return -1020;
    }
}

function calculateScore(a, b, c, d, e){
    return (a+b+c+d+e);
}

function giveResults(score){
    if (score >= -3608 && score <= -2000){
        return ("https://www.buzzfeed.com/alexisnedd/can-you-spot-the-fuckboy?utm_term=.oaAlDAlqOz");
    } else if (score >= -1999 && score <= -500){
        return ("https://www.buzzfeed.com/crystalro/would-you-rather-disney-men-sex?origin=fil-wo");
    } else if (score >= -499 && score <= 999){
        return ("https://www.buzzfeed.com/dbesim1/we-know-your-fetish-based-on-your-choice-of-ice-cr-3fne9?origin=fil-ca");
    } else if (score >= 1000 && score <= 1999){
        return ("https://www.buzzfeed.com/carynesch/fortnite-dance-quiz");
    } else if (score >= 2000 && score <= 3000){
        return ("https://www.buzzfeed.com/cassiesmyth/answer-these-8-questions-and-well-tell-you-what-2018-meme");
    } else if (score > 3000){
        return ("https://www.buzzfeed.com/jakecharleslaycock/muscially-star-quiz");
    }
}