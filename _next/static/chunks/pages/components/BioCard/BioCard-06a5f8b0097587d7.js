(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{4651:function(n,r,e){"use strict";e.d(r,{Ee:function(){return f}});var t=e(2846),a=e(5031),i=e(7294),o=e(8698);function l(){return l=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},l.apply(this,arguments)}function c(n,r){if(null==n)return{};var e,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)e=i[t],r.indexOf(e)>=0||(a[e]=n[e]);return a}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=i.forwardRef((function(n,r){var e=n.htmlWidth,t=n.htmlHeight,a=n.alt,o=c(n,s);return i.createElement("img",l({width:e,height:t,ref:r,alt:a},o))})),f=(0,t.Gp)((function(n,r){var e=n.fallbackSrc,s=n.fallback,f=n.src,g=n.srcSet,h=n.align,m=n.fit,p=n.loading,b=n.ignoreFallback,v=n.crossOrigin,w=c(n,u),j=null!=p||b||void 0===e&&void 0===s,k=function(n){var r=n.loading,e=n.src,t=n.srcSet,a=n.onLoad,l=n.onError,c=n.crossOrigin,s=n.sizes,u=n.ignoreFallback,d=(0,i.useState)("pending"),f=d[0],g=d[1];(0,i.useEffect)((function(){g(e?"loading":"pending")}),[e]);var h=(0,i.useRef)(),m=(0,i.useCallback)((function(){if(e){p();var n=new Image;n.src=e,c&&(n.crossOrigin=c),t&&(n.srcset=t),s&&(n.sizes=s),r&&(n.loading=r),n.onload=function(n){p(),g("loaded"),null==a||a(n)},n.onerror=function(n){p(),g("failed"),null==l||l(n)},h.current=n}}),[e,c,t,s,a,l,r]),p=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,o.a)((function(){if(!u)return"loading"===f&&m(),function(){p()}}),[f,m,u]),u?"loaded":f}(l({},n,{ignoreFallback:j})),x=l({ref:r,objectFit:m,objectPosition:h},j?w:(0,a.CE)(w,["onError","onLoad"]));return"loaded"!==k?s||i.createElement(t.m$.img,l({as:d,className:"chakra-image__placeholder",src:e},x)):i.createElement(t.m$.img,l({as:d,src:f,srcSet:g,crossOrigin:v,loading:p,className:"chakra-image"},x))}));a.Ts&&(f.displayName="Image")},7679:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/BioCard/BioCard",function(){return e(8744)}])},8744:function(n,r,e){"use strict";e.r(r),e.d(r,{BioCard:function(){return o}});var t=e(5893),a=(e(7294),e(3236)),i=e(4651),o=function(){return(0,t.jsxs)(a.rj,{width:"95%",templateColumns:{md:"repeat(2, 1fr)",base:"repeat(1, 1fr)"},className:"cg-apple15",p:10,borderRadius:"3xl",justifyContent:"left",children:[(0,t.jsx)(a.P4,{rowSpan:2,width:"100%",children:(0,t.jsx)(i.Ee,{className:"shadow-box-lg-dark",m:"auto",width:{md:"80%",base:"60%"},src:"https://avatars.githubusercontent.com/u/69059806?v=4",alt:"John Farrell Profile",borderRadius:"100%"})}),(0,t.jsxs)(a.P4,{rowSpan:2,display:"flex",flexWrap:"wrap",alignContent:"center",width:"100%",children:[(0,t.jsx)(a.X6,{fontSize:"5xl",mb:10,children:(0,t.jsxs)(a.gC,{children:[(0,t.jsx)(a.xv,{children:"Running by day,"}),(0,t.jsx)(a.xv,{children:"coding by night."})]})}),(0,t.jsx)(a.xv,{children:"I enjoy racing D1 cross country, track and field at Brown University. Beyond running, I spend the majority of my free time coding or playing piano."})]})]})};r.default=o}},function(n){n.O(0,[774,888,179],(function(){return r=7679,n(n.s=r);var r}));var r=n.O();_N_E=r}]);