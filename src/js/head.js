$(function(){
    $(".wzdh").hover(function(){
        $(this).css({"background":"#fff","box-shadow":"3px 0px 5px #ccc","border-left":"1px solid #ccc"})
        $(".blTop1").css({"box-shadow":"0 0 2px #CCC","display":"block"})
    },
    function(){
        $(this).css({"background":"#e3e4e5"})
        $(".blTop1").css({"display":"none"})
    })
    $(".sou").focus(function(){
        $(".list").css({"display" : "block"})
        $(".sou").blur(function(){
            $(".list").css({"display" : "none"})
        })
  })
  

})