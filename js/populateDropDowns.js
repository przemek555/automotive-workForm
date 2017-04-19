/*
	This file renders all of the drop down <select> elements dynamically
	
*/
$(document).ready(function() {
/*----------Domestic Form-----------*/
//Render Year Drop Down           
	var table_string = "<select class=\"styled\" name=\"vehicleyear\" id=\"year\"><option selected=\"Year\">Year</option>";
	for( i=0; i<obj_year_model[0].Year.length; i++ )
	{
		table_string = table_string + "<option value=" + obj_year_model[0].Year[i] + ">" +obj_year_model[0].Year[i]+"</option>";
	}
	table_string = table_string + "</select>";
	$("#div__year").html(table_string);//Replace everything in the div__year with the table string

//Render Make Drop Down
	var table_string = "<select class=\"styled\" name=\"vehiclemake\" id=\"make\"><option selected=\"Make\">Make</option>";
	for( i=0; i<obj_make_model.length; i++ )
	{
	    table_string = table_string + "<option value=\""+obj_make_model[i].Make+"\">" +obj_make_model[i].Make+"</option>";
	}
	table_string = table_string + "</select>";
	$("#div__make").html(table_string);//Replace everything in the div__make with the table string

//Render Model Drop Down
	var table_string = "<select class=\"styled\" name=\"vehiclemodel\" id=\"model\"><option selected=\"Model\">Model</option></select>";
	$("#div__model").html(table_string);//Replace everything in the div__model with the table string

//Render Quote Type Drop Down
var table_string = "<select class=\"styled\" name=\"quotetype\" id=\"quotetype\"><option selected=\"Quote Type\">Quote Type</option>";
for( i=0; i<obj_quotetype_model[0].QuoteType.length; i++ )
{
	table_string = table_string + "<option>"+obj_quotetype_model[0].QuoteType[i]+"</option>";
}
table_string = table_string + "</select>";
$("#div__quotetype").html(table_string);//Replace everything in the div__quotetype with the table string
	
//Disable Model Drop Down Until Make is selected
	$("#make").click(function(){
	    if( $("#make").val() == "Make" ){
	        $("#model").attr("disabled","true");
	    }
	    else{
	        $("#model").removeAttr("disabled");
	    }
	});
	$("#model").attr("disabled","true");
	
	$("#make").change(function(){
        prm_make = $(this).val();
        models_table_string = fn_render_model_choices( prm_make );
        $("#div__model").html("");
        $("#div__model").html(models_table_string);
        $("#model").removeAttr("disabled");
        $("#model").change(function(){
        	stringofhtml = $("#model").val();
            $("#modelspan").html(stringofhtml);
        })
        
    })
    
    $("#make2").change(function(){
            prm_make = $(this).val();
            models_table_string = fn_render_model_choices2( prm_make );
            $("#div__model2").html("");
            $("#div__model2").html(models_table_string);
            $("#model2").removeAttr("disabled");
            $("#model2").change(function(){
            	stringofhtml = $("#model2").val();
                $("#modelspan").html(stringofhtml);
            })
            
        })
    


});//End Document.Ready function

/*----------------------------------
Custom Functions
---------------------------------------------------------------------------------------------------------*/
        function fn_render_model_choices( prm_make ){
            if( prm_make != "" ){
                model_index = -1;
                for( i=0; i<obj_make_model.length; i++ ){
                    if( obj_make_model[i].Make == prm_make ){
                        model_index=i;
                    }
                }
                // Render a list to show choices of Models
                var table_string = "<span class=\"select\" id=\"modelspan\">Model</span><select class=\"styled\" name=\"vehiclemodel\" id=\"model\"><option selected=\"Model\">Model</option>";
                for( i=0; i<obj_make_model[model_index].Models.length; i++ )
                {
                   table_string = table_string + "<option>"+obj_make_model[model_index].Models[i]+"</option>";
                }
                table_string = table_string + "</select>";
                return table_string;
            }
            
            return "";
            
        }
        
        function fn_render_model_choices2( prm_make ){
            if( prm_make != "" ){
                model_index = -1;
                for( i=0; i<obj_make_model.length; i++ ){
                    if( obj_make_model[i].Make == prm_make ){
                        model_index=i;
                    }
                }
                // Render a list to show choices of Models
                var table_string = "<span class=\"select\" id=\"modelspan\">Model</span><select class=\"styled\" name=\"model\" id=\"model2\"><option selected=\"Model\">Model</option>";
                for( i=0; i<obj_make_model[model_index].Models.length; i++ )
                {
                   table_string = table_string + "<option>"+obj_make_model[model_index].Models[i]+"</option>";
                }
                table_string = table_string + "</select>";
                return table_string;
            }
            
            return "";
            
        }
        

        
      
