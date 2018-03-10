function jqOn(expr,events,selector,data,handler){return $(expr).on(events,selector,data,handler);}
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */;(function(factory){var registeredInModuleLoader=false;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true;}
if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true;}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return;}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value))
.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue;}
stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue;}
stringifiedAttributes+='='+attributes[attributeName];}
return(document.cookie=key+'='+value+stringifiedAttributes);}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.set=api;api.get=function(key){return api.call(api,key);};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));
function readCookie(name)
{return Cookies.get(name);}
function replaceElementIntercept(elementSelector,asyncUrl,showSelector)
{var elements=$(elementSelector);elements.hide();var interceptContainer=$(document.createElement('div'));interceptContainer.attr('class','interceptContainer interceptBackgroundBlocker');var interceptContainers=interceptContainer.insertAfter(elements);interceptContainers.load(asyncUrl);$('body').on('click',showSelector,function(e)
{e.preventDefault();elements.show();interceptContainers.removeClass('interceptBackgroundBlocker');$('.interceptMain').hide();$('.interceptPersistent').show();});}
function setCookie(name,value,expires,domain)
{var attributes={path:'/',secure:true};if(expires)
attributes.expires=expires;if(domain)
attributes.domain=domain;Cookies.set(name,value,attributes);}
function jqToggleClass(expr,className)
{return $(expr).toggleClass(className);}
function jqToggle(expr,duration,easing,complete)
{return $(expr).toggle(duration,easing,complete);}
function jqHide(expr,duration,easing,complete)
{return $(expr).hide(duration,easing,complete);}
function jqAddToFormJson(formExpr,json)
{var formJson=$(formExpr).serializeArray();if(json.constructor==Array)
for(var o in json)
if(json[o].name!==undefined&&json[o].value!==undefined)
formJson.push(json[o]);return formJson;}
function jqBind(expr,type,data,fn){return jqOn(expr,type,null,data,fn);}
function jqToggle(expr,showOrHide)
{$(expr).toggle(showOrHide);}
function jqVisible(element,partial,hidden,direction)
{return $(element).visible(partial,hidden,direction);}
(function($){var $w=$(window);$.fn.visible=function(partial,hidden,direction){if(this.length<1)
return;var $t=this.length>1?this.eq(0):this,t=$t.get(0),vpWidth=$w.width(),vpHeight=$w.height(),direction=(direction)?direction:'both',clientSize=hidden===true?t.offsetWidth*t.offsetHeight:true;if(typeof t.getBoundingClientRect==='function'){var rec=t.getBoundingClientRect(),tViz=rec.top>=0&&rec.top<vpHeight,bViz=rec.bottom>0&&rec.bottom<=vpHeight,lViz=rec.left>=0&&rec.left<vpWidth,rViz=rec.right>0&&rec.right<=vpWidth,vVisible=partial?tViz||bViz:tViz&&bViz,hVisible=partial?lViz||rViz:lViz&&rViz;if(direction==='both')
return clientSize&&vVisible&&hVisible;else if(direction==='vertical')
return clientSize&&vVisible;else if(direction==='horizontal')
return clientSize&&hVisible;}else{var viewTop=$w.scrollTop(),viewBottom=viewTop+vpHeight,viewLeft=$w.scrollLeft(),viewRight=viewLeft+vpWidth,offset=$t.offset(),_top=offset.top,_bottom=_top+$t.height(),_left=offset.left,_right=_left+$t.width(),compareTop=partial===true?_bottom:_top,compareBottom=partial===true?_top:_bottom,compareLeft=partial===true?_right:_left,compareRight=partial===true?_left:_right;if(direction==='both')
return!!clientSize&&((compareBottom<=viewBottom)&&(compareTop>=viewTop))&&((compareRight<=viewRight)&&(compareLeft>=viewLeft));else if(direction==='vertical')
return!!clientSize&&((compareBottom<=viewBottom)&&(compareTop>=viewTop));else if(direction==='horizontal')
return!!clientSize&&((compareRight<=viewRight)&&(compareLeft>=viewLeft));}};})(jQuery);
function jqVisibilityChanged(element,options)
{$(element).visibilityChanged(options);}
(function($){var defaults={partial:true,hidden:true,direction:'',callback:function(){},runOnLoad:true,runOnceAfterVisible:true,frequency:500,previousVisibility:null};var methods={};methods.checkVisibility=function(element,options){if(jQuery.contains(document,element[0])){var previousVisibility=options.previousVisibility;var isVisible=element.visible(options.partial,options.hidden,options.direction);options.previousVisibility=isVisible;if(previousVisibility==null){if(options.runOnLoad){options.callback(element,isVisible);if(isVisible&&options.runOnceAfterVisible)
return;}}else if(previousVisibility!==isVisible){options.callback(element,isVisible);if(isVisible&&options.runOnceAfterVisible)
return;}
setTimeout(function(){methods.checkVisibility(element,options);},options.frequency);}};$.fn.visibilityChanged=function(options){var settings=$.extend({},defaults,options);return this.each(function(){methods.checkVisibility($(this),settings);});};})(jQuery);
var NativeAdTracking=NativeAdTracking||{};NativeAdTracking.clickedElements={};function naTrack(element,asyncUrl,trackImpressions,trackClicks,clickElement)
{if(clickElement==null||clickElement===undefined)
{clickElement=element;}
if(trackImpressions)
{$(element).visibilityChanged({callback:function(element,visible)
{var elementVal=$(element);var dataSubmit={"refID":elementVal.attr('data-refId'),"typeId":elementVal.attr('data-ptype'),"rtid":elementVal.attr('data-rtid')};if(visible)
{$.ajax({traditional:true,type:"POST",url:asyncUrl,data:dataSubmit});$(element).addClass('postProcessed');}}});}
if(trackClicks)
{var elementVal=$(clickElement);$(clickElement).on("mousedown",function(e)
{var parentElem=$(e.target).parents('.promotion,.newsBannerView,.vendorpromotion,.topBanner');var dataInFunc={"refID":parentElem.attr('data-refId'),"typeId":parentElem.attr('data-ptype'),"rtid":parentElem.attr('data-rtid')};if(!NativeAdTracking.clickedElements[parentElem.attr('data-refId')])
{dataInFunc.clicked=true;$.ajax({traditional:true,type:"POST",url:asyncUrl,data:dataInFunc}).done(function(ms){dataInFunc.clicked=false;});NativeAdTracking.clickedElements[parentElem.attr('data-refId')]=true;}});}}
function jqAddClass(expr,className)
{return $(expr).addClass(className);}
function IfElementExistsAddClassFlex(trigger,conditional,className){if($(trigger).length){jqAddClass(conditional,className);};};
function hideBannerOnMobileInput()
{$(function(){if(navigator.userAgent.toLowerCase().indexOf("android")>-1)
{var bannerHeight=$('#topHeaderBannerWrap').height();$('body').on('focus','textarea, input',function(e)
{$('#topHeaderBannerWrap').hide();$('#topHeader').css('top','auto');});$('body').on('blur','textarea, input',function(e)
{$('#topHeaderBannerWrap').show();$('#topHeader').css('top',bannerHeight);});if($('textarea, input').is(':focus'))
{$('#topHeaderBannerWrap').hide();$('#topHeader').css('top','auto');}}});}
function jqAsyncPostForm(targetExpr,url,formExpr,callback,appendLoadingWidget)
{addLoadingWidget(targetExpr,appendLoadingWidget);$(targetExpr).load(url,$(formExpr).serializeArray(),callback);}
function jqClearTextField(expr,defaultValue)
{if(!defaultValue||$(expr).val()==defaultValue)
{$(expr).val('');}}
function jqGetValue(expr){return $(expr).val();}
function jqOne(expr,events,selector,data,handler){return $(expr).one(events,selector,data,handler);}
function jqRemove(expr)
{$(expr).remove();}
function jqRemoveClass(expr,className)
{if(className!=null)
return $(expr).removeClass(className);else
return $(expr).removeClass();}
function jqSetValue(expr,str){$(expr).val(str);}
function jqChange(expr)
{$(expr).change();}
function searchAutocomplete(asyncUrl,formIdEl,textInputEl,searchParameter,appendToEl,selectedParameter,editedParameter,submitParameter,noSuggestionsParameterNoTime,noSuggestionsParameterNoResults,autoSuggestIgnoredParameter)
{var suggestionSelected=false;var suggestionsQueried=false;var selectionEdited=false;var noSuggestions=false;var suggestionsPresent=false;var suggestionFocused=false;var fastSuggestion=true;var autocomp_opt={source:function(request,response)
{$.ajax({url:asyncUrl+'&'+searchParameter+'='+$(textInputEl).val()+'&param',dataType:"json",type:"post",data:{maxRows:15,term:request.term},success:function(data){suggestionsQueried=true;if(data.length==0)
noSuggestions=true
else
suggestionsPresent=true;response($.map(data,function(item){return{label:item.name,value:item.id,url:item.url,contentCount:item.contentCount,participants:item.participants}}));fastSuggestion=false;setTimeout(function(){fastSuggestion=true;},750);}})},focus:function(event,ui)
{if(ui.item)
{$(".ui-helper-hidden-accessible").hide();suggestionFocused=true;event.preventDefault();}},select:function(event,ui){suggestionSelected=true;if(ui.item.url)
{window.location.href=(ui.item.url);}
else
{$(textInputEl).val(ui.item.label);$(formIdEl).submit();}},delay:1000,messages:{results:function(){}},minLength:1,appendTo:appendToEl,create:function()
{$(this).data('ui-autocomplete')._renderItem=function(ul,item)
{var newText=item.value;var words=this.term.split(" ");words.sort(function(a,b){return b.length-a.length;});for(var i=0;i<words.length;i++)
{if(words[i])
{var word=words[i].replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&");word=word.replace(/\//g,"")
newText=newText.replace(new RegExp(word,"gi"),"<b>$&</b>");}}
if(item.url)
return $('<li class="topic"></li>')
.data("item.autocomplete",item)
.append("<a>"+newText+"</a>")
.append('<div class="contentCount">'+item.contentCount+'</div>')
.append('<div class="participantCount">'+item.participants+'</div>')
.appendTo(ul);else
return $("<li></li>")
.data("item.autocomplete",item)
.append("<a>"+newText+"</a>")
.appendTo(ul);};}};$(textInputEl).autocomplete(autocomp_opt);$(textInputEl).keyup(function(e)
{if(e.which!==0&&(e.charCode!==0||e.keyCode==8||e.keyCode==46))
{selectionEdited=suggestionFocused;}
if($(textInputEl).val().length==0)
{selectionEdited=false;noSuggestions=false;suggestionsPresent=false;suggestionFocused=false;suggestionsQueried=false;suggestionSelected=false;}
else if(fastSuggestion)
{$(textInputEl).autocomplete("search");fastSuggestion=false;}});$(formIdEl).submit(function(event)
{if($(textInputEl).val().length==0)
return;$('<input>').attr({type:'hidden',name:submitParameter,value:true}).appendTo(formIdEl);if(!selectionEdited&&suggestionSelected)
{$('<input>').attr({type:'hidden',name:selectedParameter,value:true}).appendTo(formIdEl);}
if(suggestionFocused&&selectionEdited)
{$('<input>').attr({type:'hidden',name:editedParameter,value:true}).appendTo(formIdEl);}
if(suggestionsPresent&&!suggestionFocused)
{$('<input>').attr({type:'hidden',name:autoSuggestIgnoredParameter,value:true}).appendTo(formIdEl);}
if(noSuggestions)
{$('<input>').attr({type:'hidden',name:noSuggestionsParameterNoResults,value:true}).appendTo(formIdEl);}
if(!suggestionsQueried)
{$('<input>').attr({type:'hidden',name:noSuggestionsParameterNoTime,value:true}).appendTo(formIdEl);}});}
function UA_EE_addImpression(currencyCode,products,trackingIdentifier,cmsSiteName,registrationAction,planTerm,price)
{var impressions=[];for(var index=0;index<products.length;index++)
{var product=products[index];var impression={};impression.id=product;impression.name=product;if(trackingIdentifier)
impression.list=trackingIdentifier
if(cmsSiteName)
impression.brand=cmsSiteName;if(registrationAction)
impression.category=registrationAction;if(planTerm)
impression.variant=planTerm;if(price)
impression.price=price;impressions.push(impression);}
UA_EE.addImpression(currencyCode,impressions);}
function jqAsyncLoad(expr,url,data,callback)
{addLoadingWidget(expr);if(callback)
return $(expr).load(url,data,callback);else if(data)
return $(expr).load(url,data);else
return $(expr).load(url);}
function jqGetHtml(expr)
{return $(expr).html();}
function jqHasClass(expr,className)
{return $(expr).hasClass(className);}
function jqShow(expr,duration,easing,complete)
{return $(expr).show(duration,easing,complete);}
function jqSetHtml(expr,html)
{return $(expr).html(html);}
var l_sioAddAttrQueue=[];function sioAddAttr(attr,name,skipQueue)
{if(skipQueue&&'undefined' !==typeof socket&&socket!=null&&socket.connected)
{socket.emit('addAttr',{attr:attr,name:name});}
else
{l_sioAddAttrQueue.push({attr:attr,name:name});}}
$(function()
{if(l_sioAddAttrQueue.length>0)
{if('undefined' !==typeof socket&&socket!=null)
{if(socket.registered)
_sendAttrs();else
socket.on('register',_sendAttrs);}}});function _sendAttrs()
{socket.emit('setAttrs',{attrs:l_sioAddAttrQueue});}
function sioAddEventListener(eventName,callback){if('undefined' !==typeof socket&&socket!=null){socket.on(eventName,callback);}}
function removeHeaderAttention()
{var notifVisible=$('#notificationCount .notification-count').is(':visible');var messageVisible=$('#messageCount .message-count').is(':visible');if(!notifVisible&&!messageVisible)
{$('#liHamWrap').removeClass('attention');}}
function jqAppendTo(expr,appendExpr)
{return $(expr).appendTo($(appendExpr));}
function openNotifications(clickSelector)
{if($("body").hasClass("phone"))
$("#topHeader .mobileMenu").trigger("click");$(clickSelector).trigger("click");}
function sioOn(event,callback){if('undefined' !==typeof socket&&socket!=null){socket.on(event,callback);}}
/**
 * Push
 * =======
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @preserve
 */

