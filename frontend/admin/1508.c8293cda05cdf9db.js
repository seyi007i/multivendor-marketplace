"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[1508],{31508:(H,w,a)=>{a.r(w),a.d(w,{AuthenticationModule:()=>X});var c=a(69808),I=a(10518),h=a(99291),r=a(93075),t=a(5e3),v=a(42431),E=a(97941),M=a(66836),F=a(84218);function O(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",13),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Usernamerequired")," "))}function L(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",13),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Incorrectemail")," "))}function N(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",13),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Passwordrequired")," "))}function A(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",13),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.UsernameorPasswordisincorrect")," "))}function B(e,l){1&e&&t.\u0275\u0275element(0,"span",14)}function j(e,l){1&e&&(t.\u0275\u0275elementStart(0,"span"),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,1,"Profile.Login.login")))}const S=function(e){return{validationcolor:e}},$=function(){return["/auth/forgot-password"]};function z(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",10),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Emailrequired")," "))}function R(e,l){1&e&&(t.\u0275\u0275elementStart(0,"div",10),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"Profile.Login.Error.Incorrectemail")," "))}const D=function(e){return{validationcolor:e}},G=function(){return["/auth/login"]},U=[{path:"login",component:(()=>{class e{constructor(n,o,d){this.fb=n,this.authSandbox=o,this.layoutSandbox=d,this.emailPattern="[a-zA-Z0-9.-_-._]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.ifSubmitted=!1,this.badResponse=!1,this.subscriptions=[]}ngOnInit(){this.loginForm=this.fb.group({userName:["",[r.Validators.required,r.Validators.pattern(this.emailPattern)]],password:["",r.Validators.required]})}validateAllFormFields(n){Object.keys(n.controls).forEach(o=>{const d=n.get(o);d instanceof r.FormControl?d.markAsTouched({onlySelf:!0}):d instanceof r.FormGroup&&this.validateAllFormFields(d)})}onSubmit(n){if(this.ifSubmitted=!0,!this.loginForm.valid)return void this.validateAllFormFields(this.loginForm);const o={};o.userName=this.loginForm.value.userName,o.password=this.loginForm.value.password,this.authSandbox.authLogin(o),this.subscriptions.push(this.authSandbox.loginLoaded$.subscribe(d=>{if(!0===d){const i=JSON.parse(sessionStorage.getItem("adminUser"));this.layoutSandbox.getUserDetail(i)}else this.loginForm.reset()}))}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(r.FormBuilder),t.\u0275\u0275directiveInject(v.j),t.\u0275\u0275directiveInject(E.b))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-spurt-login"]],decls:24,vars:31,consts:[[1,"card-align"],[1,"cards"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"admin"],[1,"log-group","form-group","first"],["type","text","formControlName","userName",1,"form-control",3,"placeholder","ngClass"],["class","validation-error",4,"ngIf"],[1,"log-group","form-group",2,"position","relative"],["type","password","passwordshow","","formControlName","password",1,"form-control",3,"placeholder","ngClass","keydown.space"],[1,"btn","btn-log"],["class","spinner-border spinner-border-sm ","style","margin-left:20px;width:23px;height:23px","aria-hidden","true",4,"ngIf"],[4,"ngIf"],[1,"forgot",3,"routerLink"],[1,"validation-error"],["aria-hidden","true",1,"spinner-border","spinner-border-sm",2,"margin-left","20px","width","23px","height","23px"]],template:function(n,o){1&n&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"form",2),t.\u0275\u0275listener("ngSubmit",function(){return o.onSubmit(o.loginForm.value)}),t.\u0275\u0275elementStart(3,"div",3),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",4),t.\u0275\u0275element(7,"input",5),t.\u0275\u0275pipe(8,"translate"),t.\u0275\u0275template(9,O,3,3,"div",6),t.\u0275\u0275template(10,L,3,3,"div",6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"div",7)(12,"input",8),t.\u0275\u0275listener("keydown.space",function(i){return i.preventDefault()}),t.\u0275\u0275pipe(13,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(14,N,3,3,"div",6),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(15,A,3,3,"div",6),t.\u0275\u0275elementStart(16,"button",9),t.\u0275\u0275template(17,B,1,0,"span",10),t.\u0275\u0275pipe(18,"async"),t.\u0275\u0275template(19,j,3,3,"span",11),t.\u0275\u0275pipe(20,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(21,"div",12),t.\u0275\u0275text(22),t.\u0275\u0275pipe(23,"translate"),t.\u0275\u0275elementEnd()()()()),2&n&&(t.\u0275\u0275advance(2),t.\u0275\u0275property("formGroup",o.loginForm),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,14,"Profile.Login.AdminLogin")),t.\u0275\u0275advance(3),t.\u0275\u0275propertyInterpolate("placeholder",t.\u0275\u0275pipeBind1(8,16,"placeholder.User Name")),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(26,S,o.loginForm.get("userName").hasError("required")&&o.loginForm.get("userName").touched&&1==o.ifSubmitted||1==o.badResponse)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",o.loginForm.get("userName").hasError("required")&&o.loginForm.get("userName").touched&&1==o.ifSubmitted),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.loginForm.get("userName").hasError("pattern")&&o.loginForm.get("userName").touched&&1==o.ifSubmitted),t.\u0275\u0275advance(2),t.\u0275\u0275propertyInterpolate("placeholder",t.\u0275\u0275pipeBind1(13,18,"placeholder.Password")),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(28,S,o.loginForm.get("password").hasError("required")&&o.loginForm.get("password").touched&&1==o.ifSubmitted||1==o.badResponse)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",o.loginForm.get("password").hasError("required")&&o.loginForm.get("password").touched&&1==o.ifSubmitted),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",1==o.badResponse),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(18,20,o.authSandbox.loginLoading$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!t.\u0275\u0275pipeBind1(20,22,o.authSandbox.loginLoading$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("routerLink",t.\u0275\u0275pureFunction0(30,$)),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(23,24,"Profile.Login.Error.Cantlogin?")," "))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,r.DefaultValueAccessor,r.NgControlStatus,r.FormControlName,c.NgClass,c.NgIf,M.m,h.rH],pipes:[F.X$,c.AsyncPipe],styles:[".validationcolor[_ngcontent-%COMP%]{border-color:red}.error[_ngcontent-%COMP%]{color:red}.first[_ngcontent-%COMP%]{margin-bottom:20px}.form-control[_ngcontent-%COMP%]{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.53px;color:#000!important;height:53px;border-radius:2px;border:solid 1px #d6d6d6;background-color:#fff}.card-align[_ngcontent-%COMP%]{margin-top:15%}.cards[_ngcontent-%COMP%]{box-shadow:0 2px 10px #00000026;background-color:#fff;width:70%;margin:auto;padding:3% 5%}.cards[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{font-size:18px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#264151;margin-bottom:7%}.cards[_ngcontent-%COMP%]   .btn-log[_ngcontent-%COMP%]{height:53px;background-color:#264151;border-radius:.1875rem;font-size:18px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#fff;width:100%;margin:5% 0% 3%}.cards[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{cursor:pointer;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#514c4c;text-decoration:underline;text-align:right;margin:3% 0% 5%}[_nghost-%COMP%]     .fa, .fas[_ngcontent-%COMP%]{margin-top:-12px!important}"]}),e})()},{path:"forgot-password",component:(()=>{class e{constructor(n,o){this.fb=n,this.authSandbox=o,this.emailPattern="[a-zA-Z0-9.-_-._]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.ifSubmitted=!1}ngOnInit(){this.forgotPasswordForm=this.fb.group({email:["",[r.Validators.required,r.Validators.pattern(this.emailPattern)]]})}onSubmits(n,o){if(this.ifSubmitted=!0,!this.forgotPasswordForm.valid)return void this.validateAllFormFields(this.forgotPasswordForm);const d={};d.email=this.forgotPasswordForm.value.email,this.authSandbox.authForget(d),this.authSandbox.forgorPasswordResponse$.subscribe(i=>{(i&&!0===i||!1===i)&&(this.ifSubmitted=!1,this.forgotPasswordForm.reset(),this.forgotPasswordForm.clearValidators())})}validateAllFormFields(n){Object.keys(n.controls).forEach(o=>{const d=n.get(o);d instanceof r.FormControl?d.markAsTouched({onlySelf:!0}):d instanceof r.FormGroup&&this.validateAllFormFields(d)})}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(r.FormBuilder),t.\u0275\u0275directiveInject(v.j))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-spurt-forgot-password"]],decls:19,vars:23,consts:[[1,"card-align"],[1,"cards"],[3,"formGroup","ngSubmit"],[1,"admin"],[1,"form-group"],["type","text","formControlName","email",1,"form-control",3,"placeholder","ngClass"],["class","validation-error",4,"ngIf"],[1,"btn","btn-log"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","pull-right",3,"hidden"],[1,"forgot",3,"routerLink"],[1,"validation-error"]],template:function(n,o){1&n&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"form",2),t.\u0275\u0275listener("ngSubmit",function(i){return o.onSubmits(i,o.forgotPasswordForm.value)}),t.\u0275\u0275elementStart(3,"div",3),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",4),t.\u0275\u0275element(7,"input",5),t.\u0275\u0275pipe(8,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(9,z,3,3,"div",6),t.\u0275\u0275template(10,R,3,3,"div",6),t.\u0275\u0275elementStart(11,"button",7),t.\u0275\u0275text(12),t.\u0275\u0275pipe(13,"translate"),t.\u0275\u0275element(14,"span",8),t.\u0275\u0275pipe(15,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(16,"div",9),t.\u0275\u0275text(17),t.\u0275\u0275pipe(18,"translate"),t.\u0275\u0275elementEnd()()()()),2&n&&(t.\u0275\u0275advance(2),t.\u0275\u0275property("formGroup",o.forgotPasswordForm),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,10,"Profile.Login.forgotpassword")),t.\u0275\u0275advance(3),t.\u0275\u0275propertyInterpolate("placeholder",t.\u0275\u0275pipeBind1(8,12,"placeholder.Email")),t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(20,D,o.forgotPasswordForm.get("email").hasError("required")&&o.forgotPasswordForm.get("email").touched&&1==o.ifSubmitted)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",o.forgotPasswordForm.get("email").hasError("required")&&o.forgotPasswordForm.get("email").touched&&1==o.ifSubmitted),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.forgotPasswordForm.get("email").hasError("pattern")&&o.forgotPasswordForm.get("email").touched&&1==o.ifSubmitted),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(13,14,"Profile.Login.Submit"),""),t.\u0275\u0275advance(2),t.\u0275\u0275property("hidden",!t.\u0275\u0275pipeBind1(15,16,o.authSandbox.forgotpasswordLoading$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("routerLink",t.\u0275\u0275pureFunction0(22,G)),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(18,18,"Profile.Login.BacktoLogin")))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,r.DefaultValueAccessor,r.NgControlStatus,r.FormControlName,c.NgClass,c.NgIf,h.rH],pipes:[F.X$,c.AsyncPipe],styles:[".validationcolor[_ngcontent-%COMP%]{border-color:red}.error[_ngcontent-%COMP%]{color:red}.form-control[_ngcontent-%COMP%]{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.53px;color:#000!important;height:53px;border-radius:2px;border:solid 1px #d6d6d6;background-color:#fff}.card-align[_ngcontent-%COMP%]{margin-top:15%}.cards[_ngcontent-%COMP%]{box-shadow:0 2px 10px #00000026;background-color:#fff;width:70%;margin:auto;padding:3% 5%}.cards[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{font-size:18px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#264151;margin-bottom:7%}.cards[_ngcontent-%COMP%]   .btn-log[_ngcontent-%COMP%]{height:53px;background-color:#264151;border-radius:.1875rem;font-size:18px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#fff;width:100%;margin:5% 0% 3%}.cards[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{font-family:Roboto;cursor:pointer;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#514c4c;text-decoration:underline;text-align:right;margin:3% 0% 5%}"]}),e})()}];let V=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[h.Bz.forChild(U)],h.Bz]}),e})();var y=a(47417),m=a(36642),b=a(97582),C=a(39646),u=a(54004),f=a(63900),x=a(18505),p=a(44781),P=a(70262);class g{constructor(l,n,o,d){this.action$=l,this.authService=n,this.sandbox=o,this.router=d,this.doLogin$=this.action$.pipe((0,m.l4)(p.MF.DO_LOGIN),(0,u.U)(i=>i.payload),(0,f.w)(i=>this.authService.login(i).pipe((0,f.w)(s=>[new p.Cs(s)]),(0,P.K)(s=>(0,C.of)(new p.Xo(s)))))),this.doForget$=this.action$.pipe((0,m.l4)(p.MF.DO_FORGOT_PASSWORD),(0,u.U)(i=>i.payload),(0,f.w)(i=>this.authService.forgetPassword(i).pipe((0,f.w)(s=>[new p.A1(s)]),(0,P.K)(s=>(0,C.of)(new p.cd(s)))))),this.gettoken$=this.action$.pipe((0,m.l4)(p.MF.GET_TOKEN),(0,u.U)(i=>i.payload),(0,f.w)(i=>this.authService.gettoken(i).pipe((0,x.b)(s=>{s&&2===s.status&&this.router.navigate(["/token-expired"]),s&&3===s.status&&this.router.navigate(["/invalid-token"])}),(0,u.U)(s=>new p.vi(s)),(0,P.K)(s=>(0,C.of)(new p.fk(s)))))),this.setpassword$=this.action$.pipe((0,m.l4)(p.MF.SET_PASSWORD),(0,u.U)(i=>i.payload),(0,f.w)(i=>this.authService.setpassword(i).pipe((0,x.b)(s=>{s&&1===s.status&&this.router.navigate(["/auth/login"])}),(0,u.U)(s=>new p.j4(s)),(0,P.K)(s=>(0,C.of)(new p.QP(s))))))}}g.\u0275fac=function(l){return new(l||g)(t.\u0275\u0275inject(m.eX),t.\u0275\u0275inject(y.e),t.\u0275\u0275inject(v.j),t.\u0275\u0275inject(h.F0))},g.\u0275prov=t.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac}),(0,b.gn)([(0,m.Qm)()],g.prototype,"doLogin$",void 0),(0,b.gn)([(0,m.Qm)()],g.prototype,"doForget$",void 0),(0,b.gn)([(0,m.Qm)()],g.prototype,"gettoken$",void 0),(0,b.gn)([(0,m.Qm)()],g.prototype,"setpassword$",void 0);var Z=a(47769),k=a(40520),Q=a(22290),K=a(1944);let X=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({providers:[y.e,v.j],imports:[[c.CommonModule,V,I.IJ,K._,r.ReactiveFormsModule,r.FormsModule,Q.Rh.forRoot({easing:"ease-in",maxOpened:1,autoDismiss:!0}),m.sQ.forFeature([g]),F.aw.forChild({loader:{provide:F.Zw,useFactory:Z.g,deps:[k.eN]}})]]}),e})()}}]);