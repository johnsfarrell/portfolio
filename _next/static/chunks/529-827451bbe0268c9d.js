"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{4651:function(e,n,a){a.d(n,{Ee:function(){return m}});var r=a(2846),t=a(5031),l=a(7294),i=a(8698);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=l.forwardRef((function(e,n){var a=e.htmlWidth,r=e.htmlHeight,t=e.alt,i=o(e,c);return l.createElement("img",s({width:a,height:r,ref:n,alt:t},i))})),m=(0,r.Gp)((function(e,n){var a=e.fallbackSrc,c=e.fallback,m=e.src,g=e.srcSet,x=e.align,f=e.fit,h=e.loading,p=e.ignoreFallback,j=e.crossOrigin,b=o(e,u),y=null!=h||p||void 0===a&&void 0===c,w=function(e){var n=e.loading,a=e.src,r=e.srcSet,t=e.onLoad,s=e.onError,o=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,d=(0,l.useState)("pending"),m=d[0],g=d[1];(0,l.useEffect)((function(){g(a?"loading":"pending")}),[a]);var x=(0,l.useRef)(),f=(0,l.useCallback)((function(){if(a){h();var e=new Image;e.src=a,o&&(e.crossOrigin=o),r&&(e.srcset=r),c&&(e.sizes=c),n&&(e.loading=n),e.onload=function(e){h(),g("loaded"),null==t||t(e)},e.onerror=function(e){h(),g("failed"),null==s||s(e)},x.current=e}}),[a,o,r,c,t,s,n]),h=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,i.a)((function(){if(!u)return"loading"===m&&f(),function(){h()}}),[m,f,u]),u?"loaded":m}(s({},e,{ignoreFallback:y})),k=s({ref:n,objectFit:f,objectPosition:x},y?b:(0,t.CE)(b,["onError","onLoad"]));return"loaded"!==w?c||l.createElement(r.m$.img,s({as:d,className:"chakra-image__placeholder",src:a},k)):l.createElement(r.m$.img,s({as:d,src:m,srcSet:g,crossOrigin:j,loading:h,className:"chakra-image"},k))}));t.Ts&&(m.displayName="Image")},8744:function(e,n,a){a.r(n),a.d(n,{BioCard:function(){return i}});var r=a(5893),t=(a(7294),a(3236)),l=a(4651),i=function(){return(0,r.jsxs)(t.rj,{width:"95%",templateColumns:{md:"repeat(2, 1fr)",base:"repeat(1, 1fr)"},className:"cg-apple15",p:10,borderRadius:"3xl",justifyContent:"left",children:[(0,r.jsx)(t.P4,{rowSpan:2,width:"100%",children:(0,r.jsx)(l.Ee,{className:"shadow-box-lg-dark",m:"auto",width:{md:"80%",base:"60%"},src:"https://avatars.githubusercontent.com/u/69059806?v=4",alt:"John Farrell Profile",borderRadius:"100%"})}),(0,r.jsxs)(t.P4,{rowSpan:2,display:"flex",flexWrap:"wrap",alignContent:"center",width:"100%",children:[(0,r.jsx)(t.X6,{fontSize:"5xl",mb:10,children:(0,r.jsxs)(t.gC,{children:[(0,r.jsx)(t.xv,{children:"Running by day,"}),(0,r.jsx)(t.xv,{children:"coding by night."})]})}),(0,r.jsx)(t.xv,{children:"I enjoy racing D1 cross country, track and field at Brown University. Beyond running, I spend the majority of my free time coding or playing piano."})]})]})};n.default=i},5767:function(e,n,a){a.r(n);var r=a(5893),t=(a(7294),a(3236));n.default=function(){return(0,r.jsxs)(t.kC,{templateColumns:{md:"repeat(2, 1fr)",base:"repeat(1, 1fr)"},className:"cg-apple13",p:10,height:"100%",borderRadius:"3xl",flexWrap:"wrap",justifyContent:"left",children:[(0,r.jsx)(t.X6,{children:"Contact Me"}),(0,r.jsx)(t.xv,{children:"Click here to view my full contact card."})]})}},529:function(e,n,a){a.r(n);var r=a(5893),t=(a(7294),a(3236)),l=a(4651),i=a(2846),s=a(2323),o=a(3426),c=a(8744),u=a(5767);n.default=function(){return(0,r.jsxs)(t.xu,{children:[(0,r.jsx)(t.xu,{mt:20,p:3,children:(0,r.jsx)(l.Ee,{className:"shadow-box-lg-light animated-1",margin:"auto",width:"30%",src:"https://avatars.githubusercontent.com/u/69059806?v=4",alt:"John Farrell Profile",borderRadius:"100%"})}),(0,r.jsxs)(t.xu,{justifyContent:"center",children:[(0,r.jsxs)(t.xu,{justifyContent:"center",w:"70%",margin:"auto",children:[(0,r.jsx)(t.X6,{as:"h1",fontSize:{lg:"8xl",base:"7xl"},textAlign:"center",className:"cg-apple12 animated-2",children:"John Farrell."}),(0,r.jsx)(t.xv,{my:3,fontSize:{lg:"3xl",base:"2xl"},textAlign:"center",className:"animated-3",children:"Studying computer science at Brown University. My passion is in full-stack and software engineering. Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. My passion is in full-stack and software engineering."}),(0,r.jsx)(t.kC,{justifyContent:"center",className:"animated-4",p:5,color:"gray.300",children:(0,r.jsx)(s.default,{})})]}),(0,r.jsxs)(t.xu,{mt:250,children:[(0,r.jsx)(t.kC,{justifyContent:"center",width:"100%",mt:4,children:(0,r.jsx)(c.default,{})}),(0,r.jsxs)(t.Ug,{d:"flex",alignItems:"stretch",p:5,children:[(0,r.jsx)(t.kC,{width:"60%",children:(0,r.jsx)(o.LanguagesMainCard,{languages:[{name:"JavaScript",color:"yellow"},{name:"TypeScript",color:"blue"},{name:"MySQL",color:"orange"},{name:"CSS",color:"blue"},{name:"Java",color:"red"},{name:"Chakra",color:"teal"},{name:"GraphQL",color:"pink"},{name:"React",color:"blue"},{name:"HTML",color:"red"},{name:"PostgreSQL",color:"teal"},{name:"BootStrap5",color:"blue"},{name:"NodeJS",color:"green"},{name:"PHP",color:"teal"},{name:"NextJS",color:"orange"},{name:"Cypress",color:"teal"},{name:"Docker",color:"blue"},{name:"SASS",color:"pink"},{name:"Racket",color:"red"}],size:"2xl"})}),(0,r.jsx)(t.kC,{w:"40%",children:(0,r.jsx)(u.default,{})})]}),(0,r.jsxs)(t.xu,{w:"90%",m:"auto",mt:40,mb:20,children:[(0,r.jsxs)(t.X6,{as:"h2",fontSize:{lg:"8xl",base:"6xl"},textAlign:"left",children:["My"," ",(0,r.jsx)(i.m$.span,{className:"cg-apple12 animated-2",children:"Projects."})]}),(0,r.jsx)(t.xv,{my:3,fontSize:"2xl",color:"gray.500",textAlign:"left",className:"animated-3",width:{lg:"50%",base:"80%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})]})]})}},3426:function(e,n,a){a.r(n),a.d(n,{LanguagesCardProject:function(){return s},LanguagesMainCard:function(){return c}});var r=a(5893),t=(a(7294),a(3236)),l=function(e){return(0,r.jsx)(t.Uc,{fontFamily:"mono",children:(0,r.jsx)(t.M5,{fontSize:{lg:e.size,base:"xl"},borderRadius:5,px:2,fontWeight:"bold",color:"blackAlpha.900",bg:e.langInput.color+".400",children:e.langInput.name&&e.langInput.name.toUpperCase()})})},i=function(e){return(0,r.jsx)(t.Uc,{className:"language-main",children:(0,r.jsx)(t.xv,{fontSize:"sm",borderRadius:5,px:2,fontWeight:"bold",color:"gray.400",children:e.langInput.name&&e.langInput.name.toUpperCase()})})},s=function(e){return(0,r.jsx)(t.kC,{flexWrap:"wrap",justifyContent:"left",children:e.languages&&e.languages.map((function(e){return(0,r.jsx)(t.Eq,{p:1,children:(0,r.jsx)(i,{langInput:e,size:"lg"},e.name)},e.name)}))})},o=function(e){return(0,r.jsx)(t.Uc,{className:"language-main",children:(0,r.jsx)(t.M5,{fontSize:e.size,borderRadius:5,px:2,fontWeight:"bold",color:"blackAlpha.900",className:"cg-card-"+e.langInput.color,children:e.langInput.name&&e.langInput.name.toUpperCase()})})},c=function(e){return(0,r.jsxs)(t.rj,{w:"95%",templateColumns:{md:"repeat(2, 1fr)",base:"repeat(1, 1fr)"},gap:8,className:"cg-apple20",p:10,borderRadius:"3xl",flexWrap:"wrap",justifyContent:"left",children:[(0,r.jsxs)(t.P4,{rowSpan:2,display:"flex",flexWrap:"wrap",alignContent:"center",width:"100%",children:[(0,r.jsx)(t.X6,{fontSize:"5xl",mb:10,children:"I'm Prepared."}),(0,r.jsx)(t.xv,{fontSize:"lg",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,r.jsx)(t.P4,{rowSpan:2,width:"100%",children:(0,r.jsx)(t.kC,{flexWrap:"wrap",children:e.languages&&e.languages.map((function(n){return(0,r.jsx)(t.kC,{flexWrap:"wrap",p:1,children:(0,r.jsx)(o,{langInput:n,size:e.size},n.name)},n.name)}))})})]})};n.default=function(e){return(0,r.jsx)(t.kC,{flexWrap:"wrap",justifyContent:{lg:"left",base:"center"},children:e.languages&&e.languages.map((function(n){return(0,r.jsx)(t.Eq,{p:1,children:(0,r.jsx)(l,{langInput:n,size:e.size},n.name)},n.name)}))})}},2323:function(e,n,a){a.r(n);var r=a(5893),t=(a(7294),a(5113)),l=a(3236),i=a(2846),s=a(9583);n.default=function(){return(0,r.jsxs)(t.hE,{gap:"4",flexWrap:"wrap",justifyContent:"center",children:[(0,r.jsxs)(l.rU,{href:"https://www.linkedin.com/in/johnsfarrell/",isExternal:!0,className:"shadow-box-sm",children:[(0,r.jsx)(t.hU,{size:"lg",colorScheme:"gray","aria-label":"linkedin",icon:(0,r.jsx)(s.BUd,{}),fontSize:"xx-large"}),(0,r.jsx)(i.m$.span,{display:"none",children:"LinkedIn Link"})]}),(0,r.jsxs)(l.rU,{href:"https://github.com/johnsfarrell",isExternal:!0,className:"shadow-box-sm",children:[(0,r.jsx)(t.hU,{size:"lg",colorScheme:"gray","aria-label":"github",icon:(0,r.jsx)(s.hJX,{}),fontSize:"xx-large"}),(0,r.jsx)(i.m$.span,{display:"none",children:"GitHub Link"})]}),(0,r.jsxs)(l.rU,{href:"../resume",isExternal:!0,className:"shadow-box-sm",_hover:{textDecoration:"none"},children:[(0,r.jsx)(t.zx,{size:"lg",rightIcon:(0,r.jsx)(s.UCj,{fontSize:"xx-large"}),colorScheme:"gray",fontWeight:"bold",fontSize:"xl",children:"RESUME\xa0"}),(0,r.jsx)(i.m$.span,{display:"none",children:"Resume Link"})]})]})}}}]);