(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3832),c=a(3833),o=a.n(c),s=a(162),l=function(e){return r.a.createElement(s.StaticQuery,{query:u,render:function(t){var a=e.title||t.site.siteMetadata.defaultTitle;return r.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.company},e.children)},data:i})},u="3821534497";l.defaultProps={lang:"en",meta:[],keywords:[]};var m=l,d=a(194),p=a(190),h=a.n(p),g=a(3844),f=a.n(g),E=a(3849),y=a.n(E),v=a(3847),x=a.n(v),b=a(161),w=a.n(b),T=a(158),C=a(191),N=function(e){return e.siteLink?r.a.createElement("a",{href:e.siteLink},e.children):r.a.createElement(r.a.Fragment,null,e.children)},k=Object(C.a)(Object(T.withStyles)(function(e){return{grid:{height:"100%"},card:{height:"100%"},cardMedia:{height:"150px"},titleText:{textAlign:"center"},imageLink:{border:0,width:"80%",paddingTop:"40px",paddingBottom:"20px"}}})(function(e){var t=e.classes;return r.a.createElement(h.a,{spacing:24,container:!0,justify:"center",alignItems:"stretch",className:t.grid},e.items.map(function(e){var a=e.node,n=a.html,i=a.frontmatter,c=i.title,o=i.siteLink,s=i.imageLink,l=i.customWidth,u=i.customTopPadding;return r.a.createElement(h.a,{item:!0,xs:12,md:4,key:c},r.a.createElement(f.a,{className:t.card},o?void 0:r.a.createElement(x.a,{image:s,className:t.cardMedia}),r.a.createElement(y.a,null,o?r.a.createElement("center",null,r.a.createElement(N,{siteLink:o},r.a.createElement("img",{src:s,alt:c,className:t.imageLink,style:{paddingTop:u,width:l}}))):r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.titleText},r.a.createElement(N,{siteLink:o},c)),r.a.createElement(w.a,{component:"p",dangerouslySetInnerHTML:{__html:n}}))))}))})),_=a(7),M=a.n(_),I=a(6),S=a.n(I),q=a(3851),j=a.n(q),P=a(3864),R=a.n(P),L=a(3866),B=a.n(L),A=a(3881),O=a.n(A);function G(e){var t=e.children,a=e.dir;return r.a.createElement(w.a,{component:"div",dir:a,style:{height:"100%",padding:24}},t)}G.propTypes={children:S.a.node.isRequired,dir:S.a.string.isRequired};var F=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t.handleChangeIndex=function(e){t.setState({value:e})},t}return M()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.theme,n=e.items;return r.a.createElement("div",{className:t.root},r.a.createElement(R.a,{position:"static",color:"default"},r.a.createElement(B.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",centered:!0},n.map(function(e){return r.a.createElement(O.a,{key:e[0],label:e[0],icon:e[1]})}))),r.a.createElement(j.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex},n.map(function(e){return r.a.createElement(G,{key:e[0],dir:a.direction},e[2])})))},t}(r.a.Component);F.propTypes={classes:S.a.object.isRequired,theme:S.a.object.isRequired};var Q=Object(T.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper}}},{withTheme:!0})(F),U=a(172),D=a(3884),W=a.n(D),J=a(182),H=a.n(J);a.d(t,"query",function(){return V});var V="568501561";t.default=Object(T.withStyles)(function(e){return{angles:{color:e.palette.secondary.light},logo:{marginBottom:"40px",width:"100px",height:"100px",border:"0"},text:{textAlign:"center"},tabs:{marginTop:"40px",marginBottom:"40px"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.data,n=a.Products.edges,i=a.Services.edges,c=a.Basic.siteMetadata,o=c.domain,s=c.company,l=c.defaultTitle,u=c.preamble,p=c.postamble,h=c.defaultDescription,g=c.contact.email;return r.a.createElement(H.a,{implementation:"css"},r.a.createElement(d.a,null,r.a.createElement(m,{title:l},r.a.createElement("meta",{name:"description",content:h}),r.a.createElement("link",{rel:"canonical",href:o})),r.a.createElement("div",{className:t.text},r.a.createElement("a",{href:o},r.a.createElement("img",{src:W.a,alt:s,className:t.logo})),r.a.createElement(w.a,{paragraph:!0,color:"primary",gutterBottom:!0,variant:"h3",component:"span"},r.a.createElement("span",{className:t.angles},"<")," hi"," ",r.a.createElement("span",{className:t.angles},">")),r.a.createElement(w.a,{paragraph:!0,gutterBottom:!0,variant:"body1",component:"span"},u),r.a.createElement(w.a,{paragraph:!0,gutterBottom:!0,variant:"body1",component:"span"},h)),r.a.createElement("div",{className:e.classes.tabs},r.a.createElement(Q,{items:[["Our Products",r.a.createElement(U.c,null),r.a.createElement(k,{items:n})],["Our Services",r.a.createElement(U.a,null),r.a.createElement(k,{items:i})]]})),r.a.createElement("div",{className:t.text},r.a.createElement(w.a,{paragraph:!0,gutterBottom:!0,variant:"body1",component:"span"},p),r.a.createElement(w.a,{paragraph:!0,color:"primary",gutterBottom:!0,variant:"h3",component:"span"},r.a.createElement("span",{className:t.angles},"<")," ",g," ",r.a.createElement("span",{className:t.angles},">")))))})},162:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(6),c=a.n(i),o=a(152),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(163),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},163:function(e,t,a){var n;e.exports=(n=a(174))&&n.default||n},173:function(e){e.exports={data:{site:{siteMetadata:{company:"Fox and Geese",contact:{email:"hi@foxandgeese.com"}}}}}},174:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),o=a(60),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},191:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(158),s=a(230),l=a.n(s),u=a(223),m=a.n(u),d=a(193);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return c.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},c.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},c.a.createElement(l.a,null),c.a.createElement(e,this.props)))},a}(c.a.Component)}},193:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return s});a(77),a(55),a(78),a(227);var r=a(165),i=a(158),c=Object(i.createMuiTheme)({typography:{useNextVariants:!0}});function o(){return{theme:c,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function s(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=o()),n.__INIT_MATERIAL_UI__):o()}}).call(this,a(226),a(73))},194:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(173),s=a(162),l=a(196),u=a.n(l),m=a(161),d=a.n(m),p=a(182),h=a.n(p),g=a(218),f=a.n(g),E=a(172),y=function(e){var t=e.data.site.siteMetadata,a=t.company,n=t.contact.email;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{style:{marginTop:"48px",marginBottom:"24px"}}),c.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(d.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",c.a.createElement(h.a,{only:["xs","sm"]},"–"),c.a.createElement(h.a,{only:["xl","lg","md"]},c.a.createElement("br",null))," ",n),c.a.createElement("a",{href:"https://github.com/foxandgeese/simple-react-company-starter",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(f.a,null,c.a.createElement(E.b,null))))))},v=function(e){return c.a.createElement(s.StaticQuery,{query:"2334881711",render:function(e){return c.a.createElement(y,{data:e})},data:o})},x=a(190),b=a.n(x),w=a(158),T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.classes;return c.a.createElement(b.a,{container:!0,justify:"center",alignItems:"stretch"},c.a.createElement(b.a,{item:!0,xs:!0,className:a.root},t,c.a.createElement(v,null)))},t}(c.a.Component);t.a=Object(w.withStyles)(function(e){return{root:{maxWidth:"1168px",marginTop:"94px"}}})(T)},3832:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Website Change Monitoring Products and Services",company:"Fox and Geese"}}}}},3884:function(e,t,a){e.exports=a.p+"static/logo-c287b64ca1cd915bfa94097232a7aa88.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-684ca78ecc2f6b105335.js.map