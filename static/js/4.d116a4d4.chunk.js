(this.webpackJsonptaxodium=this.webpackJsonptaxodium||[]).push([[4],{190:function(e,t,n){},191:function(e,t){},205:function(e,t){},280:function(e,t,n){"use strict";n.r(t);var a=n(134),r=n(10),i=n(8),o=(n(27),n(1)),c=n(20),s=n(273),u=n(275),l=n(282),d=n(283),m=n(276),b=n(284),j=(n(190),n(2));var g=function(e){var t=e.isShown,n=e.progress;return t?Object(j.jsxs)("div",{className:"w-full h-full fixed bg-white text-center",children:[" ",Object(j.jsx)("div",{className:"loader z-50",children:"Loading..."}),Object(j.jsxs)("div",{className:"text-black",children:["Loading ",n,"%"]})]}):Object(j.jsx)(j.Fragment,{})},f=n(125);function p(e,t,n,a,i,o){var c=Object(r.a)(Object(r.a)({},e),{},{data:o||h(e.data,t,n,a),visible:!0,id:e.id+"_coarse"}),s=function(e){return Object(r.a)(Object(r.a)({},e),{},{id:e.id.replace("main","mini"),lineWidthScale:1,pickable:!1,getRadius:e.id.includes("search")?.5*e.getRadius:e.getRadius})}(c),u=i||e.data;return[c,Object(r.a)(Object(r.a)({},e),{},{visible:!0,id:e.id+"_fine",data:u}),s]}function h(e,t,n,a){var r={};return e.filter((function(e){if(a&&Math.abs(t.x[e]-t.x[t.parents[e]])>1|Math.abs(t.y[e]-t.y[t.parents[e]])>.5)return!0;var i=Math.round(t.x[e]*n)/n,o=Math.round(t.y[e]*n)/n;return r[i]?!r[i][o]&&(r[i][o]=1,!0):(r[i]=Object(c.a)({},o,1),!0)}))}var x=[{contour:[[-100,-100],[-100,100],[100,100],[100,-100]],zipcode:94107,population:26599,area:6.11}],O={};function v(e){if(O[e])return O[e];var t=function(e){var t={A:[230,25,75],R:[60,180,75],N:[255,225,25],D:[67,99,216],C:[245,130,49],Q:[70,240,240],E:[145,30,180],G:[240,50,230],H:[188,246,12],I:[250,190,190],L:[230,0,255],K:[0,128,128],M:[154,99,36],F:[255,250,200],P:[128,0,0],T:[170,255,195],W:[128,128,0],Y:[0,0,117],V:[0,100,177],X:[128,128,128],O:[255,255,255],Z:[0,0,0]};if(t[e])return t[e];if(void 0===e)return[200,200,200];if(""===e)return[200,200,200];if("unknown"===e)return[200,200,200];if("USA"===e)return[95,158,245];if("B.1.2"===e)return[95,158,245];if("England"===e)return[214,58,15];if("Scotland"===e)return[255,130,82];if("Wales"===e)return[148,49,22];if("Northern Ireland"===e)return[140,42,15];if("France"===e)return[140,28,120];if("Germany"===e)return[106,140,28];if("India"===e)return[61,173,166];if("Denmark"===e)return[24,112,32];e=e.split("").reverse().join("");var n=0;if(0===e.length)return n;for(var a=0;a<e.length;a++)n=e.charCodeAt(a)+((n<<5)-n),n&=n;var r=[0,0,0];for(a=0;a<3;a++){var i=n>>8*a&255;r[a]=i}if(r[0]+r[1]+r[2]<150||r[0]+r[1]+r[2]>500)return v(e+"_");return r}(e);return O[e]=t,t}function y(e){var t=v(e);return"rgb(".concat(t[0],",").concat(t[1],",").concat(t[2],")")}var _=function(e){return 7/Math.pow(2,e.zoom-5.6)};var N=function(e){var t=e.showMutText,n=e.data,c=e.colourBy,O=e.progress,N=e.setSelectedNode,w=e.scatterIds,k=e.search_configs_initial,C=e.zoomToSearch,M=e.selectedNode,S=Object(o.useState)({ids:[],top:0,bottom:0}),z=Object(i.a)(S,2),T=z[0],I=z[1],P=Object(o.useState)({ids:[],top:0,bottom:0}),A=Object(i.a)(P,2),L=A[0],E=A[1],W=n.node_data,R=Object(o.useState)(),U=Object(i.a)(R,2),D=U[0],F=U[1],B=Object(o.useState)({zoom:4.7,target:[6,13]}),G=Object(i.a)(B,2),H=G[0],J=G[1],q=Object(o.useState)(0),V=Object(i.a)(q,2),Q=V[0],K=(V[1],Object(o.useMemo)((function(){return[1/Math.pow(2,H.zoom-Q-5.6),0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}),[H.zoom,Q])),X=Object(o.useRef)(null),Y=Object(o.useCallback)((function(e){var t=e.viewId,n=e.viewState;e.oldViewState;if("minimap"!==t&&(n.minimap={zoom:3,target:[5,13]},n.target[0]=_(n),X.current.viewports.length)){var a=X.current.viewports[0],i=a.unproject([0,0,0]),o=a.unproject([a.width,a.height,0]);o[0]=o[0]*Math.pow(2,n.zoom-6),i[0]=i[0]*Math.pow(2,n.zoom-6),n=Object(r.a)(Object(r.a)({},n),{},{nw:i,se:o,needs_update:!1}),i[0]=-500,o[0]=500,J(n)}}),[X,Q]),Z=Object(o.useState)(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useCallback)((function(e){if(0===e.buttons&&"onPointerMove"===e._reactName)return!1;var t=X.current.pickObject({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY,radius:10});if("onPointerDown"===e._reactName&&(t&&"minimap"===t.viewport.id?te(!0):te(!1)),t&&"main"===t.viewport.id&&"onClick"===e._reactName&&N(t.object),t||"onClick"!==e._reactName||N(null),t&&"minimap"===t.viewport.id&&ee){var n=Object(r.a)(Object(r.a)({},H),{},{target:[_(H),t.coordinate[1]],needs_update:!0});Y({viewState:n,oldViewState:H})}}),[H,ee,N,Y]),ae=Object(o.useMemo)((function(){return new u.a({id:"mini-poly-layer",data:x,pickable:!0,stroked:!0,opacity:.5,filled:!0,wireframe:!0,getPolygon:function(e){return e.contour},getFillColor:function(e){return[240,240,240]},getLineColor:[80,80,80],getLineWidth:1,lineWidthUnits:"pixels"})}),[]),re=Object(o.useMemo)((function(){var e={};return function(t,a,r){for(var i=t,o=[],c=function(){var t=null;o.push(i);var c=void 0;if(e[i]?t=e[i]:((c=W.mutations[i].mutation&&W.mutations[i].mutation.filter((function(e){return n.mutation_mapping[e].gene===a&&n.mutation_mapping[e].position===r})))&&1===c.length&&(t=n.mutation_mapping[c[0]].final_res),W.parents[i]===i&&null==t&&(t="X")),t)return o.forEach((function(n){e[n]=t})),{v:t};i=W.parents[i]};;){var s=c();if("object"===typeof s)return s.v}}}),[W,n,c]),ie=Object(o.useMemo)((function(){return h(w,W,100,!1)}),[w,W]),oe=Object(o.useMemo)((function(){return"lineage"===c.variable?function(e){return v(n.lineage_mapping[W.lineages[e]])}:"country"===c.variable?function(e){return v(n.country_mapping[W.countries[e]])}:"aa"===c.variable?function(e){return v(re(e,c.gene,c.residue))}:[200,200,200]}),[c,W,n,re]),ce=p({data:w,visible:!0,opacity:.6,getRadius:3,radiusUnits:"pixels",id:"main-scatter",pickable:!0,getLineColor:[100,100,100],lineWidthUnits:"pixels",lineWidthScale:1,onHover:function(e){return F(e)},getPosition:function(e){return[W.x[e],W.y[e]]},updateTriggers:{getFillColor:oe},getFillColor:oe},W,100,!1,L.ids,ie).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:K,stroked:e.id.includes("mini")?void 0:H.zoom>15,radiusMaxPixels:e.id.includes("mini")?2:H.zoom>15?H.zoom/5:3})})).map((function(e){return new l.a(e)})),se=Object(o.useMemo)((function(){return new l.a({data:M?[M]:[],visible:!0,opacity:1,getRadius:6,radiusUnits:"pixels",id:"main-selected",filled:!1,stroked:!0,modelMatrix:K,getLineColor:[0,0,0],getPosition:function(e){return[W.x[e],W.y[e]]},lineWidthUnits:"pixels",lineWidthScale:2})}),[M,W,K]),ue=Object(o.useMemo)((function(){var e;return(e=[]).concat.apply(e,Object(a.a)(k.map((function(e){return p(e,W,100)}))))}),[k,W]),le=Object(o.useMemo)((function(){return ue.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:K})}))}),[ue,K]),de=Object(o.useMemo)((function(){return le.map((function(e){return new l.a(e)}))}),[le]),me=Object(o.useMemo)((function(){return{id:"main-line",data:W.ids.filter((function(e){return!0})),getWidth:1,pickable:!0,onHover:function(e){return F(e)},getTargetPosition:function(e){return[W.x[W.parents[e]],W.y[e]]},getSourcePosition:function(e){return[W.x[e],W.y[e]]},getColor:[150,150,150]}}),[W]),be=Object(o.useMemo)((function(){return{id:"main-line-2",data:W.ids.filter((function(e){return!0})),pickable:!1,getWidth:1,getTargetPosition:function(e){return[W.x[W.parents[e]],W.y[W.parents[e]]]},getSourcePosition:function(e){return[W.x[W.parents[e]],W.y[e]]},getColor:[150,150,150]}}),[W]),je=Object(o.useMemo)((function(){return[].concat.apply([],[me,be].map((function(e){return p(e,W,100,!0)})))}),[me,be,W]),ge=Object(o.useMemo)((function(){return je.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:K})}))}),[je,K]),fe=Object(o.useMemo)((function(){return ge.map((function(e){return new d.a(e)}))}),[ge]);if(H.zoom>17&&!0!==H.needs_update)if(H.nw[1]>T.top&H.se[1]<T.bottom);else{var pe=H.nw[1],he=H.se[1],xe=he-pe,Oe=pe-4*xe,ve=he+4*xe,ye=w.filter((function(e){return W.y[e]>Oe&W.y[e]<ve}));I({top:Oe,bottom:ve,ids:ye})}if(H.zoom>7&&!0!==H.needs_update)if(H.nw[1]>L.top&H.se[1]<L.bottom);else{var _e=H.nw[1],Ne=H.se[1],we=Ne-_e,ke=_e-2*we,Ce=Ne+2*we,Me=w.filter((function(e){return W.y[e]>ke&W.y[e]<Ce}));E({top:ke,bottom:Ce,ids:Me})}var Se=Object(o.useMemo)((function(){return t?W.ids.filter((function(e){return W.num_tips[e]>10&&W.mutations[e]})):[]}),[W.ids,W.mutations,W.num_tips,t]),ze=Object(o.useMemo)((function(){return{id:"main-text-layer",data:T.ids,getPosition:function(e){return[W.x[e]+.3,W.y[e]]},getText:function(e){return W.names[e]},getColor:[180,180,180],getAngle:0,billboard:!0,getTextAnchor:"start",getAlignmentBaseline:"center"}}),[W,T]),Te=Object(o.useMemo)((function(){return{id:"main-text-muts-layer",data:Se.filter((function(){return!0})),getPosition:function(e){return[W.x[e],W.y[e]]},getText:function(e){return W.mutations[e].mutation?W.mutations[e].mutation.map((function(e){var t=n.mutation_mapping[e];return t.gene+":"+t.orig_res+t.position+t.final_res})).sort().join(", "):""},getColor:[180,180,180],getAngle:0,billboard:!0,getTextAnchor:"start",getAlignmentBaseline:"center"}}),[n.mutation_mapping,Se,W.mutations,W.x,W.y]),Ie=Object(o.useMemo)((function(){return[new m.a(Object(r.a)(Object(r.a)({},ze),{},{visible:H.zoom>18.5,getSize:H.zoom>19?12:9.5,modelMatrix:K}))]}),[ze,K,H]),Pe=Object(o.useMemo)((function(){return t?[new m.a(Object(r.a)(Object(r.a)({},Te),{},{visible:!0,getSize:H.zoom>19?12:9.5,modelMatrix:K,getColor:[0,0,0]}))]:[]}),[Te,H,K,t]),Ae=Object(o.useMemo)((function(){var e;return e=void 0!==H.nw?[{contour:[[-100,-100],[100,-100],[100,H.nw[1]],[-100,H.nw[1]]],color:[100,100,100]},{contour:[[-100,H.nw[1]],[100,H.nw[1]],[100,H.se[1]],[-100,H.se[1]]],color:[255,255,255]},{contour:[[-100,H.se[1]],[100,H.se[1]],[100,300],[-100,300]],color:[150,150,150]}]:[],new u.a({id:"mini-pos",data:e,opacity:.05,radiusMinPixels:4,radiusMaxPixels:4,getRadius:4,getLineWidth:.1,getPolygon:function(e){return e.contour},getFillColor:function(e){return e.color}})}),[H]),Le=Object(o.useMemo)((function(){return[ae].concat(Object(a.a)(Ie),Object(a.a)(fe),Object(a.a)(ce),Object(a.a)(de),[Ae,se],Object(a.a)(Pe))}),[ae,Ie,ce,fe,Ae,de,se,Pe]);window.deck=X;var Ee=Object(o.useMemo)((function(){return[new b.a({id:"main",controller:!0}),new b.a({id:"minimap",x:"79%",y:"1%",width:"20%",height:"35%",borderWidth:"1px",controller:!0})]}),[]),We=Object(o.useMemo)((function(){if(D&&D.object){var e,t,a=n.lineage_mapping[W.lineages[D.object]],r=n.country_mapping[W.countries[D.object]],i=n.date_mapping[W.dates[D.object]];"aa"===c.variable&&(t=y(e=re(D.object,c.gene,c.residue)));var o=W.mutations[D.object]&&W.mutations[D.object].mutation&&W.mutations[D.object].mutation.map((function(e){var t=n.mutation_mapping[e];return t.gene+":"+t.orig_res+t.position+t.final_res})).sort();return Object(j.jsxs)("div",{className:"bg-gray-100 p-3 opacity-90 text-sm",style:{position:"absolute",zIndex:1,pointerEvents:"none",left:D.x,top:D.y},children:[Object(j.jsx)("h2",{className:"font-bold",children:W.names[D.object]}),e&&Object(j.jsxs)("div",{className:"bg-white p-1 inline-block",children:[c.gene,":",c.residue,Object(j.jsx)("span",{className:"font-bold",style:{color:t},children:e})]}),Object(j.jsx)("div",{style:{color:"lineage"===c.variable?y(a):"inherit"},children:a}),Object(j.jsx)("div",{style:{color:"country"===c.variable?y(r):"inherit"},children:r}),i,Object(j.jsxs)("div",{className:"text-xs text-gray-600",children:[Object(j.jsx)("div",{className:"mt-1",children:Object(j.jsx)("b",{children:"Node mutations"})}),o?o.join(", "):Object(j.jsx)("i",{children:"No coding mutations"})]})]})}}),[n,W,D,c,re]),Re=Object(o.useMemo)((function(){return 0===W.ids.length}),[W]),Ue=Object(o.useCallback)((function(e){var t=Object(r.a)(Object(r.a)({},H),{},{zoom:H.zoom+e,needs_update:!0}),n=Object(r.a)(Object(r.a)({},t),{},{target:[_(t),t.target[1]]});Y({viewState:n,oldViewState:H})}),[H,Y]);return Object(o.useEffect)((function(){if(null!==C.index|C>0){var e;e=C.index?C.index:C,console.log("zoomToSearch",e);var t=k.filter((function(t){return t.original_index===e}));if(0===t.length)return;var n=t[0].data.map((function(e){return W.y[e]}));if(0===n.length)return;var a=(s=n).reduce((function(e,t){return t>e?t:e}),s[0]),i=function(e){return e.reduce((function(e,t){return t<e?t:e}),e[0])}(n),o=Object(r.a)(Object(r.a)({},H),{},{zoom:9-Math.log2(a-i+.001),needs_update:!0}),c=Object(r.a)(Object(r.a)({},o),{},{target:[_(o),(i+a)/2]});J(c)}var s}),[C,W]),Object(j.jsxs)("div",{className:"w-full h-full relative",onClick:ne,onPointerMove:ne,onPointerDown:ne,children:[" ",Object(j.jsxs)(s.a,{pickingRadius:10,onAfterRender:function(){(void 0===H.nw||H.needs_update)&&Y({viewState:H})},ref:X,views:Ee,viewState:H,onViewStateChange:Y,layerFilter:Object(o.useCallback)((function(e){var t=e.layer,n=e.viewport;return(t.id.startsWith("main")&&"main"===n.id||t.id.startsWith("mini")&&"minimap"===n.id)&(t.id.includes("mini")|H.zoom<8&!t.id.includes("fine")|H.zoom>=8&!t.id.includes("coarse"))}),[H.zoom]),controller:!0,layers:Le,children:[We,Object(j.jsxs)("div",{style:{position:"absolute",right:"0.2em",bottom:"0.2em"},children:[Object(j.jsx)("button",{className:" w-12 h-10 bg-gray-100  p-1 rounded border-gray-300 text-gray-700 opacity-60 hover:opacity-100",onClick:function(){Ue(.6)},children:Object(j.jsx)(f.b,{className:"mx-auto  w-5 h-5 "})}),Object(j.jsx)("button",{className:" w-12 h-10 bg-gray-100 ml-1 p-1 rounded border-gray-300 text-gray-700  opacity-60  hover:opacity-100",onClick:function(){Ue(-.6)},children:Object(j.jsx)(f.c,{className:"mx-auto w-5 h-5 "})})]})]}),Re&&Object(j.jsx)(g,{isShown:!0,progress:O})]})},w=n(19),k=n(159),C=n(211);var M=function(e){var t,n=e.id,a=e.category,r=e.enabled,i=e.value,o=e.setThis,c=e.removeItem,s=e.index,u=e.searchColors,l=e.numResultsHere,d=e.zoomToMe,m=e.aa_pos,b=e.aa_final,g=e.aa_gene,p=e.all_genes,h=e.min_tips,x=e.search_for_ids,O=e.current_accession,v=u[s%u.length];return Object(j.jsxs)("div",{className:"border-gray-100 border-b mb-3 pb-3",children:[Object(j.jsx)("input",{name:"isGoing",type:"checkbox",style:{outline:r&&(i.length>0||!["name","lineage","country"].includes(a))?"1px solid rgb(".concat(v[0],",").concat(v[1],",").concat(v[2],")"):"0px",outlineOffset:"2px"},className:"w-3 h-3 m-3",checked:r,onChange:function(e){return o({enabled:!r})}}),Object(j.jsxs)("select",{className:" w-36 border py-2 px-1 text-grey-darkest text-sm h-10",value:a,onChange:function(e){return o({category:e.target.value})},children:[Object(j.jsx)("option",{value:"name",children:"Sequence name"}),Object(j.jsx)("option",{value:"lineage",children:"Lineage"}),Object(j.jsx)("option",{value:"country",children:"Country"}),Object(j.jsx)("option",{value:"mutation",children:"AA mutation"}),Object(j.jsx)("option",{value:"genbanks",children:"GenBank ids"})]}),["mutation","epis","genbanks"].includes(a)&&Object(j.jsx)("button",{className:"  bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border  text-gray-700 ml-8 h-8",onClick:function(){return c(n)},children:Object(j.jsx)(w.c,{className:"inline-block "})}),("epis"===a||"genbanks"===a)&&Object(j.jsxs)("div",{children:[Object(j.jsx)(k.DebounceInput,{className:"w-48 h-32 border p-1 m-1",element:"textarea",value:x,onChange:function(e){return o({search_for_ids:e.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"h-10",children:[O&&Object(j.jsxs)("button",{onClick:function(e){return o({search_for_ids:""===x?O:x+"\n"+O})},className:" bg-gray-100  mx-auto p-1 rounded border-gray-300 border  text-gray-700 ml-2 h-6 text-xs",children:[Object(j.jsx)(C.a,{className:"inline mr-2 "}),"Add selected node"]})," "]})]}),"mutation"===a&&Object(j.jsxs)("div",{className:" p-2 m-2 ml-2  text-gray-700",children:[" ",Object(j.jsx)("label",{className:"text-sm",children:"Gene:"}),Object(j.jsx)("select",{className:"border py-1 px-1 text-grey-darkest text-sm h-7 w-20 m-3 my-1",value:g,onChange:function(e){return o({aa_gene:e.target.value})},children:p&&p.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"text-sm",children:"Mutation at residue:"})," ",Object(j.jsx)(k.DebounceInput,{debounceTimeout:300,type:"number",value:m,onChange:function(e){return o({aa_pos:e.target.value})},className:"border py-1 px-1 text-grey-darkest text-sm h-7 w-20 m-3 my-1",placeholder:"e.g. 681"})," ",Object(j.jsx)("label",{className:"text-sm",children:" to"}),Object(j.jsx)("select",{value:b,onChange:function(e){return o({aa_final:e.target.value})},className:"border py-1 px-1 text-grey-darkest text-sm h-7 w-16 m-3 my-1",children:["any","A","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","Y"].map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"text-sm",children:"Min descendant genomes:"}),Object(j.jsx)(k.DebounceInput,{debounceTimeout:300,value:h,type:"number",onChange:function(e){return o({min_tips:parseInt(e.target.value)})},className:"border py-1 px-1 text-grey-darkest text-sm h-7 w-16 m-3 my-1"})]})]}),["name","lineage","country"].includes(a)&&Object(j.jsx)(k.DebounceInput,{className:" w-32 border py-2 px-3 text-grey-darkest h-10",value:i,onChange:function(e){return o({value:e.target.value})},debounceTimeout:300}),["mutation","epis","genbanks"].includes(a)?Object(j.jsx)(j.Fragment,{}):Object(j.jsx)("button",{className:" bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border  text-gray-700 ml-2 h-8",onClick:function(){return c(n)},children:Object(j.jsx)(w.c,{className:"inline-block "})}),Object(j.jsx)("div",{className:"text-sm text-gray-600 px-3",children:{name:"Enter a sequence name like QEUH-13ADA01",lineage:"Enter a PANGO lineage like B.1.1.7. Note that sub-lineages will not be found by this method.",country:"Enter a country like 'India' ",mutation:"Enter an amino acid mutation. E.g. gene S, position 681, to R. Note that this will identify the internal node at which the mutation occurred, rather than all the leaf nodes with the mutation."}[a]}),Object(j.jsxs)("div",{className:"text-sm text-gray-900 px-3",children:[" ",(i.length>0||"mutation"===a||"epis"===a||"genbanks"===a)&&Object(j.jsxs)(j.Fragment,{children:[" ",(t=l,new Intl.NumberFormat("en-US").format(t))," result",1!==l&&Object(j.jsx)(j.Fragment,{children:"s"})]}),l>=1&&r&&Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsxs)("button",{onClick:d,className:"inline-block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-1 text-gray-700",children:[Object(j.jsx)(f.b,{className:"inline-block mr-1"}),"locate"]})]})]})]})},S=n(212),z=n(213),T=n(214);!function(e){if(e.length>4)e.slice(-4,-2),e.slice(-2)}("");var I=function(e){var t=e.searchItems,n=e.setSearchItems,c=e.colourBy,s=e.setColourBy,u=e.selectedNode,l=e.data,d=e.searchColors,m=e.numSearchResults,b=e.totalSeqs,g=e.setZoomToSearch,p=e.showMutText,h=e.setShowMutText,x=l.node_data,O=Object(o.useState)("colour"),v=Object(i.a)(O,2),y=v[0],_=v[1],N=Object(o.useMemo)((function(){if(u){var e=x.genbanks[u];if(e&&"nan"!==e)return e}return""}),[x,u]),C=Object(o.useMemo)((function(){if(u){var e=x.epi_isl_numbers[u];if(e&&0!==e)return"EPI_ISL_"+e}return""}),[x,u]);Object(o.useEffect)((function(){}),[C]);var I,P=Object(o.useMemo)((function(){if(!u)return[];for(var e=u,t={};e!==x.parents[e];){var n=x.mutations[e].mutation?Object.fromEntries(x.mutations[e].mutation.map((function(e){var t=l.mutation_mapping[e];return[t.gene+":"+t.position,t.final_res]}))):{};t=Object(r.a)(Object(r.a)({},n),t),e=x.parents[e]}return Object.entries(t).map((function(e){return e[0]+e[1]})).sort()}),[l,x,u]);return Object(j.jsxs)("div",{className:"overflow-y-auto",style:{height:"calc(100vh - 5em)"},children:[Object(j.jsxs)("div",{className:" border-t md:border-t-0 border-b border-gray-300",children:[Object(j.jsxs)("div",{className:"mt-3 mb-3 text-gray-500 text-sm",children:["Displaying ",(I=b,new Intl.NumberFormat("en-US").format(I))," sequences from INSDC, COG-UK and CNCB"]}),Object(j.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(j.jsx)(S.a,{className:"inline-block mr-2"}),"Search"]}),t.map((function(e,i){return Object(j.jsx)(M,{numResultsHere:m[i],searchColors:d,index:i,id:e.id,search_for_ids:e.search_for_ids,category:e.category,aa_gene:e.aa_gene,aa_pos:e.aa_pos,aa_final:e.aa_final,all_genes:l.all_genes,min_tips:e.min_tips,value:e.value,setThis:function(e){t[i]=Object(r.a)(Object(r.a)({},t[i]),e),n(Object(a.a)(t))},zoomToMe:function(){console.log(i),g({index:i})},removeItem:function(e){n(t.filter((function(t){return t.id!==e})))},enabled:e.enabled,current_accession:"genbanks"===e.category&&N?N:"epis"===e.category&&C?C:""},e.id)})),Object(j.jsxs)("button",{className:"block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",onClick:function(){return n([].concat(Object(a.a)(t),[{id:Math.random(),category:"name",value:"",enabled:!0,aa_final:"any",min_tips:1,aa_gene:"S",search_for_ids:""}]))},children:[Object(j.jsx)(z.a,{className:"inline-block mr-2"}),"Add a new search"]})]}),"other"===y&&Object(j.jsxs)("div",{className:"border-b border-gray-300 pb-3",children:[Object(j.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(j.jsx)("button",{onClick:function(){return _("colour")},className:"float-right mr-5 block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",children:Object(j.jsx)(f.a,{className:"inline-block mr-1 ml-1"})}),Object(j.jsx)(T.a,{className:"inline-block mr-2"}),"Other settings"," "]}),"Show mutation text"," ",Object(j.jsx)("input",{type:"checkbox",checked:p,onChange:function(e){console.log(p),h(!p)}}),Object(j.jsx)("div",{className:"text-sm text-gray-500 p-5",children:"Mutations are only shown at nodes with at least 10 descendant genomes"})]}),"colour"===y&&Object(j.jsxs)("div",{className:"border-b border-gray-300 pb-3",children:[Object(j.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(j.jsx)("button",{onClick:function(){return _("other")},className:"float-right mr-5 block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",children:Object(j.jsx)(T.a,{className:"inline-block mr-1 ml-1"})}),Object(j.jsx)(f.a,{className:"inline-block mr-2"}),"Colour by"," "]}),Object(j.jsxs)("select",{className:"border py-2 px-3 text-grey-darkest",value:c.variable,onChange:function(e){return s(Object(r.a)(Object(r.a)({},c),{},{variable:e.target.value}))},children:[Object(j.jsx)("option",{value:"lineage",children:"Lineage"}),Object(j.jsx)("option",{value:"country",children:"Country"}),Object(j.jsx)("option",{value:"aa",children:"Amino acid at site"}),Object(j.jsx)("option",{value:"none",children:"None"})]}),"aa"===c.variable&&Object(j.jsxs)("div",{className:" p-2 m-1 ml-0  text-gray-700",children:[" ",Object(j.jsx)("label",{className:"text-sm",children:"Gene"}),Object(j.jsx)("select",{className:"border py-1 px-1 text-grey-darkest text-sm h-7 w-20 m-3 my-1",value:c.gene,onChange:function(e){return s(Object(r.a)(Object(r.a)({},c),{},{gene:e.target.value}))},children:l.all_genes&&l.all_genes.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"text-sm",children:"Residue"})," ",Object(j.jsx)(k.DebounceInput,{debounceTimeout:300,type:"number",value:c.residue,onChange:function(e){return s(Object(r.a)(Object(r.a)({},c),{},{residue:e.target.value}))},className:"border py-1 px-1 text-grey-darkest text-sm h-7 w-16 m-3 my-1"})]}),Object(j.jsxs)("div",{className:"hidden",children:["Colour lines"," ",Object(j.jsx)("input",{type:"checkbox",value:c.colourLines,onChange:function(e){return s(Object(r.a)(Object(r.a)({},c),{},{colourLines:e.target.value}))}})]})]})]}),Object(j.jsx)("div",{children:u&&Object(j.jsxs)("div",{className:"text-gray-500 mr-3",children:[Object(j.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(j.jsx)(w.a,{className:"inline-block mr-2"}),"Node info"]}),Object(j.jsx)("div",{className:"font-bold",children:x.names[u]?x.names[u]:Object(j.jsx)(j.Fragment,{children:"Un-named internal node"})}),N&&Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"font-semibold",children:"Genbank:"})," ",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:"https://www.ncbi.nlm.nih.gov/nuccore/"+N,children:N})]}),Object(j.jsx)("div",{children:!1}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"font-semibold",children:"Date:"})," ",l.date_mapping[x.dates[u]]]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"font-semibold",children:"Lineage:"})," ",Object(j.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"https://outbreak.info/situation-reports?pango="+l.lineage_mapping[x.lineages[u]],children:l.lineage_mapping[x.lineages[u]]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"font-semibold",children:"Country:"})," ",l.country_mapping[x.countries[u]]]}),Object(j.jsx)("span",{className:"font-semibold",children:"Mutations from root:"}),Object(j.jsx)("div",{className:"text-xs mr-5 mb-3",children:P&&P.join(", ")}),!1]})})]})},P=n(215),A=n.n(P),L=n(233),E=n(234);E.parse.defaults.keepCase=!0;var W=[[255,0,0],[183,0,255],[255,213,0],[0,0,255],[0,255,255]];t.default=function(e){e.protoUrl;var t=e.uploadedData,n=e.query,c=e.setQuery,s=Object(o.useState)({index:null}),u=Object(i.a)(s,2),l=u[0],d=u[1],m=Object(o.useCallback)((function(e){var t=Object(r.a)({},n);delete t.zoomToSearch,c(t),d(e)}),[d,n,c]),b=Object(o.useState)(!1),g=Object(i.a)(b,2),f=g[0],p=g[1],h=Object(o.useMemo)((function(){return JSON.parse(n.search)}),[n.search]),x=Object(o.useCallback)((function(e){c(Object(r.a)(Object(r.a)({},n),{},{search:JSON.stringify(e)}))}),[c,n]),O=Object(o.useCallback)((function(e){c(Object(r.a)(Object(r.a)({},n),{},{colourBy:JSON.stringify(e)}))}),[c,n]),v=Object(o.useMemo)((function(){return JSON.parse(n.colourBy)}),[n.colourBy]),y=Object(o.useCallback)((function(e){O(e)}),[O]),_=Object(o.useState)({status:"not_attempted",data:{node_data:{ids:[]}}}),w=Object(i.a)(_,2),k=w[0],C=w[1],M=Object(o.useState)(null),S=Object(i.a)(M,2),z=S[0],T=S[1];Object(o.useEffect)((function(){"not_attempted"===k.status&&(console.log("starting dl"),C({status:"loading",progress:0,data:{node_data:{ids:[]}}}),E.load("./taxodium.proto").then((function(e){(function(e,t){return t?new Promise((function(e,n){e(t)})):(console.log("aaaa",e),A.a.get(e,{responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.floor(e.loaded/1e8*1*100);C({status:"loading",progress:t,data:{node_data:{ids:[]}}})}}).then((function(t){return e.endsWith(".gz")?L.a.ungzip(t.data):t.data})))})(n.protoUrl,t).then((function(t){console.log("buffer loaded");var n=e.lookupType("AllData"),r=n.decode(new Uint8Array(t)),o=n.toObject(r);if(o.node_data.metadata_singles){var c=o.node_data.metadata_singles.filter((function(e){return"Country"===e.metadata_name}))[0];o.country_mapping=c.mapping,o.node_data.countries=c.node_values;var s=o.node_data.metadata_singles.filter((function(e){return"Lineage"===e.metadata_name}))[0];o.lineage_mapping=s.mapping,o.node_data.lineages=s.node_values}o.node_data.ids=Object(a.a)(Array(o.node_data.x.length).keys());var u=new Set;o.mutation_mapping=o.mutation_mapping.map((function(e,t){var n={},a=e.split(":"),r=Object(i.a)(a,2),o=r[0],c=r[1];if(c){var s=c.split("_"),l=Object(i.a)(s,3),d=l[0],m=l[1],b=l[2];n.gene=o,n.position=m,n.orig_res=d,n.final_res=b,u.add(o)}return n.id=t,n})),o.all_genes=Array.from(u).sort(),C({status:"loaded",data:o})}))})))}),[k.status,n.protoUrl,t]);var P=Object(o.useMemo)((function(){return"loaded"===k.status?k.data:{node_data:{ids:[]}}}),[k]),R=Object(o.useMemo)((function(){return P.node_data.ids.filter((function(e){return""!==P.node_data.names[e]}))}),[P]),U=Object(o.useMemo)((function(){var e=h.map((function(e,t){var n,a=e.value.toLowerCase().trim();if("mutation"===e.category){var r=P.mutation_mapping?P.mutation_mapping.filter((function(t){return t.gene===e.aa_gene&&t.position===e.aa_pos&&t.final_res===e.aa_final|"any"===e.aa_final})).map((function(e){return e.id})):[];n=function(t){return P.node_data.mutations[t]&&P.node_data.mutations[t].mutation&&r.filter((function(e){return P.node_data.mutations[t].mutation.includes(e)})).length>0&&P.node_data.num_tips[t]>=e.min_tips&&P.node_data.parents[t]!==t}}if("name"===e.category&&(n=function(e){return P.node_data.names[e].toLowerCase().includes(a)}),"country"===e.category&&(n=function(e){return P.country_mapping[P.node_data.countries[e]].toLowerCase()===a}),"lineage"===e.category&&(n=function(e){return P.lineage_mapping[P.node_data.lineages[e]].toLowerCase()===a}),"epis"===e.category)if(e.search_for_ids){var i=e.search_for_ids.split("\n").map((function(e){return parseInt(e.trim().replace("EPI_ISL_",""))})).filter((function(e){return 0!==e}));n=function(e){return i.includes(P.node_data.epi_isl_numbers[e])}}else n=function(e){return!1};if("genbanks"===e.category)if(e.search_for_ids){var o=e.search_for_ids.split("\n").map((function(e){return e.trim()})).filter((function(e){return""!==e}));n=function(e){return o.includes(P.node_data.genbanks[e])}}else n=function(e){return!1};var c=("mutation"===e.category||"epis"===e.category||"genbanks"===e.category||null!==e.value&&""!==e.value)&&e.enabled;return{original_index:t,id:"main-search-"+t,enabled:c,data:""!==e.value|("mutation"===e.category||"epis"===e.category||"genbanks"===e.category)?P.node_data.ids.filter(n):[],opacity:.7,getRadius:7+2*t,filled:!1,stroked:!0,radiusUnits:"pixels",lineWidthUnits:"pixels",lineWidthScale:1,getPosition:function(e){return[P.node_data.x[e],P.node_data.y[e]]},getFillColor:function(e){return[0,0,0]},getLineColor:function(e){return W[t%W.length]}}})),t=e.map((function(e){return e.data.length}));return[e.filter((function(e){return e.enabled})),t,R.length]}),[P,h,R]),D=Object(i.a)(U,3),F=D[0],B=D[1],G=D[2];return Object(j.jsx)("div",{className:"main_content",children:Object(j.jsxs)("div",{className:"md:grid md:grid-cols-12 h-full",children:[Object(j.jsx)("div",{className:"md:col-span-8 h-3/6 md:h-full w-full",children:Object(j.jsx)(N,{showMutText:f,search_configs_initial:F,scatterIds:R,searchColors:W,selectedNode:z,setSelectedNode:T,searchItems:h,data:P,progress:k.progress,colourBy:v,zoomToSearch:n.zoomToSearch?parseInt(n.zoomToSearch):l})}),Object(j.jsx)("div",{className:"md:col-span-4 h-full bg-white  border-gray-600   pl-5 shadow-xl",children:Object(j.jsx)(I,{showMutText:f,setShowMutText:p,setZoomToSearch:m,totalSeqs:G,numSearchResults:B,searchColors:W,selectedNode:z,searchItems:h,data:P,setSearchItems:x,colourBy:v,setColourBy:y})})]})})}}}]);
//# sourceMappingURL=4.d116a4d4.chunk.js.map