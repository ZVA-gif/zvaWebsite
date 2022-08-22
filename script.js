const h2 = document.createElement("h2");
h2.textContent = "ZOE ANDERSON";
document.querySelector("body").appendChild(h2);

let connectButton = document.querySelector(".connect-button");
connectButton.addEventListener("click", explore);
function explore() {
    let name = prompt("What is your name?");
    if (name === "Zoe") {
        alert("That's my name too! 😊 Nice to meet you, Zoe!");
    } else {
        alert("Nice to meet you, " + name + "! 😁");
    }
    let email = prompt("What is your email address?");
    let place = prompt("Where do you live?");
    let emoji = prompt("What is your favorite emoji?");
        alert(
          "Thank you, " +
            name +
            " from " +
            place +
            "! We'll be in touch via email! " +
            emoji
        );
}


      