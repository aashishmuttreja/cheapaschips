var jsonfullurl=window.location.origin;function isProductPage(){return jQuery(".template-product").length>0}function initializeProductPage(){isProductPage()}function getCookie_ss(t){var e=t+"=";var a;var i=decodeURIComponent(document.cookie).split(";");for(var o=0;o<i.length;o++){var n=i[o];while(" "==n.charAt(0))n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}!function(t){t(document).ready((function(){initializeProductPage(),e.init()})),t(document).keyup((function(t){27==t.keyCode&&e.hidePopup()}));var e={init:function(){this.showPopup(),this.hidePopup(),this.hidePu(),this.initaddjs(),this.initCurenty(),this.btnAddtocart(),this.btnAddtopickup(),this.updatePricingQuickview(),this.initAddToCart(),this.initAddToPickup(),this.initQuickView(),this.initSwatch(),this.initDropDownCart(),this.initToolsCart(),this.initProductAddToCart(),this.initProductAddToPickup(),this.initlOwlCarousel(),this.initInstaGram(),this.productsTabs(),this.initWishlist()},parseDate:function(t){var e=t.match(/^(\d{4})(\d{1,2})(\d{1,2})$/);return e?new Date(e[1],e[2]-1,e[3]):null},initInstaGram:function(){t(".instagram .instagram-slide").each((function(){var e=t(this);var a=e.data("id"),i=e.data("userid"),o=e.data("accesstoken"),n=e.data("tag"),r=e.data("limit"),s=e.data("resolution"),c=e.data("navigation");if(""!=n)var l=new Instafeed({get:"user",userId:i,accessToken:o,target:a,resolution:s,template:'<a class="item-in col-4" target="_blank" href="{{link}}" title="{{caption}}"><img class="img-responsive lazyload" data-sizes="auto" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="{{caption}}" data-src="{{image}}" /><span class="ss_likes d-none">{{likes}}</span></a>',before:function(){currentCount=0},filter:function(t){var e=currentCount<r;return e&&(t.tags&&t.tags.indexOf(n)>=0?currentCount+=1:e=!1),e},after:function(){},success:function(){},error:function(){}});else var l=new Instafeed({get:"user",userId:i,accessToken:o,target:a,limit:r,resolution:s,template:'<a class="item-in col-4" target="_blank" href="{{link}}" title="{{caption}}"><img class="img-responsive lazyload" data-sizes="auto" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="{{caption}}" data-src="{{image}}" /><span class="ss_likes d-none">{{likes}}</span></a>',before:function(){},after:function(){},success:function(){},error:function(){}});l.run()}))},initlOwlCarousel:function(){t(".ss-owl .owl-carousel").each((function(){var e=t(this);var a=e.data("nav"),i=e.data("dots"),o=e.data("autoplay"),n=e.data("autospeed"),r=e.data("speed"),s=e.data("column1"),c=e.data("column2"),l=e.data("column3"),d=e.data("column4"),p=e.data("column5"),u=e.data("margin"),m=e.data("lazyLoad"),v=e.data("rtl"),h=e.data("loop");var f={nav:a,dots:i,margin:u,autoplay:o,autospeed:n,speed:r,loop:!0,addClassActive:!0,lazyLoad:m,rtl:v,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],navClass:["owl-prev","owl-next"],afterAction:g,responsive:{0:{items:1,margin:10},321:{items:p,margin:10},568:{items:d,margin:16},767:{items:l,margin:16},991:{items:c,nav:a},1199:{items:s,nav:a}}};function g(t){t.find(".owl-item").removeClass("first"),t.find(".owl-item.active").first().addClass("first"),t.find(".owl-item").removeClass("last"),t.find(".owl-item.active").last().addClass("last")}o&&(f.autospeed=n),e.owlCarousel(f)}))},initDropDownCart:function(){t(".mini-products-list li").length>0?(t(".minicart-header .block-content .no-items").hide(),t(".minicart-header .block-content .has-items").show()):(t(".minicart-header .block-content .has-items").hide(),t(".minicart-header .block-content .no-items").show()),t(document).on("click",".minicart-header .btn-remove",(function(a){a.preventDefault();var i=t(this).parents(".item").data("product_id");Shopify.removeItem(i,(function(t){e.doUpdateDropdownCart(t),e.doUpdateToolsCart(t)}))}))},initToolsCart:function(){t(".popup-mycart .cart-header table.list-cart tbody tr").length>0?(t(".popup-mycart .cart-header .no-items").hide(),t(".popup-mycart .cart-header .has-items").show()):(t(".popup-mycart .cart-header .has-items").hide(),t(".popup-mycart .cart-header .no-items").show()),t(document).on("click",".so-groups-sticky .popup-mycart .btn-remove",(function(a){a.preventDefault();var i=t(this).data("productid");Shopify.removeItem(i,(function(t){e.doUpdateToolsCart(t),e.doUpdateDropdownCart(t)}))}))},doUpdateDropdownCart:function(a){console.log(a);var i='<li class="item" data-product_id="{ID}">';if(i+='<div class="product-img-wrap">',i+='<a href="{URL}" title="{TITLE}" class="product-image">',i+='<img src="{IMAGE}" alt="{TITLE}">',i+="</a>",i+='<a href="javascript:void(0)"  title="Remove This Item" class="btn-remove">&nbsp;</a>',i+="</div>",i+='<div class="product-details">',i+='<div class="inner-left">',i+='<p class="product-name">',i+='<a href="{URL}">{TITLE}</a>',i+="</p>",i+='<div class="product-details-bottom">',i+='<span class="title-desc">Quantity:</span>',i+="<strong>{QUANTITY}</strong>",i+="</div>",i+="</div>",i+='<div class="product-price">',i+='<span class="price">{PRICE}</span>',i+="</div>",i+="</li>",console.log(Shopify.formatMoney(a.total_price,window.money_format)),t("#CartCount .cout_item").text(a.item_count),t(".minicart-header #CartTotal").html(Shopify.formatMoney(a.total_price,window.money_format)),t(".minicart-header .price-total .price").html(Shopify.formatMoney(a.total_price,window.money_format)),t(".minicart-header .mini-products-list").html(""),a.item_count>0){for(var o=0;o<a.items.length;o++){var n=i;n=(n=(n=(n=(n=(n=n.replace(/\{ID\}/g,a.items[o].id)).replace(/\{URL\}/g,a.items[o].url)).replace(/\{TITLE\}/g,a.items[o].title)).replace(/\{QUANTITY\}/g,a.items[o].quantity)).replace(/\{IMAGE\}/g,Shopify.resizeImage(a.items[o].image,"small"))).replace(/\{PRICE\}/g,Shopify.formatMoney(a.items[o].price,window.money_format)),t(".minicart-header .mini-products-list").append(n)}t(".minicart-header .btn-remove").click((function(a){a.preventDefault();var i=t(this).parents(".item").data("product_id");Shopify.removeItem(i,(function(t){e.doUpdateDropdownCart(t)}))})),e.ConvertCurrency()&&Currency.convertAll(window.shop_currency,jQuery("select[name=currencies] option:selected").val(),".minicart-header span.money","money_format")}t(".mini-products-list li").length>0?(t(".minicart-header .block-content .no-items").hide(),t(".minicart-header .block-content .has-items").show()):(t(".minicart-header .block-content .has-items").hide(),t(".minicart-header .block-content .no-items").show())},initSwatch:function(){jQuery(".swatch :radio").change((function(){var t=jQuery(this).closest(".swatch").attr("data-option-index");var e=jQuery(this).val();jQuery(this).closest("form").find(".single-option-selector").eq(t).val(e).trigger("change")})),Shopify.optionsMap={},Shopify.updateOptionsInSelector=function(e){switch(e){case 0:var a="root";var i=t(".single-option-selector:eq(0)");break;case 1:var a=t(".single-option-selector:eq(0)").val();var i=t(".single-option-selector:eq(1)");break;case 2:var a=t(".single-option-selector:eq(0)").val();a+=" / "+t(".single-option-selector:eq(1)").val();var i=t(".single-option-selector:eq(2)")}var o=i.val();i.empty();var n=Shopify.optionsMap[a];if(n&&n.length){for(var r=0;r<n.length;r++){var s=n[r];var c=t("<option></option>").val(s).html(s);i.append(c)}t('.swatch[data-option-index="'+e+'"] .swatch-element').each((function(){-1!==t.inArray(t(this).attr("data-value"),n)?t(this).removeClass("soldout").show().find(":radio").removeAttr("disabled","disabled").removeAttr("checked"):t(this).addClass("soldout").hide().find(":radio").removeAttr("checked").attr("disabled","disabled")})),-1!==t.inArray(o,n)&&i.val(o),i.trigger("change")}},Shopify.linkOptionSelectors=function(e){for(var a=0;a<e.variants.length;a++){var i=e.variants[a];if(i.available){if(Shopify.optionsMap["root"]=Shopify.optionsMap["root"]||[],Shopify.optionsMap["root"].push(i.option1),Shopify.optionsMap["root"]=Shopify.uniq(Shopify.optionsMap["root"]),e.options.length>1){var o=i.option1;Shopify.optionsMap[o]=Shopify.optionsMap[o]||[],Shopify.optionsMap[o].push(i.option2),Shopify.optionsMap[o]=Shopify.uniq(Shopify.optionsMap[o])}if(3===e.options.length){var o=i.option1+" / "+i.option2;Shopify.optionsMap[o]=Shopify.optionsMap[o]||[],Shopify.optionsMap[o].push(i.option3),Shopify.optionsMap[o]=Shopify.uniq(Shopify.optionsMap[o])}}}Shopify.updateOptionsInSelector(0),e.options.length>1&&Shopify.updateOptionsInSelector(1),3===e.options.length&&Shopify.updateOptionsInSelector(2),t(".single-option-selector:eq(0)").change((function(){return Shopify.updateOptionsInSelector(1),3===e.options.length&&Shopify.updateOptionsInSelector(2),!0})),t(".single-option-selector:eq(1)").change((function(){return 3===e.options.length&&Shopify.updateOptionsInSelector(2),!0}))}},initQuickView:function(){t(document).on("click","a.raghu_quickbtn",(function(){e.showLoading(".ss-loading");var a=t(this).data("id");var i=t(this).data("variants_id");var o=t(this).data("product_id");return Shopify.getProduct(a,(function(a){var i="";var n="";var r="";var s="";var c="";var l="";var d=t("#quickview-template").html();t(".quick-view").html(d);var p=t(".quick-view");var u="/admin/products/"+o+"/metafields.json";if(t.getJSON(jsonfullurl+u,(function(e){e.metafields&&(i+="<ul>",t.each(e.metafields,(function(t,e){"productDimension"==e.namespace&&"Length"==e.key&&"cacnodata"!=e.value&&(length=e.value+" x "),"productDimension"==e.namespace&&"Width"==e.key&&"cacnodata"!=e.value&&(s=e.value+" x "),"productDimension"==e.namespace&&"Height"==e.key&&"cacnodata"!=e.value&&(c=e.value),"filtercac"==e.namespace&&("Brand"==e.key&&""!=e.value&&(i+="<li>Brand : "+e.value+"</li>"),"Colour"==e.key&&""!=e.value&&(i+="<li>Colour : "+e.value+"</li>")),"productSOH"==e.namespace&&"ciStockCode"==e.key&&""!=e.value&&p.find(".product-code").length>0&&p.find(".product-code span").text(e.value)})),(l=length+s+c)&&(i+="<li>Dimension: "+l+"</li>"),i+="</ul>",p.find(".custom_details").html(i))})),p.find(".product-title a").html(a.title),p.find(".product-title a").attr("href",a.url),p.find(".view-more a").attr("href",a.url),p.find(".product-vendor span").length>0&&p.find(".product-vendor span").text(a.vendor),p.find(".product-type span").length>0&&p.find(".product-type span").text(a.type),p.find(".product-inventory span").length>0){var m=a.variants[0];var v=p.find(".product-inventory span");m.available?null!=m.inventory_management?v.html('<i class="fa fa-check-square-o"></i>'+window.trans_text.in_stock):v.text(window.trans_text.many_in_stock):v.text(window.trans_text.out_of_stock)}if(p.find(".product-description").length>0){var h;var h=(h=a.description.replace(/(<([^>]+)>)/gi,"")).replace(/\[countdown\](.*)\[\/countdown\]/g,"");p.find(".product-description").text(h)}else p.find(".product-description").remove();p.find(".price").html(Shopify.formatMoney(a.price,window.money_format)),p.find(".product-item").attr("id","product-"+a.id),p.find(".variants").attr("id","product-actions-"+a.id),p.find(".variants select").attr("id","product-select-"+a.id),a.compare_at_price>a.price?(p.find(".compare-price").html(Shopify.formatMoney(a.compare_at_price_max,window.money_format)).show(),p.find(".price").addClass("on-sale")):(p.find(".compare-price").html(""),p.find(".price").removeClass("on-sale")),p.find(".button").on("click",(function(){var a=p.find(".quantity").val(),i=1;"+"==t(this).text()?i=parseInt(a)+1:a>1&&(i=parseInt(a)-1),p.find(".quantity").val(i),p.find(".total-price").length>0&&e.updatePricingQuickview()})),a.available?(p.find(".total-price span").html(Shopify.formatMoney(a.price,window.money_format)),window.use_color_swatch?e.createQuickViewVariantsSwatch(a,p):e.createQuickViewVariants(a,p)):(p.find("select, input, .total-price, .dec, .inc, .variants label").remove(),p.find(".add-to-cart-btn").text(window.trans_text.unavailable).addClass("disabled").attr("disabled","disabled")),e.initQuickViewAddToCart(),t(".quick-view").fadeIn(500),e.hideLoading(".ss-loading"),e.loadQuickViewImage(a,p),t(".quick-view .total-price").length>0&&t(".quick-view input[name=quantity]").on("change",e.updatePricingQuickview),e.ConvertCurrency()&&Currency.convertAll(window.shop_currency,jQuery("select[name=currencies] option:selected").val(),".quick-view span.money","money_format")})),!1})),t(document).on("click",".quick-view .overlay, .close-quickview",(function(){return e.closeQuickViewPopup(),!1}))},showLoading:function(){t(".ss-loading").show()},hideLoading:function(){t(".ss-loading").hide()},showPopup:function(e){t(e).addClass("active")},closeQuickViewPopup:function(){t(".quick-view").fadeOut(500)},hidePopup:function(e){t(e).removeClass("active")},hidePu:function(){t(document).on("click",".popup_bg",".overlay, .close-popup",(function(){return e.hidePopup(".modal-pu"),setTimeout((function(){t(".loading").removeClass("loaded-content")}),500),!1})),t(document).on("click touchstart",(function(e){var a=t(".modal-pu");a.is(e.target)||0!==a.has(e.target).length||a.removeClass("active")})),t(".close-pu").click((function(){return t(".modal-pu").removeClass("active"),!1}))},initProductAddToCart:function(){t("#AddToCart-product-template").length>0&&t("#AddToCart-product-template").click((function(a){a.preventDefault();var i=window.fullfillmentstores[0][0];var o=window.fullfillmentstores[0][1];var n=i;var r=0;var s;var c=t(".max_soh").text().replace(/=>/gi,":");var l=jQuery.parseJSON(c);console.log(n),t.each(l,(function(t,e){console.log(t),t===n&&(r=e>0?e:99999999)})),console.log(r);var d=t("form.product-form select[name=id]").val();d||(d=t("form.product-form input[name=id]").val());var p=t("form.product-form input[name=quantity]").val();p||(p=1);var u=t("h1.product-single__title").html();var m=t(".product-featured-img").attr("src");var v=t("#current_product").val();var h=t("ol.mini-products-list").has("li").length;var f;return setCookie("selectedstore",i,365),setCookie("selectedstorename",o,365),"disabled"!=t(this).attr("disabled")&&t.getJSON(jsonfullurl+"/cart.js",(function(a){var i=0;t.each(a.items,(function(t,e){e.product_id==v&&(i+=Number(e.quantity))})),console.log("Cart Qty:"+i+" Max Purchase:"+r);var o=Number(i)+Number(p);parseInt(o)<=parseInt(r)?e.doAjaxAddToCart(d,p,u,m,i):t.confirm({title:"You are adding product more than buyable quantity",content:"You are Trying to add this product more than buyable quantity.Maximum buyable quantity: <strong>"+r+" </strong>.Please modify the number of product and try again.",type:"blue",buttons:{ok:{text:"Ok",btnClass:"btn-primary",keys:["enter"],action:function(){}},cancel:function(){}}})})),t(".store-selector-option").removeClass("active"),t(this).addClass("active"),t("li.changestore ul li").removeClass("active"),t("li.changestore a label").html(o+"<small><em>edit</em></small>"),t(".p_currentstore").html(o),t("#store_"+i).addClass("active"),setCookie("selectedstore",i,365),setCookie("selectedstorename",o,365),setCookie("storeaddress",window["store_"+i],365),t("span.pe_text").html(o),!1}))},initProductAddToPickup:function(){t("#AddToPickup-product-template").length>0&&t("#AddToPickup-product-template").click((function(a){a.preventDefault();var i=getCookie_ss("selectedstore");if(i){var o=0;var n;var r=t(".max_soh").text().replace(/=>/gi,":");var s=jQuery.parseJSON(r);t.each(s,(function(t,e){t===i&&(o=e>0?e:99999999)})),console.log("maxpurchase-"+o);var c=t("form.product-form select[name=id]").val();var l=t("#current_product").val();c||(c=t("form.product-form input[name=id]").val());var d=t("form.product-form input[name=quantity]").val();d||(d=1);var p=t("h1.product-single__title").html();var u=t(".product-featured-img").attr("src");"disabled"!=t(this).attr("disabled")&&t.getJSON(jsonfullurl+"/cart.js",(function(a){var i=0;t.each(a.items,(function(t,e){e.product_id==l&&(i+=Number(e.quantity))}));var n=Number(i)+Number(d);parseInt(n)<=parseInt(o)?e.doAjaxAddToCart(c,d,p,u,i,"pickup"):t.confirm({title:"You are adding product more than buyable quantity",content:"You are Trying to add this product more than buyable quantity.Maximum buyable quantity: <strong>"+o+" </strong>.Please modify the number of product and try again.",type:"blue",buttons:{ok:{text:"Ok",btnClass:"btn-primary",keys:["enter"],action:function(){}},cancel:function(){}}})}))}else t(".product-stock__store-view-more").click();return!1}))},initAddToCart:function(){t(document).on("click",".product-item .btn-addToCart",(function(a){if(a.preventDefault(),"disabled"!=t(this).attr("disabled")){var i=t(this).closest(".product-item");var o=t(this).closest(".product-item").data("id");o=o.replace("product-","");var n=t(this).parent("form").find("select[name=id]").val();n||(n=t(this).parent("form").find("input[name=id]").val());var r=t(this).parent("form").find("input[name=quantity]").val();r||(r=1);var s=t(i).find(".product-name").html();var c=t(i).find(".image-ajax img").attr("src");e.doAjaxAddToCart(n,r,s,c),e.closeQuickViewPopup()}return!1}))},initAddToPickup:function(){t(document).on("click",".product-item .btn-addToCart",(function(a){if(a.preventDefault(),"disabled"!=t(this).attr("disabled")){var i=t(this).closest(".product-item");var o=t(this).closest(".product-item").data("id");o=o.replace("product-","");var n=t(this).parent("form").find("select[name=id]").val();n||(n=t(this).parent("form").find("input[name=id]").val());var r=t(this).parent("form").find("input[name=quantity]").val();r||(r=1);var s=t(i).find(".product-name").html();var c=t(i).find(".image-ajax img").attr("src");e.doAjaxAddToCart(n,r,s,c),e.closeQuickViewPopup()}return!1}))},initQuickViewAddToCart:function(){t(".quick-view .add-to-cart-btn").click((function(a){if(a.preventDefault(),"disabled"!=t(this).attr("disabled")){var i=t(".quick-view select[name=id]").val();i||(i=t(".quick-view input[name=id]").val());var o=t(".quick-view .product-title a").html();var n=t(".quick-view .quickview-image img").attr("src");var r=t(".quick-view input[name=quantity]").val();r||(r=1),e.doAjaxAddToCart(i,r,o,n),e.closeQuickViewPopup()}return!1}))},btnAddtopickup:function(){t(window.btn_addToPickup).click((function(t){t.preventDefault()}))},btnAddtocart:function(){t(window.btn_addToCart).click((function(a){if(a.preventDefault(),"disabled"!=t(this).attr("disabled")){var i=t(window.product_detail_form+" select[name=id]").val();i||(i=t(window.product_detail_form+" input[name=id]").val());var o=t(window.product_detail_form+" input[name=quantity]").val();o||(o=1);var n=t(window.product_detail_name).html();var r=t(window.product_detail_mainImg).attr("src");e.doAjaxAddToCart(i,o,n,r)}return!1}))},doAjaxAddToCart:function(a,i,o,n,r,s="shipping"){var c=t("ol.mini-products-list").has("li").length;var l=getCookie_ss("selectedstorename");var d=getCookie_ss("selectedstore");var p=getCookie_ss("storeaddress");d||t(".product-stock__store-view-more").click();var u=t("#current_store_soh").val();var m=t("#fullfillment_store_soh").val();var v=t(".ClickCOllect").val();var h=t(".current_sku").text();var f=t(".OnlineOnlyProduct").val();var g=t(".StoreOnlyProduct").val();var w=t("#max_store_soh").val();var y=t("#soh_warning").val();if(console.log("Final Cart Qty:"+r),parseInt(r)>=parseInt(m)&&"shipping"==s)return e.updateMiniCart(),t(".product_error_span").html('<div class="alert alert-danger alert-dismissible fade show" role="alert">Maximum buyable quantity is '+m+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button></div>'),!1;if(parseInt(r)>=parseInt(u)&&"pickup"==s)return e.updateMiniCart(),t(".product_error_span").html('<div class="alert alert-danger alert-dismissible fade show" role="alert">Maximum buyable quantity is '+u+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button></div>'),!1;if(parseInt(i)>parseInt(m)&&"shipping"==s)return t(".product_error_span").html('<div class="alert alert-danger alert-dismissible fade show" role="alert">Maximum buyable quantity is '+m+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button></div>'),!1;if(parseInt(i)>parseInt(u)&&"pickup"==s)return t(".product_error_span").html('<div class="alert alert-danger alert-dismissible fade show" role="alert">Maximum buyable quantity is '+u+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">x</span></button></div>'),!1;t(".product_error_span").html("");var b={ClickCOllect:v,OnlineOnlyProduct:f,StoreOnlyProduct:g,current_soh:u,sohwarning:y,max_soh:w,CACSTORE:d,CACMETHOD:s,ProductCode:h};var C={quantity:i,id:a};!1!==b&&(C.properties=b),t.ajax({type:"post",url:"/cart/add.js",data:C,dataType:"json",beforeSend:function(){"icon"==window.theme_load?e.showLoading(".btn-addToCart"):e.showPopup(".loading")},success:function(a){switch(c<1&&(setCookie("checkoutmethod",s,1),"shipping"===s&&(t(".shipping-breadcrumb").html('<div class="shipping-inner-bread alert alert-info">You are shopping for “Delivery”</div>'),jQuery("#AddToPickup-product-template").attr("disabled","disabled")),"pickup"===s&&(t(".shipping-breadcrumb").html('<div class="shipping-inner-bread alert alert-info">You are shopping for “Click and Collect”</div>'),jQuery("#AddToCart-product-template").attr("disabled","disabled")),t.post("/cart/update.js",{attributes:{CheckoutMethod:String(s),PickupLocation:String(d),StoreAddress:String(p),StoreName:String(l)}})),e.hidePopup(".quickview-product"),"icon"==window.theme_load?e.hideLoading(".btn-addToCart"):t(".loading").addClass("loaded-content"),window.addcart_susscess){case"popup":t(".pu-cart").find(".product-name").html(o),t(".pu-cart").find(".product-image img").attr("src",n),t(".pu-cart").find(".product-type .product-type--value").html(a.product_type),t(".pu-cart").find(".cart-price-total .price-total").html(a.quantity),t(".pu-cart").find(".cart-price-total .price-new").html(Shopify.formatMoney(a.price,window.money_format)),e.showPopup(".pu-cart");break;default:e.showPopup(".pu-cart");break}return e.updateMiniCart(),!1},error:function(a,i){t(".ss-loading").hide(),t(".ajax-error-message").text(t.parseJSON(a.responseText).description),e.showPopup(".error-popup")}})},updateMiniCart:function(){Shopify.getCart((function(a){"popup"===window.addcart_susscess&&(t(".pu-cart").find(".previewCartCheckout-price").html(Shopify.formatMoney(a.total_price,window.money_format)),cartTotal=t(".pu-cart").find(".cart-popup-total").data("itemtotal"),TextCartTotal=cartTotal.replace(/\{itemsTotal\}/g,a.item_count),t(".pu-cart").find(".cart-popup-total").html(TextCartTotal)),e.doUpdateDropdownCart(a),e.doUpdateToolsCart(a)}))},doUpdateToolsCart:function(a){var i="";if(i+="<tr>",i+='<td class="text-left first"><a href="{URL}"><img class="img-thumbnail img-responsive" src="{IMAGE}" alt="{TITLE}" /></a></td>',i+='<td class="text-left"><a href="{URL}">{TITLE}</a></td>',i+='<td class="text-right">x&nbsp;{QUANTITY}</td>',i+='<td class="text-right total-price">{PRICE}</td>',i+='<td class="text-right last"><a href="javascript:;" data-productid="{ID}" return false;" class="btn-remove"><i class="fa fa-trash"></i></a></td>',i+="</tr>",t("#scartcount").text(a.item_count),t(".popup-mycart .cart-header .cart-bottom table tr td span.money").html(Shopify.formatMoney(a.total_price,window.money_format)),t(".popup-mycart .cart-header .cart-bottom table tr td span.money").attr("data-currency-usd",Shopify.formatMoney(a.total_price,window.money_format)),t(".popup-mycart .cart-header table.list-cart tbody").html(""),a.item_count>0){for(var o=0;o<a.items.length;o++){var n=i;n=(n=(n=(n=(n=(n=n.replace(/\{ID\}/g,a.items[o].id)).replace(/\{URL\}/g,a.items[o].url)).replace(/\{TITLE\}/g,a.items[o].title)).replace(/\{QUANTITY\}/g,a.items[o].quantity)).replace(/\{IMAGE\}/g,Shopify.resizeImage(a.items[o].image,"80x80"))).replace(/\{PRICE\}/g,Shopify.formatMoney(a.items[o].price,window.money_format)),t(".popup-mycart .cart-header table.list-cart tbody").append(n)}t(document).on("click",".so-groups-sticky .popup-mycart .btn-remove",(function(a){a.preventDefault();var i=t(this).data("productid");Shopify.removeItem(i,(function(t){e.doUpdateToolsCart(t)}))})),e.ConvertCurrency()&&Currency.convertAll(window.shop_currency,jQuery("select[name=currencies] option:selected").val(),".so-groups-sticky span.money","money_format")}t(".popup-mycart .cart-header table.list-cart tbody tr").length>0?(t(".popup-mycart .cart-header .no-items").hide(),t(".popup-mycart .cart-header .has-items").show()):(t(".popup-mycart .cart-header .has-items").hide(),t(".popup-mycart .cart-header .no-items").show())},loadQuickViewImage:function(e,a){var o=Shopify.resizeImage(e.featured_image,"grande");if(a.find(".quickview-image").append('<a href="'+e.url+'"><img src="'+o+'" title="'+e.title+'"/><div style="height: 100%; width: 100%; top:0; left:0 z-index: 2000; position: absolute; display: none; background: url('+window.theme_load+') 50% 50% no-repeat;"></div></a>'),e.images.length>1){var n=a.find(".more-view-wrapper ul");var r=0;for(i in e.images)if(r<e.images.length){var s;var c;var l="<li><a "+(0==r?'class="actived"':"")+' href="javascript:void(0)" data-image="'+Shopify.resizeImage(e.images[i],"grande")+'"><img src="'+Shopify.resizeImage(e.images[i],"compact")+'"  /></a></li>';n.append(l),r+=1}n.find("a").click((function(){var e=a.find(".quickview-image img");var i=a.find(".quickview-image div");e.attr("src")!=t(this).attr("data-image")&&(e.attr("src",t(this).attr("data-image")),i.show(),e.load((function(e){i.hide(),t(this).unbind("load"),i.hide()}))),n.find("a").removeClass("actived"),t(this).addClass("actived")})),n.owlCarousel({items:3,navText:["",""],nav:!0,margin:10,dots:!1})}else a.find(".quickview-more-views").remove(),a.find(".quickview-more-view-wrapper-jcarousel").remove()},updatePricingQuickview:function(){var a=/([0-9]+[.|,][0-9]+[.|,][0-9]+)/g;var i=t(".quick-view .price").text().match(a);if(i||(a=/([0-9]+[.|,][0-9]+)/g,i=t(".quick-view .price").text().match(a)),i){var o=i[0];var n;var r;var s=o.replace(/[.|,]/g,"")*parseInt(t(".quick-view input[name=quantity]").val());var c=Shopify.formatMoney(s,window.money_format);a=/([0-9]+[.|,][0-9]+[.|,][0-9]+)/g,c.match(a)||(a=/([0-9]+[.|,][0-9]+)/g),c=c.match(a)[0];var l=new RegExp(o,"g");var d=t(".quick-view .price").html().replace(l,c);t(".quick-view .total-price span").html(d),e.ConvertCurrency()&&Currency.convertAll(window.shop_currency,jQuery("select[name=currencies] option:selected").val(),".quick-view span.money","money_format")}},createQuickViewVariantsSwatch:function(e,a){if(e.variants.length>1){for(var i=0;i<e.variants.length;i++){var o;var n='<option value="'+(o=e.variants[i]).id+'">'+o.title+"</option>";a.find("form.variants > select").append(n)}new Shopify.OptionSelectors("product-select-"+e.id,{product:e,onVariantSelected:selectCallbackQuickview});var r="";for(var i=0;i<e.options.length;i++){r+='<div class="swatch clearfix" data-option-index="'+i+'">',r+='<div class="header">'+e.options[i].name+"</div>";var s=!1;/Color|Colour/i.test(e.options[i].name)&&(s=!0);var c=new Array;for(var l=0;l<e.variants.length;l++){var o;var d=(o=e.variants[l]).options[i];var p=this.convertToSlug(d);var u="swatch-"+i+"-"+p;c.indexOf(d)<0&&(r+='<div data-value="'+d+'" class="swatch-element '+(s?"color":"")+p+(o.available?" available ":" soldout ")+'">',r+='<input id="'+u+'" type="radio" name="option-'+i+'" value="'+d+'" '+(0==l?" checked ":"")+(o.available?"":" disabled")+" />",r+=s?'<label for="'+u+'" style="background-color: '+p+';"></label>':'<label for="'+u+'">'+d+"</label>",r+="</div>",o.available&&t('.quick-view .swatch[data-option-index="'+i+'"] .'+p).removeClass("soldout").addClass("available").find(":radio").removeAttr("disabled"),c.push(d))}r+="</div>"}a.find("form.variants > select").after(r),a.find(".swatch :radio").change((function(){var e=t(this).parents(".swatch").attr("data-option-index");var a=t(this).val();t(this).parents("form").find(".single-option-selector").eq(e).val(a).trigger("change")}))}else{a.find("form.variants > select").remove();var m='<input type="hidden" name="id" value="'+e.variants[0].id+'">';a.find("form.variants").append(m)}},createQuickViewVariants:function(t,e){if(t.variants.length>1)for(var a=0;a<t.variants.length;a++){var i=t.variants[a];var o='<option value="'+i.id+'">'+i.title+"</option>";e.find("form.variants > select").append(o)}var n="";if(t.options.length>0){for(var a=0;a<t.options.length;a++){n+='<div class="option-sl">',n+='<label for="">'+t.options[a].name+"</label>",n+='<select name="" class="">';for(var r=0;r<t.options[a].values.length;r++)n+='<option value="'+t.options[a].values[r]+'">'+t.options[a].values[r]+"</option>";n+="</select>",n+="</div>"}e.find("form.variants > .product-variants").append(n)}if(t.variants.length>1);else{e.find("form.variants .product-variants").remove();var s='<input type="hidden" name="id" value="'+t.variants[0].id+'">';e.find("form.variants").append(s)}},convertToSlug:function(t){return t.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")},switchImage:function(e,a,i){var o;t(i).attr("src",e)},initCurenty:function(){t(".currency-Picker .dropdown-content a").on("click",(function(e){t("select.currency-picker").val(t(this).data("value")).change(),t(this).closest(".dropdown-content").removeClass("active"),e.preventDefault()})),t(document).on("click",(function(e){t(".dropdown-content").hasClass("active")&&t(".dropdown-content").toggleClass("active")}))},initaddjs:function(){t(".open-search-bar").click((function(e){e.preventDefault(),t(".formSearch").toggleClass("nav-open"),t(".search-screen").addClass("nav-open")})),t(".search-screen ").click((function(e){e.preventDefault(),t(this).toggleClass("nav-open"),t(".formSearch").removeClass("nav-open")})),t(document).ready((function(){const e=window.innerWidth||document.documentElement.clientWidth;t(".filter-category a").on("click",(function(){var e=t(this).find("span").html();t(".product-count").text(e+" products")})),t(".dropdown-toggle").on("click",(function(e){t(".dropdown-content").stop().slideUp(300),t(this).next().stop().slideToggle(300),e.preventDefault()})),t(".dropdown-content li").on("click",(function(e){t(this).parent().slideUp(300)})),t(".fixed-scr").stick_in_parent({offset_top:10}),t(".ltabs-tabs-container").each((function(){t(this).find(".tabs-title li:first-child").addClass("current"),t(this).find(".tab-content").first().addClass("current"),t(this).find(".tabs-title li").click((function(e){var a=t(this).attr("data-tab");var i=t(this).attr("data-url");t(this).closest(".ltabs-tabs-container").find(".tab-viewall").attr("href",i),t(".tabs-title").toggleClass("tabs-open"),t(this).closest(".ltabs-tabs-container").find(".tabs-title li").removeClass("current"),t(this).closest(".ltabs-tabs-container").find(".tab-content").removeClass("current"),t(this).addClass("current"),t(this).closest(".ltabs-tabs-container").find("#"+a).addClass("current"),e.preventDefault()}))})),t(".tabs-menu_btn").click((function(e){e.preventDefault(),t(this).next().toggleClass("tabs-open")})),t(".toggle-menu .caret").click((function(e){return e.preventDefault(),t(this).parent().next().slideToggle("fast"),!1})),t("#goToTop").addClass("hidden-top"),t(window).scroll((function(){0===t(this).scrollTop()?t("#goToTop").addClass("hidden-top"):t("#goToTop").removeClass("hidden-top")})),t("#goToTop").click((function(){return t("body,html").animate({scrollTop:0},1200),!1})),t("#loadingSite").fadeOut("slow"),t(".product-card__gallery .item-img").on("mouseover touchstart",(function(e){t(this).addClass("thumb-active").siblings().removeClass("thumb-active");var a=t(this).attr("data-src");t(this).closest(".product-item-container").find(".img-responsive.s-img").attr("src",a)})),t(".collapsed-block .expander").click((function(e){var a=t(this).parent().next();var i=t(this).parent();t(a).hasClass("open")?i.removeClass("open"):i.addClass("open"),t(a).hasClass("open")?t(a).removeClass("open").slideUp("normal"):t(a).addClass("open").slideDown("normal"),e.preventDefault()})),t("#show-verticalmenu").click((function(e){e.preventDefault(),t(".vertical-wrapper").toggleClass("vertical-open"),t(".vertical-screen").addClass("vertical-open")})),t(".close-vertical").click((function(e){e.preventDefault(),t(".vertical-screen").removeClass("vertical-open"),t(".vertical-wrapper").removeClass("vertical-open")})),t(".vertical-screen").click((function(e){e.preventDefault(),t(this).toggleClass("vertical-open"),t(".vertical-wrapper").removeClass("vertical-open")})),t(".owl-banner.owl-carousel").owlCarousel({stagePadding:410,loop:!0,margin:10,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1,stagePadding:0},768:{items:1,stagePadding:200,nav:!1},1200:{items:1,stagePadding:370},1400:{items:1}}}),t(".mob-menu").click((function(e){e.preventDefault(),t(".mobile-menu").toggleClass("nav-open"),t(".mobile-screen").addClass("nav-open")})),t(".mobile-screen").click((function(e){e.preventDefault(),t(this).toggleClass("nav-open"),t(".mobile-menu").removeClass("nav-open")})),t(".menu-remove").click((function(e){e.preventDefault(),t(".mobile-screen").removeClass("nav-open"),t(".mobile-menu").removeClass("nav-open")}));t("ul.yt-accordion li").each((function(){t(this).index()>0?(t(".yt-accordion-inner").hide(),t(".enable+.yt-accordion-inner").show(),t(".enable+.yt-accordion-inner").addClass("active")):t(".enable").addClass("active");var e,a=navigator.userAgent.match(/iPad/i)?"touchstart":"click";t(this).children(".accordion-heading").bind(a,(function(){t(this).hasClass("active")?(t(this).removeClass("active"),t(this).siblings(".yt-accordion-inner").removeClass("active"),t(this).siblings(".yt-accordion-inner").slideUp(350)):(t(this).addClass("active"),t(this).siblings(".yt-accordion-inner").addClass("active"),t(this).siblings(".yt-accordion-inner").slideDown(350)),t(this).parent().siblings("li").children(".yt-accordion-inner").slideUp(350),t(this).parent().siblings("li").find(".active").removeClass("active")}))}))}))},initScrolling:function(){t(".loadmore a").click((function(t){t.preventDefault(),e.doScrolling()}))},doScrolling:function(){var a=t("#Collection1 .products-grid");if(a){var i=t(".loadmore a").first();t.ajax({type:"GET",url:i.attr("href"),beforeSend:function(){e.showLoading()},success:function(o){e.hideLoading();var n=t(o).find(".products-grid");n.length&&(n.hasClass("products-grid")&&window.product_image_resize&&n.children().find("img").fakecrop({fill:window.images_size.is_crop,widthSelector:".products-grid .product-item .product-image",ratioWrapper:window.images_size}),a.append(n.children()),t(o).find(".loadmore").length>0?i.attr("href",t(o).find(".loadmore a").attr("href")):(i.hide(),i.next().show()))},error:function(a,i){e.hidePopup(".loading"),t(".error-message").text(t.parseJSON(a.responseText).description),e.showPopup(".error-popup")},dataType:"html"})}},productsTabs:function(){t(".ltabs-tabs-container").each((function(){var e=t(this),i=e.find(".tabs-content"),o=t(this).parents(".widget-product-tabs").attr("id"),n=[];e.find(".tabs-menu_title li").on("click",(function(e){e.preventDefault();var o=t(this),r=o.data("atts"),s=o.index();a(r,s,i,o,n,(function(t){i.html(t)}))}));var r=e.find(".tabs-menu"),s=r.find("ul"),c=300;r.on("click",".open-title-menu",(function(){var e=t(this);s.hasClass("list-shown")?(e.removeClass("toggle-active"),s.removeClass("list-shown")):(e.addClass("toggle-active"),s.addClass("list-shown"),setTimeout((function(){t("body").one("click",(function(a){var i=a.target;if(!t(i).is(".tabs-menu")&&!t(i).parents().is(".tabs-menu"))return e.removeClass("toggle-active"),s.removeClass("list-shown"),!1}))}),10))})).on("click","li",(function(){var e=r.find(".open-title-menu"),a=t(this).text();s.hasClass("list-shown")&&s.removeClass("list-shown")}))}));var a=function(a,i,o,n,r,s){n.parent().find(".active-tab-title").removeClass("active-tab-title"),n.addClass("active-tab-title"),o.addClass("loading").parent().addClass("element-loading"),n.addClass("loading"),t.ajax({dataType:"html",type:"GET",url:a,success:function(t){s(t)},error:function(t){console.log("ajax error")},complete:function(){t(".product-card__gallery .item-img").on("mouseover touchstart",(function(e){t(this).addClass("thumb-active").siblings().removeClass("thumb-active");var a=t(this).attr("data-src");t(this).closest(".product-item-container").find(".img-responsive.s-img").attr("src",a)})),e.initCountd(),e.initlOwlCarousel(),t(".spr-badge").length>0&&t.getScript(window.location.protocol+"//productreviews.shopifycdn.com/assets/v4/spr.js"),o.removeClass("loading").parent().removeClass("element-loading"),n.removeClass("loading")}})}},initWishlist:function(){e.updateWishlistButtons(),e.initWishlistButtons()},initWishlistButtons:function(){if(0==t(".add-in-wishlist-js").length)return!1;t(".add-in-wishlist-js").each((function(){t(this).unbind(),t(this).click((function(e){e.preventDefault();try{var a="wishlistList";var i=t(this).attr("href");if(null==t.cookie(a))var o=i;else if(-1==t.cookie(a).indexOf(i))var o=t.cookie(a)+"__"+i;t.cookie(a,o,{expires:14,path:"/"}),jQuery(".loadding-wishbutton-"+i).show(),jQuery(".default-wishbutton-"+i).remove(),setTimeout((function(){jQuery(".loadding-wishbutton-"+i).remove(),jQuery(".added-wishbutton-"+i).show()}),2e3),t(this).unbind()}catch(t){}}))}))},updateWishlistButtons:function(){try{var e="wishlistList";if(null!=t.cookie(e)&&"__"!=t.cookie(e)&&""!=t.cookie(e)){var a=String(t.cookie(e)).split("__");for(var i=0;i<a.length;i++)""!=a[i]&&(jQuery(".added-wishbutton-"+a[i]).show(),jQuery(".default-wishbutton-"+a[i]).remove(),jQuery(".loadding-wishbutton-"+a[i]).remove())}}catch(t){}},ConvertCurrency:function(){return window.show_multiple_currencies&&Currency.currentCurrency!=shopCurrency}}}(jQuery);
//# sourceMappingURL=/s/files/1/0369/6738/3099/t/9/assets/ss_custom.js.map?v=721231428438048229