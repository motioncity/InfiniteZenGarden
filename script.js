//Arrays that hold elements that correspond to specfic selector

//Base Arrays
var h1Array = [];
var h2Array = [];
var h3Array = [];

var pArray = [];

//Layout Arrays

var zenIntroArray = [];
var zenSupportingArray = [];
var asideArray = [];

//Module Arrays

var zenSummaryArray = [];
var zenPreambleArray = [];
var zenExplanationArray = [];
var zenParticipationArray = [];
var zenBenefitsArray = [];
var zenRequirementsArray = [];
var zenDesignArray = [];

//Background Color Arrays

var backgrounds = ['aqua-bg', 'being-bg', 'chocolate-bg', 'coral-bg', 'crimson-bg', 'limegreen-bg', 'fuchsia-bg', 'lightslategray-bg', 'lightsteelblue-bg', 'seagreen-bg'];

//Font Alteration Arrays
var fontWeights = ['normal', 'bold'];
var fontStyles = ['italic', 'oblique', 'normalStyle'];
var fontVariants = ['smallCaps', 'normalVariant'];
var fontFamilys = ['pacifico', 'poiretOne', 'passionOne', 'shadow', 'orb', 'dancing', 'chewy', 'gloria', 'cinzel'];
var fontColors = ['aqua', 'being', 'chocolate', 'coral', 'crimson', 'limegreen', 'fuchsia', 'lightslategray', 'lightsteelblue', 'seagreen'];

//Border arrays
var borders = ['dotted', 'dashed', 'solid', 'double', 'double', 'groove', 'ridge', 'inset', 'outset', 'noBorder'];

//LayoutCombo Arrays

//possible choices that the zen-intro layout portion can choose from 
var possibleIntro = ['relative', 'column-1-3', 'column-2-3'];

//possible choices for the two other layout portions to choose from if intro selects the relative element
var layoutTree1 = ['relative', 'column-1-2', 'column-2-2'];

//possible choices for the two other layout portions to choose from if intro selects the column-1-3 element
var layoutTree2 = ['column-2-3', 'column-3-3'];

//possible choices for the two other layout portions to choose from if intro selects the column-2-3 element
var layoutTree3 = ['column-1-3', 'column-3-3'];

var layoutTree4 = ['relative'];
var layoutTree5 = ['column-1-2'];
var layoutTree6 = ['column-2-2'];
var layoutTree7 = ['column-1-3'];
var layoutTree8 = ['column-2-3'];
var layoutTree9 = ['column-3-3'];

/*This function is responsible for picking a random element from respective array and adding it to given selector*/
var addCSSClass = function(selector, classArray) {
  var length = classArray.length;
  var i = Math.floor((Math.random() * length) + 1);
  i--;

  Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
    el.classList.add(classArray[i]);
  });

  if (selector == "h1") {
    h1Array.push(classArray[i]);
  } else if (selector == "h2") {
    h2Array.push(classArray[i]);
  } else if (selector == "h3") {
    h3Array.push(classArray[i]);
  } else if (selector == "p") {
    pArray.push(classArray[i]);
  } else if (selector == "#zen-intro") {
    zenIntroArray.push(classArray[i]);
  } else if (selector == "#zen-supporting") {
    zenSupportingArray.push(classArray[i]);
  } else if (selector == "aside") {
    asideArray.push(classArray[i]);
  } else if (selector == "#zen-summary") {
    zenSummaryArray.push(classArray[i]);
  } else if (selector == "#zen-preamble") {
    zenPreambleArray.push(classArray[i]);
  } else if (selector == "#zen-explanation") {
    zenExplanationArray.push(classArray[i]);
  } else if (selector == "#zen-participation") {
    zenParticipationArray.push(classArray[i]);
  } else if (selector == "#zen-benefits") {
    zenBenefitsArray.push(classArray[i]);
  } else if (selector == "#zen-requirements") {
    zenRequirementsArray.push(classArray[i]);
  } else if (selector == "#design-selection") {
    zenDesignArray.push(classArray[i]);
  }

}

/*This functions deals with picking the layout for elements with the aside tag*/
var secondaryLayout = function(intro, support) {

  if ((intro == "intro relative") && (support == "main supporting relative")) {
    addCSSClass("aside", layoutTree4)
  } else if ((intro == "intro relative") && (support == "main supporting column-1-2")) {
    addCSSClass("aside", layoutTree6)
  } else if ((intro == "intro relative") && (support == "main supporting column-2-2")) {
    addCSSClass("aside", layoutTree5)
  } else if ((intro == "intro column-1-3") && (support == "main supporting column-2-3")) {
    addCSSClass("aside", layoutTree9)
  } else if ((intro == "intro column-1-3") && (support == "main supporting column-3-3")) {
    addCSSClass("aside", layoutTree8)
  } else if ((intro == "intro column-2-3") && (support == "main supporting column-1-3")) {
    addCSSClass("aside", layoutTree9)
  } else if ((intro == "intro column-2-3") && (support == "main supporting column-3-3")) {
    addCSSClass("aside", layoutTree7)
  }
}

/*Adds color to provided selector and makes sure it isn't same color as background*/

var addFontColor = function(selector) {

  var length = fontColors.length;
  var i = Math.floor((Math.random() * length) + 1);
  i--;

  var bodyClass = document.body.className;
  var n = document.body.className.length;
  var bodyColor = bodyClass.substring(0, n - 3);

  while (fontColors[i] == bodyColor) {
    i = Math.floor((Math.random() * length) + 1);
    i--;
  }
  Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
    el.classList.add(fontColors[i]);
  });

  if (selector == "h1") {
    h1Array.push(fontColors[i]);
  } else if (selector == "h2") {
    h2Array.push(fontColors[i]);
  } else if (selector == "h3") {
    h3Array.push(fontColors[i]);
  } else if (selector == "p") {
    pArray.push(fontColors[i]);
  }

}

