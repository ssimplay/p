$(function(){
   
    $(".w_img").hide();
    
    $(".word button").click(function(){
        
        var img_h = $(".w_img").height();
       
        if( $(this).prev().css("display")=="none" ){
            
            $(this).html("▲펼치기")
            $(this).prev().css({ marginTop : -img_h })
            $(this).prev().slideDown("fast");
            $(this).html("▼접기")
            
        }else{
            
            $(this).html("▼접기")
            $(this).prev().slideUp("fast");
            $(this).html("▲펼치기")
        }
        
    });
    
});