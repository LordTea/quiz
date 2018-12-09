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
        var q6Result = $("#question6").val();
        var q7Result = $("#question7").val();
        var q8Result = $("#question8").val();
        var q9Result = $("#question9").val();
        
        var q1Score = scoreQ1(q1Result);
        var q2Score = scoreQ2(q2Result);
        var q3Score = scoreQ3(q3Result);
        var q4Score = scoreQ4(q4Result);
        var q5Score = scoreQ5(q5Result);
        var q6Score = scoreQ6(q6Result);
        var q7Score = scoreQ7(q7Result);
        var q8Score = scoreQ8(q8Result);
        var q9Score = scoreQ9(q9Result);
        
        var answers = [q1Score, q2Score, q3Score, q4Score, q5Score, q6Score, q7Score, q8Score, q9Score];
        
        for (var i = 0; i < 8; i++){
            checkResponse(answers[i],i+1);
        }
        
        checkResponse(q9Score, 9);
        
        var Iscore = calculateScore(q2Score, q6Score, q7Score, q8Score);
        var Tscore = calculateScore(q3Score, q4Score, q5Score, q9Score);
        
        giveTeam(q1Result,giveResults(Iscore,Tscore));
        
    });
});

function scoreQ1(name){
    if (name.trim()===""){
        return "NA";
    } else {
        return 0;
    }
}

