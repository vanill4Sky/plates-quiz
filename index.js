'use strict';

$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "data/voivodships.csv",
		dataType: "text",
		success: processData
	});
});

function processData(data) {
	let parsedData = $.csv.toObjects(data, { separator: ";" });
	initVoivodeshipList(parsedData);
	console.log(parsedData);
}

function voivodeshipSwitchOnClick() {

}

function initVoivodeshipList(voivodeshipData) {
	voivodeshipData.forEach(e => {
		let switchID = `voivodeship${e.symbol}Switch`;
		let badgeID = `voivodeship${e.symbol}Badge`;
		let listItem = $(`
		<div class="row mb-1">
			<div class="custom-control custom-switch col-8">
			<input type="checkbox" class="custom-control-input" id="${switchID}">
			<label class="custom-control-label" for="${switchID}">
				<div class="mr-2 d-inline">
					<span class="badge badge-pill badge-secondary text-monospace px-2" id="${badgeID}">${e.symbol}</span>
				</div>
				${e.voivodeship}
			</label>
			</div>
			<div class="col-4"></div>
	 	</div>
	  `);
		$("#voivodeshipList").append(listItem);
		$(`#${switchID}`).click(() => {
			let badge = $(`#${badgeID}`);
			if (badge.hasClass("badge-secondary")) {
				badge.removeClass("badge-secondary");
				badge.addClass("badge-primary");
			} else {
				badge.removeClass("badge-primary");
				badge.addClass("badge-secondary");
			}
		})
	});
}