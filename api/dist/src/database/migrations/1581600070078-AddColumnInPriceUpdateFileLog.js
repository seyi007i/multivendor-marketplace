'use strict';const a837_0x587b7c=a837_0x57d3;(function(_0xdd082c,_0x9e87b7){const _0x8a4aa1=a837_0x57d3,_0x18c5ad=_0xdd082c();while(!![]){try{const _0x494699=parseInt(_0x8a4aa1(0xae))/0x1+-parseInt(_0x8a4aa1(0x9f))/0x2*(parseInt(_0x8a4aa1(0xa0))/0x3)+parseInt(_0x8a4aa1(0xa3))/0x4*(parseInt(_0x8a4aa1(0xa1))/0x5)+-parseInt(_0x8a4aa1(0x9a))/0x6+-parseInt(_0x8a4aa1(0xa2))/0x7*(parseInt(_0x8a4aa1(0xa9))/0x8)+-parseInt(_0x8a4aa1(0xa6))/0x9+parseInt(_0x8a4aa1(0xaf))/0xa;if(_0x494699===_0x9e87b7)break;else _0x18c5ad['push'](_0x18c5ad['shift']());}catch(_0x3bbbe0){_0x18c5ad['push'](_0x18c5ad['shift']());}}}(a837_0x51df,0x3de68));function a837_0x51df(){const _0x499908=['3HJRhFf','20WoKeQW','1620367ocpDKa','271384aEWOhM','tslib','vendor_id','785286FmJfUj','defineProperty','columnNames','8lCbsGY','__esModule','vendor','typeorm','tableForeignKey','409425dzgMiq','5457040wzibTx','down','CASCADE','__awaiter','hasColumn','fk_tbl_vendor_tbl_price_update_file_log_foreignKey','addColumn','2161506EWHMmB','price_update_file_log','indexOf','foreignKeys','createForeignKey','587966ZTnlIc'];a837_0x51df=function(){return _0x499908;};return a837_0x51df();}Object[a837_0x587b7c(0xa7)](exports,a837_0x587b7c(0xaa),{'value':!![]}),exports['AddColumnInPriceUpdateFileLog1581600070078']=void 0x0;const tslib_1=require(a837_0x587b7c(0xa4)),typeorm_1=require(a837_0x587b7c(0xac));class AddColumnInPriceUpdateFileLog1581600070078{constructor(){const _0x545cf7=a837_0x587b7c;this[_0x545cf7(0xad)]=new typeorm_1['TableForeignKey']({'name':_0x545cf7(0xb4),'columnNames':[_0x545cf7(0xa5)],'referencedColumnNames':['vendor_id'],'referencedTableName':_0x545cf7(0xab),'onDelete':_0x545cf7(0xb1)});}['up'](_0x413cab){const _0x359ad2=a837_0x587b7c;return tslib_1[_0x359ad2(0xb2)](this,void 0x0,void 0x0,function*(){const _0x35c805=_0x359ad2,_0x2a5de8=yield _0x413cab[_0x35c805(0xb3)](_0x35c805(0x9b),_0x35c805(0xa5));!_0x2a5de8&&(yield _0x413cab[_0x35c805(0xb5)]('price_update_file_log',new typeorm_1['TableColumn']({'name':_0x35c805(0xa5),'type':'integer','length':'11','isPrimary':![],'isNullable':!![]})));const _0x324896=yield _0x413cab['getTable'](_0x35c805(0x9b)),_0x15dd19=_0x324896[_0x35c805(0x9d)]['find'](_0x35bd0e=>_0x35bd0e[_0x35c805(0xa8)][_0x35c805(0x9c)](_0x35c805(0xa5))!==-0x1);!_0x15dd19&&(yield _0x413cab[_0x35c805(0x9e)](_0x324896,this[_0x35c805(0xad)]));});}[a837_0x587b7c(0xb0)](_0x1fd978){const _0x1ea7f6=a837_0x587b7c;return tslib_1[_0x1ea7f6(0xb2)](this,void 0x0,void 0x0,function*(){yield _0x1fd978['dropColumn']('price_update_file_log','vendor_id');});}}function a837_0x57d3(_0x3a3b90,_0x31287c){const _0x51df49=a837_0x51df();return a837_0x57d3=function(_0x57d325,_0x342cb8){_0x57d325=_0x57d325-0x9a;let _0x5c2667=_0x51df49[_0x57d325];return _0x5c2667;},a837_0x57d3(_0x3a3b90,_0x31287c);}exports['AddColumnInPriceUpdateFileLog1581600070078']=AddColumnInPriceUpdateFileLog1581600070078;