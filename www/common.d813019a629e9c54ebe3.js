(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("A36C"),r=n("iWo5"),c=n("qULd");const a=(t,e)=>{let n,a;const o=(t,i,r)=>{if("undefined"==typeof document)return;const c=document.elementFromPoint(t,i);c&&e(c)?c!==n&&(s(),d(c,r)):s()},d=(t,e)=>{n=t,a||(a=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},s=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&a!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>o(t.currentX,t.currentY,c.a),onMove:t=>o(t.currentX,t.currentY,c.b),onEnd:()=>{s(!0),Object(c.e)(),a=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o});const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,c=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,o=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},"C9g+":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("JZFu"),r=n("fXoL"),c=n("TEn/"),a=n("UbJi"),o=n("umB2"),d=n("3Pt+");let s=(()=>{class t{constructor(t,e,n,r){this.alertCtrl=t,this.modalCtrl=e,this.ngFireAuth=n,this.authService=r,this.user=i.a.auth().currentUser}dismissModal(){this.modalCtrl.dismiss()}present(t){this.alertCtrl.create({header:"Email Change Error",message:t,buttons:["OK"]}).then(t=>{t.present()})}updateEmail(t,e){t.value==e.value?this.authService.changeEmail(t.value).then(()=>{this.dismissModal(),window.location.reload()}).catch(t=>{this.present(t.message)}):this.present("Emails must match")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(c.a),r.Lb(c.D),r.Lb(a.a),r.Lb(o.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-changu"]],decls:19,vars:0,consts:[["slot","end","id","closeButton",3,"click"],["id","con"],["required",""],["newemail",""],["confirm",""],[3,"click"]],template:function(t,e){if(1&t){const t=r.Pb();r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-title"),r.ic(3," Change Email "),r.Nb(),r.Ob(4,"button",0),r.Wb("click",function(){return e.dismissModal()}),r.ic(5," Close "),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content"),r.Ob(7,"div"),r.Ob(8,"form",1),r.Ob(9,"ion-label"),r.ic(10," New Email "),r.Nb(),r.Mb(11,"ion-input",2,3),r.Ob(13,"ion-label"),r.ic(14," Confirm New Email "),r.Nb(),r.Mb(15,"ion-input",null,4),r.Ob(17,"ion-button",5),r.Wb("click",function(){r.ec(t);const n=r.dc(12),i=r.dc(16);return e.updateEmail(n,i)}),r.ic(18," Change Email "),r.Nb(),r.Nb(),r.Nb(),r.Nb()}},directives:[c.m,c.A,c.z,c.i,d.f,d.d,d.e,c.r,c.p,c.E,c.c],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:var(--main-light)}ion-input[_ngcontent-%COMP%]{margin:15px;border:2px solid grey}ion-label[_ngcontent-%COMP%]{color:var(--main);font-weight:700}ion-button[_ngcontent-%COMP%]{--background:var(--accent)}p[_ngcontent-%COMP%]{font-style:italic;font-size:4vw;color:var(--main)}#closeButton[_ngcontent-%COMP%]{background:transparent;border:none;color:var(--accent);font-size:20px}#con[_ngcontent-%COMP%]{padding:50px;display:flex;flex-direction:column;align-items:center}"]}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>c.classList.add(t)),r&&Object.assign(c,r),e.appendChild(c),c.componentOnReady&&await c.componentOnReady(),c},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},fi4l:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL"),r=n("tyNb"),c=n("TEn/"),a=n("I/3d");let o=(()=>{class t{constructor(t,e,n){this.router=t,this.alertCtrl=e,this.firestore=n,this.firestore.collection("Animals").valueChanges({idField:"id"}).subscribe(t=>{this.animalArr=t,console.log(this.animalArr)})}game(){this.shuffle(this.animalArr);let t=[document.getElementById("card1"),document.getElementById("card2"),document.getElementById("card3"),document.getElementById("card4"),document.getElementById("card5"),document.getElementById("card6"),document.getElementById("card7"),document.getElementById("card8"),document.getElementById("card9"),document.getElementById("card10"),document.getElementById("card11"),document.getElementById("card12")];for(let c=0;c<12;c++)t[c].style.fontSize="100%",t[c].innerText=this.animalArr[c].id;let e=0,n=!1,i=-1,r=this.animalArr;for(let c=0;c<12;c++){let a=this;t[c].addEventListener("click",function(){if(t[c].classList.contains("matched")||(t[c].classList.contains("clicked")||n?t[c].classList.contains("clicked")&&(t[c].classList.remove("clicked"),e--):(t[c].classList.add("clicked"),0==e&&(i=c),e++)),2==e){n=!0;let a=t[c].innerText,o=t[i].innerText,d="",s="";for(let t=0;t<12;t++)r[t].id==a?d=r[t].meaning:r[t].id==o&&(s=r[t].meaning);d==s&&(t[c].classList.remove("clicked"),t[c].classList.add("matched"),t[i].classList.add("matched"),n=!1,e=0)}else 0==e&&(n=!1);let o=!0;for(let e=0;e<12;e++)t[e].classList.contains("matched")||(o=!1);1==o&&a.wonGameAlert()})}}shuffle(t){for(var e,n,i=t.length;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}back(){this.router.navigateByUrl("/tabs/tab1",{replaceUrl:!0})}wonGameAlert(){this.alertCtrl.create({header:"YOU WON",message:"Great Job! What do you want to do next?",buttons:[{text:"PLAY AGAIN",handler:()=>{window.location.reload()}},{text:"GO HOME",handler:()=>{this.back()}}]}).then(t=>{t.present()})}startAlert(){this.alertCtrl.create({header:"Begin",message:"Ready when you are!",buttons:[{text:"Start",handler:()=>{this.game()}},{text:"Cancel",handler:()=>{this.back()}}]}).then(t=>{t.present()})}quitAlert(){this.alertCtrl.create({header:"Quit",message:"Are you sure you want to quit this game?",buttons:[{text:"Cancel"},{text:"Quit",handler:()=>{this.back()}}]}).then(t=>{t.present()})}ngOnInit(){this.startAlert()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(r.g),i.Lb(c.a),i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-set2"]],decls:38,vars:0,consts:[[1,"sp-tab-header"],["id","header-back-button"],["name","arrow-back-outline","id","back","size","large",3,"click"],["id","card-container"],[1,"card-row"],["id","card1"],["id","card2"],["id","card3"],["id","card4"],["id","card5"],["id","card6"],["id","card7"],["id","card8"],["id","card9"],["id","card10"],["id","card11"],["id","card12"],[3,"click"]],template:function(t,e){1&t&&(i.Ob(0,"ion-header"),i.Ob(1,"ion-toolbar",0),i.Ob(2,"div",1),i.Ob(3,"ion-icon",2),i.Wb("click",function(){return e.quitAlert()}),i.Nb(),i.Ob(4,"ion-title"),i.ic(5," Animals "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(6,"ion-content"),i.Ob(7,"div",3),i.Ob(8,"div",4),i.Ob(9,"ion-card",5),i.Mb(10,"ion-card-content"),i.Nb(),i.Ob(11,"ion-card",6),i.Mb(12,"ion-card-content"),i.Nb(),i.Ob(13,"ion-card",7),i.Mb(14,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(15,"div",4),i.Ob(16,"ion-card",8),i.Mb(17,"ion-card-content"),i.Nb(),i.Ob(18,"ion-card",9),i.Mb(19,"ion-card-content"),i.Nb(),i.Ob(20,"ion-card",10),i.Mb(21,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(22,"div",4),i.Ob(23,"ion-card",11),i.Mb(24,"ion-card-content"),i.Nb(),i.Ob(25,"ion-card",12),i.Mb(26,"ion-card-content"),i.Nb(),i.Ob(27,"ion-card",13),i.Mb(28,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(29,"div",4),i.Ob(30,"ion-card",14),i.Mb(31,"ion-card-content"),i.Nb(),i.Ob(32,"ion-card",15),i.Mb(33,"ion-card-content"),i.Nb(),i.Ob(34,"ion-card",16),i.Mb(35,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(36,"ion-button",17),i.Wb("click",function(){return e.quitAlert()}),i.ic(37," QUIT "),i.Nb(),i.Nb(),i.Nb())},directives:[c.m,c.A,c.n,c.z,c.i,c.d,c.e,c.c],styles:["ion-button[_ngcontent-%COMP%]{width:50%;margin-left:25%;--background:var(--accent)}ion-card[_ngcontent-%COMP%]{height:16vh;background-color:var(--accent-light);display:flex;align-items:center;justify-content:center}ion-card-content[_ngcontent-%COMP%]{font-size:150%}#card-container[_ngcontent-%COMP%]{padding-left:3%;padding-right:3%}.card-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:27% 27% 27%;justify-content:space-around}.clicked[_ngcontent-%COMP%]{background-color:var(--main-light)}.matched[_ngcontent-%COMP%]{background-color:var(--main)}"]}),t})()},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",c=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return d}),n.d(e,"e",function(){return o});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},c=()=>{i.selectionStart()},a=()=>{i.selectionChanged()},o=()=>{i.selectionEnd()},d=t=>{i.impact(t)}},qtYk:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("ofXK"),r=n("3Pt+"),c=n("TEn/"),a=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[i.b,r.a,c.B]]}),t})()},v7h0:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL"),r=n("tyNb"),c=n("TEn/"),a=n("I/3d");let o=(()=>{class t{constructor(t,e,n){this.router=t,this.alertCtrl=e,this.firestore=n,this.firestore.collection("Food").valueChanges({idField:"id"}).subscribe(t=>{this.foodArr=t,console.log(this.foodArr)})}game(){this.shuffle(this.foodArr);let t=[document.getElementById("card1"),document.getElementById("card2"),document.getElementById("card3"),document.getElementById("card4"),document.getElementById("card5"),document.getElementById("card6"),document.getElementById("card7"),document.getElementById("card8"),document.getElementById("card9"),document.getElementById("card10"),document.getElementById("card11"),document.getElementById("card12")];for(let c=0;c<12;c++)t[c].style.fontSize="100%",t[c].innerText=this.foodArr[c].id;let e=0,n=!1,i=-1,r=this.foodArr;for(let c=0;c<12;c++){let a=this;t[c].addEventListener("click",function(){if(t[c].classList.contains("matched")||(t[c].classList.contains("clicked")||n?t[c].classList.contains("clicked")&&(t[c].classList.remove("clicked"),e--):(t[c].classList.add("clicked"),0==e&&(i=c),e++)),2==e){n=!0;let a=t[c].innerText,o=t[i].innerText,d="",s="";for(let t=0;t<12;t++)r[t].id==a?d=r[t].meaning:r[t].id==o&&(s=r[t].meaning);d==s&&(t[c].classList.remove("clicked"),t[c].classList.add("matched"),t[i].classList.add("matched"),n=!1,e=0)}else 0==e&&(n=!1);let o=!0;for(let e=0;e<12;e++)t[e].classList.contains("matched")||(o=!1);1==o&&a.wonGameAlert()})}}shuffle(t){for(var e,n,i=t.length;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}back(){this.router.navigateByUrl("/tabs/tab1",{replaceUrl:!0})}wonGameAlert(){this.alertCtrl.create({header:"YOU WON",message:"Great Job! What do you want to do next?",buttons:[{text:"PLAY AGAIN",handler:()=>{window.location.reload()}},{text:"GO HOME",handler:()=>{this.back()}}]}).then(t=>{t.present()})}startAlert(){this.alertCtrl.create({header:"Begin",message:"Ready when you are!",buttons:[{text:"Start",handler:()=>{this.game()}},{text:"Cancel",handler:()=>{this.back()}}]}).then(t=>{t.present()})}quitAlert(){this.alertCtrl.create({header:"Quit",message:"Are you sure you want to quit this game?",buttons:[{text:"Cancel"},{text:"Quit",handler:()=>{this.back()}}]}).then(t=>{t.present()})}ngOnInit(){this.startAlert()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(r.g),i.Lb(c.a),i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-set3"]],decls:38,vars:0,consts:[[1,"sp-tab-header"],["id","header-back-button"],["name","arrow-back-outline","id","back","size","large",3,"click"],["id","card-container"],[1,"card-row"],["id","card1"],["id","card2"],["id","card3"],["id","card4"],["id","card5"],["id","card6"],["id","card7"],["id","card8"],["id","card9"],["id","card10"],["id","card11"],["id","card12"],[3,"click"]],template:function(t,e){1&t&&(i.Ob(0,"ion-header"),i.Ob(1,"ion-toolbar",0),i.Ob(2,"div",1),i.Ob(3,"ion-icon",2),i.Wb("click",function(){return e.quitAlert()}),i.Nb(),i.Ob(4,"ion-title"),i.ic(5," Food "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(6,"ion-content"),i.Ob(7,"div",3),i.Ob(8,"div",4),i.Ob(9,"ion-card",5),i.Mb(10,"ion-card-content"),i.Nb(),i.Ob(11,"ion-card",6),i.Mb(12,"ion-card-content"),i.Nb(),i.Ob(13,"ion-card",7),i.Mb(14,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(15,"div",4),i.Ob(16,"ion-card",8),i.Mb(17,"ion-card-content"),i.Nb(),i.Ob(18,"ion-card",9),i.Mb(19,"ion-card-content"),i.Nb(),i.Ob(20,"ion-card",10),i.Mb(21,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(22,"div",4),i.Ob(23,"ion-card",11),i.Mb(24,"ion-card-content"),i.Nb(),i.Ob(25,"ion-card",12),i.Mb(26,"ion-card-content"),i.Nb(),i.Ob(27,"ion-card",13),i.Mb(28,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(29,"div",4),i.Ob(30,"ion-card",14),i.Mb(31,"ion-card-content"),i.Nb(),i.Ob(32,"ion-card",15),i.Mb(33,"ion-card-content"),i.Nb(),i.Ob(34,"ion-card",16),i.Mb(35,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(36,"ion-button",17),i.Wb("click",function(){return e.quitAlert()}),i.ic(37," QUIT "),i.Nb(),i.Nb(),i.Nb())},directives:[c.m,c.A,c.n,c.z,c.i,c.d,c.e,c.c],styles:["ion-button[_ngcontent-%COMP%]{width:50%;margin-left:25%;--background:var(--accent)}ion-card[_ngcontent-%COMP%]{height:16vh;background-color:var(--accent-light);display:flex;align-items:center;justify-content:center}ion-card-content[_ngcontent-%COMP%]{font-size:150%}#card-container[_ngcontent-%COMP%]{padding-left:3%;padding-right:3%}.card-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:27% 27% 27%;justify-content:space-around}.clicked[_ngcontent-%COMP%]{background-color:var(--main-light)}.matched[_ngcontent-%COMP%]{background-color:var(--main)}"]}),t})()},vaBt:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL"),r=n("tyNb"),c=n("TEn/"),a=n("I/3d");let o=(()=>{class t{constructor(t,e,n){this.router=t,this.alertCtrl=e,this.firestore=n,this.firestore.collection("Colors").valueChanges({idField:"id"}).subscribe(t=>{this.colorArr=t,console.log(this.colorArr)})}game(){this.shuffle(this.colorArr);let t=[document.getElementById("card1"),document.getElementById("card2"),document.getElementById("card3"),document.getElementById("card4"),document.getElementById("card5"),document.getElementById("card6"),document.getElementById("card7"),document.getElementById("card8"),document.getElementById("card9"),document.getElementById("card10"),document.getElementById("card11"),document.getElementById("card12")];for(let c=0;c<12;c++)t[c].style.fontSize="100%",t[c].innerText=this.colorArr[c].id;let e=0,n=!1,i=-1,r=this.colorArr;for(let c=0;c<12;c++){let a=this;t[c].addEventListener("click",function(){if(t[c].classList.contains("matched")||(t[c].classList.contains("clicked")||n?t[c].classList.contains("clicked")&&(t[c].classList.remove("clicked"),e--):(t[c].classList.add("clicked"),0==e&&(i=c),e++)),2==e){n=!0;let a=t[c].innerText,o=t[i].innerText,d="",s="";for(let t=0;t<12;t++)r[t].id==a?d=r[t].meaning:r[t].id==o&&(s=r[t].meaning);d==s&&(t[c].classList.remove("clicked"),t[c].classList.add("matched"),t[i].classList.add("matched"),n=!1,e=0)}else 0==e&&(n=!1);let o=!0;for(let e=0;e<12;e++)t[e].classList.contains("matched")||(o=!1);1==o&&a.wonGameAlert()})}}shuffle(t){for(var e,n,i=t.length;0!==i;)n=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[n],t[n]=e;return t}back(){this.router.navigateByUrl("/tabs/tab1",{replaceUrl:!0})}wonGameAlert(){this.alertCtrl.create({header:"YOU WON",message:"Great Job! What do you want to do next?",buttons:[{text:"PLAY AGAIN",handler:()=>{window.location.reload()}},{text:"GO HOME",handler:()=>{this.back()}}]}).then(t=>{t.present()})}startAlert(){this.alertCtrl.create({header:"Begin",message:"Ready when you are!",buttons:[{text:"Start",handler:()=>{this.game()}},{text:"Cancel",handler:()=>{this.back()}}]}).then(t=>{t.present()})}quitAlert(){this.alertCtrl.create({header:"Quit",message:"Are you sure you want to quit this game?",buttons:[{text:"Cancel"},{text:"Quit",handler:()=>{this.back()}}]}).then(t=>{t.present()})}ngOnInit(){this.startAlert()}}return t.\u0275fac=function(e){return new(e||t)(i.Lb(r.g),i.Lb(c.a),i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-set1"]],decls:38,vars:0,consts:[[1,"sp-tab-header"],["id","header-back-button"],["name","arrow-back-outline","id","back","size","large",3,"click"],["id","card-container"],[1,"card-row"],["id","card1"],["id","card2"],["id","card3"],["id","card4"],["id","card5"],["id","card6"],["id","card7"],["id","card8"],["id","card9"],["id","card10"],["id","card11"],["id","card12"],[3,"click"]],template:function(t,e){1&t&&(i.Ob(0,"ion-header"),i.Ob(1,"ion-toolbar",0),i.Ob(2,"div",1),i.Ob(3,"ion-icon",2),i.Wb("click",function(){return e.quitAlert()}),i.Nb(),i.Ob(4,"ion-title"),i.ic(5," Colors "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(6,"ion-content"),i.Ob(7,"div",3),i.Ob(8,"div",4),i.Ob(9,"ion-card",5),i.Mb(10,"ion-card-content"),i.Nb(),i.Ob(11,"ion-card",6),i.Mb(12,"ion-card-content"),i.Nb(),i.Ob(13,"ion-card",7),i.Mb(14,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(15,"div",4),i.Ob(16,"ion-card",8),i.Mb(17,"ion-card-content"),i.Nb(),i.Ob(18,"ion-card",9),i.Mb(19,"ion-card-content"),i.Nb(),i.Ob(20,"ion-card",10),i.Mb(21,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(22,"div",4),i.Ob(23,"ion-card",11),i.Mb(24,"ion-card-content"),i.Nb(),i.Ob(25,"ion-card",12),i.Mb(26,"ion-card-content"),i.Nb(),i.Ob(27,"ion-card",13),i.Mb(28,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(29,"div",4),i.Ob(30,"ion-card",14),i.Mb(31,"ion-card-content"),i.Nb(),i.Ob(32,"ion-card",15),i.Mb(33,"ion-card-content"),i.Nb(),i.Ob(34,"ion-card",16),i.Mb(35,"ion-card-content"),i.Nb(),i.Nb(),i.Ob(36,"ion-button",17),i.Wb("click",function(){return e.quitAlert()}),i.ic(37," QUIT "),i.Nb(),i.Nb(),i.Nb())},directives:[c.m,c.A,c.n,c.z,c.i,c.d,c.e,c.c],styles:["ion-button[_ngcontent-%COMP%]{width:50%;margin-left:25%;--background:var(--accent)}ion-card[_ngcontent-%COMP%]{height:16vh;background-color:var(--accent-light);display:flex;align-items:center;justify-content:center}ion-card-content[_ngcontent-%COMP%]{font-size:150%}#card-container[_ngcontent-%COMP%]{padding-left:3%;padding-right:3%}.card-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:27% 27% 27%;justify-content:space-around}.clicked[_ngcontent-%COMP%]{background-color:var(--main-light)}.matched[_ngcontent-%COMP%]{background-color:var(--main)}"]}),t})()},zUNV:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("JZFu"),r=n("fXoL"),c=n("TEn/"),a=n("UbJi"),o=n("umB2"),d=n("3Pt+");let s=(()=>{class t{constructor(t,e,n,r){this.alertCtrl=t,this.modalCtrl=e,this.ngFireAuth=n,this.authService=r,this.user=i.a.auth().currentUser}dismissModal(){this.modalCtrl.dismiss()}present(t){this.alertCtrl.create({header:"Password Change Error",message:t,buttons:["OK"]}).then(t=>{t.present()})}updatePass(t,e){t.value==e.value?this.authService.changePassword(t.value).then(()=>{this.dismissModal(),window.location.reload()}).catch(t=>{this.present(t.message)}):this.present("Passwords must match")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(c.a),r.Lb(c.D),r.Lb(a.a),r.Lb(o.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-changp"]],decls:19,vars:0,consts:[["slot","end","id","closeButton",3,"click"],["id","con"],["type","password","required",""],["newpass",""],["type","password"],["confirm",""],[3,"click"]],template:function(t,e){if(1&t){const t=r.Pb();r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-title"),r.ic(3," Change Password "),r.Nb(),r.Ob(4,"button",0),r.Wb("click",function(){return e.dismissModal()}),r.ic(5," Close "),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content"),r.Ob(7,"div"),r.Ob(8,"form",1),r.Ob(9,"ion-label"),r.ic(10," New Password "),r.Nb(),r.Mb(11,"ion-input",2,3),r.Ob(13,"ion-label"),r.ic(14," Confirm New Password "),r.Nb(),r.Mb(15,"ion-input",4,5),r.Ob(17,"ion-button",6),r.Wb("click",function(){r.ec(t);const n=r.dc(12),i=r.dc(16);return e.updatePass(n,i)}),r.ic(18," Change Password "),r.Nb(),r.Nb(),r.Nb(),r.Nb()}},directives:[c.m,c.A,c.z,c.i,d.f,d.d,d.e,c.r,c.p,c.E,c.c],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:var(--main-light)}ion-input[_ngcontent-%COMP%]{margin:15px;border:2px solid grey}ion-label[_ngcontent-%COMP%]{color:var(--main);font-weight:700}ion-button[_ngcontent-%COMP%]{--background:var(--accent)}p[_ngcontent-%COMP%]{font-style:italic;font-size:4vw;color:var(--main)}#closeButton[_ngcontent-%COMP%]{background:transparent;border:none;color:var(--accent);font-size:20px}#con[_ngcontent-%COMP%]{padding:50px;display:flex;flex-direction:column;align-items:center}"]}),t})()}}]);