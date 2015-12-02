// In order to use this function we must start the python webserver as follow:
// 	python -m SimpleHTTPServer
var baseApi = 'http://localhost:8082/api/';

function validateLogin()
              {
 
               	document.getElementById("inlogin").style.borderColor="#1D0D8F";
              	document.getElementById("inpassword").style.borderColor="#1D0D8F";

                 if( document.loginForm.inlogin.value == "" ||  document.loginForm.inpassword.value == "")
                 {
                    alert( "Please provide your login and password!" );
                    document.getElementById("inlogin").style.borderColor="#ff0000";
                    document.getElementById("inpassword").style.borderColor="#ff0000";
                    document.loginForm.inlogin.focus() ;
                    return false;
                 }             
                 if( document.loginForm.inlogin.value == "" )
                 {
                    alert( "Please provide your login!" );
                    document.getElementById("inlogin").style.borderColor="#ff0000";

                    document.loginForm.inlogin.focus() ;
                    return false;
                 }
                 if( document.loginForm.inpassword.value == "" )
                 {
                    alert( "Please provide your password!" );
                    document.getElementById("inpassword").style.borderColor="#ff0000";

                    document.loginForm.inpassword.focus() ;
                    return false;
                 }
                 
                
                 return( true );
              }

function validateSign()
              {
              	document.getElementById("username").style.borderColor="#1D0D8F";
              	document.getElementById("email").style.borderColor="#1D0D8F";
              	document.getElementById("password").style.borderColor="#1D0D8F";
              	document.getElementById("confpassword").style.borderColor="#1D0D8F";
              	document.getElementById("phone").style.borderColor="#1D0D8F";
              	document.getElementById("address").style.borderColor="#1D0D8F";
              	document.getElementById("city").style.borderColor="#1D0D8F";
              	document.getElementById("state").style.borderColor="#1D0D8F";
              	document.getElementById("zipcode").style.borderColor="#1D0D8F";


               	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  

                 if( document.signForm.username.value == "" )
                 {
                    alert( "Please provide a username!" );
              		document.getElementById("username").style.borderColor="#ff0000";
                    document.signForm.username.focus() ;
                    return false;
                 }             
                 
                 if( document.signForm.email.value == "" || !(document.signForm.email.value.match(mailformat)) )
                 {
                   alert( "Please provide a valid email!" );
                   document.getElementById("email").style.borderColor="#ff0000";
                   document.signForm.email.focus() ;
                   return false;
                 }     
                 
                 if( document.signForm.password.value == "" )
                 {
                    alert( "Please provide a password!" );
                    document.getElementById("password").style.borderColor="#ff0000";
                    document.signForm.password.focus() ;
                    return false;
                 }     
                 if( document.signForm.confpassword.value == "" )
                 {
                    alert( "Please confirm the password!" );
                    document.getElementById("confpassword").style.borderColor="#ff0000";
                    document.signForm.confpassword.focus() ;
                    return false;
                 }     
                 if( document.signForm.confpassword.value !=  document.signForm.password.value)
                 {
                    alert( "Password confirmation should match the password!" );
                    document.getElementById("password").style.borderColor="#ff0000";
                    document.getElementById("confpassword").style.borderColor="#ff0000";
                    document.signForm.password.focus() ;
                    return false;
                 }    
                
                if( document.signForm.phone.value == "" )
                 {
                    alert( "Please provide a phone number!" );
                    document.getElementById("phone").style.borderColor="#ff0000";
                    document.signForm.phone.focus() ;
                    return false;
                 }     

                 

                 if( document.signForm.address.value == "" )
                 {
                    alert( "Please provide a address!" );
                    document.getElementById("address").style.borderColor="#ff0000";
                    document.signForm.address.focus() ;
                    return false;
                 }     

                  if( document.signForm.city.value == "" )
                 {
                    alert( "Please provide a city!" );
                    document.getElementById("city").style.borderColor="#ff0000";
                    document.signForm.city.focus();
                    return false;
                 }     
                 if( document.signForm.state.value == "-1" )
                 {
                    alert( "Please provide a state!" );
                    document.getElementById("state").style.borderColor="#ff0000";
                    document.signForm.state.focus();
                    return false;
                 }     

				if( document.signForm.zipcode.value == "" ||
			         isNaN( document.signForm.zipcode.value ) ||
			         document.signForm.zipcode.value.length != 5)
                 {
                    alert( "Please provide a zip in the format #####.!");
                    document.getElementById("zipcode").style.borderColor="#ff0000";
                    document.signForm.password.focus();
                    return false;
                 }     

                 return( true );
              }              

function retrieveBicycleData(handlerDone, handlerFail) {
	getData(baseApi + 'bikes')
		.done(handlerDone)
		.fail(handlerFail);
}

function filterBicycle(filter, handlerDone, handlerFail) {
	postData(baseApi + 'bikes', JSON.stringify(filter))
		.done(handlerDone)
		.fail(handlerFail);
}

// Base functions to communicate with the server.
function getData(api){
	showLoading();

	return $.ajax({
		type: 'GET',
		url: api,
		contentType: "application/json",
		dataType: 'json'
	}).always(function(){
		hideLoading();
		return arguments;
	});
}

function postData(api, data){
	showLoading();
	return $.ajax({
		type: 'POST',
		url: api,
		data: data,
		contentType: "application/json",
		dataType: 'json'
	}).always(function(){
		hideLoading();
		return arguments;
	});
}