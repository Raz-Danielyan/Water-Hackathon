"use strict";(self.webpackChunkratebuzz=self.webpackChunkratebuzz||[]).push([[423,692,757],{27028:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var r=t(65043),n=t(80228),i=t.n(n),l=t(9896),s=t(99419),d=t(12023),o=t(34867),c=t(67051),u=t(8919),h=(t(66433),t(70579));const p=r.memo((e=>{let{data:a,marzData:t}=e;const n=(0,l.ko)(),s=r.useRef([]);return(0,r.useEffect)((()=>(a.features.forEach((e=>{const a=(0,c.centroid)(e),[r,l]=a.geometry.coordinates,d=i().marker([l,r],{icon:i().divIcon({className:"province-label",html:'<div style="font-size:12px; color:blue; white-space: nowrap;">'.concat(e.properties.name,"</div>\n        ").concat(null!==t&&void 0!==t&&t[e.properties.name]?'<div style="font-size:12px; color:red; white-space: nowrap;"> '.concat(Math.round(null===t||void 0===t?void 0:t[e.properties.name].dataWaterDischargeQuantity),' k m\xb3/yr</div>\n              <div style="font-size:12px; color:green; white-space: nowrap;"> ').concat(Math.round(null===t||void 0===t?void 0:t[e.properties.name].dataWaterIntakeQuantity),' k m\xb3/yr</div>\n               <div style="font-size:12px; color:black; white-space: nowrap;"> ').concat(Math.round(null===t||void 0===t?void 0:t[e.properties.name].dataResourcesWaterSourcesLength),"</div>\n              "):"")})}).addTo(n);s.current.push(d)})),()=>{s.current.forEach((e=>n.removeLayer(e))),s.current=[]})),[a,t,n]),null})),v=e=>{let{separatedDataPerMarz:a}=e;return(0,r.useEffect)((()=>()=>{const e=i().DomUtil.get("map");e&&(e._leaflet_id=null)}),[]),(0,h.jsx)(s.W,{center:[40.1792,44.4991],zoom:8,style:{height:"600px",width:"100%"},children:(0,h.jsxs)(r.Suspense,{children:[(0,h.jsx)(d.e,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),(0,h.jsx)(o.k,{data:u,style:{color:"#3388ff",weight:2,fillOpacity:.2}}),(0,h.jsx)(p,{data:u,marzData:a})]})},"stable-map-key")}},92757:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var r=t(89379),n=t(65043),i=t(14961),l=t(35692),s=t(10435),d=t(27867),o=t(95808),c=t(84737),u=t(50108),h=t(60163),p=t(4240),v=t(86150),x=t(86178),j=t.n(x),m=t(27028),f=t(36297),g=t(69423),y=t(85439),b=t(1951),k=t(70579);const{Title:W}=s.A,_=e=>e.reduce(((e,a)=>e+a.totalQuantity),0),D=e=>[...new Set(e.map((e=>e.waterSource)))],O=(e,a,t)=>e.filter((e=>(null===e||void 0===e?void 0:e[a])===t)).length,M={"\u0531\u0580\u0561\u0563\u0561\u056e\u0578\u057f\u0576":"Aragatsotn","\u0531\u0580\u0561\u0580\u0561\u057f":"Ararat","\u0531\u0580\u0574\u0561\u057e\u056b\u0580":"Armavir","\u0533\u0565\u0572\u0561\u0580\u0584\u0578\u0582\u0576\u056b\u0584":"Gegharkunik","\u0535\u0580\u0587\u0561\u0576":"Erevan","\u053c\u0578\u057c\u056b":"Lori","\u053f\u0578\u057f\u0561\u0575\u0584":"Kotayk","\u0547\u056b\u0580\u0561\u056f":"Shirak","\u054d\u0575\u0578\u0582\u0576\u056b\u0584":"Syunik","\u054e\u0561\u0575\u0578\u0581 \u0571\u0578\u0580":"Vayots Dzor","\u054f\u0561\u057e\u0578\u0582\u0577":"Tavush"},w={"\u0531\u056d\u0578\u0582\u0580\u0575\u0561\u0576":"Akhuryan","\u0531\u0580\u0561\u0580\u0561\u057f\u0575\u0561\u0576":"Araratyan","\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576":"Southern","\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576":"Northern","\u0540\u0580\u0561\u0566\u0564\u0561\u0576":"Hrazdan","\u054d\u0587\u0561\u0576":"Sevan"},A=Object.values(w),S=e=>{var a,t,r,n;let{payload:i,detailedSource:l=!0}=e;return(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"ant-popover-arrow"}),(0,k.jsxs)("div",{children:[(0,k.jsx)("b",{children:null===i||void 0===i||null===(a=i[0])||void 0===a||null===(t=a.payload)||void 0===t?void 0:t.name}),(0,k.jsx)("span",{children:(0,k.jsxs)("p",{className:"desc",children:[(0,k.jsx)("small",{children:null===i||void 0===i||null===(r=i[0])||void 0===r||null===(n=r.payload)||void 0===n?void 0:n.value}),l&&" k m\xb3/yr`"]})})]})]})},C=()=>{const[e,,a,,,t]=(0,l.default)(i.getMarz),[,,s]=(0,l.default)(i.getPermits),[,,x]=(0,l.default)(i.getIntakeDischargePoints),[,,C]=(0,l.default)(i.getDataWaterIntake),[,,z]=(0,l.default)(i.getDataWaterDischarge),[R,,I,,,P]=(0,l.default)(i.getBmo),[Q,T]=(0,n.useState)({}),[B,K]=(0,n.useState)({}),[E,F]=(0,n.useState)({}),[L,Y]=(0,n.useState)("2024"),[N,J]=(0,n.useState)(!1),[H,U]=(0,n.useState)(!1),[V,G]=(0,n.useState)(!1);(0,n.useEffect)((()=>{I({},(()=>{}),(()=>{G(!0),t(g.marz),P(g.bmo)})),a()}),[]),(0,n.useEffect)((()=>{if(null!==R&&void 0!==R&&R.length&&!V)for(let e=0;e<R.length;e+=1){U(!0);const a={permitsCall:!1,intakeDischargePointsCall:!1,dataWaterIntakeCall:!1,dataWaterDischargeCall:!1};s({bmoid:R[e].internal_id,year:L},(t=>{T((a=>(0,r.A)((0,r.A)({},a),{},{[w[R[e].name]]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[w[R[e].name]])||{}),{},{permits:t})}))),a.permitsCall=!0,Object.values(a).every((e=>!0===e))?U(!1):U(!0)})),x({bmoid:R[e].internal_id},(t=>{T((a=>(0,r.A)((0,r.A)({},a),{},{[w[R[e].name]]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[w[R[e].name]])||{}),{},{intakeDischargePoints:t})}))),a.intakeDischargePointsCall=!0,Object.values(a).every((e=>!0===e))?U(!1):U(!0)})),C({bmoid:R[e].internal_id,year:L},(t=>{T((a=>(0,r.A)((0,r.A)({},a),{},{[w[R[e].name]]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[w[R[e].name]])||{}),{},{dataWaterIntake:t})}))),a.dataWaterIntakeCall=!0,Object.values(a).every((e=>!0===e))?U(!1):U(!0)})),z({bmoid:R[e].internal_id,year:L},(t=>{T((a=>(0,r.A)((0,r.A)({},a),{},{[w[R[e].name]]:(0,r.A)((0,r.A)({},(null===a||void 0===a?void 0:a[w[R[e].name]])||{}),{},{dataWaterDischarge:t})}))),a.dataWaterDischargeCall=!0,Object.values(a).every((e=>!0===e))?U(!1):U(!0)}))}else V&&(K(y[L]),F(b[L]))}),[R,L,V]),(0,n.useEffect)((()=>{const a=Object.values(Q).map((e=>4===Object.keys(e).length)).every((e=>!0===e));if(Object.keys(Q).length===R.length&&a&&R.length>0&&!V){K(Object.entries(Q).reduce(((e,a)=>{let[t,n]=a;return(0,r.A)((0,r.A)({},e),{},{[t]:{dataWaterDischargeQuantity:_(n.dataWaterDischarge||[]),dataWaterIntakeQuantity:_((null===n||void 0===n?void 0:n.dataWaterIntake)||[]),dataResourcesWaterSources:D([...(null===n||void 0===n?void 0:n.dataWaterDischarge)||[],...(null===n||void 0===n?void 0:n.dataWaterIntake)||[]]),dataResourcesWaterSourcesLength:D([...n.dataWaterDischarge||[],...n.dataWaterIntake||[]]).length,TotalJrar:O((null===n||void 0===n?void 0:n.intakeDischargePoints)||[],"typeOfWaterUse","\u054b\u0580\u0561\u057c"),TotalJrarHeracum:O((null===n||void 0===n?void 0:n.intakeDischargePoints)||[],"typeOfWaterUse","\u054b\u0580\u0561\u0570\u0565\u057c\u0561\u0581\u0578\u0582\u0574"),totalPermits:((null===n||void 0===n?void 0:n.permits)||[]).length}})}),{}));const a=Object.values(Q).reduce(((e,a)=>[...e,...null!==a&&void 0!==a&&a.dataWaterDischarge?a.dataWaterDischarge.map((e=>(0,r.A)((0,r.A)({},e),{},{dataWaterDischarge:!0}))):[],...null!==a&&void 0!==a&&a.dataWaterIntake?a.dataWaterIntake.map((e=>(0,r.A)((0,r.A)({},e),{},{dataWaterIntake:!0}))):[]]),[]);let n={};for(let i=0;i<e.length;i+=1){var t;n=(0,r.A)((0,r.A)({},n),{},{[M[null===(t=e[i])||void 0===t?void 0:t.name]]:a.filter((a=>{var t;return(null===a||void 0===a?void 0:a.marz_Internal_ID)===(null===(t=e[i])||void 0===t?void 0:t.internal_id)}))})}F(Object.entries(n).reduce(((e,a)=>{let[t,n]=a;return(0,r.A)((0,r.A)({},e),{},{[t]:{dataWaterDischargeQuantity:_(n.filter((e=>null===e||void 0===e?void 0:e.dataWaterDischarge))),dataWaterIntakeQuantity:_(n.filter((e=>null===e||void 0===e?void 0:e.dataWaterIntake))),dataResourcesWaterSources:D(n),dataResourcesWaterSourcesLength:D(n).length}})}),{}))}}),[Q]);const q=(e,a)=>{const t="data:text/json;chatset=utf-8,".concat(encodeURIComponent(JSON.stringify(e))),r=document.createElement("a");r.href=t,r.download="".concat(a,".json"),r.click()},X=e=>e&&(e.isBefore(j()("2003-01-01"))||e.isAfter(j()("2024-12-31")));return(0,k.jsx)("div",{children:(0,k.jsxs)(d.tK,{spinning:H,children:[(0,k.jsx)(W,{children:"Tim 2 Presentation of Data Research of cadaster API"}),(0,k.jsx)(o.DatePicker,{picker:"year",onChange:e=>{Y(j()(e).format("YYYY")),T({}),K({}),F({})},defaultValue:j()(L,"YYYY"),width:"200px",mb:10,disabledDate:X}),(0,k.jsxs)(o.Row,{gutter:[15,32],children:[(0,k.jsxs)(o.Col,{span:24,children:[(0,k.jsx)(W,{level:3,children:"MAP presentation of cadaster Data"}),(0,k.jsxs)(o.Col,{span:24,border_radius:"32px",padding:"16px 32px",back_color:"rgb(229 229 220)",children:[(0,k.jsx)(W,{level:5,style:{color:"red"},children:"In Red text in The Map you'll see Total Water Discharge Quantity per Marz"}),(0,k.jsx)(W,{level:5,style:{color:"green"},children:"In Green text in The Map you'll see Total Water Intake Quantity per Marz"}),(0,k.jsx)(W,{level:5,style:{color:"black"},children:"In Black text in The Map you'll see Total Water Sources Quantity per Marz"}),(0,k.jsx)(m.default,{separatedDataPerMarz:E}),(0,k.jsx)(c.default,{onClick:()=>q(E,"marz"),margin:"32px 0 0 0",children:"Export Data"})]})]}),(0,k.jsxs)(o.Col,{span:24,children:[(0,k.jsxs)(W,{level:3,children:["Data presentation per Marz and BMO ",(0,k.jsx)("b",{children:"please Hover the Charts for Data"})]}),(0,k.jsx)(o.Col,{span:24,border_radius:"32px",padding:"16px 32px",back_color:"rgb(229 229 220)",children:(0,k.jsx)(d.tK,{spinning:N,children:(0,k.jsx)(f.default,{engBMO:w,setCharLoading:J,bmo:R,exportData:q,engBMOValues:A,disabledDate:X,notConnected:V})})})]}),(0,k.jsxs)(o.Col,{span:24,children:[(0,k.jsxs)(W,{level:3,children:["Data presentation per Marz and BMO ",(0,k.jsx)("b",{children:"please Hover the Charts for Data"})]}),(0,k.jsx)(o.Col,{span:24,border_radius:"32px",padding:"16px 32px",back_color:"rgb(229 229 220)",children:(0,k.jsxs)(o.Row,{gutter:[16,16],children:[(0,k.jsxs)(o.Col,{span:12,children:[(0,k.jsx)(W,{level:4,children:"Pie represents Marzs and BMOs Water Discharge Quantity"}),(0,k.jsx)(u.u,{width:"100%",height:200,children:(0,k.jsxs)(h.r,{width:"100%",height:200,children:[(0,k.jsx)(p.F,{data:Object.entries(B).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterDischargeQuantity)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,k.jsx)(v.m,{content:(0,k.jsx)(S,{})}),(0,k.jsx)(p.F,{data:Object.entries(E).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterDischargeQuantity)}})),dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#82ca9d"})]})})]}),(0,k.jsxs)(o.Col,{span:12,children:[(0,k.jsx)(W,{level:4,children:"Pie represents Marzs and BMOs Water Intake Quantity"}),(0,k.jsx)(u.u,{width:"100%",height:200,children:(0,k.jsxs)(h.r,{width:"100%",height:200,children:[(0,k.jsx)(p.F,{data:Object.entries(B).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterIntakeQuantity)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,k.jsx)(v.m,{content:(0,k.jsx)(S,{})}),(0,k.jsx)(p.F,{data:Object.entries(E).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataWaterIntakeQuantity)}})),dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#82ca9d"})]})})]}),(0,k.jsxs)(o.Col,{span:12,children:[(0,k.jsx)(W,{level:4,children:"Pie represents Marzs and BMOs Water Sources Quantity"}),(0,k.jsx)(u.u,{width:"100%",height:200,children:(0,k.jsxs)(h.r,{width:"100%",height:200,children:[(0,k.jsx)(p.F,{data:Object.entries(B).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataResourcesWaterSourcesLength)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,k.jsx)(v.m,{content:(0,k.jsx)(S,{detailedSource:!1}),detailedSource:!1}),(0,k.jsx)(p.F,{data:Object.entries(E).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.dataResourcesWaterSourcesLength)}})),dataKey:"value",cx:"50%",cy:"50%",innerRadius:70,outerRadius:90,fill:"#82ca9d"})]})})]}),(0,k.jsxs)(o.Col,{span:12,children:[(0,k.jsx)(W,{level:4,children:"Pie represents BMOs Water Consumption Quantity"}),(0,k.jsx)(u.u,{width:"100%",height:200,children:(0,k.jsxs)(h.r,{width:"100%",height:200,children:[(0,k.jsx)(p.F,{data:Object.entries(B).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.TotalJrar)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,k.jsx)(v.m,{content:(0,k.jsx)(S,{})})]})})]}),(0,k.jsxs)(o.Col,{span:12,children:[(0,k.jsx)(W,{level:4,children:"Pie represents BMOs removing the water intake Quantity"}),(0,k.jsx)(u.u,{width:"100%",height:200,children:(0,k.jsxs)(h.r,{width:"100%",height:200,children:[(0,k.jsx)(p.F,{data:Object.entries(B).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.TotalJrarHeracum)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,k.jsx)(v.m,{content:(0,k.jsx)(S,{})})]})})]}),(0,k.jsxs)(o.Col,{span:12,children:[(0,k.jsx)(W,{level:4,children:"Pie represents BMOs permits Quantity"}),(0,k.jsx)(u.u,{width:"100%",height:200,children:(0,k.jsxs)(h.r,{width:"100%",height:200,children:[(0,k.jsx)(p.F,{data:Object.entries(B).map((e=>{let[a,t]=e;return{name:a,value:Math.round(t.totalPermits)}})),dataKey:"value",cx:"50%",cy:"50%",outerRadius:60,fill:"#8884d8"}),(0,k.jsx)(v.m,{content:(0,k.jsx)(S,{detailedSource:!1}),detailedSource:!1})]})})]}),(0,k.jsxs)(o.Col,{span:24,children:[(0,k.jsx)(W,{level:4,children:"All Water Resources Names"}),(0,k.jsx)(o.Paragraph,{fw:700,children:"Per BMO -- "}),Object.entries(B).length?Object.entries(B).map((e=>{let[a,t]=e;return(0,k.jsxs)("div",{style:{marginTop:5},children:[(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:a}),"--","".concat(Object.entries(t).filter((e=>{let[a]=e;return"dataResourcesWaterSources"===a})).map((e=>{let[,a]=e;return a})).join(","))]},a)})):"",(0,k.jsx)(o.Paragraph,{fw:700,children:"Per Marz --"}),Object.entries(E).length?Object.entries(E).map((e=>{let[a,t]=e;return(0,k.jsxs)("div",{style:{marginTop:5},children:[(0,k.jsx)("br",{}),(0,k.jsx)("b",{children:a}),"--","".concat(Object.entries(t).filter((e=>{let[a]=e;return"dataResourcesWaterSources"===a})).map((e=>{let[,a]=e;return a})).join(","))]},a)})):""]}),(0,k.jsx)(c.default,{onClick:()=>q(B,"BMO"),margin:"32px 0 0 0",children:"Export Data"})]})})]})]})]})})}},35692:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var r=t(65043);const n=(e,a,t)=>{const[n,i]=(0,r.useState)(!1),[l,s]=(0,r.useState)([]),[d,o]=(0,r.useState)(null),c=function(){t||i(arguments.length>0&&void 0!==arguments[0]&&arguments[0])};return[l,n,function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};c(!0),e&&e(t).then((e=>{c(),s((null===e||void 0===e?void 0:e.data)||[]),r((null===e||void 0===e?void 0:e.data)||[])})).catch((()=>{n(),c()})),a&&a(t).then((e=>{o((null===e||void 0===e?void 0:e.data)||0)})).catch((()=>{}))},d,()=>{s([]),o(0)},s]}},69423:e=>{e.exports=JSON.parse('{"bmo":[{"internal_id":2,"official_id":"2","name":"\u0540\u0575\u0578\u0582\u057d\u056b\u057d\u0561\u0575\u056b\u0576"},{"internal_id":3,"official_id":"3","name":"\u0531\u056d\u0578\u0582\u0580\u0575\u0561\u0576"},{"internal_id":4,"official_id":"4","name":"\u0531\u0580\u0561\u0580\u0561\u057f\u0575\u0561\u0576"},{"internal_id":5,"official_id":"5","name":"\u0540\u0561\u0580\u0561\u057e\u0561\u0575\u056b\u0576"},{"internal_id":6,"official_id":"1","name":"\u054d\u0587\u0561\u0576"},{"internal_id":7,"official_id":"6","name":"\u0540\u0580\u0561\u0566\u0564\u0561\u0576"}],"mars":[{"internal_id":11,"official_id":"2","name":"\u0531\u0580\u0561\u0563\u0561\u056e\u0578\u057f\u0576"},{"internal_id":12,"official_id":"3","name":"\u0531\u0580\u0561\u0580\u0561\u057f"},{"internal_id":13,"official_id":"4","name":"\u0531\u0580\u0574\u0561\u057e\u056b\u0580"},{"internal_id":14,"official_id":"5","name":"\u0533\u0565\u0572\u0561\u0580\u0584\u0578\u0582\u0576\u056b\u0584"},{"internal_id":15,"official_id":"6","name":"\u053c\u0578\u057c\u056b"},{"internal_id":16,"official_id":"7","name":"\u053f\u0578\u057f\u0561\u0575\u0584"},{"internal_id":17,"official_id":"9","name":"\u054d\u0575\u0578\u0582\u0576\u056b\u0584"},{"internal_id":18,"official_id":"8","name":"\u0547\u056b\u0580\u0561\u056f"},{"internal_id":19,"official_id":"10","name":"\u054e\u0561\u0575\u0578\u0581 \u0571\u0578\u0580"},{"internal_id":20,"official_id":"11","name":"\u054f\u0561\u057e\u0578\u0582\u0577"},{"internal_id":21,"official_id":"1","name":"\u0535\u0580\u0587\u0561\u0576"}]}')}}]);
//# sourceMappingURL=757.d13070b7.chunk.js.map