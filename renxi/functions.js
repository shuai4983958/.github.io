/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var myDate = new Date();
	var current_year = myDate.getFullYear();
	var current_month = myDate.getMonth()+1;
	var current_date = myDate.getDate();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	// var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒。               <br/> 始于<span class=\"digit\">2019</span>年<span class=\"digit\">1</span>月<span class=\"digit\">15</span>日，直到<span class=\"digit\">"+current_year+"</span>年<span class=\"digit\">"+current_month+"</span>月<span class=\"digit\">"+current_date+"</span>日..."; 
	// $("#clock").html(result);
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒。               <br/> 始于<span class=\"digit\">那些</span>年，直到<span class=\"digit\">"+'...'+"</span>年"; 
	$("#clock").html(result);

	//   /* <span class="say"> </span><br>
    //     <span class="say"> 我知道我有点花言巧语，但是我会用行动证明一切</span><br>
    //     <span class="say"> </span><br>
    //     <span class="say">我有点啰嗦，有点不知道说什么</span><br>
    //     <span class="say">结果说出的每句话都小心翼翼</span><br>
    //     <span class="say">还是错了</span><br> */
}
