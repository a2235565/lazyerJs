var lazyer_index = {
    setIndex:function() {
        let _this = this;
        let $ = lazyerJs.$;
        $('.lazyer-index-header-right ul li a').click(function () {
            $('.lazyer-index-header-right ul li a').attr('class','')
            $(this).attr('class','aCur')
            if($(this).text() == '组件'){
                $('.lazyer-index-aside-item a').attr('class','')
                $('.lazyer-index-aside-item a').each(function () {
                    if($(this).text() == 'Layout 布局'){
                        $(this).attr('class','aCur')
                        $('iframe').attr('src','layout.html')
                    }
                })
            }else{
                $('.lazyer-index-aside-item a').attr('class','')
                $('.lazyer-index-aside-item a').each(function () {
                    if($(this).text() == 'Carousel 轮播'){
                        $(this).attr('class','aCur')
                        $('iframe').attr('src','carousel.html')
                    }
                })
            }
        })
        $('.lazyer-index-aside-item a').click(function () {
            $('.lazyer-index-aside-item a').attr('class','')
            $(this).attr('class','aCur')
        })
    }

}