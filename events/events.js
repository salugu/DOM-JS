// let username = document.getElementById("username");
// username.addEventListener("paste", () => {
//     alert("input is pasted")
// })
document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("form is submitted")
})
document.getElementById("username").addEventListener("copy",()=>
{
    alert("input is copied")
})
document.getElementById("username").addEventListener("cut",()=>
{
    alert("input is cut")
})
document.getElementById("username").addEventListener("focus",()=>
{
    console.log("input is focused")
})
document.getElementById("username").addEventListener("blur",()=>
{
    console.log("input is blurred")
})
document.getElementById("username").addEventListener("change",()=>
{
    console.log("input is changed")
}
)