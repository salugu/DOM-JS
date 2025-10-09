//  this keyword
/*
this:
this keyword is refers to the current object
*/



let user1 = {
    name: 'sai',
    img: "https://4kwallpapers.com/images/walls/thumbs_2t/23646.jpg",
    age: 22,
    greet: function () {
        let cont = document.getElementById('container');
        let newdiv = document.createElement('div');
        newdiv.className = 'card1 w-[200px] h-[200px] border-3 rounded-xl text-white-600 font-bold item-center text-center mt-2 justify-items-center bg-red-300 hover:bg-red-400';
        newdiv.innerHTML = `
            <img src="${this.img}" alt="${this.name}" class=" myimg w-32 h-32 rounded-full">
            <p>Name: ${this.name}</p>
            <button class="btn border p-2 bg-sky-500 text-white rounded-full outline-2 outline-offset-2 outline-white-500 hover:outline-black ">GREET</button>
        `;
        let button = newdiv.querySelector(".btn");
        button.addEventListener('click', () => {
            alert(`Hello bro ${this.name} \n age:${this.age} `);
        });

        let imgs = document.querySelectorAll(".myimg");

        imgs.forEach((img) => {
            img.addEventListener("mouseover", () => {
                img.style.transform = "rotateY(360deg)";
                img.style.transition = "transform 3s ease-out";
            });

            img.addEventListener("mouseout", () => {
                img.style.transform = "rotateY(0deg)";
            });
        });
        cont.appendChild(newdiv);
    }
}

user1.greet();



let user2 = {
    name: 'prabhu',
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/23644.jpg",
    age: 23,
    greet: user1.greet
}
user2.greet()

let user3 = {
    name: 'sameera',
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/23644.jpg",
    age: 43,
    greet: user1.greet
}
user3.greet()
let user4 = {
    name: 'sai ram',
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/23644.jpg",
    age: 13,
    greet: user1.greet
}
user4.greet()
let user5 = {
    name: 'raghu',
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/23644.jpg",
    age: 43,
    greet: user1.greet
}
user5.greet()






