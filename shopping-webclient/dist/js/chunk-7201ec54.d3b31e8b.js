(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7201ec54"],{1455:function(e,t,r){"use strict";r("8061")},8061:function(e,t,r){},a9e0:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"confirmation-page"},[t("div",{staticClass:"page"},[t("div",[e.isReset?t("div",[t("h2",[e._v("Enter a new password")]),t("b-form-group",[t("b-form-input",{attrs:{id:"password",type:"password",name:"password",state:e.passwordState,placeholder:"Enter a password","aria-describedby":"passwordFeedback"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("b-form-invalid-feedback",{attrs:{id:"passwordFeedback"}},[e._v("Enter at least 7 characters.")])],1),t("b-form-group",[t("b-form-input",{attrs:{id:"confirmPassword",type:"password",name:"confirmPassword",state:e.confirmPasswordState,placeholder:"Re-enter the password","aria-describedby":"confirmPasswordFeedback"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),t("b-form-invalid-feedback",{attrs:{id:"confirmPasswordFeedback"}},[e._v("It should match the password entered.")])],1),t("b-button",{staticClass:"primary-button",on:{click:function(t){return e.resetPassword()}}},[e._v("Reset Password")])],1):t("div",[t("h2",[e._v("Re-enter your email for reset link")]),t("b-form-group",[t("b-form-input",{attrs:{id:"username",type:"email",name:"username",state:e.usernameState,placeholder:"Enter Email","aria-describedby":"usernameFeedback"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t("b-form-invalid-feedback",{attrs:{id:"usernameFeedback"}},[e._v("\n            Enter a valid email address\n          ")])],1),t("b-button",{staticClass:"primary-button",on:{click:function(t){return e.resetButtonClick()}}},[e._v("Resend Email")])],1)])])])},a=[],n=(r("96cf"),r("3b8d")),o=r("22b8"),i={name:"PasswordConfirmation",props:{token:{type:String,required:!0}},data:function(){return{isReset:!1,password:"",confirmPassword:"",username:""}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios({method:"get",url:o["a"].validateResetToken+this.token});case 3:t=e.sent,r=t.data,r&&r.responseData?(this.isReset=!0,this.$notify({group:"all",type:"success",text:"You can now change your password."})):this.$notify({group:"all",type:"warn",text:"Looks like you are a little too late. Please try resending the email."}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$notify({group:"all",type:"error",text:"There was an error fulfilling your request. Please try resending the reset information."});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{validEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},resetButtonClick:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.usernameState){e.next=12;break}return e.prev=1,e.next=4,this.$axios({method:"get",url:o["a"].forgotPassword+this.username});case 4:t=e.sent,r=t.data,r&&r.httpStatus&&this.$notify({group:"all",type:"success",text:"The email was just sent. Please check your email and follow the instructions."}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),this.$notify({group:"all",type:"error",text:"The email could not be sent right now. Please try again later"});case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),resetPassword:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.passwordState||!this.confirmPasswordState){e.next=12;break}return e.prev=1,e.next=4,this.$axios({method:"post",url:o["a"].resetPassword,data:{token:this.token,newPassword:this.password}});case 4:t=e.sent,r=t.data,r&&200===r.httpStatus&&r.responseData?(this.$notify({group:"all",type:"success",text:"You can now go ahead and login."}),this.$router.push("/")):(this.isReset=!1,this.password="",this.confirmPassword="",this.$notify({group:"all",type:"warn",text:"Looks like you are a little too late. Please try resending the email."})),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),this.$notify({group:"all",type:"error",text:"There was an error fulfilling your request. Please try resending the reset information."});case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}()},computed:{passwordState:function(){return 0===this.password.length?null:this.password.length>6},confirmPasswordState:function(){return 0===this.confirmPassword.length?null:this.confirmPassword===this.password},usernameState:function(){return 0===this.username.length?null:this.validEmail(this.username)}}},u=i,c=(r("1455"),r("2877")),d=Object(c["a"])(u,s,a,!1,null,"06d460bf",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7201ec54.d3b31e8b.js.map