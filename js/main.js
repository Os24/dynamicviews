
var load=function(url,div){

	req = new XMLHttpRequest();
	req.open("GET",url,false);
	req.send(null);
	console.log(req.responseText);
	div.innerHTML = req.responseText;

}



	var activeItem = document.getElementById("custom-nav");
	var changeActive = activeItem.getElementsByClassName("tab");
	for (var i = 0; i < changeActive.length; i++) {
  changeActive[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

var saveUser = function(){
	var userObj = {};
	
	userObj.userName = document.getElementById("name").value;
	userObj.userMail = document.getElementById("email").value;
	userObj.userPasswd = document.getElementById("passwd").value;
	userObj.userConfirmPasswd = document.getElementById("confirm-passwd").value;
	
if (userObj.userName == "") {
		document.getElementById("alert-box").innerHTML = 'No puedes dejar el nombre vacio'
	document.getElementById("alert-box").classList.remove("hidden");

	}

	if (userObj.userPasswd === userObj.userConfirmPasswd && userObj.userName != "") {
		var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("alert-box").innerHTML = this.responseText;
      document.getElementById("alert-box").classList.remove("hidden");
      document.getElementById("alert-box").classList.remove("bg-warning");
      document.getElementById("alert-box").classList.add("bg-success");

    }
  };
  xhttp.open("GET", "https://www.w3schools.com/js/demo_post.asp", true);
  xhttp.send();
	}else 
	document.getElementById("alert-box").innerHTML = 'los passwds no coinciden'
	document.getElementById("alert-box").classList.remove("hidden");

	

	console.log(userObj);
}

function clearError(){
	document.getElementById("alert-box").classList.add("hidden");
}


