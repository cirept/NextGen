var cm = unsafeWindow.ContextManager,
    em = unsafeWindow.editMode,
    cmv = cm.getVersion(),
    sv = (cmv === 'WIP' || cmv === 'PROTO' || cmv === 'LIVE'),
    wID = cm.getWebId(),
    pn = cm.getPageName(),
    pw = ispw();

function ispw() {
    'use strict';
    if (jQuery('body .phone-wrapper').length > 0) {
        return true;
    } else {
        return false;
    }
}

function applyParameters(isNextGen) {
    'use strict';
    //    console.log('inside applyParameters');
    //    console.log(isNextGen);
    if ((isNextGen) && (cmv !== 'LIVE')) {
        if (window.location.href.indexOf('nextGen=true') === -1) {
            window.location.search += '&nextGen=true';
        }
    }
}
if (!em && sv && !pw) {
    // build toolbox
    var $tb = jQuery('<div>').attr({
            id: 'myToolbox'
        }).css({
            'text-align': 'center',
            background: 'linear-gradient(to right, #a8e063 0%, #56ab2f 100%)',
            position: 'fixed',
            color: 'black',
            bottom: '0%',
            right: '0%',
            width: '135px',
            border: '1px solid black',
            'font-size': '.85em',
            'z-index': '9999999'
        }),
        $tbt = jQuery('<div>').css({
            color: 'white',
            padding: '5px'
        }).text('QA Toolbox'),
        $legenContainer = jQuery('<div>').attr({
            id: 'legendContainer'
        }).css({
            'width': '230px',
            'position': 'fixed',
            'bottom': '6%',
            'left': '6%',
            'z-index': '100000'
        }),
        $tbt = jQuery('<div>').css({
            color: 'white',
            padding: '5px'
        }).text('QA Toolbox');
    var $tbs = jQuery('<style>').attr({
        id: 'qa_toolbox',
        type: 'text/css'
    });
    jQuery($tbs)
        .append('.myEDOBut { font-size: 11px; top: 15%; color: #ffffff; position: relative; width: 100%; height: 35px; margin: 1px 0px 0px -10px; border-radius: 5px; border: 2px solid rgb(0,0,0); }')
        .append('.myEDOBut:hover { background: black !important; color: white !important; }')
        .append('.showNav { display: inline-block !important; position: absolute !important; background: white !important; margin: 0 !important; width: 150px !important; }')
        .append('.showNavAdd { width: 150px !important; padding: 0 !important; font-size: 15px !important; }')
        .append('.linkOverlay { position: absolute; top: 0; left: 0; z-index: 1; }')
        .append('.imgOverlay { position: absolute; top: 0; left: 0; z-index: 1; }')
        .append('.hasTitle { background: rgba(146, 232, 66, .75) !important; color: white !important; }')
        .append('.noTitle { background: rgba(255, 124, 216, .75) !important; color: white !important; }')
        .append('.emptyTitle { background: rgba(255, 124, 216, .75) !important; color: white !important; }')
        .append('.hasAlt { background: rgba(146, 232, 66, .75) !important; }')
        .append('.noAlt { background: rgba(255, 124, 216, .75) !important; }')
        .append('.corePage { color: #ffffff !important; background: linear-gradient(to left, #ffb347 , #ffcc33) !important; }')
        .append('.checked {background: linear-gradient(to left, rgba(161, 255, 206, 0.75) , rgba(250, 255, 209, 0.75)), #ffffff !important; color: #999999 !important; }')
        .append('.emptyAlt { background: rgba(255, 124, 216, .75) !important; }')
        .append('.brokenURL { background: rgba(255, 55, 60, .75) !important; }')
        .append('.urlIssue { -moz-box-shadow: inset 0px 0px 0px 1px rgb(255, 55, 60); -webkit-box-shadow: inset 0px 0px 0px 5px rgb(255, 55, 60); box-shadow: inset 0px 0px 0px 5px rgb(255, 55, 60); }')
        .append('.opensWindow { background: linear-gradient(to right, rgba(255, 165, 0, 0.75) 0%, rgba(255, 165, 0, 0.75) 25%, rgba(255, 255, 255, 0) 26%, rgba(146, 232, 66, 0) 100%) !important; }')
        .append('.hasTitle.opensWindow { background: linear-gradient(to right, rgba(255, 165, 0, 0.75) 0%, rgba(255, 165, 0, 0.75) 25%, rgba(146, 232, 66, 0.75) 26%, rgba(146, 232, 66, 0.75) 99%, rgba(146, 232, 66, 0.75) 100%) !important; }')
        .append('.noTitle.opensWindow { background: linear-gradient(to right, rgba(255, 165, 0, 0.75) 0%, rgba(255, 165, 0, 0.75) 25%, rgba(255, 124, 216, 0.75) 26%, rgba(255, 124, 216, 0.75) 100%) !important; }')
        .append('.emptyTitle.opensWindow { background: linear-gradient(to right, rgba(255, 165, 0, 0.75) 0%, rgba(255, 165, 0, 0.75) 25%, rgba(255, 124, 216, 0.75) 26%, rgba(255, 124, 216, 0.75) 100%) !important; }')
        .append('.siteLink.linkChecked { background: rgba(96, 223, 229, .75) !important; color: white !important; }')
        .append('.CobaltEditableWidget:after { content: attr(data-content); position: absolute; top: 0; bottom: 0; left: 0; z-index: 100; height: 20px; margin: auto; background: rgba(96, 223, 229, .75); color: white; font-weight: bold; font-size: 10px; }')
        .append('.CobaltWidget:after { content: attr(data-content); position: absolute; top: 0; bottom: 0; left: 0; z-index: 100; height: 20px; margin: auto; background: rgba(96, 223, 229, .75); color: white; font-weight: bold; font-size: 10px; }')
        .append('.legendContent { color: black !important; line-height: 1em; font-size: .85em; padding: 10px 0px; margin: 5px 0px; }')
        .append('.overlayDiv { position: relative; }')
        .append('.tested { background: pink; }')
        .append('.linkLegend { background: white; border: 3px solid black; color: #000000; text-align: center; padding: 10px; }');
    // ---------------------------------------- web-id panel ----------------------------------------
    var $wid = jQuery('<div>').attr({
        title: 'Copy web-id'
    }).css({
        background: '#ffffff',
        'border-top': '1px solid #000000',
        'border-bottom': '1px solid #000000',
        clear: 'both',
        cursor: 'pointer',
        padding: '5px 0',
        color: '#000000'
    }).text(wID).hover(function () {
        'use strict';
        jQuery(this).css({
            background: '#f4f4f4'
        });
    }, function () {
        'use strict';
        jQuery(this).css({
            'background': '#ffffff'
        });
    });
    jQuery($wid).click(function () {
        'use strict';
        var webID = jQuery(this).html();
        new GM_setClipboard(webID, 'text');
    });
    var $pn = jQuery('<div>').attr({
        title: 'Copy page name'
    }).css({
        background: '#ffffff',
        'border-bottom': '1px solid #000000',
        clear: 'both',
        cursor: 'pointer',
        padding: '5px 0',
        color: '#000000'
    }).text(pn).hover(function () {
        'use strict';
        jQuery(this).css({
            background: '#f4f4f4'
        });
    }, function () {
        'use strict';
        jQuery(this).css({
            'background': '#ffffff'
        });
    });
    jQuery($pn).click(function () {
        'use strict';
        var pi = jQuery(this).html();
        new GM_setClipboard(pi, 'text');
    });
    // ---------------------------------------- nextGen checkbox ----------------------------------------
    var $nextGenCheck = jQuery('<div>').attr({
            id: 'nextGenCheck'
        }).css({
            'padding': '7px 0 0 0'
        }),
        isNextGenSite = GM_getValue('isNextGen', false),
        $isNextGenLabel = jQuery('<label>').attr({
            for: 'isNextGenCheckbox'
        }).text('is a Next Gen Site?').css({
            display: 'inline-block',
            'vertical-align': 'super'
        }),
        $isNextGenCheckbox = jQuery('<input>').attr({
            type: 'checkbox',
            id: 'isNextGenCheckbox',
            name: 'isNextGenCheckbox',
            checked: isNextGenSite
                //            checked: isNextGenSite
        }).css({
            width: '20px',
            height: '20px'
        });
    applyParameters(isNextGenSite);
    jQuery($isNextGenCheckbox).click(function () {
        var $checked = jQuery('#isNextGenCheckbox').prop('checked');
        console.log('checkbox checked, new value : ', $checked);
        if ($checked) {
            console.log('checked value is true');
            jQuery('#isNextGenCheckbox').prop('checked', true);
        } else {
            console.log('checked value is false');
            jQuery('#isNextGenCheckbox').prop('checked', false);
        }
        GM_setValue('isNextGen', $checked);
        var x = GM_getValue('isNextGen', false);
        console.log('new value of saved variable :', x);
        applyParameters($checked);
    });
    $nextGenCheck.append($isNextGenLabel).append($isNextGenCheckbox);
    if (isNextGenSite === false) {
        if (window.location.href.indexOf('nextGen=true') >= 0) {
            //            window.location.search += '&nextGen=true';
            var x = window.location.hostname;
            x += '&nextGen=false';
        }
    }
    $nextGenCheck.append($isNextGenLabel).append($isNextGenCheckbox);
    // ---------------------------------------- show nav ----------------------------------------
    var $sn_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: 'showNavigation',
        title: 'Show Navigation'
    }).text('Show Navigation');
    $sn_butt.click(function () {
        var $navItems = jQuery('.header .menu nav ul li'),
            $navItemsLinks = jQuery('.header .menu nav ul li > a'),
            $subNavMenuContainer = jQuery('.header .menu nav ul li > ul');
        // apply a green gradient once link is clicked
        $navItemsLinks.on('mousedown', function () {
            jQuery(this).addClass('checked');
        });
        // add custom classes to show navigation
        $navItems.addClass('showNavAdd');
        $subNavMenuContainer.addClass('showNav');
        // legend stuff
        var $snl = jQuery('<div>').attr({
                class: 'linkLegend'
            }),
            $snlt = jQuery('<div>').attr({
                id: 'linkLegendTitle'
            }).text('Show Navigation Legend'),
            $snch = jQuery('<div>').attr({
                class: 'legendContent checked'
            }).text('Checked'),
            $snrb = jQuery('<input>').attr({
                type: 'button',
                class: 'myButton',
                value: 'Remove'
            }).css({
                width: '90%',
                height: '50px'
            }),
            $hint = jQuery('<div>').css({
                'font-size': '10px',
                margin: '10px 0 0 0'
            }).text('mouse wheel click to open link in a new window');
        // bind remove button
        $snrb.click(removeFeatures);
        jQuery($snl)
            .append($snlt)
            .append($snch)
            .append($snrb)
            .append($hint);
        jQuery('#legendContainer').append($snl);

        function removeFeatures() {
            jQuery('.checked').removeClass();
            jQuery('.showNav').removeClass();
            jQuery('.showNavAdd').removeClass();
            $navItems.unbind('click');
            $snl.remove();
            jQuery(this).remove();
        }
    });
    // ---------------------------------------- Outdated Link Checker ----------------------------------------
    var $opc_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: 'outdatedLinkChecker',
        title: 'Outdated Links'
    }).text('Outdated Links');
    $opc_butt.on('click', function () {
        var $opcl = jQuery('<div>').attr({
                class: 'linkLegend'
            }),
            $opct = jQuery('<div>').attr({
                id: 'outdatedLinkTitle'
            }).text('Outdated Link Checker Legend'),
            $opcna = jQuery('<div>').attr({
                class: 'legendContent oldPage'
            }).text('Outdated'),
            $opcha = jQuery('<div>').attr({
                class: 'legendContent goodLink'
            }).text('Good'),
            $icrb = jQuery('<input>').attr({
                type: 'button',
                class: 'myButton',
                value: 'Remove'
            }).css({
                width: '90%',
                height: '50px'
            });
        jQuery($opcl)
            .append($opct)
            .append($opcna)
            .append($opcha)
            .append($icrb);
        jQuery('#legendContainer').append($opcl);
        jQuery.get('https://cdn.rawgit.com/cirept/NextGen/master/resources/dated_pages.txt', function (data) {
            // create array seperating each 'page' by the '-=-='
            data = data.replace(/\r?\n|\r/g, '');
            var datedPages = data.split('-=-='),
                datedPagesLength = datedPages.length,
                z = 0; // datedPage links for loop counter
            // ----------------------------------------
            // loop through each link on the page and highlight date pages
            // ----------------------------------------
            for (z; z < datedPagesLength; z++) {
                var currPage = datedPages[z];
                // check for this page
                var count = highlightDatadPages(currPage);
                console.log('matches found for ' + currPage + ' : ' + count);
            }

            function highlightDatadPages(currPage) {
                var pageLinks = jQuery('body a'),
                    pageLinksLength = pageLinks.length,
                    b = 0, // pageLinks links for loop counter;
                    counter = 0;
                // looping through all links on the page
                for (b; b < pageLinksLength; b++) {
                    var isImageLink = false,
                        currLink = pageLinks[b],
                        $currLink = jQuery(currLink);
                    if (($currLink.has('img').length)) {
                        // grab width and height of image
                        var w = $currLink.has('img').width(),
                            h = $currLink.height();
                        // create a div overlay with the same height and width of the image
                        addLinkDiv(currLink, w, h);
                        isImageLink = true;
                    }
                    if (($currLink.attr('href'))) {
                        var href = $currLink.attr('href').toLowerCase();
                        var findThis = currPage.toLowerCase();
                        // if current link HAS an href
                        if (href.indexOf(findThis) >= 0) {
                            // if MATCH IS FOUND
                            if (isImageLink) {
                                // if the link has an IMAGE apply class to div overlay
                                $currLink
                                    .find('.linkOverlay')
                                    .addClass('oldPage');
                                counter++;
                            } else {
                                // if link does not have an image, apply directly to the link
                                $currLink.addClass('oldPage');
                                counter++;
                            }
                            continue;
                        } else {
                            if (isImageLink) {
                                // if the link has an IMAGE apply class to div overlay
                                $currLink
                                    .find('.linkOverlay')
                                    .addClass('goodLink');
                            } else {
                                // if link does not have an image, apply directly to the link
                                $currLink.addClass('goodLink');
                            }
                        }
                    }
                }
                return counter;
            }

            function addLinkDiv(elem, width, height) {
                var $linkOverlay = jQuery('<div>').attr({
                    class: 'siteLink linkOverlay'
                }).css({
                    width: width + 'px',
                    height: height + 'px',
                    'text-align': 'center',
                    'vertical-align': 'middle',
                    'line-height': height + 'px',
                    'z-index': '2',
                    color: '#000000 !important',
                    'font-weight': 'bold'
                });
                jQuery(elem).addClass('overlayDiv').prepend($linkOverlay);
            }
        }); // end file read
        $icrb.click(removeFeatures);

        function removeFeatures() {
            var $pageLinks = jQuery('body a'),
                iaLength = $pageLinks.length,
                a = 0;
            for (a; a < iaLength; a++) {
                jQuery($pageLinks[a])
                    .removeClass('oldPage')
                    .removeClass('goodLink');
            }
            jQuery('body').find('.imgOverlay').remove();
            $opcl.remove();
            jQuery(this).remove();
        }
    }); // read data from file
    this.$toolbarStyles = jQuery('#qa_toolbox');
    $tbs.append('.goodLink { background: rgba(146, 232, 66, .75) !important; color: white !important; }');
    $tbs.append('.oldPage { background: rgba(255, 124, 216, .75) !important; }');
    // ---------------------------------------- image checker ----------------------------------------
    var $ic_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: 'imageChecker',
        title: 'Image Alt Checker'
    }).text('Image Alt Checker');
    $ic_butt.click(function () {
        var $icl = jQuery('<div>').attr({
                class: 'linkLegend'
            }),
            $iclt = jQuery('<div>').attr({
                id: 'linkLegendTitle'
            }).text('Image Checker Legend'),
            $iclna = jQuery('<div>').attr({
                class: 'legendContent noAlt'
            }).text('HAS NO alt text'),
            $iclha = jQuery('<div>').attr({
                class: 'legendContent hasAlt'
            }).text('HAS alt text'),
            $icrb = jQuery('<input>').attr({
                type: 'button',
                class: 'myButton',
                value: 'Remove'
            }).css({
                width: '90%',
                height: '50px'
            });
        $icrb.click(removeFeatures);
        var $ia = jQuery('body img'),
            iaLength = $ia.length,
            a = 0;
        for (a; a < iaLength; a++) {
            var isImageLink = true;
            var w = jQuery($ia[a]).width(),
                h = jQuery($ia[a]).height();
            addDivOverlay($ia[a], w, h);
            if (jQuery($ia[a]).attr('alt') !== undefined) {
                if (jQuery($ia[a]).attr('alt') === '') {
                    if (isImageLink) {
                        jQuery($ia[a])
                            .siblings('.imgOverlay')
                            .addClass('emptyAlt');
                    } else {
                        jQuery($ia[a]).addClass('emptyAlt');
                    }
                } else {
                    if (isImageLink) {
                        jQuery($ia[a])
                            .siblings('.imgOverlay')
                            .addClass('hasAlt');
                        jQuery($ia[a])
                            .siblings('.imgOverlay')
                            .attr('title', jQuery($ia[a])
                                .attr('alt'));
                    } else {
                        jQuery($ia[a]).addClass('hasAlt');
                    }
                }
            } else {
                if (isImageLink) {
                    jQuery($ia[a])
                        .siblings('.imgOverlay')
                        .addClass('noAlt');
                } else {
                    jQuery($ia[a]).addClass('noAlt');
                }
            }
        }
        jQuery($icl)
            .append($iclt)
            .append($iclna)
            .append($iclha)
            .append($icrb);
        jQuery('#legendContainer').append($icl);

        function removeFeatures() {
            $ia = jQuery('body img');
            iaLength = $ia.length;
            a = 0;
            for (a; a < iaLength; a++) {
                jQuery($ia[a])
                    .removeClass('opensWindow')
                    .removeClass('emptyAlt')
                    .removeClass('hasAlt')
                    .removeClass('noAlt')
                    .removeClass('overlayDiv');
            }
            jQuery('body').find('.imgOverlay').remove();
            $icl.remove();
            jQuery(this).remove();
        }

        function addDivOverlay(elem, width, height) {
            var $imageOverlay = jQuery('<div>').attr({
                    class: 'imgOverlay'
                }),
                imageAlt = jQuery(elem).attr('alt');
            jQuery($imageOverlay).css({
                width: width + 'px',
                height: height + 'px',
                'text-align': 'center',
                'vertical-align': 'middle',
                'line-height': height + 'px',
                color: '#000000 !important',
                'font-weight': 'bold'
            }).append(imageAlt);
            jQuery($imageOverlay)
                .insertBefore(jQuery(elem)
                    .addClass('overlayDiv'));
        }
    });
    // ---------------------------------------- link checker ----------------------------------------
    var $lc_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: 'linkChecker',
        title: 'Check Links'
    }).text('Link Checker');
    $lc_butt.click(function () {
        var $lcc = jQuery('<span>').css({
                position: 'absolute',
                left: '5px',
                color: 'white'
            }),
            $cm = jQuery('<i>').attr({
                class: 'fa fa-check-circle fa-3x'
            }),
            $lcl = jQuery('<div>').attr({
                class: 'linkLegend'
            }),
            $lclt = jQuery('<div>').attr({
                id: 'linkLegendTitle'
            }).text('Link Checker Legend'),
            $lclnt = jQuery('<div>').attr({
                class: 'legendContent noTitle'
            }).text('HAS NO title text'),
            $lclht = jQuery('<div>').attr({
                class: 'legendContent hasTitle'
            }).text('HAS title text'),
            $lclow = jQuery('<div>').attr({
                class: 'legendContent opensWindow'
            }).text('OPENS IN A NEW WINDOW'),
            $lclbl = jQuery('<div>').attr({
                class: 'legendContent brokenURL'
            }).text('EMPTY OR UNDEFINED URL'),
            $lclui = jQuery('<div>').attr({
                class: 'legendContent urlIssue'
            }).text('VERIFY URL'),
            $hint = jQuery('<div>').css({
                'font-size': '10px',
                margin: '10px 0 0 0'
            }).text('mouse wheel click to open link in a new window'),
            $icr_butt = jQuery('<input>').attr({
                type: 'button',
                class: 'myButton',
                value: 'Remove'
            }).css({
                width: '90%',
                height: '50px'
            });
        jQuery($lcc).append($cm);

        function removeLCfeatures() {
            b = 0;
            for (b; b < laLength; b++) {
                jQuery($la[b])
                    .removeClass('siteLink')
                    .removeClass('opensWindow')
                    .removeClass('emptyTitle')
                    .removeClass('hasTitle')
                    .removeClass('noTitle')
                    .removeClass('brokenURL')
                    .removeClass('urlIssue')
                    .removeClass('linkChecked')
                    .removeClass('overlayDiv');
            }
            jQuery('body').find('.linkOverlay').remove();
            $lcl.remove();
            jQuery(this).remove();
        }

        function bindClickAction(isImage) {
            return function () {
                if (isImage) {
                    jQuery(this).find('.linkOverlay')
                        .addClass('linkChecked')
                        .append($lcc);
                } else {
                    jQuery(this).addClass('linkChecked');
                }
            };
        }

        function addLinkDiv(elem, width, height) {
            var $linkOverlay = jQuery('<div>').attr({
                    class: 'siteLink linkOverlay'
                }).css({
                    width: width + 'px',
                    height: height + 'px',
                    'text-align': 'center',
                    'vertical-align': 'middle',
                    'line-height': height + 'px',
                    'z-index': '2',
                    color: '#000000 !important',
                    'font-weight': 'bold'
                }),
                linkTitle = jQuery(elem).attr('title');
            jQuery($linkOverlay).append(linkTitle);
            jQuery(elem).addClass('overlayDiv').prepend($linkOverlay);
        }

        function checkTarget(elem) {
            if ((jQuery(elem).attr('target') === '_blank') || (jQuery(elem).attr('target') === '_new') || (jQuery(elem).attr('target') === 'custom')) {
                return true;
            }
        }

        function checkHref(elem) {
            if ((jQuery(elem).attr('href').indexOf('#') === 0) ||
                (jQuery(elem).attr('href').indexOf('f_') === 0) ||
                (jQuery(elem).attr('href').indexOf('www') >= 0) ||
                (jQuery(elem).attr('href').indexOf('http') >= 0)) {
                return true;
            }
        }
        jQuery($icr_butt).click(removeLCfeatures);
        jQuery($lcl)
            .append($lclt)
            .append($lclnt)
            .append($lclht)
            .append($lclow)
            .append($lclbl)
            .append($lclui)
            .append($icr_butt)
            .append($hint);
        jQuery('#legendContainer').append($lcl);
        var $la = jQuery('body a'),
            laLength = $la.length,
            b = 0;
        for (b; b < laLength; b++) {
            var isImageLink = false;
            if ((jQuery($la[b]).has('img').length)) {
                var w = jQuery($la[b]).has('img').width(),
                    h = jQuery($la[b]).height();
                addLinkDiv($la[b], w, h);
                isImageLink = true;
            }
            jQuery($la[b]).click(bindClickAction(isImageLink));
            jQuery($la[b]).addClass('siteLink');
            if (checkTarget($la[b])) {
                if (isImageLink) {
                    jQuery($la[b])
                        .find('.linkOverlay')
                        .addClass('opensWindow');
                } else {
                    jQuery($la[b]).addClass('opensWindow');
                }
            }
            if ((jQuery($la[b]).attr('href'))) {
                if (checkHref($la[b])) {
                    if (isImageLink) {
                        jQuery($la[b])
                            .find('.linkOverlay')
                            .addClass('urlIssue');
                    } else {
                        jQuery($la[b]).addClass('urlIssue');
                    }
                }
            } else {
                if (isImageLink) {
                    jQuery($la[b])
                        .find('.linkOverlay')
                        .addClass('brokenURL');
                } else {
                    jQuery($la[b]).addClass('brokenURL');
                }
            }
            if (jQuery($la[b]).attr('title') !== undefined) {
                if (jQuery($la[b]).attr('title') === '') {
                    if (isImageLink) {
                        jQuery($la[b])
                            .find('.linkOverlay')
                            .addClass('emptyTitle');
                    } else {
                        jQuery($la[b]).addClass('emptyTitle');
                    }
                } else {
                    if (isImageLink) {
                        jQuery($la[b])
                            .find('.linkOverlay')
                            .addClass('hasTitle');
                    } else {
                        jQuery($la[b]).addClass('hasTitle');
                    }
                }
            } else {
                if (isImageLink) {
                    jQuery($la[b])
                        .find('.linkOverlay')
                        .addClass('noTitle');
                } else {
                    jQuery($la[b]).addClass('noTitle');
                }
            }
        }
    });
    // ---------------------------------------- Show Autofill Tags ----------------------------------------
    /*
        var $af_butt = jQuery('<button>').attr({
            class: 'myEDOBut',
            id: 'showAutofill',
            title: 'Show Autofill Tags'
        }).text('Show Autofill Tags');
        $af_butt.click(function () {
            'use strict';
            var x = '?disableAutofill=true',
                z = cm.getUrl(),
                newTab;
            newTab = new GM_openInTab(z + pn + x, 'active');
        });
    */
    // ------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------- autofill toggle ----------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------
    var autofillToggle = {
        init: function () {
            this.createElements();
            this.buildTool();
            this.cacheDOM();
            this.setToggle();
            this.addTool();
            this.bindEvents();
            //                this.hideFeature();
            this.ifLive();
        },
        // ----------------------------------------
        // tier 1 functions
        // ----------------------------------------
        createElements: function () {
            autofillToggle.config = {
                $autofillToggleContainer: jQuery('<div>').attr({
                    id: 'autofillToggleInput',
                    class: 'toggleTool',
                    title: 'Show all autofill tags on page'
                }).css({
                    padding: '7px 0px 0px'
                }),
                $autofillToggleTitle: jQuery('<div>').css({
                    color: 'black',
                    'line-height': '15px'
                }).text('show autofill tags?'),
                $autofillToggleIcon: jQuery('<div>').attr({
                    id: 'autofillToggleIcon'
                }),
                $FAtoggle: jQuery('<i class="fa fa-toggle-off fa-lg"></i>')
            };
        },
        buildTool: function () {
            autofillToggle.config.$autofillToggleIcon
                .append(autofillToggle.config.$FAtoggle);
            autofillToggle.config.$autofillToggleContainer
                .append(autofillToggle.config.$autofillToggleTitle)
                .append(autofillToggle.config.$autofillToggleIcon);
        },
        setToggle: function () {
            // if 'site is not live'
            if (!this.liveSite) {
                // if 'nextGen is turned on'
                if (this.getChecked()) {
                    // set toggle and apply parameters
                    this.toggleOn();
                }
                // if 'site is not live'
                else {
                    // set toggle and apply parameters
                    this.toggleOff();
                }
                this.applyParameters();
            }
        },
        cacheDOM: function () {
            this.$toolsPanel = jQuery('#myToolbox');
            this.cm = unsafeWindow.ContextManager;
            this.liveSite = this.cm.isLive();
        },
        addTool: function () {
            // add to main toolbox
            //            this.$toolsPanel.append(autofillToggle.config.$autofillToggleContainer);
            $tb.append(autofillToggle.config.$autofillToggleContainer);
        },
        bindEvents: function () {
            // bind FA toggle with 'flipTheSwitch' action
            autofillToggle.config.$autofillToggleContainer.on('click', this.flipTheSwitch.bind(this));
        },
        //            hideFeature: function () {
        //                // hides feature if viewing live site
        //                if (this.siteState() === 'LIVE') {
        //                    autofillToggle.config.$autofillToggleContainer.toggle();
        //                }
        //            },
        ifLive: function () {
            // remove tool if the site is live
            if (this.liveSite) {
                jQuery(this).remove();
            }
        },
        // ---------
        //test
        // -----------
        returnParameters: function () {
            if (this.getChecked()) {
                return true;
            }
            return false;
        },
        // ----------------------------------------
        // tier 2 functions
        // ----------------------------------------
        getChecked: function () {
            // grabs applyAutofill value
            var a = GM_getValue('applyAutofill', false);
            return a;
        },
        toggleOn: function () {
            // set toggle on image
            var $toggle = autofillToggle.config.$FAtoggle;
            $toggle.removeClass('fa-toggle-off');
            $toggle.addClass('fa-toggle-on');
        },
        applyParameters: function () {
            var hasParameters = this.hasParameters();
            //                var siteState = this.siteState();
            var applyAutofill = this.getChecked(),
                url = window.location.href,
                newURL;
            // show autofill parameter
            // if 'parameters not found in URL' AND 'applyAutofill toggle is turned on'
            if (!hasParameters && applyAutofill) {
                // if PARAMETER IS NOT in the URL, add &disableAutofill=true
                //                    window.location.search += '&disableAutofill=true';
                this.reloadPage('search', '&disableAutofill=true');
                console.log('disableAutofill parameter not found, adding and turning on');
            }
            // if 'parameters found in URL' AND 'applyAutofill toggle is turned on'
            else if (hasParameters && applyAutofill) {
                // if 'the URL HAS nextGen=' BUT it isn't set to true
                url = window.location.href;
                if (url.indexOf('&disableAutofill=false') > 0) {
                    // applyAutofill false parameter detected UPDATE to true
                    newURL = url.replace('&disableAutofill=false', '&disableAutofill=true');
                    console.log('disableAutofill parameter found, turning on');
                    //                        window.location.href = newURL;
                    this.reloadPage('reload', newURL);
                } else if (url.indexOf('&disableAutofill=true') > 0) {
                    // if disableAutofill = true, do nothing
                    console.log('disableAutofill parameter found, do nothing');
                }
            }
            // disable autofill parameter
            // if 'parameters found in URL' AND 'applyAutofill toggle is turned off'
            else if (hasParameters && !applyAutofill) {
                // if 'disableAutofill FOUND IN URL' and 'applyAutofill turned off'
                url = window.location.href;
                // ----------------------------------------
                // REMOVE PARAMETER FROM URL
                // ----------------------------------------
                if (url.indexOf('&disableAutofill=true') >= 0) {
                    newURL = url.replace('&disableAutofill=true', '');
                    console.log('disableAutofill TRUE parameter found, removing');
                    //                        window.location.href = newURL;
                    this.reloadPage('reload', newURL);
                } else if (url.indexOf('&disableAutofill=false') >= 0) {
                    newURL = url.replace('&disableAutofill=false', '');
                    console.log('disableAutofill FALSE parameter found, removing');
                    //                        window.location.href = newURL;
                    this.reloadPage('reload', newURL);
                }
                /*
                                            if (url.indexOf('disableAutofill=true') > 0) {
                                                // disableAutofill parameter = TRUE
                                                newURL = url.replace('disableAutofill=true', 'disableAutofill=false');
                                                console.log('disableAutofill parameter found, turing off');
                                                window.location.href = newURL;
                                            } else if (url.indexOf('disableAutofill=false') > 0) {
                                                // if disableAutofill = FALSE, do nothing
                                                console.log('disableAutofill parameter found, do nothing');
                                            }
                */
            }
            // if 'parameters not found in URL' AND 'applyAutofill toggle is turned off'
            else if (!hasParameters && !applyAutofill) {
                // if disableAutofill IS NOT in the URL, add disableAutofill=false
                console.log('disableAutofill parameter not found, do nothing');
                //                    window.location.search += '&disableAutofill=false';
                //                    this.reloadPage('search', '&disableAutofill=false');
            }
            // ----------------------------------------
            // START WOKRING CODE
            // ----------------------------------------
            // apply parameters only if DOESN'T already have parameters &&
            // site state IS NOT LIVE &&
            // toggled ON
            /*
            if ((!hasParameters) && (siteState !== 'LIVE') && (applyAutofill)) {
                window.location.search += '&disableAutofill=true';
            }
            */
            // ----------------------------------------
            // END WORKING CODE
            // ----------------------------------------
        },
        reloadPage: function (type, newURL) {
            if (type === 'reload') {
                console.log('reload page');
                window.location.href = newURL;
            } else if (type === 'search') {
                console.log('append then reload page');
                window.location.search += newURL;
            }
        },
        toggleOff: function () {
            // set toggle off image
            var $toggle = autofillToggle.config.$FAtoggle;
            $toggle.removeClass('fa-toggle-on');
            $toggle.addClass('fa-toggle-off');
        },
        flipTheSwitch: function () {
            // set saved variable to opposite of current value
            this.setChecked(!this.getChecked());
            // set toggle
            this.setToggle();
        },
        // ----------------------------------------
        // tier 3 functions
        // ----------------------------------------
        hasParameters: function () {
            // determine if site URL already has custom parameters
            //                if (window.location.href.indexOf('&disableAutofill=false') >= 0) {
            //                    return true;
            //                } else {
            //                    return false;
            //                }
            if (window.location.href.indexOf('disableAutofill=') >= 0) {
                return true;
            } else {
                return false;
            }
        },
        siteState: function () {
            // return page variable
            return unsafeWindow.ContextManager.getVersion();
        },
        setChecked: function (bool) {
            // sets applyAutofill value
            GM_setValue('applyAutofill', bool);
        }
    };
    // ------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------- refresh page button ----------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    var refreshPage = {
        init: function () {
            this.createElements();
            this.cacheDOM();
            this.buildTool();
            this.addTool();
            this.bindEvents();
            this.addStyles();
        },
        // tier 1 functions
        // ----------------------------------------
        createElements: function () {
            refreshPage.config = {
                $refreshContainer: jQuery('<div>').attr({
                    id: 'refreshMe'
                }).css({
                    position: 'fixed',
                    right: '30px',
                    top: '45%',
                    'z-index': '1000000'
                }),
                $activateButt: jQuery('<button>').attr({
                    class: 'myEDOBut',
                    id: 'refreshPage',
                    title: 'Refresh Page from Server'
                }).css({
                    background: 'linear-gradient(to left, #FBD3E9 , #BB377D)',
                    width: '75px',
                    height: '50px'
                }),
                $refresh: jQuery('<i class="fa fa-undo fa-flip-horizontal fa-3x">&nbsp;</i>').css({
                    'margin-left': '-10px'
                })
            };
        },
        cacheDOM: function () {
            //            this.$otherToolsPanel = jQuery('#myToolbox');
            this.$toolbarStyles = jQuery('#qa_toolbox');
        },
        buildTool: function () {
            refreshPage.config.$activateButt.html(refreshPage.config.$refresh);
            refreshPage.config.$refreshContainer.append(refreshPage.config.$activateButt);
        },
        addTool: function () {
            //            this.$otherToolsPanel.append(refreshPage.config.$refreshContainer);
            $tb.append(refreshPage.config.$refreshContainer);
        },
        bindEvents: function () {
            refreshPage.config.$activateButt.on('click', this.reloadPage);
        },
        addStyles: function () {
            $tbs.append('#refreshPage:hover { color: #ffffff !important; background: linear-gradient(to left, #f4c4f3 , #fc67fa) !important; }');
        },
        // tier 2 functions
        // ----------------------------------------
        reloadPage: function () {
            window.location.reload(true);
        }
    };
    // ---------------------------------------- Spell Check ----------------------------------------
    var $sc_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: 'spellCheck',
        title: 'Check Spelling'
    }).text('Spellcheck Page');
    $sc_butt.click(function () {
        'use strict';
        var scSite = 'https://www.w3.org/2002/01/spellchecker?',
            param = {
                uri: encodeURIComponent(cm.getUrl() + pn),
                lang: 'en_US'
            },
            newTab;
        jQuery.each(param, function (index, value) {
            scSite += index + '=' + value + '&';
        });
        newTab = new GM_openInTab(scSite, 'insert');
    });
    // ------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------- 404 checker ----------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    // will show LIVE SITE functionality
    // on proof some links may result in 404 errors.
    // not sure why this is.
    // change up functionality to Cache once button is clicked
    var $404checker_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: '404checker',
        title: '404 Checker'
    }).text('404 Checker');
    $404checker_butt.on('click', function () {
        var cm = unsafeWindow.ContextManager,
            webID = cm.getWebId(),
            baseURL = cm.getUrl(),
            siteID = cm.getSiteId(),
            wid = z(webID),
            $pageLinks = jQuery('a'),
            $container = jQuery('<div>').attr({
                id: 'checkContainer'
            }),
            $message = jQuery('<div>').attr({
                id: 'checkMessage'
            }).css({
                margin: '5px auto',
                width: '90px'
            }),
            $thinking = jQuery('<i id="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'),
            $done = jQuery('<i class="fa fa-check-circle fa-3x fa-fw"></i>'),
            $refresh = jQuery('<div>').css({
                'line-height': '10px'
            }).text('refresh page before running checker again'),
            $404legend = jQuery('<div>').attr({
                class: 'linkLegend'
            }).css({
                background: 'white',
                border: '3px solid black',
                width: '200px',
                'z-index': '10000',
                'text-align': 'center',
                padding: '10px'
            }),
            $404legendt = jQuery('<div>').attr({
                id: 'four04LegendTitle'
            }).text('404 Checker Legend'),
            $404legendSuccess = jQuery('<div>').attr({
                class: 'legendContent'
            }).text('Link is Working').css({
                background: 'rgba(0, 128, 0, .75)'
            }),
            $404legendQueued = jQuery('<div>').attr({
                class: 'legendContent'
            }).text('Link to be Tested').css({
                background: 'pink'
            }),
            $404legendError = jQuery('<div>').attr({
                class: 'legendContent'
            }).text('Verify Link Works').css({
                background: 'rgba(255, 0, 0, .75)'
            });
        // build legend
        $404legend
            .append($404legendt)
            .append($404legendQueued)
            .append($404legendSuccess)
            .append($404legendError);
        jQuery('#legendContainer').append($404legend);
        // split web-id
        function z(webID) {
            var x = webID.split('-');
            return x[1];
        }
        // attach display area to tool box
        jQuery($404checker_butt).after($container);
        // show thinking icon
        jQuery(document).ajaxStart(function () {
            $message.text('checking links');
            jQuery($container).append($message).append($thinking);
        });
        // test each link on the page
        $pageLinks.each(function (index, value) {
            var $this = jQuery(value), //retain a reference to the current link
                linkURL = jQuery(value).attr('href'), //current link URL
                hasImage = 0,
                isImageLink = false;
            $this.addClass('tested');
            // test if URL is undefined
            // skip checking link if not a web link
            if (typeof linkURL === 'undefined') {
                $this.addClass('undefined');
                error($this, isImageLink);
                return true;
            }
            var curWindow = window.location.href;
            if (curWindow.indexOf('nextGen=true') > -1) {
                // check URL if using relative path
                // NEXT GEN SPECIFIC
                // add complete URL for testing purposes
                //                var findThis = '/' + wid + '/',
                var siteID_mod = '/' + siteID + '/',
                    wid_mod = '/' + wid + '/',
                    length = siteID.length + 1,
                    hostname = window.location.hostname;
                console.log('siteID_mod : ' + siteID_mod);
                console.log('wid_mod : ' + wid_mod);
                console.log('linkURL : ' + linkURL);
                console.log('baseURL : ' + baseURL);
                console.log('hostname : ' + window.location.hostname);
                if ((linkURL.indexOf(siteID_mod) >= 0) && (linkURL.indexOf(siteID_mod) < length)) {
                    linkURL = linkURL.replace(siteID_mod, baseURL);
                    console.log('linkURL 1 : ' + linkURL);
                }
                if ((linkURL.indexOf(wid_mod) >= 0) && (linkURL.indexOf(wid_mod) < length)) {
                    //                if (linkURL.indexOf(wid_mod) >= 0) {
                    //                    linkURL = linkURL.replace(siteID_mod, baseURL);
                    linkURL = linkURL.replace(wid_mod, baseURL);
                    console.log('linkURL 2 : ' + linkURL);
                }
            } else {
                // check URL if it begins with /, signifying the link is a relative path URL
                // check URL if it doesn't have the normal http://www, also signifying the link is a relative path URL
                // TETRA SPECIFIC
                // add complete URL for testing purposes
                if ((linkURL.indexOf('/') === 0) || !checkHref(linkURL)) {
                    linkURL = baseURL + linkURL;
                }
            }
            // test if link is correct format for URL
            // skip iteration if not correct format
            if (!checkHref(linkURL)) {
                $this.addClass('format');
                error($this, isImageLink);
                return true;
            }
            console.log('linkURL : ' + linkURL);
            // test each link
            jQuery.ajax({
                url: linkURL, //be sure to check the right attribute
                type: 'text',
                method: 'get',
                context: document.body,
                success: function () { //pass an anonymous callback function
                    // checks to see if link is an image link
                    // adds a div overlay if is an image link
                    hasImage = $this.has('img').length;
                    if (hasImage) {
                        isImageLink = true;
                    }
                    // if is an image link add class to div overlay
                    // else add class to a tag
                    if (isImageLink) {
                        var $img = $this.find('img'),
                            w = $img.width(),
                            h = $img.height(),
                            $linkOverlay = jQuery('<div>').attr({
                                class: 'siteLink linkOverlay'
                            }).css({
                                width: w + 'px',
                                height: h + 'px',
                                position: 'absolute',
                                'z-index': 1
                            });
                        $img.attr('style', 'position: relative;');
                        $this.prepend($linkOverlay);
                        success($linkOverlay, isImageLink);
                    } else {
                        $this.addClass('success');
                        success($this, isImageLink);
                    }
                },
                error: function () {
                    //set link in red if there is any errors with link
                    error($this, isImageLink);
                },
                statusCode: {
                    404: function () {
                        $this.addClass('error');
                        error($this, isImageLink);
                    }
                }
            });
        });
        // fire after ALL ajax requests have been completed
        jQuery(document).ajaxStop(function () {
            jQuery('#checkMessage').empty();
            jQuery('#loading').hide();
            jQuery('#checkMessage').text('all links checked');
            jQuery('#checkMessage').append($done);
            jQuery('#checkMessage').append($refresh).delay('8000').fadeOut('3000');
        });

        function success($this, isImageLink) {
            var curStyle = '';
            if (isImageLink) {
                curStyle = $this.attr('style');
            }
            $this.attr('style', curStyle + ' background-color: rgba(0, 128, 0, .75) !important');
        }

        function error($this, isImageLink) {
            var curStyle = '';
            if (isImageLink) {
                curStyle = $this.attr('style');
            }
            $this.attr('style', curStyle + ' background-color: rgba(255, 0, 0, .75) !important');
        }

        function checkHref(linkURL) {
            if ((linkURL.indexOf('f_') === 0) ||
                (linkURL.indexOf('www') >= 0) ||
                (linkURL.indexOf('http') >= 0) ||
                (linkURL.indexOf('//:') >= 0)) {
                return true;
            }
        }
    });
    // ----------------------------------------
    // Test WebPage
    // ----------------------------------------
    var $wpt_butt = jQuery('<button>').attr({
        class: 'myEDOBut',
        id: 'testPage',
        title: 'Queue up a Page Test'
    }).text('Web Page Test');
    // create input for email
    var dEmail = GM_getValue('email', 'your.name@cdk.com'), //tampermonkey func(variableName, defaultValue)
        $emTitle = jQuery('<div>').text('Enter your email'),
        $em = jQuery('<input>').attr({
            id: 'email',
            type: 'text',
            value: dEmail
        }).css({
            margin: '5px 0px',
            width: '85%'
        }),
        $wptInput = jQuery('<div>').attr({
            id: 'wptInput'
        }).css({
            padding: '5px',
            display: 'none',
            'border-bottom': '1px solid #000000'
        }),
        myOptions = {
            '_IE11': 'IE11',
            ':Chrome': 'Chrome',
            ':FireFox': 'Firefox'
        };
    // ----------------------------------------
    // advanced settings
    var $settingsContainer = jQuery('<div>').attr({
            id: 'wptSettings'
        }),
        $toggleSettings = jQuery('<div>').attr({
            id: 'wptSettingToggle',
            title: 'click to view settings'
        }).css({
            cursor: 'pointer',
            padding: '5px',
            'font-style': 'italic',
            background: 'white',
            'font-size': '11px'
        }).text('Advanced Settings'),
        $wptSettingsTitle = jQuery('<div>').css({
            'font-weight': 'bold',
            'border-top': '1px solid #000000',
            'border-bottom': '1px solid #000000'
        }).text('WebPageTest Settings');
    //    $toggleSettings.before($wptInput);
    $settingsContainer.append($toggleSettings);
    $toggleSettings.on('click', function () {
        return $wptInput.slideToggle('2000');
    });
    // ----------------------------------------
    // create drop down menu for WPT
    var $browserOptions = jQuery('<select>').attr({
            id: 'bSelect'
        }).css({
            margin: '5px 0',
            width: '90%'
        }),
        $browserTitle = jQuery('<div>').text('Choose a Browser');
    jQuery.each(myOptions, function (val, text) {
        $browserOptions.append(jQuery('<option></option>').val(val).html(text));
    });
    // build input panel
    jQuery($wptInput)
        .append($wptSettingsTitle)
        .append($emTitle)
        .append($em)
        .append($browserTitle)
        .append($browserOptions);
    // WPT main function
    $wpt_butt.click(function () {
        GM_setValue('email', jQuery($em).val()); // tampermonkey (variableName, value)
        var browser = jQuery('#bSelect option:selected').val(), // get value from drop down
            bName = jQuery('#bSelect option:selected').text(),
            email = GM_getValue('email'),
            siteURL = cm.getUrl(),
            isNextGen = '?%26nextGen=true',
            pageName = cm.getPageName(),
            testURL = 'http://www.webpagetest.org/runtest.php?',
            params = {
                k: 'A.1b40e6dc41916bd77b0541187ac9e74b',
                runs: '3',
                fvonly: '1',
                notify: email,
                location: 'Dulles' + browser
            },
            newTab, dURL;
        // build urls
        jQuery.each(params, function (index, value) {
            testURL += index + '=' + value + '&';
        });
        dURL = testURL + 'url=' + siteURL + pageName + isNextGen + '&device=immobile';
        if (confirm('----------------------------------------\n' +
                'Test the Desktop site?\n' +
                '----------------------------------------\n' +
                'Browser : ' + bName + '\n' +
                'Send Results To : ' + email + '\n' +
                '----------------------------------------') === true) {
            newTab = GM_openInTab(dURL, true);
        }
    });
    // ----------------------------------------
    var $version = jQuery('<div>').css({
        'font-size': '12px'
    }).text('version: ' + GM_info.script.version);
    $tbt.click(function () {
        $tb.toggle();
    });
    jQuery($tb)
        .append($tbt)
        .append($wid)
        .append($pn);
    //initialize autofill toggle
    autofillToggle.init();
    // initialize refresh button tool
    refreshPage.init();
    jQuery($tb)
        .append($nextGenCheck)
        .append($sn_butt)
        .append($lc_butt)
        .append($ic_butt)
        .append($opc_butt)
        //        .append($af_butt)
        .append($sc_butt)
        .append($404checker_butt)
        .append($wpt_butt)
        .append($toggleSettings) // new
        .append($wptInput)
        .append($version);
    jQuery($tb).children('.myEDOBut:even').css({
        background: 'linear-gradient(to left,#00d2ff 0,#3a7bd5 100%)'
    });
    jQuery($tb).children('.myEDOBut:odd').css({
        background: 'linear-gradient(to left, #4b6cb7 0px, #182848 100%)'
    });
    jQuery('head').append($tbs);
    jQuery('body').append($tb);
    jQuery('body').append($legenContainer);
}
