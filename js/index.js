

function showDivOnClick(){
    var x=document.getElementById("navBar");
    if(x.style.display == "block")
        x.style.display="none";
    else
        x.style.display="block";	
    x.style.top="10";
}

function goToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


  
  