(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0f10":function(t,e,r){},"2c31":function(t,e,r){},"52c4":function(t){t.exports=JSON.parse('{"_id":"","store":"","brand":"","name":"","item_url":"","category":"","subcategory":"","picture_urls":[],"price":{},"custom_attributes":{},"details_html":"","count":0}')},5742:function(t,e,r){"use strict";r("0f10")},"591e":function(t,e,r){t.exports=r.p+"img/sephora-logo.359ab4ef.png"},7287:function(t,e,r){t.exports=r.p+"img/transparent-logo.eec69f5f.png"},"78dd":function(t,e,r){"use strict";r("2c31")},"7b07":function(t,e,r){"use strict";r("9fb1")},9880:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[t._v("\n  FAQs under construction\n")])},a=[],s={},o=s,c=r("2877"),i=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=i.exports},"9fb1":function(t,e,r){},aaff:function(t,e,r){t.exports=r.p+"img/amazon-logo.15a1c610.png"},b8fa:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[t._v("\n  Contact page\n")])},a=[],s={},o=s,c=r("2877"),i=Object(c["a"])(o,n,a,!1,null,null,null);e["default"]=i.exports},bff7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"vendor"}},[e("div",{staticClass:"vendor-page-bg"},[e("vendor-search",{attrs:{vendor:t.vendorName},on:{searchClicked:t.searchForProduct}})],1),e("div",{attrs:{id:"searchResult"}},[t.searchResult.length>0?e("search-result-view",{attrs:{data:t.searchResult}}):t._e()],1)])},a=[],s=(r("ac6a"),r("96cf"),r("3b8d")),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"vendor-component"},[e("div",{staticClass:"main-view"},[e("div",{staticClass:"main-block"},[e("img",{staticClass:"vendor-image",attrs:{src:t.getPath(),alt:t.vendor,width:"80%"}}),e("b-row",[e("b-col",{staticClass:"low-side-padding",attrs:{md:"9"}},[e("b-form-input",{staticClass:"vendor-search-input",attrs:{type:"text",placeholder:"Search for an item on "+t.vendor+". E.g. Fossil Watch, Ray Ban Sunglasses"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchForProduct()}},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}})],1),e("b-col",{staticClass:"low-side-padding",attrs:{md:"3"}},[e("b-button",{staticClass:"matching-size dark-button",on:{click:function(e){return t.searchForProduct()}}},[t._v("Search")])],1)],1)],1)])])},c=[],i={name:"Vendor",props:{vendor:{type:String,required:!0}},data:function(){return{searchTerm:""}},methods:{getPath:function(){return r("f992")("./".concat(this.vendor,"-logo.png"))},searchForProduct:function(){this.$emit("searchClicked",this.searchTerm)}}},u=i,l=(r("5742"),r("2877")),d=Object(l["a"])(u,o,c,!1,null,"38978fda",null),p=d.exports,h=(r("7f7f"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"search-result"}},[e("div",{staticClass:"search-result-view"},[e("h2",[t._v("Search Results for Fossil Watches")]),e("div",{staticClass:"result-view"},t._l(t.data,(function(r,n){return e("div",{key:n,staticClass:"product-card"},[r.picture_urls.length>0?e("div",{staticClass:"img-cls",style:t.getPictureStyle(r.picture_urls[0])}):e("p",{staticStyle:{"font-size":"5em",padding:"10px 0px","text-align":"center",color:"#bdbdbd"}},[e("font-awesome-icon",{attrs:{icon:"shopping-bag",width:"100%"}})],1),e("p",[e("strong",[t._v(t._s(r.name))])]),e("p",[t._v(t._s(r.price))]),e("b-button",{staticClass:"primary-button add-cart-button",on:{click:function(e){return t.addToCart(r)}}},[t._v("Add to Cart")])],1)})),0)])])}),f=[],v={name:"SearchResultView",props:{data:{type:Array,required:!0}},methods:{getPictureStyle:function(t){return{"background-image":"url(".concat(t,")"),"background-size":"cover",width:"100%",height:"250px","margin-bottom":"10px"}},addToCart:function(t){this.$store.dispatch("cartStore/addToTheCart",t)}}},g=v,m=(r("7b07"),Object(l["a"])(g,h,f,!1,null,"0b457ab8",null)),b=m.exports,y=r("22b8"),w=r("52c4"),C={name:"VendorPage",props:{vendorName:{type:String,required:!0}},components:{VendorSearch:p,SearchResultView:b},data:function(){return{vendorMap:{macys:"Macy's",amazon:"Amazon",sephora:"Sephora"},searchResult:[]}},methods:{searchForProduct:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios({url:y["a"].searchProduct,method:"post",data:{store:this.vendorMap[this.vendorName],category:"Make-Up"}});case 2:e=t.sent,e&&(this.searchResult.splice(0,this.searchResult.length),n=[],e.data.forEach((function(t){n.push(_.assign(w,t))})),(r=this.searchResult).push.apply(r,n),this.$scrollTo("#searchResult",1e3,{offset:-80}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},x=C,k=(r("78dd"),Object(l["a"])(x,n,a,!1,null,null,null));e["default"]=k.exports},c2ce:function(t,e,r){t.exports=r.p+"img/macys-logo.cf43c86d.png"},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],s=r("2877"),o={},c=Object(s["a"])(o,n,a,!1,null,null,null);e["default"]=c.exports},f992:function(t,e,r){var n={"./amazon-logo.png":"aaff","./macys-logo.png":"c2ce","./sephora-logo.png":"591e","./transparent-logo.png":"7287"};function a(t){var e=s(t);return r(e)}function s(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="f992"}}]);
//# sourceMappingURL=about.6150c2b4.js.map