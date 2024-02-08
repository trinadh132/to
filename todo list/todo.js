const addtask=document.querySelector(".mar");
const mylist=document.querySelector(".atask")
const del=document.querySelector(".atask i")
const textup=document.querySelector(".tex")
const cl=document.querySelector(".searchtask")
let a=1;
addtask.addEventListener('submit',event =>{
    event.preventDefault();
    a++;
    const val=addtask.task.value.trim();
    if (val !== '') {
    mylist.innerHTML+='<li class="delete"><span>'+val+'</span><i class="bi bi-trash delete"></i></li>'
    textup.textContent=`you have ${a} pending tasks`
    addtask.reset();
    }
});

document.addEventListener('click',function (d) {
    if(d.target.classList.contains("delete"))
    {
        d.target.parentElement.remove();
    }
       
        if (a == 0) {
            empty();
        }
        a--;
});

function empty(){
    const b=mylist.querySelectorAll("li")
    b.forEach(Element=>{
        Element.remove();
    })
    textup.textContent=`There are no pending tasks`
}
function search(trim){
    Array.from(mylist.children)
    .filter(mylist => {
           return !mylist.textContent.includes(trim);
       })
       .forEach(mylist => {
        mylist.classList.add("hide");
       });
}

cl.addEventListener("keyup", event=>{
    const t=cl.task.value.trim();
    search(t);
})
 function listclear(){
    mylist.classList.remove("hide");
 }