$(function(){
    // トップへ戻るボタン
    $("#corporate-logo").click(function(){
      $("html,body").animate({
        "scrollTop": 0
      }, "slow");
    });
  
    // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。
    $(".nav a").click(function(){
      var id = $(this).attr("href");
      var position = $(id).offset().top;
      $("html,body").animate({
        "scrollTop":position
      },500);
      $(".nav-wrapper").removeClass("close").removeClass("open");
      $(".nav-button").removeClass("active");
    });
  
    $(".nav-button").on("click",function(){
      if( $(this).hasClass("active") ){
        $(this).removeClass("active");
        $(".nav-wrapper").addClass("close").removeClass("open");
      }else {
        $(this).addClass("active");
        $(".nav-wrapper").addClass("open").removeClass("close");
      }
    });
  });