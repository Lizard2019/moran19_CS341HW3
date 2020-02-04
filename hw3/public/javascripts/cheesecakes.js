//Elizabeth Moran
//Warns vegan that cheesecake contains dairy
//Hides rest of screen
function warnVegan(){
    if ( $("#instructions").val().indexOf("vegan") > -1 ) {
        alert("VEGAN DETECTED! WARNING! CHEESECAKE CONTAINS DAIRY!");
    }else if ( $("#instructions").val().indexOf("Vegan") > -1 ) {
        alert("VEGAN DETECTED! WARNING! CHEESECAKE CONTAINS DAIRY!");
    }
	else{
	    alert("Thank you for placing your order!");
		$("#quantity").hide();
	    $("#table1").hide();
	    $("#notes").hide();
	    $("#order").hide();
	}
}

//Had help from https://stackoverflow.com/questions/17066429/how-to-pass-the-value-of-a-tag-to-a-javascript-function
//Replaces month abbreviation with clicked drop-down menu month abrreviation on menu button. Ex: Jan -> Feb. Sep -> Mar
function sendVal(letter){
	 $("#button1").prop('value', letter);
  }

//Had help from https://stackoverflow.com/questions/9069365/hover-drop-down-with-overflow  -->
//Opens drop-down menu on mouse hover
function menuOpen(){
     document.getElementById('dropMenu').style.display = 'block';
}

document.getElementById('dropMenu').onmouseout = function (e) {
	e = e || window.event;
	var target = e.srcElement||e.target;
	if (target.id == "dropMenu") {
		document.getElementById('dropMenu').style.display = 'none';
	}
};
	



