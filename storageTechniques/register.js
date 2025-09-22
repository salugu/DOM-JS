function RegisterForm() {
    let name = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let pwd = document.getElementById('pwd').value;

    let array = JSON.parse(localStorage.getItem('user')) || [];
    let con = JSON.stringify(array)
    localStorage.setItem("user", con)

    alert("Succefully registered!")

}