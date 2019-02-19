//Relay switch SА1 BLOCK CONRTOL SA
    var  SwichOff = "soff";
	function changeSwichOFF(){
	var image = document.getElementById("controlA");
	if(SwichOff == "soff"){
	    image.src = "image/SA1ON.png";
		SwichOff = "off";//
	}else {
	    image.src = "image/SA1OFF.png";
		SwichOff = "soff";
	}
	};
	
	//Relay Switch SA2
	var  SwichB = "sona";
	function changeSwichOFFB(){
		var imageonA = document.getElementById("controlB");	
	if(SwichB == "sona"){
	    imageonA.src = "image/SA2ON.png"; 
		SwichB = "off";//		
	}else {
	    imageonA.src = "image/SA2OFF.png";
		SwichB = "sona";  	
	}
	};
	//Relay А
    var  relaya = "ra";
	function RelayA(){	
		var imager = document.getElementById("RelayA");
	if(relaya == "ra"){
	    imager.src = "image/RELAYGA.png"; 
		relaya = "off";//	
	}else {
	    imager.src = "image/RELAYWA.png";
		relaya = "ra";  
	}
	};
	//Relay B
    var  relayB = "rB";
	function RelayB(){
		var imagerB = document.getElementById("RelayB");
	if(relayB == "rB"){
	    imagerB.src = "image/RELAYGB.png"; 
		relayB = "off";//
	}else {
	    imagerB.src = "image/RELAYWB.png";
		relayB = "rB";  
	}
	};
	//Relay contact onА
    var  SwichONA = "sona";
	function onA(){
		var imageonA = document.getElementById("onA");
	if(SwichONA == "sona"){
	    imageonA.src = "image/ONA2.png"; 
		SwichONA = "off";//
	}else {
	    imageonA.src = "image/OffA2.png";
		SwichONA = "sona";  
	}
	};
	
changeSwichOFF
	
	//Relay contact offB
    var  SwichOffB = "sonb2";
	function OFFB(){
		var imageoffB = document.getElementById("SwoffB");
	if(SwichOffB == "sonb2"){
	    imageoffB.src = "image/ONB2.png"; 
		SwichOffB = "off";//
	}else {
	    imageoffB.src = "image/OffB2.png";
		SwichOffB = "sonb2";  
	}
	};
	//Relay contact A1off
    var  SwichOffA1 = "sona";
	function A1off(){
		var imageoffA1 = document.getElementById("A1off");
	if(SwichOffA1 == "sona"){
	    imageoffA1.src = "image/ONA1.png"; 
		SwichOffA1 = "off";//
	}else {
	    imageoffA1.src = "image/OffA1.png";
		SwichOffA1 = "sona";  
	}
	};
	//Relay contact B1oN
    var  SwichONB1 = "swonb";
	function ONB1(){
		var imageonB1 = document.getElementById("B1ON");
	if(SwichONB1 == "swonb"){
	    imageonB1.src = "image/ONB1.png"; 
		SwichONB1 = "offb";//
	}else {
	    imageonB1.src = "image/OffB1.png";
		SwichONB1 = "swonb";  
	}
	};
	//Swich Lampe
    var  SwichLampe = "swonL";
	function Lampe(){
		var imageL = document.getElementById("Lampe");
	if(SwichLampe == "swonL"){
	    imageL.src = "image/LampeON.png"; 
		SwichLampe = "offL";//
		
	}else {
	    imageL.src = "image/LampeOFF.png";
		SwichLampe = "swonL";  
	}
	};
