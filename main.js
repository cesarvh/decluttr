toggle();

function toggle() {
	chrome.storage.sync.get("key", function(results){
		var options = results.key;
		for (var op in options) {
			if (window.location.href.indexOf(op) > -1) { // well, now we know we're in one of the urls so now we kinda check
				if (options[op] == true) {
					disableScrollAndPrepare(op);
				} 
			}
		}
	});

};

function disableScrollAndPrepare(option) {
	document.body.style.display = 'block';
	document.body.style.overflow = 'hidden';
	var contentItem = "";
	switch (option) {
		case "facebook":
			contentItem = "#contentArea";
			break;
		case "twitter":
			contentItem = "#timeline";
			break;
		case "vine":
			contentItem = ".posts-container ";
			break;
		case "reddit":
			contentItem = ".content";
			break;
		case "instagram":
			contentItem = "._qj7yb";
			break;
		case "tumblr":
			contentItem = ".l-content clearfix";
			break;
		case "youtube":
			contentItem = "#content";
			break;
		default:
			console.log("Not Supported");
	}
	deleteElements(contentItem);
	

}

function deleteElements(item) {
	$(item).remove();
}



//function disableBlock() {
//    document.body.style.display = '';
//    document.body.style.overflow = '';
//    location.reload();
//}


