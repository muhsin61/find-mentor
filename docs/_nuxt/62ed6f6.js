(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{290:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("04818b40",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(290)},293:function(t,e,n){(e=n(60)(!1)).push([t.i,".profile{list-style:none;display:flex;flex-direction:column;align-items:center}.avatar,.links,.name{margin-top:15px}.name{color:#fff;font-size:27px}.button{padding:10px 30px;border:2px solid transparent;border-radius:4px;color:#fff}.twitter{background-color:#00acee}.github{background-color:#24292e}.linkedin{background-color:#0e76a8}.avatar{width:250px;height:250px;border-radius:50%}.text{color:#fff;font-size:17px;margin-top:10px}",""]),t.exports=e},294:function(t,e,n){"use strict";n.r(e);var r={props:{slug:{type:String,default:""},mentor:{type:Boolean,default:!1},name:{type:String,default:""},twitter:{type:String,default:""},github:{type:String,default:""},linkedin:{type:String,default:""},avatar:{type:String,default:""},interests:{type:String,default:""},goals:{type:String,default:""}}},o=(n(292),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("ul",{staticClass:"profile"},[t.avatar.length?n("li",[n("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:t.name}})]):t._e(),t._v(" "),t.name?n("li",{staticClass:"name"},[t._v("\n        "+t._s(t.name)+"\n      ")]):t._e(),t._v(" "),t.twitter.length?n("li",{staticClass:"links"},[n("a",{attrs:{href:t.twitter,target:"_blank"}},[n("button",{staticClass:"button twitter"},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"],color:"white"}}),t._v("\n            Twitter\n          ")],1)])]):t._e(),t._v(" "),t.github.length?n("li",{staticClass:"links"},[n("a",{attrs:{href:t.github,target:"_blank"}},[n("button",{staticClass:"button github"},[n("font-awesome-icon",{attrs:{icon:["fab","github"],color:"white"}}),t._v("\n            GitHub")],1)])]):t._e(),t._v(" "),t.linkedin.length?n("li",{staticClass:"links"},[n("a",{attrs:{href:t.linkedin,target:"_blank"}},[n("button",{staticClass:"button linkedin"},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],color:"white"}}),t._v("\n            LinkedIn")],1)])]):t._e(),t._v(" "),t.interests&&t.interests.length?n("li",{staticClass:"text"},[t._v("\n        Interests: "+t._s(t.interests)+"\n      ")]):t._e(),t._v(" "),t.goals&&t.goals.length?n("li",{staticClass:"text"},[t._v("\n        Goals: "+t._s(t.goals)+"\n      ")]):t._e(),t._v(" "),n("li",{staticClass:"text"},[n("a",{attrs:{href:"https://findmentor.network/"+(t.mentor?"mentor/":"mentee/")+t.slug,target:"_blank",rel:"noopener noreferrer"}},[n("qrcode",{attrs:{value:"https://findmentor.network/"+(t.mentor?"mentor/":"mentee/")+t.slug,options:{width:200}}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,n){"use strict";n.r(e);var r=n(39),o=(n(51),n(20)),l={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,l=t.error,e.next=3,n("mentees").where({slug:{$eq:o.slug}}).fetch();case 3:if(c=e.sent,d=Object(r.a)(c,1),f=d[0]){e.next=8;break}return e.abrupt("return",l({statusCode:404,message:"Not found"}));case 8:return e.abrupt("return",{doc:f});case 9:case"end":return e.stop()}}),e)})))()}},c=n(52),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Person",{attrs:{slug:t.doc.slug,mentor:!1,name:t.doc.name,twitter:t.doc.twitter_handle,linkedin:t.doc.linkedin,github:t.doc.github,avatar:t.doc.avatar,interests:t.doc.interests,goals:t.doc.goals}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Person:n(294).default})}}]);