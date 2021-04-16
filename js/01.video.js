var options = {
	videoURL:'PSYRbJjIT6U',
	containment:'.video-wrapper2',
	autoPlay:true, 
	mute:false, 
	startAt:0,
	opacity:1, 
	loop:false, 
	ratio:"4/3", 
	addRaster:true,
    showYTLogo:false,
	onReady: function() {
		
	},
	onError: function() {
		alert('동영상을 가져오는데 에러가 발생하였습니다.')
	}
}
$('#youtubeBg').YTPlayer(options);


/* var $video = $('.video-wrapper video')
$(window).resize(onResize)
function onResize() {
	var windowWidth = $(this).innerWidth()
	var videoWidth = $video.innerWidth()
	if(windowWidth > videoWidth) {
		$video.css({'width': '100%', 'height': 'auto'})
	}
	else {
		$video.css({'width': 'auto', 'height': '100%'})
	}
} */