(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4685],{31422:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/shopping-cart",function(){return a(18067)}])},56478:function(e,t,a){"use strict";var n=a(67294);a(11163);t.Z=function(){var e=(0,n.useState)(window.navigator.onLine),t=e[0],a=e[1],r=function(){a(window.navigator.onLine)};return(0,n.useEffect)((function(){return window.addEventListener("offline",r),window.addEventListener("online",r),function(){window.removeEventListener("offline",r),window.removeEventListener("online",r)}})),t}},18067:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=a(85893),r=a(67294),c=(a(19666),a(14416)),i=a(95848),s=a(41664),l=a.n(s),u=a(74562),o=a(21528),d=a(73981),m=a(83192),h=a(25654),p=a(25200),f=a(86152),x=a(47568),v=a(70655),j=a(46531);function N(){return(N=(0,x.Z)((function(){var e,t;return(0,v.__generator)(this,(function(a){switch(a.label){case 0:return e=JSON.stringify({cartId:""}),[4,j.Z.create("customer-cart/delete-cart-item",e)];case 1:return(t=a.sent())&&t.data&&1===t.data.status&&(0,p.jS)("success",t.data.message),[2]}}))}))).apply(this,arguments)}var g=a(25675),b=a.n(g);var y=(0,c.$j)((function(e){return e.cart,e.setting}))((function(e){var t=e.currency,a=(0,r.useState)(),s=a[0],x=a[1],v=(0,r.useState)(),j=(v[0],v[1]),g=(0,r.useState)(""),y=g[0],I=g[1],k=(0,r.useState)(!1),S=k[0],w=k[1],E=(0,r.useState)(!0),T=(E[0],E[1]),q=(0,c.v9)((function(e){return e.cart.removeproduct})),C=(0,c.v9)((function(e){return e.cart.addproduct})),_=(0,c.v9)((function(e){return e.cart.increment})),L=(0,c.v9)((function(e){return e.cart.decrement})),O=(0,c.I0)(),V=(0,m.useTranslation)("common").t;(0,c.v9)((function(e){return e.palette.currentColor})),(0,r.useEffect)((function(){x(JSON.parse(localStorage.getItem("cartItem"))),T(!1),J()}),[C,q,_,L]),(0,r.useEffect)((function(){localStorage.getItem("spurtToken")&&w(!0)}),[]);var J=function(){var e=JSON.parse(localStorage.getItem("cartItem")),t=0,a=0;e&&e.forEach((function(e){t=JSON.parse(e.price)*e.quantity+a,a=t})),I(a)},X=function(){localStorage.setItem("cartItem",JSON.stringify([])),S&&function(){N.apply(this,arguments)}(),0==S&&(0,p.jS)("success","Successfully cleared your cart"),O((0,i.jX)(1))};return(0,n.jsx)("div",{className:"cart-container",children:s&&0!==s.length?(0,n.jsxs)("div",{className:"cart-container-main",children:[(0,n.jsxs)("h3",{children:[V("ItemsinCart"),"- ",function(){var e=0,t=0;return s&&s.map((function(a){t=e+a.quantity,e=t})),e}()]}),(0,n.jsxs)("div",{className:"cart-table-container",children:[(0,n.jsxs)("div",{className:"cart-table-header",children:[(0,n.jsx)("div",{className:"cart-table-product-header",children:V("product")}),(0,n.jsx)("div",{className:"cart-table-productName-header"}),(0,n.jsx)("div",{className:"cart-table-price-header",children:V("price")}),(0,n.jsx)("div",{className:"cart-table-quantity-header",children:V("quantity")}),(0,n.jsx)("div",{className:"cart-table-subtotal-header",children:V("subtotal")}),(0,n.jsx)("div",{className:"cart-table-cell-close",children:(0,n.jsx)("div",{className:"cart-close-button-container",children:(0,n.jsx)("button",{onClick:function(e){return X()},children:V("ClearAll")})})})]}),s&&s.map((function(e,a){return(0,n.jsxs)("div",{className:"cart-table-row-container",children:[(0,n.jsx)("div",{className:"cart-table-product-header",children:(0,n.jsx)(b(),{src:e.productImage&&e.productImage[0]&&"/"!==e.productImage[0].containerName?u.sQ+"?path="+e.productImage[0].containerName+"&name="+e.productImage[0].image+"&width=400&height=200":"/static/img/no-image.png",width:68,height:68,objectFit:"contain",layout:"responsive",placeholder:"blur",blurDataURL:"/static/img/no-image.png"})}),(0,n.jsxs)("div",{className:"cart-table-productName-header",children:[(0,n.jsx)("a",{children:e.name}),(0,n.jsxs)("p",{children:["SKU "+e.skuName," ",(0,n.jsx)("span",{style:{marginLeft:"20px"},children:e.variantName})]})]}),(0,n.jsxs)("div",{className:"cart-table-price-header",children:[t?t.symbol:"$"," ",""!==e.flag&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,f.x)((0,h.k)(e.pricerefer,e.taxType,e.taxValue,""))]}),""===e.flag&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,f.x)((0,h.k)(e.price,e.taxType,e.taxValue,""))]})]}),(0,n.jsx)("div",{className:"cart-table-quantity-header",children:(0,n.jsxs)("div",{className:"custom-product-box",children:[(0,n.jsx)("button",{onClick:function(t){return function(e){if(1!==e.quantity){(0,o.X1)(e),O((0,i.WG)(e)),O((0,i.jX)(1));var t=JSON.parse(localStorage.getItem("cartItem")).find((function(t){return t.productId===e.productId}));S&&(""===e.flag?(0,d.kL)(e.productId,(0,h.k)(e.price,e.taxType,e.taxValue,""),t.quantity,"","",j,e.skuName,"",e.variantId,e.variantName):(0,d.kL)(e.productId,(0,h.k)(e.pricerefer,e.taxType,e.taxValue,""),t.quantity,"","",j,e.skuName,"",e.variantId,e.variantName))}else S&&(0,d.tT)(e.productId,e.price,"",e.skuName),(0,o.Ee)(e),O((0,i.cl)(e))}(e)},children:"-"}),(0,n.jsx)("span",{children:e.quantity}),(0,n.jsx)("button",{onClick:function(t){return function(e){if((0,o.g1)(e),O((0,i.zb)(e)),O((0,i.jX)(1)),e.maxQuantityAllowedCart!==e.quantity){var t=JSON.parse(localStorage.getItem("cartItem")).find((function(t){return t.productId===e.productId}));S&&(""===e.flag?(0,d.kL)(e.productId,(0,h.k)(e.price,e.taxType,e.taxValue,""),t.quantity,"","",j,e.skuName,"",e.variantId,e.variantName):(0,d.kL)(e.productId,(0,h.k)(e.pricerefer,e.taxType,e.taxValue,""),t.quantity,"","",j,e.skuName,"",e.variantId,e.variantName))}}(e)},children:"+"})]})}),(0,n.jsxs)("div",{className:"cart-table-subtotal-header",children:[" ",t?t.symbol:"$"," ",""!==e.flag&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,f.x)(e.quantity*(0,h.k)(e.pricerefer,e.taxType,e.taxValue,""))]}),""===e.flag&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,f.x)(e.quantity*(0,h.k)(e.price,e.taxType,e.taxValue,""))]})]}),(0,n.jsx)("div",{className:"cart-table-cell-close",onClick:function(t){return function(e,t,a,n){e.preventDefault(),S&&(0,d.tT)(a.productId,a.price,"",a.skuName,a.variantId,a.variantName),(0,o.Ee)(a),O((0,i.cl)(a))}(t,e.productId,e,e.optionIdArrayValue)},children:(0,n.jsx)("div",{className:"cart-table-close-contain",children:"x"})})]},a)})),(0,n.jsxs)("div",{className:"cart-table-footer-button",children:[(0,n.jsx)("div",{className:"cart-table-continue-button",children:(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)("a",{children:V("Continue")})})}),(0,n.jsx)("div",{className:"cart-button-hidden-contain"}),(0,n.jsx)("div",{className:"cart-button-hidden-contain",children:(0,n.jsxs)("div",{className:"cart-content-grand",children:[V("GrandTotal")," : ",t?t.symbol:"$ "," ",(0,f.x)(y)]})}),(0,n.jsx)("div",{className:"cart-table-cell-close",children:(0,n.jsx)(l(),{href:"/account/checkout",children:(0,n.jsxs)("a",{children:[" ",(0,n.jsx)("span",{style:{marginRight:"5px"},children:(0,n.jsx)("img",{src:"/static/img/checkout.svg"})}),"  ",V("cart.Checkout")]})})})]})]})]}):(0,n.jsxs)("div",{className:"sc-noitem-container",children:[(0,n.jsx)("h4",{children:V("YOUHAVENOITEMSCART")}),(0,n.jsx)(l(),{href:"/",children:(0,n.jsxs)("a",{children:[V("ContinueShopping")," "]})})]})})})),I=a(56478),k=a(11163),S=a.n(k),w=function(){var e=(0,I.Z)();(0,r.useEffect)((function(){!1===e&&S().push("/network-error")}),[]);return(0,n.jsx)("div",{className:"site-content",children:(0,n.jsx)("div",{className:"ps-page--simple",children:(0,n.jsx)(y,{})})})}}},function(e){e.O(0,[9774,2888,179],(function(){return t=31422,e(e.s=t);var t}));var t=e.O();_N_E=t}]);