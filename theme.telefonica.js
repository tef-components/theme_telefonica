// Function that sets the CoreStyle variables
var setVars = function(){
  CoreStyle.g.color =
    "#007486";

  CoreStyle.g.text =
    "white";

  CoreStyle.g.border =
    "#007486";

  CoreStyle.g.colorHover =
    "#005e6d";

  CoreStyle.g.textHover =
    "#ffffff";

  CoreStyle.g.borderHover =
    "#005e6d";

  CoreStyle.g.colorActive =
    "#004853";

  CoreStyle.g.textActive =
    "#ffffff";

  CoreStyle.g.borderActive =
    "#004853";

  CoreStyle.g.positive =
    "#00c607";

  CoreStyle.g.positiveText =
    "#ffffff";

  CoreStyle.g.positiveBorder =
    "#00c607";

  CoreStyle.g.positiveHover =
    "#00ad06";

  CoreStyle.g.positiveTextHover =
    "#ffffff";

  CoreStyle.g.positiveBorderHover =
    "#00ad06";

  CoreStyle.g.positiveActive =
    "#009305";

  CoreStyle.g.positiveTextActive =
    "#ffffff";

  CoreStyle.g.positiveBorderActive =
    "#009305";

  CoreStyle.g.negative =
    "#ca3430";

  CoreStyle.g.negativeText =
    "#ffffff";

  CoreStyle.g.negativeBorder =
    "#ca3430";

  CoreStyle.g.negativeHover =
    "#b52f2b";

  CoreStyle.g.negativeTextHover =
    "#ffffff";

  CoreStyle.g.negativeBorderHover =
    "#b52f2b";

  CoreStyle.g.negativeActive =
    "#a12926";

  CoreStyle.g.negativeTextActive =
    "#ffffff";

  CoreStyle.g.negativeBorderActive =
    "#a12926";

  CoreStyle.g.subdued =
    "#84959e";

  CoreStyle.g.subduedText =
    "#ffffff";

  CoreStyle.g.subduedBorder =
    "#84959e";

  CoreStyle.g.subduedHover =
    "#768993";

  CoreStyle.g.subduedTextHover =
    "#ffffff";

  CoreStyle.g.subduedBorderHover =
    "#768993";

  CoreStyle.g.subduedActive =
    "#697c86";

  CoreStyle.g.subduedTextActive =
    "#ffffff";

  CoreStyle.g.subduedBorderActive =
    "#697c86";

  CoreStyle.g.significant =
    "#00c6d7";

  CoreStyle.g.significantText =
    "#ffffff";

  CoreStyle.g.significantBorder =
    "#00c6d7";

  CoreStyle.g.significantHover =
    "#00afbe";

  CoreStyle.g.significantTextHover =
    "#ffffff";

  CoreStyle.g.significantBorderHover =
    "#00afbe";

  CoreStyle.g.significantActive =
    "#0097a4";

  CoreStyle.g.significantTextActive =
    "#ffffff";

  CoreStyle.g.significantBorderActive =
    "#0097a4";

  CoreStyle.g.neutral =
    "#84959e";

  CoreStyle.g.neutralText =
    "#ffffff";

  CoreStyle.g.neutralBorder =
    "#84959e";

  CoreStyle.g.neutralHover =
    "#768993";

  CoreStyle.g.neutralTextHover =
    "#ffffff";

  CoreStyle.g.neutralBorderHover =
    "#768993";

  CoreStyle.g.neutralActive =
    "#697c86";

  CoreStyle.g.neutralTextActive =
    "#ffffff";

  CoreStyle.g.neutralBorderActive =
    "#697c86";

  CoreStyle.g.grey1 =
    "#f2f2f2";

  CoreStyle.g.grey2 =
    "#cfcece";

  CoreStyle.g.grey3 =
    "#b3b5b7";

  CoreStyle.g.grey4 =
    "#aeadad";

  CoreStyle.g.grey5 =
    "#686868";

  CoreStyle.g.grey6 =
    "#31313d";

  CoreStyle.g.widthXS =
    "480px";

  CoreStyle.g.widthSM =
    "768px";

  CoreStyle.g.widthMD =
    "992px";

  CoreStyle.g.widthLG =
    "1200px";

  CoreStyle.g.widthXL =
    "1400px";

  CoreStyle.g.widthMin =
    "320px";

  CoreStyle.g.widthMaxSM =
    "728px";

  CoreStyle.g.widthMaxMD =
    "952px";

  CoreStyle.g.widthMaxLG =
    "1160px";

  CoreStyle.g.widthMaxXL =
    "1360px";

  CoreStyle.g.gutter =
    "1.6%";

  CoreStyle.g.columnGutter =
    "0.8%";


}

if (typeof CoreStyle === 'undefined'){
  // If core-style has not been loaded we set setVars()
  // to execute when polymer is ready
  window.addEventListener('polymer-ready', setVars);
} else {
  // If core-style has already been loaded we execute setVars()
  setVars();
}
