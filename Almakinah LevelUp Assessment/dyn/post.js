

var root = 'https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/'
$('body').append("<form></form>");
$.ajax({

	url: root + "/getFormSchema",
	method: 'get',
	success: function(data){
		console.log(data);

		$.each(data,function (i, item) {
			var x= item .type;
			var y = item.value;
			$('form').append("<p><label for="+item+">x</label><input type=" +x+ " value = "+y+" ></p>");
		})

		   	},
   	  error: function(error) {
   	    console.log(error);
   	 }
   	});

$("header").addClass("header");
$(".header").css({color: "red"})
$("form").css({
	color:'blue',
	border: '4px solid green',
	borderRadius: "30px",
	padding: "16px",
})
$("form:last-child").on('click', function () {
	
	var info ={
		val: $input.val
	}



	$.ajax({
		url: root + "/submission",
		method: "post",
		data: info,
		success: function(data){
		console.log(data);

		$.each(data,function (newItem) {
			var a= newItem .type;
			var b = newItem.value;
			$('form').append("<p><label for="+item+">x</label><input type=" +a+ " value = "+b+" ></p>");
		})

		   	},
   	  error: function(error) {
   	    console.log(error);
   	 }
   	});

	})

















