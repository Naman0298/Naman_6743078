// console.log(document);
// console.log(document.body);
// console.log(document.title);
// console.log(document.head);

// console.log(document.body.childNodes[0]);
// console.log(document.body.children[2]);

// let btn1 = document.body.children[2]
// console.log(btn1.parentElement);
// console.log(btn1.parentNode);

// console.log(document.body.children[3]);

// let div1 = document.body.children[5]
// console.log(div1.firstElementChild);
// console.log(div1.lastElementChild);

// let head1 = div1.lastElementChild
// console.log(head1.nextElementSibling);

// let head4 = div1.lastElementChild
// console.log(head4.previousElementSibling);
// console.log(head4.previousSibling);

// let head4 = document.getElementsByClassName("h1a");
// console.log(head4);

// let convertedarray = Array.from(head4);
// console.log(convertedarray);

// convertedarray.map((ele) => {
//     ele.style.color = "blue";
//     ele.style.backgroundColor = "skyblue";
//     ele.style.fontSize = "20px";
// });

// let btnname = document.getElementsByName("btn")
// console.log(btnname);

// let h11 = document.getElementsByTagName("h1")
// console.log(h11);

// let h12 = document.querySelector(".h1a")
// console.log(h12);

// let h13 = document.querySelectorAll(".h1a")
// console.log(h13);

// let img1 = document.createElement("img")
// console.log(img1);
// img1.setAttribute("src", "https://wpengine.com/wp-content/uploads/2021/05/optimize-images-1024x681.jpg")
// document.body.append(img1)


// let h1 = document.createElement("h1")
// h1.innerHTML = "javascript"
// document.body.append(h1)

// let p = document.createElement("p")
// p.textContent = "Playwright"
// p.setAttribute("id", "p1")
// document.body.append(p)
// console.log(p);
// p.removeAttribute("id")
// console.log(p);
// document.body.removeChild(p);
// console.log(document.body);

// let bt1 = document.getElementById("btn1")

// function demo() {
//     alert("button clicked")
// }

// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//     alert("Button Clicked!");
// });

let count = 0;

let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});

let isblack = false;
let theme = document.getElementById("theme");
theme.addEventListener("click", function () {
    if (isblack) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        theme.textContent = "Dark Theme";
        isblack = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        theme.textContent = "Light Theme";
        isblack = true;
    }
});




const app = document.getElementById("app")

const table = document.createElement("table")
table.style.border = "1px solid black"

function cell(text) {
    const td = document.createElement("td")
    td.textContent = text
    td.style.border = "1px solid black"
    return td
}

function row(a, b, c, d, e) {
    const tr = document.createElement("tr")
    tr.append(cell(a), cell(b), cell(c), cell(d), cell(e))
    return tr
}

table.append(
    row(1, 2, 3, 4, 5),
    row(6, 7, 8, 9, 10),
    row(11, 12, 13, 14, 15),
    row(16, 17, 18, 19, 20),
    row(21, 22, 23, 24, 25)
)

app.appendChild(table)

container.appendChild(table)