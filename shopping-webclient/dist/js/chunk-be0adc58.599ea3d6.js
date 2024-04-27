(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be0adc58"],{"0d95":function(t,e,r){"use strict";r("ac6a"),r("456d"),r("7f7f");var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"single-order-item"}},[t.isDelivered(t.itemStatusDeet)?e("div",[e("h6",[e("strong",[t._v("Delivered on "+t._s(t._f("formatDate")(t.itemStatusDeet.delivery.delivery_date)))])]),e("br")]):t._e(),e("div",{staticClass:"item-desc"},[e("b-row",[e("b-col",{attrs:{md:"2"}},[e("img",{staticClass:"item-img",attrs:{src:"".concat(t.s3BucketUrl,"/").concat(t.item.product._id),alt:"",crossorigin:"anonymous"}})]),e("b-col",{attrs:{md:"7"}},[e("div",[t._v("\n          "+t._s(t.item.product.name)+"\n          "),e("br"),e("br"),e("div",{staticClass:"info"},[e("strong",[t._v("$ "+t._s(t.item.aggregatedPrice.amount))]),e("br"),e("span",{staticClass:"info"},[t._v("Sold by: ")]),t._v("  \n            "),e("strong",[t._v(t._s(t.item.product.store))]),e("p",[e("span",{staticClass:"info"},[t._v("Quantity:")]),t._v("   \n              "),e("strong",[t._v(t._s(t.item.counts))]),e("br")]),Object.keys(t.item.customizations).length>0?e("div",[e("span",{staticClass:"info"},[e("strong",[t._v("Customizations")])]),t._l(Object.keys(t.item.customizations),(function(r,n){return e("p",{key:n},[e("span",{staticClass:"info"},[t._v(t._s(r))]),t._v("   \n                "),e("strong",[t._v(t._s(t.item.customizations[r]))])])}))],2):t._e()])])]),e("b-col",{attrs:{md:"3"}},[e("div",{staticClass:"info"},[t._v("\n          Due to the unconventional shipping methods, we cannot process direct returns on international orders.\n          If there is any severe damage to the product, then please contact us. "),e("br"),e("br"),e("a",{attrs:{href:"mailto:support@veniqa.com"}},[t._v("support@veniqa.com")])])])],1)],1)])},s=[],a=r("c1df"),i=r.n(a),o={name:"SingleOrderItem",props:{item:{type:Object,required:!0}},data:function(){return{}},filters:{formatDate:function(t){return i()(t).format("MMMM Do, YYYY")}},methods:{isDelivered:function(t){return t&&"DELIVERED"===t.status}},computed:{itemStatusDeet:function(){return this.item.order_line_level_processing_details},s3BucketUrl:function(){return"https://s3.amazonaws.com/veniqa-catalog-images/permanent-thumbnails"}}},c=o,d=(r("6ada"),r("2877")),l=Object(d["a"])(c,n,s,!1,null,null,null);e["a"]=l.exports},4558:function(t,e,r){"use strict";r.r(e);r("7f7f");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"align-left",attrs:{id:"order-view"}},[e("div",{staticClass:"space"}),t._v("\n   \n  "),e("h2",[t._v("Your orders")]),e("b-tabs",[e("template",{slot:"tabs"},t._l(t.tabs,(function(r,n){return e("b-nav-item",{key:n,attrs:{active:t.activeTab===r.key},on:{click:function(e){return t.tabSelected(r.key)}}},[t._v(t._s(r.name))])})),1)],2),e("div",{staticClass:"order-list"},[t._l(t.filteredOrders,(function(t,r){return e("div",{key:r},[e("single-order",{attrs:{order:t}})],1)})),t.filteredOrders.length<=0?e("div",{staticClass:"empty-info"},[e("p",[t._v("No orders are in this status.")])]):t._e()],2)],1)},s=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=(r("96cf"),r("3b8d")),o=r("2f62"),c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"single-order"}},[e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{staticClass:"info",attrs:{slot:"header"},slot:"header"},[e("b-row",[e("b-col",[e("div",[e("strong",[t._v("Order #")]),t._v(" "+t._s(t.order._id)+"\n            "),e("br"),e("strong",[t._v("Order placed on")]),t._v(" "+t._s(t._f("formattedDate")(t.order.auditLog.createdOn))+"\n          ")])]),e("b-col",[e("div",{staticClass:"align-right"},[e("div",[t._v("\n            Status:\n            "),e("span",{class:{green:"CANCELLED"!=t.order.overall_status,red:"CANCELLED"===t.order.overall_status}},[e("strong",[t._v(t._s(t.order.overall_status))])])]),e("router-link",{attrs:{to:"/orders/".concat(t.order._id)}},[t._v("Order Details")])],1)])],1)],1),e("div",{staticClass:"order-body"},t._l(t.order.cart.items,(function(r,n){return e("div",{key:n},[e("single-order-item",{attrs:{item:r}}),n!=t.order.cart.items.length-1?e("hr"):t._e()],1)})),0)])],1)},d=[],l=r("c1df"),u=r.n(l),f=r("0d95"),v={name:"SingleOrder",props:{order:{type:Object,required:!0}},components:{SingleOrderItem:f["a"]},data:function(){return{}},filters:{formattedDate:function(t){return t?u()(t).format("MMMM Do, YYYY"):""}}},m=v,p=(r("f096"),r("2877")),b=Object(p["a"])(m,c,d,!1,null,null,null),g=b.exports;function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={name:"OrderView",components:{SingleOrder:g},data:function(){return{tabs:[{name:"Orders",key:"all"},{name:"Open Orders",key:"open"},{name:"Completed",key:"completed"},{name:"Cancelled",key:"cancelled"}],activeTab:"all"}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("orderStore/getOrderList","");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{tabSelected:function(t){this.activeTab=t}},computed:O(O({},Object(o["b"])({orders:"orderStore/orders"})),{},{filteredOrders:function(){return"open"===this.activeTab?_.filter(this.orders,(function(t){return"COMPLETED"!==t.overall_status&&"CANCELLED"!==t.overall_status})):"completed"===this.activeTab?_.filter(this.orders,(function(t){return"COMPLETED"===t.overall_status})):"cancelled"===this.activeTab?_.filter(this.orders,(function(t){return"CANCELLED"===t.overall_status})):this.orders}})},C=y,D=(r("4a33"),Object(p["a"])(C,n,s,!1,null,null,null));e["default"]=D.exports},"4a33":function(t,e,r){"use strict";r("b16f")},"506a":function(t,e,r){},"6ada":function(t,e,r){"use strict";r("b461")},b16f:function(t,e,r){},b461:function(t,e,r){},f096:function(t,e,r){"use strict";r("506a")}}]);
//# sourceMappingURL=chunk-be0adc58.599ea3d6.js.map