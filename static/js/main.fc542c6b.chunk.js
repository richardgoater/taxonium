(this.webpackJsonptaxodium=this.webpackJsonptaxodium||[]).push([[0],{146:function(e,t){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},207:function(e,t){},253:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n.n(a),r=n(178),i=n.n(r),s=(n(203),n(53)),c=n(46),l=(n(204),n(115)),d=n(27),u=n(266),b=n(268),m=n(273),j=n(274),h=n(269),f=n(275),g=(n(205),n(5));var x=function(e){var t=e.isShown,n=e.progress;return t?Object(g.jsxs)("div",{className:"w-full h-full fixed bg-white text-center",children:[" ",Object(g.jsx)("div",{className:"loader z-50",children:"Loading..."}),Object(g.jsxs)("div",{className:"text-black",children:["Loading ",n,"%"]})]}):Object(g.jsx)(g.Fragment,{})},p=n(84);function O(e,t,n,a){var o=Object(d.a)(Object(d.a)({},e),{},{data:v(e.data,t,n,a),visible:!0,id:e.id+"_coarse"}),r=function(e){return Object(d.a)(Object(d.a)({},e),{},{id:e.id.replace("main","mini"),lineWidthScale:1,pickable:!1,getRadius:e.id.includes("search")?.5*e.getRadius:e.getRadius})}(o);return[o,Object(d.a)(Object(d.a)({},e),{},{visible:!0,id:e.id+"_fine"}),r]}function v(e,t,n,a){var o={};return e.filter((function(e){if(a&&Math.abs(t.x[e]-t.x[t.parents[e]])>1|Math.abs(t.y[e]-t.y[t.parents[e]])>.5)return!0;var r=Math.round(t.x[e]*n)/n,i=Math.round(t.y[e]*n)/n;return o[r]?!o[r][i]&&(o[r][i]=1,!0):(o[r]=Object(l.a)({},i,1),!0)}))}var y=[{contour:[[-100,-100],[-100,100],[100,100],[100,-100]],zipcode:94107,population:26599,area:6.11}];function w(e){if(void 0===e)return[200,200,200];if("unknown"===e)return[200,200,200];if("USA"===e)return[95,158,245];if("England"===e)return[214,58,15];if("Scotland"===e)return[255,130,82];if("Wales"===e)return[148,49,22];if("Northern Ireland"===e)return[140,42,15];if("France"===e)return[140,28,120];if("Germany"===e)return[106,140,28];if("India"===e)return[61,173,166];if("Denmark"===e)return[24,112,32];var t=0;if(0===(e=e.split("").reverse().join("")).length)return t;for(var n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t),t&=t;var a=[0,0,0];for(n=0;n<3;n++){var o=t>>8*n&255;a[n]=o}return a[0]+a[1]+a[2]<150||a[0]+a[1]+a[2]>500?w(e+"_"):a}function N(e){var t=w(e);return"rgb(".concat(t[0],",").concat(t[1],",").concat(t[2],")")}var C=function(e){return[1/Math.pow(2,e-5.6),0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},k=function(e){return 7/Math.pow(2,e.zoom-5.6)};var S=function(e){var t=e.data,n=e.colourBy,o=e.progress,r=e.setSelectedNode,i=e.scatterIds,l=e.search_configs_initial,v=e.zoomToSearch,S=Object(a.useState)({ids:[],top:0,bottom:0}),_=Object(c.a)(S,2),M=_[0],z=_[1],T=t.node_data,R=Object(a.useState)(),A=Object(c.a)(R,2),I=A[0],P=A[1],U=Object(a.useState)({zoom:4.7,target:[6,13]}),E=Object(c.a)(U,2),L=E[0],B=E[1],D=Object(a.useRef)(null),F=Object(a.useCallback)((function(e){var t=e.viewId,n=e.viewState;e.oldViewState;if("minimap"!==t&&(n.minimap={zoom:3,target:[5,13]},n.target[0]=k(n),D.current.viewports.length)){var a=D.current.viewports[0],o=a.unproject([0,0,0]),r=a.unproject([a.width,a.height,0]);r[0]=r[0]*Math.pow(2,n.zoom-6),o[0]=o[0]*Math.pow(2,n.zoom-6),n=Object(d.a)(Object(d.a)({},n),{},{nw:o,se:r,needs_update:!1}),o[0]=-500,r[0]=500,B(n)}}),[D]),q=Object(a.useState)(!1),W=Object(c.a)(q,2),G=W[0],V=W[1],H=Object(a.useCallback)((function(e){if(0===e.buttons&&"onPointerMove"===e._reactName)return!1;var t=D.current.pickObject({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY,radius:1});if("onPointerDown"===e._reactName&&(t&&"minimap"===t.viewport.id?V(!0):V(!1)),t&&"main"===t.viewport.id&&"onClick"===e._reactName&&r(t.object),t||"onClick"!==e._reactName||r(null),t&&"minimap"===t.viewport.id&&G){var n=Object(d.a)(Object(d.a)({},L),{},{target:[k(L),t.coordinate[1]],needs_update:!0});B(n)}}),[L,G,r]),K=Object(a.useMemo)((function(){return new b.a({id:"mini-poly-layer",data:y,pickable:!0,stroked:!0,opacity:.5,filled:!0,wireframe:!0,getPolygon:function(e){return e.contour},getFillColor:function(e){return[240,240,240]},getLineColor:[80,80,80],getLineWidth:1,lineWidthUnits:"pixels"})}),[]),Y=Object(a.useMemo)((function(){return{data:i.filter((function(){return!0})),visible:!0,opacity:.6,getRadius:3,radiusUnits:"pixels",id:"main-scatter",pickable:!0,getLineColor:[100,100,100],lineWidthUnits:"pixels",lineWidthScale:1,onHover:function(e){return P(e)},getPosition:function(e){return[T.x[e],T.y[e]]},getFillColor:function(e){return"lineage"===n?w(t.lineage_mapping[T.lineages[e]]):"country"===n?w(t.country_mapping[T.countries[e]]):[200,200,200]}}}),[i,T,t,n]),Z=Object(a.useMemo)((function(){return O(Y,T,100)}),[Y,T]),J=Object(a.useMemo)((function(){return Z.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:C(L.zoom),stroked:e.id.includes("mini")?void 0:L.zoom>15,radiusMaxPixels:e.id.includes("mini")?2:L.zoom>15?L.zoom/5:3})}))}),[Z,L.zoom]),X=Object(a.useMemo)((function(){return J.map((function(e){return new m.a(e)}))}),[J]),Q=Object(a.useMemo)((function(){var e;return(e=[]).concat.apply(e,Object(s.a)(l.map((function(e){return O(e,T,100)}))))}),[l,T]),$=Object(a.useMemo)((function(){return Q.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:C(L.zoom)})}))}),[Q,L.zoom]),ee=Object(a.useMemo)((function(){return $.map((function(e){return new m.a(e)}))}),[$]),te=Object(a.useMemo)((function(){return{id:"main-line",data:T.ids,pickable:!1,getWidth:1,getTargetPosition:function(e){return[T.x[T.parents[e]],T.y[e]]},getSourcePosition:function(e){return[T.x[e],T.y[e]]},getColor:[150,150,150]}}),[T]),ne=Object(a.useMemo)((function(){return{id:"main-line-2",data:T.ids,pickable:!1,getWidth:1,getTargetPosition:function(e){return[T.x[T.parents[e]],T.y[T.parents[e]]]},getSourcePosition:function(e){return[T.x[T.parents[e]],T.y[e]]},getColor:[150,150,150]}}),[T]),ae=Object(a.useMemo)((function(){return[].concat.apply([],[te,ne].map((function(e){return O(e,T,100,!0)})))}),[te,ne,T]),oe=Object(a.useMemo)((function(){return ae.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:C(L.zoom)})}))}),[ae,L.zoom]),re=Object(a.useMemo)((function(){return oe.map((function(e){return new j.a(e)}))}),[oe]);if(L.zoom>17&&!0!==L.needs_update)if(L.nw[1]>M.top&L.se[1]<M.bottom);else{var ie=L.nw[1],se=L.se[1],ce=se-ie,le=ie-4*ce,de=se+4*ce,ue=i.filter((function(e){return T.y[e]>le&T.y[e]<de}));z({top:le,bottom:de,ids:ue})}var be=Object(a.useMemo)((function(){return{id:"main-text-layer",data:M.ids,getPosition:function(e){return[T.x[e]+.3,T.y[e]]},getText:function(e){return T.names[e]},getColor:[180,180,180],getAngle:0,billboard:!0,getTextAnchor:"start",getAlignmentBaseline:"center"}}),[T,M]),me=Object(a.useMemo)((function(){return[new h.a(Object(d.a)(Object(d.a)({},be),{},{visible:L.zoom>18.5,getSize:L.zoom>19?12:9.5,modelMatrix:C(L.zoom)}))]}),[be,L]),je=Object(a.useMemo)((function(){return new b.a({id:"mini-pos",data:[L],opacity:.1,radiusMinPixels:4,radiusMaxPixels:4,getRadius:4,getLineWidth:.1,getPolygon:function(e){return void 0!==e.nw?[[e.nw[0],e.nw[1]],[e.se[0],e.nw[1]],[e.se[0],e.se[1]],[e.nw[0],e.se[1]]]:[]},getFillColor:[255,255,255]})}),[L]),he=Object(a.useMemo)((function(){return[K].concat(Object(s.a)(me),Object(s.a)(re),Object(s.a)(X),Object(s.a)(ee),[je])}),[K,me,X,re,je,ee]);window.deck=D;var fe=Object(a.useMemo)((function(){return[new f.a({id:"main",controller:!0}),new f.a({id:"minimap",x:"79%",y:"1%",width:"20%",height:"35%",controller:!0})]}),[]),ge=Object(a.useMemo)((function(){if(I&&I.object){var e=t.lineage_mapping[T.lineages[I.object]],n=t.country_mapping[T.countries[I.object]],a=t.date_mapping[T.dates[I.object]];return Object(g.jsxs)("div",{className:"bg-gray-100 p-3 opacity-90 text-sm",style:{position:"absolute",zIndex:1,pointerEvents:"none",left:I.x,top:I.y},children:[Object(g.jsx)("h2",{className:"font-bold",children:T.names[I.object]}),Object(g.jsx)("div",{style:{color:N(e)},children:e}),Object(g.jsxs)("div",{children:[" ",n]}),a,Object(g.jsx)("div",{className:"text-xs",children:T.mutations[I.object]&&T.mutations[I.object].mutation&&T.mutations[I.object].mutation.map((function(e){return t.mutation_mapping[e]})).join(", ")})]})}}),[t,T,I]),xe=Object(a.useMemo)((function(){return 0===T.ids.length}),[T]),pe=Object(a.useCallback)((function(e){var t=Object(d.a)(Object(d.a)({},L),{},{zoom:L.zoom+e,needs_update:!0}),n=Object(d.a)(Object(d.a)({},t),{},{target:[k(t),t.target[1]]});B(n)}),[L]);return Object(a.useEffect)((function(){if(null!==v.index){console.log(v);var e=Object(d.a)(Object(d.a)({},L),{},{zoom:19,needs_update:!0}),t=Object(d.a)(Object(d.a)({},e),{},{target:[k(e),T.y[l.filter((function(e){return e.original_index===v.index}))[0].data[0]]]});B(t)}}),[v]),Object(g.jsxs)("div",{className:"w-full h-full relative",onClick:H,onPointerMove:H,onPointerDown:H,children:[" ",Object(g.jsxs)(u.a,{onAfterRender:function(){(void 0===L.nw||L.needs_update)&&F({viewState:L})},ref:D,views:fe,viewState:L,onViewStateChange:F,layerFilter:Object(a.useCallback)((function(e){var t=e.layer,n=e.viewport;return(t.id.startsWith("main")&&"main"===n.id||t.id.startsWith("mini")&&"minimap"===n.id&&!0!==window.hidemini)&(t.id.includes("mini")|L.zoom<8&!t.id.includes("fine")|L.zoom>8&!t.id.includes("coarse"))}),[L.zoom]),controller:!0,layers:he,children:[ge,Object(g.jsxs)("div",{style:{position:"absolute",right:"0.2em",bottom:"0.2em"},children:[Object(g.jsx)("button",{className:" w-12 h-10 bg-gray-100  p-1 rounded border-gray-300 text-gray-700 opacity-60 hover:opacity-100",onClick:function(){pe(.6)},children:Object(g.jsx)(p.b,{className:"mx-auto  w-5 h-5 "})}),Object(g.jsx)("button",{className:" w-12 h-10 bg-gray-100 ml-1 p-1 rounded border-gray-300 text-gray-700  opacity-60  hover:opacity-100",onClick:function(){pe(-.6)},children:Object(g.jsx)(p.c,{className:"mx-auto w-5 h-5 "})})]})]}),xe&&Object(g.jsx)(x,{isShown:!0,progress:o})]})},_=n(96),M=n(183);var z=function(e){var t,n=e.id,a=e.category,o=e.enabled,r=e.value,i=e.setThis,s=e.removeItem,c=e.index,l=e.searchColors,d=e.numResultsHere,u=e.zoomToMe,b=l[c%l.length];return Object(g.jsxs)("div",{className:"border-gray-100 border-b mb-3 pb-3",children:[Object(g.jsx)("input",{name:"isGoing",type:"checkbox",style:{outline:o&&r.length>0?"1px solid rgb(".concat(b[0],",").concat(b[1],",").concat(b[2],")"):"0px",outlineOffset:"2px"},className:"w-3 h-3 m-3",checked:o,onChange:function(e){return i({enabled:!o})}}),Object(g.jsxs)("select",{className:" w-36 border py-2 px-1 text-grey-darkest text-sm h-10",value:a,onChange:function(e){return i({category:e.target.value})},children:[Object(g.jsx)("option",{value:"name",children:"Sequence name"}),Object(g.jsx)("option",{value:"lineage",children:"Lineage"}),Object(g.jsx)("option",{value:"country",children:"Country"}),Object(g.jsx)("option",{value:"mutation",children:"AA mutation"})]}),"\xa0",Object(g.jsx)(M.DebounceInput,{className:" w-32 border py-2 px-3 text-grey-darkest h-10",value:r,onChange:function(e){return i({value:e.target.value})},debounceTimeout:300}),Object(g.jsx)("button",{className:" bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border  text-gray-700 ml-2 h-8",onClick:function(){return s(n)},children:Object(g.jsx)(_.c,{className:"inline-block "})}),Object(g.jsx)("div",{className:"text-sm text-gray-600 px-3",children:{name:"Enter a sequence name like QEUH-13ADA01",lineage:"Enter a PANGO lineage like B.1.1.7. Note that sub-lineages will not be found by this method.",country:"Enter a country like 'India' ",mutation:"Enter an amino acid mutation like S:E484K"}[a]}),Object(g.jsxs)("div",{className:"text-sm text-gray-900 px-3",children:[" ",r.length>0&&Object(g.jsxs)(g.Fragment,{children:[" ",(t=d,new Intl.NumberFormat("en-US").format(t))," result",1!==d&&Object(g.jsx)(g.Fragment,{children:"s"})]}),1===d&&o&&Object(g.jsxs)(g.Fragment,{children:[" ",Object(g.jsxs)("button",{onClick:u,className:"inline-block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-1 text-gray-700",children:[Object(g.jsx)(p.b,{className:"inline-block mr-1"}),"locate"]})]})]})]})},T=n(184),R=n(185);var A=function(e){var t,n=e.searchItems,a=e.setSearchItems,o=e.colourBy,r=e.setColourBy,i=e.selectedNode,c=e.data,l=e.searchColors,u=e.numSearchResults,b=e.totalSeqs,m=e.setZoomToSearch,j=c.node_data;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:" border-t md:border-t-0 border-b border-gray-300",children:[Object(g.jsxs)("div",{className:"mt-3 mb-3 text-gray-500 text-sm",children:["Displaying ",(t=b,new Intl.NumberFormat("en-US").format(t))," sequences from INSDC, COG-UK and CNCB"]}),Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(T.a,{className:"inline-block mr-2"}),"Search"]}),n.map((function(e,t){return Object(g.jsx)(z,{numResultsHere:u[t],searchColors:l,index:t,id:e.id,category:e.category,value:e.value,setThis:function(e){n[t]=Object(d.a)(Object(d.a)({},n[t]),e),a(Object(s.a)(n))},zoomToMe:function(){console.log(t),m({index:t})},removeItem:function(e){a(n.filter((function(t){return t.id!==e})))},enabled:e.enabled},e.id)})),Object(g.jsxs)("button",{className:"block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",onClick:function(){return a([].concat(Object(s.a)(n),[{id:Math.random(),category:"name",value:"",enabled:!0}]))},children:[Object(g.jsx)(R.a,{className:"inline-block mr-2"}),"Add a new search"]})]}),Object(g.jsxs)("div",{className:"border-b border-gray-300 pb-3",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(p.a,{className:"inline-block mr-2"}),"Colour by"]}),Object(g.jsxs)("select",{className:"border py-2 px-3 text-grey-darkest",value:o,onChange:function(e){return r(e.target.value)},children:[Object(g.jsx)("option",{value:"lineage",children:"Lineage"}),Object(g.jsx)("option",{value:"country",children:"Country"}),Object(g.jsx)("option",{value:"none",children:"None"})]})]}),Object(g.jsx)("div",{children:i&&Object(g.jsxs)("div",{className:"text-gray-500 mr-3",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(_.a,{className:"inline-block mr-2"}),"Node info"]}),Object(g.jsx)("div",{className:"font-bold",children:j.names[i]}),j.genbanks[i]&&"unknown"!==j.genbanks[i]&&"nan"!==j.genbanks[i]&&Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Genbank:"})," ",Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:"https://www.ncbi.nlm.nih.gov/nuccore/"+j.genbanks[i],children:j.genbanks[i]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Date:"})," ",c.date_mapping[j.dates[i]]]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Lineage:"})," ",Object(g.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"https://outbreak.info/situation-reports?pango="+c.lineage_mapping[j.lineages[i]],children:c.lineage_mapping[j.lineages[i]]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Country:"})," ",c.country_mapping[j.countries[i]]]}),Object(g.jsx)("span",{className:"font-semibold",children:"Mutations:"}),Object(g.jsx)("div",{className:"text-xs mr-5",children:j.mutations[i].mutation&&j.mutations[i].mutation.map((function(e){return c.mutation_mapping[e]})).join(", ")})]})})]})},I=n(186),P=n.n(I);var U=function(e){var t=e.enabled,n=e.setEnabled;return Object(g.jsxs)("div",{className:"w-full ".concat(t?"":"hidden"),children:[Object(g.jsx)("div",{onClick:function(){return n(!1)},className:"fixed w-full h-full bg-black opacity-80 z-40"}),Object(g.jsxs)("div",{onClick:function(){return n(!1)},className:"fixed w-full h-full  opacity-100 z-40",children:[Object(g.jsxs)("div",{className:" relative mx-auto mt-5 p-5 bg-white shadow-md z-100 w-4/5 overflow-y-auto opacity-100 ",style:{height:"90vh"},children:[Object(g.jsx)("button",{className:"absolute top-5 right-5 text-xl font-bold",onClick:function(){return n(!1)},children:"X"}),Object(g.jsx)("h1",{className:"font-bold mb-3 text-xl",children:"About Cov2Tree"}),"This website allows you to explore a phylogenetic tree with more than a million SARS-Cov-2 sequences, sequenced by researchers around the world. The interface was made by"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://theo.io/",children:"Theo Sanderson"})," ","using a custom-developed open-source library called"," ",Object(g.jsxs)("a",{href:"http://github.com/theosanderson/taxodium",className:"text-blue-700 underline",children:[" ","Taxodium"]}),".",Object(g.jsx)("h1",{className:"font-bold mb-3 text-xl mt-6",children:"The sequences"}),Object(g.jsxs)("p",{children:["This tree displays sequences generated by scientists all over the world. The sequences are sourced from GenBank (i.e. the INSDC databases), the China National Center for Bioinformation, and from COG-UK. They are collated"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/UShER_SARS-CoV-2//",children:"here"})," ","by Angie Hinrichs and others at UCSC."]}),Object(g.jsx)("p",{children:"This website would be empty but for the hard work of all these researchers, and their openness in submitting their work to public databases, and we gratefully acknowledge this."}),Object(g.jsx)("h1",{className:"font-bold mb-3 text-xl mt-6",children:"The tree"}),Object(g.jsxs)("p",{children:["The tree shown here is produced by the UCSC team, and made available"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/UShER_SARS-CoV-2//",children:"here"}),". It is derived from releases of Rob Lanfear's"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://github.com/roblanf/sarscov2phylo",children:"sarscov2phylo"}),", pruned to include only public sequences aggregated from GenBank, COG-UK, and the China National Center for Bioinformation. The tree has been re-rooted to Wuhan/Hu-1 (GenBank MN908947.3, RefSeq NC_045512.2), and nodes with no associated mutations have been collapsed. Sequences released after the final sarscov2phylo release (Nov. 13, 2020) have been added to the tree using"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://github.com/yatisht/usher",children:"UShER"}),", developed by Yatish Turakhia. UShER development and tree inference was done in Russ Corbett-Detig and David Haussler's groups at the UCSC Genomics Institute. It is described here only for completeness. UCSC provide metadata with the sequences, including lineages called by"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://www.pango.network/",children:"Pangolin"}),"."]}),Object(g.jsx)("h1",{className:"font-bold mb-3 text-xl mt-4",children:"Citations"}),Object(g.jsxs)("div",{className:"text-sm",children:[Object(g.jsx)("p",{children:"Lanfear, Rob (2020). A global phylogeny of SARS-CoV-2 sequences from GISAID. Zenodo DOI: 10.5281/zenodo.3958883"}),Object(g.jsx)("p",{children:"Turakhia et al. (2021). Ultrafast Sample Placement on Existing Trees (UShER) Empowers Real-Time Phylogenetics for the SARS-CoV-2 Pandemic."}),Object(g.jsx)("p",{children:"Rambaut et al. (2020). A dynamic nomenclature proposal for SARS-CoV-2 lineages to assist genomic epidemiology."})]}),Object(g.jsx)("h1",{className:"font-bold mb-3 text-xl mt-4",children:"Related tools"}),Object(g.jsx)("div",{className:"text-sm",children:Object(g.jsxs)("p",{children:["You can also explore large phylogenies using"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://pando.tools",children:"Pando"}),","," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://microreact.org/",children:"Microreact"}),", and sampled phylogenies on"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://nextstrain.org/",children:"NextStrain"}),"."]})})]})," "]})]})},E=n(191),L=n(188),B=n(233);B.parse.defaults.keepCase=!0;var D=[[255,0,0],[183,0,255],[255,213,0],[0,0,255],[0,255,255]];var F=function(){var e=Object(a.useState)({index:null}),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)([{id:.123,category:"lineage",value:"",enabled:!0}]),i=Object(c.a)(r,2),l=i[0],d=i[1],u=Object(a.useCallback)((function(e){d(e)}),[]),b=Object(a.useState)("lineage"),m=Object(c.a)(b,2),j=m[0],h=m[1],f=Object(a.useCallback)((function(e){h(e)}),[]),x=Object(a.useState)({status:"not_attempted",data:{node_data:{ids:[]}}}),p=Object(c.a)(x,2),O=p[0],v=p[1],y=Object(a.useState)(null),w=Object(c.a)(y,2),N=w[0],C=w[1],k=Object(a.useState)(!1),M=Object(c.a)(k,2),z=M[0],T=M[1];Object(a.useEffect)((function(){"not_attempted"===O.status&&(console.log("starting dl"),v({status:"loading",progress:0,data:{node_data:{ids:[]}}}),B.load("./tree.proto").then((function(e){P.a.get("/nodelist.pb",{responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.floor(e.loaded/1e8*1*100);v({status:"loading",progress:t,data:{node_data:{ids:[]}}})}}).then((function(e){return e.data})).then((function(t){console.log("buffer loaded");var n=e.lookupType("AllData");window.buffer=t,window.NodeList=n;var a=n.decode(new Uint8Array(t)),o=n.toObject(a);o.node_data.ids=Object(s.a)(Array(o.node_data.x.length).keys()),v({status:"loaded",data:o})}))})))}),[O.status]);var R=Object(a.useMemo)((function(){return"loaded"===O.status?O.data:{node_data:{ids:[]}}}),[O]),I=Object(a.useMemo)((function(){return R.node_data.ids.filter((function(e){return""!==R.node_data.names[e]}))}),[R]),F=Object(a.useMemo)((function(){var e=l.map((function(e,t){var n,a=e.value.toLowerCase().trim();if("mutation"===e.category){var o=R.mutation_mapping.indexOf(e.value);n=function(e){return R.node_data.mutations[e].mutation&&R.node_data.mutations[e].mutation.includes(o)}}"name"===e.category&&(n=function(e){return R.node_data.names[e].toLowerCase().includes(a)}),"country"===e.category&&(n=function(e){return R.country_mapping[R.node_data.countries[e]].toLowerCase()===a}),"lineage"===e.category&&(n=function(e){return R.lineage_mapping[R.node_data.lineages[e]].toLowerCase()===a});var r=null!==e.value&&""!==e.value&&e.enabled;return{original_index:t,id:"main-search-"+t,enabled:r,data:""!==e.value?I.filter(n):[],opacity:.7,getRadius:7+2*t,filled:!1,stroked:!0,radiusUnits:"pixels",lineWidthUnits:"pixels",lineWidthScale:1,getPosition:function(e){return[R.node_data.x[e],R.node_data.y[e]]},getFillColor:function(e){return[0,0,0]},getLineColor:function(e){return D[t%D.length]}}})),t=e.map((function(e){return e.data.length}));return[e.filter((function(e){return e.enabled})),t,I.length]}),[R,l,I]),q=Object(c.a)(F,3),W=q[0],G=q[1],V=q[2];return Object(g.jsxs)(E.a,{children:[Object(g.jsx)(U,{enabled:z,setEnabled:T}),Object(g.jsxs)("div",{className:"h-screen w-screen",children:[Object(g.jsx)("div",{className:"from-gray-500 to-gray-600 bg-gradient-to-bl h-15 shadow-md z-20",children:Object(g.jsxs)("div",{className:"flex justify-between",children:[Object(g.jsxs)("h1",{className:"text-xl p-4  pb-5 text-white ",children:[Object(g.jsx)(L.a,{className:"inline-block h-8 w-8 pr-2 "}),Object(g.jsx)("span",{className:"font-bold",children:"Cov2Tree"}),":"," ",Object(g.jsxs)("span",{className:"font-light",children:["interactive SARS-CoV-2 phylogeny"," "]})]}),Object(g.jsx)("div",{className:"inline-block p-4",children:Object(g.jsxs)("button",{onClick:function(){return T(!0)},className:"mr-10 text-white font-bold hover:underline",children:[Object(g.jsx)(_.b,{className:"inline-block h-7 w-8"})," About / Acknowledgements"]})})]})}),Object(g.jsx)("div",{className:"main_content",children:Object(g.jsxs)("div",{className:"md:grid md:grid-cols-12 h-full",children:[Object(g.jsx)("div",{className:"md:col-span-8 h-3/6 md:h-full w-full",children:Object(g.jsx)(S,{search_configs_initial:W,scatterIds:I,searchColors:D,setSelectedNode:C,searchItems:l,data:R,progress:O.progress,colourBy:j,zoomToSearch:n})}),Object(g.jsx)("div",{className:"md:col-span-4 h-full bg-white  border-gray-600   pl-5 shadow-xl",children:Object(g.jsx)(A,{setZoomToSearch:o,totalSeqs:V,numSearchResults:G,searchColors:D,selectedNode:N,searchItems:l,data:R,setSearchItems:u,colourBy:j,setColourBy:f})})]})})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),q()}},[[253,1,2]]]);
//# sourceMappingURL=main.fc542c6b.chunk.js.map