
function close_modal()
    {
        $('.pMenu_graybg-cat.sm').find('li.active').removeClass('active');
        return false;
    }

$(function($) {

    $(function(){
        if($('#count-buy_now').hasClass('disabled'))
        {
            $('#count-buy_now .admin_editIIG_line-name').css('color', '#707070');
            $('#count-buy_now input').attr('disabled', 'disabled');
            $('#count-buy_now select').attr('disabled', 'disabled');
        }

    });

    $(function(){
            $('#menu-all-cat li').hover(function(){
                if($('#indexMenu_list-bl').css('display') == 'block')
                    $(this).addClass('active');
            }, function(){
                $(this).removeClass('active');
            });
    });

    $(function() {
        $('select, input:checkbox, input:radio, .upload:file').styler();
    });

    // Tabs
    $(function() {
        $('ul.tabs').on('click', 'li:not(.current)', function() {
            $(this).addClass('current').siblings().removeClass('current')
                .parents('div.section_tabs').find('div.box_tab').eq($(this).index()).fadeIn(150).siblings('div.box_tab').hide();
        });
    });

    $(function(){
        $('#itemModalRates').on('click', function(){
            $('#windowModal-rates').arcticmodal({
                overlay: { css: { opacity: 0.0 } },
                closeOnOverlayClick: false
            }); 
            return false;
        });
    });

    $(function(){
        $('.menu-categories-header > .submenu').hide();
        $('.menu-categories-header > a').click(function(){

            var $submenu = $(this).parent().find('.submenu');
  
            if($submenu.is(':hidden'))
                $submenu.fadeIn('fast');
            else 
                $submenu.fadeOut('fast');

            return false;

        });
        $(document).click( function(event){
          if( $(event.target).closest(".menu-categories-header > .submenu").length ) 
            return;
          $('.menu-categories-header > .submenu').fadeOut('fast');
          event.stopPropagation();
        });
    });

    $(function(){
        $('.dropdown-select-box span').click(function(){

            if($(this).children('input[type="checkbox"]').attr('checked') == 'checked')
            {
                $(this).children('input').attr('checked', false).trigger('refresh');
                if($(this).children('span.jq-checkbox').hasClass('checked'))
                    $(this).children('span.jq-checkbox').removeClass('checked');
            }
            else { 
                $(this).children('input').attr('checked', true).trigger('refresh');
                if(!$(this).children('span.jq-checkbox').hasClass('checked'))
                    $(this).children('span.jq-checkbox').addClass('checked');
            }  

            return false;
        }); 

        $('a.dropdown-multiselect_close').click(function(e){
            e.preventDefault();
            $(this).parent().parent().parent('.dropdown-multiselect').fadeOut();
        });

        $('a.position_menu_models-open').click(function(e){
            e.preventDefault();
            $(this).next().fadeIn();
        });

        $('a.dropdown-multiselect_selected').click(function(){
            
            var arrList = $(this).parent().prev().prev().children().children('input:checkbox:checked').map(function(){
                return $(this).val();
            }).get();

            if(arrList.length>0)
            {
                $(this).parent().parent().parent().parent().prev().html(arrList.join(', '));
                $(this).parent().prev().attr('value', arrList.join(', '));
            } else {
                $(this).parent().parent().parent().parent().prev().html('Выберите модель');
            }
            $(this).parent().parent().parent().hide();

            return false;
        
        });
    });

    $(function(){
        $(".rating li a").hover(function(e){
           e.preventDefault();
           $(this).parent().addClass("full2");
           $(this).parent().prevAll().addClass("full2");
           $(this).parent().nextAll().addClass("empty");
        }, function(){
           $(this).parent().removeClass("full2");
           $(this).parent().prevAll().removeClass("full2");
           $(this).parent().nextAll().removeClass("empty");
        });
        
        $(".rating li a").on("click", function(e){
           e.preventDefault();
           $(this).parent().addClass("full");
           $(this).parent().prevAll().addClass("full");
           $(this).parent().nextAll().removeClass("full");
        });
    });

});

