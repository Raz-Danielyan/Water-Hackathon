"use strict";(self.webpackChunkratebuzz=self.webpackChunkratebuzz||[]).push([[297,642,773,961],{36297:(a,r,t)=>{t.r(r),t.d(r,{default:()=>g});var e=t(89379),n=t(65043),o=t(86178),h=t.n(o),u=t(95808),d=t(14961),i=t(75748),y=t(87734),s=t(52185),A=t(6026),l=t(86150),c=t(21327),S=t(90168),m=t(21773),k=t(70579);const v=a=>{let{active:r,payload:t,label:e}=a;return r&&t&&t.length?(0,k.jsxs)("div",{className:"custom-tooltip",style:{backgroundColor:"#fff",border:"1px solid #ccc",padding:"10px"},children:[(0,k.jsx)("p",{className:"label",children:"Name: ".concat(e)}),t.map(((a,r)=>(0,k.jsx)("p",{style:{color:a.color},children:"".concat(a.name,": ").concat(a.value," k m\xb3/yr")},r)))]}):null},g=a=>{let{engBMO:r,setCharLoading:t,bmo:o,exportData:g,engBMOValues:N,disabledDate:p,notConnected:z}=a;const[H,D]=(0,n.useState)([2022,2023,2024]),[W,b]=(0,n.useState)({});return(0,n.useEffect)((()=>{if(o.length&&!z){t(!0);const a={permits:!1,dataWaterIntake:!1,dataWaterDischarge:!1};Promise.all(H.reduce(((a,r)=>[...a,...o.reduce(((a,t)=>[...a,(0,d.getPermits)({bmoid:t.internal_id,year:r})]),[])]),[])).then((n=>{const o=n.map((a=>null===a||void 0===a?void 0:a.data)).flat().reduce(((a,t)=>{var n;return(0,e.A)((0,e.A)({},a),{},{[t.yearA]:(0,e.A)((0,e.A)({},null!==a&&void 0!==a&&a[t.yearA]?a[t.yearA]:{}),{},{[r[t.basinName]]:null!==a&&void 0!==a&&null!==(n=a[t.yearA])&&void 0!==n&&n[r[t.basinName]]?a[t.yearA][r[t.basinName]]+1:1})})}),{});b((a=>(0,e.A)((0,e.A)({},a),Object.entries(o).reduce(((r,t)=>{let[n,o]=t;return(0,e.A)((0,e.A)({},r),{},{[n]:(0,e.A)((0,e.A)({},null!==a&&void 0!==a&&a[n]?a[n]:{}),{},{permitsQuantity:o})})}),{})))),a.permits=!0,Object.values(a).every((a=>!0===a))&&t(!1)})).catch((a=>{console.error(a)})),Promise.all(H.reduce(((a,r)=>[...a,...o.reduce(((a,t)=>[...a,(0,d.getDataWaterIntake)({bmoid:t.internal_id,year:r})]),[])]),[])).then((n=>{const o=n.map((a=>null===a||void 0===a?void 0:a.data)).flat().reduce(((a,t)=>{var n;return(0,e.A)((0,e.A)({},a),{},{[t.yearA]:(0,e.A)((0,e.A)({},null!==a&&void 0!==a&&a[t.yearA]?a[t.yearA]:{}),{},{[r[t.basinName]]:(null!==a&&void 0!==a&&null!==(n=a[t.yearA])&&void 0!==n&&n[r[t.basinName]]?a[t.yearA][r[t.basinName]]:0)+t.totalQuantity})})}),{});b((a=>(0,e.A)((0,e.A)({},a),Object.entries(o).reduce(((r,t)=>{let[n,o]=t;return(0,e.A)((0,e.A)({},r),{},{[n]:(0,e.A)((0,e.A)({},null!==a&&void 0!==a&&a[n]?a[n]:{}),{},{dataWaterIntakeQuantity:o})})}),{})))),a.dataWaterIntake=!0,Object.values(a).every((a=>!0===a))&&t(!1)})).catch((a=>{console.error(a)})),Promise.all(H.reduce(((a,r)=>[...a,...o.reduce(((a,t)=>[...a,(0,d.getDataWaterDischarge)({bmoid:t.internal_id,year:r})]),[])]),[])).then((n=>{const o=n.map((a=>null===a||void 0===a?void 0:a.data)).flat().reduce(((a,t)=>{var n;return(0,e.A)((0,e.A)({},a),{},{[t.yearA]:(0,e.A)((0,e.A)({},null!==a&&void 0!==a&&a[t.yearA]?a[t.yearA]:{}),{},{[r[t.basinName]]:(null!==a&&void 0!==a&&null!==(n=a[t.yearA])&&void 0!==n&&n[r[t.basinName]]?a[t.yearA][r[t.basinName]]:0)+t.totalQuantity})})}),{});b((a=>(0,e.A)((0,e.A)({},a),Object.entries(o).reduce(((r,t)=>{let[n,o]=t;return(0,e.A)((0,e.A)({},r),{},{[n]:(0,e.A)((0,e.A)({},null!==a&&void 0!==a&&a[n]?a[n]:{}),{},{dataDataWaterDischarge:o})})}),{})))),a.dataWaterDischarge=!0,Object.values(a).every((a=>!0===a))&&t(!1)})).catch((a=>{console.error(a)}))}else z&&o.length&&b(H.reduce(((a,r)=>(0,e.A)((0,e.A)({},a),{},{[r]:m[r]})),{}))}),[o,H,z]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.RangePicker,{picker:"year",disabledDate:p,defaultValue:[H[0],H[H.length-1]].map((a=>h()(a,"YYYY"))),onChange:a=>{D(Array.from({length:Number(h()(a[1]).format("YYYY"))-Number(h()(a[0]).format("YYYY"))+1},((r,t)=>Number(h()(a[0]).format("YYYY"))+t))),b({})},width:"200px",mb:10}),(0,k.jsxs)(u.Row,{gutter:[32,32],children:[(0,k.jsxs)(u.Col,{span:24,children:[(0,k.jsx)(u.Title,{level:3,children:"Chart of BMOs Water Discharge Quantity"}),(0,k.jsxs)(i.b,{width:730,height:250,data:Object.entries(W).map((a=>{let[r,t]=a;return(0,e.A)({name:r},t.dataDataWaterDischarge)})),margin:{top:5,right:30,left:20,bottom:5},children:[(0,k.jsx)(y.d,{strokeDasharray:"3 3"}),(0,k.jsx)(s.W,{dataKey:"name"}),(0,k.jsx)(A.h,{}),(0,k.jsx)(l.m,{content:(0,k.jsx)(v,{})}),(0,k.jsx)(c.s,{}),[{name:[0],color:"black"},{name:N[1],color:"yellow"},{name:N[2],color:"red"},{name:N[3],color:"blue"},{name:N[4],color:"pink"},{name:N[5],color:"orange"}].map((a=>(0,k.jsx)(S.N,{type:"monotone",dataKey:a.name,stroke:a.color},a.name)))]})]}),(0,k.jsxs)(u.Col,{span:24,children:[(0,k.jsx)(u.Title,{level:3,children:"Chart of BMOs Water Intake Quantity"}),(0,k.jsxs)(i.b,{width:730,height:250,data:Object.entries(W).map((a=>{let[r,t]=a;return(0,e.A)({name:r},t.dataWaterIntakeQuantity)})),margin:{top:5,right:30,left:20,bottom:5},children:[(0,k.jsx)(y.d,{strokeDasharray:"3 3"}),(0,k.jsx)(s.W,{dataKey:"name"}),(0,k.jsx)(A.h,{}),(0,k.jsx)(l.m,{content:(0,k.jsx)(v,{})}),(0,k.jsx)(c.s,{}),[{name:N[0],color:"black"},{name:N[1],color:"yellow"},{name:N[2],color:"red"},{name:N[3],color:"blue"},{name:N[4],color:"pink"},{name:N[5],color:"orange"}].map((a=>(0,k.jsx)(S.N,{type:"monotone",dataKey:a.name,stroke:a.color},a.name)))]})]}),(0,k.jsxs)(u.Col,{span:24,children:[(0,k.jsx)(u.Title,{level:3,children:"Chart of BMOs Water Permits Quantity"}),(0,k.jsxs)(i.b,{width:730,height:250,data:Object.entries(W).map((a=>{let[r,t]=a;return(0,e.A)({name:r},t.permitsQuantity)})),margin:{top:5,right:30,left:20,bottom:5},children:[(0,k.jsx)(y.d,{strokeDasharray:"3 3"}),(0,k.jsx)(s.W,{dataKey:"name"}),(0,k.jsx)(A.h,{}),(0,k.jsx)(l.m,{}),(0,k.jsx)(c.s,{}),[{name:N[0],color:"black"},{name:N[1],color:"yellow"},{name:N[2],color:"red"},{name:N[3],color:"blue"},{name:N[4],color:"pink"},{name:N[5],color:"orange"}].map((a=>(0,k.jsx)(S.N,{type:"monotone",dataKey:a.name,stroke:a.color},a.name)))]})]}),(0,k.jsx)(u.Col,{span:24,children:(0,k.jsx)(u.Button,{onClick:()=>g(W,"chart"),margin:"32px 0 0 0",children:"Export Data"})})]})]})}},14961:(a,r,t)=>{t.r(r),t.d(r,{getBmo:()=>y,getDataWaterDischarge:()=>c,getDataWaterIntake:()=>l,getIntakeDischargePoints:()=>A,getMarz:()=>i,getPermits:()=>s});var e=t(80045),n=t(77642);const o=["bmoid","year"],h=["bmoid"],u=["bmoid","year"],d=["bmoid","year"],i=a=>(0,n.default)().get("/Marz",a),y=a=>(0,n.default)().get("/BMO",a),s=a=>{let{bmoid:r,year:t}=a,h=(0,e.A)(a,o);return(0,n.default)().get("/main/".concat(r,"/").concat(t),h)},A=a=>{let{bmoid:r}=a,t=(0,e.A)(a,h);return(0,n.default)().get("/intake-discharge-points/".concat(r),t)},l=a=>{let{bmoid:r,year:t}=a,o=(0,e.A)(a,u);return(0,n.default)().get("/datawaterintake/".concat(r,"/").concat(t),o)},c=a=>{let{bmoid:r,year:t}=a,o=(0,e.A)(a,d);return(0,n.default)().get("/datawaterdischarge/".concat(r,"/").concat(t),o)}},77642:(a,r,t)=>{t.r(r),t.d(r,{default:()=>d});var e=t(89379),n=t(79722),o=t(86904),h=t(59915),u=t(92690);const d=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=n.A.create({baseURL:u.API_ROOT,headers:(0,e.A)({Authorization:(0,h.getAccessToken)()?"Bearer ".concat((0,h.getAccessToken)()):""},a)});return r.interceptors.response.use((a=>a),(a=>{const r=a.response;if(403===r.status)window.location.pathname="/not-permitted";var t,e,n,u,d,i,y;(401===r.status&&((0,h.emptyState)(),window.location.href="/sign-in"),r)&&o.A.error({message:"Error",description:(null===r||void 0===r||null===(t=r.data)||void 0===t||null===(e=t.message)||void 0===e||null===(n=e[0])||void 0===n||null===(u=n.messages)||void 0===u||null===(d=u[0])||void 0===d?void 0:d.message)||"string"===typeof(null===r||void 0===r||null===(i=r.data)||void 0===i?void 0:i.message)&&(null===r||void 0===r||null===(y=r.data)||void 0===y?void 0:y.message)||"Something went wrong",maxCount:1,duration:0});throw a})),r}},21773:a=>{a.exports=JSON.parse('{"2003":{"permitsQuantity":{"Northern":16,"Akhuryan":60,"Araratyan":32,"Southern":8,"Sevan":17,"Hrazdan":90},"dataWaterIntakeQuantity":{"Northern":251850.912,"Akhuryan":260127.38799999998,"Araratyan":204296.58000000002,"Southern":552591.7855,"Sevan":56171.272000000004,"Hrazdan":258941.98799999998},"dataDataWaterDischarge":{"Northern":251607.36000000004,"Akhuryan":117320.70800000006,"Araratyan":157014.7963333333,"Southern":552571.5,"Sevan":51061.18,"Hrazdan":18690.581}},"2004":{"permitsQuantity":{"Northern":170,"Akhuryan":300,"Araratyan":178,"Southern":65,"Sevan":53,"Hrazdan":478},"dataWaterIntakeQuantity":{"Northern":607617.6067333337,"Akhuryan":1049005.1639999999,"Araratyan":628079.9356666666,"Southern":575269.7488,"Sevan":114844.48400000001,"Hrazdan":1513426.3686333334},"dataDataWaterDischarge":{"Northern":444186.945,"Akhuryan":240093.25299999997,"Araratyan":235638.50600000002,"Southern":442632.66,"Sevan":52209.73999999999,"Hrazdan":657864.6916666669}},"2005":{"permitsQuantity":{"Northern":252,"Akhuryan":478,"Araratyan":268,"Southern":109,"Sevan":167,"Hrazdan":642},"dataWaterIntakeQuantity":{"Northern":1427189.1433999997,"Akhuryan":1315191.0499999996,"Araratyan":688362.779,"Southern":867676.3387999998,"Sevan":182203.158,"Hrazdan":1599212.2308166649},"dataDataWaterDischarge":{"Northern":1811526.9249999998,"Akhuryan":414361.99799999985,"Araratyan":236324.93600000005,"Southern":720907.2699999999,"Sevan":64315.939999999995,"Hrazdan":707283.9240499999}},"2006":{"permitsQuantity":{"Northern":298,"Akhuryan":634,"Araratyan":342,"Southern":185,"Sevan":193,"Hrazdan":790},"dataWaterIntakeQuantity":{"Northern":1549799.5890666666,"Akhuryan":1485618.2373333324,"Araratyan":821783.4135833333,"Southern":1514303.0117999995,"Sevan":185099.45099999997,"Hrazdan":1964282.923399998},"dataDataWaterDischarge":{"Northern":1891895.2949166659,"Akhuryan":460702.3923333333,"Araratyan":305407.9488333334,"Southern":1332560.1020000002,"Sevan":65010.16899999999,"Hrazdan":1153583.1438}},"2007":{"permitsQuantity":{"Northern":338,"Akhuryan":810,"Araratyan":428,"Southern":216,"Sevan":216,"Hrazdan":918},"dataWaterIntakeQuantity":{"Northern":1581618.146,"Akhuryan":2568956.977649997,"Araratyan":947244.9668333329,"Southern":1334936.9545333332,"Sevan":187131.34053333336,"Hrazdan":2085085.9951916663},"dataDataWaterDischarge":{"Northern":1981984.1677499993,"Akhuryan":473868.2240833333,"Araratyan":296308.62050000014,"Southern":1181039.2053333337,"Sevan":63382.62786666665,"Hrazdan":843379.9977166664}},"2008":{"permitsQuantity":{"Northern":325,"Akhuryan":801,"Araratyan":333,"Southern":230,"Sevan":210,"Hrazdan":804},"dataWaterIntakeQuantity":{"Northern":1532446.5189999999,"Akhuryan":2287410.7086666673,"Araratyan":1113948.9604999993,"Southern":1493571.4682000002,"Sevan":142578.15203333335,"Hrazdan":1888783.7668166643},"dataDataWaterDischarge":{"Northern":1504682.5481666662,"Akhuryan":482607.0600833332,"Araratyan":294481.85,"Southern":1365291.993666667,"Sevan":25248.394533333336,"Hrazdan":875426.2332000005}},"2009":{"permitsQuantity":{"Northern":304,"Akhuryan":747,"Araratyan":300,"Southern":194,"Sevan":111,"Hrazdan":785},"dataWaterIntakeQuantity":{"Northern":1615946.2365833337,"Akhuryan":2353675.7263333327,"Araratyan":1228544.1175,"Southern":2658585.3290333333,"Sevan":95477.32769999998,"Hrazdan":2238197.825499997},"dataDataWaterDischarge":{"Northern":1393662.6935,"Akhuryan":497739.57775000005,"Araratyan":328925.59125,"Southern":2547591.1510833325,"Sevan":10627.719533333337,"Hrazdan":1314465.8453333317}},"2010":{"permitsQuantity":{"Northern":313,"Akhuryan":650,"Araratyan":306,"Southern":177,"Sevan":155,"Hrazdan":744},"dataWaterIntakeQuantity":{"Northern":2650502.123333334,"Akhuryan":3858427.9663,"Araratyan":5453521.890583333,"Southern":2086084.7478999996,"Sevan":170528.12953333335,"Hrazdan":3207906.3469166653},"dataDataWaterDischarge":{"Northern":1435097.3775833338,"Akhuryan":518606.74374999997,"Araratyan":349115.46033333335,"Southern":1970989.6659999997,"Sevan":37916.44886666667,"Hrazdan":4887133.992000006}},"2011":{"permitsQuantity":{"Northern":331,"Akhuryan":520,"Araratyan":282,"Southern":203,"Sevan":176,"Hrazdan":708},"dataWaterIntakeQuantity":{"Northern":3692270.8002500003,"Akhuryan":2971939.084366667,"Araratyan":5288929.20825,"Southern":2125454.0932166665,"Sevan":184820.75761666667,"Hrazdan":3440625.705083332},"dataDataWaterDischarge":{"Northern":2396960.6768333334,"Akhuryan":819610.5503333334,"Araratyan":503533.29,"Southern":2023450.6211666663,"Sevan":89449.12645000001,"Hrazdan":5575397.698083337}},"2012":{"permitsQuantity":{"Northern":305,"Akhuryan":386,"Araratyan":256,"Southern":195,"Sevan":172,"Hrazdan":701},"dataWaterIntakeQuantity":{"Northern":4047172.7177500012,"Akhuryan":2999504.015666669,"Araratyan":5153527.87075,"Southern":3845259.0124666668,"Sevan":186876.46569999997,"Hrazdan":3795390.9283333328},"dataDataWaterDischarge":{"Northern":2821361.453916667,"Akhuryan":809661.8355,"Araratyan":588928.9299999999,"Southern":3705015.749,"Sevan":58625.70095000001,"Hrazdan":5991534.416000001}},"2013":{"permitsQuantity":{"Northern":290,"Akhuryan":380,"Araratyan":286,"Southern":196,"Sevan":203,"Hrazdan":685},"dataWaterIntakeQuantity":{"Northern":3706842.5326666674,"Akhuryan":2895362.896750001,"Araratyan":4777732.915916665,"Southern":3164043.269466666,"Sevan":347119.9235666666,"Hrazdan":3426362.252750001},"dataDataWaterDischarge":{"Northern":2897230.7530833334,"Akhuryan":815066.5417500003,"Araratyan":1139579.3791666664,"Southern":2998519.227333333,"Sevan":216635.80326666663,"Hrazdan":1777857.8430833328}},"2014":{"permitsQuantity":{"Northern":295,"Akhuryan":347,"Araratyan":254,"Southern":205,"Sevan":213,"Hrazdan":647},"dataWaterIntakeQuantity":{"Northern":3536814.1119166673,"Akhuryan":2466234.253166667,"Araratyan":1765529.4348333343,"Southern":4495162.865266667,"Sevan":444690.55424999987,"Hrazdan":3300539.9909999985},"dataDataWaterDischarge":{"Northern":2778144.7899166658,"Akhuryan":634555.5325000001,"Araratyan":1009929.5432500002,"Southern":4301196.872583333,"Sevan":283762.49253333337,"Hrazdan":1477156.2571666664}},"2015":{"permitsQuantity":{"Northern":287,"Akhuryan":341,"Araratyan":263,"Southern":206,"Sevan":186,"Hrazdan":656},"dataWaterIntakeQuantity":{"Northern":3390737.1064166683,"Akhuryan":2686236.038216666,"Araratyan":1948838.5631666668,"Southern":4328129.9843500005,"Sevan":459018.40008333325,"Hrazdan":4364640.150583335},"dataDataWaterDischarge":{"Northern":2578200.368333333,"Akhuryan":851885.1568333334,"Araratyan":911235.4500000001,"Southern":4098885.1639999994,"Sevan":319394.3776166667,"Hrazdan":2478287.784916668}},"2016":{"permitsQuantity":{"Northern":294,"Akhuryan":318,"Araratyan":273,"Southern":221,"Sevan":203,"Hrazdan":667},"dataWaterIntakeQuantity":{"Northern":3306830.9180833353,"Akhuryan":2200554.0286333323,"Araratyan":2034478.3411666672,"Southern":2944877.2363499994,"Sevan":449296.4982499999,"Hrazdan":4692199.812833335},"dataDataWaterDischarge":{"Northern":2258287.4105833336,"Akhuryan":812370.5767500001,"Araratyan":986253.3831666671,"Southern":2686370.4341666666,"Sevan":318069.56196666666,"Hrazdan":2810907.5604166673}},"2017":{"permitsQuantity":{"Northern":292,"Akhuryan":347,"Araratyan":275,"Southern":220,"Sevan":163,"Hrazdan":680},"dataWaterIntakeQuantity":{"Northern":3509347.2169000003,"Akhuryan":1887485.6114666674,"Araratyan":1927824.6696666672,"Southern":2845537.2760333344,"Sevan":336886.30758333317,"Hrazdan":8488666.378083335},"dataDataWaterDischarge":{"Northern":2313887.9179166663,"Akhuryan":906290.7685833334,"Araratyan":782056.935,"Southern":28721278.421666667,"Sevan":284338.37916666665,"Hrazdan":6586726.6006666655}},"2018":{"permitsQuantity":{"Northern":301,"Akhuryan":365,"Araratyan":301,"Southern":225,"Sevan":170,"Hrazdan":743},"dataWaterIntakeQuantity":{"Northern":3507007.741816669,"Akhuryan":1647758.0768500003,"Araratyan":1743088.6130000001,"Southern":2346281.505666667,"Sevan":335614.76183333335,"Hrazdan":9134924.176666673},"dataDataWaterDischarge":{"Northern":2265614.3275,"Akhuryan":1034205.9664999999,"Araratyan":32870757.992166664,"Southern":28190515.04333333,"Sevan":284215.687,"Hrazdan":7966549.2255833335}},"2019":{"permitsQuantity":{"Northern":231,"Akhuryan":289,"Araratyan":275,"Southern":219,"Sevan":151,"Hrazdan":595},"dataWaterIntakeQuantity":{"Northern":2629268.5307333344,"Akhuryan":1745520.0574166677,"Araratyan":2042766.7848333337,"Southern":1443398.490366667,"Sevan":326440.22825000004,"Hrazdan":8114582.520216667},"dataDataWaterDischarge":{"Northern":2357313.03025,"Akhuryan":1162673.4808333337,"Araratyan":32902415.388333328,"Southern":27250545.97,"Sevan":251021.4578333333,"Hrazdan":6988524.691416668}},"2020":{"permitsQuantity":{"Northern":250,"Akhuryan":368,"Araratyan":297,"Southern":239,"Sevan":149,"Hrazdan":655},"dataWaterIntakeQuantity":{"Northern":2619097.4845833336,"Akhuryan":1919260.1377500005,"Araratyan":2003122.8992500002,"Southern":1462769.7795333334,"Sevan":316341.91600000014,"Hrazdan":8197257.825043334},"dataDataWaterDischarge":{"Northern":2346916.329733333,"Akhuryan":1097115.0716666672,"Araratyan":32882176.07858333,"Southern":27147504.485666666,"Sevan":236070.48699999994,"Hrazdan":7030228.104116667}},"2021":{"permitsQuantity":{"Northern":258,"Akhuryan":462,"Araratyan":372,"Southern":271,"Sevan":191,"Hrazdan":884},"dataWaterIntakeQuantity":{"Northern":2613840.164000002,"Akhuryan":3781084.842083332,"Araratyan":2534101.0844166665,"Southern":2927493.200533333,"Sevan":368368.62783333333,"Hrazdan":9473363.512151653},"dataDataWaterDischarge":{"Northern":2348626.6959833335,"Akhuryan":1106832.3336033332,"Araratyan":11754099.693833334,"Southern":28628765.894,"Sevan":273272.5548333333,"Hrazdan":6595764.638713328}},"2022":{"permitsQuantity":{"Northern":268,"Akhuryan":450,"Araratyan":346,"Southern":259,"Sevan":147,"Hrazdan":801},"dataWaterIntakeQuantity":{"Northern":2615815.7660000003,"Akhuryan":3958897.3756499966,"Araratyan":2561950.45175,"Southern":2941642.896108333,"Sevan":343032.59058333334,"Hrazdan":8868521.402559996},"dataDataWaterDischarge":{"Northern":2350023.6445666687,"Akhuryan":1213608.8352033338,"Araratyan":1162717.713666667,"Southern":28668651.978083327,"Sevan":255908.29699999996,"Hrazdan":5876440.318846664}},"2023":{"permitsQuantity":{"Northern":248,"Akhuryan":519,"Araratyan":395,"Southern":245,"Sevan":154,"Hrazdan":958},"dataWaterIntakeQuantity":{"Northern":2510942.7545833346,"Akhuryan":3100854.9326333296,"Araratyan":10527910.100733332,"Southern":3055017.786533334,"Sevan":351021.49183333345,"Hrazdan":7634957.877779991},"dataDataWaterDischarge":{"Northern":2201588.137333336,"Akhuryan":1106494.1016366666,"Araratyan":9145851.538800003,"Southern":28666111.21599999,"Sevan":258825.1833333333,"Hrazdan":6114406.059299997}},"2024":{"permitsQuantity":{"Northern":264,"Akhuryan":495,"Araratyan":392,"Southern":315,"Sevan":156,"Hrazdan":991},"dataWaterIntakeQuantity":{"Northern":2445215.923666669,"Akhuryan":2237707.7471499993,"Araratyan":10374432.127899988,"Southern":5618343.364483335,"Sevan":334880.0915999999,"Hrazdan":6382100.977358329},"dataDataWaterDischarge":{"Northern":2152048.8250333345,"Akhuryan":770912.5401166665,"Araratyan":9109346.250966666,"Southern":30864022.998466656,"Sevan":243678.14531666666,"Hrazdan":5714171.552713328}}}')}}]);
//# sourceMappingURL=297.b5ac41fb.chunk.js.map