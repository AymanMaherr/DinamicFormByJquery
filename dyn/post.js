

var root = 'https://levelup-assessment-backend-ddmwdsdlta.now.sh/api'
$('body').append("<form></form>");
$.ajax({
	url: root + "/getFormSchema",
	method: 'get',
	success:function(data){
				console.log(data);
				$.each(data,function (i, item) {
					var x= item.type;
					var y = item.value;
					$('form').append("<p><label for="+i+">"+i+"</label><input name=" + i +" type=" +x+ " value = "+y+" ></p>");
					$("input").css({
						color: "green",
						margin: "5px",
						borderRadius: "5px",
						textAlign:"center"
			});

		})
	},
   	error: function(error) {
   	    console.log(error);
   	 	}
   	});
// ---------the above is to create the form by getting the info from https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/getFormSchema----------
// ---------------------------------In the above i have added the css for the inout  only------------------------
$("body").on('click',':submit', function () {

	var info = {}

	var inputs = $("input");

	for (var i = 0; i < inputs.length; i++) {
		
		inp = inputs[i]

		if(inp.type != 'submit' && inp.type != 'checkbox'){
			info[inp.name] = inp.value
		
		}else if(inp.type == 'checkbox'){
			info[inp.name] = inp.checked
		}


	}

	console.log(info)

	$.ajax({
		url: root + "/submission",
		method: "post",
		data: JSON.stringify(info),
		contentType: 'application/json',
		success:function(data){
					console.log(data);
					$.each(data,function (s, newItem) {
						var a= newItem .type;
						var b = newItem.value;
						$('form').append("<p><label for="+s+">"+s+"</label><input type=" +a+ " value = "+b+" ></p>");
				  	})
		},
   	  	error: function(error) {
   	    	   console.log("responce");
   		}
   	});

	return false;
});



// ---------------------------------the above is to submit the form to https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/submission----------


$("body").css({
	margin: "20px",
	textAlign: "center",
});
$("*").css({
	boxSizing: "border-box"
});
$("form").css({
	color:'green',
	border: '4px solid green',
	borderRadius: "30px",
	padding: "16px",
	width: "300px",
	display: "inline-block"
});
$("h1").css({
	display: "inline-block",
	color: "white",
	background: "green",
	borderRadius: "30px",
	width: "500px"
});

// --------------------------------the above is the CSS ---------------------------------------------------















