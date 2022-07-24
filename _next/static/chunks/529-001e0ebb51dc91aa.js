"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{4651:function(e,n,r){r.d(n,{Ee:function(){return g}});var a=r(2846),t=r(5031),l=r(7294),i=r(8698);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=l.forwardRef((function(e,n){var r=e.htmlWidth,a=e.htmlHeight,t=e.alt,i=o(e,c);return l.createElement("img",s({width:r,height:a,ref:n,alt:t},i))})),g=(0,a.Gp)((function(e,n){var r=e.fallbackSrc,c=e.fallback,g=e.src,f=e.srcSet,m=e.align,x=e.fit,h=e.loading,p=e.ignoreFallback,j=e.crossOrigin,b=o(e,u),w=null!=h||p||void 0===r&&void 0===c,y=function(e){var n=e.loading,r=e.src,a=e.srcSet,t=e.onLoad,s=e.onError,o=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,d=(0,l.useState)("pending"),g=d[0],f=d[1];(0,l.useEffect)((function(){f(r?"loading":"pending")}),[r]);var m=(0,l.useRef)(),x=(0,l.useCallback)((function(){if(r){h();var e=new Image;e.src=r,o&&(e.crossOrigin=o),a&&(e.srcset=a),c&&(e.sizes=c),n&&(e.loading=n),e.onload=function(e){h(),f("loaded"),null==t||t(e)},e.onerror=function(e){h(),f("failed"),null==s||s(e)},m.current=e}}),[r,o,a,c,t,s,n]),h=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,i.a)((function(){if(!u)return"loading"===g&&x(),function(){h()}}),[g,x,u]),u?"loaded":g}(s({},e,{ignoreFallback:w})),C=s({ref:n,objectFit:x,objectPosition:m},w?b:(0,t.CE)(b,["onError","onLoad"]));return"loaded"!==y?c||l.createElement(a.m$.img,s({as:d,className:"chakra-image__placeholder",src:r},C)):l.createElement(a.m$.img,s({as:d,src:g,srcSet:f,crossOrigin:j,loading:h,className:"chakra-image"},C))}));t.Ts&&(g.displayName="Image")},8744:function(e,n,r){r.r(n),r.d(n,{BioCard:function(){return i}});var a=r(5893),t=(r(7294),r(3236)),l=r(4651),i=function(){return(0,a.jsxs)(t.rj,{mx:3,width:"100%",templateColumns:{md:"repeat(2, 1fr)",base:"repeat(1, 1fr)"},className:"cg-apple15",p:10,borderRadius:"3xl",justifyContent:"left",children:[(0,a.jsx)(t.P4,{rowSpan:2,width:"100%",children:(0,a.jsx)(l.Ee,{className:"shadow-box-lg-dark",m:"auto",width:{md:"80%",base:"60%"},src:"https://avatars.githubusercontent.com/u/69059806?v=4",alt:"John Farrell Profile",borderRadius:"100%"})}),(0,a.jsxs)(t.P4,{rowSpan:2,display:"flex",flexWrap:"wrap",alignContent:"center",width:"100%",children:[(0,a.jsx)(t.X6,{fontSize:{sm:"5xl",base:"4xl"},mb:10,children:"Running by day, coding by night."}),(0,a.jsx)(t.xv,{children:"I enjoy racing D1 cross country, track and field at Brown University. Beyond running, I spend the majority of my free time coding or playing piano."})]})]})};n.default=i},5767:function(e,n,r){r.r(n);var a=r(5893),t=(r(7294),r(3236)),l=r(4651);n.default=function(){return(0,a.jsx)(t.rU,{href:"../contact",_hover:{cursor:"pointer"},children:(0,a.jsxs)(t.kC,{w:"100%",h:"100%",bg:"gray.900",borderRadius:"3xl",alignContent:"center",justifyContent:"space-between",alignItems:"flex-start",flexDir:"column",children:[(0,a.jsx)(t.kC,{p:6,children:(0,a.jsx)(t.Ct,{children:"Contact Card"})}),(0,a.jsxs)(t.kC,{p:10,justifyContent:"center",alignItems:"center",flexDir:"column",children:[(0,a.jsx)(l.Ee,{w:"80%",src:"https://avatars.githubusercontent.com/u/69059806?v=4",alt:"John Farrell Profile",borderRadius:"100%"}),(0,a.jsx)(t.X6,{fontSize:"5xl",children:"Contact Me"})]}),(0,a.jsx)(t.kC,{justifyContent:"center",w:"100%",p:"5",color:"gray.600",children:(0,a.jsx)(t.xv,{children:"View full contact card."})})]})})}},529:function(e,n,r){r.r(n);var a=r(5893),t=(r(7294),r(3236)),l=r(2846),i=r(3426),s=r(8744),o=r(5767),c=r(7472);n.default=function(){return(0,a.jsxs)(t.xu,{children:[(0,a.jsx)(c.default,{}),(0,a.jsxs)(t.xu,{mt:250,children:[(0,a.jsx)(t.kC,{justifyContent:"center",width:"100%",mt:4,children:(0,a.jsx)(s.default,{})}),(0,a.jsxs)(t.kC,{wrap:{lg:"nowrap",base:"wrap"},alignItems:"stretch",p:3,dir:"column",children:[(0,a.jsx)(t.kC,{width:{lg:"60%",base:"100%"},mb:{lg:0,base:3},children:(0,a.jsx)(i.LanguagesMainCard,{languages:[{name:"JavaScript",color:"yellow"},{name:"TypeScript",color:"blue"},{name:"MySQL",color:"orange"},{name:"CSS",color:"blue"},{name:"Java",color:"red"},{name:"Chakra",color:"teal"},{name:"GraphQL",color:"pink"},{name:"React",color:"blue"},{name:"HTML",color:"red"},{name:"PostgreSQL",color:"teal"},{name:"BootStrap5",color:"blue"},{name:"NodeJS",color:"green"},{name:"PHP",color:"teal"},{name:"NextJS",color:"orange"},{name:"Cypress",color:"teal"},{name:"Docker",color:"blue"},{name:"SASS",color:"pink"},{name:"Racket",color:"red"}],size:"2xl"})}),(0,a.jsx)(t.kC,{w:3}),(0,a.jsx)(t.kC,{width:{lg:"40%",base:"100%"},children:(0,a.jsx)(o.default,{})})]}),(0,a.jsxs)(t.xu,{w:"90%",m:"auto",mt:40,mb:20,children:[(0,a.jsxs)(t.X6,{as:"h2",fontSize:{lg:"8xl",base:"6xl"},textAlign:"left",children:["My ",(0,a.jsx)(l.m$.span,{className:"cg-apple12",children:"Projects."})]}),(0,a.jsx)(t.xv,{my:3,fontSize:"2xl",color:"gray.500",textAlign:"left",width:{lg:"50%",base:"90%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]})]})}},7472:function(e,n,r){r.r(n);var a=r(5893),t=r(3236),l=r(4651),i=r(2323);n.default=function(){return(0,a.jsxs)(t.gC,{mt:40,d:"flex",justifyContent:"center",h:1e3,wrap:"nowrap",children:[(0,a.jsx)(l.Ee,{w:{sm:"35%",base:"70%"},className:"shadow-box-lg-light animated-1",src:"https://avatars.githubusercontent.com/u/69059806?v=4",alt:"John Farrell Profile",borderRadius:"100%"}),(0,a.jsx)(t.X6,{as:"h1",fontSize:{lg:"8xl",base:"6xl"},textAlign:"center",className:"cg-apple12 animated-2",children:"John Farrell"}),(0,a.jsx)(t.M5,{children:(0,a.jsx)(t.xv,{my:3,fontSize:{lg:"3xl",base:"2xl"},textAlign:"center",className:"animated-3",w:"70%",children:"Studying computer science at Brown University. My passion is in full-stack and software engineering. Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. My passion is in full-stack and software engineering."})}),(0,a.jsx)(t.kC,{justifyContent:"center",className:"animated-4",p:5,color:"gray.300",children:(0,a.jsx)(i.default,{})})]})}},3426:function(e,n,r){r.r(n),r.d(n,{LanguagesCardProject:function(){return s},LanguagesMainCard:function(){return c}});var a=r(5893),t=(r(7294),r(3236)),l=function(e){return(0,a.jsx)(t.Uc,{fontFamily:"mono",children:(0,a.jsx)(t.M5,{fontSize:{lg:e.size,base:"xl"},borderRadius:5,px:2,fontWeight:"bold",color:"blackAlpha.900",bg:e.langInput.color+".400",children:e.langInput.name&&e.langInput.name.toUpperCase()})})},i=function(e){return(0,a.jsx)(t.Uc,{className:"language-main",children:(0,a.jsx)(t.xv,{fontSize:"sm",borderRadius:5,px:2,fontWeight:"bold",color:"gray.400",children:e.langInput.name&&e.langInput.name.toUpperCase()})})},s=function(e){return(0,a.jsx)(t.kC,{flexWrap:"wrap",justifyContent:"left",children:e.languages&&e.languages.map((function(e){return(0,a.jsx)(t.Eq,{p:1,children:(0,a.jsx)(i,{langInput:e,size:"lg"},e.name)},e.name)}))})},o=function(e){return(0,a.jsx)(t.Uc,{className:"language-main",children:(0,a.jsx)(t.M5,{fontSize:e.size,borderRadius:5,px:2,fontWeight:"bold",color:"blackAlpha.900",className:"cg-card-"+e.langInput.color,children:e.langInput.name&&e.langInput.name.toUpperCase()})})},c=function(e){return(0,a.jsxs)(t.rj,{w:"100%",templateColumns:{lg:"repeat(2, 1fr)",base:"repeat(1, 1fr)"},gap:8,className:"cg-apple20",p:10,borderRadius:"3xl",flexWrap:"wrap",justifyContent:"left",children:[(0,a.jsxs)(t.P4,{rowSpan:2,display:"flex",flexWrap:"wrap",alignContent:"center",width:"100%",children:[(0,a.jsx)(t.X6,{fontSize:{sm:"5xl",base:"4xl"},mb:10,children:"I'm Prepared."}),(0,a.jsx)(t.xv,{fontSize:"lg",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,a.jsx)(t.P4,{rowSpan:2,width:"100%",children:(0,a.jsx)(t.kC,{flexWrap:"wrap",children:e.languages&&e.languages.map((function(n){return(0,a.jsx)(t.kC,{flexWrap:"wrap",p:1,children:(0,a.jsx)(o,{langInput:n,size:e.size},n.name)},n.name)}))})})]})};n.default=function(e){return(0,a.jsx)(t.kC,{flexWrap:"wrap",justifyContent:{lg:"left",base:"center"},children:e.languages&&e.languages.map((function(n){return(0,a.jsx)(t.Eq,{p:1,children:(0,a.jsx)(l,{langInput:n,size:e.size},n.name)},n.name)}))})}},2323:function(e,n,r){r.r(n);var a=r(5893),t=(r(7294),r(5113)),l=r(3236),i=r(2846),s=r(9583);n.default=function(){return(0,a.jsxs)(t.hE,{gap:"4",flexWrap:"wrap",justifyContent:"center",children:[(0,a.jsxs)(l.rU,{href:"https://www.linkedin.com/in/johnsfarrell/",isExternal:!0,className:"shadow-box-sm",children:[(0,a.jsx)(t.hU,{size:"lg",colorScheme:"gray","aria-label":"linkedin",icon:(0,a.jsx)(s.BUd,{}),fontSize:"xx-large"}),(0,a.jsx)(i.m$.span,{display:"none",children:"LinkedIn Link"})]}),(0,a.jsxs)(l.rU,{href:"https://github.com/johnsfarrell",isExternal:!0,className:"shadow-box-sm",children:[(0,a.jsx)(t.hU,{size:"lg",colorScheme:"gray","aria-label":"github",icon:(0,a.jsx)(s.hJX,{}),fontSize:"xx-large"}),(0,a.jsx)(i.m$.span,{display:"none",children:"GitHub Link"})]}),(0,a.jsxs)(l.rU,{href:"../resume",className:"shadow-box-sm",_hover:{textDecoration:"none"},passHref:!0,children:[(0,a.jsx)(t.zx,{size:"lg",rightIcon:(0,a.jsx)(s.UCj,{fontSize:"xx-large"}),colorScheme:"gray",fontWeight:"bold",fontSize:"xl",children:"RESUME\xa0"}),(0,a.jsx)(i.m$.span,{display:"none",children:"Resume Link"})]})]})}}}]);