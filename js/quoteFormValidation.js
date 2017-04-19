// prepare the form when the DOM is ready 
$(document).ready(function() { 
	var options = { 
	//target:        '#QuoteForm',   // target element(s) to be updated with server response 
	//beforeSubmit:  validate,  // pre-submit callback 
	success:       showResponse,  // post-submit callback 
				 
	// other available options: 
	//url:       url         // override for form's 'action' attribute 
	//type:      type        // 'get' or 'post', override for form's 'method' attribute 
	//dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
	//clearForm: true        // clear all form fields after successful submit 
	resetForm: true        // reset the form after successful submit 
				 
	// $.ajax options can be used here too, for example: 
	//timeout:   3000 
	};
	var limit_date = '<?= date("m/d/Y", strtotime("+3 days"))?>';
	$("#datepicker").blur(function(){
		if($("#datepicker").val() <= limit_date ){
			
		}
	});
	
				    
	$('#domestic-submit').click(function(){
		// Validate Quote Form
		var errors = '';
		if ( $("#name").val() == '' || $("#name").val() == $("#name").attr('title')) 
		{
			errors += 'Please enter your Name.\n';
			$("#name").css('border', '1px solid #f00');
		}
		if ( !$("#email").val().match(/^.+@.+/)) 
		{
			errors += 'Please enter your Email Address.\n';
			$("#email").css('border', '1px solid #f00');
		}
		if ( $("#phone").val() == '' || $("#phone").val() == $("#phone").attr('title')) 
		{
			errors += 'Please enter your Phone Number.\n';
			$("#phone").css('border', '1px solid #f00');
		}
		if ( $("#datepicker").val() == '' || $("#datepicker").val() == $("#datepicker").attr('title')) 
		{
			errors += 'Please enter your Ship Date.\n';
			$("#datepicker").css('border', '1px solid #f00');
		}
		if ( $("#pickupzip").val() == '' || $("#pickupzip").val() == $("#pickupzip").attr('title')) 
		{
			errors += 'Please enter your Pickup Zip.\n';
			$("#pickupzip").css('border', '1px solid #f00');
		}
		if ( $("#dropoffzip").val() == '' || $("#dropoffzip").val() == $("#dropoffzip").attr('title')) 
		{
			errors += 'Please enter your Delivery Zip.\n';
			$("#dropoffzip").css('border', '1px solid #f00');
		}
		if ( $("#year").val() == '' || $("#year").val() == 'Year') 
		{
			errors += 'Please enter your Vehicle Year.\n';
			$("#div__year span").css('border', '1px solid #f00');
		}
		if ( $("#make").val() == '' || $("#make").val() == 'Make') 
		{
			errors += 'Please enter your Vehicle Make.\n';
			$("#div__make span").css('border', '1px solid #f00');
		}
		if ( $("#model").val() == '' || $("#model").val() == 'Model') 
		{
			errors += 'Please enter your Vehicle Model.\n';
			$("#div__model span").css('border', '1px solid #f00');
		}
		if ( $("#quotetype").val() == '' || $("#quotetype").val() == 'Quote Type') 
		{
			errors += 'Please enter your Carrier Type.\n';
			$("#div__quotetype span").css('border', '1px solid #f00');
		}
		if ( errors == '')
		{
			$("#DomesticQuoteForm").ajaxSubmit(options);
			return false;
		}else 
		{
			alert(errors);
			return false;
		}
				     
	});
	
	$('#freight_shipping-submit').click(function(){
		// Validate Quote Form
		var errors = '';
		if ( $("#name2").val() == '' || $("#name2").val() == $("#name2").attr('title')) 
		{
			errors += 'Please enter your Name.\n';
			$("#name2").css('border', '1px solid #f00');
		}
		if ( !$("#email2").val().match(/^.+@.+/)) 
		{
			errors += 'Please enter your Email Address.\n';
			$("#email2").css('border', '1px solid #f00');
		}
		if ( $("#phone2").val() == '' || $("#phone2").val() == $("#phone2").attr('title')) 
		{
			errors += 'Please enter your Phone Number.\n';
			$("#phone2").css('border', '1px solid #f00');
		}
		if ( $("#datepicker2").val() == '' || $("#datepicker2").val() == $("#datepicker2").attr('title')) 
		{
			errors += 'Please enter your Ship Date.\n';
			$("#datepicker2").css('border', '1px solid #f00');
		}
		if ( $("#pickupzip2").val() == '' || $("#pickupzip2").val() == $("#pickupzip2").attr('title')) 
		{
			errors += 'Please enter your Pickup Zip.\n';
			$("#pickupzip2").css('border', '1px solid #f00');
		}
		if ( $("#dropoffzip2").val() == '' || $("#dropoffzip2").val() == $("#dropoffzip2").attr('title')) 
		{
			errors += 'Please enter your Dropoff Zip.\n';
			$("#dropoffzip2").css('border', '1px solid #f00');
		}
		
		if ( $("#plocdesc").val() == '' || $("#plocdesc").val() == $("#plocdesc").attr('title')) 
		{
			errors += 'Please enter your pickup location description.\n';
			$("#plocdesc").css('border', '1px solid #f00');
		}
		if ( $("#dlocdesc").val() == '' || $("#dlocdesc").val() == $("#dlocdesc").attr('title')) 
		{
			errors += 'Please enter your drop off location description.\n';
			$("#dlocdesc").css('border', '1px solid #f00');
		}
		if ( $("#weight").val() == '' || $("#weight").val() == $("#weight").attr('title')) 
		{
			errors += 'Please enter your item Weight.\n';
			$("#weight").css('border', '1px solid #f00');
		}
		if ( errors == '')
		{
			$("#FreightShippingForm").ajaxSubmit(options);
			return false;
		}else 
		{
			alert(errors);
			return false;
		}
		
	 });
	 
});
				
function validate(formData, jqForm, options) { 
	    // formData is an array of objects representing the name and value of each field 
	    // that will be sent to the server;  it takes the following form: 
	    // 
	    // [ 
	    //     { name:  username, value: valueOfUsernameInput }, 
	    //     { name:  password, value: valueOfPasswordInput } 
	    // ] 
	    // 
	    // To validate, we can examine the contents of this array to see if the 
	    // username and password fields have values.  If either value evaluates 
	    // to false then we return false from this method. 
	 
	    /*for (var i=0; i < formData.length; i++) { 
	        if (!formData[i].value) { 
	            alert('Please enter a value for both Username and Password'); 
	            return false; 
	        } 
	    } 
	    alert('Both fields contain values.'); 
	}*/
	
		alert("Submitted Successfully!");
	}
	// post-submit callback 
function showResponse(responseText, statusText, xhr, $form)  { 
	    // for normal html responses, the first argument to the success callback 
	    // is the XMLHttpRequest object's responseText property 
	 
	    // if the ajaxSubmit method was passed an Options Object with the dataType 
	    // property set to 'xml' then the first argument to the success callback 
	    // is the XMLHttpRequest object's responseXML property 
	 
	    // if the ajaxSubmit method was passed an Options Object with the dataType 
	    // property set to 'json' then the first argument to the success callback 
	    // is the json data object returned by the server 
	 
	    alert("Submitted Successfully!");
	    setTimeout(function(){
	    $('#dialog').fadeOut(2000).dialog('close');
	          }, 600); 
	     
	} 
