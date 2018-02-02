var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}



var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);


function newElement() {
	/*var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}*/
	
	var last_num = 1;
	if($("ul#myUL li").length){
		last_num = parseInt($("ul#myUL li:last-child .count").text());
		last_num += 1;
		//alert(last_num);
	}
	
	var inputValue = document.getElementById("myInput").value;
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		$("#myUL").append('<li class="elem"><div class="title"><div class="count">'+(last_num).toString()+'</div>. '+inputValue+'</div><div class="btns"><img class="delete" src="morty.svg"></div></li>');
		$("#myUL li.elem:last-child").fadeTo("fast", 1);
		reset_events();
	}
}

function reset_events() {
	$(".elem img.delete").off("click");
	$(".elem img.delete").on("click", function(){
		$(this).fadeOut(300, function(){
			$(this).closest(".elem").remove();
		});
	});
	
	$(".elem div.title").off("click");
	$(".elem div.title").on("click", function(){
		$(this).toggleClass("done");
	});
	
}

var d = document.getElementById('close');
//d.parentNode.removeChild();
