//Function that sets the CoreStyle variables
var setVars = function(){
	//
	// Variables
	//

	// Theme colors
	CoreStyle.g.color = "#007486";
	CoreStyle.g.colorHover = "#077080";
	CoreStyle.g.colorActive = "#1a8292";
	CoreStyle.g.positive = "#00c607";
	CoreStyle.g.positiveHover = "#07b90e";
	CoreStyle.g.positiveActive = "#1acc20";
	CoreStyle.g.negative = "#ca3430";
	CoreStyle.g.negativeHover = "#bd3632";
	CoreStyle.g.negativeActive = "#cf4945";
	CoreStyle.g.subdued = "#84959e";
	CoreStyle.g.subduedHover = "#7e8d95";
	CoreStyle.g.subduedActive = "#91a0a8";
	CoreStyle.g.significant = "#00c6d7";
	CoreStyle.g.significantHover = "#07b9c8";
	CoreStyle.g.significantActive = "#1accdb";

	// Common colors
	CoreStyle.g.neutral = "#84959e";
	CoreStyle.g.neutralHover = "#7e8d95";
	CoreStyle.g.neutralActive = "#91a0a8";
	CoreStyle.g.grey1 = "#f2f2f2";
	CoreStyle.g.grey2 = "#cfcece";
	CoreStyle.g.grey3 = "#b3b5b7";
	CoreStyle.g.grey4 = "#aeadad";
	CoreStyle.g.grey5 = "#686868";
	CoreStyle.g.grey6 = "#31313d";

	// Breakpoints
	CoreStyle.g.widthXS = "480px";
	CoreStyle.g.widthSM = "768px";
	CoreStyle.g.widthMD = "992px";
	CoreStyle.g.widthLG = "1200px";
	CoreStyle.g.widthXL = "1400px";

	// Min and Max widths
	CoreStyle.g.widthMin = "320px";

	CoreStyle.g.widthMaxSM = "CoreStyle.g.widthSM - 40px";
	CoreStyle.g.widthMaxMD = "CoreStyle.g.widthMD - 40px";
	CoreStyle.g.widthMaxLG = "CoreStyle.g.widthLG - 40px";
	CoreStyle.g.widthMaxXL = "CoreStyle.g.widthXL - 40px";

	// Grid variables
	CoreStyle.g.gutter = "1.6%";
	CoreStyle.g.columnGutter = "CoreStyle.g.gutter / 2";

}

if (typeof CoreStyle === 'undefined'){//If core-style has not been loaded we set setVars() to execute when polymer is ready
	window.addEventListener('polymer-ready', setVars);
}else{//If core-style has already been loaded we execute setVars() 
	setVars();
}