function scoreQ2(choice){
    if(choice.toLowerCase().trim()==="yes"){
        return -1;
    } else if (choice.toLowerCase().trim()==="no"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ3(choice){
    if(choice.toLowerCase().trim()==="work"){
        return -1;
    } else if (choice.toLowerCase().trim()==="help"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ4(choice){
    if(choice.toLowerCase().trim()==="no"){
        return -1;
    } else if (choice.toLowerCase().trim()==="yes"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ5(choice){
    if(choice.toLowerCase().trim()==="silence"){
        return -1;
    } else if (choice.toLowerCase().trim()==="speak"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ6(choice){
    if(choice.toLowerCase().trim()==="leave"){
        return -1;
    } else if (choice.toLowerCase().trim()==="stay"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ7(choice){
    if(choice.toLowerCase().trim()==="hide"){
        return -1;
    } else if (choice.toLowerCase().trim()==="show"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ8(choice){
    if(choice.toLowerCase().trim()==="no"){
        return -1;
    } else if (choice.toLowerCase().trim()==="yes"){
        return 1; 
    } else {
        return "NA";
    }
}

function scoreQ9(choice){
    if(choice.toLowerCase().trim()==="wait"){
        return -1;
    } else if (choice.toLowerCase().trim()==="accuse"){
        return 1; 
    } else {
        return "NA";
    }
}

function calculateScore(a, b, c, d){
    return (a+b+c+d);
}

function checkResponse(question, qnum){
    if (question==="NA"){
        noAnswer(qnum);
    } else {
        $("#noResponse" + qnum).text("");
    }
}


function noAnswer(qnum){
    $("#noResponse" + qnum).text("*You must leave a response.");
}

function giveResults(Iscore,Tscore){
    var returns;
    if (Iscore >= -4 && Iscore <= 4){
        if (Iscore >= 2){
            returns = "a";
        } else if (Iscore >= -1) {
            returns = "b";
        } else if (Iscore >= -4) {
            returns = "C";
        }
    } else {
        return;
    }
    if (Tscore >= -4 && Tscore <= 4){
        if (Tscore >= 2){
            returns = returns + "A";
        } else if (Tscore >= -1) {
            returns = returns + "B";
        } else if (Tscore >= -4) {
            returns = returns + "C";
        }
    } else {
        return; 
    }
    return returns;
}
function giveTeam(q1result,pair){
    $("#end").html("<h2>Congratulations, "+q1result+". Your results have been recorded. </h2>");
    if (pair ==="aA"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/8/80/A_New_Challenger_Approaches_-_Shirvallah%27s_Tigers.png/369px-A_New_Challenger_Approaches_-_Shirvallah%27s_Tigers.png?version=90de6b9aa6e252097940e5725ece7233'>");
        $("#result-text").html("<h3> You would be a Tiger. Brave and a little bit arrogant, they honor fairness and integrety. </h3>");
    }
    if (pair ==="bA"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/8/88/A_New_Challenger_Approaches_-_Akali%27s_Rhinos.png/369px-A_New_Challenger_Approaches_-_Akali%27s_Rhinos.png?version=3ab0725491b3b35b8c5e47eb5ab68f33'>");
        $("#result-text").html("<h3> You would be a Rhino. Reckless and powerful, they rush out first and ask questions after.</h3>");
    }
    if (pair ==="cA"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/e/ed/A_New_Challenger_Approaches_-_Gonk%27s_Raptors.png/369px-A_New_Challenger_Approaches_-_Gonk%27s_Raptors.png?version=57959b38199a6fadc6e3a9be69d637f2'>");
        $("#result-text").html("<h3> You would be a Raptor. Swift and adaptable, they like to face their problems head on. </h3>");
    }
    if (pair ==="aB"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/5/5a/A_New_Challenger_Approaches_-_Halazzi%27s_Lynxes.png/369px-A_New_Challenger_Approaches_-_Halazzi%27s_Lynxes.png?version=87588f9faeea59e591fe5e4bdf00d905'>");
        $("#result-text").html("<h3> You would be a Lynx. Crafty and quick, they wait for the perfect opportunity to strike their enemies. </h3>");
    }
    if (pair ==="bB"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/d/dc/A_New_Challenger_Approaches_-_Jan%27alai%27s_Dragonhawks.png/369px-A_New_Challenger_Approaches_-_Jan%27alai%27s_Dragonhawks.png?version=ea4f8c14409cb52837a946a8eb0dc28f'>");
        $("#result-text").html("<h3> You would be a Dragonhawk. Hotheaded and brimming with energy, these pyromaniacs know how to ignite the crowd.</h3>");
    }
    if (pair ==="cB"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/0/00/A_New_Challenger_Approaches_-_Hir%27eek%27s_Bats.png/369px-A_New_Challenger_Approaches_-_Hir%27eek%27s_Bats.png?version=de4a0df6402fe7f7f459929b4c2ccb04'>");
        $("#result-text").html("<h3> You would be a Bat. Loud and dreadful, they are wlling to make all the sacrifices they need to achieve success.</h3>");
    }
    if (pair ==="aC"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/5/53/A_New_Challenger_Approaches_-_Krag%27wa%27s_Frogs.png/369px-A_New_Challenger_Approaches_-_Krag%27wa%27s_Frogs.png?version=6166e0cc1f59131b0beb75fd92e34f0d'>");
        $("#result-text").html("<h3> You would be a Frog. Calm and patient, they are strange and carefree with their nature, like a frog.</h3>");
    }
    if (pair ==="bC"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/2/2e/A_New_Challenger_Approaches_-_Bwonsamdi%27s_Zombies.png/369px-A_New_Challenger_Approaches_-_Bwonsamdi%27s_Zombies.png?version=00b49f448da778db954e134edd6b2551'>");
        $("#result-text").html("<h3> You would be a Zombie. Persistant and eccentric, they will continue on even no matter what. Just because you're dead doesn't mean you're off the team.</h3>");
    }
    if (pair ==="cC"){
        $("#result-image").html("<img src='https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/4/41/A_New_Challenger_Approaches_-_Gral%27s_Sharks.png/369px-A_New_Challenger_Approaches_-_Gral%27s_Sharks.png?version=de83b8bda3da0360510e9e7349d99fd2'>");
        $("#result-text").html("<h3> You would be a Shark. Uncaring and intellegent, they are willing to do whatever it takes to achive victory. Even if it means breaking the non-existant rules.</h3>");
    }
}