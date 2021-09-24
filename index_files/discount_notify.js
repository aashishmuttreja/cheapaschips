(function() {

    var loadScript = function(url, callback) {     
        var script = document.createElement("script");
        script.type = "text/javascript";
    
        if (script.readyState) { 
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };      
        } else {
            script.onload = function() {
                callback();
            };
        }
    
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);        
    };

    var loadCss = function(url, callback) {
        var css  = document.createElement('link');
        css.type = "text/css";
        css.rel  = "stylesheet"

        if(css.readyState) {
            css.onreadystatechange = function() {
                if (css.readyState == "loaded" || css.readyState == "complete") {
                    css.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            css.onload = function() {
                callback();
            }
        }

        css.href = url;
        document.getElementsByTagName("head")[0].appendChild(css);  
    }

    var pageLocation = function() {
        const regex = /\/products\/(.*)/i;
        const str   = window.location.pathname;        
        let m       = regex.exec(str);

        if(m !== null) {
            return m[1];
        }

        return false;        
    }

    var fnInitLibs = function ($) {  
        
        var app_url = '//dn.fnlabs.net/';

        loadCss(app_url + "css/discount_notify.css?23", 
            function() {
                var custom_css = null
                switch(Shopify.theme.name) {
                    case 'Atlantic':
                        custom_css = 'atlantic';
                        break;
                    case 'Jumpstart':
                        custom_css = 'jumpstart';
                        break;
                    case 'Galleria':
                        custom_css = 'galleria';
                        break;
                    case 'Modular':
                        custom_css = 'modular';
                        break;
                    case 'Loft':
                        custom_css = 'loft';
                        break;
                    case 'Split':
                        custom_css = 'split';
                        break;
                    case 'Venue':
                        custom_css = 'venue';
                        break;
                    case 'Lorenza':
                        custom_css = 'lorenza';
                        break;
                    case 'Launch':
                        custom_css = 'launch';
                        break;
                    case 'Colors':
                        custom_css = 'colors';
                        break;
                    case 'Kagami':
                        custom_css = 'kagami';
                        break;
                    case 'Kingdom':
                        custom_css = 'kingdom';
                        break;
                    case 'Grid':
                        custom_css = 'grid';
                        break;
                    case 'Pacific':
                        custom_css = 'pacific';
                        break;
                    case 'California':
                        custom_css = 'california';
                        break;
                    case 'Icon':
                        custom_css = 'icon';
                        break;
                    case 'Alchemy':
                        custom_css = 'alchemy';
                        break;
                    case 'Blockshop':
                        custom_css = 'blockshop';
                        break;
                    case 'Mr Parker':
                        custom_css = 'mrparker';
                        break;
                    case 'Expression':
                        custom_css = 'expression';
                        break;
                }
                console.log('custom_css:' + custom_css);
                if(custom_css) {
                    console.log('load');
                    loadCss(app_url + "css/theme_" + custom_css + ".css", 
                        function() {
                            fnDiscountNotify($);
                        }
                    );
                } else {
                    console.log('custom css not found');
                    fnDiscountNotify($);
                }
            }        
        );
    }
    
    var fnDiscountNotify = function($) {  
        console.log('fnDiscountNotify ' + $.fn.jquery);
        var parseUrl = function(url) {        
            var regex = /[?&]([^=#]+)=([^&#]*)/g;
            var params = {};
            var match;
    
            while(match = regex.exec(url)) {
                params[match[1]] = match[2];
            }
    
            return params;
        }

        var selectedVariant = function(pd) {
        
            var url = parseUrl(window.location.href);
            if((typeof url.variant === 'undefined')) {
                return 0;
            }
    
            var sIndex = 0;
            pd.product.variants.forEach(function(el, index) {
                if(el.id == url.variant) {
                    sIndex = index;
                }
            });
    
            return sIndex;
        }

        var getHtml = function() {
            $.getJSON("/apps/fn_dn/product/html/" + encodeURI(Shopify.theme.name), function( dn ) {
                $.getJSON(window.location.href + '.json', function(pd) {                        
                    
                    if(dn.status)
                    {
                        if(dn.position == 'after') {
                            $(dn.selector).after(dn.html.replace('{product_title}', pd.product.title));
                        } else {
                            $(dn.selector).before(dn.html.replace('{product_title}', pd.product.title));
                        }  
                        
                        if(Shopify.theme.name == 'Ira') {
                            $('#fnlabs_close_btn').attr('href', '#');
                        }
    
                        $("#fn_dn_subs_btn").click(saveSubs);
                        $('.fnlabs_discount_link').click(showPanel);
                        $('.fnlabs_cont_alert_close').click(showPanel);
                    }                    
                });
            });
        }
    
        var showPanel = function() {
            if($('.fnlabs_cont').css("opacity") == 0) {
                $('.fnlabs_cont').css({"z-index":"99999", "opacity":"1"});
            } else {
                $('.fnlabs_cont').css({"z-index":"-1", "opacity":"0"});
            }   
        }
    
        var isExpireOnExist = function() {
            return $('#fnlabs_expires_on_value').length > 0?true:false;
        }    
    
        var saveSubs = function () {    
            console.log('Save subs');    
            $.getJSON(window.location.href + '.json', function(pd) {
                var userLang          = navigator.language || navigator.userLanguage;
                var type              = $('#fnlabs_discount_type').val();            
                var sV                = selectedVariant(pd);            
                var custom_price      = 0;
                var target_price      = pd.product.variants[sV].price;
                var custom_percentage = 0;
                var expires_on        = '';
    
                if(isExpireOnExist()) {
                    expires_on = $('#fnlabs_expires_on_value').val() + ':' + $('#fnlabs_expires_on_selector').val();
                }
    
                switch(type) {
                    case 'custom_price':
                        custom_price = parseFloat($('#fnlabs_custom_price').val());
                        if(!isNaN(custom_price)) {
                            target_price = custom_price;
                        }
                        break;
                    case 'custom_percentage':
                        custom_percentage = parseInt($('#fnlabs_custom_percentage').val());
                        target_price      = target_price - (target_price * (custom_percentage / 100));
                        break;
                }

                if(target_price > pd.product.variants[sV].price) {
                    target_price = pd.product.variants[sV].price;
                }
    
                var subs = {
                    email: $('#fnlabs_email').val(),
                    product_id: pd.product.id,
                    variant_id: pd.product.variants[sV].id,
                    product_name: pd.product.title,
                    locale: userLang,
                    type: type,
                    product_old_price: pd.product.variants[sV].price,
                    target_price: target_price,
                    custom_price: isNaN(custom_price)?0:custom_price,
                    custom_percentage: isNaN(custom_percentage)?0:custom_percentage,
                    expires_on: expires_on
                };
    
                $.post("/apps/fn_dn/subscribers/save", subs)
                .done(function(response) {
                    if(response.error) {
                        var alertBox = $('.fnlabs_cont_alert');
                        alertBox.html(response.desc);
                        alertBox.show();
                    } else {
                        $('.fnlabs_cont_body').html('Successfully subscribed.');
                    }
                }).fail(function(error) {
                    if(error.error) {
                        var alertBox = $('.fnlabs_cont_alert');
                        alertBox.html(error.desc);
                        alertBox.show();
                    }
                });
            });
        }

        getHtml();
    };
        
    var isInitializable = pageLocation();

    if(isInitializable) {
        if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
            loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', 
            // loadScript('//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', 
                function() {
                    console.log('We load our jquery');
                    jQuery191 = jQuery.noConflict(true);
                    fnInitLibs(jQuery191);
                }
            );
        } else {
            console.log('Thema has jquery');
            fnInitLibs(jQuery);
        }
    }    
    
})();