/*Given a selector this function will remove all of it's CSS classes*/

var removeClasses = function(selector) {
  if (selector == "h1") {
    for (i = 0; i < h1Array.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(h1Array[i]);
      });

    }
    h1Array = [];
  } else if (selector == "h2") {
    for (i = 0; i < h2Array.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(h2Array[i]);
      });
    }
    h2Array = [];
  } else if (selector == "h3") {
    for (i = 0; i < h3Array.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(h3Array[i]);
      });
    }
    h3Array = [];
  } else if (selector == "p") {
    for (i = 0; i < pArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(pArray[i]);
      });
    }
    pArray = [];
  } else if (selector == "#zen-intro") {
    for (i = 0; i < zenIntroArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenIntroArray[i]);
      });
    }
    zenIntroArray = [];
  } else if (selector == "#zen-supporting") {
    for (i = 0; i < zenSupportingArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenSupportingArray[i]);
      });
    }
    zenSupportingArray = [];
  } else if (selector == "aside") {
    for (i = 0; i < asideArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(asideArray[i]);
      });
    }
    asideArray = [];
  } else if (selector == "#zen-summary") {
    for (i = 0; i < zenSummaryArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenSummaryArray[i]);
      });
    }
    zenSummaryArray = [];
  } else if (selector == "#zen-preamble") {
    for (i = 0; i < zenPreambleArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenPreambleArray[i]);
      });
    }
    zenPreambleArray = [];
  } else if (selector == "#zen-explanation") {
    for (i = 0; i < zenExplanationArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenExplanationArray[i]);
      });
    }
    zenExplanationArray = [];
  } else if (selector == "#zen-participation") {
    for (i = 0; i < zenParticipationArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenParticipationArray[i]);
      });
    }
    zenParticipationArray = [];
  } else if (selector == "#zen-benefits") {
    for (i = 0; i < zenBenefitsArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenBenefitsArray[i]);
      });
    }
    zenBenefitsArray = [];
  } else if (selector == "#zen-requirements") {
    for (i = 0; i < zenRequirementsArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenRequirementsArray[i]);
      });
    }
    zenRequirementsArray = [];
  } else if (selector == "#design-selection") {
    for (i = 0; i < zenDesignArray.length; i++) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), function(el) {
        el.classList.remove(zenDesignArray[i]);
      });
    }
    zenDesignArray = [];
  }
}

/*
This function removes all CSS classes for all selectors used.
*/
var removeAllClasses = function() {
  removeClasses("h1");
  removeClasses("h2");
  removeClasses("h3");
  removeClasses("p");
  removeClasses("#zen-intro");
  removeClasses("#zen-supporting");
  removeClasses("aside");
  removeClasses("#zen-summary");
  removeClasses("#zen-preamble");
  removeClasses("#zen-explanation");
  removeClasses("#zen-participation");
  removeClasses("#zen-benefits");
  removeClasses("#zen-requirements");
  removeClasses("#design-selection");

}

/*
This function randomly selects elements for all p tags
*/
var handleP = function() {

  addCSSClass("p", fontWeights);
  addCSSClass("p", fontStyles);
  addCSSClass("p", fontVariants);
  addCSSClass("p", fontFamilys);
  addFontColor("p");

}

/*
This function randomly selects elements for h1,h2 and h3 tags
*/
var handleHeaders = function() {

  addCSSClass("h1", fontWeights);
  addCSSClass("h1", fontStyles);
  addCSSClass("h1", fontVariants);
  addCSSClass("h1", fontFamilys);
  addCSSClass("h1", borders);
  addFontColor("h1");

  for (i = 0; i < h1Array.length; i++) {
    Array.prototype.forEach.call(document.querySelectorAll("h2"), function(el) {
      el.classList.add(h1Array[i]);
    });
    h2Array.push(h1Array[i]);
  }

  for (i = 0; i < h1Array.length; i++) {
    Array.prototype.forEach.call(document.querySelectorAll("h3"), function(el) {
      el.classList.add(h1Array[i]);
    });
    h3Array.push(h1Array[i]);
  }
}

var handleBody = function() {
  var length = backgrounds.length;

  var i = Math.floor((Math.random() * length) + 1);
  i--;
  document.body.className = '';
  document.body.classList.add(backgrounds[i]);
}

var handleBases = function() {
  handleBody();
  handleHeaders();
  handleP();
}

var handleLayouts = function() {
  addCSSClass("#zen-intro", possibleIntro);

  var introClassName = document.querySelector("#zen-intro").className;

  if (introClassName == "intro relative") {
    addCSSClass("#zen-supporting", layoutTree1);
  } else if (introClassName == "intro column-1-3") {
    addCSSClass("#zen-supporting", layoutTree2);
  } else if (introClassName == "intro column-2-3") {
    addCSSClass("#zen-supporting", layoutTree3);
  }
  var supportingClassName = document.querySelector("#zen-supporting").className;
  secondaryLayout(introClassName, supportingClassName);

}

var randomStyle = function()
{
  removeAllClasses();
  handleBases();
  handleLayouts();
}

document.body.addEventListener('click', randomStyle);


var loopStyles = function(){
  setTimeout(function(){
    randomStyle();
    setTimeout(loopStyles, 5000);
  }, 1000);
};

loopStyles();
