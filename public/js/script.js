$('#form').validate({
	names: {
		required: true,
		maxlength:4
	},
	submitHandler: function () {
		//Use ajax submit instead of jQuery.ajax
		$('#form').ajaxSubmit({
			//The url to hit.
			url: '/form',
			//The success callback
			success: function (data, statusText, xhr, $form) {
				console.log(data);
			},
			//Parse the response as json
			dataType:  'json',
			type: 'post',
			//Use iframes to comunicate to the server.
			iframe: true
		});
	}
});