(function (global, factory) {

    'use strict';

    /* Use AMD */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return new (factory(global, global.document))();
        });
    }
    /* Use CommonJS */
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = new (factory(global, global.document))();
    }
    /* Use Browser */
    else {
        global.Push = new (factory(global, global.document))();
    }

})(typeof window !== 'undefined' ? window : this, function (w, d) {

    var Push = function () {

        /**********************
            Local Variables
        /**********************/

        var
        self = this,
        isUndefined   = function (obj) { return obj === undefined; },
        isString   = function (obj) { return String(obj) === obj },
        isFunction = function (obj) { return obj && {}.toString.call(obj) === '[object Function]'; },

        /* ID to use for new notifications */
        currentId = 0,

        /* Message to show if there is no suport to Push Notifications */
        incompatibilityErrorMessage = 'PushError: push.js is incompatible with browser.',

        /* Whether Push has permission to notify */
        hasPermission = false,

        /* Map of open notifications */
        notifications = {},

        /* Testing variable for the last service worker path used */
        lastWorkerPath = null,

        /**********************
            Helper Functions
        /**********************/

        /**
         * Closes a notification
         * @param {Notification} notification
         * @return {Boolean} boolean denoting whether the operation was successful
         */
        closeNotification = function (id) {
            var errored = false,
                notification = notifications[id];

            if (typeof notification !== 'undefined') {
                /* Safari 6+, Chrome 23+ */
                if (notification.close) {
                    notification.close();
                /* Legacy webkit browsers */
                } else if (notification.cancel) {
                    notification.cancel();
                /* IE9+ */
                } else if (w.external && w.external.msIsSiteMode) {
                    w.external.msSiteModeClearIconOverlay();
                } else {
                    errored = true;
                    throw new Error('Unable to close notification: unknown interface');
                }

                if (!errored) {
                    return removeNotification(id);
                }
            }

            return false;
        },

        /**
         * Adds a notification to the global dictionary of notifications
         * @param {Notification} notification
         * @return {Integer} Dictionary key of the notification
         */
        addNotification = function (notification) {
            var id = currentId;
            notifications[id] = notification;
            currentId++;
            return id;
        },

        /**
         * Removes a notification with the given ID
         * @param  {Integer} id - Dictionary key/ID of the notification to remove
         * @return {Boolean} boolean denoting success
         */
        removeNotification = function (id) {
            var dict = {},
                success = false,
                key;
            for (key in notifications) {
                if (notifications.hasOwnProperty(key)) {
                    if (key != id) {
                        dict[key] = notifications[key];
                    } else {
                        // We're successful if we omit the given ID from the new array
                        success = true;
                    }
                }
            }
            // Overwrite the current notifications dictionary with the filtered one
            notifications = dict;
            return success;
        },

        /**
         * Callback function for the 'create' method
         * @return {void}
         */
        createCallback = function (title, options) {
            var notification,
                wrapper,
                id,
                onClose;

            /* Set empty settings if none are specified */
            options = options || {};

            /* Set the last service worker path for testing */
            self.lastWorkerPath = options.serviceWorker || 'sw.js';

            /* Safari 6+, Firefox 22+, Chrome 22+, Opera 25+ */
            if (w.Notification) {

                try {
                    notification =  new w.Notification(
                        title,
                        {
                            icon: (isString(options.icon) || isUndefined(options.icon)) ? options.icon : options.icon.x32,
                            body: options.body,
                            tag: options.tag,
                            requireInteraction: options.requireInteraction
                        }
                    );
                } catch (e) {
                    if (w.navigator) {
                        w.navigator.serviceWorker.register(options.serviceWorker || 'sw.js');
                        w.navigator.serviceWorker.ready.then(function(registration) {
                            registration.showNotification(
                                title,
                                {
                                    body: options.body,
                                    vibrate: options.vibrate,
                                    tag: options.tag,
                                    requireInteraction: options.requireInteraction
                                }
                            );
                        });
                    }
                }

            /* Legacy webkit browsers */
            } else if (w.webkitNotifications) {

                notification = w.webkitNotifications.createNotification(
                    options.icon,
                    title,
                    options.body
                );

                notification.show();

            /* Firefox Mobile */
            } else if (navigator.mozNotification) {

                notification = navigator.mozNotification.createNotification(
                    title,
                    options.body,
                    options.icon
                );

                notification.show();

            /* IE9+ */
            } else if (w.external && w.external.msIsSiteMode()) {

                //Clear any previous notifications
                w.external.msSiteModeClearIconOverlay();
                w.external.msSiteModeSetIconOverlay(
                    ((isString(options.icon) || isUndefined(options.icon))
                    ? options.icon
                    : options.icon.x16), title
                );
                w.external.msSiteModeActivate();

                notification = {};
            } else {
                throw new Error('Unable to create notification: unknown interface');
            }

            /* Add it to the global array */
            id = addNotification(notification);

            /* Wrapper used to get/close notification later on */
            wrapper = {
                get: function () {
                    return notification;
                },

                close: function () {
                    closeNotification(id);
                }
            };

            /* Autoclose timeout */
            if (options.timeout) {
                setTimeout(function () {
                    wrapper.close();
                }, options.timeout);
            }

            /* Notification callbacks */
            if (isFunction(options.onShow))
                notification.addEventListener('show', options.onShow);

            if (isFunction(options.onError))
                notification.addEventListener('error', options.onError);

            if (isFunction(options.onClick))
                notification.addEventListener('click', options.onClick);

            onClose = function () {
                /* A bit redundant, but covers the cases when close() isn't explicitly called */
                removeNotification(id);
                if (isFunction(options.onClose)) {
                    options.onClose.call(this);
                }
            }

            notification.addEventListener('close', onClose);
            notification.addEventListener('cancel', onClose);

            /* Return the wrapper so the user can call close() */
            return wrapper;
        },

        /**
         * Permission types
         * @enum {String}
         */
        Permission = {
            DEFAULT: 'default',
            GRANTED: 'granted',
            DENIED: 'denied'
        },

        Permissions = [Permission.GRANTED, Permission.DEFAULT, Permission.DENIED];

        /* Allow enums to be accessible from Push object */
        self.Permission = Permission;

        /*****************
            Permissions
        /*****************/

        /**
         * Requests permission for desktop notifications
         * @param {Function} callback - Function to execute once permission is granted
         * @return {void}
         */
        self.Permission.request = function (onGranted, onDenied) {

            /* Return if Push not supported */
            if (!self.isSupported) {
                throw new Error(incompatibilityErrorMessage);
            }

            /* Default callback */
            callback = function (result) {

                switch (result) {

                    case self.Permission.GRANTED:
                        hasPermission = true;
                        if (onGranted) onGranted();
                        break;

                    case self.Permission.DENIED:
                        hasPermission = false;
                        if (onDenied) onDenied();
                        break;

                }

            };

            /* Safari 6+, Chrome 23+ */
            if (w.Notification && w.Notification.requestPermission) {
                Notification.requestPermission(callback);
            }
            /* Legacy webkit browsers */
            else if (w.webkitNotifications && w.webkitNotifications.checkPermission) {
                w.webkitNotifications.requestPermission(callback);
            } else {
                throw new Error(incompatibilityErrorMessage);
            }
        };

        /**
         * Returns whether Push has been granted permission to run
         * @return {Boolean}
         */
        self.Permission.has = function () {
            return hasPermission;
        };

        /**
         * Gets the permission level
         * @return {Permission} The permission level
         */
        self.Permission.get = function () {

            var permission;

            /* Return if Push not supported */
            if (!self.isSupported) { throw new Error(incompatibilityErrorMessage); }

            /* Safari 6+, Chrome 23+ */
            if (w.Notification && w.Notification.permissionLevel) {
                permission = w.Notification.permissionLevel;

            /* Legacy webkit browsers */
            } else if (w.webkitNotifications && w.webkitNotifications.checkPermission) {
                permission = Permissions[w.webkitNotifications.checkPermission()];

            /* Firefox 23+ */
            } else if (w.Notification && w.Notification.permission) {
                permission = w.Notification.permission;

            /* Firefox Mobile */
            } else if (navigator.mozNotification) {
                permission = Permissions.GRANTED;

            /* IE9+ */
            } else if (w.external && w.external.msIsSiteMode() !== undefined) {
                permission = w.external.msIsSiteMode() ? Permission.GRANTED : Permission.DEFAULT;
            } else {
                throw new Error(incompatibilityErrorMessage);
            }

            return permission;

        };

        /*********************
            Other Functions
        /*********************/

        /**
         * Detects whether the user's browser supports notifications
         * @return {Boolean}
         */
        self.isSupported = (function () {

             var isSupported = false;
             
             var userAgent = window.navigator.userAgent;
             if (userAgent.indexOf("Edge") !== -1 || userAgent.indexOf("MSIE") !== -1)
                return false;
             
             try {

                 isSupported =

                     /* Safari, Chrome */
                     !!(w.Notification ||

                     /* Chrome & ff-html5notifications plugin */
                     w.webkitNotifications ||

                     /* Firefox Mobile */
                     navigator.mozNotification ||

                     /* IE9+ */
                     (w.external && w.external.msIsSiteMode() !== undefined));

             } catch (e) {}

             return isSupported;

         })();

         /**
          * Creates and displays a new notification
          * @param {Array} options
          * @return {void}
          */
        self.create = function (title, options) {

            /* Fail if the browser is not supported */
            if (!self.isSupported) {
                throw new Error(incompatibilityErrorMessage);
            }

            /* Fail if no or an invalid title is provided */
            if (!isString(title)) {
                throw new Error('PushError: Title of notification must be a string');
            }

            /* Request permission if it isn't granted */
            if (!self.Permission.has()) {
                return new Promise(function(resolve, reject) {
                    self.Permission.request(function() {
                        try {
                            resolve(createCallback(title, options));
                        } catch (e) {
                            reject(e);
                        }
                    }, function() {
                        reject("Permission request declined");
                    });
                });
            } else {
                return new Promise(function(resolve, reject) {
                    try {
                        resolve(createCallback(title, options));
                    } catch (e) {
                        reject(e);
                    }
                });
            }

        };

        /**
         * Returns the notification count
         * @return {Integer} The notification count
         */
        self.count = function () {
            var count = 0,
                key;
            for (key in notifications) {
                count++;
            }
            return count;
        },

        /**
         * Internal function that returns the path of the last service worker used
         * For testing purposes only
         * @return {String} The service worker path
         */
        self.__lastWorkerPath = function () {
            return self.lastWorkerPath;
        },

        /**
         * Closes a notification with the given tag
         * @param {String} tag - Tag of the notification to close
         * @return {Boolean} boolean denoting success
         */
        self.close = function (tag) {
            var key;
            for (key in notifications) {
                notification = notifications[key];
                /* Run only if the tags match */
                if (notification.tag === tag) {
                    /* Call the notification's close() method */
                    return closeNotification(key);
                }
            }
        };

        /**
         * Clears all notifications
         * @return {void}
         */
        self.clear = function () {
            var i,
                success = true;
            for (key in notifications) {
                var didClose = closeNotification(key);
                success = success && didClose;
            }
            return success;
        };
    };

    return Push;

});
function pushHandle(data)
{if(Push.isSupported!==true||Push.Permission.get()!=="granted")
return true;var location="/live?tschatClientsTab=conversations&mid="+data.memberId;var clickHandler=function(event){window.focus();var urlPath=window.location.pathname.split("/");window.location=location;this.close();return true;}
if(data.chatStatus==="REQUESTED")
{Push.create(data.member+" is requesting your help on Live!",{body:"Click here to view the request.",icon:{x16:'/images/experts-exchange/live/live-16.png',x32:'/images/experts-exchange/live/live-32.png',},tag:"request"+data.member,onClick:clickHandler});}
else if(data.chatStatus==="CANCELLED")
{Push.create(data.member+" cancelled their request.",{body:"Click here to view the cancelled request.",icon:{x16:'/images/experts-exchange/live/live-16.png',x32:'/images/experts-exchange/live/live-32.png',},tag:"cancel"+data.member,onClick:clickHandler});}
else if(data.chatStatus==="EXPIRETOAWAY")
{location="/live?chatStatus=10";Push.create("You have missed a Live request.",{body:"Your status has been set to Away. Click this notification to become Available.",icon:{x16:'/images/experts-exchange/live/live-16.png',x32:'/images/experts-exchange/live/live-32.png',},tag:"expire"+data.member,onClick:clickHandler});}}
function jqSetAttribute(expr,name,value)
{if((typeof name)=="string")
{return $(expr).attr(name,value);}}
function showHeaderNotifications(section,selector,show,urldata,count,suffix)
{var pageCheck=new RegExp("^/"+section);if(!window.location.pathname.match(pageCheck))
{var headerNotif=$(selector);if(show)
{$(headerNotif).removeClass('hidden');$(headerNotif).toggle(true);$(headerNotif).parent().attr('href',urldata[section].active);if(count!==undefined)
{if(suffix===undefined)
suffix="update";$(selector+" .count").html(count);$(selector+" .update").html(count==1?suffix:suffix+"s");}}
else
{$(headerNotif).addClass('hidden');$(headerNotif).toggle(false);$(headerNotif).parent().attr('href',urldata[section].inactive);}}
var titleCountMatcher=/^\(\d+\) /;if(show&&count!==undefined)
document.title="("+count+") "+document.title.replace(titleCountMatcher,"");else
document.title=document.title.replace(titleCountMatcher,"");}
function sioDisconnect(socketAttrs)
{if('undefined' !==typeof socket&&socket!=null)
{if(socketAttrs)
{for(var socketIndex in socketAttrs)
{var socketAttr=socketAttrs[socketIndex];socket.emit('clearAttr',{attr:socketAttr});if(socketAttr==4&&'undefined' !==typeof MemberChat&&'undefined' !==typeof MemberChat.showDisconnectMessage)
{MemberChat.showDisconnectMessage();}}}
else
{socket.removeAllListeners();socket.disconnect();}}}
function disconnectLoginPrompt(socketAttrs)
{sioOn('logoutDisconnect',function(e)
{sioDisconnect(socketAttrs);});};
function toastNotificationHandler()
{sioAddAttr(8,'toast');sioAddEventListener("toast",function(data)
{if(data.message)
toast(data.message);});}
function consultantNotifInit(callerConfig){var config={liveFooterHeading:'#liveSuggestionsHeader .headingComponent',destination:'.consultantsHeading-text',source:'.productNav-full .liveNotifTarget'}
if(typeof callerConfig=='object')
{for(var property in callerConfig)
config[property]=callerConfig[property];}
$(document).ready(function(){var $liveFooterHeading=$(config.liveFooterHeading);if($liveFooterHeading.length){$liveFooterHeading.find(config.destination).after($(config.source).attr('target','_blank'));}});}
function jqAccordion(expr,options){if((typeof options)!="object")
options={};var defaults={header:".accordion-header",collapsible:true,active:false,animate:false,heightStyle:"content",activate:function(event,ui){$(ui.newHeader).addClass("selected");},beforeActivate:function(event,ui){$(ui.oldHeader).removeClass("selected");}}
options=$.extend(defaults,options);return $(expr).accordion(options);}
function jqSubmit(formExpr)
{$(formExpr).submit();}
function jqIsVisible(expr){return $(expr).is(':visible');}
function jqGetParent(expr)
{return $(expr).parent();}
function jqGetChildren(expr,filterExpr)
{if(filterExpr)
return $(expr).children(filterExpr);else
return $(expr).children();}
function jqNot(expr,selector)
{return $(expr).not(selector);}
function jqGetProperty(expr,name)
{if((typeof name)=="string")
{return $(expr).prop(name);}}
function jqSerialize(expr)
{return $(expr).serialize();}
function jqClick(expr)
{$(expr).trigger("click");}
function jqFilter(expr,selector)
{return $(expr).filter(selector);}
function jqData(expr,name,value)
{if(value==undefined||value==null)
{return $(expr).data(name);}
else
{return $(expr).data(name,value);}}
function jqDialog(expr,params,optionName,optionValue)
{if(params=='option'&&optionValue)
{return $(expr).dialog(params,optionName,optionValue);}
else if(params=='option'&&optionName)
{return $(expr).dialog(params,optionName);}
else if(params)
{return $(expr).dialog(params);}
else
{return $(expr).dialog();}}
function jqLive(expr,type,fn){return jqOn(window.document,type,expr,null,fn);}
function showRecaptcha(element,publicKey,themeString)
{Recaptcha.create(publicKey,element,{theme:themeString});}
function jqOff(expr,events,selector,handler){return $(expr).off(events,selector,handler);}
function jqSetProperty(expr,name,value)
{if((typeof name)=="string")
{return $(expr).prop(name,value);}}
function jqObject(expr,context)
{return $(expr,context);}
function is(expr,value)
{return $(expr).is(value);}
function replaceInput(expr,type,id,name,value,className,maxLength)
{var element=$(expr);var newElement=$(document.createElement("input"));newElement.attr({"type":type,"id":id,"name":name,"class":className,"value":value,"maxLength":maxLength});element.replaceWith(newElement);}
function submitForm(formId,callOnSubmit)
{var form=document.getElementById(formId);if(callOnSubmit&&form.onsubmit)
form.onsubmit.call(form);form.submit();}
var oneAllInitWaiting = [];
var oneAllInitStarted = false;
function oneAllInit(apiUrl, callbackUri, callback) {

   // One all already initialized
   if (window._oneall) {
      callback();
      return;
   }
   
   // One all hasn't been initialized, add callback to queue
   oneAllInitWaiting.push(callback);
   
   if (!oneAllInitStarted) {
      oneAllInitStarted = true;
      
      var options = {
         dataType: "script",
         cache: true,
         url: apiUrl + '/socialize/library.js'
      };
      
      $.ajax(options).done(function() {
         var oneall = window._oneall || [];
         oneall.push(['social_login', 'set_providers', ['google', 'facebook', 'linkedin']]);
         oneAllInitWaiting.forEach(function(callback) {
            callback();
         });
      });
   }
}
function oneAllSocialSignon(apiUrl, callbackUri, elementId, leaveFunction) {
   var socialLoginElement = $('#' + elementId + ' .social-login');
   oneAllInit(apiUrl, callbackUri, function() {
      var oneall = window._oneall || [];
      
      var facebook = socialLoginElement.find('.facebook');
      facebook.on('click', function(e) {
         e.preventDefault();
         oneall.push(['social_login', 'set_callback_uri', callbackUri]);
         oneall.push(['social_login', 'do_login', 'facebook']);
      });
      facebook.removeClass('inactive');
      
      var google = socialLoginElement.find('.googlePlus');
      google.on('click', function(e) {
         e.preventDefault();
         oneall.push(['social_login', 'set_callback_uri', callbackUri]);
         oneall.push(['social_login', 'do_login', 'google']);
      });
      google.removeClass('inactive');
      
      var linkedin = socialLoginElement.find('.linkedIn');
      $('#' + elementId + ' .social-login .linkedIn').on('click', function(e) {
         e.preventDefault();
         oneall.push(['social_login', 'set_callback_uri', callbackUri]);
         oneall.push(['social_login', 'do_login', 'linkedin']);
      });
      linkedin.removeClass('inactive');
   });
   
   if (leaveFunction)
   {
      socialLoginElement.find('.socialSignOnButton').on('click', function(e) {
         e.preventDefault();
         leaveFunction();
      });
   }
}
function jqGet(url,data,callback,type)
{return $.get(url,data,callback,type);}
function jqGetSiblings(expr,filterExpr)
{return $(expr).siblings(filterExpr);}
function createInputElement(type,id,name,classes,parentExpr,callback)
{var element=$(document.createElement("input")),parent=$(parentExpr?parentExpr:"body");element.attr({"type":type,"id":id,"name":name,"class":classes}).appendTo(parent);if(callback)
callback();return element;}
function jqFocus(expr)
{return $(expr).focus();}
function loginDetectError(){var loginErrorTarget=$('#login-loginForm > div');var forgotPassErrorTarget=$('#resetPassword-ResetForm > div');var wrapperTarget=$('#columnsWrapper');var forgotPasswordLink=$('#col1 .button.forgotPasswordLink');if(loginErrorTarget.hasClass('invalid')||forgotPassErrorTarget.hasClass('invalid')){wrapperTarget.addClass('hasError');}
forgotPasswordLink.on('click',function(){wrapperTarget.removeClass('hasError');});}
function jqScrollTop(targetExpr,offset)
{if(typeof offset!=='undefined')
return $(targetExpr).scrollTop(offset);else
return $(targetExpr).scrollTop();}
function jqAppendHtml(expr,html)
{return $(expr).append(html);}
function jqPrependHtml(expr,html)
{return $(expr).prepend(html);}
function jqFind(expr,selector)
{return $(expr).find(selector);}
function submitSortForm(formExpr,selectBoxExpr,orderByParamName,directionParamName)
{var selectValue=$(selectBoxExpr).val();var selectValueArray=selectValue.split('_');if(selectValueArray.length==2)
{$(formExpr).append('<input type="hidden" name="'+orderByParamName+'" value="'+selectValueArray[0]+'" />');$(formExpr).append('<input type="hidden" name="'+directionParamName+'" value="'+selectValueArray[1]+'" />');}
$(formExpr).submit();}
function getSortUrl(selectBoxExpr,currentUrl,orderByParamName,directionParamName)
{var selectValue=$(selectBoxExpr).val();var selectValueArray=selectValue.split('_');if(selectValueArray.length==2)
{currentUrl+='&'+orderByParamName+'='+selectValueArray[0];currentUrl+='&'+directionParamName+'='+selectValueArray[1];}
return currentUrl;}
/*!
 * jScroll - jQuery Plugin for Infinite Scrolling / Auto-Paging
 * @see @link{http://jscroll.com}
 *
 * @copyright 2011-2017, Philip Klauzinski
 * @license Dual licensed under the MIT and GPL Version 2 licenses.
 * @author Philip Klauzinski (http://webtopian.com)
 * @version 2.3.7
 * @requires jQuery v1.4.3+
 * @preserve
 */
