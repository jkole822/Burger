$("#create-burger").submit(() => {
	const data = { burger_name: $("#burger-name").val().trim() };

	if (data.burger_name) {
		$.post("/api/burgers", data);

		location.reload();
	}
});

$(".devour-button").click(function () {
	const id = $(this).attr("data-id");

	$.ajax(`/api/burgers/${id}`, {
		type: "PATCH",
	});

	location.reload();
});

$("#clear-button").click(() => {
	$.ajax("/api/burgers", {
		type: "DELETE",
	});

	location.reload();
});
