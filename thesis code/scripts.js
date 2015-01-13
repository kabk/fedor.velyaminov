$("#text").jScrollPane();

$("p.art-description").hover(
function(e) {
	var identifier = $(this).attr("id");
	$("img:not(." + identifier + ")").hide();
	}, 
function(e) {
	$("img").show();
	});