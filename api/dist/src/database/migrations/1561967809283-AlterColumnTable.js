'use strict';const a797_0x6b39ca=a797_0x1b11;(function(_0x23fd6b,_0x158522){const _0x395d10=a797_0x1b11,_0x51365f=_0x23fd6b();while(!![]){try{const _0x400620=-parseInt(_0x395d10(0xad))/0x1*(-parseInt(_0x395d10(0xa4))/0x2)+-parseInt(_0x395d10(0xa9))/0x3*(-parseInt(_0x395d10(0xa6))/0x4)+parseInt(_0x395d10(0xaa))/0x5*(-parseInt(_0x395d10(0x9c))/0x6)+-parseInt(_0x395d10(0x9d))/0x7+parseInt(_0x395d10(0xa8))/0x8*(parseInt(_0x395d10(0x9e))/0x9)+parseInt(_0x395d10(0xa1))/0xa+parseInt(_0x395d10(0xb1))/0xb*(parseInt(_0x395d10(0xb0))/0xc);if(_0x400620===_0x158522)break;else _0x51365f['push'](_0x51365f['shift']());}catch(_0x1ccea5){_0x51365f['push'](_0x51365f['shift']());}}}(a797_0x1429,0x20177));function a797_0x1b11(_0x1b125c,_0x453276){const _0x142992=a797_0x1429();return a797_0x1b11=function(_0x1b1143,_0x2a51ee){_0x1b1143=_0x1b1143-0x9b;let _0x3c05f2=_0x142992[_0x1b1143];return _0x3c05f2;},a797_0x1b11(_0x1b125c,_0x453276);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a797_0x6b39ca(0xa0)]=void 0x0;const tslib_1=require('tslib');class AlterColumnTable1561967809283{['up'](_0x5a6f5a){const _0x27cb14=a797_0x6b39ca;return tslib_1[_0x27cb14(0xae)](this,void 0x0,void 0x0,function*(){const _0xfa59de=_0x27cb14;yield _0x5a6f5a['query']('ALTER\x20TABLE\x20`order_log`\x20CHANGE\x20`order_prefix_id`\x20`order_prefix_id`\x20VARCHAR(255)\x20DEFAULT\x20NULL'),yield _0x5a6f5a['query'](_0xfa59de(0xab)),yield _0x5a6f5a[_0xfa59de(0xaf)](_0xfa59de(0x9f)),yield _0x5a6f5a[_0xfa59de(0xaf)](_0xfa59de(0xa5)),yield _0x5a6f5a[_0xfa59de(0xaf)](_0xfa59de(0xa7)),yield _0x5a6f5a['query']('ALTER\x20TABLE\x20`order_total`\x20CHANGE\x20`value`\x20`value`\x20decimal(15,2)\x20DEFAULT\x20NULL'),yield _0x5a6f5a[_0xfa59de(0xaf)]('ALTER\x20TABLE\x20`order`\x20CHANGE\x20`total`\x20`total`\x20decimal(10,2)\x20DEFAULT\x20NULL'),yield _0x5a6f5a[_0xfa59de(0xaf)](_0xfa59de(0x9b));});}[a797_0x6b39ca(0xa3)](_0x5b6075){const _0x428718=a797_0x6b39ca;return tslib_1[_0x428718(0xae)](this,void 0x0,void 0x0,function*(){const _0x4b3f71=_0x428718;yield _0x5b6075['query'](_0x4b3f71(0xac)),yield _0x5b6075[_0x4b3f71(0xaf)](_0x4b3f71(0xab)),yield _0x5b6075['query']('ALTER\x20TABLE\x20`country`\x20CHANGE\x20`address_format`\x20`address_format`\x20TEXT\x20DEFAULT\x20NULL'),yield _0x5b6075[_0x4b3f71(0xaf)]('ALTER\x20TABLE\x20`order_product`\x20CHANGE\x20`total`\x20`total`\x20decimal(15,2)\x20DEFAULT\x20NULL'),yield _0x5b6075[_0x4b3f71(0xaf)](_0x4b3f71(0xa7)),yield _0x5b6075[_0x4b3f71(0xaf)](_0x4b3f71(0xa2)),yield _0x5b6075['query']('ALTER\x20TABLE\x20`order`\x20CHANGE\x20`total`\x20`total`\x20decimal(10,2)\x20DEFAULT\x20NULL'),yield _0x5b6075[_0x4b3f71(0xaf)](_0x4b3f71(0x9b));});}}function a797_0x1429(){const _0x3bf52d=['198sXuWgk','1180053YriPUx','171wczYxN','ALTER\x20TABLE\x20`country`\x20CHANGE\x20`address_format`\x20`address_format`\x20TEXT\x20DEFAULT\x20NULL','AlterColumnTable1561967809283','2034770jSjvOa','ALTER\x20TABLE\x20`order_total`\x20CHANGE\x20`value`\x20`value`\x20decimal(15,2)\x20DEFAULT\x20NULL','down','2RrtHQF','ALTER\x20TABLE\x20`order_product`\x20CHANGE\x20`total`\x20`total`\x20decimal(15,2)\x20DEFAULT\x20NULL','20PYTSPx','ALTER\x20TABLE\x20`order_product`\x20CHANGE\x20`product_price`\x20`product_price`\x20decimal(15,2)\x20DEFAULT\x20NULL','48736jnIJVI','71067wVSIvW','38165iNrhRe','ALTER\x20TABLE\x20`settings`\x20CHANGE\x20`zone_id`\x20`zone_id`\x20VARCHAR(255)\x20DEFAULT\x20NULL','ALTER\x20TABLE\x20`order_log`\x20CHANGE\x20`order_prefix_id`\x20`order_prefix_id`\x20VARCHAR(255)\x20DEFAULT\x20NULL','65437TmcrFm','__awaiter','query','48UDhmxf','134222suCQsB','ALTER\x20TABLE\x20`customer`\x20CHANGE\x20`zone_id`\x20`zone_id`\x20VARCHAR(255)\x20DEFAULT\x20NULL'];a797_0x1429=function(){return _0x3bf52d;};return a797_0x1429();}exports['AlterColumnTable1561967809283']=AlterColumnTable1561967809283;