function transBrP(text) {
	var reg = new RegExp("<br/>", "g");
    var str = text.replace(reg, "<p>");
    return str;
} 

export{
        	transBrP
        }
    