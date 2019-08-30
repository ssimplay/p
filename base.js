$(function(){
   
    $(".w_img").hide();
    
    $(".word button").click(function(){
       
        if( $(this).prev().css("display")=="none" ){
            
            $(this).html("▲펼치기")
            $(this).prev().css({ marginTop : '-350px' })
            $(this).prev().slideDown("fast");
            $(this).html("▼접기")
            
        }else{
            
            $(this).html("▼접기")
            $(this).prev().slideUp("fast");
            $(this).html("▲펼치기")
        }
        
    });
    
});