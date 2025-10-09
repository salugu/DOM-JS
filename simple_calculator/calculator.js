// simple calculator functionality
const buttons = document.querySelectorAll('.btn');
const text = document.getElementById('text');

for(let i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let value1 = this.innerText;
        if(value1 === '='){
            text.value = eval(text.value);
        }
        else if(value1 === 'C'){
            text.value = '';
        }
        else{
            text.value += value1;
        }
}
}



