$(document).ready(()=>{
    $("button").css("color","blue");
    $("#btn1").hover(()=>{
        $("p").hide(1000,()=>{$(".para2").show();});
    },()=>{
        $(".para1").css({"width":"120px","display":"inline"});
    })
    $("#btn2").dblclick(()=>{
        $(".para1").css("color","#ddd");
    })
    $("#btn2").click(()=>{
        $("button").css({"background-color":"#080","color":"red"});
    })
    $("#fade1").click(1000,()=>{
        $(".para3").fadeToggle(1000);
    })
    $("#fade2").click(()=>{
        $(".para3").fadeToggle("fast",()=>{
            $(".para3").fadeTo(200,0.3);
        })
    })
    $(".thisToAnimate").animate({
        'width':"200px",'height':'200px'
    },1000,()=>{$('.annimate').fadeOut(1000)})
    $(".thisToAnimate").animate({
        'width':'toggle','height':'toggle'
    },2000,()=>{$(".annimate").fadeIn(1000)})
    $(".thisToAnimate").animate({
        'width':'toggle','height':'toggle',"border-radius":"50%"
    },2000)
    var stop=$('.stop');
    // cache is beter as no need for jquery to look for it every time we select it 
    // i.e. if there is more than one $ for the same element cache would be bertter
    stop.click(()=>{
        $('.thisToAnimate').stop(true,true);
        // stop(clearqueue,go to end)
    })
    var chain= $('.chain');
    chain.fadeOut(3000)
    .fadeIn(3000)
    .css({'color':"red"})
    .slideUp(1000)
    .slideDown(1000);
    // خد بالك ال css
    //  بيطبق اول حاجة لان مفيش فيه انيميشن
    var value=$('.value').text();
    $('#restult').click(()=>{
        $('#text').val(value);
    })
    var value2=$('.value2').html();
    $('#restult2').click(()=>{
        $('#text2').val(value2);
    })
    $('#attr').click(()=>{
        $('#toChange').attr({'href':"/","target":"togyj"});
    })
    $('#append').append('<br/><span class="append">append still at the end of div element</span>');
    $('#append').prepend('<br/><span class="prepend">prepend still at the beggening of the div element</span>');
    $('#append').after('<br/><span class="after">after still after the div element</span>');
    $('#append').before('<br/><span class="before">before still before the div element</span>');
    $('.remove').click(function(){
        // $('p.value').remove();
        // $('p').remove('.value');
        $('p.value').empty();
        $(this).remove();
    })
    $('.addClass').click(()=>{
        $('.para1,.para2,.para3').addClass('addClass add').removeClass('hoodaatwa');
    })
    $('#cssresultbu').click(()=>{
        var cssresultinn=$('#cssresultinn').val();
        $('.cssresultp').css({'color': cssresultinn})
    })
    $('.widthcontrol').click(()=>{
        $('.widthcontrol').width('+='+50);
    })
    var parent=$('.Traversing p span').parent();
    console.log(parent);
    var parents1=$('.Traversing p span').parents();
    console.log(parents1);
    var parents=$('.Traversing p span').parents('.Traversing');
    console.log(parents);
    var parentsUntil=$('.Traversing p span').parentsUntil('.Traversing');
    console.log(parentsUntil);
    $('body').find($('span:contains("tree")')).css({'background-color':'red'});
})

