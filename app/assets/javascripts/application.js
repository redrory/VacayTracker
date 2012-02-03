//= require jquery
//= require jquery_ujs
//= require_self
//= require_tree .

$(function() { 

	//$( '#employee_dob' ).datepicker();

	$( '#vacay_dateFrom' ).datepicker({ dateFormat: 'yy/mm/dd' });

	$( '#vacay_dateUntil' ).datepicker({ dateFormat: 'yy/mm/dd' });
		console.log('Date picker loaded');

		$('[name = "vacay[dateFrom]"').click(function(){
			alert("Vacation datafrom selected");
		});


	$('[name = "commit"]').click(function(){

		console.log('inside vacay_submit');
			
			var df = $('#vacay_dateFrom').val();
     	var du = $("#vacay_dateUntil").val();

     	var oneDay = 24*60*60*1000;
     	var firstDate = new Date(df);
     	var secondDate = new Date(du);

     	var diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
			alert('Vacation days wanted'+ diffDays );
		//jQuery.post(diffDays);

  		//jQuery.('name=vacay_sumVacay').val(diffDays);

  		// this was automatically posting the sumVacay value
  		$("[id='vacay_sumVacay']").val(diffDays);


	});

	$('a[id = "maxVacay"]').click(function(){
		
		$('#MV').show('slow');
		$('#MS').hide('slow');
		$('#DE').hide('slow');
		$('#created_at').hide('slow');
	});
	
	$('a[id = "maxSick"]').click(function(){
	
		$('#MV').hide('slow');
		$('#MS').show('slow');
		$('#DE').hide('slow');
		$('#created_at').hide('slow');

	});
	
	$('a[id = "doe"]').click(function(){
		
		$('#MV').hide('slow');
		$('#MS').hide('slow');
		$('#DE').show('slow');
		$('#created_at').hide('slow');

	});
	
	$('a[id = "VDT"]').click(function(){
	
		$('#normal').hide('slow');
		$('#vacayTaken').show('slow');
		$('#vacayLeft').hide('slow');


	});
	
	$('a[id = "VDL"]').click(function(){
	
		$('#normal').hide('slow');
		$('#vacayTaken').hide('slow');
		$('#vacayLeft').show('slow');


	});
	
	$('a[id = "SDT"]').click(function(){
	
		$('#normal').hide('slow');
		$('#sickTaken').show('slow');
		$('#sickLeft').hide('slow');
		

	});
	
	$('a[id = "SDL"]').click(function(){
	
		$('#normal').hide('slow');
		$('#sickTaken').hide('slow');
		$('#sickLeft').show('slow');

	});
	

		
});
