
const socket = io();
socket.on("message", data => {
    console.log(data);
});

let textbox = $("#text");
let text;
let characters = [];
let flash;
socket.on("text", data => {

    text = data;

    for (let i = 0; i < text.length; i++) { // add individual spans of the characters into textbox
        let c = $(`<span>${text[i]}</span>`);
        characters.push(c);
        textbox.append(c);
    }

    flash = setInterval(() => { // flashing caret
        let c = characters[caret];

        if (c.css("text-decoration").includes("underline")) {
            c.css("text-decoration", "none");
        } else {
            c.css("text-decoration", "underline");
        }
    }, 200);

});

let caret = 0; // current position in text

const gray = "#495057";
const red = "#ff8989";
const green = "#46b343";
let error = -1; // won't allow correct letters if this is not -1
let input = $("#input");
let timer;
let startTime;
let correct = 0;
let total = 0;
input.keydown(e => {

    if (!startTime) {
        startTime = new Date().getTime();
        const words = text.split(" ").length;
        timer = setInterval(() => {

            let time = (new Date().getTime() - startTime) / 1000;
            let completion = (caret / text.length) * words; // approximate words completed

            let speed = 60 * completion / time;
            let accuracy = correct / total;
            let score = speed * accuracy;

            $("#speed").text(speed.toFixed(0));
            $("#accuracy").text((accuracy * 100).toFixed(2));
            $("#score").text((accuracy * speed).toFixed(0))

        }, 500)
    }

    let c = e.key;
    if (c.toLowerCase().match(/^[a-z .,?!0-9'"()%$;:\-]$/) && caret < text.length) {

        if (c === " ") { // space, if it isn't clear

            if (error === -1) {
                input.val(""); // empty input only if there are no errors
                characters[caret].css("text-decoration", "none"); // since skipping a space, caret might get stuck
                caret++;
            }

            e.preventDefault(); // don't actually enter a space

        } else {

            if (caret < text.length - 1) {
                characters[caret + 1].css("text-decoration", "underline");
            }

            characters[caret].css("text-decoration", "none");

            if (c !== text[caret] || error !== -1) {
                characters[caret].css("background-color", red).css("color", "white");
                error = error === -1 ? caret : error;
            } else {
                characters[caret].css("background-color", "white").css("color", green); // correct input
                correct++;
                if (caret === text.length - 1) { // finished
                    clearInterval(flash);
                    clearInterval(timer);
                    input.val("");
                    e.preventDefault(); // without this the final character stays after clear
                }
            }

            total++;
            caret++;
        }

    } else if (c === "Backspace" && caret > 0) {

        if (text[caret - 1] === " " && error === -1) { // don't go back a word unless there's an error
            e.preventDefault();
        } else {
            caret--;
            characters[caret].css("text-decoration", "underline")
                .css("color", gray)
                .css("background-color", "white");
            characters[caret + 1].css("text-decoration", "none");

            if (caret === error) {
                error = -1;
            }
        }

    }

});
