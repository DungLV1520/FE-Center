"use strict";(self.webpackChunkhub_center=self.webpackChunkhub_center||[]).push([[657],{3517:(B,b,i)=>{i.d(b,{_:()=>r});var u=i(9862),t=i(8645),p=i(7398),E=i(5359),l=i(5879),D=i(491);let r=(()=>{class c{constructor(e,n){this.http=e,this.environment=n,this.breadCrumb=new t.x,this.breadCrumb$=this.breadCrumb.asObservable(),this.addRegion=new t.x,this.addRegion$=this.addRegion.asObservable(),this.addFolder=new t.x,this.addFolder$=this.addFolder.asObservable(),this.hubBackendApiEndpoint=this.environment.hubBackendApiEndpoint}login(e){return this.http.post(this.hubBackendApiEndpoint+"auth/login",e).pipe((0,p.U)(n=>(n?.result?.ok&&(localStorage.setItem(E.t.CUSTOMER_KEY,JSON.stringify(n.data.user)),localStorage.setItem(E.t.ACCESS_TOKEN,n.data.accessToken)),n)))}getListDevice(){return this.http.get(this.hubBackendApiEndpoint+"device/get-list")}getDeviceByRegionID(e){return this.http.post(this.hubBackendApiEndpoint+"device/search",e)}getListRegion(){return this.http.get(this.hubBackendApiEndpoint+"region/list")}getListFolder(){return this.http.get(this.hubBackendApiEndpoint+"folder/list")}getListFile(e){return this.http.post(this.hubBackendApiEndpoint+"document/search",e)}createSlidePresentation(e){return this.http.post(this.hubBackendApiEndpoint+"schedule/create",e)}viewDetailSlidePresentation(e){return this.http.post(this.hubBackendApiEndpoint+"schedule/detail",e)}getAllFiles(){return this.http.get(this.hubBackendApiEndpoint+"document")}getListPresentationSlide(e){return this.http.post(this.hubBackendApiEndpoint+"schedule/search",e)}deleteDevice(e){return this.http.delete(this.hubBackendApiEndpoint+"device/delete",{params:{ids:[e]}})}moveDevice(e){return this.http.put(this.hubBackendApiEndpoint+"device/move",e)}renameDevice(e){return this.http.put(this.hubBackendApiEndpoint+"device/rename",e)}getInfoDevice(e){return this.http.get(this.hubBackendApiEndpoint+`device/${e}`)}renameFile(e,n){return this.http.put(this.hubBackendApiEndpoint+`document/update/${e}`,n)}moveFile(e){return this.http.put(this.hubBackendApiEndpoint+"document/move",e)}deleteFile(e){return this.http.delete(this.hubBackendApiEndpoint+"document/delete",{params:{ids:[e]}})}deletePresentationSlide(e){return this.http.delete(this.hubBackendApiEndpoint+`schedule/${e}`)}uploadFile(e){return this.http.post(this.hubBackendApiEndpoint+"document",e,{headers:new u.WM({Accept:"application/json"})})}getScheduleDetail(e){return this.http.post(this.hubBackendApiEndpoint+"schedule/detail",{deviceId:e})}applyScheduleToDevice(e){return this.http.post(this.hubBackendApiEndpoint+"schedule/apply",e)}createRegion(e){return this.http.post(this.hubBackendApiEndpoint+"region/create",e)}createFolder(e){return this.http.post(this.hubBackendApiEndpoint+"folder/create",e)}sendData(e){this.breadCrumb.next(e)}sendRegion(e){this.addRegion.next(e)}sendFolder(e){this.addFolder.next(e)}static#t=this.\u0275fac=function(n){return new(n||c)(l.LFG(u.eN),l.LFG(D.q))};static#e=this.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},2840:(B,b,i)=>{i.d(b,{ix:()=>v,sL:()=>f});var u=i(7582),t=i(5879),p=i(8645),E=i(2438),l=i(9773),D=i(7921),r=i(2181),c=i(874),s=i(7754),e=i(551),n=i(9388),g=i(6814),m=i(855),A=i(1958);const T=["nz-button",""];function N(h,R){1&h&&t._UZ(0,"span",1)}const _=["*"],z="button";let v=(()=>{class h{insertSpan(d,a){d.forEach(o=>{if("#text"===o.nodeName){const C=a.createElement("span"),P=a.parentNode(o);a.insertBefore(P,C,o),a.appendChild(C,o)}})}assertIconOnly(d,a){const o=Array.from(d.childNodes),C=o.filter(O=>{const M=Array.from(O.childNodes||[]);return"SPAN"===O.nodeName&&M.length>0&&M.every(I=>"svg"===I.nodeName)}).length,P=o.every(O=>"#text"!==O.nodeName);o.filter(O=>{const M=Array.from(O.childNodes||[]);return!("SPAN"===O.nodeName&&M.length>0&&M.every(I=>"svg"===I.nodeName))}).every(O=>"SPAN"!==O.nodeName)&&P&&C>=1&&a.addClass(d,"ant-btn-icon-only")}constructor(d,a,o,C,P,L){this.ngZone=d,this.elementRef=a,this.cdr=o,this.renderer=C,this.nzConfigService=P,this.directionality=L,this._nzModuleName=z,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize="default",this.dir="ltr",this.destroy$=new p.x,this.loading$=new p.x,this.nzConfigService.getConfigChangeEventForComponent(z).pipe((0,l.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe((0,l.R)(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,E.R)(this.elementRef.nativeElement,"click",{capture:!0}).pipe((0,l.R)(this.destroy$)).subscribe(d=>{(this.disabled&&"A"===d.target?.tagName||this.nzLoading)&&(d.preventDefault(),d.stopImmediatePropagation())})})}ngOnChanges(d){const{nzLoading:a}=d;a&&this.loading$.next(this.nzLoading)}ngAfterViewInit(){this.assertIconOnly(this.elementRef.nativeElement,this.renderer),this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe((0,D.O)(this.nzLoading),(0,r.h)(()=>!!this.nzIconDirectiveElement),(0,l.R)(this.destroy$)).subscribe(d=>{const a=this.nzIconDirectiveElement.nativeElement;d?this.renderer.setStyle(a,"display","none"):this.renderer.removeStyle(a,"display")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(a){return new(a||h)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(c.jY),t.Y36(n.Is,8))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(a,o,C){if(1&a&&t.Suo(C,e.Ls,5,t.SBq),2&a){let P;t.iGM(P=t.CRH())&&(o.nzIconDirectiveElement=P.first)}},hostAttrs:[1,"ant-btn"],hostVars:30,hostBindings:function(a,o){2&a&&(t.uIk("tabindex",o.disabled?-1:null===o.tabIndex?null:o.tabIndex)("disabled",o.disabled||null),t.ekj("ant-btn-primary","primary"===o.nzType)("ant-btn-dashed","dashed"===o.nzType)("ant-btn-link","link"===o.nzType)("ant-btn-text","text"===o.nzType)("ant-btn-circle","circle"===o.nzShape)("ant-btn-round","round"===o.nzShape)("ant-btn-lg","large"===o.nzSize)("ant-btn-sm","small"===o.nzSize)("ant-btn-dangerous",o.nzDanger)("ant-btn-loading",o.nzLoading)("ant-btn-background-ghost",o.nzGhost)("ant-btn-block",o.nzBlock)("ant-input-search-button",o.nzSearch)("ant-btn-rtl","rtl"===o.dir))},inputs:{nzBlock:"nzBlock",nzGhost:"nzGhost",nzSearch:"nzSearch",nzLoading:"nzLoading",nzDanger:"nzDanger",disabled:"disabled",tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[t.TTD],attrs:T,ngContentSelectors:_,decls:2,vars:1,consts:[["nz-icon","","nzType","loading",4,"ngIf"],["nz-icon","","nzType","loading"]],template:function(a,o){1&a&&(t.F$t(),t.YNc(0,N,1,0,"span",0),t.Hsn(1)),2&a&&t.Q6J("ngIf",o.nzLoading)},dependencies:[g.O5,e.Ls,m.w],encapsulation:2,changeDetection:0})}return(0,u.gn)([(0,s.yF)()],h.prototype,"nzBlock",void 0),(0,u.gn)([(0,s.yF)()],h.prototype,"nzGhost",void 0),(0,u.gn)([(0,s.yF)()],h.prototype,"nzSearch",void 0),(0,u.gn)([(0,s.yF)()],h.prototype,"nzLoading",void 0),(0,u.gn)([(0,s.yF)()],h.prototype,"nzDanger",void 0),(0,u.gn)([(0,s.yF)()],h.prototype,"disabled",void 0),(0,u.gn)([(0,c.oS)()],h.prototype,"nzSize",void 0),h})(),f=(()=>{class h{static#t=this.\u0275fac=function(a){return new(a||h)};static#e=this.\u0275mod=t.oAB({type:h});static#n=this.\u0275inj=t.cJS({imports:[n.vT,g.ez,A.vG,e.PV,m.a,m.a,A.vG]})}return h})()},331:(B,b,i)=>{i.d(b,{P:()=>r,g:()=>c});var u=i(6814),t=i(5879),p=i(7582),E=i(2495),l=i(7754);const D="nz-animate-disabled";let r=(()=>{class s{constructor(n,g,m){this.element=n,this.renderer=g,this.animationType=m,this.nzNoAnimation=!1}ngOnChanges(){this.updateClass()}ngAfterViewInit(){this.updateClass()}updateClass(){const n=(0,E.fI)(this.element);n&&(this.nzNoAnimation||"NoopAnimations"===this.animationType?this.renderer.addClass(n,D):this.renderer.removeClass(n,D))}static#t=this.\u0275fac=function(g){return new(g||s)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.QbO,8))};static#e=this.\u0275dir=t.lG2({type:s,selectors:[["","nzNoAnimation",""]],inputs:{nzNoAnimation:"nzNoAnimation"},exportAs:["nzNoAnimation"],features:[t.TTD]})}return(0,p.gn)([(0,l.yF)()],s.prototype,"nzNoAnimation",void 0),s})(),c=(()=>{class s{static#t=this.\u0275fac=function(g){return new(g||s)};static#e=this.\u0275mod=t.oAB({type:s});static#n=this.\u0275inj=t.cJS({imports:[u.ez]})}return s})()},5448:(B,b,i)=>{i.d(b,{Ek:()=>c,bw:()=>A,d_:()=>g,dz:()=>m,e4:()=>N,hQ:()=>T,yW:()=>r});var u=i(7582),t=i(9594),p=i(5879),E=i(9773),l=i(9087),D=i(7754);const r={top:new t.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topCenter:new t.tR({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topLeft:new t.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),topRight:new t.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"}),right:new t.tR({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"}),rightTop:new t.tR({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"}),rightBottom:new t.tR({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),bottom:new t.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomCenter:new t.tR({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomLeft:new t.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),bottomRight:new t.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"}),left:new t.tR({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"}),leftTop:new t.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"}),leftBottom:new t.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})},c=[r.top,r.right,r.bottom,r.left];function g(_){for(const z in r)if(_.connectionPair.originX===r[z].originX&&_.connectionPair.originY===r[z].originY&&_.connectionPair.overlayX===r[z].overlayX&&_.connectionPair.overlayY===r[z].overlayY)return z}new t.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),new t.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"}),new t.tR({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"top"});const m={bottomLeft:new t.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"},void 0,2),topLeft:new t.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"},void 0,-2),bottomRight:new t.tR({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"},void 0,2),topRight:new t.tR({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"},void 0,-2)},A=[m.bottomLeft,m.topLeft,m.bottomRight,m.topRight];let T=(()=>{class _{constructor(v,y){this.cdkConnectedOverlay=v,this.nzDestroyService=y,this.nzArrowPointAtCenter=!1,this.cdkConnectedOverlay.backdropClass="nz-overlay-transparent-backdrop",this.cdkConnectedOverlay.positionChange.pipe((0,E.R)(this.nzDestroyService)).subscribe(f=>{this.nzArrowPointAtCenter&&this.updateArrowPosition(f)})}updateArrowPosition(v){const y=this.getOriginRect(),f=g(v);let h=0,R=0;"topLeft"===f||"bottomLeft"===f?h=y.width/2-14:"topRight"===f||"bottomRight"===f?h=-(y.width/2-14):"leftTop"===f||"rightTop"===f?R=y.height/2-10:("leftBottom"===f||"rightBottom"===f)&&(R=-(y.height/2-10)),(this.cdkConnectedOverlay.offsetX!==h||this.cdkConnectedOverlay.offsetY!==R)&&(this.cdkConnectedOverlay.offsetY=R,this.cdkConnectedOverlay.offsetX=h,this.cdkConnectedOverlay.overlayRef.updatePosition())}getFlexibleConnectedPositionStrategyOrigin(){return this.cdkConnectedOverlay.origin instanceof t.xu?this.cdkConnectedOverlay.origin.elementRef:this.cdkConnectedOverlay.origin}getOriginRect(){const v=this.getFlexibleConnectedPositionStrategyOrigin();if(v instanceof p.SBq)return v.nativeElement.getBoundingClientRect();if(v instanceof Element)return v.getBoundingClientRect();const y=v.width||0,f=v.height||0;return{top:v.y,bottom:v.y+f,left:v.x,right:v.x+y,height:f,width:y}}static#t=this.\u0275fac=function(y){return new(y||_)(p.Y36(t.pI),p.Y36(l.kn))};static#e=this.\u0275dir=p.lG2({type:_,selectors:[["","cdkConnectedOverlay","","nzConnectedOverlay",""]],inputs:{nzArrowPointAtCenter:"nzArrowPointAtCenter"},exportAs:["nzConnectedOverlay"],features:[p._Bn([l.kn])]})}return(0,u.gn)([(0,D.yF)()],_.prototype,"nzArrowPointAtCenter",void 0),_})(),N=(()=>{class _{static#t=this.\u0275fac=function(y){return new(y||_)};static#e=this.\u0275mod=p.oAB({type:_});static#n=this.\u0275inj=p.cJS({})}return _})()},855:(B,b,i)=>{i.d(b,{a:()=>E,w:()=>p});var u=i(2831),t=i(5879);let p=(()=>{class l{setHiddenAttribute(){this.hidden?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","string"==typeof this.hidden?this.hidden:""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(r,c){this.elementRef=r,this.renderer=c,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}static#t=this.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))};static#e=this.\u0275dir=t.lG2({type:l,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[t.TTD]})}return l})(),E=(()=>{class l{static#t=this.\u0275fac=function(c){return new(c||l)};static#e=this.\u0275mod=t.oAB({type:l});static#n=this.\u0275inj=t.cJS({imports:[u.ud]})}return l})()},1958:(B,b,i)=>{i.d(b,{dQ:()=>r,vG:()=>c});var u=i(2831),t=i(5879);class p{get waveAttributeName(){return this.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}constructor(e,n,g,m){this.triggerElement=e,this.ngZone=n,this.insertExtraNode=g,this.platformId=m,this.waveTransitionDuration=400,this.styleForPseudo=null,this.extraNode=null,this.lastTime=0,this.onClick=A=>{!this.triggerElement||!this.triggerElement.getAttribute||this.triggerElement.getAttribute("disabled")||"INPUT"===A.target.tagName||this.triggerElement.className.indexOf("disabled")>=0||this.fadeOutWave()},this.platform=new u.t4(this.platformId),this.clickHandler=this.onClick.bind(this),this.bindTriggerEvent()}bindTriggerEvent(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.removeTriggerEvent(),this.triggerElement&&this.triggerElement.addEventListener("click",this.clickHandler,!0)})}removeTriggerEvent(){this.triggerElement&&this.triggerElement.removeEventListener("click",this.clickHandler,!0)}removeStyleAndExtraNode(){this.styleForPseudo&&document.body.contains(this.styleForPseudo)&&(document.body.removeChild(this.styleForPseudo),this.styleForPseudo=null),this.insertExtraNode&&this.triggerElement.contains(this.extraNode)&&this.triggerElement.removeChild(this.extraNode)}destroy(){this.removeTriggerEvent(),this.removeStyleAndExtraNode()}fadeOutWave(){const e=this.triggerElement,n=this.getWaveColor(e);e.setAttribute(this.waveAttributeName,"true"),!(Date.now()<this.lastTime+this.waveTransitionDuration)&&(this.isValidColor(n)&&(this.styleForPseudo||(this.styleForPseudo=document.createElement("style")),this.styleForPseudo.innerHTML=`\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ${n};\n      }`,document.body.appendChild(this.styleForPseudo)),this.insertExtraNode&&(this.extraNode||(this.extraNode=document.createElement("div")),this.extraNode.className="ant-click-animating-node",e.appendChild(this.extraNode)),this.lastTime=Date.now(),this.runTimeoutOutsideZone(()=>{e.removeAttribute(this.waveAttributeName),this.removeStyleAndExtraNode()},this.waveTransitionDuration))}isValidColor(e){return!!e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&this.isNotGrey(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&"transparent"!==e}isNotGrey(e){const n=e.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(n&&n[1]&&n[2]&&n[3]&&n[1]===n[2]&&n[2]===n[3])}getWaveColor(e){const n=getComputedStyle(e);return n.getPropertyValue("border-top-color")||n.getPropertyValue("border-color")||n.getPropertyValue("background-color")}runTimeoutOutsideZone(e,n){this.ngZone.runOutsideAngular(()=>setTimeout(e,n))}}const E={disabled:!1},l=new t.OlP("nz-wave-global-options",{providedIn:"root",factory:function D(){return E}});let r=(()=>{class s{get disabled(){return this.waveDisabled}get rendererRef(){return this.waveRenderer}constructor(n,g,m,A,T){this.ngZone=n,this.elementRef=g,this.config=m,this.animationType=A,this.platformId=T,this.nzWaveExtraNode=!1,this.waveDisabled=!1,this.waveDisabled=this.isConfigDisabled()}isConfigDisabled(){let n=!1;return this.config&&"boolean"==typeof this.config.disabled&&(n=this.config.disabled),"NoopAnimations"===this.animationType&&(n=!0),n}ngOnDestroy(){this.waveRenderer&&this.waveRenderer.destroy()}ngOnInit(){this.renderWaveIfEnabled()}renderWaveIfEnabled(){!this.waveDisabled&&this.elementRef.nativeElement&&(this.waveRenderer=new p(this.elementRef.nativeElement,this.ngZone,this.nzWaveExtraNode,this.platformId))}disable(){this.waveDisabled=!0,this.waveRenderer&&(this.waveRenderer.removeTriggerEvent(),this.waveRenderer.removeStyleAndExtraNode())}enable(){this.waveDisabled=this.isConfigDisabled()||!1,this.waveRenderer&&this.waveRenderer.bindTriggerEvent()}static#t=this.\u0275fac=function(g){return new(g||s)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(l,8),t.Y36(t.QbO,8),t.Y36(t.Lbi))};static#e=this.\u0275dir=t.lG2({type:s,selectors:[["","nz-wave",""],["button","nz-button","",3,"nzType","link",3,"nzType","text"]],inputs:{nzWaveExtraNode:"nzWaveExtraNode"},exportAs:["nzWave"]})}return s})(),c=(()=>{class s{static#t=this.\u0275fac=function(g){return new(g||s)};static#e=this.\u0275mod=t.oAB({type:s});static#n=this.\u0275inj=t.cJS({imports:[u.ud]})}return s})()}}]);