"use strict";(self.webpackChunkratebuzz=self.webpackChunkratebuzz||[]).push([[47,408,642],{42408:(o,e,t)=>{t.r(e),t.d(e,{addBase64UploadApi:()=>a,addUploadApi:()=>l,deleteUploadApi:()=>i});var n=t(77642);const l=o=>{const e=new FormData;return e.append("files",o),(0,n.default)({"Content-type":"application/x-www-form-urlencoded"}).post("/upload",e).then((o=>o)).catch((()=>null))},a=o=>(0,n.default)().post("/file-storage",o),i=o=>(0,n.default)().delete("/upload/files/".concat(null===o||void 0===o?void 0:o.id))},77642:(o,e,t)=>{t.r(e),t.d(e,{default:()=>s});var n=t(89379),l=t(79722),a=t(51210),i=t(86904),d=t(59915),r=t(92690);const s=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=l.A.create({baseURL:r.API_ROOT,headers:(0,n.A)({Authorization:(0,d.getAccessToken)()?"Bearer ".concat((0,d.getAccessToken)()):""},o)});return e.interceptors.response.use((o=>o),(o=>{const e=o.response;switch(e.status){case 404:window.location.pathname=a.default.notFound.pathname;break;case 403:window.location.pathname="/not-permitted"}var t,n,l,r,s,c,u;(401===e.status&&((0,d.emptyState)(),window.location.href="/sign-in"),e)&&i.A.error({message:"Error",description:(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.message)||void 0===n||null===(l=n[0])||void 0===l||null===(r=l.messages)||void 0===r||null===(s=r[0])||void 0===s?void 0:s.message)||"string"===typeof(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.message)&&(null===e||void 0===e||null===(u=e.data)||void 0===u?void 0:u.message)||"Something went wrong",maxCount:1,duration:0});throw o})),e}},76047:(o,e,t)=>{t.r(e),t.d(e,{convertFileUrl:()=>u,convertPrice:()=>m,defText:()=>s,formatPhone:()=>c,showConfirm:()=>p,uploadFile:()=>v});var n=t(89379),l=t(42408),a=t(96760),i=t(95808),d=t(70579);const{confirm:r}=i.Modal,s=function(o,e,t){var l;let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c="";return o?(c=o,t&&(c=null!==t&&void 0!==t&&t.onlyLocale?"$ ".concat(Number(o).toLocaleString()):"$ ".concat(Number(o).toLocaleString(void 0,{minimumFractionDigits:2})))):c=s?"":"-",(0,d.jsx)(i.Paragraph,(0,n.A)((0,n.A)({fz:18,mb:0,fw:400,color:null===a.colors||void 0===a.colors||null===(l=a.colors.text_colors)||void 0===l?void 0:l.yankees_blue},r),{},{children:c}))},c=o=>null===o||void 0===o?void 0:o.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"),u=o=>null!==o&&void 0!==o&&o.includes("https://")?o:"https://".concat(o),v=async(o,e,t)=>{t(!0);const a=await(0,l.addUploadApi)(o);if(t(!1),a){const o=null!==a&&void 0!==a&&a.data?null===a||void 0===a?void 0:a.data[0]:null,t=(0,n.A)((0,n.A)({},o),{},{url:u(null===o||void 0===o?void 0:o.url)});e((o=>Array.isArray(o)?[...o,t]:t))}return!1},p=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r((0,n.A)({icon:!1,onCancel(){},okText:"YES",cancelText:"NO",destroyOnClose:!0,maskClosable:!0,centered:!0},o))},m=o=>Number(o||0).toLocaleString(void 0,{minimumFractionDigits:2})}}]);
//# sourceMappingURL=47.5863087d.chunk.js.map