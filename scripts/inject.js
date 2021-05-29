(function() {
	try {
        var l = window.location.toString();
        if(l.startsWith("https://youtube.com") || l.includes("youtube.com/")) {
		    var _ = document.createElement('script');
		    _.src = chrome.extension.getURL('scripts/commentFucker.js');
		    (document.head || document.documentElement).appendChild(_);
        }
	} catch{}
})();
