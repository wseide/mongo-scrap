//this is where the jquery onClick events go
$("#scrape").on("click", function () {
	$.ajax({
		method: "GET",
		url: "/scrape",
	}).done(function (data) {
		console.log(data)
		window.location.href = "/"
	})
});

$("#home").on("click", function () {
	$.ajax({
		method: "GET",
		url: "/",
	}).done(function (data) {
		console.log(data)
		//window.location.href = "/"
	})
});

$(".save").on("click", function () {
	const data = {
		_id: $(this).attr("data-id"),
		saved: true
	};
	console.log(data);

	$.ajax({
		method: "POST",
		url: `/articles/save/${data._id}`,
	}).done(function (data) {
		console.log(data)
		window.location.href = "/"
	})
});

$(".navbar-nav li").click(function () {
	$(".navbar-nav li").removeClass("active");
	$(this).addClass("active");
});

$(".delete").on("click", function () {
	console.log("delete test");
	var thisId = $(this).attr("data-id");
	$.ajax({
		method: "POST",
		url: "/articles/delete/" + thisId
	}).done(function (data) {
		window.location = "/saved"
	})
});

$(".addNote").on("click", function () {
	alert("nice")
	var articleId = $(this).attr("data-id");
	if (!$("#noteText") + articleId.val()) {
		$.ajax({
			method: "POST",
			url: "/notes",
			data: {
				_id: articleId,
				text: $("#noteText" + articleId).val()
			}
		}).done(function (data) {
			console.log(data)
			$("#noteText" + articleId).val("");
			$(".modalNote").modal("hide");
			window.location = "/saved"
		});
	}
	else {
		alert("please enter a note to save")
	}
});

$(".deleteNote").on("Click", function () {
	var noteId = $(this).attr("data-note-id");
	var articleId = $(this).attr("data-article-id");
	$.ajax({
		mehtod: "DELETE",
		url: "/notes/delete/" + noteId + "/" + articleId
	}).done(function (data) {
		console.log(data)
		$(".modalNote").modal("hide");
		window.location = "/saved"
	})
});

$("#empty").on("click", function () {
	$("#scrapedThings").text("Scrape Some Articles!");
})