// ==UserScript==
// @name         Megapolis notifications for registrar working space
// @namespace    http://tampermonkey.net/
// @version      7.0
// @description  corpo shit
// @author       Aga
// @include      https://sed.ugv.corp/
// @exclude      https://sed.ugv.corp/models/*
// @run-at       document-end
// @icon         https://sed.ugv.corp/models/DOC/images/m-docnet.png
// @updateURL    https://github.com/chidorishar/test_repo/raw/main/test.js
// @downloadURL  https://github.com/chidorishar/test_repo/raw/main/test.js
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
    }
    let configNotification = {body: body, icon: 'https://sed.ugv.corp/models/DOC/images/m-docnet.png',
                              tag: tag, renotify: true, requireInteraction: true};
    //var zz = new Notification("ZZZ" , {});
    notification = new Notification("Megapolis -- new incoming document", configNotification);
    notification.onclick = function(){ window.focus(); notification.close(); }
}