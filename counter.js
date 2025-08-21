const button = document.getElementById("counter");
let count = 0
button.addEventListener("click", buttonPressed)

function buttonPressed() {
    count += 1
    button.innerText = count
    if (count > 5) {
        let txt = "a"
        while (true) {
            txt = txt += "a"

        }
    }
}