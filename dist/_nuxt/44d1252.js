(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{331:function(t,e,n){var content=n(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("7f9e5bf2",content,!0,{sourceMap:!1})},332:function(t,e,n){var content=n(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("4881215c",content,!0,{sourceMap:!1})},333:function(t,e,n){var content=n(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("fd627344",content,!0,{sourceMap:!1})},334:function(t,e,n){var content=n(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("4d2d5616",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n.r(e);var o={props:{isHover:{type:Boolean,default:!1}}},r=(n(341),n(30)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary border rounded-0 mt-5",class:{"contact-button-hover":this.isHover},attrs:{id:"contact-main-button",type:"button"}},[this._v("\n  Kontaktieren Sie Uns\n")])}),[],!1,null,"055ecb64",null);e.default=component.exports},336:function(t,e,n){"use strict";n.r(e);n(8),n(21);var o={props:{opened:{type:Boolean,default:!1}},data:function(){return{form:{email:"",name:"",anliegen:null},anliegenAuswahl:[{text:"Auswählen",value:null},"Webseite","Mobile App entwickeln","Desktopanwendung erstellen","Modernisierung","E-Commerce","Social Media","Anderes"],show:!0}},methods:{onSubmit:function(t){t.preventDefault(),this.$axios.post("https://www.algoinvest.online/mailapi/sendmessage",{msg:{sender:this.form.email,subject:this.form.anliegen,text:"Name: ".concat(this.form.name,"\n\nMail: ").concat(this.form.email,"\n\nAnliegen: \n\n").concat(this.form.text)}}),this.$bvToast.toast("Vielen Dank! Wir werden in Kürze mit Ihnen Kontakt aufnehmen.",{title:"Ihre Nachricht wurde gesendet.",toaster:"b-toaster-bottom-center",solid:!0,appendToast:!1}),this.$bvModal.hide("modal-center")},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.anliegen=null,this.form.text="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{id:"modal-center",centered:"",title:"Kontaktformular",size:"lg","hide-footer":""}},[t.show?n("b-form",{attrs:{method:"POST"},on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1",description:"Wir teilen deine Email mit niemandem."}},[n("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Email Adresse eingeben.."},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-2",label:"Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Namen eingeben.."},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-3",label:"Thema:","label-for":"input-3"}},[n("b-form-select",{attrs:{id:"input-3",options:t.anliegenAuswahl,required:""},model:{value:t.form.anliegen,callback:function(e){t.$set(t.form,"anliegen",e)},expression:"form.anliegen"}}),t._v(" "),n("b-form-textarea",{staticClass:"mt-3",attrs:{id:"input-4",placeholder:"Nachricht..",rows:"5","max-rows":"10"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v("Senden")])],1):t._e()],1)],1)}),[],!1,null,"17a2c4e1",null);e.default=component.exports},337:function(t,e,n){"use strict";n.r(e);n(339);var o=n(30),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hero-content"}},[e("h1",{attrs:{id:"main-quote"}},[this._v("\n    IT-Service & Anwendungslösungen für Ihre Unternehmung\n  ")]),this._v(" "),e("h2",{attrs:{id:"main-quote-1"}},[this._v("\n    Kontaktieren Sie uns noch heute um Ihre Ideen Wirklichkeit werden zu\n    lassen!\n  ")])])}],!1,null,"a1d3f8ba",null);e.default=component.exports},338:function(t,e,n){"use strict";n.r(e);n(343);var o=n(30),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"demo-canvas",width:"100%",height:"80vh"}})}),[],!1,null,"424e90de",null);e.default=component.exports},339:function(t,e,n){"use strict";n(331)},340:function(t,e,n){(e=n(49)(!1)).push([t.i,"#hero-content[data-v-a1d3f8ba]{margin-right:auto;margin-left:auto;max-width:700px;border-radius:25px;box-shadow:0 0 40px;padding:15px;background:rgba(0,0,0,.5);margin-bottom:20px}#main-quote[data-v-a1d3f8ba]{font-size:30px;font-weight:700;text-align:center}@media(max-width:520px){#main-quote[data-v-a1d3f8ba]{font-size:24px}}@media(min-width:730px){#main-quote[data-v-a1d3f8ba]{font-size:60px}}@media(min-width:956px){#main-quote[data-v-a1d3f8ba]{font-size:40px;font-weight:700}}#main-quote-1[data-v-a1d3f8ba]{text-transform:none;font-size:20px;margin-top:50px;font-weight:700;text-align:center}@media(max-width:520px){#main-quote-1[data-v-a1d3f8ba]{font-size:18px}}@media(min-width:730px){#main-quote-1[data-v-a1d3f8ba]{font-size:30px}}@media(min-width:956px){#main-quote-1[data-v-a1d3f8ba]{font-size:50px}}",""]),t.exports=e},341:function(t,e,n){"use strict";n(332)},342:function(t,e,n){(e=n(49)(!1)).push([t.i,"#contact-button[data-v-055ecb64]{margin-right:7%;margin-left:7%}#contact-main-button[data-v-055ecb64]{position:relative;display:block;border:2px solid #fff!important;background:none;font-size:20px;margin:0 auto;border-radius:20px!important;z-index:1;background:rgba(0,0,0,.5)}#contact-main-button[data-v-055ecb64]:hover{background:rgba(0,123,255,.678)!important}#contact-main-button[data-v-055ecb64]:focus{box-shadow:none}@media(min-width:956px){#contact-main-button[data-v-055ecb64]{bottom:2%}}",""]),t.exports=e},343:function(t,e,n){"use strict";n(333)},344:function(t,e,n){(e=n(49)(!1)).push([t.i,"#demo-canvas[data-v-424e90de]{display:block;position:absolute;top:0;z-index:0;width:100%}",""]),t.exports=e},345:function(t,e,n){"use strict";n(334)},346:function(t,e,n){var o=n(49),r=n(160),l=n(347),c=n(348);e=o(!1);var d=r(l),m=r(c);e.push([t.i,"#pageContent[data-v-0c72ddda]{width:100%;min-height:800px;background:url("+d+") 50%/cover no-repeat;background-size:auto;height:100vh;color:#fff!important;margin-top:-11vh;padding-top:33vh}@media (min-width:625px){#pageContent[data-v-0c72ddda]{background:url("+m+") 50%/cover no-repeat;margin-top:-13vh}}",""]),t.exports=e},347:function(t,e,n){t.exports=n.p+"img/galaxy-11098_m.fc3e394.jpg"},348:function(t,e,n){t.exports=n.p+"img/galaxy-11098.520ce13.jpg"},356:function(t,e,n){"use strict";n.r(e);var o=n(337),r=n(335),l=n(336),c=n(338),d={components:{HeroContent:o.default,ContactButton:r.default,KontaktPopup:l.default,StarAnimation:c.default},data:function(){return{isHover:!1}},methods:{openContact:function(){console.log("clicked"),this.$refs.kontaktpopup.$bvModal.show("modal-center")}}},m=(n(345),n(30)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-capitalize text-left",attrs:{id:"pageContent"}},[n("HeroContent"),t._v(" "),n("ContactButton",{attrs:{"is-hover":t.isHover},on:{mouseover:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1}},nativeOn:{click:function(e){return t.openContact(e)}}}),t._v(" "),n("KontaktPopup",{ref:"kontaktpopup"}),t._v(" "),n("StarAnimation")],1)}),[],!1,null,"0c72ddda",null);e.default=component.exports;installComponents(component,{HeroContent:n(337).default,ContactButton:n(335).default,KontaktPopup:n(336).default,StarAnimation:n(338).default})}}]);