(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2348],{76616:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/review/[rid]",function(){return t(63600)}])},24578:function(n,e,t){"use strict";var r=t(85893),i=(t(67294),t(41664)),u=t.n(i);e.Z=function(n){var e=n.breacrumb,t=n.layout;return(0,r.jsx)("div",{className:"ps-breadcrumb",children:(0,r.jsx)("div",{className:"fullwidth"===t?"ps-container":"container",children:(0,r.jsx)("ul",{className:"breadcrumb",children:e&&e.map((function(n){return n.url?(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:n.url,children:(0,r.jsx)("a",{children:n.text})})},n.text):(0,r.jsx)("li",{children:n.text},n.text)}))})})})}},56478:function(n,e,t){"use strict";var r=t(67294);t(11163);e.Z=function(){var n=(0,r.useState)(window.navigator.onLine),e=n[0],t=n[1],i=function(){t(window.navigator.onLine)};return(0,r.useEffect)((function(){return window.addEventListener("offline",i),window.addEventListener("online",i),function(){window.removeEventListener("offline",i),window.removeEventListener("online",i)}})),e}},63600:function(n,e,t){"use strict";t.r(e);var r=t(47568),i=t(70655),u=t(85893),c=t(67294),o=t(19666),s=t(24578),a=t(11163),d=t.n(a),f=t(56478),l=function(){var n=(0,a.useRouter)(),e=(0,f.Z)(),t=n.query.rid;(0,c.useEffect)((function(){!1===e&&d().push("/network-error")}),[]);return(0,u.jsx)("div",{className:"site-content",children:(0,u.jsxs)("div",{className:"ps-page--my-account",children:[(0,u.jsx)("div",{style:{backgroundColor:"#f1f1f1",padding:"16px 0px"},children:(0,u.jsx)(s.Z,{breacrumb:[{text:"Account"},{text:"Order History"},{text:"Order Details"},{text:"Review this product"}]})}),o.d.SpurtRatingAndReviewFeedback&&(0,u.jsx)(o.d.SpurtRatingAndReviewFeedback,{orderId:t})]})})};e.default=l,l.getInitialProps=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){return[2,{query:n.query}]}))}));return function(e){return n.apply(this,arguments)}}()}},function(n){n.O(0,[9774,2888,179],(function(){return e=76616,n(n.s=e);var e}));var e=n.O();_N_E=e}]);