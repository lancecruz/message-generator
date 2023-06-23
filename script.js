const messageArray = [
    "I know you are feeling",
    "right now."
];

function selectRandomValue (arr) {
    if (arr != null) {
        return arr[Math.floor(Math.random() * arr.length)];
    } else {
        console.log("Array is empty!");
    }
}

document.getElementById("generateButton").onclick = () => {
    let verb1Array = ["scared", "tired", "hopeless"];
    let verb2Array = ["pulling", "dragging", "bashing"];
    let verb3Array = ["fighting", "pushing", "believing"];
    let adjectiveArray1 = ["strong", "brave", "resilient"];
    let adjectiveArray2 = ["stronger", "braver", "tougher"];

    let chosenVerb1 = selectRandomValue(verb1Array);
    let chosenVerb2 = selectRandomValue(verb2Array);
    let chosenVerb3 = selectRandomValue(verb3Array);
    let chosenAdjective1 = selectRandomValue(adjectiveArray1);
    let chosenAdjective2 = selectRandomValue(adjectiveArray2);

    let message = `I know you are feeling ${chosenVerb1} right now. Like an invisible force is ${chosenVerb2} you down.
    I'm here to tell you to be ${chosenAdjective1}. Things will get better. You are a lot ${chosenAdjective2} than you think! 
    Keep ${chosenVerb3}! You can do this!`;

    document.getElementById("message").innerHTML = message;
};