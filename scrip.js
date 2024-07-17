let button=document.querySelector('button')
let h1 =document.querySelector('h1')

button.addEventListener('click',()=>{
let idinput=document.getElementById('id')
let pasword=document.getElementById('parol')
if(idinput.value==1 && pasword.value==2){
    h1.textContent=("parol togri" )
}
else(
    h1.textContent=("parol notogri" )
)
})