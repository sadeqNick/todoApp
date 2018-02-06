var btns = document.querySelectorAll(".btnz button");
var idiot = document.getElementsByClassName("idiot")[0];
for(i=0 ; i< btns.length ; i++){
	btns[i].addEventListener("click",idiotClasses);
}
function idiotClasses(){
	if (this.getAttribute("data-add")){
	idiot.classList.add(this.getAttribute("data-add"));	
		}
	
}
