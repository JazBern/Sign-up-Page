$(document).ready(function(){

	$(".submit_form").click(function(){
			// alert($(".username").val());
			if($(".username").val()==""||$(".username").val()==null)
			{
				$(".p1").show();
				$(".p1").text("*Enter your name");					
				$(".username").focus(function(){
					$(this).css("border", "2px solid red");
				});
				return false;	
			}
			else if(/[0-9]/g.test($(".username").val()))
			{
				$(".p1").show();
				$(".p1").text("* Name must have alphabet characters only");					
				$(".username").focus(function(){
					$(this).css("border", "2px solid red");
				});
				return false;	
			}
			else if ($(".passid").val().length == 0 || $(".passid").val().length  >= 12 || $(".passid").val().length <=8)
			{  
				
				$(".p2").show();
				$(".p2").text("* Password should not be empty and length must be between 8 to 12");

				$(".passid").focus(function(){
					$(this).css("border", "2px solid red");
				});
				return false; 
				
			}  
			else if(($(".passid").val())!=($(".cnfpassid").val()))
			{
				alert("Password and Confirm Password don't match");
				$(".cnfpassid").focus(function(){
					$(this).css("border", "2px solid red");
				});
				return false;
				
			}	        
			
			else if($(".uemail").val() == null || $(".uemail").val() == "") 
			{
				$(".p3").show();
				$(".p3").text("* Email Id must be filled out!!");					
				$(".uemail").focus(function(){
					$(this).css("border", "2px solid red");
				});
				return false;
				
			}
			else if($(".uemail").val() != null || $(".uemail").val() != "") 
			{
				var emil=$(".uemail").val();
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if( !emailReg.test( emil ) ) 
				{
					$(".p3").show();
					$(".p3").text("* Enter a valid email!!");					
					$(".uemail").focus(function(){
						$(this).css("border", "2px solid red");
					});
					return false;
				} 
			}


			
			else ($(".username").val() != "" && $(".passid").val() != "" && $(".cnfpassid").val() != "" && $(".uemail").val() != "")
			{

				$(".registration").html(" FORM SUBMITTED SUCCESSFULLY ");
				$(".registration").css({"text-align":"center","margin-top":"250px","font-size":"40px","color":"lightgreen"});
				return false;
			}
			

		});
});