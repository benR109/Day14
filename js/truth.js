let fname = "";

function green() {
    let greetParagraph = document.getElementById("green");

    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    fname = document.getElementById("fname").value;  // Removed 'let'

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    // Get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // Give results based off of what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!!";
    }
}

function truth() {
    let truthAnswer = document.getElementById("truth-answer");

    let truth1Selected = document.getElementById("truth1").checked;
    let lie1Selected = document.getElementById("lie1").checked;
    let truth2Selected = document.getElementById("truth2").checked;

   
    if (truth1Selected) {
        truthAnswer.innerHTML = fname + ", you are wrong. Always loved the snow and cold";
    }
    else if (lie1Selected) {
        truthAnswer.innerHTML = fname + ", you are correct!!";
    }
    else if (truth2Selected) {
        truthAnswer.innerHTML = fname + ", you are wrong. My family loves to travel and see new places";
    }
}