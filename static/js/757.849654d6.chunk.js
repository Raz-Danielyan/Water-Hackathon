"use strict";(self.webpackChunkratebuzz=self.webpackChunkratebuzz||[]).push([[642,692,757,961],{92757:(e,a,t)=>{t.r(a),t.d(a,{default:()=>_});var r=t(89379),n=t(65043),i=t(9896),l=t(99419),s=t(12023),o=t(34867),d=t(80228),c=t.n(d),u=(t(66433),t(14961)),h=t(35692),m=t(10435),v=t(27867),p=t(67051),j=t(95808),x=t(84737),g=t(75748),y=t(87734),b=t(52185),f=t(6026),A=t(86150),k=t(21327),W=t(84139),D=t(50108),w=t(60163),O=t(4240),M=t(86178),C=t.n(M),P=t(8919),R=t(70579);const{Title:S}=m.A,Q=e=>e.reduce(((e,a)=>e+a.totalQuantity),0),z=e=>[...new Set(e.map((e=>e.waterSource)))],Y=(e,a,t)=>e.filter((e=>(null===e||void 0===e?void 0:e[a])===t)).length,N={"\u0531\u0580\u0561\u0563\u0561\u056e\u0578\u057f\u0576":"Aragatsotn","\u0531\u0580\u0561\u0580\u0561\u057f":"Ararat","\u0531\u0580\u0574\u0561\u057e\u056b\u0580":"Armavir","\u0533\u0565\u0572\u0561\u0580\u0584\u0578\u0582\u0576\u056b\u0584":"Gegharkunik","\u0535\u0580\u0587\u0561\u0576":"Erevan","\u053c\u0578\u057c\u056b":"Lori","\u053f\u0578\u057f\u0561\u0575\u0584":"Kotayk","\u0547\u056b\u0580\u0561\u056f":"Shirak","\u054d\u0575\u0578\u0582\u0576\u056b\u0584":"Syunik","\u054e\u0561\u0575\u0578\u0581 \u0571\u0578\u0580":"Vayots Dzor","\u054f\u0561\u057e\u0578\u0582\u0577":"Tavush"},B=e=>{var a,t,r,n;let{payload:i,continuem:l=!0}=e;return(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"ant-popover-arrow"}),(0,R.jsxs)("div",{children:[(0,R.jsx)("b",{children:null===i||void 0===i||null===(a=i[0])||void 0===a||null===(t=a.payload)||void 0===t?void 0:t.name}),(0,R.jsx)("span",{children:(0,R.jsxs)("p",{className:"desc",children:[(0,R.jsx)("small",{children:null===i||void 0===i||null===(r=i[0])||void 0===r||null===(n=r.payload)||void 0===n?void 0:n.value}),l&&" \u0570\u0561\u0566. \u056d\u0578\u0580.\u0574/\u057f\u0561\u0580\u056b`"]})})]})]})},T=n.memo((e=>{let{data:a,marzData:t}=e;const r=(0,i.ko)(),l=n.useRef([]);return(0,n.useEffect)((()=>(a.features.forEach((e=>{const a=(0,p.centroid)(e),[n,i]=a.geometry.coordinates,s=c().marker([i,n],{icon:c().divIcon({className:"province-label",html:'<div style="font-size:12px; color:blue; white-space: nowrap;">'.concat(e.properties.name,"</div>\n        ").concat(null!==t&&void 0!==t&&t[e.properties.name]?'<div style="font-size:12px; color:red; white-space: nowrap;"> '.concat(Math.round(null===t||void 0===t?void 0:t[e.properties.name].dataWaterDischargeQuanitity),' \u0570\u0561\u0566. \u056d\u0578\u0580.\u0574/\u057f\u0561\u0580\u056b</div>\n              <div style="font-size:12px; color:green; white-space: nowrap;"> ').concat(Math.round(null===t||void 0===t?void 0:t[e.properties.name].dataWaterintakeQuanitity),' \u0570\u0561\u0566. \u056d\u0578\u0580.\u0574/\u057f\u0561\u0580\u056b</div>\n               <div style="font-size:12px; color:black; white-space: nowrap;"> ').concat(Math.round(null===t||void 0===t?void 0:t[e.properties.name].dataResourcesWaterSourcesLength),"</div>\n              "):"")})}).addTo(r);l.current.push(s)})),()=>{l.current.forEach((e=>r.removeLayer(e))),l.current=[]})),[a,t,r]),null})),_=()=>{const[e,,a]=(0,h.default)(u.getMarz),[,,t]=(0,h.default)(u.getPermits),[,,i]=(0,h.default)(u.getIntakeDischargePoints),[,,d]=(0,h.default)(u.getDataWaterintake),[,,m]=(0,h.default)(u.getDataWaterDischarge),[p,,M]=(0,h.default)(u.getBmo),[_,K]=(0,n.useState)({}),[I,E]=(0,n.useState)({}),[F,L]=(0,n.useState)({}),[J,U]=(0,n.useState)("2024"),[H,V]=(0,n.useState)([2022,2023,2024]),[G,q]=(0,n.useState)({}),[X,Z]=(0,n.useState)(!1),[$,ee]=(0,n.useState)(!1);(0,n.useEffect)((()=>(M(),a(),()=>{const e=c().DomUtil.get("map");e&&(e._leaflet_id=null)})),[]),(0,n.useEffect)((()=>{if(p.length){Z(!0);const e={permits:!1,dataWaterintake:!1,dataWaterDischarge:!1};Promise.all(H.reduce(((e,a)=>[...e,...p.reduce(((e,t)=>[...e,(0,u.getPermits)({bmoid:t.internal_id,year:a})]),[])]),[])).then((a=>{const t=a.map((e=>null===e||void 0===e?void 0:e.data)).flat().reduce(((e,a)=>{var t;return(0,r.A)((0,r.A)({},e),{},{[a.yearA]:(0,r.A)((0,r.A)({},null!==e&&void 0!==e&&e[a.yearA]?e[a.yearA]:{}),{},{[a.basinName]:null!==e&&void 0!==e&&null!==(t=e[a.yearA])&&void 0!==t&&t[a.basinName]?e[a.yearA][a.basinName]+1:1})})}),{});q((e=>(0,r.A)((0,r.A)({},e),Object.entries(t).reduce(((a,t)=>{let[n,i]=t;return(0,r.A)((0,r.A)({},a),{},{[n]:(0,r.A)((0,r.A)({},null!==e&&void 0!==e&&e[n]?e[n]:{}),{},{permitsQuantity:i})})}),{})))),e.permits=!0,Object.values(e).every((e=>!0===e))&&Z(!1)})).catch((e=>{console.error(e)})),Promise.all(H.reduce(((e,a)=>[...e,...p.reduce(((e,t)=>[...e,(0,u.getDataWaterintake)({bmoid:t.internal_id,year:a})]),[])]),[])).then((a=>{const t=a.map((e=>null===e||void 0===e?void 0:e.data)).flat().reduce(((e,a)=>{var t;return(0,r.A)((0,r.A)({},e),{},{[a.yearA]:(0,r.A)((0,r.A)({},null!==e&&void 0!==e&&e[a.yearA]?e[a.yearA]:{}),{},{[a.basinName]:(null!==e&&void 0!==e&&null!==(t=e[a.yearA])&&void 0!==t&&t[a.basinName]?e[a.yearA][a.basinName]:0)+a.totalQuantity})})}),{});q((e=>(0,r.A)((0,r.A)({},e),Object.entries(t).reduce(((a,t)=>{let[n,i]=t;return(0,r.A)((0,r.A)({},a),{},{[n]:(0,r.A)((0,r.A)({},null!==e&&void 0!==e&&e[n]?e[n]:{}),{},{dataWaterintakeQuanitity:i})})}),{})))),e.dataWaterintake=!0,Object.values(e).every((e=>!0===e))&&Z(!1)})).catch((e=>{console.error(e)})),Promise.all(H.reduce(((e,a)=>[...e,...p.reduce(((e,t)=>[...e,(0,u.getDataWaterDischarge)({bmoid:t.internal_id,year:a})]),[])]),[])).then((a=>{const t=a.map((e=>null===e||void 0===e?void 0:e.data)).flat().reduce(((e,a)=>{var t;return(0,r.A)((0,r.A)({},e),{},{[a.yearA]:(0,r.A)((0,r.A)({},null!==e&&void 0!==e&&e[a.yearA]?e[a.yearA]:{}),{},{[a.basinName]:(null!==e&&void 0!==e&&null!==(t=e[a.yearA])&&void 0!==t&&t[a.basinName]?e[a.yearA][a.basinName]:0)+a.totalQuantity})})}),{});q((e=>(0,r.A)((0,r.A)({},e),Object.entries(t).reduce(((a,t)=>{let[n,i]=t;return(0,r.A)((0,r.A)({},a),{},{[n]:(0,r.A)((0,r.A)({},null!==e&&void 0!==e&&e[n]?e[n]:{}),{},{dataDataWaterDischarge:i})})}),{})))),e.dataWaterDischarge=!0,Object.values(e).every((e=>!0===e))&&Z(!1)})).catch((e=>{console.error(e)}))}}),[p,H]),(0,n.useEffect)((()=>{if(null!==p&&void 0!==p&&p.length)for(let e=0;e<p.length;e+=1){ee(!0);const a={permitsCall:!1,intakeDischargePointsCall:!1,dataWaterintakeCall:!1,dataWaterDischargeCall:!1};t({bmoid:p[e].internal_id,year:J},(t=>{K((a=>(0,r.A)((0,r.A)({},a),{},{[p[e].name]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[p[e].name])||{}),{},{permits:t})}))),a.permitsCall=!0,Object.values(a).every((e=>!0===e))?ee(!1):ee(!0)})),i({bmoid:p[e].internal_id},(t=>{K((a=>(0,r.A)((0,r.A)({},a),{},{[p[e].name]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[p[e].name])||{}),{},{intakeDischargePoints:t})}))),a.intakeDischargePointsCall=!0,Object.values(a).every((e=>!0===e))?ee(!1):ee(!0)})),d({bmoid:p[e].internal_id,year:J},(t=>{K((a=>(0,r.A)((0,r.A)({},a),{},{[p[e].name]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[p[e].name])||{}),{},{dataWaterintake:t})}))),a.dataWaterintakeCall=!0,Object.values(a).every((e=>!0===e))?ee(!1):ee(!0)})),m({bmoid:p[e].internal_id,year:J},(t=>{K((a=>(0,r.A)((0,r.A)({},a),{},{[p[e].name]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[p[e].name])||{}),{},{dataWaterDischarge:t})}))),a.dataWaterDischargeCall=!0,Object.values(a).every((e=>!0===e))?ee(!1):ee(!0)}))}}),[p,J]),(0,n.useEffect)((()=>{const a=Object.values(_).map((e=>4===Object.keys(e).length)).every((e=>!0===e));if(Object.keys(_).length===p.length&&a&&p.length>0){E(Object.entries(_).reduce(((e,a)=>{let[t,n]=a;return(0,r.A)((0,r.A)({},e),{},{[t]:{dataWaterDischargeQuanitity:Q(n.dataWaterDischarge||[]),dataWaterintakeQuanitity:Q((null===n||void 0===n?void 0:n.dataWaterintake)||[]),dataResourcesWaterSources:z([...(null===n||void 0===n?void 0:n.dataWaterDischarge)||[],...(null===n||void 0===n?void 0:n.dataWaterintake)||[]]),dataResourcesWaterSourcesLength:z([...n.dataWaterDischarge||[],...n.dataWaterintake||[]]).length,TotalJrar:Y((null===n||void 0===n?void 0:n.intakeDischargePoints)||[],"typeOfWaterUse","\u054b\u0580\u0561\u057c"),TotalJrarHeracum:Y((null===n||void 0===n?void 0:n.intakeDischargePoints)||[],"typeOfWaterUse","\u054b\u0580\u0561\u0570\u0565\u057c\u0561\u0581\u0578\u0582\u0574"),totalPermists:((null===n||void 0===n?void 0:n.permits)||[]).length}})}),{}));const a=Object.values(_).reduce(((e,a)=>[...e,...null!==a&&void 0!==a&&a.dataWaterDischarge?a.dataWaterDischarge.map((e=>(0,r.A)((0,r.A)({},e),{},{dataWaterDischarge:!0}))):[],...null!==a&&void 0!==a&&a.dataWaterintake?a.dataWaterDischarge.map((e=>(0,r.A)((0,r.A)({},e),{},{dataWaterintake:!0}))):[]]),[]);let n={};for(let i=0;i<e.length;i+=1){var t;n=(0,r.A)((0,r.A)({},n),{},{[N[null===(t=e[i])||void 0===t?void 0:t.name]]:a.filter((a=>{var t;return(null===a||void 0===a?void 0:a.marz_Internal_ID)===(null===(t=e[i])||void 0===t?void 0:t.internal_id)}))})}L(Object.entries(n).reduce(((e,a)=>{let[t,n]=a;return(0,r.A)((0,r.A)({},e),{},{[t]:{dataWaterDischargeQuanitity:Q(n.filter((e=>null===e||void 0===e?void 0:e.dataWaterDischarge))),dataWaterintakeQuanitity:Q(n.filter((e=>null===e||void 0===e?void 0:e.dataWaterintake))),dataResourcesWaterSources:z(n),dataResourcesWaterSourcesLength:z(n).length}})}),{}))}}),[_]);const ae=(e,a)=>{const t="data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(e))),r=document.createElement("a");r.href=t,r.download="".concat(a,".json"),r.click()},te=e=>e&&(e.isBefore(C()("2000-01-01"))||e.isAfter(C()("2024-12-31")));return(0,R.jsx)("div",{children:(0,R.jsxs)(v.tK,{spinning:$,children:[(0,R.jsx)(S,{children:"Tim 2 Prestentetion of Data Reserch of cadastre API"}),(0,R.jsx)(j.DatePicker,{picker:"year",onChange:e=>{U(C()(e).format("YYYY")),K({}),E({}),L({})},defaultValue:C()(J,"YYYY"),width:"200px",mb:10,disabledDate:te}),(0,R.jsxs)(j.Row,{gutter:[15,32],children:[(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsx)(S,{level:3,children:"MAP presentation of cadastre Data"}),(0,R.jsxs)(j.Col,{span:24,border_radius:"32px",padding:"16px 32px",back_color:"rgb(229 229 220)",children:[(0,R.jsx)(S,{level:5,style:{color:"red"},children:"In Red text in The Map you'll see Total Water Discharge Quanitity per Marz"}),(0,R.jsx)(S,{level:5,style:{color:"green"},children:"In Grenn text in The Map you'll see Total Water Intake Quanitity per Marz"}),(0,R.jsx)(S,{level:5,style:{color:"black"},children:"In Black text in The Map you'll see Total Water Sources Quantity per Marz"}),(0,R.jsx)(l.W,{center:[40.1792,44.4991],zoom:8,style:{height:"600px",width:"100%"},children:(0,R.jsxs)(n.Suspense,{children:[(0,R.jsx)(s.e,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),(0,R.jsx)(o.k,{data:P,style:{color:"#3388ff",weight:2,fillOpacity:.2}}),(0,R.jsx)(T,{data:P,marzData:F})]})},"stable-map-key"),(0,R.jsx)(x.default,{onClick:()=>ae(F,"marz"),margin:"32px 0 0 0",children:"Export Data"})]})]}),(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsxs)(S,{level:3,children:["Data presnetetion per Marz and BMO ",(0,R.jsx)("b",{children:"please Hover the Charts for Data"})]}),(0,R.jsx)(j.Col,{span:24,border_radius:"32px",padding:"16px 32px",back_color:"rgb(229 229 220)",children:(0,R.jsxs)(v.tK,{spinning:X,children:[(0,R.jsx)(j.RangePicker,{picker:"year",disabledDate:te,defaultValue:[H[0],H[H.length-1]].map((e=>C()(e,"YYYY"))),onChange:e=>{V(Array.from({length:Number(C()(e[1]).format("YYYY"))-Number(C()(e[0]).format("YYYY"))+1},((a,t)=>Number(C()(e[0]).format("YYYY"))+t))),q({})},width:"200px",mb:10}),(0,R.jsxs)(j.Row,{gutter:[32,32],children:[(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsx)(S,{level:3,children:"Chart of BMOs Water Dischard Quantity"}),(0,R.jsxs)(g.b,{width:730,height:250,data:Object.entries(G).map((e=>{let[a,t]=e;return(0,r.A)({name:a},t.dataDataWaterDischarge)})),margin:{top:5,right:30,left:20,bottom:5},children:[(0,R.jsx)(y.d,{strokeDasharray:"3 3"}),(0,R.jsx)(b.W,{dataKey:"name"}),(0,R.jsx)(f.h,{}),(0,R.jsx)(A.m,{}),(0,R.jsx)(k.s,{}),[{name:"\u0531\u056d\u0578\u0582\u0580\u0575\u0561\u0576",color:"black"},{name:"\u0531\u0580\u0561\u0580\u0561\u057f\u0575\u0561\u0576",color:"yellow"},{name:"\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576",color:"red"},{name:"\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576",color:"blue"},{name:"\u0540\u0580\u0561\u0566\u0564\u0561\u0576",color:"pink"},{name:"\u054d\u0587\u0561\u0576",color:"orange"}].map((e=>(0,R.jsx)(W.N,{type:"monotone",dataKey:e.name,stroke:e.color},e.name)))]})]}),(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsx)(S,{level:3,children:"Chart of BMOs Water Intake Quantity"}),(0,R.jsxs)(g.b,{width:730,height:250,data:Object.entries(G).map((e=>{let[a,t]=e;return(0,r.A)({name:a},t.dataWaterintakeQuanitity)})),margin:{top:5,right:30,left:20,bottom:5},children:[(0,R.jsx)(y.d,{strokeDasharray:"3 3"}),(0,R.jsx)(b.W,{dataKey:"name"}),(0,R.jsx)(f.h,{}),(0,R.jsx)(A.m,{}),(0,R.jsx)(k.s,{}),[{name:"\u0531\u056d\u0578\u0582\u0580\u0575\u0561\u0576",color:"black"},{name:"\u0531\u0580\u0561\u0580\u0561\u057f\u0575\u0561\u0576",color:"yellow"},{name:"\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576",color:"red"},{name:"\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576",color:"blue"},{name:"\u0540\u0580\u0561\u0566\u0564\u0561\u0576",color:"pink"},{name:"\u054d\u0587\u0561\u0576",color:"orange"}].map((e=>(0,R.jsx)(W.N,{type:"monotone",dataKey:e.name,stroke:e.color},e.name)))]})]}),(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsx)(S,{level:3,children:"Chart of BMOs Water Permits Quantity"}),(0,R.jsxs)(g.b,{width:730,height:250,data:Object.entries(G).map((e=>{let[a,t]=e;return(0,r.A)({name:a},t.permitsQuantity)})),margin:{top:5,right:30,left:20,bottom:5},children:[(0,R.jsx)(y.d,{strokeDasharray:"3 3"}),(0,R.jsx)(b.W,{dataKey:"name"}),(0,R.jsx)(f.h,{}),(0,R.jsx)(A.m,{}),(0,R.jsx)(k.s,{}),[{name:"\u0531\u056d\u0578\u0582\u0580\u0575\u0561\u0576",color:"black"},{name:"\u0531\u0580\u0561\u0580\u0561\u057f\u0575\u0561\u0576",color:"yellow"},{name:"\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576",color:"red"},{name:"\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576",color:"blue"},{name:"\u0540\u0580\u0561\u0566\u0564\u0561\u0576",color:"pink"},{name:"\u054d\u0587\u0561\u0576",color:"orange"}].map((e=>(0,R.jsx)(W.N,{type:"monotone",dataKey:e.name,stroke:e.color},e.name)))]})]}),(0,R.jsx)(j.Col,{span:24,children:(0,R.jsx)(x.default,{onClick:()=>ae(G,"chart"),margin:"32px 0 0 0",children:"Export Data"})})]})]})})]}),(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsxs)(S,{level:3,children:["Data presnetetion per Marz and BMO ",(0,R.jsx)("b",{children:"please Hover the Charts for Data"})]}),(0,R.jsx)(j.Col,{span:24,border_radius:"32px",padding:"16px 32px",back_color:"rgb(229 229 220)",children:(0,R.jsxs)(j.Row,{gutter:[16,16],children:[(0,R.jsxs)(j.Col,{span:12,children:[(0,R.jsx)(S,{level:4,children:"Pie represts Marzs and BMOs Water Discharge Quanitity"}),(0,R.jsx)(D.u,{width:"100%",height:200,children:(0,R.jsxs)(w.r,{width:"100%",height:200,children:[(0,R.jsx)(O.F,{data:Object.entries(I).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterDischargeQuanitity)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,R.jsx)(A.m,{content:(0,R.jsx)(B,{})}),(0,R.jsx)(O.F,{data:Object.entries(F).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterDischargeQuanitity)}})),dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#82ca9d"})]})})]}),(0,R.jsxs)(j.Col,{span:12,children:[(0,R.jsx)(S,{level:4,children:"Pie represts Marzs and BMOs Water Intake Quanitity"}),(0,R.jsx)(D.u,{width:"100%",height:200,children:(0,R.jsxs)(w.r,{width:"100%",height:200,children:[(0,R.jsx)(O.F,{data:Object.entries(I).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterintakeQuanitity)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,R.jsx)(A.m,{content:(0,R.jsx)(B,{})}),(0,R.jsx)(O.F,{data:Object.entries(F).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterintakeQuanitity)}})),dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#82ca9d"})]})})]}),(0,R.jsxs)(j.Col,{span:12,children:[(0,R.jsx)(S,{level:4,children:"Pie represts Marzs and BMOs Water Sources Quanitity"}),(0,R.jsx)(D.u,{width:"100%",height:200,children:(0,R.jsxs)(w.r,{width:"100%",height:200,children:[(0,R.jsx)(O.F,{data:Object.entries(I).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataResourcesWaterSourcesLength)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,R.jsx)(A.m,{content:(0,R.jsx)(B,{continuem:!1}),continuem:!1}),(0,R.jsx)(O.F,{data:Object.entries(F).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataResourcesWaterSourcesLength)}})),dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#82ca9d"})]})})]}),(0,R.jsxs)(j.Col,{span:12,children:[(0,R.jsx)(S,{level:4,children:"Pie represts BMOs Water Consumption Quanitity"}),(0,R.jsx)(D.u,{width:"100%",height:200,children:(0,R.jsxs)(w.r,{width:"100%",height:200,children:[(0,R.jsx)(O.F,{data:Object.entries(I).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.TotalJrar)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,R.jsx)(A.m,{content:(0,R.jsx)(B,{})})]})})]}),(0,R.jsxs)(j.Col,{span:12,children:[(0,R.jsx)(S,{level:4,children:"Pie represts BMOs removing the water intake Quanitity"}),(0,R.jsx)(D.u,{width:"100%",height:200,children:(0,R.jsxs)(w.r,{width:"100%",height:200,children:[(0,R.jsx)(O.F,{data:Object.entries(I).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.TotalJrarHeracum)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,R.jsx)(A.m,{content:(0,R.jsx)(B,{})})]})})]}),(0,R.jsxs)(j.Col,{span:12,children:[(0,R.jsx)(S,{level:4,children:"Pie represts BMOs permits Quanitity"}),(0,R.jsx)(D.u,{width:"100%",height:200,children:(0,R.jsxs)(w.r,{width:"100%",height:200,children:[(0,R.jsx)(O.F,{data:Object.entries(I).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.totalPermists)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,R.jsx)(A.m,{content:(0,R.jsx)(B,{continuem:!1}),continuem:!1})]})})]}),(0,R.jsxs)(j.Col,{span:24,children:[(0,R.jsx)(S,{level:4,children:"All Water Resouces Names"}),(0,R.jsx)(j.Paragraph,{fw:700,children:"Per BMO -- "}),Object.entries(I).length?Object.entries(I).map((e=>{let[a,t]=e;return(0,R.jsxs)("div",{style:{marginTop:5},children:[(0,R.jsx)("br",{}),(0,R.jsx)("b",{children:a}),"--","".concat(Object.entries(t).filter((e=>{let[a]=e;return"dataResourcesWaterSources"===a})).map((e=>{let[,a]=e;return a})).join(","))]},a)})):"",(0,R.jsx)(j.Paragraph,{fw:700,children:"Per Marz --"}),Object.entries(F).length?Object.entries(F).map((e=>{let[a,t]=e;return(0,R.jsxs)("div",{style:{marginTop:5},children:[(0,R.jsx)("br",{}),(0,R.jsx)("b",{children:a}),"--","".concat(Object.entries(t).filter((e=>{let[a]=e;return"dataResourcesWaterSources"===a})).map((e=>{let[,a]=e;return a})).join(","))]},a)})):""]}),(0,R.jsx)(x.default,{onClick:()=>ae(I,"BMO"),margin:"32px 0 0 0",children:"Export Data"})]})})]})]})]})})}},14961:(e,a,t)=>{t.r(a),t.d(a,{getBmo:()=>c,getDataWaterDischarge:()=>v,getDataWaterintake:()=>m,getIntakeDischargePoints:()=>h,getMarz:()=>d,getPermits:()=>u});var r=t(80045),n=t(77642);const i=["bmoid","year"],l=["bmoid"],s=["bmoid","year"],o=["bmoid","year"],d=e=>(0,n.default)().get("/Marz",e),c=e=>(0,n.default)().get("/BMO",e),u=e=>{let{bmoid:a,year:t}=e,l=(0,r.A)(e,i);return(0,n.default)().get("/main/".concat(a,"/").concat(t),l)},h=e=>{let{bmoid:a}=e,t=(0,r.A)(e,l);return(0,n.default)().get("/intake-discharge-points/".concat(a),t)},m=e=>{let{bmoid:a,year:t}=e,i=(0,r.A)(e,s);return(0,n.default)().get("/datawaterintake/".concat(a,"/").concat(t),i)},v=e=>{let{bmoid:a,year:t}=e,i=(0,r.A)(e,o);return(0,n.default)().get("/datawaterdischarge/".concat(a,"/").concat(t),i)}},77642:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var r=t(89379),n=t(79722),i=t(51210),l=t(86904),s=t(59915),o=t(92690);const d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=n.A.create({baseURL:o.API_ROOT,headers:(0,r.A)({Authorization:(0,s.getAccessToken)()?"Bearer ".concat((0,s.getAccessToken)()):""},e)});return a.interceptors.response.use((e=>e),(e=>{const a=e.response;switch(a.status){case 404:window.location.pathname=i.default.notFound.pathname;break;case 403:window.location.pathname="/not-permitted"}var t,r,n,o,d,c,u;(401===a.status&&((0,s.emptyState)(),window.location.href="/sign-in"),a)&&l.A.error({message:"Error",description:(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(r=t.message)||void 0===r||null===(n=r[0])||void 0===n||null===(o=n.messages)||void 0===o||null===(d=o[0])||void 0===d?void 0:d.message)||"string"===typeof(null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.message)&&(null===a||void 0===a||null===(u=a.data)||void 0===u?void 0:u.message)||"Something went wrong",maxCount:1,duration:0});throw e})),a}},35692:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var r=t(65043);const n=(e,a,t)=>{const[n,i]=(0,r.useState)(!1),[l,s]=(0,r.useState)([]),[o,d]=(0,r.useState)(null),c=function(){t||i(arguments.length>0&&void 0!==arguments[0]&&arguments[0])};return[l,n,function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};c(!0),e&&e(t).then((e=>{c(),s((null===e||void 0===e?void 0:e.data)||[]),r((null===e||void 0===e?void 0:e.data)||[])})).catch((()=>{c()})),a&&a(t).then((e=>{d((null===e||void 0===e?void 0:e.data)||0)})).catch((()=>{}))},o,()=>{s([]),d(0)}]}}}]);
//# sourceMappingURL=757.849654d6.chunk.js.map