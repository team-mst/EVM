var applicationLoc = {};

function load(elID, type, doc, overriderLoc) {
	if (overriderLoc == 1) {
		applicationLoc.reqDoc = applicationLoc.reqDoc;
	} else {
		applicationLoc.reqDoc = doc;
	}
	console.log('LOC: ' + applicationLoc.reqDoc);
	$.ajax({
		url: type + '/' + doc,
		dataType: 'html',
		async: true,
		success: function (data) {
		    $('#' + elID).html(data);
		},
		fail: function (data) {
		    alert("AJAX failed!");
		}
	});
}
function defaultModel(data) {
	var self = this;
	ko.mapping.fromJS(data, {}, self);
}
function overriderLoc(loc) {
	applicationLoc.reqDoc = loc;
}