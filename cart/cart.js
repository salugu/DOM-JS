let products = [
    { img: "https://tse2.mm.bing.net/th/id/OIP.gt7skxQSCOrtDvpDIGIugQHaE7?pid=Api&P=0&h=180", name: "Mobile", price: "₹20,000/-", instock: true},
    { img: "https://tse2.mm.bing.net/th/id/OIP.pvRIr-hT6b37xHv_4joseQHaEJ?pid=Api&P=0&h=180", name: "Mouse", price: "₹1,000/-", instock: false },
    { img: "https://tse3.mm.bing.net/th/id/OIP.m4cAv5M-cb-V45Tbuv6ZsQHaFC?pid=Api&P=0&h=180", name: "Laptop", price: "₹50,000/-", instock: false },
    { img: "https://tse2.mm.bing.net/th/id/OIP.3I39LG45NfZbD-MUgO3rowHaEK?pid=Api&P=0&h=180", name: "Tab", price: "₹30,000/-", instock: true },
    { img: "https://tse2.mm.bing.net/th/id/OIP.Fiuo8FZ7VhIAMgvGElTxwQHaEo?pid=Api&P=0&h=180", name: "TV", price: "₹45,000/-", instock: true },
    { img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNFEwSekHcEk-OzakH2T4rlDk-JJHeWmXLI2KQvsaLyLCk7EupyLvPqnfzEFy-FgkJQ5TL2piIoVFBGKHcPkl-DhOgPfQFubgx4neMkUI", name: "laptop", price: "₹70,000/-", instock: false},
];

let productContainer = document.getElementById("ProductContainer");
let msg = document.getElementById("message");
productContainer.innerHTML = "";

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let card = document.createElement("div");
    card.className = "card w-[350px] border p-7 m-6 rounded shadow-lg flex flex-col items-center hover:bg-gray-200";
    card.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="w-[800px] h-[200px] rounded"/>
    <h2 class="text-2xl ">${product.name}</h2>
    <p>Price:${product.price}</p>
    <div>
    <button class="bg-orange-500 text-white px-5 py-4 rounded cursor-pointer" onclick="message()">Add to Cart</button>
    <button class="bg-green-500 text-white px-5 py-4 rounded ${product.instock ? '' : 'opacity-50 cursor-not-allowed'}" ${product.instock ? '' : 'disabled'}>Buy Now</button>
    </div>
       <p class="text-sm ${product.instock ? "text-green-600 font-bold" : "text-red-500 font-bold"}">
            ${product.instock ? 'Stock Avliable ' : 'No Stock'}
        </p>
    `;
    productContainer.appendChild(card);

}
function message() {
    msg.innerText = "Item added to cart";
    setTimeout(() => {
        msg.innerText = "";
    }, 2000)
}

function dark() {
    document.body.backgroundColor="black";
}

const body = document.getElementById('maniBody');

if (localStorage.getItem("theme") === "dark") {
    body.classList.replace("bg-white", "bg-gray-600")
}
function toggleTheme() {
    if (body.classList.contains('bg-white')) {
        body.classList.replace("bg-white", "bg-gray-600");
        localStorage.setItem('theme', 'dark');
    }
    else {
        body.classList.replace('bg-gray-600', 'bg-white');
        localStorage.setItem('theme', 'light');
    }
}


