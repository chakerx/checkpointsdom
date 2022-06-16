
// delete
var removecartbutton= document.getElementsByClassName('delete-btn');
for (let i=0;i<removecartbutton.length;i++){
    var button = removecartbutton[i];
    button.addEventListener('click' ,function(event){ 
        event.target.parentElement.remove()
        updateTotalPrice ()
    })

}


//HEART
var heart=document.getElementsByClassName('fa-heart');
for (let i=0;i<heart.length;i++){
    heart[i].addEventListener('click' ,function(){
        heart[i].classList.toggle('red-heart');
    })
}
//updated price
function updateTotalPrice (){
    var cartrows= document.getElementsByClassName('item');
    let prixTotal =document.getElementById('total-price')
    var prix = document.getElementsByClassName('price');
    let sum =0;
    for(let i =0;i<prix.length;i++){
        sum +=  +(prix[i].innerHTML);   
        console.log(prix[i].innerHTML) 
        console.log(sum)
    }
    
    prixTotal.innerHTML= sum;
    console.log(prixTotal)
    return prixTotal;
   
}


// plus button
var TotalPrice=document.getElementsByClassName('total-price');
var plusbtn=document.getElementsByClassName('plus-btn');
for (let i=0;i<plusbtn.length;i++){
    plusbtn[i].addEventListener('click' ,function(e){
        let qte =e.target.nextElementSibling;
        qte.innerHTML = parseInt(qte.innerHTML) + 1;
        var prix_unitaire = e.target.parentElement.nextElementSibling
        var updatePrice = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
        updatePrice.innerHTML = parseInt(qte.innerHTML)*parseInt(prix_unitaire.innerHTML)
        updateTotalPrice ()
    })
}


// minuss button
var minusbtn=document.getElementsByClassName('sustraction-btn');
for (let i=0;i<minusbtn.length;i++){
    minusbtn[i].addEventListener('click' ,function(e){
        let qte =e.target.previousElementSibling;
        if (qte.innerHTML>0){
            qte.innerHTML = parseInt(qte.innerHTML) - 1;
        }
        else{
            qte.innerHTML =0;
        };
        var prix_unitaire = e.target.parentElement.nextElementSibling;
        var updatePrice = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
        updatePrice.innerHTML = parseInt(qte.innerHTML)*parseInt(prix_unitaire.innerHTML)
        updateTotalPrice()
    })
}


