(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0a98":function(e,t,r){"use strict";var n=r("6438"),a=r.n(n);a.a},"0dac":function(e,t,r){"use strict";var n=r("5638"),a=r.n(n);a.a},"22de":function(e,t,r){"use strict";var n=r("8319"),a=r.n(n);a.a},"2b1b":function(e,t,r){"use strict";var n=r("a40c"),a=r.n(n);a.a},"2ffc":function(e,t,r){"use strict";var n=r("738f"),a=r.n(n);a.a},"4a45":function(e,t,r){"use strict";var n=r("a1d8"),a=r.n(n);a.a},"4ae3":function(e,t,r){},5638:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("034f"),r("2877")),o={},l=Object(i["a"])(o,a,s,!1,null,null,null),c=l.exports,u=r("5c96"),m=r.n(u);r("0fae");n["default"].use(m.a);var d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",{},[r("h1",{attrs:{id:"title"}},[e._v(e._s(e.title))]),r("el-dropdown",{on:{command:e.handleCommand}},[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px",color:"#FFFFFF"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",{attrs:{command:"logOut"}},[e._v("注销")])],1)],1),r("span",[e._v("欢迎您 "+e._s(this.userName))])],1),r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{open:"[1]",router:"","default-active":e.$router.path,collapse:!1}},[r("el-menu-item",{attrs:{index:"/home"}},[r("i",{staticClass:"el-icon-menu"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-s-order"}),e._v("版本管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("软件")]),r("el-menu-item",{attrs:{index:"/softWare/create"}},[e._v("上传软件")]),r("el-menu-item",{attrs:{index:"/softWare/list"}},[e._v("软件列表")])],2)],2),r("el-submenu",{staticClass:"tagMan",attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-s-data"}),e._v("标签管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("标签")]),r("el-menu-item",{staticClass:"tagCreate",attrs:{index:"/tag/create"}},[e._v("创建标签")]),r("el-menu-item",{attrs:{index:"/tag/list"}},[e._v("项目标签")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-s-custom"}),e._v("用户管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("用户")]),r("el-menu-item",{staticClass:"userCreate",attrs:{index:"/user/create"}},[e._v("创建用户")]),r("el-menu-item",{attrs:{index:"/user/list"}},[e._v("用户列表")])],2)],2),r("el-submenu",{attrs:{index:"4"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-suitcase-1"}),e._v("工具 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("交换机")]),r("el-menu-item",{staticClass:"excel2xml",attrs:{index:"/tool/excel2xml"}},[e._v("Excel2XML")]),r("el-menu-item",{staticClass:"xml2excel",attrs:{index:"/tool/xml2excel"}},[e._v("XML2Excel")])],2)],2)],1)],1),r("el-container",[r("el-main",[r("router-view")],1)],1)],1)],1)},h=[],f={name:"McCreate",data:function(){return{userName:"",title:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TITLE||"anyTitle",isCollapse:!0}},methods:{getUser:function(){this.userName=localStorage.userName},handleCommand:function(e){"logOut"==e&&(localStorage.clear(),console.log(localStorage.token),this.$router.push("/login"),this.$message({type:"success",message:"退出登录成功"}))}},created:function(){this.getUser()}},g=f,v=(r("22de"),Object(i["a"])(g,p,h,!1,null,null,null)),x=v.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"softWare",attrs:{name:"createSoftWare"}},[r("h1",{attrs:{name:"title"}},[e._v(e._s(e.id?"编辑":"上传")+"软件:")]),r("el-form",{ref:"model",staticClass:"sendItem",attrs:{rules:e.rules,model:e.model,"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save("model")}}},[r("el-form-item",{attrs:{label:"版本号",prop:"versionNumber"}},[r("el-input",{attrs:{id:"versionNum",maxlength:"16",placeholder:"命名规则: 版本类型 版本号 主要特性;例如mc 1346 无key版"},model:{value:e.model.versionNumber,callback:function(t){e.$set(e.model,"versionNumber",t)},expression:"model.versionNumber"}})],1),r("el-form-item",{attrs:{label:"添加标签",prop:"parent"}},[r("el-select",{attrs:{"value-key":"model.parent._id",multiple:"",placeholder:"请选择"},model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.tagList,(function(e){return r("el-option",{key:e._id,attrs:{label:e.tagName,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"版本特性",prop:"versionFeatures"}},[r("vue-editor",{model:{value:e.model.versionFeatures,callback:function(t){e.$set(e.model,"versionFeatures",t)},expression:"model.versionFeatures"}})],1),r("el-form-item",{attrs:{label:"上传软件"}},[e.model.fileName?r("el-row",[r("el-link",{staticClass:"fileLink",attrs:{href:e.model.fileDir,target:"_blank"},nativeOn:{click:function(t){return e.count(t)}}},[e._v(e._s(e.model.fileName))]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.removeFile}})],1):e._e(),e.model.fileName?e._e():r("div",[r("el-upload",{staticClass:"file-upload",attrs:{action:e.$http.defaults.baseURL+"/upload","on-success":e.afterSuccess,"before-upload":e.handleProgress,data:e.fileData}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 格式不限，但是不超过100M ")])],1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"save",attrs:{type:"primary","native-type":"subumit"}},[e._v("保存")])],1)],1)],1)},w=[],_=(r("99af"),r("b0c0"),r("d3b7"),r("96cf"),r("5873")),y=r("bc3a"),R=r.n(y),C=R.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API||"/api",withCredentials:!0});C.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),C.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&ht.push("/login")),Promise.reject(e)}));var k=C,$=function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(k.get("/svgCaptcha"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},N=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.post("/user/login",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},S=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.get("rest/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},P=function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(k.get("rest/".concat(e,"/").concat(t)));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))},W=function(e,t,r){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(k.put("rest/".concat(e,"/").concat(t),r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},O=function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(k.post("rest/".concat(e),t));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))},E=function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(k.delete("rest/".concat(e,"/").concat(t)));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))},T=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.delete("deleteFile/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},j=function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(k.get("/download/switch/excel2xmlTemplate.xlsx"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},L=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.get("/findBlogTag/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},D=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.get("/search/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},F=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.post("/softWareInfo/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},z=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k.delete("/softWareInfo/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},I={name:"SoftWareCreate",props:{id:{}},data:function(){return{model:{fileName:""},tagList:[],fileData:{fileName:""},rules:{versionNumber:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],parent:[{type:"array",required:!0,message:"请选择关联项目",trigger:"blur"}],versionFeatures:[{required:!0,message:"请输入版本特性",trigger:"blur"}]}}},components:{VueEditor:_["a"]},methods:{fetchTag:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(S("tag"));case 2:e=t.sent,this.tagList=e.data;case 4:case"end":return t.stop()}}),null,this)},fetchEdit:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(P("softWare",this.id));case 2:e=t.sent,this.model=e.data,console.log(this.model),this.processTag();case 6:case"end":return t.stop()}}),null,this)},processTag:function(){console.log(this.model.parent);for(var e=[],t=0;t<this.model.parent.length;t++)e.push(this.model.parent[t]._id);this.model.parent=e},save:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$refs[e].validate());case 2:if(!this.id){t.next=9;break}return this.model.upDateTime=(new Date).toLocaleString(),t.next=6,regeneratorRuntime.awrap(W("softWare",this.id,this.model));case 6:t.sent,t.next=12;break;case 9:return t.next=11,regeneratorRuntime.awrap(O("softWare",this.model));case 11:t.sent;case 12:this.$router.push("/softWare/list"),this.$notify({title:"成功",type:"success",message:"保存成功"});case 14:case"end":return t.stop()}}),null,this)},afterSuccess:function(e){this.model.fileDir=e.url,this.model.fileName=e.filename},handleProgress:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(!(e.size>1e8)){r.next=3;break}return this.$confirm("文件大小不可以超过100M"),r.abrupt("return",!1);case 3:if(""!=this.model.versionNumber){r.next=6;break}return this.$confirm("必须输入版本号"),r.abrupt("return",!1);case 6:if(""!=this.model.parent){r.next=9;break}return this.$confirm("必须选择关联项目"),r.abrupt("return",!1);case 9:return t=this.model.parent[0],this.id&&(t=this.model.parent[0]),console.log("reID",t),r.next=14,regeneratorRuntime.awrap(P("tag",t));case 14:return r.sent,r.abrupt("return",this.fileData.fileName="".concat(this.model.versionNumber,"_").concat(e.name));case 16:case"end":return r.stop()}}),null,this)},removeFile:function(){var e=this;return this.$confirm("确定移除 ".concat(this.model.fileName,"？")).then((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(T(e.model.fileName));case 2:t.sent,e.model.fileName="";case 4:case"end":return t.stop()}}))})).catch((function(e){console.log("删除文件错误：",e)}))},count:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(F(this.model._id));case 2:case"end":return e.stop()}}),null,this)}},created:function(){this.id&&this.fetchEdit(),this.fetchTag()}},M=I,A=(r("2ffc"),Object(i["a"])(M,b,w,!1,null,null,null)),B=A.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("软件列表:")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableProps.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),"default-sort":{prop:"items",order:"descending"}}},[r("el-table-column",{attrs:{sortable:"",prop:"createTime",label:"创建时间"}}),r("el-table-column",{attrs:{sortable:"",prop:"versionNumber",label:"版本号"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{key:t._id,attrs:{size:"mini",placeholder:"输入版本号搜索"},on:{input:e.SearchTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/softWare/view/"+t.row._id)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/softWare/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, prev, next, jumper",total:e.items.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},X=[],q=(r("4de4"),r("caad"),r("2532"),r("841c"),{name:"softWareList",props:{id:{},searchInput:{}},data:function(){return{items:[],search:"",tableProps:[],currentPage:1,pagesize:10}},methods:{handleSizeChange:function(e){this.pagesize=e,console.log(this.pagesize)},findblogTag:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(L(this.id));case 2:e=t.sent,this.items=e.data,this.tableProps=this.items;case 5:case"end":return t.stop()}}),null,this)},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage),this.tableProps=this.items},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(S("softWare"));case 2:e=t.sent,this.items=e.data,this.tableProps=this.items;case 5:case"end":return t.stop()}}),null,this)},Search:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(D(this.searchInput));case 2:e=t.sent,this.items=e.data,this.tableProps=e.data;case 5:case"end":return t.stop()}}),null,this)},SearchTable:function(){var e=this,t=this.items.filter((function(t){return!e.search||t.versionNumber.toLowerCase().includes(e.search.toLowerCase())}));this.tableProps=t},remove:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("确定删除 ".concat(e.versionNumber," 吗？,该操作不可逆"),"确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(z(e._id));case 2:return r.next=4,regeneratorRuntime.awrap(E("softWare",e._id));case 4:if(" "!=!e.fileName&&void 0!=!e.fileName){r.next=7;break}return r.next=7,regeneratorRuntime.awrap(T(e.fileName));case 7:t.fetch(),t.$notify({title:"成功",type:"success",message:"删除成功"});case 9:case"end":return r.stop()}}))})).catch((function(e){console.log("删除错误",e)}));case 1:case"end":return r.stop()}}),null,this)}},created:function(){this.id?this.findblogTag():this.searchInput&&" "!==this.searchInput?this.Search():this.fetch()}}),V=q,J=Object(i["a"])(V,U,X,!1,null,null,null),H=J.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("版本："+e._s(e.model.versionNumber))]),r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"下载版本"}},[r("div",{staticClass:"versionItem"},[r("p",[e._v("版本号: "+e._s(e.model.versionNumber))])]),r("div",{staticClass:"versionItem"},[e._v(" 相关项目: "),e._l(e.model.parent,(function(t){return r("el-tag",{key:t._id,staticClass:"tag",attrs:{size:"small"}},[e._v(e._s(t.tagName))])}))],2),r("div",{staticClass:"versionItem"},[e._v(" 下载项目: "),r("el-link",{attrs:{href:e.model.fileDir,type:"info"},nativeOn:{click:function(t){return e.count(e.model._id)}}},[e._v(e._s(e.model.fileName))])],1)]),r("el-tab-pane",{attrs:{label:"版本信息"}},[r("div",{domProps:{innerHTML:e._s(e.model.versionFeatures)}})]),r("el-tab-pane",{attrs:{label:"版本审计"}},[e._v("版本审计")])],1)],1)},K=[],Q={name:"softWareView",props:{id:{}},data:function(){return{model:{}}},methods:{fetchItem:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(P("softWare",this.id));case 2:e=t.sent,this.model=e.data,console.log(this.model);case 5:case"end":return t.stop()}}),null,this)},count:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(F(e));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]])}},created:function(){this.id&&this.fetchItem()}},Y=Q,Z=(r("4a45"),Object(i["a"])(Y,G,K,!1,null,"1277d4f0",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Mc"},[r("h1",{staticClass:"title"},[e._v(e._s(e.id?"编辑":"创建")+"用户")]),r("el-form",{ref:"model",attrs:{model:e.model,"label-width":"120px",name:"CreateProject"},nativeOn:{submit:function(t){return t.preventDefault(),e.save("model")}}},[r("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[r("el-input",{staticClass:"projectName",attrs:{maxlength:"10"},model:{value:e.model.userName,callback:function(t){e.$set(e.model,"userName",t)},expression:"model.userName"}})],1),r("el-form-item",{attrs:{label:"项目简介",prop:"passWord"}},[r("el-input",{staticClass:"projectFeatures",model:{value:e.model.passWord,callback:function(t){e.$set(e.model,"passWord",t)},expression:"model.passWord"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"sendProjectItem",attrs:{type:"primary","native-type":"subumit"}},[e._v("保存")])],1)],1)],1)},re=[],ne={name:"createProject",props:{id:{}},data:function(){return{model:{},rules:{projectName:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],projectFeatures:[{required:!0,message:"请输入项目简介",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}]}}},methods:{fetchItem:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/user/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},save:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$refs[e].validate());case 2:if(!this.id){t.next=7;break}return t.next=5,regeneratorRuntime.awrap(this.$http.put("rest/user/".concat(this.id),this.model));case 5:t.next=10;break;case 7:return t.next=9,regeneratorRuntime.awrap(this.$http.post("rest/user",this.model));case 9:this.$notify({title:"成功",type:"success",message:"添加项目成功"});case 10:this.$router.push("/user/list");case 11:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetchItem()}},ae=ne,se=Object(i["a"])(ae,te,re,!1,null,null,null),ie=se.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v("用户列表:")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items,border:""}},[r("el-table-column",{attrs:{prop:"userName",label:"用户名称"}}),r("el-table-column",{attrs:{prop:"passWord",label:"密码"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handleClick(t.row)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/user/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},le=[],ce={name:"mcList",data:function(){return{items:[]}},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/user"));case 2:e=t.sent,this.items=e.data,console.log(e);case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("确定删除 ".concat(e._id," 吗？,该操作不可逆"),"确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e._id),r.next=3,regeneratorRuntime.awrap(t.$http.delete("/rest/user/".concat(e._id)));case 3:r.sent,t.$notify({title:"成功",type:"success",message:"删除成功"}),t.fetch();case 6:case"end":return r.stop()}}))}));case 1:case"end":return r.stop()}}),null,this)}},created:function(){this.fetch()}},ue=ce,me=Object(i["a"])(ue,oe,le,!1,null,null,null),de=me.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Mc"},[r("h1",{staticClass:"title"},[e._v("创建标签:")]),r("el-form",{ref:"model",attrs:{rules:e.rules,model:e.model,"label-width":"120px",name:"Createtag"},nativeOn:{submit:function(t){return t.preventDefault(),e.save("model")}}},[r("el-form-item",{attrs:{label:"项目名称",prop:"tagName"}},[r("el-input",{staticClass:"tagName",attrs:{maxlength:"10"},model:{value:e.model.tagName,callback:function(t){e.$set(e.model,"tagName",t)},expression:"model.tagName"}})],1),r("el-form-item",{attrs:{label:"项目简介",prop:"tagFeatures"}},[r("el-input",{staticClass:"tagFeatures",model:{value:e.model.tagFeatures,callback:function(t){e.$set(e.model,"tagFeatures",t)},expression:"model.tagFeatures"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"sendtagItem",attrs:{type:"primary","native-type":"subumit"}},[e._v("保存")])],1)],1)],1)},he=[],fe={name:"createtag",props:{id:{}},data:function(){return{model:{},rules:{tagName:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],tagFeatures:[{required:!0,message:"请输入标签简介",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}]}}},methods:{fetchItem:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(P("tag",this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},save:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$refs[e].validate());case 2:if(!this.id){t.next=7;break}return t.next=5,regeneratorRuntime.awrap(W("tag",this.id,this.model));case 5:t.next=10;break;case 7:return t.next=9,regeneratorRuntime.awrap(O("tag",this.model));case 9:this.$notify({title:"成功",type:"success",message:"添加项目成功"});case 10:this.$router.push("/tag/list");case 11:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetchItem()}},ge=fe,ve=Object(i["a"])(ge,pe,he,!1,null,null,null),xe=ve.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v("项目列表:")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items,border:""}},[r("el-table-column",{attrs:{prop:"tagName",label:"标签名称"}}),r("el-table-column",{attrs:{prop:"tagFeatures",label:"标签简介"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handleClick(t.row)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/tag/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},we=[],_e={name:"tagList",data:function(){return{items:[]}},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(S("tag"));case 2:e=t.sent,this.items=e.data,console.log(e);case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("确定删除 ".concat(e._id," 吗？,该操作不可逆"),"确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e._id),r.next=3,regeneratorRuntime.awrap(E("tag",e._id));case 3:r.sent,t.$notify({title:"成功",type:"success",message:"删除成功"}),t.fetch();case 6:case"end":return r.stop()}}))}));case 1:case"end":return r.stop()}}),null,this)}},created:function(){this.fetch()}},ye=_e,Re=Object(i["a"])(ye,be,we,!1,null,null,null),Ce=Re.exports,ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Excel2XML")]),r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"Excel2xml"}},[r("div",{staticClass:"downloadTemplate"},[r("el-link",{attrs:{href:e.url,type:"primary"}},[e._v("点击下载模板")])],1),r("div",{staticClass:"upload"},[r("p",[e._v("点击上传excel文件")]),e.model.filename?r("el-row",[r("el-link",{staticClass:"fileLink",attrs:{href:e.model.fileDir,target:"_blank"}},[e._v(e._s(e.model.filename))]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.removeFile}})],1):e._e(),e.model.filename?e._e():r("div",[r("el-upload",{staticClass:"file-upload",attrs:{action:e.$http.defaults.baseURL+"/excel2xml","on-success":e.afterSuccess,"before-upload":e.handleProgress,data:e.fileData,"auto-upload":!0,accept:".xls, .xlsx","on-error":e.errSuccess}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过xxxkb")])],1)],1)],1),e.model.XMLPath?r("div",{staticClass:"donwloadXml"},[r("el-link",{attrs:{href:e.model.XMLPath.xmlFilePath,type:"primary"}},[e._v("右键另存为下载XML")])],1):e._e()])],1)],1)},$e=[],Ne=(r("baa5"),{name:"excel2xml",data:function(){return{model:{fileName:""},url:"test",fileData:{fileName:""}}},methods:{afterSuccess:function(e){this.model=e,console.log(this.model)},handleProgress:function(e){var t,r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.name.substring(e.name.lastIndexOf(".")+1),r="xls"===t,n="xlsx"===t,r||n){a.next=6;break}return this.$message({message:"上传文件只能是 xls、xlsx格式!",type:"warning"}),a.abrupt("return",Promise.reject());case 6:this.fileData.fileName=e.name;case 7:case"end":return a.stop()}}),null,this)},fetchTemplateURL:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(j());case 2:e=t.sent,this.url=e.config.url;case 4:case"end":return t.stop()}}),null,this)},errSuccess:function(e,t){this.$message({type:"error",message:e})},removeFile:function(){var e=this;return console.log(this.model),this.$confirm("确定移除 ".concat(this.model.filename,"？")).then((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(T(e.model.filename));case 2:t.sent,e.model.filename="";case 4:case"end":return t.stop()}}))})).catch((function(e){console.log("删除文件错误：",e)}))}},created:function(){this.fetchTemplateURL()}}),Se=Ne,Pe=(r("0a98"),Object(i["a"])(Se,ke,$e,!1,null,null,null)),We=Pe.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("2excel")])},Ee=[],Te={name:"excel2xml",data:function(){return{}},methods:{}},je=Te,Le=Object(i["a"])(je,Oe,Ee,!1,null,null,null),De=Le.exports,Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"home box-card",attrs:{shadow:"always"}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card user",attrs:{shadow:"hover"}},[r("div",[e._v("用户信息展示")])])],1),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card quicklyDownLoad",attrs:{shadow:"hover"}},[r("topDownload")],1)],1),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card hotTag",attrs:{shadow:"hover"}},[r("search"),r("hotTag",{staticClass:"hotTagDiv"})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-card",{staticClass:"box-card echarts",attrs:{shadow:"hover"}},[r("div",[e._v("系统内数据统计")])])],1)],1)],1)],1)},ze=[],Ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.model,(function(t){return r("el-tag",{key:t._id,staticClass:"hotTag",attrs:{"disable-transitions":!0,type:"info"},on:{click:function(r){return e.$router.push("/softWare/findTag/"+t._id)}}},[e._v(e._s(t.tagName))])})),1)},Me=[],Ae={name:"hotTag",data:function(){return{model:{}}},methods:{getTag:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(S("tag"));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},tagClick:function(e){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}},created:function(){this.getTag()}},Be=Ae,Ue=(r("c3d2"),Object(i["a"])(Be,Ie,Me,!1,null,"79eb303d",null)),Xe=Ue.exports,qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[r("el-input",{staticClass:"searchInput",attrs:{placeholder:"请输入版本号搜索"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)},Ve=[],Je={data:function(){return{input:""}},methods:{search:function(){""==this.input&&(this.input=" ",this.$router.push("/softWare/search/".concat(this.input))),this.$router.push("/softWare/search/".concat(this.input))}}},He=Je,Ge=(r("0dac"),Object(i["a"])(He,qe,Ve,!1,null,"1e9cf6f0",null)),Ke=Ge.exports,Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topDownload"},[r("el-row",e._l(e.model.slice(0,10),(function(t){return r("el-col",{key:t._id,staticClass:"hotEl",attrs:{span:24}},[r("el-link",{attrs:{icon:"el-icon-download",underline:!1,href:t.parent.fileDir,target:"_blank"},nativeOn:{click:function(r){return e.count(t.parent._id)}}},[e._v(e._s(t.parent.versionNumber))]),r("el-link",{staticClass:"downloads",attrs:{underline:!1,target:"_blank"}},[e._v(e._s(t.downloads)+"次")])],1)})),1)],1)},Ye=[],Ze={name:"topDownload",data:function(){return{model:[]}},methods:{getAllDownloadInfo:function(){var e,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(S("softWareInfo"));case 2:e=r.sent,this.model=e.data,t=this.arrayMax(this.model),console.log(t);case 6:case"end":return r.stop()}}),null,this)},count:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(F(e));case 3:this.getAllDownloadInfo(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),null,this,[[0,6]])},arrayMax:function(e){for(var t=null,r=0;r<e.length-1;r++)for(var n=r+1;n<e.length;n++)e[r].downloads<e[n].downloads&&(t=e[n],e[n]=e[r],e[r]=t);return e}},created:function(){this.getAllDownloadInfo()}},et=Ze,tt=(r("2b1b"),Object(i["a"])(et,Qe,Ye,!1,null,null,null)),rt=tt.exports,nt={name:"home",data:function(){return{}},components:{hotTag:Xe,search:Ke,topDownload:rt}},at=nt,st=(r("654c"),Object(i["a"])(at,Fe,ze,!1,null,"7e782080",null)),it=st.exports,ot=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginPage"},[r("div",{staticClass:"loginBg"}),r("div",{staticClass:"login"},[r("el-card",{staticClass:"box-card",attrs:{header:"欢迎登陆信安软件管理系统"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{staticClass:"userName"},[r("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.model.userName,callback:function(t){e.$set(e.model,"userName",t)},expression:"model.userName"}})],1),r("el-form-item",{staticClass:"passWord"},[r("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.model.passWord,callback:function(t){e.$set(e.model,"passWord",t)},expression:"model.passWord"}})],1),r("el-form-item",{staticClass:"captcha"},[r("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}})],1),r("el-form-item",[r("div",{domProps:{innerHTML:e._s(e.codeSrc)},on:{click:e.getCodeSrc}})]),r("el-form-item",[r("el-button",{staticClass:"SubBtn",attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1),r("el-button",{staticClass:"ForgetPass",attrs:{type:"text"}},[e._v("忘记密码?")])],1)],1)],1)])},lt=[],ct={name:"login",data:function(){return{model:{},codeSrc:""}},methods:{login:function(){var e,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(this.model.userName||this.model.passWord){r.next=3;break}return this.$message({type:"error",message:"账号或密码不能为空"}),r.abrupt("return");case 3:return r.next=5,regeneratorRuntime.awrap(N(this.model));case 5:e=r.sent,localStorage.token=e.data,t=JSON.parse(e.config.data),localStorage.userName=t.userName,this.$router.push("/"),this.$message({type:"success",message:"登录成功"}),console.log(localStorage.token);case 12:case"end":return r.stop()}}),null,this)},getCodeSrc:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap($());case 2:e=t.sent,this.codeSrc=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.getCodeSrc()}},ut=ct,mt=(r("81ee"),Object(i["a"])(ut,ot,lt,!1,null,"3c890bf6",null)),dt=mt.exports;n["default"].use(d["a"]);var pt=new d["a"]({routes:[{path:"/login",name:"login",meta:{isPublic:!0},component:dt},{path:"/",name:"Main",component:x,redirect:"/home",children:[{path:"/softWare/create",name:"softWareCreate",component:B},{path:"/softWare/edit/:id",name:"softWareEdit",component:B,props:!0},{path:"/softWare/view/:id",name:"softWareView",component:ee,props:!0},{path:"/softWare/list",name:"softWareList",component:H},{path:"/softWare/findTag/:id",name:"softWareListFindTag",props:!0,component:H},{path:"/softWare/search/:searchInput",name:"SearchSoftWare",props:!0,component:H},{path:"/tag/create",name:"tagCreate",component:xe},{path:"/tag/edit/:id",name:"tagEdit",component:xe,props:!0},{path:"/tag/list",name:"tagList",component:Ce},{path:"/user/create",name:"userCreate",component:ie},{path:"/user/edit/:id",name:"userEdit",component:ie,props:!0},{path:"/user/list",name:"userList",component:de},{path:"/home",name:"home",component:it},{path:"/tool/Excel2XML",name:"Excel2XML",component:We},{path:"/tool/XML2Excel",name:"XML2Excel",component:De}]}]});pt.beforeEach((function(e,t,r){e.meta.isPublic||localStorage.token||(Object(u["Message"])({type:"error",message:"请先登录"}),r("/login")),r()}));var ht=pt,ft="",gt={userName:ft};n["default"].config.productionTip=!1,n["default"].prototype.$http=k,n["default"].prototype.$global=gt,new n["default"]({router:ht,render:function(e){return e(c)}}).$mount("#app")},"615d":function(e,t,r){},6438:function(e,t,r){},"654c":function(e,t,r){"use strict";var n=r("4ae3"),a=r.n(n);a.a},"738f":function(e,t,r){},"81ee":function(e,t,r){"use strict";var n=r("ff17"),a=r.n(n);a.a},8319:function(e,t,r){},"85ec":function(e,t,r){},a1d8:function(e,t,r){},a40c:function(e,t,r){},c3d2:function(e,t,r){"use strict";var n=r("615d"),a=r.n(n);a.a},ff17:function(e,t,r){}});
//# sourceMappingURL=app.457eb1bf.js.map