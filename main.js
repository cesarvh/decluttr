toggle();
var template = "<div style='text-align: center'> <h1 padding-top='50px'> Yeah, you probably shouldn't be here right now </h1> </div>"; 



function toggle() {
	chrome.storage.sync.get("key", function(results){
		var options = results.key;
		for (var op in options) {
			if (window.location.href.indexOf(op) > -1) {
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
			$(".dashboard-right").remove();
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
			contentItem = ".posts";
			break;
		case "youtube":
			contentItem = "#content";
			break;
		default:
			console.log("Not Supported");
	}
	deleteElements(contentItem);
	disableLinks();

}

function disableLinks() {
	$(document).ready(function (){
		$("a").css("cursos", "arrow").click(false);
		$(":input").prop("disabled", true);

	});
}

function deleteElements(item) {
	$(item).replaceWith(template);
}



