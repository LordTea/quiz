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
        var totalScore;
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

function calculateScore(a, b, c, d, e){
    return (a+b+c+d+e);
}