$("#create-burger").submit(event => {
	const data = { burger_name: $("#burger-name").val().trim() };

	$.post("/api/burgers", data);

	location.reload();
});

$(".devour-button").click(function () {
	const id = $(this).attr("data-id");

	$.ajax(`/api/burgers/${id}`, {
		type: "PATCH",
	});

	location.reload();
});
