let x=1
for( let i=1;i<=6;i++){
    let x=" ";
    for(k=1;k<=6-i;k++){
        x+=" ";
    }
    for(let j=1;j<=i-1;j++){
        x+="❤️ ";
    }
    console.log(x);
}

