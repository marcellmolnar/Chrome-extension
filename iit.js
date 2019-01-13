chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://www.iit.bme.hu/oktatas/tanszeki_targyak"
		});
		chrome.tabs.executeScript(
			null, {
				file: 'mySelector.js'
			}
		);
	});
});

