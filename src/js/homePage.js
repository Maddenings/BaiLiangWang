   $(".menu li").each(function () {
       $(this).hover(function () {
           $(this).find(".lie").next().css("display", "block");
       }, function () {
           $(this).find(".lie").next().css("display", "none");
       })
   })

   $("#zz_right").click(function () {
       $("#chao ul").animate({
           left: "-700px"
       }, "slow");
       $("#zz_left").css({
           display: "block"
       });
       $(this).css({
           display: "none"
       });
   })
   $("#zz_left").click(function () {
       $("#chao ul").animate({
           left: "250px"
       }, "slow");
       $("#zz_right").css({
           display: "block"
       });
       $(this).css({
           display: "none"
       });
   })
//让img图片放大
   $(".image").each(function () {
       $(this).mouseover(function () {
           $(this).animate({
               width: "150px",
               height: "150px",
               marginLeft: "-6px",
               marginTop: "-10px"
           }, "100");
           $(this).mouseout(function () {
               $(this).animate({
                   width: "140px",
                   height: "140px",
                   marginLeft: "0",
                   marginTop: "0"
               });
           })
       })
   })

