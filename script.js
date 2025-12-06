const personal = {
    fistName: "ศุภณัฐ",
    lastName: "เพชรแท้",
    nickName: "โบนัส",
    age: 17,
    favoriteFood: ["กะเพราทะเล", "แกงเขียวหวาน", "มาม่า"],
    hobby: ["เขียนโค้ด", "เล่นบาสเกตบอล"],
    contract: [
        {
            social: "Facebook",
            name: "Suppanat Phettae",
            links: "https://www.facebook.com/suppanat.phettae",
        },
        {
            social: "Instagram",
            name: "@bon.usok",
            links: "https://www.instagram.com/bon.usok/",
        },
        {
            social: "Github",
            name: "@bonusofficial",
            links: "https://github.com/bonusofficial",
        },
    ],
};
let name = document.getElementById("name");
let nickname = document.getElementById("nickname");
let age = document.getElementById("age");
name.innerHTML = `ชื่อจริง : นาย${personal.fistName} ${personal.lastName}`;
nickname.innerHTML = `ชื่อเล่น : ${personal.nickName}`;
age.innerHTML = `อายุ : ${personal.age}`;

// Hobby

let ulH = document.getElementById("hobby");
personal.hobby.forEach(i => {
    let liH = document.createElement('li');
    liH.innerHTML = i
    ulH.appendChild(liH)
})

// Food
let ulF = document.getElementById("favoriteFood");
personal.favoriteFood.forEach(i => {
    let liF = document.createElement('li');
    liF.innerHTML = i
    ulF.appendChild(liF)
})

// Contact
let ulC = document.getElementById("contact")
// ulC.setAttribute
personal.contract.forEach(i => {
    let liC = document.createElement('li');
    liC.innerHTML = `${i.social} : <a target="_blank" href="${i.links}">${i.name}</a>`;
    ulC.appendChild(liC)
})






function c(e) {
    e.innerHTML = "อะไรกันนะ😚"
    e.style.backgroundColor = "red";
}
function D_c(e) {
}
const secret = document.getElementById("xxx");
secret.addEventListener('mouseover', () => {
    secret.innerHTML = "อะไรกันนะ😚"
    secret.style.backgroundColor = "red";
});
secret.addEventListener('mouseout', () => {
    secret.innerHTML = "Click Here"
    secret.style.backgroundColor = "skyblue";
});