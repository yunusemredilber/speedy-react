(this["webpackJsonpspeedy-react"]=this["webpackJsonpspeedy-react"]||[]).push([[0],[,,,,function(e,n,t){e.exports={circle:"styles_circle__23pis",listItem:"styles_listItem__29jRK"}},function(e,n,t){e.exports={container:"slider_container__2Tm_d",slider:"slider_slider__1Z4te",slideList:"slider_slideList__1MEFm",slideItem:"slider_slideItem__369bU",bottomControls:"slider_bottomControls__2ih8l",prevButton:"slider_prevButton__J1jzA",nextButton:"slider_nextButton__3CSNt",pageInfo:"slider_pageInfo__WiG4W"}},,,function(e,n,t){e.exports={h1:"typography_h1__2pCSS",h2:"typography_h2__2txj9",h3:"typography_h3__3w59z",p:"typography_p__2TMZ5",code:"typography_code__2OsUI"}},function(e,n,t){e.exports={button:"icon-button_button__1KItp",small:"icon-button_small__1F21-",medium:"icon-button_medium__33AkB",large:"icon-button_large__3Qu0R"}},function(e,n,t){e.exports={button:"button_button__3_GL1",small:"button_small__14mQu",medium:"button_medium__2JYYh",large:"button_large__29CND"}},function(e,n,t){e.exports={container:"section_container__29xD-",content:"section_content__2Wjr2",header:"section_header__V7XDB"}},,function(e,n,t){e.exports={container:"code-block_container__1-_uX",pre:"code-block_pre__3poao"}},function(e,n,t){e.exports={counterControl:"rendering-with-context_counterControl__2uhjp"}},,,,function(e,n,t){e.exports={container:"app_container__iAXZ0"}},,function(e,n,t){e.exports={container:"code-with-result_container__3NBEc"}},function(e,n,t){e.exports={container:"text-section_container__3_FID"}},,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(17),s=t.n(o),i=(t(29),t(30),t(31),t(32),t(18)),a=t.n(i),u=t(5),l=t.n(u),d=t(3);var j,h,b=t(2),x=t(7),O=t(9),m=t.n(O),p=t(6),v=t(0),f=["children","className","size"],C={small:m.a.small,medium:m.a.medium,large:m.a.large},g=function(e){var n=e.children,t=e.className,r=e.size,c=void 0===r?"small":r,o=Object(x.a)(e,f);return Object(v.jsx)("button",Object(b.a)(Object(b.a)({className:Object(p.a)([m.a.button,C[c]||C.small,t])},o),{},{children:n}))};g.displayName="IconButton";var y=["title","titleId"];function _(){return _=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}function k(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function w(e,n){var t=e.title,c=e.titleId,o=k(e,y);return r.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,ref:n,"aria-labelledby":c},o),t?r.createElement("title",{id:c},t):null,j||(j=r.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),h||(h=r.createElement("path",{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"})))}var I,N,B=r.forwardRef(w),M=(t.p,["title","titleId"]);function S(){return S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S.apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function z(e,n){var t=e.title,c=e.titleId,o=P(e,M);return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,ref:n,"aria-labelledby":c},o),t?r.createElement("title",{id:c},t):null,I||(I=r.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),N||(N=r.createElement("path",{d:"M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"})))}var R=r.forwardRef(z),L=(t.p,function(e){var n=e.slides,t=function(e){var n=Object(r.useState)(0),t=Object(d.a)(n,2),c=t[0],o=t[1];return{current:c,setCurrent:o,before:function(){var n=c-1;o(n<0?e-1:n)},next:function(){var n=c+1;o(n!==e?n:0)}}}(n.length),c=t.current,o=t.before,s=t.next;return Object(v.jsxs)("div",{className:l.a.container,children:[Object(v.jsx)("div",{className:l.a.slider,children:Object(v.jsx)("ul",{className:l.a.slideList,style:{transform:"translate3d(calc(-".concat(c," * var(--carousel-width, 0)), 0, 0)")},children:n.map((function(e){return Object(v.jsx)("li",{className:l.a.slideItem,children:e},e.key)}))})}),Object(v.jsx)(g,{className:l.a.prevButton,onClick:o,children:Object(v.jsx)(B,{})}),Object(v.jsx)(g,{className:l.a.nextButton,onClick:s,children:Object(v.jsx)(R,{})}),Object(v.jsxs)("div",{className:l.a.bottomControls,children:[Object(v.jsx)(g,{onClick:o,children:Object(v.jsx)(B,{})}),Object(v.jsx)(g,{onClick:s,children:Object(v.jsx)(R,{})})]}),Object(v.jsxs)("div",{className:l.a.pageInfo,children:[c+1," / ",n.length]})]})});L.displayName="Slider";var E=t(13),H=t.n(E),W=t(15),A=t(19),T=function(e){var n=e.code;return Object(v.jsx)("div",{className:H.a.container,children:Object(v.jsx)(W.a,Object(b.a)(Object(b.a)({},W.b),{},{theme:A.a,code:n.trim(),language:"jsx",children:function(e){var n=e.className,t=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return Object(v.jsx)("pre",{className:Object(p.a)([H.a.pre,n]),style:t,children:r.map((function(e,n){return Object(v.jsx)("div",Object(b.a)(Object(b.a)({},c({line:e,key:n})),{},{children:e.map((function(e,n){return Object(v.jsx)("span",Object(b.a)({},o({token:e,key:n})))}))}))}))})}}))})};T.displayName="CodeBlock";var V=t(8),F=t.n(V),D=["variant","className","children"],U={h1:F.a.h1,h2:F.a.h2,h3:F.a.h3,p:F.a.p,code:F.a.code},J=function(e){var n=e.variant,t=void 0===n?"p":n,r=e.className,c=e.children,o=Object(x.a)(e,D),s=t;return Object(v.jsx)(s,Object(b.a)(Object(b.a)({className:Object(p.a)([U[t],r])},o),{},{children:c}))};J.displayName="Typography";var X=t(11),Y=t.n(X),Z=function(e){var n=e.children,t=e.header,r=e.secondHeader;return Object(v.jsxs)("section",{className:Y.a.container,children:[Object(v.jsxs)("header",{className:Y.a.header,children:[Object(v.jsx)(J,{variant:"h1",children:t}),Object(v.jsx)(J,{variant:"h2",children:r})]}),Object(v.jsx)("div",{className:Y.a.content,children:n})]})};Z.displayName="Section";var q=function(){return Object(v.jsx)(Z,{header:"Painting Renders",secondHeader:"useRenderPaint hook",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's examine the code below which is a custom react hook:"}),Object(v.jsx)(T,{code:'\nconst useRenderPaint = () => {\n  const ref = useRef(null)\n\n  useEffect(() => {\n    if (!ref.current) {\n      return\n    }\n    console.log("(re)rendering...")\n\n    ref.current.classList.remove("highlight")\n    void ref.current.offsetWidth // Enough time to wait\n    ref.current.classList.add("highlight")\n  }) // No dependency array\n\n  const onAnimationEnd = () => {\n    if (!ref.current) {\n      return\n    }\n\n    ref.current.classList.remove("highlight")\n  }\n\n  return { ref, onAnimationEnd, "data-highlightable": true }\n}\n\nexport { useRenderPaint }\n'})]})})};q.displayName="PaintingRenders";var G=function(){var e=Object(r.useRef)(null);Object(r.useEffect)((function(){if(e.current){console.log("(re)rendering...");var n=e.current;n.classList.remove("highlight"),n.offsetWidth,n.classList.add("highlight")}}));return{ref:e,onAnimationEnd:function(){e.current&&e.current.classList.remove("highlight")},"data-highlightable":!0}},K=t(10),Q=t.n(K),$=["children","className","size"],ee={small:Q.a.small,medium:Q.a.medium,large:Q.a.large},ne=function(e){var n=e.children,t=e.className,r=e.size,c=void 0===r?"small":r,o=Object(x.a)(e,$);return Object(v.jsx)("button",Object(b.a)(Object(b.a)({className:Object(p.a)([Q.a.button,ee[c]||ee.small,t])},o),{},{children:n}))};ne.displayName="Button";var te=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],o=G();return Object(v.jsxs)("div",Object(b.a)(Object(b.a)({},o),{},{children:[Object(v.jsx)(ne,{onClick:function(){return c(t+1)},children:"Increase"}),Object(v.jsx)("p",{children:t})]}))},re=t(20),ce=t.n(re),oe=function(e){var n=e.code,t=e.children;return Object(v.jsxs)("div",{className:ce.a.container,children:[Object(v.jsx)(T,{code:n}),t]})};oe.displayName="CodeWithResult";var se=function(){return Object(v.jsx)(Z,{header:"Causes of Re-rendering",secondHeader:"Change in the state",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's see what happened if we try to change a state:"}),Object(v.jsx)(oe,{code:"\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n  const targetProps = useRenderPaint()\n  return (\n    <div {...targetProps}>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase\n      </Button>\n      <p>{counter}</p>\n    </div>\n  )\n}\n\nexport { Counter }\n",children:Object(v.jsx)(te,{})})]})})};se.displayName="ChangeInTheState";var ie=t(4),ae=t.n(ie),ue=function(e){var n=e.text,t=G();return Object(v.jsx)("div",Object(b.a)(Object(b.a)({className:ae.a.circle},t),{},{children:n}))};ue.displayName="Circle";var le="\nconst Circle = ({ text }) => {\n  const targetProps = useRenderPaint()\n\n  return (\n    <div className={styles.circle} {...targetProps}>\n      {text}\n    </div>\n  )\n}\n",de="\n".concat(le,"\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase\n      </Button>\n      <Circle text={counter} />\n    </div>\n  )\n}\n\nexport { Counter }\n"),je=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(ne,{onClick:function(){return c(t+1)},children:"Increase"}),Object(v.jsx)(ue,{text:t})]})},he=function(){return Object(v.jsx)(Z,{header:"Causes of Re-rendering",secondHeader:"Change in the props",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's see what happens when the given prop changes:"}),Object(v.jsx)(oe,{code:de,children:Object(v.jsx)(je,{})})]})})};he.displayName="ChangeInTheProps";var be="\n".concat(le,'\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase {counter}\n      </Button>\n      <Circle text="hi" />\n    </div>\n  )\n}\n\nexport { Counter }\n'),xe=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(ne,{onClick:function(){return c(t+1)},children:["Increase ",t]}),Object(v.jsx)(ue,{text:"hi"})]})},Oe=function(){return Object(v.jsx)(Z,{header:"Causes of Re-rendering",secondHeader:"Rendering of parent",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"What if the given prop was same:"}),Object(v.jsx)(oe,{code:be,children:Object(v.jsx)(xe,{})})]})})};Oe.displayName="RenderingOfParent";var me=t(21),pe=t.n(me),ve=function(e){var n=e.text,t=e.header,r=e.secondHeader,c=e.children;return Object(v.jsxs)("section",{className:pe.a.container,children:[t&&Object(v.jsx)(J,{variant:"h1",children:t}),r&&Object(v.jsx)(J,{variant:"h2",children:r}),n&&Object(v.jsx)(J,{variant:"p",children:n}),c]})};ve.displayName="TextSection";var fe=t.p+"static/media/component-tree-1.4e6e4967.svg",Ce=t.p+"static/media/component-tree-2.334d251a.svg",ge=t.p+"static/media/component-tree-3.9e5ea962.svg",ye=function(){return Object(v.jsx)(Z,{header:"Render Behavior",secondHeader:"Standard render behavior",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"The component tree from previous example is something like this:"}),Object(v.jsx)("img",{src:fe,alt:""}),Object(v.jsx)(J,{variant:"p",children:"The user clicks a button in Counter that increments a counter:"}),Object(v.jsx)("img",{src:Ce,alt:""}),Object(v.jsx)(J,{variant:"p",children:"div was not originally marked as needing an update. However, because its parent Counter rendered, React now moves downwards and renders div, Button and Circle as well."}),Object(v.jsx)("img",{src:ge,alt:""})]})})};ye.displayName="RenderBehavior";var _e=Object(r.memo)(ue),ke=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(ne,{onClick:function(){return c(t+1)},children:["Increase ",t]}),Object(v.jsx)(ue,{text:"hi"}),Object(v.jsx)(_e,{text:"hi"})]})},we=function(){return Object(v.jsxs)(Z,{header:"Memo",secondHeader:"Introduction to memo",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's see what happens if we try to use React.memo hoc:"}),Object(v.jsx)(oe,{code:'\nconst MemoizedCircle = React.memo(Circle)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase {counter}\n      </Button>\n      <Circle text="hi" />\n      <MemoizedCircle text="hi" />\n    </div>\n  )\n}\n\nexport { Counter }\n',children:Object(v.jsx)(ke,{})})]}),Object(v.jsxs)(J,{variant:"p",children:["It is preventing ",Object(v.jsx)("b",{children:"the wasted renders!"})]})]})};we.displayName="Memo";var Ie=function(e){var n=e.text,t=e.style,r=G();return Object(v.jsx)("div",Object(b.a)(Object(b.a)({className:ae.a.circle,style:t},r),{},{children:n}))},Ne=Object(r.memo)(Ie),Be=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(ne,{onClick:function(){return c(t+1)},children:["Increase ",t]}),Object(v.jsx)(Ne,{text:"hi"}),Object(v.jsx)(Ne,{text:"hi",style:{backgroundColor:"#666"}})]})},Me=function(){return Object(v.jsx)(Z,{header:"Memo",secondHeader:"Passing new references down as props",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's examine behavior of memo with a similar example:"}),Object(v.jsx)(oe,{code:'\nconst MemoizedCircle = React.memo(Circle)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase {counter}\n      </Button>\n      <MemoizedCircle text="hi" />\n      <MemoizedCircle\n       text="hi"\n       style={{ backgroundColor: "#666" }}\n       />\n    </div>\n  )\n}\n\nexport { Counter }\n',children:Object(v.jsx)(Be,{})})]})})};Me.displayName="NewReferencesInProps";var Se=function(e){var n=e.text,t=e.style,r=G();return Object(v.jsx)("div",Object(b.a)(Object(b.a)({className:ae.a.circle,style:t},r),{},{children:n}))},Pe=function(e,n){return e.text===n.text},ze=Object(r.memo)(Se,Pe),Re=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(ne,{onClick:function(){return c(t+1)},children:["Increase ",t]}),Object(v.jsx)(ze,{text:t}),Object(v.jsx)(ze,{text:"hi",style:{backgroundColor:"#666"}})]})},Le=function(){return Object(v.jsxs)(Z,{header:"Memo",secondHeader:"Comparing props",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"We can provide a custom comparison function as the second argument:"}),Object(v.jsx)(oe,{code:'\nconst areEqual = (prevProps, nextProps) => {\n  return prevProps.text === nextProps.text\n}\n\nconst MemoizedCircle = memo(Circle, areEqual)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase {counter}\n      </Button>\n      <MemoizedCircle text={counter} />\n      <MemoizedCircle\n       text="hi"\n       style={{ backgroundColor: "#666" }}\n       />\n    </div>\n  )\n}\n\nexport { Counter }\n',children:Object(v.jsx)(Re,{})})]}),Object(v.jsxs)(J,{variant:"p",children:["- By default, memo will only ",Object(v.jsx)("b",{children:"shallowly compare"})," complex objects in the props object."]})]})};Le.displayName="MemoCustomComparison";var Ee=function(e){var n=e.text,t=e.style,r=G();return Object(v.jsx)("div",Object(b.a)(Object(b.a)({className:ae.a.circle,style:t},r),{},{children:n}))},He=Object(r.memo)(Ee),We=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useMemo)((function(){return{backgroundColor:"#666"}}),[]);return Object(v.jsxs)("div",{children:[Object(v.jsxs)(ne,{onClick:function(){return c(t+1)},children:["Increase ",t]}),Object(v.jsx)(He,{text:t}),Object(v.jsx)(He,{text:"hi",style:o})]})},Ae=function(){return Object(v.jsx)(Z,{header:"useMemo",secondHeader:"Memorizing values",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"We can use useMemo hook to memoize values:"}),Object(v.jsx)(oe,{code:'\nconst MemoizedCircle = memo(Circle)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n  const style = useMemo(() => ({ backgroundColor: "#666" }), [])\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase {counter}\n      </Button>\n      <MemoizedCircle text={counter} />\n      <MemoizedCircle text="hi" style={style} />\n    </div>\n  )\n}\n\nexport { Counter }\n',children:Object(v.jsx)(We,{})}),Object(v.jsx)(J,{variant:"p",children:"We can also use useMemo for creating heavy values."})]})})};Ae.displayName="UseMemo";var Te=function(e){var n=e.text,t=e.style,r=G();return Object(v.jsx)("div",Object(b.a)(Object(b.a)({className:ae.a.circle,style:t},r),{},{children:n}))},Ve=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(0),s=Object(d.a)(o,2),i=s[0],a=s[1],u=Object(r.useMemo)((function(){return Object(v.jsx)(Te,{text:"hi"})}),[i]);return Object(v.jsxs)("div",{children:[Object(v.jsxs)(ne,{onClick:function(){return c(t+1)},children:["Increase ",t]}),Object(v.jsxs)(ne,{onClick:function(){return a(i+1)},children:["Increase ",i]}),u]})},Fe=function(){return Object(v.jsx)(Z,{header:"useMemo",secondHeader:"Memorizing components",children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(J,{variant:"p",children:["We can memoize components with useMemo to control according to"," ",Object(v.jsx)("b",{children:"parent dependencies"}),":"]}),Object(v.jsx)(oe,{code:'\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n  const [counter1, setCounter1] = useState(0)\n  const memoizedCircle = useMemo(\n    () => <Circle text="hi" />,\n    [counter1]\n  )\n\n  return (\n    <div>\n      <Button onClick={() => setCounter(counter + 1)}>\n        Increase {counter}\n      </Button>\n      <Button onClick={() => setCounter1(counter1 + 1)}>\n        Increase {counter1}\n      </Button>\n      {memoizedCircle}\n    </div>\n  )\n}\n\nexport { Counter }\n',children:Object(v.jsx)(Ve,{})})]})})};Fe.displayName="UseMemoForComponents";var De=function(e){var n=Object(r.useState)(e),t=Object(d.a)(n,2),c=t[0],o=t[1];return{list:c,shuffle:function(){var e=c.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,n){return e.sort-n.sort})).map((function(e){return e.value}));o(e)}}},Ue=["banana","apple","carrot","grape","peach"],Je=function(e){var n=e.text,t=G();return Object(v.jsx)("li",Object(b.a)(Object(b.a)({className:ae.a.listItem},t),{},{children:n}))},Xe=Object(r.memo)(Je),Ye=function(){var e=De(Ue),n=e.list,t=e.shuffle;return Object(v.jsxs)("div",{children:[Object(v.jsx)("ul",{children:n.map((function(e){return Object(v.jsx)(Je,{text:e},e)}))}),Object(v.jsx)(ne,{onClick:t,children:"Shuffle"})]})},Ze=function(){var e=De(Ue),n=e.list,t=e.shuffle;return Object(v.jsxs)("div",{children:[Object(v.jsx)("ul",{children:n.map((function(e){return Object(v.jsx)(Xe,{text:e})}))}),Object(v.jsx)(ne,{onClick:t,children:"Shuffle"})]})},qe=function(){var e=De(Ue),n=e.list,t=e.shuffle;return Object(v.jsxs)("div",{children:[Object(v.jsx)("ul",{children:n.map((function(e){return Object(v.jsx)(Xe,{text:e},e)}))}),Object(v.jsx)(ne,{onClick:t,children:"Shuffle"})]})},Ge=function(){return Object(v.jsx)(Z,{header:"useMemo",secondHeader:"Memorizing components",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's see what happens if we shuffle list items with keys:"}),Object(v.jsx)(oe,{code:'\nconst items = [\n  "banana", "apple", "carrot",\n  "grape", "peach"\n]\n\nconst Item = ({ text }) => {\n  const targetProps = useRenderPaint()\n  return <li {...targetProps}>{text}</li>\n}\n\nconst List = () => {\n  const { list, shuffle } = useList(items)\n\n  return (\n    <div>\n      <ul>\n        {list.map((el) => (\n          <Item key={el} text={el} />\n        ))}\n      </ul>\n      <Button onClick={shuffle}>Shuffle</Button>\n    </div>\n  )\n}\n\nexport { List }\n',children:Object(v.jsx)(Ye,{})}),Object(v.jsx)(J,{variant:"p",children:"Also, we can examine memoized items without keys:"}),Object(v.jsx)(oe,{code:"\nconst MemoizedItem = memo(Item)\n\nconst List = () => {\n  const { list, shuffle } = useList(items)\n\n  return (\n    <div>\n      <ul>\n        {list.map((el) => (\n          <MemoizedItem text={el} />\n        ))}\n      </ul>\n      <Button onClick={shuffle}>Shuffle</Button>\n    </div>\n  )\n}\n\nexport { List }\n",children:Object(v.jsx)(Ze,{})}),Object(v.jsxs)(J,{variant:"p",children:["The great recipe = ",Object(v.jsx)("b",{children:"memo + keys"}),";"]}),Object(v.jsx)(oe,{code:"\nconst MemoizedItem = memo(Item)\n\nconst List = () => {\n  const { list, shuffle } = useList(items)\n\n  return (\n    <div>\n      <ul>\n        {list.map((el) => (\n          <MemoizedItem key={el} text={el} />\n        ))}\n      </ul>\n      <Button onClick={shuffle}>Shuffle</Button>\n    </div>\n  )\n}\n\nexport { List }\n",children:Object(v.jsx)(qe,{})})]})})};Ge.displayName="Lists";var Ke=function(e){var n=e.onClick,t=G();return Object(v.jsx)("div",Object(b.a)(Object(b.a)({},t),{},{children:Object(v.jsx)(ne,{onClick:n,children:"Increase"})}))},Qe=Object(r.memo)(Ke),$e=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:t}),Object(v.jsx)(Qe,{onClick:function(){return c(t+1)}})]})},en=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useCallback)((function(){return c(t+1)}),[t]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:t}),Object(v.jsx)(Qe,{onClick:o})]})},nn=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useCallback)((function(){return c((function(e){return e+1}))}),[]);return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:t}),Object(v.jsx)(Qe,{onClick:o})]})},tn=function(){return Object(v.jsx)(Z,{header:"useCallback",secondHeader:"Memorizing callback functions",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Lets see what happens if we pass an anonymous function in the jsx:"}),Object(v.jsx)(oe,{code:"\nconst IncreaseButton = ({ onClick }) => {\n  const targetProps = useRenderPaint()\n\n  return (\n    <Button onClick={onClick} {...targetProps}>\n      Increase\n    </Button>\n  )\n}\n\nconst MemoizedIncreaseButton = memo(IncreaseButton)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <div>\n      <p>{counter}</p>\n      <MemoizedIncreaseButton\n        onClick={() => setCounter(counter + 1)}\n      />\n    </div>\n  )\n}\n\nexport { Counter }\n",children:Object(v.jsx)($e,{})}),Object(v.jsx)(J,{variant:"p",children:"Let's try to memoize the callback func with the useCallback hook:"}),Object(v.jsx)(oe,{code:"\nconst MemoizedIncreaseButton = memo(IncreaseButton)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n  const memoizedOnClick = useCallback(\n    () => setCounter(counter + 1),\n    [counter]\n  )\n\n  return (\n    <div>\n      <p>{counter}</p>\n      <MemoizedIncreaseButton\n        onClick={memoizedOnClick}\n      />\n    </div>\n  )\n}\n\nexport { Counter }\n",children:Object(v.jsx)(en,{})}),Object(v.jsx)(J,{variant:"p",children:"We can pas an updater function to setState and remove the troublemaker counter dependency:"}),Object(v.jsx)(oe,{code:"\nconst MemoizedIncreaseButton = memo(IncreaseButton)\n\nconst Counter = () => {\n  const [counter, setCounter] = useState(0)\n  const memoizedOnClick = useCallback(\n    () => setCounter(counter => counter + 1),\n    []\n  )\n\n  return (\n    <div>\n      <p>{counter}</p>\n      <MemoizedIncreaseButton\n        onClick={memoizedOnClick}\n      />\n    </div>\n  )\n}\n\nexport { Counter }\n",children:Object(v.jsx)(nn,{})})]})})};tn.displayName="UseCallback";var rn=t.p+"static/media/context-component-tree-1.82768c38.svg",cn=t.p+"static/media/context-component-tree-2.d8485e21.svg",on=t.p+"static/media/context-component-tree-3.45874df7.svg",sn=function(){return Object(v.jsx)(Z,{header:"Context API",secondHeader:"Render behavior of React Context API",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"A component tree with a context provider looked something like this:"}),Object(v.jsx)("img",{src:rn,alt:""}),Object(v.jsx)(J,{variant:"p",children:"CounterControl component that consumes counter context trigger a change at the context:"}),Object(v.jsx)("img",{src:cn,alt:""}),Object(v.jsx)(J,{variant:"p",children:"React takes a different approach:"}),Object(v.jsx)("img",{src:on,alt:""})]})})};sn.displayName="ContextRenderingBehavior";var an=t(14),un=t.n(an),ln={counter:0,setCounter:function(){}},dn=Object(r.createContext)(ln),jn=function(e){var n=e.children,t=Object(r.useState)(0),c=Object(d.a)(t,2),o=c[0],s=c[1];return Object(v.jsx)(dn.Provider,{value:{counter:o,setCounter:s},children:n})},hn=function(e){var n=e.counterValues,t=G(),r=n.counter,c=n.setCounter;return Object(v.jsxs)("div",Object(b.a)(Object(b.a)({className:un.a.counterControl},t),{},{children:[Object(v.jsx)("p",{children:r}),Object(v.jsx)(ne,{onClick:function(){return c(r+1)},children:"Increase"})]}))},bn=function(){var e=Object(r.useContext)(dn),n=e.counter,t=e.setCounter,c=G();return Object(v.jsxs)("div",Object(b.a)(Object(b.a)({className:un.a.counterControl},c),{},{children:[Object(v.jsx)("p",{children:n}),Object(v.jsx)(ne,{onClick:function(){return t(n+1)},children:"Increase"})]}))},xn=function(e){var n=e.counterValues;return Object(v.jsxs)("div",{children:[Object(v.jsx)(hn,{counterValues:n}),Object(v.jsx)(ue,{text:"hi"})]})},On=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(bn,{}),Object(v.jsx)(ue,{text:"hi"})]})},mn=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t={counter:n[0],setCounter:n[1]};return Object(v.jsx)(xn,{counterValues:t})},pn=function(){return Object(v.jsx)(jn,{children:Object(v.jsx)(On,{})})},vn=function(){return Object(v.jsx)(Z,{header:"Context API",secondHeader:"Rendering with and without context",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{variant:"p",children:"Let's try to use counter mechanism with props as usual:"}),Object(v.jsx)(oe,{code:'\nconst CounterControl = ({ counterValues }) => {\n  const targetProps = useRenderPaint()\n  const { counter, setCounter } = counterValues;\n\n  return (\n    <div {...targetProps}>\n      <p>{counter}</p>\n      <Button\n        onClick={() => setCounter(counter + 1)}\n      >\n       Increase\n      </Button>\n    </div>\n  )\n}\n\nconst Counter = ({ counterValues }) => {\n  return (\n    <div>\n      <CounterControl counterValues={counterValues} />\n      <Circle text="hi" />\n    </div>\n  )\n}\n\nconst CounterApp = () => {\n  const [counter, setCounter] = useState(0)\n  const counterValues = { counter, setCounter }\n\n  return (\n    <Counter counterValues={counterValues} />\n  )\n}\n\nexport { CounterApp }\n',children:Object(v.jsx)(mn,{})}),Object(v.jsx)(J,{variant:"p",children:"What if we use the context api:"}),Object(v.jsx)(oe,{code:'\nconst WithCounter = ({ children }) => {\n  const [counter, setCounter] = useState(0)\n\n  return (\n    <CounterContext.Provider\n      value={{ counter, setCounter }}\n    >\n      {children}\n    </CounterContext.Provider>\n  )\n}\n\nconst useCounter = () => useContext(CounterContext)\n\nconst CounterControl = () => {\n  const { counter, setCounter } = useCounter()\n  const targetProps = useRenderPaint()\n\n  return (\n    <div {...targetProps}>\n      <p>{counter}</p>\n      <Button\n        onClick={() => setCounter(counter + 1)}\n      >\n       Increase\n      </Button>\n    </div>\n  )\n}\n\nconst Counter = () => {\n  return (\n    <div>\n      <CounterControl />\n      <Circle text="hi" />\n    </div>\n  )\n}\n\nconst CounterApp = () => {\n  return (\n    <WithCounter>\n      <Counter />\n    </WithCounter>\n  )\n}\n\nexport { CounterApp }\n',children:Object(v.jsx)(pn,{})})]})})};vn.displayName="RenderingWithContext";var fn=function(){return Object(v.jsx)(Z,{header:"React Profiling",secondHeader:"Profiling with the react dev tools extension.",children:Object(v.jsx)("div",{})})};fn.displayName="ContextRenderingBehavior";var Cn=function(){return Object(v.jsx)("div",{className:a.a.container,children:Object(v.jsx)(L,{slides:[Object(v.jsx)(ve,{header:"Who am I?",secondHeader:"Yunus Emre Dilber",children:Object(v.jsx)("img",{src:"https://github.com/yunusemredilber.png",alt:"My profile pic",className:"circle",width:300,height:300})},-1),Object(v.jsx)(ve,{header:"Before starting the journey",text:"Fix the slow render before you fix the re-render!"},0),Object(v.jsx)(q,{},1),Object(v.jsx)(se,{},2),Object(v.jsx)(he,{},3),Object(v.jsx)(Oe,{},4),Object(v.jsx)(ve,{header:"Components always re-render",text:"React does not care whether \u201cprops changed\u201d - it will render child components unconditionally just because the parent rendered! - Mark Erikson"},5),Object(v.jsx)(ye,{},6),Object(v.jsx)(we,{},7),Object(v.jsx)(Me,{},8),Object(v.jsx)(Le,{},9),Object(v.jsx)(Ae,{},10),Object(v.jsx)(Fe,{},11),Object(v.jsx)(ve,{header:"Should We Memoize Everything?",text:"Only if it's going to make a difference in behavior for the child."},12),Object(v.jsx)(Ge,{},13),Object(v.jsx)(tn,{},14),Object(v.jsx)(ve,{header:"Should We Use useCallback All The Time?",text:"It's okay to pass down new references like callback functions and objects most of the time."},15),Object(v.jsx)(sn,{},16),Object(v.jsx)(vn,{},17),Object(v.jsx)(fn,{},18)]})})};Cn.displayName="App";var gn=function(e){e&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),o(e),s(e)}))},yn=document.getElementById("root");if(!yn)throw new Error("Failed to find the root element");s.a.createRoot(yn).render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(Cn,{})})),gn()}],[[34,1,2]]]);
//# sourceMappingURL=main.680621ab.chunk.js.map