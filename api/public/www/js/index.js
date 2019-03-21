$('.message a').click(function(){
    $('#warning').html('')
	$('.localform').animate({height: "toggle", opacity: "toggle"}, "slow");
});


$(document).ready(function(){
	


	$('.login-form button').on('click',function(){
		$('#warning').append(getLoading())
		var username = 	$('input[name="login-username"]').val() ;
		var password =  $('input[name="login-password"]').val() ;
		console.log(username)
		console.log(password)
		var url = 'http://locahost/api/login'
	/*	var prams = {
			email : username,
			password : password
		}
		$.post(url,prams,function(data,status){
			console.log(status)
			console.log(data)

		})
		console.log('clicked')*/
		var request = $.ajax({
			url: 'http://locahost/api/login',
			type: 'post',
			data: {
				email :username,
				password:password
			},
/*			headers: {
              Header_Name_One: 'Header Value One',   //If your header name has spaces or any other char not appropriate
              "Header Name Two": 'Header Value Two'  //for object property name, use quoted notation shown in second
            },*/
    		dataType: 'json',
 /*  			success: function (data) {
    			 console.log(data);
    		}*/

		});
		request.success(function(data){
                 console.log(data)
   
                 document.cookie = "myapptok="+data['success']['token']
                 $('#warning').html('')
                  var loc = window.location.pathname;
                 console.log(loc)
                 window.location = loc+'/app.html'

		})

		request.error(function(httpObj, textStatus) {       
                if(httpObj.status==401){
                      console.log(textStatus)
                      console.log('not you')
                      $('#warning').html('wrong username or password')
                      
                }
                                    
                   
         });
})


	$('.register-form button').on('click',function(){
        $('#warning').html('')
        $('#warning').html(getLoading())
		var name  = $('input[name="reg_name"]').val();
		var email  = $('input[name="reg_email"]').val();
		var password = $('input[name="reg_password"]').val();
		var c_password = $('input[name="c_password"]').val();

		console.log(name)
		console.log(email)
		console.log(password)
		console.log(c_password)

		var request = $.ajax({
			url:  'http://locahost/api/register',
			type: 'post',
			data : {

				name  : name,
				email : email ,
				password : password ,
				c_password : c_password

			},
			dataType: 'json'

		});

		request.success(function(data){

			console.log(data)

		})

		request.error(function(httpObj,textStatus){

			if(httpObj.status == 401){
				$('#warning').html('')
				console.log(textStatus)
				var obj = JSON.parse(httpObj.responseText)

				if (obj.error.hasOwnProperty('email')){
					console.log(obj.error.email[0])
					$('#warning').append('<p>'+obj.error.email[0]+'</p>')
				}

				if(obj.error.hasOwnProperty('name')){
                     $('#warning').append('<p>'+obj.error.name[0])
				}

				if(obj.error.hasOwnProperty('password')){
					$('#warning').append('<p>'+obj.error.password[0])
				}

				if(obj.error.hasOwnProperty('c_password')){
					$('#warning').append('<p>'+obj.error.c_password[0])
				}
			    

				
			}
		})
	})



})