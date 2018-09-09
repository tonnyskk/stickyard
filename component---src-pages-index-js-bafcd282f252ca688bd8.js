(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(e,t,n){"use strict";n.r(t);var r=n(245),i=n.n(r),a=(n(246),n(117),n(0)),c=n.n(a),l=n(234),o=(n(67),n(121),n(248),n(17)),s=n.n(o),u=n(69),f=n.n(u),d=n(13),p=n.n(d),m=function(e,t){e.transform=t,e.WebkitTransform=t},h=function(e,t){m(e,"translateY("+t+"px) translateZ(0)")},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).setContainerRef=n.setContainerRef.bind(f()(f()(n))),n.setStickyRef=n.setStickyRef.bind(f()(f()(n))),n.updateState=n.updateState.bind(f()(f()(n))),n.getStickyOffsets=n.getStickyOffsets.bind(f()(f()(n))),n.scrollToIndex=n.scrollToIndex.bind(f()(f()(n))),n.scrollTo=n.scrollTo.bind(f()(f()(n))),n.container=null,n.stickers=[],n.lastStickyIndex=-1,n.updating=!1,n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.purgeStickers(),this.container&&this.container.addEventListener("scroll",this.updateState)},n.componentDidUpdate=function(){this.purgeStickers()},n.componentWillUnmount=function(){this.container&&this.container.removeEventListener("scroll",this.updateState)},n.setContainerRef=function(e){this.container=e,e&&(e.style.position="relative",e.style.willChange="transform",e.style.WebkitOverflowScrolling="touch",e.style.overflow="auto")},n.setStickyRef=function(e){e&&this.stickers.push(e)},n.getStickyOffsets=function(){return this.stickers.map(function(e){return e.offsetTop})},n.scrollTo=function(e){this.container&&(this.container.scrollTop=e)},n.scrollToIndex=function(e){e>=0&&e<this.getStickyOffsets().length&&this.scrollTo(this.getStickyOffsets()[e])},n.updateState=function(){if(!this.updating&&this.container&&0!==this.stickers.length){this.updating=!0;for(var e=this.container,t=e.scrollTop,n=e.scrollHeight,r=this.getStickyOffsets().concat(n),i=0;t>=r[i];)i+=1;var a=(i-=1)>=0?this.stickers[i]:null;a&&(t<r[i+1]-a.offsetHeight?h(a.style,t-a.offsetTop):h(a.style,r[i+1]-r[i]-a.offsetHeight));var c=this.props,l=c.stickyClassName,o=c.onSticky;if(i!==this.lastStickyIndex){var s=this.lastStickyIndex>=0?this.stickers[this.lastStickyIndex]:null;s&&m(s.style,""),l&&(a&&a.classList&&a.classList.add(l),s&&s.classList&&s.classList.remove(l)),o&&o(i),this.lastStickyIndex=i}this.updating=!1}},n.purgeStickers=function(){this.stickers=this.stickers.filter(function(e){return e&&e.offsetHeight}).sort(function(e,t){return e.offsetTop-t.offsetTop}),this.updateState()},n.render=function(){return(0,this.props.children)({registerContainer:this.setContainerRef,registerSticky:this.setStickyRef,updateState:this.updateState,getStickyOffsets:this.getStickyOffsets,scrollToIndex:this.scrollToIndex,scrollTo:this.scrollTo})},t}(c.a.PureComponent);g.propTypes={children:p.a.func.isRequired,stickyClassName:p.a.string,onSticky:p.a.func};var y=n(250),k=n(235),b=Object(l.b)("div",{target:"eofwj0w0"})("margin:20px;"),x=Object(l.b)("div",{target:"eofwj0w1"})("font-weight:500;"),w=Object(l.b)("span",{target:"eofwj0w2"})("background-color:#ccc;margin:0 10px;padding:1px 5px;border-radius:2px;color:#333;font-size:13px;"),E=Object(l.b)("span",{target:"eofwj0w3"})("background-color:#333;padding:1px 5px;border-radius:2px;color:#fff;font-size:13px;"),v=Object(l.b)("div",{target:"eofwj0w4"})("margin:10px;font-size:14px;"),S=Object(l.b)("div",{target:"eofwj0w5"})("margin:10px 0;font-size:14px;"),j=Object(l.b)("div",{target:"eofwj0w6"})("background-color:#ddd;padding:10px;border-radius:2px;color:#333;font-size:14px;",E,"{background-color:#888;}"),O=function(){return c.a.createElement("div",null,c.a.createElement(b,null,c.a.createElement(x,null,"children",c.a.createElement(w,null,"function({})"),c.a.createElement(E,null,"required")),c.a.createElement(v,null,"Render whatever you want, it's called with an object with the following properties:"),c.a.createElement(S,null,c.a.createElement(w,null,"registerContainer(ref)"),"pass to the container's ",c.a.createElement(E,null,"ref")," prop"),c.a.createElement(S,null,c.a.createElement(w,null,"registerSticky(ref)"),"pass to the ",c.a.createElement(E,null,"ref")," prop of whatever node within the container if you want to make it sticky"),c.a.createElement(S,null,c.a.createElement(w,null,"updateState()"),"update the sticky state manually, this useful if your content is resizable"),c.a.createElement(S,null,c.a.createElement(w,null,"getStickyOffsets()"),"return all the sticky-able elements' offsets"),c.a.createElement(S,null,c.a.createElement(w,null,"scrollToIndex(index)"),"scroll to the specific sticky element by index"),c.a.createElement(S,null,c.a.createElement(w,null,"scrollTo(offset)"),"scroll to the specific offset"),c.a.createElement(j,null,"The ref-register must be passed to the real DOM node, so if the component is a wrapper uppon DOM node, you need to register it to the underlying DOM node, using ",c.a.createElement(E,null,"innerRef")," or something like that if provided.")),c.a.createElement(b,null,c.a.createElement(x,null,"stickyClassName",c.a.createElement(w,null,"string")),c.a.createElement(v,null,"The className to be attached to the element when it's sticky"),c.a.createElement(j,null,"This feature relies on ",c.a.createElement(E,null,"classList")," which is not supported below IE10, so it won't take any effect on IE9 or below, you can use"," ",c.a.createElement(E,null,"onSticky")," to implement by yourself.")),c.a.createElement(b,null,c.a.createElement(x,null,"onSticky",c.a.createElement(w,null,"function(index)")),c.a.createElement(v,null,"It's called when an element becomes sticky, ",c.a.createElement(E,null,"-1")," means there is no sticky element")))};function T(){var e=i()(["\n              import Stickyard from 'stickyard'\n\n              // pseudo code\n              <Stickyard>\n                {({ registerContainer, registerSticky }) => (\n                  <div ref={registerContainer}>\n                    {items.map((item, index) => (\n                      <div key={item.key} ref={item.sticky ? registerSticky : null}>\n                        {item.label}\n                      </div>\n                    ))}\n                  </div>\n                )}\n              </Stickyard>\n            "]);return T=function(){return e},e}function z(){var e=i()(["\n              # Yarn\n              yarn add stickyard\n\n              # NPM\n              npm install --save stickyard\n            "]);return z=function(){return e},e}var R=Object(l.a)("box-shadow:0 1px 4px #888;"),I=Object(l.b)("div",{target:"e1v0jowm0"})("height:calc(100vh - 100px);"),C=Object(l.b)("div",{target:"e1v0jowm1"})("height:50px;background-color:#ccc;display:flex;align-items:center;padding:0 20px;font-weight:500;font-size:18px;"),M=Object(l.b)("div",{target:"e1v0jowm2"})("height:200px;display:flex;align-items:center;justify-content:center;padding:20px;font-weight:500;font-size:20px;"),L=Object(l.b)("pre",{target:"e1v0jowm3"})("background-color:#333;margin:0;padding:20px;color:#eee;font-size:14px;overflow-x:auto;"),D=Object(l.b)("div",{target:"e1v0jowm4"})("height:",function(e){return Math.ceil(50*Math.random())+30},"px;background-color:",function(e){return e.sticky?"#ccc":"#fff"},";display:flex;align-items:center;padding:0 20px;"),N=new Array(100).fill(0).map(function(e,t){return"Item "+t});t.default=function(){return c.a.createElement(k.a,null,c.a.createElement(g,{stickyClassName:R},function(e){var t=e.registerContainer,n=e.registerSticky;return c.a.createElement(I,{innerRef:t},c.a.createElement(M,null,"Make your React component sticky the easy way using render prop"),c.a.createElement(C,{innerRef:n},"Install"),c.a.createElement(L,null,Object(y.a)(z())),c.a.createElement(C,{innerRef:n},"API"),c.a.createElement(O,null),c.a.createElement(C,{innerRef:n},"Usage"),c.a.createElement(L,null,Object(y.a)(T())),c.a.createElement(C,{innerRef:n},"Demo"),N.map(function(e,t){var r=0!==t&&t%5==0;return c.a.createElement(D,{key:t,sticky:r,innerRef:r?n:null},e)}))}))}},235:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(236),c=n.n(a),l=n(234),o=Object(l.b)("header",{target:"e11hzzkv0"})("background-color:#333;color:#fff;height:60px;box-shadow:0 1px 4px #000;"),s=Object(l.b)("nav",{target:"e11hzzkv1"})("max-width:900px;height:100%;margin:auto;display:flex;align-items:center;justify-content:space-between;"),u=Object(l.b)("div",{target:"e11hzzkv2"})("font-size:24px;"),f=Object(l.b)("a",{target:"e11hzzkv3"})("color:#fff;text-decoration:none;&:hover{color:#eee;}"),d=function(){return i.a.createElement(o,null,i.a.createElement(s,null,i.a.createElement(u,null,i.a.createElement(f,{href:"https://nihgwu.github.io/stickyard/"},"Stickyard")),i.a.createElement(f,{href:"https://github.com/nihgwu/stickyard"},"Github")))};Object(l.c)("body{margin:0;padding:0;font-family:sans-serif;font-size:16px;}*{box-sizing:border-box;}");var p=Object(l.b)("div",{target:"e1lb6ihe0"})("margin:20px auto;max-width:900px;background-color:#f5f5f5;box-shadow:1px 1px 4px #ccc,-1px -1px 4px #ccc;");t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:"Stickyard",meta:[{name:"description",content:"Make your React component sticky the easy way"},{name:"keywords",content:"react, component, sticky, stickyard, render-prop"}]}),i.a.createElement(d,null),i.a.createElement(p,null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bafcd282f252ca688bd8.js.map