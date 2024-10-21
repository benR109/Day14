let fname = "";

function green() {
    let greetParagraph = document.getElementById("green")

    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let fname = document.getElementById("fname").value;

    greetParagraph.innerHTML = "Greetings" + age +"year old" + fname + " " + lname;
}

function trivial1() {
    let triviaAnswer = document.getElementById(" trivial-answer");

    //Get values from form
    let chocolateSelected = document.getElementById("chocolate").Checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //Give results based off of what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wromg. Sweet tooth eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!!";
    }

} 