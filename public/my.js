$(document).ready(function () {
  setInterval(function () {
    $(".h3-1").css({
      boxShadow: "0 0 10px #02198B",
    });
  }, 500);
  setInterval(function () {
    $(".h3-1").css({
      boxShadow: "0 0 10px white",
    });
  }, 1000);

  setInterval(function () {
    if ($(".one2").next("a").length > 0) {
      $(".one2").next().addClass("one2");
      $(".one2").first().removeClass("one2");
    } else {
      $(".ul-takhfif2").find("a").first().addClass("one2");
      $(".ul-takhfif2").find("a").last().removeClass("one2");
    }
  }, 2000);

  setInterval(function () {
    if ($(".sli").next("li").length > 0) {
      $(".sli").next().addClass("sli");
      $(".sli").first().removeClass("sli");
    } else {
      $(".ul-takhfif").find("li").first().addClass("sli");
      $(".ul-takhfif").find("li").last().removeClass("sli");
    }
  }, 2000);
$(".lipedar:nth-child(2)").mousemove(function (e) { 
    $(".icon9:nth-child(1)").css({
    color:'black'
  })
  $('.dire').css(
    {
     left:'35.2%'
    }
  )
  $(this).find('.icon9').css({
color:'white'
  })
  });

  $(".lipedar:nth-child(3)").mousemove(function (e) { 
    $(".icon9:nth-child(1)").css({
      color:'black'
    })
  $('.dire').css(
    {
     left:'60%'
    }
  )
  $(this).find('.icon9').css({
color:'white'
  })


  
    
  });
  $(".lipedar:nth-child(4)").mousemove(function (e) { 
    $(".icon9:nth-child(1)").css({
      color:'black'
    })
  $('.dire').css(
    {
     left:'85.2%'
    }
  )
  $(this).find('.icon9').css({
color:'white'
  })


  
    
  });
  $(".lipedar:nth-child(1)").mousemove(function (e) { 
    $(".icon9:nth-child(1)").css({
      color:'black'
    })
  $('.dire').css(
    {
     left:'10.2%'
    }
  )
  $(this).find('.icon9').css({
color:'white'
  })


  
    
  });
});
