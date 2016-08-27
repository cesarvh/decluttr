var buttons = {
	"tumblr"    : false,
	"facebook"  : false,
	"twitter"   : false,
	"instagram" : false,
	"reddit"    : false,
	"youtube"   : false,
	"vine"      : false
};


window.onload = function() {
	// var initial = {
	// 	"tumblr"    : false,
	// 	"facebook"  : false,
	// 	"twitter"   : false,
	// 	"instagram" : false,
	// 	"reddit"    : false,
	// 	"youtube"   : false,
	// 	"vine"      : false
	// };
	storeUserPrefs();
	loadUserPrefs(buttons);
//	console.log(loadUserPrefs());
}


document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggle);
  }

	
});

//var obj = { varName : varValue };
//var obj = {};
//obj[varName] = varValue;


function toggle(e) {
//	loadUserPrefs();
	var buttonId = e.target.id;
	 // console.log(buttonId);
	var currElem = document.getElementById(buttonId);
	
	if (buttons[buttonId] == false) {
		buttons[buttonId] = true;
		currElem.style.background = "green";
		storeUserPrefs(buttons);
	} else {
		buttons[buttonId] = false;
		currElem.style.background = "red";
		storeUserPrefs(buttons);
	}
}

function storeUserPrefs(prefs) {
//	console.log(prefs);
    var key = 'key';
	chrome.storage.sync.set({key: prefs}, function() {
	});
}

function loadUserPrefs() {
	chrome.storage.sync.get("key", function(obj) {
//		console.log("loaded: ", obj)
		buttons = obj.key;
		
		var vuttons = document.querySelectorAll('button');
		for (var i = 0; i < vuttons.length; i++) {
			var currButton = vuttons[i].getAttribute("id");
			if (buttons[currButton] == true) {
				document.getElementById(currButton).style.background = "green";
			} else {
				document.getElementById(currButton).style.background = "red";

			}
		}	
//		return obj;
		
	});
//	return obj;

};
	
