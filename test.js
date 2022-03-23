// ==UserScript==
// @name         Megapolis notifications for registrar working space
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  corpo shit
// @author       Aga
// @include      https://sed.ugv.corp/
// @exclude      https://sed.ugv.corp/models/*
// @run-at       document-end
// @icon         https://sed.ugv.corp/models/DOC/images/m-docnet.png
// @updateURL    https://raw.githubusercontent.com/chidorishar/test_repo/main/test.js
// @downloadURL  https://raw.githubusercontent.com/chidorishar/test_repo/main/test.js
// ==/UserScript==

function ShowNotification(senderElementID)
{
    logging ? console.log('hello from notification') : null;
    let body, tag;
    switch(senderElementID)
    {
        case 'ubtableview-1658':
            body = '\nВам надіслано новий документ для візування';
            tag = 'mgplsSightNotif_rgstr';
            break;
        case 'ubtableview-1588':
            body = '\nВам надіслано новий інформаційний документ';
            tag = 'mgplsInfoNotif_rgstr';
            break;
        case 'ubtableview-1515':
            body = '\nВам надіслано новий документ на підпис';
            tag = 'mgplsSignNotif_rgstr';
            break;
        case 'ubtableview-1445':
            body = '\nВам надіслано новий документ на виконання';
            tag = 'mgplsExecNotif_rgstr';
            break;
        case 'ubtableview-1373':
            body = '\nВам надіслано новий документ для реєстрації';
            tag = 'mgplsRegistNotif_rgstr';
            break;
        case 'ubtableview-1195':
            body = '\nВам надіслано новий документ на рецензування';
            tag = 'mgplsReviewNotif_rgstr';
            break;
    }
    let configNotification = {body: body, icon: 'https://sed.ugv.corp/models/DOC/images/m-docnet.png',
                              tag: tag, renotify: true, requireInteraction: true};
    //var zz = new Notification("ZZZ" , {});
    notification = new Notification("Megapolis -- new incoming document", configNotification);
    notification.onclick = function(){ window.focus(); notification.close(); }
}