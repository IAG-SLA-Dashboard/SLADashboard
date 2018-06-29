function refreshJS(){
		reloadJs("js/show_inc_count.js");
		reloadJs("js/show_inc_grid.js");		
		reloadJs("js/ResonseCriticalIncSoundPlay.js");
		reloadJs("js/ResonseHighIncSoundPlay.js");
		reloadJs("js/ResonseMediumIncSoundPlay.js");
		reloadJs("js/ResonseLowIncSoundPlay.js");
		reloadJs("js/ResolutionIncSoundPlay.js");		
		reloadJs("js/ResponseNewIncSoundPlay.js");		
		reloadJs("js/util.js");		
		
		function reloadJs(src) {
		src = $('script[src$="' + src + '"]').attr("src");
		$('script[src$="' + src + '"]').remove();
		$('<script/>').attr('src', src).appendTo('head');
		}
	}