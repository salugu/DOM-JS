function submit_Details(){
    let name=document.getElementById('name').value
    let subject=document.getElementById('subject').value
    let score=document.getElementById('score').value

    let array=[]
    let student={
        "name":name,
        "subject":subject,
        "score": score
    }
    array.push(student)
    localStorage.setItem('studentscore',array)
    

}