(function($){'use strict';$.jscroll={defaults:{debug:false,autoTrigger:true,autoTriggerUntil:false,loadingHtml:'<small>Loading...</small>',loadingFunction:false,padding:0,nextSelector:'a:last',contentSelector:'',pagingSelector:'',callback:false}};var jScroll=function($e,options){var _data=$e.data('jscroll'),_userOptions=(typeof options==='function')?{callback:options}:options,_options=$.extend({},$.jscroll.defaults,_userOptions,_data||{}),_isWindow=($e.css('overflow-y')==='visible'),_$next=$e.find(_options.nextSelector).first(),_$window=$(window),_$body=$('body'),_$scroll=_isWindow?_$window:$e,_nextHref=$.trim(_$next.attr('href')+' '+_options.contentSelector),_preloadImage=function(){var src=$(_options.loadingHtml).filter('img').attr('src');if(src){var image=new Image();image.src=src;}},_wrapInnerContent=function(){if(!$e.find('.jscroll-inner').length){$e.contents().wrapAll('<div class="jscroll-inner" />');}},_nextWrap=function($next){var $parent;if(_options.pagingSelector){$next.closest(_options.pagingSelector).hide();}else{$parent=$next.parent().not('.jscroll-inner,.jscroll-added').addClass('jscroll-next-parent').hide();if(!$parent.length){$next.wrap('<div class="jscroll-next-parent" />').parent().hide();}}},_destroy=function(){return _$scroll.unbind('.jscroll')
.removeData('jscroll')
.find('.jscroll-inner').children().unwrap()
.filter('.jscroll-added').children().unwrap();},_observe=function(){if($e.is(':visible')){_wrapInnerContent();var $inner=$e.find('div.jscroll-inner').first(),data=$e.data('jscroll'),borderTopWidth=parseInt($e.css('borderTopWidth'),10),borderTopWidthInt=isNaN(borderTopWidth)?0:borderTopWidth,iContainerTop=parseInt($e.css('paddingTop'),10)+borderTopWidthInt,iTopHeight=_isWindow?_$scroll.scrollTop():$e.offset().top,innerTop=$inner.length?$inner.offset().top:0,iTotalHeight=Math.ceil(iTopHeight-innerTop+_$scroll.height()+iContainerTop);if(!data.waiting&&iTotalHeight+_options.padding>=$inner.outerHeight()){_debug('info','jScroll:',$inner.outerHeight()-iTotalHeight,'from bottom. Loading next request...');return _load();}}},_checkNextHref=function(data){data=data||$e.data('jscroll');if(!data||!data.nextHref){_debug('warn','jScroll: nextSelector not found - destroying');_destroy();return false;}else{_setBindings();return true;}},_setBindings=function(){var $next=$e.find(_options.nextSelector).first();if(!$next.length){return;}
if(_options.autoTrigger&&(_options.autoTriggerUntil===false||_options.autoTriggerUntil>0)){_nextWrap($next);var scrollingBodyHeight=_$body.height()-$e.offset().top,scrollingHeight=($e.height()<scrollingBodyHeight)?$e.height():scrollingBodyHeight,windowHeight=($e.offset().top-_$window.scrollTop()>0)?_$window.height()-($e.offset().top-$(window).scrollTop()):_$window.height();if(scrollingHeight<=windowHeight){_observe();}
_$scroll.unbind('.jscroll').bind('scroll.jscroll',function(){return _observe();});if(_options.autoTriggerUntil>0){_options.autoTriggerUntil--;}}else{_$scroll.unbind('.jscroll');$next.bind('click.jscroll',function(){_nextWrap($next);_load();return false;});}},_load=function(){var $inner=$e.find('div.jscroll-inner').first(),data=$e.data('jscroll');data.waiting=true;$inner.append('<div class="jscroll-added" />')
.children('.jscroll-added').last()
.html('<div class="jscroll-loading" id="jscroll-loading">'+_options.loadingHtml+'</div>')
.promise()
.done(function(){if(_options.loadingFunction){_options.loadingFunction();}});return $e.animate({scrollTop:$inner.outerHeight()},0,function(){var nextHref=data.nextHref;$inner.find('div.jscroll-added').last().load(nextHref,function(r,status){if(status==='error'){return _destroy();}
var $next=$(this).find(_options.nextSelector).first();data.waiting=false;data.nextHref=$next.attr('href')?$.trim($next.attr('href')+' '+_options.contentSelector):false;$('.jscroll-next-parent',$e).remove();_checkNextHref();if(_options.callback){_options.callback.call(this,nextHref);}
_debug('dir',data);});});},_debug=function(m){if(_options.debug&&typeof console==='object'&&(typeof m==='object'||typeof console[m]==='function')){if(typeof m==='object'){var args=[];for(var sMethod in m){if(typeof console[sMethod]==='function'){args=(m[sMethod].length)?m[sMethod]:[m[sMethod]];console[sMethod].apply(console,args);}else{console.log.apply(console,args);}}}else{console[m].apply(console,Array.prototype.slice.call(arguments,1));}}};$e.data('jscroll',$.extend({},_data,{initialized:true,waiting:false,nextHref:_nextHref}));_wrapInnerContent();_preloadImage();_setBindings();$.extend($e.jscroll,{destroy:_destroy});return $e;};$.fn.jscroll=function(m){return this.each(function(){var $this=$(this),data=$this.data('jscroll'),jscroll;if(data&&data.initialized){return;}
jscroll=new jScroll($this,m);});};})(jQuery);
function jScrollAdd(targetExpr,loadingHtml,nextSelector,contentSelector,debug,refresh,useGetMethod,callback)
{$(targetExpr).jscroll({debug:debug?debug:false,loadingHtml:loadingHtml,nextSelector:nextSelector,contentSelector:contentSelector,refresh:(refresh?refresh:true),useGetMethod:(useGetMethod?useGetMethod:false),callback:callback,refresh:true});}
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
(function(window,undefined){'$:nomunge';var $=window.jQuery||window.Cowboy||(window.Cowboy={}),jq_throttle;$.throttle=jq_throttle=function(delay,no_trailing,callback,debounce_mode){var timeout_id,last_exec=0;if(typeof no_trailing!=='boolean'){debounce_mode=callback;callback=no_trailing;no_trailing=undefined;}
function wrapper(){var that=this,elapsed=+new Date()-last_exec,args=arguments;function exec(){last_exec=+new Date();callback.apply(that,args);};function clear(){timeout_id=undefined;};if(debounce_mode&&!timeout_id){exec();}
timeout_id&&clearTimeout(timeout_id);if(debounce_mode===undefined&&elapsed>delay){exec();}else if(no_trailing!==true){timeout_id=setTimeout(debounce_mode?clear:exec,debounce_mode===undefined?delay-elapsed:delay);}};if($.guid){wrapper.guid=callback.guid=callback.guid||$.guid++;}
return wrapper;};$.debounce=function(delay,at_begin,callback){return callback===undefined?jq_throttle(delay,at_begin,false):jq_throttle(delay,callback,at_begin!==false);};})(this);
function jqDebounce(delay,at_begin,callback)
{return $.debounce(delay,at_begin,callback);}
function updateJSON(oldJson,newName1,newValue1,newName2,newValue2)
{var newJson=[];for(var index in oldJson)
{var pair=oldJson[index];if(pair.name!==newName1&&pair.name!==newName2)
{newJson.push(pair);}}
if(newName1&&newValue1)
{newJson.push({name:newName1,value:newValue1});}
if(newName2&&newValue2)
{newJson.push({name:newName2,value:newValue2});}
return newJson;}
function jqAsyncAppend(expr,url)
{$.ajax({url:url,cache:false,success:function(html){$(expr).append(html);}});}
function jqTabs(tabsExpr,contentsExpr,selectedIndex)
{tabsExpr=$(tabsExpr);contentsExpr=$(contentsExpr);tabsExpr.each(function(i)
{var tab=$(this);tab.click(function(e){tabsExpr.removeClass("selected");tab.addClass("selected");contentsExpr.hide();contentsExpr.eq(i).show();return false;});});if(selectedIndex!==undefined)
{tabsExpr.eq(selectedIndex).click();}
else
{tabsExpr.eq(0).click();}
return tabsExpr;}
function isKeyCode(event,key)
{var code=(event.keyCode?event.keyCode:event.which);if(code==key)
{return true;}}
function createElement(type,id,classes,parentExpr,callback)
{var element=$(document.createElement(type)),parent=parentExpr?parentExpr:"body";element.attr({"id":id,"class":classes}).appendTo(parent);if(callback)
callback();return element;}
function messageMemberAdd(invitedMembersId,memberId,loginName,shouldSpanAnchor,loadBefore)
{var divId="toMember"+memberId;if(document.getElementById(divId))
return;var div=createElement("div",divId);var span=createElement("span",null,null,div);var anchor=createElement("a",null,"remove",div);var input=createInputElement("hidden",null,"mid",null,div);span.text(loginName);anchor.attr({href:"#",title:"Remove"});if(shouldSpanAnchor)
$('<span>').text("Remove").appendTo(anchor);else
anchor.text("Remove");anchor.click(function()
{$("#"+divId).remove();return false;});input.val(memberId);if(loadBefore)
$("#"+invitedMembersId+" "+loadBefore).before(div);else
$("#"+invitedMembersId).append(div);}
function googlePlusOne()
{var po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/plusone.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);}
function jqPreventDefault(event)
{event.preventDefault();}
function copyToClipboard(selector)
{var element=$(selector);window.getSelection().removeAllRanges();var range=document.createRange();range.selectNode(element[0]);window.getSelection().addRange(range);try
{var success=document.execCommand('copy');}
catch(exception)
{if(console)console.log('Copy to clipboard failed: '+exception);}
window.getSelection().removeAllRanges();}
function asyncTopicFollow(targetExpr,topicIdSelector,generalTopicIdSelector,url,json,callback)
{addLoadingWidget(targetExpr);var isFollow=$(topicIdSelector).hasClass('follow');if(isFollow)
{var follow=[{name:'follow',value:'true'}];json=json.concat(follow);}
else
{var unfollow=[{name:'unfollow',value:'true'}];json=json.concat(unfollow);}
$(targetExpr).load(url,json,callback);if(isFollow)
{$(generalTopicIdSelector).addClass('unfollow');$(generalTopicIdSelector).removeClass('follow');}
else
{$(generalTopicIdSelector).addClass('follow');$(generalTopicIdSelector).removeClass('unfollow');}}
function followTopicCheckMark(topic,selector)
{function moveAttr(node,from,to)
{node.attr(to,node.attr(from));node.removeAttr(from);}
function changePubMessage(node,msg)
{if(msg==='follow')
{var re=/'follow'/g;if(node.attr('onclick'))
node.attr('onclick',node.attr('onclick').replace(re,'\'unfollow\''));}
else if(msg==='unfollow')
{var re=/'unfollow'/g;if(node.attr('onclick'))
node.attr('onclick',node.attr('onclick').replace(re,'\'follow\''));node.removeClass('image verified verifying unfollow');}}
if(jQuery.Topic)$.Topic(topic)
.subscribe(jQuery.proxy(function(msg){var node=$(selector);if(node.parent().hasClass("notAFeedItem")||node.parent().parent().hasClass("notAFeedItem"))
{changePubMessage(node,msg);}
else if(msg==='follow')
{node.fadeTo('fast',.8);node.html('<span title="Following">'+String.fromCharCode(0xf046)+'</span>');changePubMessage(node,msg);moveAttr(node,'onclick','oldOnclick');moveAttr(node,'href','oldHref');node.removeClass('follow unfollow button');node.addClass('image');node.addClass('verifying');node.attr('title','Following');setTimeout(function(){node.removeClass('verifying');node.addClass('verified');},3000);}
else if(msg==='unfollow')
{node.fadeTo('fast',.8);node.html('<span title="Follow Topic">+</span>');if(node.attr('oldOnclick'))
moveAttr(node,'oldOnclick','onclick')
if(node.attr('oldHref'))
moveAttr(node,'oldHref','href');node.removeClass('image verified verifying unfollow');node.addClass('follow');node.addClass('button');changePubMessage(node,msg);node.attr('title','Follow Topic');}},this));}
var topics={};jQuery.Topic=function(id){var callbacks,method,topic=id&&topics[id];if(!topic){callbacks=jQuery.Callbacks("memory ");topic={publish:callbacks.fire,subscribe:callbacks.add,unsubscribe:callbacks.remove};if(id){topics[id]=topic;}}
return topic;};
function promoCodeCallback(response,promoAsyncUrl,form,promoInput,json,payPalTypeId,fallback)
{var splitResponse=response.split('\n'),enterPromo=$(form).find('.enterPromo'),promoEntered=$(form).find('.promoEntered'),offeringRadios=$(form).find('input[name="offering"]'),paymentSectionContainer=$(form).find('.paymentSection'),paymentRadios=$(form).find('input[name="ccTypeID"]'),payPalRadio=$(form).find('input[name="ccTypeID"][value="'+payPalTypeId+'"]'),payPalUpdated=false,payPalHide;if(paymentSectionContainer.length==0)
paymentSectionContainer=offeringRadios.parent();var checkPayPal=function()
{var payPalWarning=$(form).find('.paypal-warning'),selectedOffering=offeringRadios.filter(':checked');if(selectedOffering.parent().hasClass('noPayPal')||$('.noPayPal').length!=0)
payPalHide=true;else
payPalHide=false;if(payPalHide&&payPalRadio.is(':checked'))
{payPalWarning.show();}
else
{if(payPalRadio.is(':checked')&&!payPalUpdated)
{offeringCallback();payPalUpdated=true;}
payPalWarning.hide();}};var offeringCallback=function()
{var parameters=json.slice(0);offeringRadios.each(function()
{parameters.push({name:"offering",value:$(this).val()});});$.getJSON(promoAsyncUrl,parameters,function(data)
{$.each(data,function(index,element)
{var currentInput=offeringRadios.filter('[value="'+element.offeringId+'"]'),container=currentInput.parent(),paypalPrice=container.find('.upgradePaypalPriceSummary .plan-price'),ccPrice=container.find('.upgradeCreditPriceSummary .plan-price'),newPrice,promoBlurb=promoEntered.find('.promoBlurb').filter(':first'),blurbClass='promoBlurb'+element.offeringId;if(ccPrice.length==0)
ccPrice=container.find('.plan-price');if(element.hasOwnProperty('price'))
{if(payPalHide===false)
{newPricePaypal=paypalPrice.clone().addClass('new-price').insertAfter(paypalPrice);newPricePaypal.text(element.price);paypalPrice.addClass('old-price');}
else
{newPriceCC=ccPrice.clone().addClass('new-price').insertAfter(ccPrice);newPriceCC.text(element.price);ccPrice.addClass('old-price');if($('.condensedPromo').length!=0&&!payPalRadio.is(':checked'))
{$('.upgradePromoContainer').show();}}}
else
{newPricePaypal=paypalPrice.clone().addClass('invalid-price').insertAfter(paypalPrice);newPricePaypal.empty();newPriceCC=ccPrice.clone().addClass('invalid-price').insertAfter(ccPrice);newPriceCC.empty();blurbClass+=' invalid';if($('.condensedPromo').length!=0)
{$('.upgradePromoContainer').hide();}}
if(element.hasOwnProperty('priceMonthly')&&!payPalHide)
{var priceMonthly=container.find('.plan-price-monthly');if(priceMonthly)
{var newPriceMonthly=priceMonthly.clone().addClass('new-price-monthly').insertAfter(priceMonthly);newPriceMonthly.text(element.priceMonthly);priceMonthly.addClass('old-price-monthly');}}
if(element.hasOwnProperty('savings')&&!payPalHide)
{var savings=container.find('.plan-savings .plan-savings-amount');if(savings)
{var newSavings=savings.clone().addClass('new-savings').insertAfter(savings);newSavings.text(element.savings);savings.addClass('old-savings');}}
if($.trim(promoBlurb.text())==$.trim(element.description))
{promoBlurb.html(element.description).addClass(blurbClass);}
else
{promoBlurb.clone().removeClass().addClass('promoBlurb').html(element.description).addClass(blurbClass).hide().insertAfter(promoBlurb);if($('.condensedPromo').length!=0)
{blurbCallback();checkPayPal();}}
if(element.hasOwnProperty('payPalSupported')&&!element.payPalSupported)
container.addClass('noPayPal');if(splitResponse.length>2&&$.trim(splitResponse[2])==currentInput.val())
{currentInput.prop('checked',true);currentInput.change();}});checkPayPal();});var blurbCallback=function()
{promoEntered.find('.promoBlurb').hide();if($('.condensedPromo').length!=0)
var newBlurb=promoEntered.find('.promoBlurb'+$('#offeringUpgrade-selectedOffering').val());else
var newBlurb=promoEntered.find('.promoBlurb'+$(this).val());if(newBlurb.hasClass('invalid'))
promoEntered.addClass('invalid');else
promoEntered.removeClass('invalid');newBlurb.show();};offeringRadios.on('change',blurbCallback);offeringRadios.on('change',checkPayPal);paymentRadios.on('change',checkPayPal);$(form).find('.removePromo, .change-plan').one('click',function()
{var blurbs=promoEntered.find('.promoBlurb'),blurbContainer=blurbs.parent();offeringRadios.off('change',blurbCallback);offeringRadios.off('change',checkPayPal);paymentRadios.off('change',checkPayPal);blurbs.remove();$(document.createElement('p')).addClass('promoBlurb').appendTo(blurbContainer);var container=paymentSectionContainer;container.find('.old-price').removeClass('old-price');container.find('.old-price-monthly').removeClass('old-price-monthly');container.find('.old-savings').removeClass('old-savings');container.find('.new-price, .invalid-price, .new-price-monthly, .new-savings').remove();$(form).find('.noPayPal').removeClass('noPayPal');promoEntered.removeClass('invalid');});};if($.trim(splitResponse[0]).indexOf('valid')==0)
{var label=promoEntered.find('.label'),description=promoEntered.find('.promoBlurb');label.text($(promoInput).val().toUpperCase());description.text(splitResponse[1]);offeringCallback();payPalUpdated=true;enterPromo.hide();promoEntered.show();fallback(response);}
else
{promoEntered.hide();enterPromo.show();fallback(response);}}
function promoCodeCallbackMixedReg(response,promoAsyncUrl,form,promoInput,json,payPalTypeId,fallback)
{var form=$(form);var splitResponse=response.split('\n'),enterPromo=form.find('.enterPromo'),promoEntered=form.find('.promoEntered'),offeringRadios=form.find('input[name="offering"]'),toggleButton=form.find('.toggle-button'),paymentSectionContainer=form.find('.paymentSection'),paymentRadios=form.find('input[name="ccTypeID"]'),payPalRadio=form.find('input[name="ccTypeID"][value="'+payPalTypeId+'"]'),payPalUpdated=false,payPalHide,validPrices={};if(paymentSectionContainer.length==0)
paymentSectionContainer=offeringRadios.parent();var blurbCallback=function()
{promoEntered.find('.promoBlurb').hide();if($('.condensedPromo').length!=0)
var newBlurb=promoEntered.find('.promoBlurb'+$('.offering[name="offering"]').val());else
var newBlurb=promoEntered.find('.promoBlurb'+$(this).val());var newPrice=$('.new-price');if(newBlurb.hasClass('invalid'))
{promoEntered.addClass('invalid');$('.offeringPrice').removeClass('old-price');$('.new-price').hide();$('.upgradePromoContainer').addClass('promoErrorNote');}
else
{promoEntered.removeClass('invalid');newPrice.text(validPrices[$('.offering[name="offering"]').val()]);newPrice.show();$('.offeringPrice').addClass('old-price');$('.upgradePromoContainer').removeClass('promoErrorNote');}
if(newPrice&&newPrice.hasClass('old-price'))
newPrice.removeClass('old-price')
newBlurb.show();};var checkPayPal=function()
{var payPalWarning=$(form).find('.paypal-warning');if(payPalRadio.is(':checked'))
{payPalWarning.show();$('.upgradePromoContainer').hide();$('.offeringPrice').removeClass('old-price');$('.new-price').hide();}
else
{payPalWarning.hide();$('.upgradePromoContainer').show();blurbCallback();}};var offeringCallback=function()
{var parameters=json.slice(0);$('.selectableOfferingId').each(function()
{parameters.push({name:"offering",value:$(this).data('offeringid')});});$.getJSON(promoAsyncUrl,parameters,function(data)
{var newPriceCC;$.each(data,function(index,element)
{var currentInput=offeringRadios.filter('[value="'+element.offeringId+'"]'),container=currentInput.parent(),paypalPrice=container.find('.upgradePaypalPriceSummary .plan-price'),ccPrice=container.find('.upgradeCreditPriceSummary .plan-price'),newPrice,promoBlurb=promoEntered.find('.promoBlurb').filter(':first'),blurbClass='promoBlurb'+element.offeringId;if(ccPrice.length==0)
ccPrice=container.find('.plan-price');if(element.hasOwnProperty('price'))
{if(payPalHide===false)
{newPricePaypal=paypalPrice.clone().addClass('new-price').insertAfter(paypalPrice);newPricePaypal.text(element.price);paypalPrice.addClass('old-price');}
else
{newPriceCC=ccPrice.clone().addClass('new-price').insertAfter(ccPrice);newPriceCC.removeClass('offeringPrice');newPriceCC.text(element.price);validPrices[element.offeringId]=element.price;ccPrice.addClass('old-price');}}
else
{newPriceCC=ccPrice.clone().addClass('new-price').insertAfter(ccPrice);newPriceCC.removeClass('offeringPrice');newPriceCC.text(element.price);newPriceCC.hide();blurbClass+=' invalid';}
if(element.hasOwnProperty('priceMonthly')&&!payPalHide)
{var priceMonthly=container.find('.plan-price-monthly');if(priceMonthly)
{var newPriceMonthly=priceMonthly.clone().addClass('new-price-monthly').insertAfter(priceMonthly);newPriceMonthly.text(element.priceMonthly);priceMonthly.addClass('old-price-monthly');}}
if(element.hasOwnProperty('savings')&&!payPalHide)
{var savings=container.find('.plan-savings .plan-savings-amount');if(savings)
{var newSavings=savings.clone().addClass('new-savings').insertAfter(savings);newSavings.text(element.savings);savings.addClass('old-savings');}}
if($.trim(promoBlurb.text())==$.trim(element.description))
{promoBlurb.html(element.description).addClass(blurbClass);}
else
{promoBlurb.clone().removeClass().addClass('promoBlurb').html(element.description).addClass(blurbClass).hide().insertAfter(promoBlurb);if($('.condensedPromo').length!=0)
{blurbCallback();checkPayPal();}}
if(element.hasOwnProperty('payPalSupported')&&!element.payPalSupported)
container.addClass('noPayPal');if(splitResponse.length>2&&$.trim(splitResponse[2])==currentInput.val())
{currentInput.prop('checked',true);currentInput.change();}});newPriceCC.text(validPrices[$('.offering[name="offering"]').val()]);checkPayPal();});toggleButton.on('click',blurbCallback);toggleButton.on('click',checkPayPal);paymentRadios.on('change',checkPayPal);$(form).find('.removePromo, .change-plan').one('click',function()
{var blurbs=promoEntered.find('.promoBlurb'),blurbContainer=blurbs.parent();toggleButton.off('click',blurbCallback);toggleButton.off('click',checkPayPal);paymentRadios.off('change',checkPayPal);blurbs.remove();$(document.createElement('p')).addClass('promoBlurb').appendTo(blurbContainer);var container=paymentSectionContainer;container.find('.old-price').removeClass('old-price');container.find('.old-price-monthly').removeClass('old-price-monthly');container.find('.old-savings').removeClass('old-savings');container.find('.new-price, .invalid-price, .new-price-monthly, .new-savings').remove();container.find('.offeringPrice').removeClass('old-price');$(form).find('.noPayPal').removeClass('noPayPal');promoEntered.removeClass('invalid');});};if($.trim(splitResponse[0]).indexOf('valid')==0)
{var label=promoEntered.find('.label'),description=promoEntered.find('.promoBlurb');label.text($(promoInput).val().toUpperCase());description.text(splitResponse[1]);offeringCallback();payPalUpdated=true;enterPromo.hide();promoEntered.show();fallback(response);}
else
{promoEntered.hide();enterPromo.show();fallback(response);}
$(window.document).ajaxComplete(function(event,xhr,settings)
{if(settings.url=='/async/harvesterValidator.jsp')
{if($('.condensedPromo').hasClass('invalid'))
$('.upgradePromoContainer').addClass('promoErrorNote');else
$('.upgradePromoContainer').removeClass('promoErrorNote');}});}
function promoCodeCallbackMu(response,promoAsyncUrl,form,promoInput,json,isSelect,fallback)
{var splitResponse=response.split('\n'),enterPromo=$(form).find('.enterPromo'),promoEntered=$(form).find('.promoEntered'),licenseInput=$(form).find((isSelect?'select':'input')+'[name="licenseCount"]'),event=(isSelect?'change':'blur'),container=$(form).find('.final-cost');asyncFunction=function(count)
{var newJson=json.slice(0);newJson.push({name:'licenseCount',value:count});$.getJSON(promoAsyncUrl,newJson,function(data)
{var priceContainer=container.find('.total-overall'),price=priceContainer.find('p'),savingsContainer=container.find('.total-savings'),savings=savingsContainer.find('p'),element=data[0],valid=false;if(price.length==0)
price=priceContainer;var newPrice=price.filter('.new-price');if(element.hasOwnProperty('price'))
{valid=true;if(newPrice.length==0)
{newPrice=price.clone().addClass('new-price').insertAfter(price);price.addClass('old-price');}
newPrice.text(element.price);}
else
{if(price.filter('.invalid-price').length==0)
{newPrice=price.clone().addClass('invalid-price').insertAfter(price);newPrice.empty();}}
var newSavings=savings.filter('.new-price');if(element.hasOwnProperty('savings'))
{valid=true;if(newSavings.length==0)
{newSavings=savings.clone().addClass('new-price').insertAfter(savings);savings.addClass('old-price');}
newSavings.text(element.savings);}
else
{if(savings.filter('.invalid-price').length==0)
{newSavings=savings.clone().addClass('invalid-price').insertAfter(savings);newSavings.empty();}}
if(element.hasOwnProperty('description'))
promoEntered.find('.promoBlurb').text(element.description);if(valid)
promoEntered.removeClass('invalid');else if(!promoEntered.hasClass('invalid'))
promoEntered.addClass('invalid');});};offeringCallback=function()
{asyncFunction(licenseInput.val());licenseInput.on(event,function(){asyncFunction(licenseInput.val());});$(form).find('.removePromo').one('click',function()
{licenseInput.off(event,asyncFunction);container.find('.old-price').removeClass('old-price');container.find('.new-price, .invalid-price').remove();promoEntered.removeClass('invalid');});};if($.trim(splitResponse[0]).indexOf('valid')==0)
{var label=promoEntered.find('.label'),description=promoEntered.find('.promoBlurb');label.text($(promoInput).val().toUpperCase());description.text(splitResponse[1]);offeringCallback();enterPromo.hide();promoEntered.show();fallback(response);}
else
{promoEntered.hide();enterPromo.show();fallback(response);}}
function promoCodeAllGroupsCallbackMu(response,promoAsyncUrl,formSelector,promoInput,json,isSelect,fallback)
{var splitResponse=response.split('\n'),form=$(formSelector),enterPromo=form.find('.enterPromo'),promoEntered=form.find('.promoEntered'),licenseInput=form.find((isSelect?'select':'input')+'[name="licenseCount"]'),event='change',groups;asyncFunction=function()
{var licenseCount=isSelect?licenseInput.val():licenseInput.filter(':checked').val();var newJson=json.slice(0);newJson.push({name:'licenseCount',value:licenseCount});$.getJSON(promoAsyncUrl,newJson,function(data)
{groups=data;for(var index in groups)
{var group=groups[index];var groupLicenseCount=group['licenseCount'];var groupPrice=group['price'];var groupInput=licenseInput.filter('[value="'+groupLicenseCount+'"]')
var groupWrapper=groupInput.closest('.priceTier');var priceElement=groupWrapper.find('.price');priceElement.addClass('oldPrice');var newPriceElemt=$('<div/>').addClass('newPrice').text(groupPrice);priceElement.after(newPriceElemt);var savingsElement=groupWrapper.find('.savings');savingsElement.addClass('oldSavings');}});};removeDiscountElements=function()
{form.find('.priceTier .price').removeClass('oldPrice');form.find('.priceTier .newPrice').remove();form.find('.priceTier .savings').removeClass('oldSavings');};changeDescription=function()
{var licenseCount=isSelect?licenseInput.val():licenseInput.filter(':checked').val();var description;for(var index in groups)
{var group=groups[index];var groupLicenseCount=group['licenseCount'];var groupDescription=group['description'];if(licenseCount==groupLicenseCount)
description=groupDescription;}
if(description)
{var promoBlurb=promoEntered.find('.promoBlurb');promoBlurb.text(description);}}
offeringCallback=function()
{asyncFunction();licenseInput.on(event,function(){changeDescription();});form.find('.removePromo').one('click',function()
{licenseInput.off(event,changeDescription);promoEntered.removeClass('invalid');});};if($.trim(splitResponse[0]).indexOf('valid')==0)
{var label=promoEntered.find('.label'),description=promoEntered.find('.promoBlurb');label.text($(promoInput).val().toUpperCase());description.text(splitResponse[1]);offeringCallback();enterPromo.hide();promoEntered.show();fallback(response);}
else
{removeDiscountElements();promoEntered.hide();enterPromo.show();fallback(response);}}
function avatarHoverPopup(hoverSelector,dataKey)
{$(hoverSelector+':not(.processed)').each(function(index)
{var elem=$(this);elem.addClass('processed');elem.hoverIntent({sensitivity:6,interval:100,over:function(event){$('#'+$(this).data(dataKey)).show();},timeout:0,out:function(event){$('#'+$(this).data(dataKey)).hide();}});});}
function submitPostableRating(ratingLink,asyncUrl)
{var rating=$(ratingLink).closest('.rating');var memberRating=rating.find('.member-rating');var referenceTypeId=rating.data('rtid');var referenceId=rating.data('refid');var ratingTypeId=rating.data('rating');if(ratingTypeId==0)
{memberRating.removeClass('has-voted');memberRating.addClass('can-vote');}
else
{memberRating.removeClass('can-vote');memberRating.addClass('has-voted');}
$.post({url:asyncUrl,data:{asid:"json",iasid:"json",rtid:referenceTypeId,refID:referenceId,rating:ratingTypeId,returnResults:true},success:function(data)
{var response=jQuery.parseJSON(data);var count=response['rating-count'];var ratingTypeId=response['rating'];rating.data('count',count);rating.data('rating',ratingTypeId)
rating.attr('data-count',count);rating.attr('data-rating',ratingTypeId);var counter=rating.find('.rating-count');if(counter)
counter.html(count);var voters=rating.find('.voters');if(voters)
{voters.addClass('hidden');voters.html('<div class="loader"></div>');}
if(response['toast'])
toast(response['toast']);}});}
function asyncPopulatingHover(hoverSelector,sectionToShowSelector,emptySelector,asyncTarget,asyncUrl,timeout)
{$(hoverSelector).hoverIntent({sensitivity:6,interval:100,over:function(event)
{$(sectionToShowSelector).toggle(true);$(hoverSelector).addClass('selected');$(hoverSelector).parent().addClass('hoverOpen');if($(emptySelector).length)
$(asyncTarget).load(asyncUrl);},timeout:timeout!==undefined?timeout:0,out:function(event)
{$(sectionToShowSelector).toggle(false);$(hoverSelector).removeClass('selected');$(hoverSelector).parent().removeClass('hoverOpen');}});}
function votersHoverIntents(hoverSelector,asyncUrl)
{$(hoverSelector).each(function()
{if($(this).hasClass('voterHoverLoaded'))
return;$(this).addClass('voterHoverLoaded')
var votersHoverWrap=$(this);var voters=votersHoverWrap.find('.voters');var rating=votersHoverWrap.closest('.rating');var emptySelector='#'+rating.attr('id')+' .voters .loader';var referenceTypeId=rating.data('rtid');var referenceId=rating.data('refid');if(referenceTypeId!==0&&referenceId!==0)
{var data={asid:'voters',iasid:'voters',rtid:referenceTypeId,refID:referenceId};asyncPopulatingHover(votersHoverWrap,voters,emptySelector,voters,asyncUrl+"?"+$.param(data),150);}});}
function showRatingsDetails(ratingCountSelector,ratingsUrl)
{var ratingCount=$(ratingCountSelector);var rating=ratingCount.closest('.rating');var referenceTypeId=rating.data('rtid');var referenceId=rating.data('refid');if(referenceTypeId!=0&&referenceId!=0)
{featherlightOpen(ratingsUrl+"?"+$.param({asid:'ratings',iasid:'ratings',rtid:referenceTypeId,refID:referenceId,details:'true'}));}}
function cardHeightOverflow()
{$('.cardsOverflow .row-content .copy:not(.processed), .cardsOverflow .userCommentWrapper:not(.processed)').each(function(index)
{var elem=$(this);if(elem.get(0).scrollHeight>Math.ceil(elem.innerHeight()))
{elem.siblings('.moreLink').removeClass('hidden');}
elem.addClass('processed');});}
var commentRegistered=[];var commentUtilityLoggedIn;function commentUtility(htmlId,loggedIn)
{if(commentRegistered.indexOf(htmlId)==-1)
{commentUtilityLoggedIn=loggedIn;commentRegistered.push(htmlId);$(htmlId).on('click','.comment-utility-button',function(event)
{var commentWrapper=$(event.target).parents('.comment,.answer,.clarificationComment');var id=commentWrapper.attr('id');$('.utility-section:not(\\\'#'+id+' .utility-section\\\')').toggle(false);$('#'+id+' .utility-section').toggle();return false;});$(htmlId).on('click','.comment-add',function(event)
{var contentWrapper=$(event.target).parents('.row-content');var rtid=$(this).attr("data-rtid");var refid=$(this).attr("data-refid");var lastCommentId=$(this).attr("data-lastCommentId");var htmlId='answerOrCommentViewAsyncWrap'+'-'+rtid+'-'+refid;if(commentUtilityLoggedIn)
{jqAsyncPost(contentWrapper.find('.commentAddWrapper'),'/async/c3CommentEdit.async?rtid='+rtid+'&refID='
+refid+'&asid='+htmlId+'&iasid='+htmlId+'&commentUtilityAction=ADD&componentHtmlId='
+htmlId+'&lastCommentId='+lastCommentId,null,function()
{contentWrapper.find('.commentAddWrapper textarea').focus();});}
else
{jqAsyncPost(contentWrapper.find('.commentAddWrapper'),'/async/addCommentLo.async?rtid='+rtid+'&refID='
+refid+'&asid='+htmlId+'&iasid='+htmlId+'&commentUtilityAction=ADD&componentHtmlId='
+htmlId+'&lastCommentId='+lastCommentId,null,function()
{});}
$('#'+htmlId).toggle(true);$(this).addClass('hideAnimation');return false;});$(document).mousedown(function(e){var popup=$(".utility-section");var postUtility=$(".comment-utility-button")
if(!$('.hidden').is(e.target)&&!popup.is(e.target)&&popup.has(e.target).length==0&&!postUtility.is(e.target)&&!postUtility.is($(e.target).parent())){popup.hide();}});$(htmlId).on('click','.comments .comment-inner .moreLink',function(event)
{var commentWrapper=$(event.target).parents('.comment');commentWrapper.find('.content').addClass("showAll")
$(event.target).toggle(false);return false;});}}
function copyPermalinkToClipboard(permalinkSelector)
{var permalink=$(permalinkSelector);var html=permalink.html();permalink.html(permalink.attr('href'));copyToClipboard(permalinkSelector);permalink.html(html);}
function jqGetText(expr){return $(expr).text();}
function incrementOrDecrementValue(valueToChange,NumberToAdjustBy,isIncrementing)
{valueToChange=parseInt(valueToChange);NumberToAdjustBy=parseInt(NumberToAdjustBy);if(isIncrementing)
{valueToChange+=NumberToAdjustBy;}
else
{valueToChange-=NumberToAdjustBy;}
if(valueToChange<0)
{valueToChange=0;}
return valueToChange;}
function jqSetText(expr,str){$(expr).text(str);}
function jqClosest(expr,selector,context)
{return $(expr).closest(selector,context);}
function expandTextarea(expr)
{var $textArea=$(expr);var textAreaHeight=$textArea.height();var textAreaScrollHeight=$textArea.prop("scrollHeight");if(textAreaScrollHeight>textAreaHeight)
{$textArea.height(textAreaScrollHeight);}}
/**
 * @license Rangy Text Inputs, a cross-browser textarea and text input library plug-in for jQuery.
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Depends on jQuery 1.0 or later.
 *
 * Copyright 2010, Tim Down
 * Licensed under the MIT license.
 * Version: 0.1.205
 * Build date: 5 November 2010
 */
