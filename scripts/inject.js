(function() {
	try {
        var l = window.location.toString();
        if(l.startsWith("https://youtube.com") || l.includes("youtube.com/")) {
			setInterval(() => {
				var elements = [...document.getElementsByTagName("yt-formatted-string")].filter(e=>e.getAttribute("aria-label")?.includes(", verified user") || e.getAttribute("aria-label")?.includes(", Official Artist Channel"));
				//[...document.getElementsByTagName("path")].filter(e=>e.getAttribute('d')=="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"||e.getAttribute('d')=="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z")
				elements.forEach(e=>{
					try{
						var commentCheck = e
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						.parentElement
						e.remove();
						if(commentCheck.tagName.toLowerCase()=="ytd-comment-thread-renderer" || commentCheck.className.toLowerCase().includes("ytd-comment-replies-renderer")) {
							commentCheck.remove();
						}
					} catch {};
				});
			}, 500);
        }
	} catch{}
})();
HTMLElement.prototype.getAttribute