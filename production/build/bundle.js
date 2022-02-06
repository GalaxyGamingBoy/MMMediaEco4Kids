var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,a;function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(t,e,n){return t.set(n),e}function u(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function $(){return p("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function w(t){a=t}const y=[],k=[],E=[],C=[],L=Promise.resolve();let T=!1;function _(t){E.push(t)}const N=new Set;let S=0;function M(){const t=a;do{for(;S<y.length;){const t=y[S];S++,w(t),A(t.$$)}for(w(null),y.length=0,S=0;k.length;)k.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];N.has(e)||(N.add(e),e())}E.length=0}while(y.length);for(;C.length;)C.pop()();T=!1,N.clear(),w(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const H=new Set;let j;function B(){j={r:0,c:[],p:j}}function G(){j.r||o(j.c),j=j.p}function R(t,e){t&&t.i&&(H.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),j.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function O(t,e){P(t,1,1,(()=>{e.delete(t.key)}))}function V(t){t&&t.c()}function K(t,n,s,l){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(n,s),l||_((()=>{const n=c.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(_)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(y.push(t),T||(T=!0,L.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,r,s,l,c,i,u,m=[-1]){const d=a;w(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:r.target||d.$$.root};u&&u(p.root);let g=!1;if(p.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&z(e,t)),n})):[],p.update(),g=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&R(e.$$.fragment),K(e,r.target,r.anchor,r.customElement),M()}w(d)}class F{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const I=[];function J(e,n=t){let o;const r=new Set;function l(t){if(s(e,t)&&(e=t,o)){const t=!I.length;for(const t of r)t[1](),I.push(t,e);if(t){for(let t=0;t<I.length;t+=2)I[t][0](I[t+1]);I.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,a=t){const c=[s,a];return r.add(c),1===r.size&&(o=n(l)||t),s(e),()=>{r.delete(c),0===r.size&&(o(),o=null)}}}}const U=J(""),W=J(0),X=J({username:"",password:""}),Y=[{id:"1",role:"ΓΕΝΙΚΟΣ ΔΙΕΥΘΥΝΤΗΣ",name:"Ν/Α"},{id:"2",role:"ΔΙΕΥΘΥΝΤΗΣ ΜΑΡΚΕΤΙΝΓΚ",name:"Ν/Α"},{id:"3",role:"ΔΙΕΥΘΥΝΤΗΣ ΟΙΚΟΝΟΜΙΚΩΝ",name:"Ν/Α"},{id:"4",role:"ΜΗΧΑΝΙΚΟΣ ΣΧΕΔΙΑΣΜΟΥ ΠΡΟΙΟΝΤΩΝ",name:"Ν/Α"},{id:"5",role:"ΔΙΕΥΘΥΝΤΗΣ ΠΑΡΑΓΩΓΗΣ",name:"Ν/Α"},{id:"6",role:"ΔΙΕΥΘΥΝΤΗΣ ΕΡΕΥΝΑΣ ΚΑΙ ΑΝΑΠΤΥΞΗΣ",name:"Ν/Α"},{id:"7",role:"ΔΙΕΥΘΥΝΤΗΣ ΠΡΟΣΩΠΙΚΟΥ",name:"Ν/Α"},{id:"8",role:"ΔΙΕΥΘΥΝΤΗΣ ΠΡΟΜΗΘΕΙΩΝ",name:"Ν/Α"},{id:"9",role:"ΔΙΕΥΘΥΝΤΗΣ ΕΚΠΑΙΔΕΥΣΗΣ",name:"Ν/Α"},{id:"10",role:"ΔΙΕΥΘΥΝΤΗΣ ΠΟΙΟΤΙΚΟΥ ΕΛΕΓΧΟΥ",name:"Ν/Α"},{id:"11",role:"ΔΙΕΥΘΥΝΤΗΣ ΑΣΦΑΛΕΙΑΣ",name:"Ν/Α"},{id:"12",role:"ΔΙΕΥΘΥΝΤΗΣ ΔΗΜΟΣΙΩΝ ΣΧΕΣΕΩΝ",name:"Ν/Α"},{id:"13",role:"ΔΙΕΥΘΥΝΤΗΣ ΠΛΗΡΟΦΟΡΙΑΚΩΝ ΣΥΣΤΗΜΑΤΩΝ",name:"Ν/Α"}];function Z(e){let n,o,r,s,l,a;return{c(){n=d("li"),o=d("a"),r=p(e[0]),h(o,"class",s="nav-link "+e[2]),h(o,"aria-current","page"),h(o,"href",e[1]),h(n,"class","nav-item")},m(t,s){m(t,n,s),u(n,o),u(o,r),l||(a=b(o,"click",e[3]),l=!0)},p(t,[e]){1&e&&x(r,t[0]),4&e&&s!==(s="nav-link "+t[2])&&h(o,"class",s),2&e&&h(o,"href",t[1])},i:t,o:t,d(t){t&&f(n),l=!1,a()}}}function D(t,e,n){let o;c(t,U,(t=>n(4,o=t)));let{ElementTitle:r=""}=e,{ElementLink:s=""}=e,l=r.toLowerCase();let a="";return t.$$set=t=>{"ElementTitle"in t&&n(0,r=t.ElementTitle),"ElementLink"in t&&n(1,s=t.ElementLink)},t.$$.update=()=>{16&t.$$.dirty&&n(2,a=o==l?"active":"")},[r,s,a,function(){console.log(l.concat(": Clicked")),U.set(l),console.log(o)},o]}class tt extends F{constructor(t){super(),Q(this,t,D,Z,s,{ElementTitle:0,ElementLink:1})}}function et(t){let e,n,o,r,s,l,a,c,i,p,$,x,v,w,y,k,E,C;return i=new tt({props:{ElementTitle:"Home",ElementLink:"#Home"}}),$=new tt({props:{ElementTitle:"About",ElementLink:"#About"}}),v=new tt({props:{ElementTitle:"Roles",ElementLink:"#Roles"}}),y=new tt({props:{ElementTitle:t[0],ElementLink:"#Login"}}),{c(){e=d("nav"),n=d("div"),o=d("a"),o.innerHTML='<img src="https://i.ibb.co/dmbSxP5/LogoV2.png" alt="LogoV2" border="0" width="50"/>',r=g(),s=d("button"),s.innerHTML='<span class="navbar-toggler-icon"></span>',l=g(),a=d("div"),c=d("ul"),V(i.$$.fragment),p=g(),V($.$$.fragment),x=g(),V(v.$$.fragment),w=g(),V(y.$$.fragment),h(o,"class","navbar-brand"),h(o,"href","#Home"),h(s,"class","navbar-toggler"),h(s,"type","button"),h(s,"data-bs-toggle","collapse"),h(s,"data-bs-target","#navbarSupportedContent"),h(s,"aria-controls","navbarSupportedContent"),h(s,"aria-expanded","false"),h(s,"aria-label","Toggle navigation"),h(c,"class","navbar-nav me-auto mb-2 mb-lg-0"),h(a,"class","collapse navbar-collapse"),h(a,"id","navbarSupportedContent"),h(n,"class","container-fluid"),h(e,"class","navbar navbar-expand-lg navbar-light bg-light")},m(f,d){m(f,e,d),u(e,n),u(n,o),u(n,r),u(n,s),u(n,l),u(n,a),u(a,c),K(i,c,null),u(c,p),K($,c,null),u(c,x),K(v,c,null),u(c,w),K(y,c,null),k=!0,E||(C=b(o,"click",t[1]),E=!0)},p(t,[e]){const n={};1&e&&(n.ElementTitle=t[0]),y.$set(n)},i(t){k||(R(i.$$.fragment,t),R($.$$.fragment,t),R(v.$$.fragment,t),R(y.$$.fragment,t),k=!0)},o(t){P(i.$$.fragment,t),P($.$$.fragment,t),P(v.$$.fragment,t),P(y.$$.fragment,t),k=!1},d(t){t&&f(e),q(i),q($),q(v),q(y),E=!1,C()}}}function nt(t,e,n){let o;c(t,W,(t=>n(3,o=t)));let{NavBarTitle:r=""}=e,s="";function l(){n(0,s=1==o?"Admin":"Login")}return l(),t.$$set=t=>{"NavBarTitle"in t&&n(2,r=t.NavBarTitle)},t.$$.update=()=>{8&t.$$.dirty&&l()},[s,function(){U.set("home")},r,o]}class ot extends F{constructor(t){super(),Q(this,t,nt,et,s,{NavBarTitle:2})}}function rt(e){let n;return{c(){n=d("footer"),n.innerHTML='<section class=""><div class="container text-center text-md-start mt-5"><div class="row mt-3"><div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"><h6 class="text-uppercase fw-bold mb-4"><i class="fas fa-gem me-3"></i>Eco4Kids</h6> \n                    <p>(EN) Recycable games and boardgames for kids of all\n                        ages!</p> \n                    <p>(GR) Ανακυκλώσιμα παιχνίδια και επιτραπέζια παιχνίδια\n                        για παιδιά όλων των ηλικιών!</p></div> \n\n                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"><h6 class="text-uppercase fw-bold mb-4">Contact</h6> \n                    <p><i class="fas fa-home me-3"></i> Βαλαωρίτου 33, Τ.Κ. 42100.\n                        Τρίκαλα</p> \n                    <p><i class="fas fa-envelope me-3"></i>\n                        mail@3gym-trikal.tri.sch.gr</p> \n                    <p><i class="fas fa-phone me-3"></i> +30 2431028697</p></div></div></div></section> \n\n    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">© 2021 Copyright:\n        <a class="text-reset fw-bold" href="https://github.com/GalaxyGAmingBoy">GalaxyGamingBoy</a></div>',h(n,"class","text-center text-lg-start bg-light text-muted")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class st extends F{constructor(t){super(),Q(this,t,null,rt,s,{})}}function lt(e){let n,o,r,s,l,a,c,i,$,x,v,w,y,k,E,C,L,T,_,N,S,M;return{c(){n=d("h1"),n.textContent="Home - Eco4Kids",o=g(),r=d("br"),s=g(),l=d("br"),a=g(),c=d("br"),i=g(),$=d("br"),x=g(),v=d("p"),v.textContent="(EN) School project for a business simulation",w=g(),y=d("p"),y.textContent="(GR) Σχολικό έργο για μια επιχειρηματική προσομοίωση.",k=g(),E=d("br"),C=g(),L=d("label"),T=p("Learn more about Eco4Kids "),_=d("button"),_.textContent="Here",N=p("!"),h(_,"class","btn btn-secondary")},m(t,f){m(t,n,f),m(t,o,f),m(t,r,f),m(t,s,f),m(t,l,f),m(t,a,f),m(t,c,f),m(t,i,f),m(t,$,f),m(t,x,f),m(t,v,f),m(t,w,f),m(t,y,f),m(t,k,f),m(t,E,f),m(t,C,f),m(t,L,f),u(L,T),u(L,_),u(L,N),S||(M=b(_,"click",e[0]),S=!0)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(r),t&&f(s),t&&f(l),t&&f(a),t&&f(c),t&&f(i),t&&f($),t&&f(x),t&&f(v),t&&f(w),t&&f(y),t&&f(k),t&&f(E),t&&f(C),t&&f(L),S=!1,M()}}}function at(t){return[function(){U.set("about")}]}class ct extends F{constructor(t){super(),Q(this,t,at,lt,s,{})}}function it(e){let n,o,r,s,l,a,c,i,u,p,$,b,h,x,v,w,y,k,E,C,L,T,_,N,S;return{c(){n=d("h1"),n.textContent="About - Eco4Kids",o=g(),r=d("p"),r.textContent="(EN) This is a school project for an business simulation. The selected",s=g(),l=d("p"),l.textContent='business is "Games and Boardgames for all ages". All of the materials that',a=g(),c=d("p"),c.textContent="will be used are recycable. A goal set for this business is to be as",i=g(),u=d("p"),u.textContent="Environmentally Friendly, as the company name states.",p=g(),$=d("br"),b=g(),h=d("br"),x=g(),v=d("br"),w=g(),y=d("p"),y.textContent="(GR) Αυτό είναι ένα σχολικό έργο για μια επιχειρηματική προσομοίωση. Η",k=g(),E=d("p"),E.textContent='επιλεγμένη επιχείρηση είναι "Παιχνίδια και επιτραπέζια παιχνίδια για όλες',C=g(),L=d("p"),L.textContent='τις ηλικίες". Όλα τα υλικά που θα χρησιμοποιηθούν είναι ανακυκλώσιμα. Ένας',T=g(),_=d("p"),_.textContent="στόχος που έχει τεθεί για αυτή την επιχείρηση είναι να είναι όσο το δυνατόν",N=g(),S=d("p"),S.textContent="πιο φιλική προς το περιβάλλον, όπως αναφέρει το όνομα της επιχείρησης."},m(t,e){m(t,n,e),m(t,o,e),m(t,r,e),m(t,s,e),m(t,l,e),m(t,a,e),m(t,c,e),m(t,i,e),m(t,u,e),m(t,p,e),m(t,$,e),m(t,b,e),m(t,h,e),m(t,x,e),m(t,v,e),m(t,w,e),m(t,y,e),m(t,k,e),m(t,E,e),m(t,C,e),m(t,L,e),m(t,T,e),m(t,_,e),m(t,N,e),m(t,S,e)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(r),t&&f(s),t&&f(l),t&&f(a),t&&f(c),t&&f(i),t&&f(u),t&&f(p),t&&f($),t&&f(b),t&&f(h),t&&f(x),t&&f(v),t&&f(w),t&&f(y),t&&f(k),t&&f(E),t&&f(C),t&&f(L),t&&f(T),t&&f(_),t&&f(N),t&&f(S)}}}class ut extends F{constructor(t){super(),Q(this,t,null,it,s,{})}}function mt(e){let n,r,s,l,a,c,i,p,$,x,w,y,k,E,C,L,T,_,N,S,M;return{c(){n=d("h1"),n.textContent="Login",r=g(),s=d("div"),l=d("label"),l.textContent="Username",a=g(),c=d("div"),i=d("input"),p=g(),$=d("div"),x=d("label"),x.textContent="Password",w=g(),y=d("div"),k=d("input"),E=g(),C=d("div"),C.innerHTML='<label class="col-4"></label> \n    <div class="col-8"><div class="custom-control custom-checkbox custom-control-inline"><input name="allowbox" id="allowbox_0" type="checkbox" class="custom-control-input" value="aitbc"/> \n            <label for="allowbox_0" class="custom-control-label">Allow info to be checked</label></div></div>',L=g(),T=d("div"),_=d("div"),N=d("button"),N.textContent="Submit",h(l,"for","username"),h(l,"class","col-4 col-form-label"),h(i,"id","username"),h(i,"name","username"),h(i,"placeholder","Enter your username"),h(i,"type","text"),h(i,"class","form-control"),h(c,"class","col-8"),h(s,"class","form-group row"),h(x,"for","password"),h(x,"class","col-4 col-form-label"),h(k,"id","password"),h(k,"name","password"),h(k,"placeholder","Enter your password"),h(k,"type","password"),h(k,"class","form-control"),h(k,"width","100"),h(y,"class","col-8"),h($,"class","form-group row"),h(C,"class","form-group row"),h(N,"class","btn btn-primary"),h(_,"class","offset-4 col-8"),h(T,"class","form-group row")},m(t,o){m(t,n,o),m(t,r,o),m(t,s,o),u(s,l),u(s,a),u(s,c),u(c,i),v(i,e[0].username),m(t,p,o),m(t,$,o),u($,x),u($,w),u($,y),u(y,k),v(k,e[0].password),m(t,E,o),m(t,C,o),m(t,L,o),m(t,T,o),u(T,_),u(_,N),S||(M=[b(i,"input",e[2]),b(k,"input",e[3]),b(N,"click",e[1])],S=!0)},p(t,[e]){1&e&&i.value!==t[0].username&&v(i,t[0].username),1&e&&k.value!==t[0].password&&v(k,t[0].password)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(s),t&&f(p),t&&f($),t&&f(E),t&&f(C),t&&f(L),t&&f(T),S=!1,o(M)}}}function ft(t,e,n){let o;return c(t,X,(t=>n(0,o=t))),[o,function(){"admin"==o.username&&"tmima@B22"==o.password?(W.set(1),i(X,o.username="",o),i(X,o.password="",o)):W.set(0)},function(){o.username=this.value,X.set(o)},function(){o.password=this.value,X.set(o)}]}class dt extends F{constructor(t){super(),Q(this,t,ft,mt,s,{})}}function pt(t){let e,n;return{c(){e=d("td"),n=p(t[0])},m(t,o){m(t,e,o),u(e,n)},p(t,e){1&e&&x(n,t[0])},d(t){t&&f(e)}}}function gt(t){let e,n;return{c(){e=d("th"),n=p(t[0]),h(e,"scope",t[1])},m(t,o){m(t,e,o),u(e,n)},p(t,o){1&o&&x(n,t[0]),2&o&&h(e,"scope",t[1])},d(t){t&&f(e)}}}function $t(e){let n;function o(t,e){return"true"==t[2]?gt:pt}let r=o(e),s=r(e);return{c(){s.c(),n=$()},m(t,e){s.m(t,e),m(t,n,e)},p(t,[e]){r===(r=o(t))&&s?s.p(t,e):(s.d(1),s=r(t),s&&(s.c(),s.m(n.parentNode,n)))},i:t,o:t,d(t){s.d(t),t&&f(n)}}}function bt(t,e,n){let{element:o=""}=e,{type:r="row"}=e,{bold:s="false"}=e;return t.$$set=t=>{"element"in t&&n(0,o=t.element),"type"in t&&n(1,r=t.type),"bold"in t&&n(2,s=t.bold)},[o,r,s]}class ht extends F{constructor(t){super(),Q(this,t,bt,$t,s,{element:0,type:1,bold:2})}}function xt(t,e,n){const o=t.slice();return o[0]=e[n],o}function vt(t,e){let n,o,r,s,l,a,c,i;return o=new ht({props:{element:e[0].id}}),s=new ht({props:{element:e[0].role}}),a=new ht({props:{element:e[0].name}}),{key:t,first:null,c(){n=d("tr"),V(o.$$.fragment),r=g(),V(s.$$.fragment),l=g(),V(a.$$.fragment),c=g(),this.first=n},m(t,e){m(t,n,e),K(o,n,null),u(n,r),K(s,n,null),u(n,l),K(a,n,null),u(n,c),i=!0},p(t,n){e=t},i(t){i||(R(o.$$.fragment,t),R(s.$$.fragment,t),R(a.$$.fragment,t),i=!0)},o(t){P(o.$$.fragment,t),P(s.$$.fragment,t),P(a.$$.fragment,t),i=!1},d(t){t&&f(n),q(o),q(s),q(a)}}}function wt(t){let e,n,o,r,s,l,a,c,i,p,$,b=[],x=new Map;r=new ht({props:{bold:"true",element:"#",type:"col"}}),l=new ht({props:{bold:"true",element:"ΡΟΛΟΣ",type:"col"}}),c=new ht({props:{bold:"true",element:"ΟΝΟΜΑ",type:"col"}});let v=Y;const w=t=>t[0].id;for(let e=0;e<v.length;e+=1){let n=xt(t,v,e),o=w(n);x.set(o,b[e]=vt(o,n))}return{c(){e=d("table"),n=d("thead"),o=d("tr"),V(r.$$.fragment),s=g(),V(l.$$.fragment),a=g(),V(c.$$.fragment),i=g(),p=d("tbody");for(let t=0;t<b.length;t+=1)b[t].c();h(e,"class","table")},m(t,f){m(t,e,f),u(e,n),u(n,o),K(r,o,null),u(o,s),K(l,o,null),u(o,a),K(c,o,null),u(e,i),u(e,p);for(let t=0;t<b.length;t+=1)b[t].m(p,null);$=!0},p(t,[e]){0&e&&(v=Y,B(),b=function(t,e,n,o,r,s,l,a,c,i,u,m){let f=t.length,d=s.length,p=f;const g={};for(;p--;)g[t[p].key]=p;const $=[],b=new Map,h=new Map;for(p=d;p--;){const t=m(r,s,p),a=n(t);let c=l.get(a);c?o&&c.p(t,e):(c=i(a,t),c.c()),b.set(a,$[p]=c),a in g&&h.set(a,Math.abs(p-g[a]))}const x=new Set,v=new Set;function w(t){R(t,1),t.m(a,u),l.set(t.key,t),u=t.first,d--}for(;f&&d;){const e=$[d-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,d--):b.has(r)?!l.has(o)||x.has(o)?w(e):v.has(r)?f--:h.get(o)>h.get(r)?(v.add(o),w(e)):(x.add(r),f--):(c(n,l),f--)}for(;f--;){const e=t[f];b.has(e.key)||c(e,l)}for(;d;)w($[d-1]);return $}(b,e,w,1,t,v,x,p,O,vt,null,xt),G())},i(t){if(!$){R(r.$$.fragment,t),R(l.$$.fragment,t),R(c.$$.fragment,t);for(let t=0;t<v.length;t+=1)R(b[t]);$=!0}},o(t){P(r.$$.fragment,t),P(l.$$.fragment,t),P(c.$$.fragment,t);for(let t=0;t<b.length;t+=1)P(b[t]);$=!1},d(t){t&&f(e),q(r),q(l),q(c);for(let t=0;t<b.length;t+=1)b[t].d()}}}class yt extends F{constructor(t){super(),Q(this,t,null,wt,s,{})}}function kt(e){let n,o,r,s,l,a,c,i,u,p,$,b,x,v,w,y,k,E,C,L,T,_,N,S,M,A,H,j,B,G,O,z;return O=new yt({}),{c(){n=d("h1"),n.textContent="Admin",o=g(),r=d("br"),s=g(),l=d("br"),a=g(),c=d("br"),i=g(),u=d("h3"),u.textContent="NameTag",p=g(),$=d("a"),$.innerHTML='<img src="https://i.ibb.co/TvPqLmS/Card.png" alt="Card" border="0"/>',b=g(),x=d("br"),v=g(),w=d("br"),y=g(),k=d("hr"),E=g(),C=d("h3"),C.textContent="Logo",L=g(),T=d("a"),T.innerHTML='<img src="https://i.ibb.co/dmbSxP5/LogoV2.png" alt="LogoV2" border="0" width="150"/>',_=g(),N=d("br"),S=g(),M=d("br"),A=g(),H=d("hr"),j=g(),B=d("h3"),B.textContent="(EN) Roles / (GR) ΡΟΛΟΙ",G=g(),V(O.$$.fragment),h($,"href","https://ibb.co/bWNRJzZ"),h(T,"href","https://ibb.co/dmbSxP5")},m(t,e){m(t,n,e),m(t,o,e),m(t,r,e),m(t,s,e),m(t,l,e),m(t,a,e),m(t,c,e),m(t,i,e),m(t,u,e),m(t,p,e),m(t,$,e),m(t,b,e),m(t,x,e),m(t,v,e),m(t,w,e),m(t,y,e),m(t,k,e),m(t,E,e),m(t,C,e),m(t,L,e),m(t,T,e),m(t,_,e),m(t,N,e),m(t,S,e),m(t,M,e),m(t,A,e),m(t,H,e),m(t,j,e),m(t,B,e),m(t,G,e),K(O,t,e),z=!0},p:t,i(t){z||(R(O.$$.fragment,t),z=!0)},o(t){P(O.$$.fragment,t),z=!1},d(t){t&&f(n),t&&f(o),t&&f(r),t&&f(s),t&&f(l),t&&f(a),t&&f(c),t&&f(i),t&&f(u),t&&f(p),t&&f($),t&&f(b),t&&f(x),t&&f(v),t&&f(w),t&&f(y),t&&f(k),t&&f(E),t&&f(C),t&&f(L),t&&f(T),t&&f(_),t&&f(N),t&&f(S),t&&f(M),t&&f(A),t&&f(H),t&&f(j),t&&f(B),t&&f(G),q(O,t)}}}class Et extends F{constructor(t){super(),Q(this,t,null,kt,s,{})}}function Ct(e){let n,o;return n=new yt({}),{c(){V(n.$$.fragment)},m(t,e){K(n,t,e),o=!0},p:t,i(t){o||(R(n.$$.fragment,t),o=!0)},o(t){P(n.$$.fragment,t),o=!1},d(t){q(n,t)}}}function Lt(t){let e,n,o,r;const s=[St,Nt],l=[];function a(t,e){return 1==t[1]?0:1}return e=a(t),n=l[e]=s[e](t),{c(){n.c(),o=$()},m(t,n){l[e].m(t,n),m(t,o,n),r=!0},p(t,r){let c=e;e=a(t),e!==c&&(B(),P(l[c],1,1,(()=>{l[c]=null})),G(),n=l[e],n||(n=l[e]=s[e](t),n.c()),R(n,1),n.m(o.parentNode,o))},i(t){r||(R(n),r=!0)},o(t){P(n),r=!1},d(t){l[e].d(t),t&&f(o)}}}function Tt(e){let n,o;return n=new ut({}),{c(){V(n.$$.fragment)},m(t,e){K(n,t,e),o=!0},p:t,i(t){o||(R(n.$$.fragment,t),o=!0)},o(t){P(n.$$.fragment,t),o=!1},d(t){q(n,t)}}}function _t(e){let n,o;return n=new ct({}),{c(){V(n.$$.fragment)},m(t,e){K(n,t,e),o=!0},p:t,i(t){o||(R(n.$$.fragment,t),o=!0)},o(t){P(n.$$.fragment,t),o=!1},d(t){q(n,t)}}}function Nt(t){let e,n;return e=new dt({}),{c(){V(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function St(t){let e,n;return e=new Et({}),{c(){V(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Mt(t){let e,n,o,r,s,a,c,i,p,$,b,x,v;s=new ot({props:{NavBarTitle:"Eco4Kids"}});const w=[_t,Tt,Lt,Ct],y=[];function k(t,e){return"home"==t[0]?0:"about"==t[0]?1:"login"==t[0]?2:"roles"==t[0]?3:-1}return~(p=k(t))&&($=y[p]=w[p](t)),x=new st({}),{c(){var t,u;e=d("main"),n=d("script"),r=g(),V(s.$$.fragment),a=g(),c=d("a"),c.innerHTML='<img src="https://i.ibb.co/dmbSxP5/LogoV2.png" alt="LogoV2" border="0" width="100"/>',i=g(),$&&$.c(),b=g(),V(x.$$.fragment),t=n.src,u=o="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",l||(l=document.createElement("a")),l.href=u,t!==l.href&&h(n,"src","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"),h(n,"integrity","sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"),h(n,"crossorigin","anonymous"),h(c,"href","https://ibb.co/SfQ2Gt3"),h(e,"class","svelte-u9qvfs")},m(t,o){m(t,e,o),u(e,n),u(e,r),K(s,e,null),u(e,a),u(e,c),u(e,i),~p&&y[p].m(e,null),u(e,b),K(x,e,null),v=!0},p(t,[n]){let o=p;p=k(t),p===o?~p&&y[p].p(t,n):($&&(B(),P(y[o],1,1,(()=>{y[o]=null})),G()),~p?($=y[p],$?$.p(t,n):($=y[p]=w[p](t),$.c()),R($,1),$.m(e,b)):$=null)},i(t){v||(R(s.$$.fragment,t),R($),R(x.$$.fragment,t),v=!0)},o(t){P(s.$$.fragment,t),P($),P(x.$$.fragment,t),v=!1},d(t){t&&f(e),q(s),~p&&y[p].d(),q(x)}}}function At(t,e,n){let o,r;return c(t,U,(t=>n(0,o=t))),c(t,W,(t=>n(1,r=t))),U.set("home"),[o,r]}return new class extends F{constructor(t){super(),Q(this,t,At,Mt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map