$(document).ready( function() {

    scroll_top();

   $(function(){
        $(".pMenu_graybg-cat li a").click(function(){

            if(!$(this).parent().hasClass('active')) {
                $(this).parent().siblings().removeAttr('class');
                $(this).parent().addClass('active');
            } else {
                $(this).removeClass('active');
                $(this).parent().removeClass('active');
            }
            
            return false;
        });
   });

   $(function(){
        $('.ui_inform-TopMenu').click(function(){
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
                $('.notificationTopMenu').slideDown(200);
            } else {
                $(this).removeClass('active');
                $('.notificationTopMenu').slideUp(150);
            }
            return false;
        });
        $(document).click( function(event){
          if( $(event.target).closest(".notificationTopMenu").length ) 
            return;
          $('.notificationTopMenu').slideUp(150);
          event.stopPropagation();
        });
   });

    /* faq help */
    $(function(){
        $(".faq-linkBlock>h4").click(function(){
            var $this = $(this);

            if(!$this.parent().hasClass('show'))
            {
                $this.parent().addClass('show');
            }
            else {
                $this.parent().removeClass('show');
            }
        });
    });
    $('.faq-linkBlockHide').click(function(){
        if($(this).parent().hasClass('show'))
            $(this).parent().removeClass('show');
        return false;
    });
    /* faq help */

    /* Отметить все чекбоксы */
    $(".chkb_main").click(function () {
        if (!$("span.chkb_main").hasClass("checked")){
            $(".jq-checkbox.chkb").removeClass("checked").trigger('refresh');
            $("input.chkb").removeClass("checked");
        }else {
            $(".jq-checkbox.chkb").addClass("checked").trigger('refresh');
            $("input.chkb").addClass("checked");
        }
    });


    // input number
    $('.bl_countNumber').append('<div class="input_numberPlus"></div><div class="input_numberMinus"></div>');
    $('.input_numberMinus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.input_numberPlus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /* ToolTip  */
    $('a.question').click(function(){return false;});
    $(function(){

        if($('body').find("[data-tooltip]")) {
            $('body').append('<div id="tooltip"></div>');
        }

        $(function() {
            var $tooltip = $("#tooltip");

            $("[data-tooltip]")
                .mousemove(function ( eventObject ) {
                    
                    $tooltip.text( $(this).data("tooltip") )
                        .css({ 
                            "top" : eventObject.pageY - 18,
                            "left" : eventObject.pageX + 24
                        })
                        .show();
                })
                .mouseout(function () { 
                    $tooltip.hide()
                        .empty()
                        .css({
                            "top" : 0,
                            "left" : 0
                        });
                
                });

        });
    });
    /* ToolTip  */


    /* -- */
    $(function(){
        var rating_bl = $(".ratys");

        rating_bl.each(function(){
            $(this).attr('title', 'Оценка: ' + $(this).data('score'));

            switch($(this).data('score')){
            case 1:
            $(this).children("span").slice(0, 1).addClass('ratys-active');
            break;
            case 2:
            $(this).children("span").slice(0, 2).addClass('ratys-active');
            break;
            case 3:
            $(this).children("span").slice(0, 3).addClass('ratys-active');
            break;
            case 4:
            $(this).children("span").slice(0, 4).addClass('ratys-active');
            break;
            case 5:
            $(this).children("span").slice(0, 5).addClass('ratys-active');
            break;
        }
        });
    });
    /* -- */

    /* Enter of site */
    $('.enter_site').on('click', function(){
        $('#BoxModalLogin').arcticmodal();
        return false;
    });

    $('.virtualAgent_editLink').click(function(){
        if(!$(this).hasClass('active')) {
            $('#infoLot_va_settings').slideDown();
            $(this).addClass('active');
        } else {
            $('#infoLot_va_settings').slideUp();
            $(this).removeClass('active');
        }
        return false;
    });
    $('#hiddenSetting_infoLotLink2').click(function(){
        var bl_settingInfoLots = $('#infoLot_va_settings');
        var link_settingInfoLots = $('.virtualAgent_editLink');
        if(link_settingInfoLots.hasClass('active')) {
            bl_settingInfoLots.slideUp(150);
            link_settingInfoLots.removeClass('active');
        } else {
            bl_settingInfoLots.slideDown();
            link_settingInfoLots.addClass('active');
        }
    });

    $('.LotInfo_stavka1').on('click', function(){
        $('#BoxModal_LotRateMax').arcticmodal({
            overlay: { css: { opacity: 0.0 } }
        });
        return false;
    });

    $('.changeColorsTheme').on('click', 'a:not(.active)', function(){
        $(this).addClass('active').siblings().removeClass('active');
        return false;
    });

     $('.all_categories').on('click', function(){ return false; });
});

function add_labelItemEdit() {
    var _length_tr = $('.tblStyle1 tbody tr').length;
    var _length_tr_last = ++_length_tr;
    $('.tblStyle1 > tbody').append('<tr>' +
        '<td><input type="text" class="styled normal" name="new_InfoItemGoods-name_'+ _length_tr_last +'"></td>' +
        '<td><input type="text" class="styled normal" name="new_InfoItemGoods-value_'+ _length_tr_last +'"></td></tr>');
}

function filter_input(e,regexp)
{
    e=e || window.event;
    var target=e.target || e.srcElement;
    var isIE=document.all;

    if (target.tagName.toUpperCase()=='INPUT')
    {
        var code=isIE ? e.keyCode : e.which;
        if (code<32 || e.ctrlKey || e.altKey) return true;

        var char=String.fromCharCode(code);
        if (!regexp.test(char)) return false;
    }
    return true;
}

function scroll_top(){
    $('#page_container').append('<script src="js/jquery.scrollUp.js"></script>');
    $(function () {
        $.scrollUp({
            animation: 'fade',
            activeOverlay: '#00FFFF',
            scrollImg: { active: true, type: 'background', src: 'img/scroll-top.png' }
        });
    });
}