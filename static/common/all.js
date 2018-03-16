/**
 * Created by ike on 2017/8/26.
 */
/*    $('.inactive').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).parent('li').siblings('li').removeClass('inactives');
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
            if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);
            }
        }else{
            $(this).removeClass('inactives');
            $(this).siblings('ul').slideUp(100);
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            $(this).siblings('ul').children('li').children('ul').slideUp(100);
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
        }
    });
    $('.list-children li').click(function() {
        $(this).addClass('now').siblings().removeClass('now');
    });
    $('.line-message li').click(function() {
        $(this).children("a").find('.unread').removeClass('unread');
        $(this).addClass("unreadbg").siblings().removeClass('unreadbg')
    });
$('.content-body').find(".listsmoney,.analyze-lists,.material-lists,.commis-list,.right-list,.drawal-lists,.list").show();
$(".right-header ul li").click(function(){
    var listTitle = $(this).attr("data-title");
    $('.right-header ul li').removeClass('current-color');
    $(this).addClass('current-color');
    $(this).parents('.content-right').find('.'+listTitle).show().siblings().hide();
    //添加的js
    $(this).parents('.main-module').find('.'+listTitle).show().siblings().hide();
});
//添加的js
$(".right-head ul li").click(function(){
    var listTitle = $(this).attr("data-title");
    $('.right-head ul li').removeClass('current-color');
    $(this).addClass('current-color');
});

$(".checked-none").each(function(i){
    $(this).attr({"id":"checked"+i});
    $(this).next("label").attr("for","checked"+i);
});
$(".can").hide();
$(".more").click(function(){
    $(this).parents('.list-all').find(".can").show();
    $(this).hide()
});
$(".pick").click(function(){
    $(".can").hide();
    $(".more").show()
});

//添加的js
$(".ul-icon svg").click(function(){
    $(this).parents('.ul-span').addClass("ul-span1");
});
//模态框
$('.money-body span[data-title]').click(function(){
    var dataTitle = $(this).attr("data-title");
    $('#modalbg').show();
    $('#modal').show();
    $('#modal .'+dataTitle).show();
});
$('.modal-head .cancel').click(function(){
    $('#modal').hide();
    $('#modalbg').hide();
});

//消息
$('#news .close').click(function(){
    $('#news').hide();
    $('#modalbg').hide();
});
$('.notice-body').on('click','a',function(){
    daily();
    if($(this).parents('li').hasClass('unread')){
        $(this).parents('li').removeClass('unread')
    }
});

function daily(){
    $('#news').show();
    $('#modalbg').show();
}
//添加的js
//点击查看更多
$(".body-add").click(function(){
    $(".all-show").toggleClass("all-hide")
});

//添加节点
$(".add-table").click(function(){
    $(".all-show").append($(".as").html());
    $(".all-show").append("<div class='as'>"+$(".as").html()+"</div>");
})

//删除节点
$(".del-table").click(function(){
    $(this).parents(".as").contents().remove();
})*/







