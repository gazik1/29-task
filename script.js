function task1(){
    let header= document.getElementById("task1_header")
    
    let buttonCreate=document.getElementsByClassName("button_task1")
  
     
     for(let button of buttonCreate){
        button.onclick=()=>{
         header.innerText=button.textContent
        }
     }

 }
 task1()


 function task2(){
    let form=document.getElementById("task2_form")
    let list=document.getElementById("task2_list")
    
  
    task2_form.button.onclick=(e)=>{
        e.preventDefault();
       let elemLi= document.createElement("li")

       if(form.textArea.value){
       elemLi.innerText=form.textArea.value
        list.appendChild(elemLi)
        form.textArea.value=""}
    }
}
task2() 