(function($){var UNDEF="undefined";var getSelection,setSelection,deleteSelectedText,deleteText,insertText;var replaceSelectedText,surroundSelectedText,extractSelectedText,collapseSelection;function isHostMethod(object,property){var t=typeof object[property];return t==="function"||(!!(t=="object"&&object[property]))||t=="unknown";}
function isHostProperty(object,property){return typeof(object[property])!=UNDEF;}
function isHostObject(object,property){return!!(typeof(object[property])=="object"&&object[property]);}
function fail(reason){if(window.console&&window.console.log){window.console.log("TextInputs module for Rangy not supported in your browser. Reason: "+reason);}}
function adjustOffsets(el,start,end){if(start<0){start+=el.value.length;}
if(typeof end==UNDEF){end=start;}
if(end<0){end+=el.value.length;}
return{start:start,end:end};}
function makeSelection(el,start,end){return{start:start,end:end,length:end-start,text:el.value.slice(start,end)};}
function getBody(){return isHostObject(document,"body")?document.body:document.getElementsByTagName("body")[0];}
$(document).ready(function(){var testTextArea=document.createElement("textarea");getBody().appendChild(testTextArea);if(isHostProperty(testTextArea,"selectionStart")&&isHostProperty(testTextArea,"selectionEnd")){getSelection=function(el){var start=el.selectionStart,end=el.selectionEnd;return makeSelection(el,start,end);};setSelection=function(el,startOffset,endOffset){var offsets=adjustOffsets(el,startOffset,endOffset);el.selectionStart=offsets.start;el.selectionEnd=offsets.end;};collapseSelection=function(el,toStart){if(toStart){el.selectionEnd=el.selectionStart;}else{el.selectionStart=el.selectionEnd;}};}else if(isHostMethod(testTextArea,"createTextRange")&&isHostObject(document,"selection")&&isHostMethod(document.selection,"createRange")){getSelection=function(el){var start=0,end=0,normalizedValue,textInputRange,len,endRange;var range=document.selection.createRange();if(range&&range.parentElement()==el){len=el.value.length;normalizedValue=el.value.replace(/\r\n/g,"\n");textInputRange=el.createTextRange();textInputRange.moveToBookmark(range.getBookmark());endRange=el.createTextRange();endRange.collapse(false);if(textInputRange.compareEndPoints("StartToEnd",endRange)>-1){start=end=len;}else{start=-textInputRange.moveStart("character",-len);start+=normalizedValue.slice(0,start).split("\n").length-1;if(textInputRange.compareEndPoints("EndToEnd",endRange)>-1){end=len;}else{end=-textInputRange.moveEnd("character",-len);end+=normalizedValue.slice(0,end).split("\n").length-1;}}}
return makeSelection(el,start,end);};var offsetToRangeCharacterMove=function(el,offset){return offset-(el.value.slice(0,offset).split("\r\n").length-1);};setSelection=function(el,startOffset,endOffset){var offsets=adjustOffsets(el,startOffset,endOffset);var range=el.createTextRange();var startCharMove=offsetToRangeCharacterMove(el,offsets.start);range.collapse(true);if(offsets.start==offsets.end){range.move("character",startCharMove);}else{range.moveEnd("character",offsetToRangeCharacterMove(el,offsets.end));range.moveStart("character",startCharMove);}
range.select();};collapseSelection=function(el,toStart){var range=document.selection.createRange();range.collapse(toStart);range.select();};}else{getBody().removeChild(testTextArea);fail("No means of finding text input caret position");return;}
getBody().removeChild(testTextArea);deleteText=function(el,start,end,moveSelection){var val;if(start!=end){val=el.value;el.value=val.slice(0,start)+val.slice(end);}
if(moveSelection){setSelection(el,start,start);}};deleteSelectedText=function(el){var sel=getSelection(el);deleteText(el,sel.start,sel.end,true);};extractSelectedText=function(el){var sel=getSelection(el),val;if(sel.start!=sel.end){val=el.value;el.value=val.slice(0,sel.start)+val.slice(sel.end);}
setSelection(el,sel.start,sel.start);return sel.text;};insertText=function(el,text,index,moveSelection){var val=el.value,caretIndex;el.value=val.slice(0,index)+text+val.slice(index);if(moveSelection){caretIndex=index+text.length;setSelection(el,caretIndex,caretIndex);}};replaceSelectedText=function(el,text){var sel=getSelection(el),val=el.value;el.value=val.slice(0,sel.start)+text+val.slice(sel.end);var caretIndex=sel.start+text.length;setSelection(el,caretIndex,caretIndex);};surroundSelectedText=function(el,before,after){var sel=getSelection(el),val=el.value;el.value=val.slice(0,sel.start)+before+sel.text+after+val.slice(sel.end);var startIndex=sel.start+before.length;var endIndex=startIndex+sel.length;setSelection(el,startIndex,endIndex);};function jQuerify(func,returnThis){return function(){var el=this.jquery?this[0]:this;var nodeName=el.nodeName.toLowerCase();if(el.nodeType==1&&(nodeName=="textarea"||(nodeName=="input"&&el.type=="text"))){var args=[el].concat(Array.prototype.slice.call(arguments));var result=func.apply(this,args);if(!returnThis){return result;}}
if(returnThis){return this;}};}
$.fn.extend({getSelection:jQuerify(getSelection,false),setSelection:jQuerify(setSelection,true),collapseSelection:jQuerify(collapseSelection,true),deleteSelectedText:jQuerify(deleteSelectedText,true),deleteText:jQuerify(deleteText,true),extractSelectedText:jQuerify(extractSelectedText,false),insertText:jQuerify(insertText,true),replaceSelectedText:jQuerify(replaceSelectedText,true),surroundSelectedText:jQuerify(surroundSelectedText,true)});});})(jQuery);
function getSelectedText(expr)
{var obj=$(expr);var selectedText="";var dataAttrStart='tagSelectionStart';var dataAttrEnd='tagSelectionEnd';obj.focus();var start,end;if(document.selection&&document.selection.createRange)
{start=jqData(expr,dataAttrStart);end=jqData(expr,dataAttrEnd);obj.setSelection(start,end);selectedText=obj.getSelection().text;}
else if(typeof(obj)!=="undefined")
{selectedText=obj.getSelection().text;}
return selectedText;}
function insertPseudoTag(expr,pTag,cTag,text)
{var obj=$(expr);var dataAttrStart='tagSelectionStart';var dataAttrEnd='tagSelectionEnd';if(pTag!==undefined&&pTag!=null)
{pTag='['+pTag+']';}
else
{pTag='';}
if(cTag!==undefined&&cTag!=null)
{cTag='[/'+cTag+']';}
else
{cTag='';}
obj.focus();var selection=obj.getSelection();var start=selection.start;var end=selection.end;if(document.selection&&document.selection.createRange){start=jqData(expr,dataAttrStart);end=jqData(expr,dataAttrEnd);}
if(end-start>0)
{obj.setSelection(start,end);if(text===undefined)
text=obj.getSelection().text;start+=pTag.length;end=start+text.length;obj.replaceSelectedText(pTag+text+cTag);obj.setSelection(start,end);jqData(expr,dataAttrStart,start);jqData(expr,dataAttrEnd,end);}
else
{var newtext='';if(text!==undefined)
{newtext=pTag+text+cTag;}
else
{newtext=pTag+cTag;}
obj.insertText(newtext,start);start+=pTag.length;obj.setSelection(start,start);jqData(expr,dataAttrStart,start);}
obj.focus();var columns=obj.prop('cols');var selectionRow=(start-(start%columns))/columns;var lineHeight=obj.prop('clientHeight')/obj.prop('rows');obj.scrollTop(lineHeight*selectionRow);obj.keydown();obj.keyup();obj.keypress();}
function jqNext(expr,selector)
{return $(expr).next(selector);}
function readConsolidatedCookie(prefix,name)
{var cookies=Cookies.get();for(var cookieName in cookies)
{if(cookies.hasOwnProperty(cookieName))
{if(cookieName.lastIndexOf(prefix,0)==0)
{var consolidatedCookies={};cookies[cookieName].replace(/([^=&]+)=([^&]*)/g,function(match,nameGroup,valueGroup){consolidatedCookies[decodeURIComponent(nameGroup)]=decodeURIComponent(valueGroup);});var value=consolidatedCookies[name];if(value=="true")
return true;else if(value=="false")
return false;else
return value;}}}
return null;}
function removeEmbedTag(expr,elementId,embedType)
{var textArea=$(expr);if(textArea!=null)
{var txt="\\[embed="+embedType+" "+elementId+"\\]";var regx=new RegExp(txt,"gi");textArea.val(textArea.val().replace(regx," "));}}
function toggleInputExpansion(inputExpr,toggleExpr,expandedClass,collapsedClass)
{var $inputExpr=$(inputExpr),$toggleExpr=$(toggleExpr),height=$inputExpr.height();$inputExpr.height($toggleExpr.hasClass(collapsedClass)?height*3:height/3);$toggleExpr.toggleClass(expandedClass);$toggleExpr.toggleClass(collapsedClass);}
function selectElementById(id)
{var element=document.getElementById(id);if(element.tagName=="TEXTAREA"||(element.tagName=="INPUT"&&element.type=="text"))
{element.select();return;}else if(window.getSelection)
{var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(element);selection.removeAllRanges();selection.addRange(range);}else if(document.selection)
{var range=document.body.createTextRange();document.selection.empty();range.moveToElementText(element);range.select();}else
{alert("This feature is not supported by your browser.");}}
function formatCodeSnippets(classToSearch,idPrefix,buttonsEnabled,openInNewWindowButtonEnabled,isIE)
{var maxMagnitude=10000;var magnitude=1;$("."+classToSearch+" pre").each(function(index){var snippetNumber=index+1;var snippetId=idPrefix+"-"+snippetNumber;var text="<code>";var p=$("p",$(this)).last();if(p){p.contents().unwrap();$("p",$(this)).replaceWith(function(){return $(this).text()+"\n";});}
$(this).text().split(/\r\n?|\n/).forEach(function(item,index){text+="<span>"+$('<div/>').text(item).html()+"\n</span>";var lineNum=index+1;var log10=Math.log(lineNum)/Math.LN10;if(log10===parseInt(log10,10)&&lineNum<=maxMagnitude)
magnitude=lineNum;});text+="</code>";$(this).html(text);var code=$(this).find("code");code.attr("id",snippetId);code.addClass("code-"+magnitude);code.addClass("nolinks");if(buttonsEnabled){var button=$("<button>");button.attr({"name":"codeSnippetId","type":"button","value":snippetId,"class":"button"});$("<span>").text("Select all").appendTo(button);if(openInNewWindowButtonEnabled){var a=$("<a>");a.attr({"href":"/viewCodeSnippet.jsp?codeSnippetId="+snippetId.replace("code-",""),"target":"_blank","class":"button"});$("<span>").text("Open in new window").appendTo(a);}
var p=$("<p>");p.addClass("buttons");p.append(button);p.append(a);$(this).after(p);button.on("click",function(){var id=$(this).attr("value");if(isIE)
$("#"+id).addClass("no-line-numbers");selectElementById(id);return false;});}});}
function createFormAndSubmit(elementId,iFrameId,formAction,callback,encoding)
{var iFrame=document.getElementById(iFrameId);var input=document.getElementById(elementId);if(iFrame==null)
{try{iFrame=document.createElement("<iframe name='"+iFrameId+"'/>");}catch(ex){iFrame=document.createElement("IFRAME");iFrame.name=iFrameId;}
iFrame.src="";iFrame.id=iFrameId;iFrame.style.width=0;iFrame.style.height=0;iFrame.style.visibility="hidden";iFrame.style.display="none";document.body.appendChild(iFrame);}
var form=document.createElement("FORM");document.body.appendChild(form);form.method="POST";form.target=iFrameId;if(encoding==null)
{form.encoding="multipart/form-data";}
else
{form.encoding=encoding;}
form.onsubmit="return false;";form.action=formAction;form.style.display="none";form.appendChild(input);form.submit();document.body.removeChild(form);if(callback!=null)
callback();}
function jqEach(expr,fn)
{$(expr).each(fn);}
function iframeLoaded(doc)
{if(doc.body.innerHTML.indexOf('413 Request Entity Too Large')!=-1)
{jqSetHtml('.file-manager .loader','The file uploaded was too large. The maximum size is 50 MB.');jqAddClass('.file-manager .loader','errorSection');jqRemoveClass('.file-manager .loader','progress');jqRemoveClass('.file-manager .loader','loader');}}
function parseJSON(jsonString)
{return jQuery.parseJSON(jsonString);}
function removeValueFromCSVList(csvEleName,value)
{var ele=document.getElementsByName(csvEleName)[0];var numArray=new Array();numArray=ele.value.split(",");var i;for(i=0;i<numArray.length;i++)
{if(numArray[i]==value)
{numArray.splice(i,1);ele.value=numArray.join(",");return true;}}
return false;}
function jqStyleFileInputs(){if(!$.support.opacity){return false;}
$(".file input").each(function(i){var file=$(this),div=file.parent(),wrapper=div.parent(),span=$("<span> </span>"),fx,fy;div.mousemove(function(e){var offset=div.offset(),left=offset.left,top=offset.top;if(!fx){fx=file.width()*3/5;}
if(!fy){fy=file.height()/2;}
file.css({left:e.pageX-left-fx,top:e.pageY-top-fy});})
.css({height:div.css("height"),position:"relative",width:div.css("width")})
.append(span);file.change(function(e){var text=file.val();if(text.length>12&&(text.substring(0,13)=="C:\\fake_path\\")){text=text.substring(13);}
span.text(text);})
.css({cursor:"pointer",opacity:0,position:"absolute",zIndex:8000});wrapper.addClass("faux-file");});}
function jqSyncPost(url,data,callback,type)
{$.ajax({type:'POST',url:url,data:data,success:callback,dataType:type,async:false});}
function jqUnbind(expr,type,fn){return jqOff(expr,type,null,fn);}
function jqPostForm(url,formExpr,callback,type)
{return $.post(url,$(formExpr).serializeArray(),callback,type);}
var ModelessDialogUtil={};ModelessDialogUtil.CLASS_OPEN='modelessDialogOpen';ModelessDialogUtil.CLASS_TOP='top';ModelessDialogUtil.CLASS_RIGHT='right';ModelessDialogUtil.CLASS_BOTTOM='bottom';ModelessDialogUtil.CLASS_LEFT='left';ModelessDialogUtil.m_TriggerDialogMap={};ModelessDialogUtil.register=function(triggerSelector,dialogSelector)
{var triggerDialog=ModelessDialogUtil.m_TriggerDialogMap[dialogSelector];if(triggerDialog===undefined||!triggerDialog)
{triggerDialog={};triggerDialog.trigger=$(triggerSelector);triggerDialog.dialog=$(dialogSelector);ModelessDialogUtil.m_TriggerDialogMap[dialogSelector]=triggerDialog;}
return triggerDialog;}
ModelessDialogUtil.unregister=function(dialogSelector)
{var triggerDialog=ModelessDialogUtil.m_TriggerDialogMap[dialogSelector];ModelessDialogUtil.m_TriggerDialogMap[dialogSelector]=undefined;return triggerDialog;}
ModelessDialogUtil.closeAll=function()
{Object.keys(ModelessDialogUtil.m_TriggerDialogMap).forEach(function(trigger)
{ModelessDialogUtil.close(trigger);});}
ModelessDialogUtil.close=function(dialogSelector)
{var triggerDialog=ModelessDialogUtil.m_TriggerDialogMap[dialogSelector];if(triggerDialog!==undefined)
{triggerDialog.trigger.removeClass(ModelessDialogUtil.CLASS_OPEN);triggerDialog.dialog.hide();}}
ModelessDialogUtil.open=function(triggerSelector,dialogSelector)
{ModelessDialogUtil.closeAll();var triggerDialog=ModelessDialogUtil.register(triggerSelector,dialogSelector);triggerDialog.trigger.addClass(ModelessDialogUtil.CLASS_OPEN);triggerDialog.dialog.removeClass(ModelessDialogUtil.CLASS_TOP+' '+ModelessDialogUtil.CLASS_RIGHT+' '+
ModelessDialogUtil.CLASS_BOTTOM+' '+ModelessDialogUtil.CLASS_LEFT);triggerDialog.dialog.show();var positionClasses=ModelessDialogUtil.calculatePositionClasses(triggerDialog)
for(var index=0;index<positionClasses.length;index++)
triggerDialog.dialog.addClass(positionClasses[index]);}
ModelessDialogUtil.toggle=function(triggerSelector,dialogSelector)
{var triggerDialog=ModelessDialogUtil.register(triggerSelector,dialogSelector);if(triggerDialog.dialog.is(':visible'))
ModelessDialogUtil.close(dialogSelector);else
ModelessDialogUtil.open(triggerSelector,dialogSelector);}
ModelessDialogUtil.calculatePositionClasses=function(triggerDialog)
{var headerHeight=getFixedHeaderOffset(false);var jqWindow=$(window);var windowWidth=jqWindow.innerWidth();var windowLeft=jqWindow.scrollLeft();var windowRight=windowLeft+windowWidth;var windowMidpointX=(windowLeft+windowRight)/2;var windowHeight=jqWindow.innerHeight();var windowTop=jqWindow.scrollTop();var windowBottom=windowTop+windowHeight;windowTop+=headerHeight;var windowMidpointY=(windowTop+windowBottom)/2;var triggerOffset=triggerDialog.trigger.offset();var triggerWidth=triggerDialog.trigger.outerWidth();var triggerLeft=triggerOffset.left;var triggerRight=triggerLeft+triggerWidth;var triggerMidpointX=(triggerLeft+triggerRight)/2;var triggerHeight=triggerDialog.trigger.outerHeight();var triggerTop=triggerOffset.top;var triggerBottom=triggerTop+triggerHeight;var triggerMidpointY=(triggerTop+triggerBottom)/2;var dialogOffset=triggerDialog.dialog.offset();var dialogWidth=triggerDialog.dialog.outerWidth();var dialogLeft=triggerDialog.dialog.offset().left;var dialogRight=dialogLeft+dialogWidth;var dialogHeight=triggerDialog.dialog.outerHeight();var dialogTop=triggerDialog.dialog.offset().top;var dialogBottom=dialogTop+dialogHeight;var positionClasses=[];if((dialogLeft<windowLeft)&&(triggerMidpointX<windowMidpointX))
positionClasses.push(ModelessDialogUtil.CLASS_LEFT);if((dialogRight>windowRight)&&(triggerMidpointX>windowMidpointX)&&((triggerLeft-dialogWidth)>windowLeft))
positionClasses.push(ModelessDialogUtil.CLASS_RIGHT);if((dialogTop<windowTop)&&(triggerMidpointY<windowMidpointY))
positionClasses.push(ModelessDialogUtil.CLASS_TOP);if((dialogBottom>windowBottom)&&(triggerMidpointY>windowMidpointY)&&((triggerTop-dialogHeight)>windowTop))
positionClasses.push(ModelessDialogUtil.CLASS_BOTTOM);return positionClasses;}
function modelessDialogUnregister(dialogSelector)
{ModelessDialogUtil.unregister(dialogSelector);}
function jqParam(json)
{return jQuery.param(json);}
function updateJSONAndLoad(oldJson,newName1,newValue1,newName2,newValue2)
{var json=updateJSON(oldJson,newName1,newValue1,newName2,newValue2);window.location=window.location.pathname+'?'+jqParam(json);}
var DeviceCategory={};DeviceCategory.isDesktop=function()
{return $('body').hasClass("desktop");}
DeviceCategory.isPhone=function()
{return $('body').hasClass("phone");}
DeviceCategory.isTablet=function()
{return $('body').hasClass("tablet");}
function topicSearchAsyncAutocomplete(asyncUrl,textInput,outerWrapperClass,topicListWrapperSelector,maxResults,maxSelectionAllowed,fromCourses,includeProposed,taidParamName,addedParamName,removedParamName,suffix,allowNewTopicProposals,allowTopicsByContent,contentSearchParamSources,selectedCallbackFunction)
{var errorCodesForDisplay=[0,10,20,30,60,80,90];var proposedParam=includeProposed?"&includeProposedTopics":"";var onlyShowOne=maxSelectionAllowed==1;allowNewTopicProposals=allowNewTopicProposals!==undefined?allowNewTopicProposals:false;var outerWrapperClassSelector='.'+outerWrapperClass;allowTopicsByContent=allowTopicsByContent!==null?allowTopicsByContent:false;$(function()
{if(isSearchTopicsByContent())
$(outerWrapperClassSelector+' .addTopicsWrapper.recommendedTopicsList').addClass('closed');$(outerWrapperClassSelector+' .clearTopics').click(function(e)
{$(outerWrapperClassSelector+' .selectedTopic').each(function(index)
{if($(this).find("input[name=proposedTAName]").length!==0)
{$(this).remove();}
else
{$(this).addClass("hidden");$(this).find("input[name="+taidParamName+"], input[name="+addedParamName+"]").attr("name",removedParamName);}});$(outerWrapperClassSelector+' input[name=topicsSearch]').val("");var errorSection=$(topicListWrapperSelector).parent().parent().children('.errorSection');errorSection.addClass('hidden');setClearButtonVisibility(topicListWrapperSelector,onlyShowOne,outerWrapperClassSelector);e.preventDefault();triggerChangeEvent();});textInput.on("mouseup, focus",function(e)
{if(isSearchTopicsByContent())
textInput.autocomplete("search");});$(outerWrapperClassSelector+' .addTopicsWrapper').click(function(e)
{if(isSearchTopicsByContent())
{textInput.autocomplete("search");textInput.focus();var firstSectionSelection=$(e.target).parents('.topicsearchwrapper .ui-autocomplete, .topicsSelectorWrapper .selectedTopic');if(firstSectionSelection.length>0||$(e.target).hasClass('clearTopics'))
{$('.addTopicsWrapper.recommendedTopicsList ').addClass('closed');}
else
{$('.addTopicsWrapper.recommendedTopicsList ').toggleClass('closed');}}});$(outerWrapperClassSelector+' .topicListwrapper').on("click",".removeButton",function(e)
{$(this).parent('.selectedTopic').addClass("hidden");$(this).next().attr("name",removedParamName);var errorSection=$(topicListWrapperSelector).parent().parent().children('.errorSection');errorSection.addClass('hidden');setClearButtonVisibility(topicListWrapperSelector,onlyShowOne,outerWrapperClassSelector);$(this).trigger("removeTopicEvent");triggerChangeEvent();});var autocomp_opt={autoFocus:true,source:function(request,response)
{if(typeof(CKEDITOR)!=="undefined")
{for(instance in CKEDITOR.instances){CKEDITOR.instances[instance].updateElement();}}
$.ajax({url:asyncUrl+textInput.val(),dataType:"json",type:"post",data:$(topicListWrapperSelector).parents('FORM').serialize()+getAutoSuggestedIds()+"&maxRows="+maxResults+"&term="
+request.term+"&isCourse="+fromCourses+proposedParam+"&suffix="+(suffix!="null"?suffix:"")
+"&allowNewTopicProposals="+allowNewTopicProposals+"&"+getSearchMode(),success:function(data)
{if(data.length>0)
{$(outerWrapperClassSelector+' .topicsEmpty').addClass('hidden');}
else
{$(outerWrapperClassSelector+" .topicsSelectorWrapper .dataLoadingWrapper").remove();}
if(isSearchTopicsByContent())
data=data["topicsByContent"];else
data=data["topicsByName"];if(!allowNewTopicProposals&&data!==undefined&&data.length===0)
{var matched=false;$.each($('.selectedTopic > .topicName'),function(key,element){matched=matched||$(element).text().toLowerCase()===textInput.val().toLowerCase();});var message="We do not currently have that topic, please try another.";if(matched!==undefined&&matched)
{message="Topic has already been added.";}
else if(!$('.topicListwrapper input[name=addedTAID]').length&&!textInput.val())
{message="Please enter a topic name.";}
data.push({name:message,id:0,current:true,isProposed:false,isValid:false});}
response($.map(data,function(item)
{return{label:item.name,value:item.id,proposed:item.isProposed,current:item.isCurrent,isValid:item.isValid,errorMessage:item.errorMessage,errorType:item.errorType,mainTopicId:item.mainTopicId,mainTopicName:item.mainTopicName}}))}})},focus:function(event,ui)
{event.preventDefault();$(outerWrapperClassSelector+" .ui-helper-hidden-accessible").hide();var menu=$(this).data("uiAutocomplete").menu.element,focused=menu.find("li:has(a.ui-state-active)");$(outerWrapperClassSelector+" LI.ui-menu-item").removeClass('selected');focused.addClass('selected');},select:function(event,ui)
{if(isSearchTopicsByContent())
$('.addTopicsWrapper.recommendedTopicsList').toggleClass('closed');if(ui.item.hasOwnProperty("isValid")&&!ui.item.isValid)
{return false;}
if(maxSelectionAllowed!==undefined&&maxSelectionAllowed>0)
{var countSelected=$(topicListWrapperSelector).children('.selectedTopic:not(.hidden)').length;if(countSelected>=maxSelectionAllowed)
{var errorSection=$(topicListWrapperSelector).parent().parent().children('.errorSection');errorSection.html("<ul><li>You may only select up to "+maxSelectionAllowed+" topics.</li></ul>");errorSection.removeClass('hidden');return false;}}
if(ui.item.hasOwnProperty("current")&&ui.item.current)
{createChildTopic(topicListWrapperSelector,ui.item.label,ui.item.label,ui.item.proposed,"proposedTAName");textInput.val('');textInput.focus();}
else
{var topicListChildren=topicListWrapperSelector.children('.selectedTopic.'+ui.item.value);if(!topicListChildren.length){createChildTopic(topicListWrapperSelector,ui.item.label,ui.item.value,ui.item.proposed,addedParamName);textInput.val('');textInput.focus();}
else if(topicListChildren.children('input[name="'+removedParamName+'"]').length)
{$(outerWrapperClassSelector+' .selectedTopic.'+ui.item.value).remove();textInput.val('');createChildTopic(topicListWrapperSelector,ui.item.label,ui.item.value,ui.item.proposed,taidParamName);}
else
{textInput.val('');textInput.focus();}
triggerChangeEvent();}
$(outerWrapperClassSelector+" .topicsSelectorWrapper .dataLoadingWrapper").remove();setClearButtonVisibility(topicListWrapperSelector,onlyShowOne,outerWrapperClassSelector);if(selectedCallbackFunction!=undefined&&selectedCallbackFunction!=null)
{var functionCall=window[selectedCallbackFunction];var functionParams=[];functionParams.push(ui.item.value);functionCall.apply(null,functionParams);}
return false;},messages:{noResults:"",results:function(){}},minLength:0,appendTo:textInput.parent(),closeOnSelect:true,open:function()
{if(isSearchTopicsByContent())
{$(outerWrapperClassSelector+' ul.ui-autocomplete').prepend('<li><div class="list-header">'
+'Recommended Topics: <a class="closeAutoComplete">close</a></div></li>');}
else
{$(outerWrapperClassSelector+' ul.ui-autocomplete').prepend('<li><div class="list-header">'
+'<a class="closeAutoComplete">close</a></div></li>');}
$(outerWrapperClassSelector+" .topicsSelectorWrapper .dataLoadingWrapper").remove();},search:function(event,ui)
{if(!$(event.target).is(":focus"))
{event.preventDefault();return;}
textInput.closest(".topicsSelectorWrapper").prepend("<div class='dataLoadingWrapper'>"+
"<div class='dataLoading' /></div>");},close:function()
{$(outerWrapperClassSelector+" .topicsSelectorWrapper .dataLoadingWrapper").remove()}};textInput.autocomplete(autocomp_opt).data("ui-autocomplete")._renderItem=function(ul,item)
{if(item.current!==undefined&&item.current)
{if(item.isValid!==undefined&&!item.isValid)
{if(errorCodesForDisplay.indexOf(item.errorType)!==-1)
{if(item.errorType===10)
{return $("<li class='invalid currentProposed'></li>").data("item.autocomplete",item)
.append("<a><span>"+item.errorMessage+"</span></a>").appendTo(ul);}
else
{return $("<li class='invalid currentProposed'></li>").data("item.autocomplete",item)
.append("<a><span class='proposeTopicTitle'>"+item.label+"</span><span>"
+item.errorMessage+"</span></a>").appendTo(ul);}}
else
{if(allowNewTopicProposals&&item.errorType===40)
{return $("<li class='invalid currentProposed'></li>").data("item.autocomplete",item)
.append("<a><span>Topic \""+item.mainTopicName+"\" has already been added.</span></a>").appendTo(ul);}
else if(item.errorType===70)
{if(item.mainTopicId!==undefined)
{var matched=false;$.each($('.selectedTopic > input[name="addedTAID"]'),function(key,element){matched=matched||$(element).val()==item.mainTopicId;});$.each($('.selectedTopic > input[name="taid"]'),function(key,element){matched=matched||$(element).val()==item.mainTopicId;});var message="We do not currently have that topic, please try another.";if(matched!==undefined&&matched)
{return $("<li class='invalid currentProposed'></li>").data("item.autocomplete",item)
.append("<a><span>Topic \""+textInput.val()+"\" is a synonym of topic \""+item.mainTopicName+"\" that has already been added</span></a>").appendTo(ul);}}
return $("<li></li>")
.data("item.autocomplete",item);}
else
{return $("<li class='invalid currentProposed'></li>").data("item.autocomplete",item)
.append("<a><span>Topic \""+item.mainTopicName+"\" has already been added.</span></a>").appendTo(ul);}}}
else
{return $("<li class='currentProposed'></li>").data("item.autocomplete",item).append("<a><span class='proposeTopicTitle'>"
+item.label+"</span><span>Propose as a new topic.</span></a>").appendTo(ul);}}
return $("<li></li>")
.data("item.autocomplete",item)
.append("<a>"+item.label+"</a>")
.appendTo(ul);};});function isSearchTopicsByContent()
{return allowTopicsByContent&&!$(outerWrapperClassSelector+" input[name=topicsSearch]").val();}
var getSearchMode=function()
{if(isSearchTopicsByContent())
{var byContentQueryParam="includeTopicsByContent";for(contentSearchParamIndex in contentSearchParamSources)
{byContentQueryParam+="&paramName="+contentSearchParamSources[contentSearchParamIndex];}
return byContentQueryParam;}
else
{return"includeTopicsByName";}}
function getAutoSuggestedIds()
{var query="";if(typeof(TopicSuggestionManager)!=='undefined'&&!TopicSuggestionManager.suggested)
{for(var topicIdIndex in TopicSuggestionManager.topicSuggestions)
{var addedTopicId=TopicSuggestionManager.topicSuggestions[topicIdIndex];if(!isNaN(addedTopicId))
{query+="&addedTAID="+addedTopicId;}}}
return query;}
$('.topicsSelectorWrapper').on('click','.closeAutoComplete',function(e)
{textInput.autocomplete('close');$(outerWrapperClassSelector+" .topicsSelectorWrapper .dataLoadingWrapper").remove();});textInput.keyup(function(e)
{var menu=$(this).data("uiAutocomplete").menu.element,focused=menu.find("li:has(a.ui-state-active)");$(outerWrapperClassSelector+" LI.ui-menu-item").removeClass('selected');focused.addClass('selected');});textInput.keydown(function(e)
{var key=e.keyCode||e.charCode;if(isSearchTopicsByContent()&&(key==$.ui.keyCode.UP||key==$.ui.keyCode.DOWN)&&$(outerWrapperClassSelector+' .addTopicsWrapper.recommendedTopicsList ').hasClass('closed'))
{textInput.autocomplete("search");}
if(isSearchTopicsByContent())
$(outerWrapperClassSelector+' .addTopicsWrapper.recommendedTopicsList ').removeClass('closed');if(key==$.ui.keyCode.BACKSPACE||key==$.ui.keyCode.DELETE)
{if(textInput.val()=='')
{var lastTopic=$(topicListWrapperSelector).children().not(".hidden").last();if(lastTopic.find("input[name=proposedTAName]").length!==0)
lastTopic.remove();else
{lastTopic.addClass("hidden");lastTopic.find("input[name="+taidParamName+"], input[name="+addedParamName+"]").attr("name",removedParamName);var errorSection=$(topicListWrapperSelector).parent().parent().children('.errorSection');errorSection.addClass('hidden');}
setClearButtonVisibility(topicListWrapperSelector,onlyShowOne,outerWrapperClassSelector);triggerChangeEvent();}}
dropdownScrollOnDownScroll(outerWrapperClassSelector);});textInput.keypress(function(e)
{if(e.which==$.ui.keyCode.ENTER)
return false;});$(window).scroll(function()
{dropdownScrollOnDownScroll(outerWrapperClassSelector);});window.onresize=function(e)
{dropdownScrollOnDownScroll(outerWrapperClassSelector);};onMobileScrollTop(outerWrapperClassSelector);$(outerWrapperClassSelector+' .topicsearchwrapper input').keyup(resizeInput);var triggerChangeEvent=function()
{topicListWrapperSelector.trigger({type:'topicListChange',topicCount:topicListWrapperSelector
.find("input[name="+taidParamName+"], input[name="+addedParamName+"]")
.length});};}
function resizeInput(){$(this).attr('size',$(this).val().length);}
function dropdownScrollOnDownScroll(outerWrapperClassSelector)
{if(!$(outerWrapperClassSelector+' .addTopicsWrapper').is(':visible'))
return;var scrollTop=$(window).scrollTop();var topOfDiv=$(outerWrapperClassSelector+' .addTopicsWrapper').offset().top;var bottomOfVisibleWindow=$(window).height();$(outerWrapperClassSelector+' .ui-autocomplete').css('max-height',bottomOfVisibleWindow-topOfDiv-40+scrollTop);}
function createChildTopic(topicListWrapperSelector,label,value,proposed,name)
{var proposedClass=(proposed!==undefined&&proposed)?" proposedTopic":"";topicListWrapperSelector.append('<div class="selectedTopic '+value+proposedClass+'">'
+'<div class="topicName">'+label+'</div>'
+'<div class="removeButton"></div>'
+'<input type="hidden" name="'+name+'" value="'+value+'">'
+'</div>');}
function onMobileScrollTop(outerWrapperClassSelector)
{if(DeviceCategory.isPhone()||DeviceCategory.isTablet())
{$(outerWrapperClassSelector+' .topicsearchwrapper input').click(function()
{$('html, body').animate({scrollTop:$(outerWrapperClassSelector+' .topicsearchwrapper').offset().top-100},'slow');});}}
function setClearButtonVisibility(topicListWrapperSelector,onlyShowOne,outerWrapperClassSelector)
{var lastTopic=$(topicListWrapperSelector).children().not(".hidden").last();if(lastTopic.length>0)
{$(outerWrapperClassSelector+' .clearTopics').toggle(true);if(onlyShowOne)
$(outerWrapperClassSelector+' INPUT.topicsearch').toggle(false);}
else
{$(outerWrapperClassSelector+' .clearTopics').toggle(false);if(onlyShowOne)
$(outerWrapperClassSelector+' INPUT.topicsearch').toggle(true);}}
$(".postAdd .topicsearchwrapper input, #listContent.feedList .topicsearchwrapper input, .postView .topicsearchwrapper input").each(function(){$(this).attr('size',$(this).attr('placeholder').length);});
function modelessDialogClose(dialogSelector)
{ModelessDialogUtil.close(dialogSelector);}
function modelessDialogToggle(triggerSelector,dialogSelector)
{ModelessDialogUtil.toggle(triggerSelector,dialogSelector);}
function jqAddJsonToForm(formExpr,json)
{var formJson=$(formExpr).serializeArray();if(json.constructor==Array)
for(var o in json)
if(json[o].name!==undefined&&json[o].value!==undefined)
{var input=$("<input>",{type:"hidden",name:json[o].name,value:json[o].value});$(formExpr).append($(input));}
return formJson;}
var cardUtilityIncluded=false;var cardUtilitiyIncludedArray=[];function cardUtility(wrapperSelector,htmlId,showFullTextOfPostAfterEdit,hideAfterDelete){if(cardUtilitiyIncludedArray.indexOf(wrapperSelector)==-1){cardUtilitiyIncludedArray.push(wrapperSelector);jqOn(wrapperSelector,'click','.post-utility',function(e){var utilitySection=$(e.target).parents('.row-content').find('.post-utility-section');var hidden=utilitySection.is(':visible');$('.post-utility-section').toggle(false);utilitySection.toggle(!hidden);e.preventDefault();});jqOn(wrapperSelector,'click','.post .cancel, .post .buttonsWrap .submit, .post .post-edit',function(e){var target=$(e.target).parents('.post');target.addClass('postCardLoading');});jqOn(wrapperSelector,'click','.post .post-edit',function(e){var target=$(e.target).parents('.post');var id=$(this).attr('data-id');if($(".editingPost").length){var popupContents="<div> Are you sure you want to discard current post edits?</div><a class=\"featherlight-close\">Cancel</a>"
+"<a class=\"discardPost\" data-id=\""
+id
+"\">Discard</a>";$.featherlight(popupContents,{variant:"deletePostFeatherlight"});}else{var asyncUrl='/async/editMemberPost.jsp?asid=editPost&iasid=editPost&componentHtmlId='
+htmlId
+'&show='
+showFullTextOfPostAfterEdit
+'&postId='+$(this).attr('data-id');jqAsyncPost(target,asyncUrl,function(e2){target.removeClass('postCardLoading');target.addClass('editingPost');movePreviewImage();});}
e.preventDefault();});jqOn(wrapperSelector,'click','.post .post-delete',function(e){var id=$(this).attr('data-id');var popupContents="<div> Are you sure you want to delete this post?<br/><br/>Deleting will remove the post from all "
+"feeds and make it inaccessible to members.</div><a class=\"featherlight-close\">Cancel</a>"
+"<a class=\"deletePost\" data-id=\""
+id
+"\">Delete</a>";$.featherlight(popupContents,{variant:"deletePostFeatherlight"});e.preventDefault();});jqOn(wrapperSelector,'click','.post .recommendToAll',function(e){var id=$(this).attr('data-id');var popupContents="<div> Are you sure you want to recommend this post?</div><a class=\"featherlight-close\">Cancel</a>"
+"<a class=\"recommendToAllButton\" data-id=\""
+id
+"\">Confirm</a>";$.featherlight(popupContents,{variant:"recommendPostFeatherlight"});e.preventDefault();});jqOn(wrapperSelector,'click','.post-utility-section .knowledgebase',function(e){$(this).children().html("<span>Edit Knowledgebase Entry</span>");$('.post-utility-section').toggle(false);});$(wrapperSelector).on('click','.post-utility-section a.hide',function(e){if($(this).hasClass('default'))
{var popupContents="<div><div class='warning'>"
+"<p class='featherlightHeader'>Customize Your Feed</p>"
+"<p class='featherlightDes'>Follow topics of interest and other members for a personalized feed experience.</p>"
+"<a class='featherlight-close'>No, thank you</a>"
+"<a class='customize' href='/walkthrough.jsp'>Customize my feed</a></div></div>";}
else
{var authorId=$(this).attr('data-author-id');var popupContents="<div><div class='warning'>"
+"<p class='featherlightHeader'>Are you sure you want to hide content by this member?</p>"
+"<p class='featherlightDes'>This will hide any content by this author from your feed.</p>"
+"<a class='featherlight-close'>Cancel</a>"
+"<a class='hideMember' data-id='"+authorId+"'>Hide</a></div></div>";}
$.featherlight(popupContents,{variant:"hideMemberFeatherlight"});e.preventDefault();});$('body').on('click','.hideMember',function(e){var authorId=$(this).attr('data-id');$('.row-content.author'+authorId).remove();$.post('/async/feed/createFeedMemberRelation.async',[{name:'hide',value:'true'},{name:'mid',value:authorId},{name:'typeId',value:'10'},{name:'asid',value:'hideMember'}]);$.featherlight.close();e.preventDefault();});}
if(!cardUtilityIncluded){$(document).mousedown(function(e){var popup=$(".post-utility-section");var postUtility=$(".post-utility")
if(!$('.hidden').is(e.target)&&!popup.is(e.target)&&popup.has(e.target).length==0&&!postUtility.is(e.target)&&!postUtility.is($(e.target).parent())){popup.hide();}});jqOn('body','click','.discardPost',function(e){$('.feedList .cancel').click();var id=$(this).attr('data-id');var target=$('.post'+id);var asyncUrl='/async/editMemberPost.jsp?asid=editPost&iasid=editPost&componentHtmlId='
+htmlId
+'&show='
+showFullTextOfPostAfterEdit
+'&postId='+$(this).attr('data-id');jqAsyncPost(target,asyncUrl,function(e2){$(target).addClass('editingPost');movePreviewImage();$.featherlight.close();});e.preventDefault();});jqOn('body','click','.deletePost',function(e){var id=$(this).attr('data-id');var asyncUrl='/async/editMemberPost.jsp?asid=deletePost&iasid=deletePost&componentHtmlId='
+htmlId
+'&show='
+showFullTextOfPostAfterEdit
+'&asyncAction=DELETE&postId='+id;jqAsyncPost($('.post'+id),asyncUrl,function(e2){if(hideAfterDelete){$('.post'+id).toggle(false);}
$('.post'+id).addClass('deleted');});$.featherlight.close();e.preventDefault();});jqOn('body','click','.post-spam',function(e){var id=$(this).attr('data-id');var asyncUrl='/async/editMemberPost.jsp?asid=postSpam&iasid=postSpam&componentHtmlId='
+htmlId+'&asyncAction=MARK_AS_SPAM&postId='+id;jqAsyncPost($('.post'+id),asyncUrl);e.preventDefault();});jqOn('body','click','.post-seoindex',function(e){var id=$(this).attr('data-id');var asyncUrl='/async/editMemberPost.jsp?asid=postSeoIndex&iasid=postSeoIndex&componentHtmlId='
+htmlId+'&asyncAction=MARK_AS_INDEXED&postId='+id;jqAsyncPost($('.post'+id),asyncUrl);e.preventDefault();});jqOn('body','click','.recommendToAllButton',function(e){var id=$(this).attr('data-id');var asyncUrl='/async/editMemberPost.jsp?asid=recommendToAll&iasid=recommendToAll&componentHtmlId='
+htmlId+'&asyncAction=MARK_AS_RECOMMENDED&postId='+id;jqAsyncPost($('.post'+id),asyncUrl);$.featherlight.close();e.preventDefault();});jqOn('body','click','.pinItem',function(e){var refType=$(this).data('reftype');var refID=$(this).data('refid');var taid=$(this).data('taid');var params={refType:refType,refID:refID,taid:taid};apiCall('VendorPage:pinItem',params,function(e)
{window.location.href=window.location.href;},function(e){console.log('Error');},this,false);e.preventDefault();});cardUtilityIncluded=true;}}
var commentPreviousLoadRegistered=[];function commentPreviousLoad(htmlId,commentsToLoad)
{if(commentPreviousLoadRegistered.indexOf(htmlId)==-1)
{commentPreviousLoadRegistered.push(htmlId);$(htmlId).on('click','A.more-results:not(.question .more-results)',function(event)
{event.preventDefault();var contentWrapper=$(event.target).parents('.row-content');var contentWrapperId=contentWrapper.attr('id');var rtid=$(this).attr("data-rtid");var refid=$(this).attr("data-refid");var firstCommentInList=contentWrapper.find('.comment:first');var lastCommentId=firstCommentInList.attr("data-id");var htmlId='answerOrCommentViewAsyncWrap'+'-'+rtid+'-'+refid;jqAsyncPost(contentWrapper.find('.newCommentsWrapper'),'/async/viewPreviousComments.async?rtid='+rtid+'&refID='+refid+'&asid='+htmlId+'&iasid='+htmlId+'&componentHtmlId='+htmlId+'&comid='+lastCommentId+'&loadPrevious=true .comments',null,function(e){moveLoadedComments(contentWrapperId,commentsToLoad,firstCommentInList);});return false;});}}
function moveLoadedComments(contentWrapperId,commentsToLoad,firstCommentInList)
{var contentWrapper=$('#'+contentWrapperId);var newComments=contentWrapper.find('.newCommentsWrapper .comments .comment');var amountOfComments=newComments.length;var moreCommentsWrapper=contentWrapper.find('.moreCommentsWrapper');moreCommentsWrapper.after(newComments);contentWrapper.find(".moreCommentsWrapper .more-results").toggle(false);contentWrapper.find('.newCommentsWrapper .comments').remove();cardHeightOverflow();avatarHoverPopup('.avatarWrap','extras');votersHoverIntents('.voters-hover-wrap','/async/voters.jsp');}
function featherlightOn(expr,events,selector,content,configuration)
{$(expr).on(events,selector,function(e){$.featherlight(content,configuration);e.preventDefault;});}
function scrollToElement(scrollerExpr,elementExpr,duration,paddingParam,scrollUpOnly)
{var scroller;var currentScroll;var element=$(elementExpr);var padding=paddingParam?paddingParam:0;var scrollTo;if(scrollerExpr!=undefined)
{scroller=currentScroll=$(scrollerExpr);scrollTo=scroller.scrollTop()+element.offset().top-scroller.offset().top-padding;}
else
{scroller=$("html, body");currentScroll=$(document);scrollTo=element.offset().top-padding;}
if(scrollUpOnly&&scrollTo>=currentScroll.scrollTop())
{return;}
if(duration)
{scroller.animate({scrollTop:scrollTo},duration);}
else
{scroller.scrollTop(scrollTo);}}
var SocketEventManager=SocketEventManager||{};SocketEventManager.registerForEvent=function(event,callback)
{SocketEventManager.subscriptions=SocketEventManager.subscriptions||{};SocketEventManager.registered=SocketEventManager.registered||{};SocketEventManager.subscriptions[event]=callback;};SocketEventManager.registerEvents=function()
{if('undefined' !==typeof socket&&socket!=null){for(var event in SocketEventManager.subscriptions)
{if(!SocketEventManager.registered[event])
{socket.on(event,SocketEventManager.subscriptions[event]);SocketEventManager.registered[event]=true;}}}};SocketEventManager.unregisterEvents=function()
{if('undefined' !==typeof socket&&socket!=null&&SocketEventManager&&typeof SocketEventManager.subscriptions!=='undefined'){for(var event in SocketEventManager.subscriptions)
{socket.removeAllListeners(event);SocketEventManager.registered[event]=false;}}
SocketEventManager.subscriptions={};};
function socketEventRegister(event,callback)
{SocketEventManager.registerForEvent(event,callback);}
function scrollToElementHeader(elementExpr,extraOffset)
{setTimeout(function()
{var offset=getFixedHeaderOffset();if(extraOffset!==undefined)
offset+=extraOffset;$('html, body').animate({scrollTop:$(elementExpr).offset().top-offset},'fast');return false;},50);}
var feedNotificationJoined=false;var currentFilterTypeId;function feedNotificationHandler(topicId,currentMemberId,filterTypeId,skipNotImmediate,isDefaultFeed)
{var feedEntryIds=[];currentFilterTypeId=filterTypeId;if(!feedNotificationJoined)
{feedNotificationJoined=true;function loadIds()
{$.ajax({url:"/async/generateFeedCards.jsp?asid=feedEntryGenerator&iasid=feedEntryGenerator"+
"&feedItemIds="+feedEntryIds.join()+"&feedFilterTypeId="+currentFilterTypeId+"&taid="+topicId,cache:false,success:function(html)
{var containdedRows=html.indexOf('row-content')>0;$(html).prependTo('#feedList .listContent').hide().slideDown();feedEntryIds=[];cardHeightOverflow();votersHoverIntents('#feedList .listContent .voters-hover-wrap','/async/voters.jsp');setTimeout(function()
{if(containdedRows)
scrollToElementHeader('#feedList');else
scrollToElementHeader('.successSection');},500);}});}
sioAddAttr(16,'feed');var feedRoomName='feedRoom'+topicId;sioEmit('joinRoom',{room:feedRoomName});sioOn(feedRoomName+'DataUpdate',function(data)
{if(data.contentId)
{if(data.memberId==currentMemberId&&data.isImmediate)
{feedEntryIds.push(data.contentId);console.log(data.contentId);if(feedEntryIds.length>1)
{$('.loadNewContent').fadeOut();}
loadIds();}
else if((data.memberId==currentMemberId||(data.memberId==0&&isDefaultFeed&&data.excluded!=currentMemberId))&&topicId==0&&!data.isImmediate&&!skipNotImmediate)
{feedEntryIds.push(data.contentId);$('.loadNewContent').fadeIn();}}});$('.loadNewContent').click(function(e)
{$('.loadNewContent').fadeOut();loadIds();e.preventDefault();});}}
function movePreviewImage()
{$(".previewImg img:not(.processed)").each(function(){var $source=$(this).attr("src");$(this).addClass('processed');$(this).parent().css({'backgroundImage':'url('+$source+')','height':($(".previewWrap a").outerHeight()+'px')});});}
$(document).ready(function(){movePreviewImage();});
function floatCardImages()
{$("#listContent .row-content.post .processed .wysiwyg-content a:not(.processed)").each(function(){$(this).addClass('processed');$(this).has('img.file-block').css({'float':'left'});});}
function filterFeed(e,dataAttribute,asyncUrl,targetSelector,containerSelector,feedFilterMoreLinkClass,feedfilterMoreListSelector,feedFilterMoreItemContainerSelector,taid,componentTargetSelector,infiniteScrollCallback,selectedUrl,pageTitle,topicLink,tabName,interestCategoryId)
{var filterLink=$(e.target).parent('a');var filterCode=filterLink.attr(dataAttribute);var filterListItem=filterLink.closest('li');var container=$(containerSelector);container.find('.selected').removeClass('selected');filterListItem.addClass('selected');if(filterLink.hasClass(feedFilterMoreLinkClass))
{container.find(feedfilterMoreListSelector+' span:first').html(filterLink.children('span').html());filterLink.parents('ul:first').addClass('selected');}
else
{container.find(feedfilterMoreListSelector+' span:first').html("More");$(feedFilterMoreItemContainerSelector).hide();}
$(targetSelector).css({opacity:0.5});$(targetSelector).load(asyncUrl,{feedFilterTypeId:filterCode,asid:'filterFeed',iasid:'filterFeed',taid:taid,interestCategoryId:interestCategoryId,componentHtmlId:'feedList'},function()
{var self=$(this);self.replaceWith(self.children());if($(componentTargetSelector).data('jscroll')!==undefined)
{$(componentTargetSelector).jscroll.destroy();$(componentTargetSelector).removeData('jscroll');$('.jscroll-added').remove();}
jScrollAdd(componentTargetSelector,'<div class=""> </div>','div.jscroll-next a:last','div.row-contents',false,true,false,infiniteScrollCallback);$(targetSelector).css({opacity:1});infiniteScrollCallback();});if(interestCategoryId<=0)
{var currentUrl=location.href
var parameterStart=currentUrl.indexOf("?");history.replaceState(selectedUrl,pageTitle,selectedUrl+(parameterStart>=0?currentUrl.substring(parameterStart):''));document.title=pageTitle;var breadcrumbText=$('#breadcrumb .body').html();var pos=breadcrumbText.split("&gt;",2).join("&gt;").length;breadcrumbText=breadcrumbText.substring(0,pos)+"&gt; "+topicLink+" &gt; "+tabName;$('#breadcrumb .body').html(breadcrumbText);}
e.preventDefault();}
function jumpToWritePostQuestion(postFormSelector,postIsQuestion)
{$(postFormSelector+" input[name='postIsQuestion'][value='"+postIsQuestion+"']").click();$(postFormSelector+" textarea").focus();}
var LazyLoader={};LazyLoader.scrollIntervalSet=false;LazyLoader.didScroll=false;LazyLoader.initialized=false;LazyLoader.loadersInitialized={};LazyLoader.loadersSelectors={};LazyLoader.loadingClass;LazyLoader.loaders=[];LazyLoader.initialize=function(loadersSelector,loadingClass)
{LazyLoader.loadersSelectors[loadersSelector]=loadersSelector;LazyLoader.loadingClass=loadingClass;if(!LazyLoader.initialized)
{$(window).scroll(LazyLoader.windowScroll);$(document).ready(LazyLoader.setScrollLoadpoints);$(window).resize(LazyLoader.setScrollLoadpoints);LazyLoader.initialized=true;}
else
{LazyLoader.setScrollLoadpoints();}};LazyLoader.reset=function(loaderSelector,loadingClass)
{LazyLoader.loaders=[];LazyLoader.scrollIntervalSet=false;LazyLoader.didScroll=false;LazyLoader.initialized=false;LazyLoader.loadersInitialized=false;LazyLoader.initialize(loaderSelector,loadingClass);}
LazyLoader.reload=function(loaderSelector,callback)
{$.each($(loadersSelector),function(index,value)
{var asyncUrl=$(this).attr('data-asyncUrl');var loaded=$(this).attr('data-loaded');if(loaded&&asyncUrl)
{$(this).empty();$(this).addClass(LazyLoader.loadingClass);$(this).load(asyncUrl,function()
{$(this).removeClass(LazyLoader.loadingClass);$(this).trigger("loaded");if(typeof callback=="function")
callback();});}});}
LazyLoader.windowScroll=function()
{LazyLoader.didScroll=true;if(!LazyLoader.scrollIntervalSet)
{setInterval(LazyLoader.checkScroll,250);LazyLoader.scrollIntervalSet=true;}};LazyLoader.checkScroll=function()
{if(LazyLoader.didScroll)
{LazyLoader.didScroll=false;LazyLoader.checkLoaders();}
else
{clearInterval(LazyLoader.checkScroll);LazyLoader.scrollIntervalSet=false;}};LazyLoader.populateLoaders=function()
{for(loadersSelector in LazyLoader.loadersSelectors)
{if(!LazyLoader.loadersInitialized[loadersSelector])
{$.each($(loadersSelector),function(index,value)
{LazyLoader.addLoader($(this));});LazyLoader.loadersInitialized[loadersSelector]=true;}}};LazyLoader.checkLoaders=function()
{var scrollPosition=Math.floor($(window).scrollTop());var visibleTop=scrollPosition;var visibleBottom=visibleTop+window.innerHeight;$.each(LazyLoader.loaders,function(index,value)
{var loader=LazyLoader.loaders[index];if(!loader.loaded&&loader.topOffset>=visibleTop&&loader.topOffset<visibleBottom)
{loader.loaded=true;loader.item.load(loader.asyncUrl,function()
{loader.item.removeClass(LazyLoader.loadingClass);loader.item.trigger("loaded");loader.item.attr('data-loaded','true');});}});};LazyLoader.addLoader=function(loaderItem)
{var loader={item:loaderItem,asyncUrl:loaderItem.attr('data-asyncUrl'),loaded:false};LazyLoader.loaders.push(loader);};LazyLoader.setScrollLoadpoints=function()
{LazyLoader.populateLoaders();$.each(LazyLoader.loaders,function(index,value)
{var loader=LazyLoader.loaders[index];loader.topOffset=Math.floor($(loader.item).offset().top);});LazyLoader.checkLoaders();};
function lazyLoaderInitialize(loaderSelector,loadingClass)
{LazyLoader.initialize(loaderSelector,loadingClass);}
function lazyLoaderReset(loaderSelector,loadingClass)
{LazyLoader.reset(loaderSelector,loadingClass);}
function linkPreview(htmlFormIdSelector,fullInputSelector,inputSelector,previewWrapperSelector)
{$(document).ready(function()
{var debounceLink=jqDebounce(500,false,function()
{inputSelectorJQ=$(fullInputSelector);if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(inputSelectorJQ.val()))
{jqAsyncPostForm(previewWrapperSelector,"/async/linkPreview.async?asid=linkPreview&iasid=linkPreview",htmlFormIdSelector,function(e)
{if($('.link-preview-section .previewWrap').length>0)
{inputSelectorJQ.addClass('previewLoaded');movePreviewImage();}});}});$(htmlFormIdSelector).on("keyup, keypress, keydown",inputSelector,function(e)
{if(e.keyCode!==13&&!$(this).hasClass('previewLoaded'))
debounceLink();});$(htmlFormIdSelector).bind('paste',null,function(e){if(!e.keyCode){if(e.keyCode!==13&&!$(this).hasClass('previewLoaded'))
debounceLink();}});$(htmlFormIdSelector).on("click",".closePreview",function(e)
{$('.link-preview-section .previewWrap').remove();e.preventDefault();});});}
function toggleMonitoring(selector,anchorSelector,asyncUrl,parameters)
{var CLASS_MONITORING='monitoring';var element=$(selector);var anchor=$(anchorSelector);element.toggleClass(CLASS_MONITORING);$.post({url:asyncUrl,data:parameters,success:function(data)
{if(data['isMonitoring'])
element.addClass(CLASS_MONITORING);else
element.removeClass(CLASS_MONITORING);anchor.attr('title',data['title']);}});}
function updateBrowserUrl(parameterName,parameterValue,allowDuplicate)
{var currentUrl=location.href;var newUrl=addParameter(currentUrl,parameterName,parameterValue,allowDuplicate)
history.replaceState({},'',newUrl);}
function sioEmit(event,data){if('undefined' !==typeof socket&&socket!=null){socket.emit(event,data);}}
var ChatTracker={};ChatTracker.verboseDebugging=false;ChatTracker.initializied=false;ChatTracker.currentMemberId=0;ChatTracker.selectedMemberId=0;ChatTracker.selectedMemberName="";ChatTracker.chatRequestUrl=undefined;ChatTracker.liveTransferUrl=undefined;ChatTracker.interactionListUrl=undefined;ChatTracker.interactionListSelector=undefined;ChatTracker.chatSessionIds={};ChatTracker.chatRooms={};ChatTracker.requestingMemberId={};ChatTracker.sessionMemberIds={};ChatTracker.timerSelector=".timer";ChatTracker.updateStatusMessage=function(filter,message)
{var activeEntrySel=ChatTracker.interactionListSelector+' '+filter+' .chatState';$(activeEntrySel).html(message+'<span class="actionTime">'+ChatTracker.createTimeString()+'</span>');$(activeEntrySel).closest('.chat-consultant-list-item').addClass('new');}
ChatTracker.socketIoChatListener=function(data)
{if(ChatTracker.verboseDebugging)console.log('sioChat: ',data);if(data.type!='REQUEST')
return;var messageFilter='.pendingChats li[data-mid="'+data.memberId+'"]';var isEcho=false;switch(data.chatStatus)
{case'REQUEST_ECHO':isEcho=true;if(ChatTracker.verboseDebugging)
console.log("CT.socketIoChatListener: REQUEST_ECHO ",ChatTracker.interactionListUrl,ChatTracker.interactionListSelector);case'REQUESTED':if(ChatTracker.verboseDebugging&&!isEcho)
console.log("CT.socketIoChatListener: REQUESTED ",ChatTracker.interactionListUrl,ChatTracker.interactionListSelector);if(ChatTracker.interactionListUrl!==undefined&&ChatTracker.interactionListSelector!==undefined)
ChatTracker.reloadInteractionList();break;case'DENIED':ChatTracker.updateStatusMessage(messageFilter,'Request denied: ');break;case'CANCELLED':ChatTracker.reloadInteractionList();break;case'ACCEPTED':ChatTracker.chatSessionIds[data.memberId]=data.sessionId;ChatTracker.reloadInteractionList();ChatTracker.joinChatRoom(data.sessionId,null,ChatTracker.currentMemberId);break;case"EXPIRE":case"EXPIRETOAWAY":ChatTracker.updateStatusMessage(messageFilter,'Request timed out: ');break;default:if(ChatTracker.verboseDebugging)
console.error("CF.socketIoChatListener: Unknown chat status: "+data.chatStatus);}};ChatTracker.handleMemberStateEvent=function(e)
{if(ChatTracker.verboseDebugging)console.log("CT.handleMemberStateEvent: ",e);if(e.memberId==ChatTracker.selectedMemberId)
{if(e.memberTyping!==undefined)
ChatTracker.toggleTypingIndicator(e.memberTyping,false,e.sessionId);}};ChatTracker.joinChatRoom=function(sessionId,chatAlias,requestingMemberId)
{if(ChatTracker.chatRooms[sessionId]===undefined)
{if(ChatTracker.verboseDebugging)console.log("CT.jCR: Adding session ",sessionId,chatAlias);var chatRoom="chat-"+sessionId;sioEmit('joinRoom',{registerRoom:true,sessionId:sessionId,room:chatRoom,chatAlias:chatAlias});sioOn(chatRoom,function(e)
{ChatTracker.handleChatRoomEvent(e);});sioOn("message-"+sessionId,function(e)
{ChatTracker.handleChatMessageEvent(e);});sioOn("memberState-"+sessionId,function(e)
{ChatTracker.handleMemberStateEvent(e);});ChatTracker.chatRooms[sessionId]=sessionId;ChatTracker.requestingMemberId[sessionId]=requestingMemberId;}
else if(ChatTracker.verboseDebugging)
{console.log("CT.jCR: Session already present.",sessionId,chatAlias);}};ChatTracker.handleChatRoomEvent=function(data)
{if(ChatTracker.verboseDebugging)console.log("CF.handleChatRoomEvent: ",data);var activityEntyFilter='.activeChatSessions li[data-csid="'+data.sessionId+'"]';switch(data.chatStatus)
{case"end":ChatTracker.updateStatusMessage(activityEntyFilter,'Chat ended: ')
sioEmit('leaveRoom',{"room":"chat-"+data.sessionId});ChatTracker.sessionMemberIds[data.sessionId]=undefined;break;case"pause":ChatTracker.updateStatusMessage(activityEntyFilter,'Chat paused: ')
break;case"requesttime":ChatTracker.updateStatusMessage(activityEntyFilter,'More time requested: ')
break
case"denytime":ChatTracker.updateStatusMessage(activityEntyFilter,'More time request denied: ')
break
case"canceltime":ChatTracker.updateStatusMessage(activityEntyFilter,'Time purchase canceled: ')
break
case"addtime":case"unpause":ChatTracker.reloadInteractionList();break;case"accepttime":case"systemMessage":case"recommendContract":case"purchasetime":break;default:if(ChatTracker.verboseDebugging)
console.error("Unexpected chatSatus "+data.chatStatus);}};ChatTracker.handleClientListEvent=function(data,chatClientListSelector,blankStateSelector,preserveClientList)
{if(ChatTracker.verboseDebugging)console.log("CT.handleClientListEvent: '"+chatClientListSelector+"'",data);var clientListNode=$(ChatTracker.interactionListSelector+' .chatActivityLists ul');if(clientListNode.attr('data-mid')==data.mid)
return;var newStatus="chat-status-"+data.status;var setVisibilty=function(target)
{target.removeClass('chat-status-offline chat-status-online chat-status-away');target.addClass(newStatus);}
var entry=clientListNode.find('li[data-mid="'+data.mid+'"]');setVisibilty(entry);setVisibilty(entry.find('.avatar'));};ChatTracker.handleClientStatusEvent=function(data)
{if(ChatTracker.verboseDebugging)console.log("CT.handleClientStatusEvent: ",ChatTracker.getTimeStamp(),ChatTracker.selectedMemberId,data);if(data.mid==ChatTracker.selectedMemberId&&ChatTracker.getSessionIdForMemberId(data.mid)===undefined)
{ChatTracker.loadChatBody({memberId:data.mid,});}};ChatTracker.handleChatMessageEvent=function(data)
{if(ChatTracker.verboseDebugging)console.log("CT.hCME: ",data);ChatTracker.reloadInteractionList();};ChatTracker.getTimeStamp=function()
{return new Date().toTimeString();}
ChatTracker.createTimeString=function(timeValue)
{var timeMeridian=(timeValue)?new Date(timeValue):new Date();var fullTime=timeMeridian.toTimeString();return fullTime.substr(0,fullTime.lastIndexOf(':'));};ChatTracker.initializeInteractionList=function(listSelector,listUrl,reloadListPostProcessor)
{ChatTracker.interactionListSelector=listSelector;ChatTracker.interactionListUrl=listUrl;ChatTracker.reloadListPostProcessor=reloadListPostProcessor;};ChatTracker.reloadInteractionList=function()
{if(ChatTracker.verboseDebugging)console.log("CT.rIL: ",ChatTracker.interactionListSelector,ChatTracker.interactionListUrl);if(ChatTracker.interactionListSelector!==undefined&&ChatTracker.interactionListUrl!==undefined)
{$(ChatTracker.interactionListSelector).load(ChatTracker.interactionListUrl,{asid:'mcr',iasid:'mcr',},function(e)
{ChatTracker.reloadInteractionListCallback();});}}
ChatTracker.reloadInteractionListCallback=function(e)
{if(ChatTracker.verboseDebugging)console.log("CT.rILC: ");$(ChatTracker.interactionListSelector+' .activeChatSessions li').each(function(index)
{var memberId=$(this).attr("data-mid");var sessionId=$(this).attr("data-csid");if(ChatTracker.verboseDebugging)console.log("CT.rILC: memberId="+memberId+" sessionId="+sessionId);if(sessionId!==undefined)
{if(ChatTracker.sessionMemberIds[sessionId]===undefined)
{ChatTracker.sessionMemberIds[sessionId]=memberId;ChatTracker.joinChatRoom(sessionId,null,ChatTracker.currentMemberId);}}});if(ChatTracker.reloadListPostProcessor)
ChatTracker.reloadListPostProcessor();}
ChatTracker.setMemberId=function(memberId)
{ChatTracker.currentMemberId=memberId;};ChatTracker.setSelectedMemberId=function(memberId,memberName,sessionId)
{ChatTracker.selectedMemberId=memberId;ChatTracker.selectedMemberName=memberName;if(sessionId!==undefined)
{ChatTracker.setSessionMemberId(sessionId,memberId);ChatTracker.chatSessionIds[memberId]=sessionId;}
$(ChatTracker.clientListSelectors).each(function(index)
{$(ChatTracker.clientListSelectors[index]).children().each(function()
{$(this).toggleClass("selected",$(this).attr('data-mid')==memberId);});});};ChatTracker.setSessionMemberId=function(sessionId,memberId)
{ChatTracker.sessionMemberIds[sessionId]=memberId;};ChatTracker.getSessionIdForMemberId=function(memberId)
{for(var sessionId in ChatTracker.sessionMemberIds)
{if(ChatTracker.sessionMemberIds[sessionId]==memberId)
return sessionId;}
return undefined;};ChatTracker.initialize=function(currentMemberId,listSelector,listUrl,chatRequestUrl,liveTransferUrl,reloadListPostProcessor)
{if(ChatTracker.verboseDebugging)console.log("CT.initialize: ");if(!ChatTracker.initializied)
{ChatTracker.initializied=true;ChatTracker.chatRequestUrl=chatRequestUrl;ChatTracker.liveTransferUrl=liveTransferUrl;ChatTracker.currentMemberId=currentMemberId;ChatTracker.initializeInteractionList(listSelector,listUrl,reloadListPostProcessor);sioAddAttr(4,'chat');sioAddEventListener('chat',ChatTracker.socketIoChatListener);sioEmit('joinRoom','member-chat-clients');sioAddEventListener('client-status',ChatTracker.handleClientStatusEvent);}};$(function(e){$('#activeChats').on('click','.chat-consultant-list-item',function(e){$(this).removeClass('new');return true;});});
var liveActivityUtil=new LiveActivityUtil;function LiveActivityUtil()
{this.viewPortSelector='.liveViewportFooter';this.headingComponentSelector='.headingComponent';}
LiveActivityUtil.prototype.initialize=function(currentMemberId,listSelector,listUrl,headingBaseSelector)
{this.currentMemberId=currentMemberId;this.listSelector=listSelector;this.listUrl=listUrl;this.headingBaseSelector=headingBaseSelector;var util=this;ChatTracker.initialize(currentMemberId,listSelector,listUrl,this.toggleFragmentVisibility);ChatTracker.reloadInteractionListCallback();var listClickCallback=function(evt)
{var mid=$(this).data('mid');setTimeout(function(){window.open('/live?tschatClientsTab=conversations&mid='+mid,'_blank');},5);return true;}
var headerClickHandler=function(e)
{var footerSel=$(e.data.viewPortSelector);footerSel.toggleClass('smallHeader');var thisSel=$(this);thisSel.toggleClass('expand collapsed');thisSel.attr('title',(thisSel.hasClass('expand'))?'Expand':'Collapse');$.post('/async/memberPreferenceState.jsp',[{name:'memberPreferenceType',value:'10'},{name:'compType',value:'39'},{name:'uniqID',value:'liveSuggestions'},{name:'ruleValue',value:footerSel.hasClass('smallHeader')}]);return false;}
$(ChatTracker.interactionListSelector+' .chatActivityLists .chat-consultant-list-item').on('click',null,null,listClickCallback);var vp=$(util.viewPortSelector);if(!vp.find(util.headingComponentSelector).hasClass('smallHeader'))
vp.removeClass('smallHeader');$(this.headingBaseSelector+' .head .toggle').off('click').on('click',null,this,headerClickHandler);$(function(){window.setTimeout(function(){util.toggleFragmentVisibility();},300);});}
LiveActivityUtil.prototype.toggleFragmentVisibility=function(viewportRef)
{if(ChatTracker.verboseDebugging)console.info('toggleFramentVisibility');var viewPort=(viewportRef)?viewportRef:$(this.viewPortSelector);viewPort.toggle(viewPort.find('.activeChats .blank-state').hasClass('hidden'));};LiveActivityUtil.prototype.bindToActivityLists=function()
{var activityListClickHandler=function(evt)
{var mid=$(this).data('mid');setTimeout(function(){window.open('/live?tschatClientsTab=conversations&mid='+mid,'_blank');},5);return true;};$(ChatTracker.interactionListSelector+' .chatActivityLists .chat-consultant-list-item').on('click',null,null,activityListClickHandler);}
function liveActivityInit(currentMemberId, listSelector, listUrl, headingBaseSelector)
{
   liveActivityUtil.initialize(currentMemberId, listSelector, listUrl, headingBaseSelector);
}
var consultantListData={liveViewPortFooter:'.liveViewportFooter',formLoadTarget:'.suggestedChatConsultantsModel.type3 .formLoadTarget',formLoadTargetwrapper:'.suggestedChatConsultantsModel.type3 .formLoadTargetwrapper',resultsNode:'.suggestedChatConsultantsModel.type3 .results',conversationTab:'.tabliveSuggestionGroup.tabconversations',headerToggle:'.liveSuggestionsHeader .toggle',suggestedChatsContainerId:'#suggestedChatConsultantsModel',lazyLoadPoint:'.dataLoading.liveSuggestionsFooter',topicTab:'.tabliveSuggestionGroup.tabconsultants'}
var consultantList=function(){var bannerTarget=$('#topHeaderBannerWrap').children();if(bannerTarget.is('#infoBanner')){$('body').addClass('hasInfoBanner');}
if(bannerTarget.children().is('.baBalanceDueSoon')){$('body').addClass('hasBaBalanceDueSoonBanner');}
if(bannerTarget.is('#baPastDue')){$('body').addClass('hasBaPastDueBanner');}
if(bannerTarget.is('#downgradedFreeMemberBanner')){$('body').addClass('hasDowngradedBanner');}
if(bannerTarget.is('#netSurvey')){$('body').addClass('hasNetPromoterBanner');}
if(bannerTarget.is('#androidAppBanner')){$('body').addClass('hasAndroidBanner');}
if(bannerTarget.is('#verifyEmailBanner')){$('body').addClass('hasVerifyEmailBanner');}
if(bannerTarget.has('.cotmBanner').length){$('body').addClass('hasCotmBanner');}
$('#infoBanner .close .button.close').click(function(){$('body').removeClass('hasInfoBanner');});$('#baBalanceDueSoon .close').click(function(){$('body').removeClass('hasBaBalanceDueSoonBanner');});$('#downgradedFreeMemberBanner .closeSection.close').click(function(){$('body').removeClass('hasDowngradedBanner');});$('#netSurvey .closeSection.close').click(function(){$('body').removeClass('hasNetPromoterBanner');});$('#androidAppBanner .closeSection.close').click(function(){$('body').removeClass('hasAndroidBanner');});$('#cotmBanner .button.close').click(function(){$('body').removeClass('hasCotmBanner');});var stickyHeaders=(function(){var $stickies;var $member=$('.suggestedChatConsultantsModel.type3 .member');var load=function(stickies,target){if(typeof stickies==="object"&&stickies instanceof jQuery&&stickies.length>0){$stickies=stickies.each(function(){var $thisSticky=$(this);$thisSticky
.data('originalPosition',$thisSticky.position().top)
.data('originalHeight',$thisSticky.outerHeight());if($thisSticky.position().top===0){$thisSticky.addClass('sticky');}});target.off("scroll.stickies").on("scroll.stickies",function(event){_whenScrolling(event);});}};var _whenScrolling=function(event){var $scrollTop=$(event.currentTarget).scrollTop();$stickies.each(function(i){var $thisSticky=$(this),$stickyPosition=$thisSticky.data('originalPosition'),$newPosition,$nextSticky;if($stickyPosition<=$scrollTop){$newPosition=Math.max(0,$scrollTop-$stickyPosition);$nextSticky=$stickies.eq(i+1);if($nextSticky.length>0){$newPosition=Math.min($newPosition,($nextSticky.data('originalPosition')-$stickyPosition)-$thisSticky.data('originalHeight'));}}else{$newPosition=0;}
$thisSticky.attr('offset-top',$newPosition);if($thisSticky.attr('offset-top')>0){$stickies.removeClass('sticky');$thisSticky.addClass('sticky');}});};return{load:load};})();$(document).ready(function(){var mut2=new MutationObserver(function(){$(function(){$('.liveViewportFooter .suggestedChatConsultantsModel.type3 > .body').trigger('scroll.stickies');});});var mut1=new MutationObserver(function(){$(function(){stickyHeaders.load($('.liveViewportFooter .suggestedChatConsultantsModel.type3 .body .results > .topic'),$('.liveViewportFooter .suggestedChatConsultantsModel.type3 > .body'));$('.liveViewportFooter .suggestedChatConsultantsModel.type3 .member .details').each(function(){mut2.observe(this,{'attributes':true});});});});var $dataLoadingElement=$('.liveViewportFooter .suggestedChatConsultantsModel.type3 .dataLoading');if($dataLoadingElement.length){mut1.observe($dataLoadingElement[0],{'attributes':true});}});$(document).ready(function(){window.setTimeout(function(){if(window.innerWidth<=662){$('.liveViewportFooter').addClass('smallHeader');$('.liveSuggestionsHeader .head .toggle')
.removeClass('collapsed')
.addClass('expand')
.attr('title','Expand');}},310);});};consultantList();var loadForm=function(url)
{var doFormLoad=function()
{jqAsyncLoad(consultantListData.formLoadTarget,url,null,function()
{hideResults(footerBase);footerBase.find(consultantListData.topicTab).trigger('click');})};var footerBase=$(consultantListData.liveViewPortFooter);var lazyLoadPoint=footerBase.find(consultantListData.lazyLoadPoint);var toggle=footerBase.find(consultantListData.headerToggle);if(lazyLoadPoint.length==0)
{if(toggle.hasClass('expand'))
toggle.trigger('click');doFormLoad();}
else
{$('.liveSuggestionsFooter').on('loaded',function()
{doFormLoad();});toggle.trigger('click');}}
var hideResults=function($footerBase)
{if(!($footerBase))
$footerBase=$(consultantListData.liveViewPortFooter);$footerBase.find(consultantListData.resultsNode).addClass('hidden');$footerBase.find(consultantListData.formLoadTargetwrapper).removeClass('hidden');}
var completeForm=function(sentRequest){var $results=$(consultantListData.resultsNode);var $formPlaceholder=$(consultantListData.formLoadTarget);var $formPlaceholderWrapper=$(consultantListData.formLoadTargetwrapper);var mid=$formPlaceholderWrapper.find('input[name=mid]').val();$results.removeClass('hidden');$formPlaceholder.empty();$formPlaceholderWrapper.addClass('hidden');if(sentRequest!==false){if(ChatTracker)
ChatTracker.reloadInteractionList();var $conversationTab=$(consultantListData.conversationTab);if($conversationTab.length)
$conversationTab.trigger('click');var $memberDiv=$results.find('div[id^=suggested-member-'+mid+']');$memberDiv.find('.requestButton').addClass('hidden');$memberDiv.find('.Waiting').removeClass('hidden');}}
popupHandlerPort=function(){jQuery.fn.centerPopup=function(){this.css("position","fixed");this.css("left",(($(window).width()-this.outerWidth())/2)+$(window).scrollLeft()+"px");return this;}
var $dialog=$(".ui-dialog");var dialogInnerPopup=function(){$(".ui-dialog-content.popup").removeClass("popup");}
dialogInnerPopup();$(window.document).ajaxComplete(function(){dialogInnerPopup();});var $popup=$(".popup:not(.ui-dialog, .ui-dialog-content, #privateQuestionPopup, #post-preview, .post-preview, .section[id='confirmation-popup'])");popupPosHandler=function(){var popupOffsetTop=175;var windowHeight=$(window).height();var yLocPopup=parseInt($popup.offset().top);var isAdComponent=$('#header .adComponent').length;resetPopup=function(){$popup.css('top',popupOffsetTop);}
if(isAdComponent>0){if(windowHeight>768||yLocPopup<280){popupOffsetTop=279;}else{popupOffsetTop=175;}
resetPopup();}else
if(isAdComponent<1){if(windowHeight>768||yLocPopup<280){popupOffsetTop=279;}
if(windowHeight<734){popupOffsetTop=175;}
resetPopup();}}
popupInit=function(){if($popup.length>0){if($('#header .adComponent').length>0){popupPosHandler();}
$popup.centerPopup();$(window).scroll(function(){popupPosHandler();});$(window).resize(function(){popupPosHandler();$popup.centerPopup();});}}
popupInit();}
bpBrickHeight=function(){bpBrickHeightReset=function(){$('form .plan-title').css('height','');$('form .plan-description').css('height','');$('form .plan-price').css('height','');$('form .plans li').css('height','');};bpTitleHeight=function(){var brickHeightSubject=$('form .plan-title');var brickHeightArray=$(brickHeightSubject).map(function(){return $(this).height();}).get();var maxHeight=Math.max.apply(Math,brickHeightArray);$(brickHeightSubject).height(maxHeight);};bpDescHeight=function(){var brickHeightSubject=$('form .plan-description');var brickHeightArray=$(brickHeightSubject).map(function(){return $(this).outerHeight();}).get();var maxHeight=Math.max.apply(Math,brickHeightArray);$(brickHeightSubject).height(maxHeight);};bpPriceHeight=function(){var brickHeightSubject=$('form .plan-price');var brickHeightArray=$(brickHeightSubject).map(function(){return $(this).height();}).get();var maxHeight=Math.max.apply(Math,brickHeightArray);$(brickHeightSubject).height(maxHeight);};bpPlanHeight=function(){var brickHeightSubject=$('form .plans li');var brickHeightArray=$(brickHeightSubject).map(function(){return $(this).height();}).get();var maxHeight=Math.max.apply(Math,brickHeightArray);$(brickHeightSubject).height(maxHeight);};bpPlanOverall=function(){bpTitleHeight();bpDescHeight();bpPriceHeight();bpPlanHeight();};bpBrickRun=function(){if($('.editProfile .offeringSubscription')[0]){}
else if($('.ui-dialog-content .offeringUpgrade')[0]){}
else if($('.memberOfferingChangeAdmin')[0]){bpBrickHeightReset();bpPlanOverall();}
else if($('.offeringSubscription')[0]){bpBrickHeightReset();bpPlanOverall();}
else if($('.lockedMemberOfferingSubscription')[0]){bpBrickHeightReset();bpPlanOverall();}
else if($('.businessAccountLeave')[0]){bpBrickHeightReset();bpPlanOverall();}
else if($('.offeringUpgrade')[0]){bpBrickHeightReset();bpPlanOverall();};};clickedPqTabs=function(){$('.productTab .tab').on('click',function(){bpBrickRun();});};bpBrickRun();clickedPqTabs();$(window.document).ajaxComplete(function(){bpBrickRun();clickedPqTabs();});$(window).resize(function(){bpBrickRun();clickedPqTabs();});};
bpPlanCount=function(){bpPlanCountDo=function(){var bpPlanLength=$('form .plans li').length;var bpPlanLengthClass='plan-count-'+bpPlanLength;$('form .plans').removeClass(bpPlanLengthClass);$('form .plans').addClass(bpPlanLengthClass);};bpPlanCountRun=function(){if($('.memberOfferingChangeAdmin')[0]){bpPlanCountDo();}
else if($('.offeringSubscription')[0]){bpPlanCountDo();}
else if($('.lockedMemberOfferingSubscription')[0]){bpPlanCountDo();}
else if($('.businessAccountLeave')[0]){bpPlanCountDo();}
else if($('.offeringUpgrade')[0]){bpPlanCountDo();};};bpPlanCountRun();$(window.document).ajaxComplete(function(){bpPlanCountRun();});};
!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition()
else if(typeof define=='function'&&define.amd)define(definition)
else this[name]=definition()}('bowser',function(){var t=true
function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[1])||'';}
function getSecondMatch(regex){var match=ua.match(regex);return(match&&match.length>1&&match[2])||'';}
var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result
if(/opera|opr|opios/i.test(ua)){result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}}
else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}}
else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}}
else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}}
else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}}
else if(windowsphone){result={name:'Windows Phone',windowsphone:t}
if(edgeVersion){result.msedge=t
result.version=edgeVersion}
else{result.msie=t
result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)}}
else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)}}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion}}
else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier}}
else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}}
else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)}}
else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}
if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t}}
else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)}}
else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)}}
else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)}}
else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}}
else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};/touchpad\//i.test(ua)&&(result.touchpad=t)}
else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}
else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}
else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier}}
else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier}}
else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}}
else if(android){result={name:'Android',version:versionIdentifier}}
else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t}
if(versionIdentifier){result.version=versionIdentifier}}
else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'}
if(versionIdentifier){result.version=versionIdentifier}}
else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier}}
else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink"
result.blink=t}else{result.name=result.name||"Webkit"
result.webkit=t}
if(!result.version&&versionIdentifier){result.version=versionIdentifier}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko"
result.gecko=t
result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)}
if(!result.msedge&&(android||result.silk)){result.android=t}else if(iosdevice){result[iosdevice]=t
result.ios=t}else if(mac){result.mac=t}else if(xbox){result.xbox=t}else if(windows){result.windows=t}else if(linux){result.linux=t}
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}
if(osVersion){result.osversion=osVersion;}
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||(android&&(osMajorVersion==3||(osMajorVersion>=4&&!mobile)))||result.silk){result.tablet=t}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t}
if(result.msedge||(result.msie&&result.version>=10)||(result.yandexbrowser&&result.version>=15)||(result.vivaldi&&result.version>=1.0)||(result.chrome&&result.version>=20)||(result.firefox&&result.version>=20.0)||(result.safari&&result.version>=6)||(result.opera&&result.version>=10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]>=6)||(result.blackberry&&result.version>=10.1)){result.a=t;}
else if((result.msie&&result.version<10)||(result.chrome&&result.version<20)||(result.firefox&&result.version<20.0)||(result.safari&&result.version<6)||(result.opera&&result.version<10.0)||(result.ios&&result.osversion&&result.osversion.split(".")[0]<6)){result.c=t}else result.x=t
return result}
var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent:'')
bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}
return false;}
bowser._detect=detect;return bowser});
safariCookieBugNotice=function(){var safariCookieNoticeMessage='<div class="warningSection loginCookieNotice"><ul><li>If you are having issues logging in, please try clearing your cookies.</li></ul></div>';insertSafariCookieNotice=function()
{if(bowser.safari)
{if($('.login').length>0&&$('.loginCookieNotice').length<=0)
{$(safariCookieNoticeMessage).prependTo('.login .body');};};};insertSafariCookieNotice();$(window.document).ajaxComplete(function()
{insertSafariCookieNotice();});};
var _currentViewerId=0;var _viewersWrapperSelector;function contentViewers(contentTypeId,contentId,viewerInfo,viewersWrapperSelector)
{_viewersWrapperSelector=viewersWrapperSelector;var contentIdentifier='vc-'+contentTypeId+"-"+contentId;sioAddEventListener(contentIdentifier,_contentViewersUpdate);if(viewerInfo!==undefined)
{_currentViewerId=viewerInfo.id;sioEmit('viewingContent',{contentTypeId:contentTypeId,contentId:contentId,viewing:true,member:viewerInfo});$(window).on('unload',function()
{sioEmit('viewingContent',{contentTypeId:contentTypeId,contentId:contentId,viewing:false,member:viewerInfo});});}
var closeQuestionWizard=$('#questionClosingWizard .body');if(closeQuestionWizard.length==1)
{var closeQuestionButtonObserver=new MutationObserver(function(mutations)
{mutations.forEach(function(mutation)
{$(_viewersWrapperSelector).toggleClass('cqw-offset',!closeQuestionWizard.hasClass('hidden'));});});closeQuestionButtonObserver.observe(closeQuestionWizard[0],{attributes:true});}}
function _contentViewersUpdate(data)
{var viewersWrapper=$(_viewersWrapperSelector);delete data[_currentViewerId];$(_viewersWrapperSelector+" .contentViewer").each(function(index,element)
{var viewingMemberId=$(element).attr("data-memberId");if(data[viewingMemberId]===undefined)
$(element).remove();else
delete data[viewingMemberId];});for(var viewingMemberId in data)
{var viewingMember=data[viewingMemberId];var viewerDiv=$('<div>')
.addClass('contentViewer')
.attr('data-memberId',viewingMember.id)
.appendTo(viewersWrapper);var viewerAnchor;if(viewingMember.id==0)
{viewerAnchor=$('<div>')
.attr({'title':viewingMember.name,'class':'content-viewer-avatar'}).appendTo(viewerDiv);}
else
{viewerAnchor=$('<a>')
.attr({'href':viewingMember.profileUrl,'title':viewingMember.name,'target':'_new','class':'content-viewer-avatar'}).appendTo(viewerDiv);}
var viewerAvatar=$('<img>')
.attr('src',viewingMember.avatarUrl)
.appendTo(viewerAnchor);}
$(viewersWrapper).toggle($(viewersWrapper).children().length>0);}
var index_LO_FEED=function(popupTriggerSelector){function expandForm(){$(".welcomeTabsWrapper #grecaptchaIdregisterFreeform, #welcomeJoin .memberAgreement, #welcomeJoin .info, .welcomeTabsWrapper .loginCtaSignup, #welcomeJoin #registerFree-form-password-row").css("max-height","180px");$('.welcomeTabsWrapper .warningSection li').show();$("#welcomeJoin .memberAgreement").css("margin","15px auto");$(".welcomeTabsWrapper").css("height","auto");$('.homeLOBenefits .benefitsHeader').addClass('formExpanded');}
$("#registerFree input").on("click touchend focus",function(){expandForm();});$(".welcomeTabWrapper .login input").on("click",function(){expandForm();});if($('.welcomeTabsWrapper .captchaError, .invalid').is(':visible')){expandForm();}
$(window).scroll(function(){if($(this).scrollTop()>200){$('#headerInnerWrap').show();}});$('#bodyWrapper').on('click',popupTriggerSelector,function(e){e.preventDefault();$('.redirect').val($(this).attr('href'));var regAct=$(this).attr('reg-act-id');if(regAct!==undefined)
$('.regAct').val(regAct);});var parameters={'asid':'registerFreePopup','iasid':'registerFreePopup','componentHtmlId':'registerFreePopup'};var asyncUrl=addParameters('/async/registerFreePopup.async',parameters,false);var content='<div class="registerFreePopupContainer"></div>';var configuration={variant:'registerFreePopup',beforeClose:function(e){var currentUrl=[location.protocol,'//',location.host,location.pathname].join('');var newUrl=addParameter(currentUrl,'interestCategoryId',$('.currentCategory').val(),false);window.history.pushState('',document.title,newUrl);window.location=$('.redirect').val();},afterContent:function(e){var dynamicParameters={'regActId':$('.regAct').val(),'interestCategoryId':$('.currentCategory').val(),'redirect':$('.redirect').val()};$('.registerFreePopupContainer').load(addParameters(asyncUrl,dynamicParameters,false));}};$('#bodyWrapper').on('click',popupTriggerSelector,function(e){$.featherlight(content,configuration);e.preventDefault();});$('.mobileTabs p').click(function(){$('.mobileTabs p').removeClass('selected')
$(this).addClass('selected');if($('p.feedTabMobile').hasClass('selected')){$('html,body').animate({scrollTop:$(".homeLOFeedWrapper").offset().top-60},'slow');}
if($('p.benefitsTabMobile').hasClass('selected')){$('html,body').animate({scrollTop:$(".homeLOBenefits").offset().top-60},'slow');}});var feedTabMobile=$('p.feedTabMobile');var benefitsTabMobile=$('p.benefitsTabMobile');var homeLO_heroWrapper=$('.homeLO_heroWrap');var homeLOFeedWrapper=$('.homeLOFeedWrapper');$(window).bind('scroll',function(){if($(window).scrollTop()>=homeLO_heroWrapper.offset().top+homeLO_heroWrapper.outerHeight()-window.innerHeight){feedTabMobile.addClass('selected').siblings(benefitsTabMobile).removeClass('selected');}else{feedTabMobile.removeClass('selected');}
if($(window).scrollTop()>=homeLO_heroWrapper.offset().top+homeLO_heroWrapper.outerHeight()+homeLOFeedWrapper.outerHeight()-window.innerHeight){benefitsTabMobile.addClass('selected').siblings(feedTabMobile).removeClass('selected');}});};
function contactDropdown(dropdownSelector,listSelector)
{var dropdown=$(dropdownSelector);var list=$(listSelector);dropdown.on('click',function(e)
{list.toggle();dropdown.toggleClass("selected");return false;});$(document).mouseup(function(e)
{if(!dropdown.is(e.target)&&dropdown.has(e.target).length===0)
{list.hide();dropdown.removeClass("selected");}});}
function topExpertsLeaderboard(htmlId,asyncUrl,disableJs)
{var element=$('#'+htmlId);element.find('.period-link, .leaderboard-topic-link').on("click",function(e)
{e.preventDefault();if(!disableJs)
{var parameters=$(this).data();parameters.asid=parameters.iasid=parameters.componentHtmlId=htmlId;element.load(asyncUrl,parameters);}});element.find(".top-expert").hover(function(e)
{e.preventDefault();if(!disableJs)
{var mid=$(this).attr("data-mid");element.find(".top-expert .te-lvl-"+mid).removeClass("hidden");}},function(e)
{e.preventDefault();if(!disableJs)
{var mid=$(this).attr("data-mid");element.find(".top-expert .te-lvl-"+mid).addClass("hidden");}});element.find(".te-expand-experts .te-expand").on("click",function(e)
{e.preventDefault();if(!disableJs)
{element.find(".top-experts-list .top-expert").removeClass("hidden");element.find(".te-expand-experts").addClass("hidden");}});}

