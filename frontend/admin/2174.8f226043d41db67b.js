"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[2174],{62174:(A,C,s)=>{s.r(C),s.d(C,{ProductSeoModule:()=>wt});var m=s(69808),g=s(99291),M=s(8300),_=s(92340),l=s(93075),t=s(5e3),P=s(10518),d=s(54306),c=s(85775),p=s(12047);const u=o=>o.productSeo,D=(0,c.P1)(u,p.Qb),$=(0,c.P1)(u,p.SS),z=(0,c.P1)(u,p.wR),U=(0,c.P1)(u,p.ZA),V=(0,c.P1)(u,p.YG),j=(0,c.P1)(u,p.Rs),N=(0,c.P1)(u,p.$g),B=(0,c.P1)(u,p.QO),K=(0,c.P1)(u,p.vf),R=(0,c.P1)(u,p.gp),G=(0,c.P1)(u,p.uB),H=(0,c.P1)(u,p.mn),Q=(0,c.P1)(u,p.Dq),W=(0,c.P1)(u,p.oo),X=(0,c.P1)(u,p.P9),Y=(0,c.P1)(u,p.uC),Z=(0,c.P1)(u,p.hW);var q=s(47319);let x=(()=>{class o{constructor(e,n){this.appState=e,this.router=n,this.productSeoList$=this.appState.select(D),this.productSeoListLoading$=this.appState.select(z),this.productSeoListLoaded$=this.appState.select($),this.productSeoListFailed$=this.appState.select(U),this.productSeoListCount$=this.appState.select(V),this.productSeoListCountLoading$=this.appState.select(N),this.productSeoListCountLoaded$=this.appState.select(j),this.productSeoListCountFailed$=this.appState.select(B),this.productSeoDetail$=this.appState.select(K),this.productSeoDetailLoading$=this.appState.select(G),this.productSeoDetailLoaded$=this.appState.select(R),this.productSeoDetailFailed$=this.appState.select(H),this.productSeoUpdate$=this.appState.select(Q),this.productSeoUpdateLoading$=this.appState.select(X),this.productSeoUpdateLoaded$=this.appState.select(W),this.productSeoUpdateFailed$=this.appState.select(Y),this.productSeoStatus$=this.appState.select(Z)}getProductSeoList(e){this.appState.dispatch(new d.Rt(e))}getProductSeoListCount(e){this.appState.dispatch(new d.cY(e))}getProductSeoDetail(e){this.appState.dispatch(new d.lh(e))}getProductSeoUpdate(e){this.appState.dispatch(new d.N6(e))}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275inject(q.yh),t.\u0275\u0275inject(g.F0))},o.\u0275prov=t.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();var y=s(84218);function J(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Meta tag title is required"),t.\u0275\u0275elementEnd())}function tt(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Maximum 70 characters"),t.\u0275\u0275elementEnd())}function et(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"div",19),t.\u0275\u0275template(1,J,2,0,"div",20),t.\u0275\u0275template(2,tt,2,0,"div",20),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.f.metaTagTitle.errors.required),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.f.metaTagTitle.errors.maxlength)}}function ot(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Meta tag Description is required"),t.\u0275\u0275elementEnd())}function nt(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Maximum 160 characters"),t.\u0275\u0275elementEnd())}function it(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"div",19),t.\u0275\u0275template(1,ot,2,0,"div",20),t.\u0275\u0275template(2,nt,2,0,"div",20),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.f.metaTagDescription.errors.required),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.f.metaTagDescription.errors.maxlength)}}function rt(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Meta tag keyword is required"),t.\u0275\u0275elementEnd())}function at(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"Maximum 255 characters"),t.\u0275\u0275elementEnd())}function st(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"div",19),t.\u0275\u0275template(1,rt,2,0,"div",20),t.\u0275\u0275template(2,at,2,0,"div",20),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.f.metaTagKeyword.errors.required),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.f.metaTagKeyword.errors.maxlength)}}const w=function(o){return{"is-invalid":o}};let lt=(()=>{class o{constructor(e,n,i,a,v){this.modalService=e,this.fb=n,this.route=i,this.sandbox=a,this.router=v,this.pageSize="10",this.keyword="",this.pagenationcount=!0,this.submitted=!1,this.editCountryInfo=[]}get f(){return this.seoForm.controls}ngOnInit(){this.initForm(),this.setDefaultValues(),this.editCountryId=this.route.snapshot.paramMap.get("id")}setDefaultValues(){const e={};e.id=this.seoId,this.sandbox.getProductSeoDetail(e),this.sandbox.productSeoDetail$.subscribe(n=>{n&&n.seo&&(this.seoForm.controls.metaTagTitle.setValue(n.seo.metaTagTitle),this.seoForm.controls.metaTagDescription.setValue(n.seo.metaTagDescription),this.seoForm.controls.metaTagKeyword.setValue(n.seo.metaTagKeyword))})}htmlTagConversion(e){return e.replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&#39;","'").replaceAll("&sbquo;","\u201a").replaceAll("&#61;","=").replaceAll("&#45;","-").replaceAll("&hellip;","\u2026").replaceAll("&commat;","@").replaceAll("&copy;","\xa9").replaceAll("&#35;","#").replaceAll("&ldquo;","\u201c").replaceAll("&rsquo;","\u2019").replaceAll("&lsquo;","\u2018").replaceAll("&trade;","\u2122").replaceAll("&reg;","\xae").replaceAll("&ndash;","\u2013").replaceAll("&eacute;","\xe9").replaceAll("&euro;","\u20ac").replaceAll("&pound;","\xa3")}initForm(){this.seoForm=this.fb.group({metaTagTitle:[null,[l.Validators.required,l.Validators.maxLength(70)]],metaTagDescription:[null,[l.Validators.required,l.Validators.maxLength(160)]],metaTagKeyword:[null,[l.Validators.required,l.Validators.maxLength(255)]]})}close(){this.modalService.close("close")}countrycancel(){this.router.navigate(["/settings/local/countries"])}onSubmit(){if(this.submitted=!0,this.seoForm.invalid)return;const e={};e.metaTagTitle=this.seoForm.value.metaTagTitle,e.metaTagDescription=this.seoForm.value.metaTagDescription,e.metaTagKeyword=this.seoForm.value.metaTagKeyword,e.id=this.seoId,this.sandbox.getProductSeoUpdate(e),this.modalService.close("close")}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(P.Kz),t.\u0275\u0275directiveInject(l.FormBuilder),t.\u0275\u0275directiveInject(g.gz),t.\u0275\u0275directiveInject(x),t.\u0275\u0275directiveInject(g.F0))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-add"]],inputs:{seoId:"seoId"},decls:41,vars:19,consts:[[1,"flex","setting2-inner-header"],[1,"modal-header__title"],[1,"close-modal",3,"click"],["src","assets/img/modal-close.svg"],[1,"settings-right-wrapper","addnewuser"],[1,"new-user"],[1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-12","col-xs-12"],[1,"form-group"],[1,"supvalidation"],["type","text","formControlName","metaTagTitle","placeholder","Meta Tag Title",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","metaTagDescription",3,"ngClass"],["type","text","formControlName","metaTagKeyword","placeholder","Meta Tag Keyword",1,"form-control",3,"ngClass"],[1,"col-12"],[1,"modal-action-btns","flex"],["type","submit"],[1,"cancel-btn",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"h3",1),t.\u0275\u0275text(2,"Add SEO"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"button",2),t.\u0275\u0275listener("click",function(){return n.close()}),t.\u0275\u0275element(4,"img",3),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(5,"div",4)(6,"div",5)(7,"form",6),t.\u0275\u0275listener("ngSubmit",function(){return n.onSubmit()}),t.\u0275\u0275elementStart(8,"div",7)(9,"div",8)(10,"div",9)(11,"label"),t.\u0275\u0275text(12,"Meta Tag Title"),t.\u0275\u0275elementStart(13,"sup",10),t.\u0275\u0275text(14,"*"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(15,"input",11),t.\u0275\u0275template(16,et,3,2,"div",12),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(17,"div",8)(18,"div",9)(19,"label"),t.\u0275\u0275text(20,"Meta Tag Description"),t.\u0275\u0275elementStart(21,"sup",10),t.\u0275\u0275text(22,"*"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(23,"textarea",13),t.\u0275\u0275template(24,it,3,2,"div",12),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(25,"div",8)(26,"div",9)(27,"label"),t.\u0275\u0275text(28,"Meta Tag Keyword"),t.\u0275\u0275elementStart(29,"sup",10),t.\u0275\u0275text(30,"*"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(31,"input",14),t.\u0275\u0275template(32,st,3,2,"div",12),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(33,"div",15)(34,"div",16)(35,"button",17),t.\u0275\u0275text(36),t.\u0275\u0275pipe(37,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(38,"button",18),t.\u0275\u0275listener("click",function(){return n.close()}),t.\u0275\u0275text(39),t.\u0275\u0275pipe(40,"translate"),t.\u0275\u0275elementEnd()()()()()()()),2&e&&(t.\u0275\u0275advance(7),t.\u0275\u0275property("formGroup",n.seoForm),t.\u0275\u0275advance(8),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(13,w,n.submitted&&n.f.metaTagTitle.errors)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.submitted&&n.f.metaTagTitle.errors),t.\u0275\u0275advance(7),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(15,w,n.submitted&&n.f.metaTagDescription.errors)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.submitted&&n.f.metaTagDescription.errors),t.\u0275\u0275advance(7),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(17,w,n.submitted&&n.f.metaTagKeyword.errors)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n.submitted&&n.f.metaTagKeyword.errors),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(37,9,"Settings.Local.Save")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(40,11,"Settings.Local.Cancel")))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,l.DefaultValueAccessor,l.NgControlStatus,l.FormControlName,m.NgClass,m.NgIf],pipes:[y.X$],styles:[".mat-radio-outer-circle[_ngcontent-%COMP%]{left:-3px!important;margin-top:-3px!important;width:19px!important}mat-radio-button[_ngcontent-%COMP%]{padding:1px 4px!important}.settings-right-wrapper[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}.setting2-inner-header[_ngcontent-%COMP%]{justify-content:space-between;margin-bottom:0}.settings-right-wrapper.addnewuser[_ngcontent-%COMP%]{padding:0!important;z-index:0;position:relative}.settings-right-wrapper.addnewuser[_ngcontent-%COMP%]   .new-user[_ngcontent-%COMP%]{padding:0 16px;border:none}.invalid-feedback[_ngcontent-%COMP%]{display:block!important}.modal-action-btns[_ngcontent-%COMP%]{justify-content:center}"]}),o})();var O=s(22290),dt=s(73056),E=s(22313);let ct=(()=>{class o{constructor(e,n,i){this.fb=e,this.route=n,this.sandbox=i,this.selectedLink="Min",this.progressEmits=new t.EventEmitter}ngOnInit(){this.pageSize=sessionStorage.getItem("itemsPerPage"),this.pagenationCount=!0,this.setForm()}setForm(){var e;this.initFilterForm(),this.filterForm.controls.keyword.setValue(this.keyword),this.filterForm.controls.sku.setValue(this.sku),this.filterForm.controls.status.setValue(null===(e=this.status)||void 0===e?void 0:e.toString()),this.filterForm.controls.price.setValue(this.price),this.filterForm.controls.productType.setValue(this.productType)}initFilterForm(){this.filterForm=this.fb.group({keyword:["",l.Validators.required],sku:["",l.Validators.required],status:[null,l.Validators.required],price:["",l.Validators.required],productType:[null,l.Validators.required]})}selectPrice(e){this.selectedLink=e}resetFilter(){this.filterForm.reset();const e={};e.limit=this.pageSize,e.offset=0,e.keyword="",this.progressEmits.emit(e),this.sandbox.getProductSeoList(e),e.count=1}applyFilter(){this.keyword=this.filterForm.value.keyword?this.filterForm.value.keyword:"",this.sku=this.filterForm.value.sku?this.filterForm.value.sku:"",this.status=0===this.filterForm.value.status?this.status="0":1===this.filterForm.value.status?this.status="1":"";const e={offset:""};e.limit=this.pageSize,e.keyword=this.keyword,this.progressEmits.emit(e)}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(l.FormBuilder),t.\u0275\u0275directiveInject(g.gz),t.\u0275\u0275directiveInject(x))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-product-seo-filter"]],inputs:{pageSize:"pageSize"},outputs:{progressEmits:"progressEmits"},decls:14,vars:13,consts:[[1,"filter-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","keyword"],["type","text","formControlName","keyword","id","Keyword","aria-describedby","emailHelp",1,"form-control",3,"placeholder"],[1,"filter-btns"],["type","submit",1,"btn",3,"click"],[1,"btn","reset",3,"click"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"form",0),t.\u0275\u0275listener("ngSubmit",function(){return n.applyFilter()}),t.\u0275\u0275elementStart(1,"div",1)(2,"label",2),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"input",3),t.\u0275\u0275pipe(6,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div",4)(8,"button",5),t.\u0275\u0275listener("click",function(){return n.applyFilter()}),t.\u0275\u0275text(9),t.\u0275\u0275pipe(10,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"button",6),t.\u0275\u0275listener("click",function(){return n.resetFilter()}),t.\u0275\u0275text(12),t.\u0275\u0275pipe(13,"translate"),t.\u0275\u0275elementEnd()()()),2&e&&(t.\u0275\u0275property("formGroup",n.filterForm),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(4,5,"catalog.product.ProductName")),t.\u0275\u0275advance(2),t.\u0275\u0275propertyInterpolate("placeholder",t.\u0275\u0275pipeBind1(6,7,"catalog.product.EnterSearchProductName")),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(10,9,"catalog.product.ApplyFilters")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(13,11,"catalog.product.Reset")))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,l.DefaultValueAccessor,l.NgControlStatus,l.FormControlName],pipes:[y.X$],styles:[""]}),o})();var pt=s(33052),ut=s(89113),mt=s(86087);const gt=["pagination"];function ht(o,r){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"p"),t.\u0275\u0275text(6),t.\u0275\u0275pipe(7,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"input",8),t.\u0275\u0275listener("change",function(i){return t.\u0275\u0275restoreView(e),t.\u0275\u0275nextContext().changeFilter(i)}),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(9,"label",9),t.\u0275\u0275elementEnd()()()()()}2&o&&(t.\u0275\u0275advance(6),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(7,2,"catalog.product.Filters")),t.\u0275\u0275advance(2),t.\u0275\u0275property("checked",!0))}function ft(o,r){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",20)(1,"div",21)(2,"app-product-seo-filter",22),t.\u0275\u0275listener("progressEmits",function(i){return t.\u0275\u0275restoreView(e),t.\u0275\u0275nextContext(2).receiveProgress(i)}),t.\u0275\u0275elementEnd()()()}if(2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(2),t.\u0275\u0275property("pageSize",e.pageSize)}}const St=function(){return["delete-product","view-product","edit-product"]};function vt(o,r){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"tr")(1,"td",28),t.\u0275\u0275element(2,"img",29),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"td",30),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"td",31)(6,"button",32),t.\u0275\u0275listener("click",function(){const a=t.\u0275\u0275restoreView(e).$implicit;return t.\u0275\u0275nextContext(3).updateProductSeo(a.productId)}),t.\u0275\u0275text(7," Update Meta "),t.\u0275\u0275elementEnd()()()}if(2&o){const e=r.$implicit,n=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(2),t.\u0275\u0275property("src",n.imageUrl+"?path="+e.containerName+"&name="+e.image+"&width=60&height=60",t.\u0275\u0275sanitizeUrl)("alt",e.name),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1("",e.name," "),t.\u0275\u0275advance(1),t.\u0275\u0275property("appHideIfUnauthorized",void 0)("multipleHide",t.\u0275\u0275pureFunction0(5,St))}}const Pt=function(){return["view-product","delete-product","edit-product"]};function Ct(o,r){if(1&o&&(t.\u0275\u0275elementStart(0,"table",23)(1,"thead")(2,"tr")(3,"th",24),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"th",25),t.\u0275\u0275text(7),t.\u0275\u0275pipe(8,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"th",26),t.\u0275\u0275text(10),t.\u0275\u0275pipe(11,"translate"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(12,"tbody"),t.\u0275\u0275template(13,vt,8,6,"tr",27),t.\u0275\u0275pipe(14,"async"),t.\u0275\u0275elementEnd()()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,6,"catalog.product.Image")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(8,8,"catalog.product.ProductsName")," "),t.\u0275\u0275advance(2),t.\u0275\u0275property("appHideIfUnauthorized",void 0)("multipleHide",t.\u0275\u0275pureFunction0(14,Pt)),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(11,10,"catalog.product.Action"),""),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",t.\u0275\u0275pipeBind1(14,12,e.productSeoSandbox.productSeoList$))}}function _t(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div",33)(1,"p"),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd()()),2&o&&(t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,1,"Sales.Orders.datanotfound")))}const xt=function(o){return{changesize:o}},yt=function(o){return[o]};function bt(o,r){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",10),t.\u0275\u0275template(1,ft,3,1,"div",11),t.\u0275\u0275elementStart(2,"div",12)(3,"div",13),t.\u0275\u0275element(4,"app-global-loader",14),t.\u0275\u0275pipe(5,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",15),t.\u0275\u0275template(7,Ct,15,15,"table",16),t.\u0275\u0275pipe(8,"async"),t.\u0275\u0275pipe(9,"async"),t.\u0275\u0275template(10,_t,4,3,"div",17),t.\u0275\u0275pipe(11,"async"),t.\u0275\u0275pipe(12,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(13,"mat-paginator",18,19),t.\u0275\u0275listener("page",function(i){return t.\u0275\u0275restoreView(e),t.\u0275\u0275nextContext().onPageChange(i)}),t.\u0275\u0275pipe(15,"async"),t.\u0275\u0275elementEnd()()()}if(2&o){const e=t.\u0275\u0275nextContext();let n,i;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",1==e.buttoncheck),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(22,xt,1==e.buttoncheck)),t.\u0275\u0275advance(2),t.\u0275\u0275property("isShow",t.\u0275\u0275pipeBind1(5,10,e.productSeoSandbox.productSeoListLoading$)),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",(null==(n=t.\u0275\u0275pipeBind1(8,12,e.productSeoSandbox.productSeoList$))?null:n.length)>0&&t.\u0275\u0275pipeBind1(9,14,e.productSeoSandbox.productSeoListLoaded$)),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",0==(null==(i=t.\u0275\u0275pipeBind1(11,16,e.productSeoSandbox.productSeoList$))?null:i.length)&&t.\u0275\u0275pipeBind1(12,18,e.productSeoSandbox.productSeoListLoaded$)),t.\u0275\u0275advance(3),t.\u0275\u0275property("length",t.\u0275\u0275pipeBind1(15,20,e.productSeoSandbox.productSeoListCount$))("pageSize",e.pageSize)("pageIndex",e.index)("pageSize",e.pageSize)("pageSizeOptions",t.\u0275\u0275pureFunction1(24,yt,e.pageSize))}}function Ft(o,r){1&o&&(t.\u0275\u0275elementStart(0,"div",34)(1,"div",35),t.\u0275\u0275element(2,"img",36),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",37)(4,"h3"),t.\u0275\u0275text(5,"Product Seo"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"p"),t.\u0275\u0275text(7,"This feature is currently not active for you"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"h4"),t.\u0275\u0275text(9,"To activate this feature"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"h5")(11,"i"),t.\u0275\u0275text(12,"Goto : "),t.\u0275\u0275elementStart(13,"a",38),t.\u0275\u0275text(14," Settings menu > AddOns > Seo "),t.\u0275\u0275elementEnd()()()()())}const Lt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class o{constructor(e,n,i,a,v,Ot,Et){this.router=e,this.toastr=n,this.modalService=i,this.configService=a,this.route=v,this.productSeoSandbox=Ot,this.titleService=Et,this.keyword="",this.offset=0,this.index=0,this.sku="",this.status="",this.price=0,this.isActive=[],this.buttoncheck=!0,this.productListImage={},this.checkCondition=[],this.checkmodules=[],this.checkedData=[],this.unCheckData=[],this.previousSort={},this.selectedSortField="",this.currentPage=1,this.filterParams={},this.subscriptions=[],this.bulkFunction=!1,this.selectedAll=!1,this.filterData=[],this.filterDataId=[],this.productType="",this.title="Product-SEO"}ngOnInit(){this.titleService.setTitle(this.title),this.pageSize=sessionStorage.getItem("itemsPerPage")?sessionStorage.getItem("itemsPerPage"):this.pageSize,this.isCount=!0,this.paginations(),this.index=this.route.snapshot.queryParamMap.get("index"),this.offset=this.route.snapshot.queryParamMap.get("offset"),0!==this.index?this.pageChangeEvent():(this.ProductSeoLists(),this.paginations()),this.imageUrl=_.N.imageUrl,this.productUrl=_.N.productUrl}ProductSeoLists(){const e={};e.offset=this.offset,e.limit=this.pageSize,e.keyword=this.keyword,this.productSeoSandbox.getProductSeoList(e),this.subscribe()}subscribe(){this.subscriptions.push(this.productSeoSandbox.productSeoList$.subscribe(e=>{e&&0===e.length&&(this.productList=e,0!==this.index&&(this.index=+this.index-1,this.router.navigate([],{relativeTo:this.route,queryParams:this.filterParams,queryParamsHandling:"merge"})))}))}changeFilter(e){this.buttoncheck=e.target.checked}onPageChange(e){this.isCount=!1,this.pageSize=e.pageSize,this.index=e.pageIndex,this.offset=e.pageSize*e.pageIndex,this.filterDataId=[],this.selectedAll=!1,this.ProductSeoLists()}pageChangeEvent(){this.isCount=!1,this.pageSize=this.pageSize,this.offset=this.pageSize*this.index,this.filterDataId=[],this.selectedAll=!1,this.ProductSeoLists()}onFilterChange(e,n){const i={};i.productId=n.productId,i.isFeature=!0===e.target.checked?"1":"0"}receiveProgress(e){this.index=0,this.keyword=e.keyword,this.sku=e.sku,this.status=e.status,this.offset=0,(""!==this.keyword||""!==this.sku||""!==this.status)&&(this.paginator.firstPage(),this.ProductSeoLists(),this.paginations())}paginations(){const e={};e.offset=this.offset,e.limit=this.pageSize,e.keyword=this.keyword,e.sku=this.sku,e.status=this.status,e.price=this.price,e.productType=this.productType,e.count=!0,this.productSeoSandbox.getProductSeoListCount(e)}showNotificationError(e){this.toastr.error(e)}pageChange(e){this.selectedSortField="",window.scroll(0,0),this.currentPage=e,this.offset=this.pageSize*(e-1),this.ProductSeoLists()}selectAll(){for(let e=0;e<this.productListArray.length;e++)this.productListArray[e].selected=this.selectedAll;this.filterDataList(),this.bulkFunction=this.filterData.length>0}checkIfAllSelected(){this.bulkFunction=!0,this.selectedAll=this.productListArray.every(function(e){return!0===e.selected}),this.filterDataList(),this.bulkFunction=this.filterData.length>0}filterDataList(){this.filterData=this.productListArray.filter(e=>{if(!0===e.selected)return e}),this.filterDataId=this.filterData.map(e=>e.productId)}viewQuestion(e){this.router.navigate(["/cms/manage-content/question_answer/question",e])}updateProductSeo(e){this.modalService.open(lt,{windowClass:"add-local",keyboard:!1,backdrop:"static",animation:!1}).componentInstance.seoId=e}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(g.F0),t.\u0275\u0275directiveInject(O._W),t.\u0275\u0275directiveInject(P.FF),t.\u0275\u0275directiveInject(dt.E),t.\u0275\u0275directiveInject(g.gz),t.\u0275\u0275directiveInject(x),t.\u0275\u0275directiveInject(E.Dx))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-list"]],viewQuery:function(e,n){if(1&e&&t.\u0275\u0275viewQuery(gt,5),2&e){let i;t.\u0275\u0275queryRefresh(i=t.\u0275\u0275loadQuery())&&(n.paginator=i.first)}},decls:6,vars:9,consts:[["class","row products-section products-sub-section",4,"ngIf"],["class","flex product-wrap example-full-width",4,"ngIf"],["class","cash-on-delivery flex",4,"ngIf"],[1,"row","products-section","products-sub-section"],[1,"col-12"],[1,"flex","filter-row"],[1,"filter-lft"],[1,"toggle"],["id","cb1","type","checkbox",1,"tgl","tgl-light",3,"checked","change"],["for","cb1",1,"tgl-btn"],[1,"flex","product-wrap","example-full-width"],["class","filter-section",4,"ngIf"],[1,"product-table",3,"ngClass"],[1,"spinner-wrapper"],[2,"transform","translate(38%, 50%)","position","absolute",3,"isShow"],[1,"table-responsive"],["class","table",4,"ngIf"],["class","no_data",4,"ngIf"],[3,"length","pageSize","pageIndex","pageSizeOptions","page"],["pagination",""],[1,"filter-section"],[1,"w3-container"],[3,"pageSize","progressEmits"],[1,"table"],["scope","col"],["scope","col","width","20%"],["scope","col",1,"text-center",3,"appHideIfUnauthorized","multipleHide"],[4,"ngFor","ngForOf"],[1,"product-image",2,"position","relative"],["onError","this.src='assets/error-images/Load-icon-Products.png';",3,"src","alt"],["width","60%",2,"position","relative"],["width","120px",1,"cat-prd-action","text-center",3,"appHideIfUnauthorized","multipleHide"],[1,"button-reg","primary",3,"click"],[1,"no_data"],[1,"cash-on-delivery","flex"],[1,"cod-img"],["src","assets/img/circles-three-plus.svg","alt",""],[1,"cod-content"],["href","#/settings/add-on"]],template:function(e,n){if(1&e&&(t.\u0275\u0275template(0,ht,10,4,"div",0),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275template(2,bt,16,26,"div",1),t.\u0275\u0275pipe(3,"async"),t.\u0275\u0275template(4,Ft,15,0,"div",2),t.\u0275\u0275pipe(5,"async")),2&e){let i,a,v;t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"!=(null==(i=t.\u0275\u0275pipeBind1(1,3,n.productSeoSandbox.productSeoStatus$))?null:i.message)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"!=(null==(a=t.\u0275\u0275pipeBind1(3,5,n.productSeoSandbox.productSeoStatus$))?null:a.message)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"==(null==(v=t.\u0275\u0275pipeBind1(5,7,n.productSeoSandbox.productSeoStatus$))?null:v.message))}},directives:[m.NgIf,ct,m.NgClass,pt.A,ut.E,m.NgForOf,mt.NW],pipes:[m.AsyncPipe,y.X$],styles:[".disable[_ngcontent-%COMP%]{pointer-events:none}.product-wrap[_ngcontent-%COMP%]   .product-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .globe_icon[_ngcontent-%COMP%]{padding:5px 3px!important}.product-wrap[_ngcontent-%COMP%]   .product-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]{top:0!important}.cat-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.spinner-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;justify-items:center}"]}),o})(),canActivate:[M.a],data:{permission:"list-product",urls:[{title:"CMS",url:""},{title:"Manage SEO",url:""},{title:"Product",url:""},{title:"List",url:""}]}}];let Tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({imports:[[g.Bz.forChild(Lt)],g.Bz]}),o})();var It=s(34303),h=s(36642),b=s(97582),F=s(39646),L=s(54004),S=s(63900),T=s(70262),I=s(18505),Mt=s(9900);let k=(()=>{class o extends Mt.V{constructor(){super(...arguments),this.params={},this.basUrl=this.getBaseUrl()}productSeoList(e){let n={};return n=e,this.http.get(this.basUrl+"/product-seo",{params:n})}productSeoListCount(e){let n={};return n=e,this.http.get(this.basUrl+"/product-seo",{params:n})}detailSeo(e){let n={};return n=e,this.http.get(this.basUrl+"/product-seo/"+e.id)}updateSeo(e){let n={};return n=e,this.http.post(this.basUrl+"/product-seo/"+e.id,e)}}return o.\u0275fac=function(){let r;return function(n){return(r||(r=t.\u0275\u0275getInheritedFactory(o)))(n||o)}}(),o.\u0275prov=t.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();class f{constructor(r,e,n){this.action$=r,this.service=e,this.toastr=n,this.getProductSeoList$=this.action$.pipe((0,h.l4)(d.MF.GET_PRODUCT_SEO_LIST),(0,L.U)(i=>i.payload),(0,S.w)(i=>this.service.productSeoList(i).pipe((0,I.b)(a=>{}),(0,S.w)(a=>[new d.vf(a)]),(0,T.K)(a=>(0,F.of)(new d.nY(a)))))),this.getProductSeoListCount$=this.action$.pipe((0,h.l4)(d.MF.GET_PRODUCT_SEO_LIST_COUNT),(0,L.U)(i=>i.payload),(0,S.w)(i=>this.service.productSeoListCount(i).pipe((0,I.b)(a=>{}),(0,S.w)(a=>[new d.GW(a)]),(0,T.K)(a=>(0,F.of)(new d.sd(a)))))),this.getProductSeoDetail$=this.action$.pipe((0,h.l4)(d.MF.GET_PRODUCT_SEO_DETAIL),(0,L.U)(i=>i.payload),(0,S.w)(i=>this.service.detailSeo(i).pipe((0,I.b)(a=>{}),(0,S.w)(a=>[new d.Cv(a)]),(0,T.K)(a=>(0,F.of)(new d.U_(a)))))),this.UpdateSeoProduct$=this.action$.pipe((0,h.l4)(d.MF.UPDATE_PRODUCT_SEO),(0,L.U)(i=>i.payload),(0,S.w)(i=>this.service.updateSeo(i).pipe((0,I.b)(a=>{}),(0,S.w)(a=>[new d.aI(a)]),(0,T.K)(a=>(0,F.of)(new d._F(a))))))}}f.\u0275fac=function(r){return new(r||f)(t.\u0275\u0275inject(h.eX),t.\u0275\u0275inject(k),t.\u0275\u0275inject(O._W))},f.\u0275prov=t.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac}),(0,b.gn)([(0,h.Qm)()],f.prototype,"getProductSeoList$",void 0),(0,b.gn)([(0,h.Qm)()],f.prototype,"getProductSeoListCount$",void 0),(0,b.gn)([(0,h.Qm)()],f.prototype,"getProductSeoDetail$",void 0),(0,b.gn)([(0,h.Qm)()],f.prototype,"UpdateSeoProduct$",void 0);let wt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({providers:[x,k,E.Dx],imports:[[m.CommonModule,Tt,l.FormsModule,l.ReactiveFormsModule,It.m,h.sQ.forFeature([f]),y.aw.forChild({})]]}),o})()},33052:(A,C,s)=>{s.d(C,{A:()=>l});var m=s(5e3),g=s(9932),M=s(69808);function _(t,P){1&t&&(m.\u0275\u0275elementStart(0,"div",1)(1,"div",2),m.\u0275\u0275element(2,"img",3),m.\u0275\u0275elementEnd()())}let l=(()=>{class t{constructor(d){this.httpStatus=d,this.subscriptions=[],this.loader=!1,this.getHttpResponse()}ngOnInit(){}getHttpResponse(){this.subscriptions.push(this.httpStatus.getHttpStatus().subscribe(d=>{this.loader=d}))}ngOnDestroy(){this.subscriptions.forEach(d=>d.unsubscribe())}}return t.\u0275fac=function(d){return new(d||t)(m.\u0275\u0275directiveInject(g.Z))},t.\u0275cmp=m.\u0275\u0275defineComponent({type:t,selectors:[["app-global-loader"]],inputs:{isShow:"isShow"},decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row"],["width","80px","height","80px","src","./assets/loader/Spurt-commerce-Loader-2.1.gif"]],template:function(d,c){1&d&&m.\u0275\u0275template(0,_,3,0,"div",0),2&d&&m.\u0275\u0275property("ngIf",c.isShow)},directives:[M.NgIf],styles:['#loader[_ngcontent-%COMP%]{height:175px;inset:0;margin:auto;position:absolute;width:175px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:100%;inset:0;margin:auto;position:absolute;width:87.5px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:before{border-radius:100%;content:"";height:87.5px;left:0;position:absolute;right:0;top:0;transform:scale(0);width:87.5px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1){transform:rotate(45deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1):before{animation:.8s linear .1s normal none infinite running load;background:#00ff80 none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2){transform:rotate(90deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2):before{animation:.8s linear .2s normal none infinite running load;background:#00ffea none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3){transform:rotate(135deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3):before{animation:.8s linear .3s normal none infinite running load;background:#00aaff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4){transform:rotate(180deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4):before{animation:.8s linear .4s normal none infinite running load;background:#0040ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5){transform:rotate(225deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5):before{animation:.8s linear .5s normal none infinite running load;background:#2a00ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6){transform:rotate(270deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6):before{animation:.8s linear .6s normal none infinite running load;background:#9500ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7){transform:rotate(315deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7):before{animation:.8s linear .7s normal none infinite running load;background:magenta none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8){transform:rotate(360deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8):before{animation:.8s linear .8s normal none infinite running load;background:#ff0095 none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background-position:50% 50%;background-repeat:no-repeat;bottom:-40px;height:20px;left:0;position:absolute;right:0;width:180px}@keyframes load{to{opacity:0;transform:scale(1)}}.spinner-message[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{text-align:center}']}),t})()}}]);