function closeFloatingCross(){    
	if(document.getElementById("sideMenu").classList.contains("shown")){
		document.getElementById("nav-icon3").classList.toggle('open');
		document.getElementById("sideMenu").classList.toggle('shown');
	}
}

function toggleFloatingCross(){        
	document.getElementById("nav-icon3").classList.toggle('open');
	document.getElementById("sideMenu").classList.toggle('shown');
}

window.onscroll = function(){
	var floatingCross = document.getElementById("floatingCross");
	floatingCross.classList.add('floatingCross-opaque'); 
	setTimeout(() => {
		if(floatingCross.classList.contains("floatingCross-opaque")){
			floatingCross.classList.remove('floatingCross-opaque'); 
		}
	}, 2000);
}