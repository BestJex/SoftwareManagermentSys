(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0a98":function(e,t,r){"use strict";var n=r("6438"),a=r.n(n);a.a},"1c17":function(e,t,r){},"22de":function(e,t,r){"use strict";var n=r("8319"),a=r.n(n);a.a},2534:function(e,t,r){"use strict";var n=r("1c17"),a=r.n(n);a.a},"2ffc":function(e,t,r){"use strict";var n=r("738f"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o=(r("034f"),r("2877")),i={},l=Object(o["a"])(i,a,s,!1,null,null,null),c=l.exports,u=r("5c96"),m=r.n(u);r("0fae");n["default"].use(m.a);var p=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",{},[r("h1",{attrs:{id:"title"}},[e._v(e._s(e.title))]),r("el-dropdown",{on:{command:e.handleCommand}},[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px",color:"#FFFFFF"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",{attrs:{command:"logOut"}},[e._v("注销")])],1)],1),r("span",[e._v("欢迎您 "+e._s(this.userName))])],1),r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{open:"[1]",router:"","default-active":e.$router.path,collapse:!1}},[r("el-menu-item",{attrs:{index:"/home"}},[r("i",{staticClass:"el-icon-menu"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-s-order"}),e._v("版本管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("软件")]),r("el-menu-item",{attrs:{index:"/softWare/create"}},[e._v("上传软件")]),r("el-menu-item",{attrs:{index:"/softWare/list"}},[e._v("软件列表")])],2)],2),r("el-submenu",{staticClass:"projectMan",attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-s-data"}),e._v("项目管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("项目")]),r("el-menu-item",{staticClass:"projectCreate",attrs:{index:"/project/create"}},[e._v("创建项目")]),r("el-menu-item",{attrs:{index:"/project/list"}},[e._v("项目列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-s-custom"}),e._v("用户管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("用户")]),r("el-menu-item",{staticClass:"userCreate",attrs:{index:"/user/create"}},[e._v("创建用户")]),r("el-menu-item",{attrs:{index:"/user/list"}},[e._v("用户列表")])],2)],2),r("el-submenu",{attrs:{index:"4"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-suitcase-1"}),e._v("工具 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("交换机")]),r("el-menu-item",{staticClass:"excel2xml",attrs:{index:"/tool/excel2xml"}},[e._v("Excel2XML")]),r("el-menu-item",{staticClass:"xml2excel",attrs:{index:"/tool/xml2excel"}},[e._v("XML2Excel")])],2)],2)],1)],1),r("el-container",[r("el-main",[r("router-view")],1)],1)],1)],1)},f=[],h={name:"McCreate",data:function(){return{userName:"",title:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TITLE||"anyTitle",isCollapse:!0}},methods:{getUser:function(){this.userName=localStorage.userName},handleCommand:function(e){"logOut"==e&&(localStorage.clear(),console.log(localStorage.token),this.$router.push("/login"),this.$message({type:"success",message:"退出登录成功"}))}},created:function(){this.getUser()}},v=h,g=(r("22de"),Object(o["a"])(v,d,f,!1,null,null,null)),b=g.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"softWare",attrs:{name:"createSoftWare"}},[r("h1",{attrs:{name:"title"}},[e._v(e._s(e.id?"编辑":"上传")+"版本:")]),r("el-form",{ref:"model",staticClass:"sendItem",attrs:{rules:e.rules,model:e.model,"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save("model")}}},[r("el-form-item",{attrs:{label:"版本号",prop:"versionNumber"}},[r("el-input",{attrs:{id:"versionNum",maxlength:"16"},model:{value:e.model.versionNumber,callback:function(t){e.$set(e.model,"versionNumber",t)},expression:"model.versionNumber"}})],1),r("el-form-item",{attrs:{label:"版本类型",prop:"versionType"}},[r("el-select",{attrs:{"value-key":"model.versionType",placeholder:"请选择"},model:{value:e.model.versionType,callback:function(t){e.$set(e.model,"versionType",t)},expression:"model.versionType"}},e._l(e.versionType,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"关联项目",prop:"relatedProject"}},[r("el-select",{attrs:{"value-key":"model.relatedProject._id",multiple:"",placeholder:"请选择"},model:{value:e.model.relatedProject,callback:function(t){e.$set(e.model,"relatedProject",t)},expression:"model.relatedProject"}},e._l(e.projectList,(function(e){return r("el-option",{key:e._id,attrs:{label:e.projectName,value:e._id}})})),1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"需要先创建项目",placement:"top-start"}},[r("span",{staticClass:"help el-icon-question"})])],1),r("el-form-item",{attrs:{label:"版本特性",prop:"versionFeatures"}},[r("vue-editor",{model:{value:e.model.versionFeatures,callback:function(t){e.$set(e.model,"versionFeatures",t)},expression:"model.versionFeatures"}})],1),r("el-form-item",{attrs:{label:"上传软件"}},[e.model.fileName?r("el-row",[r("el-link",{staticClass:"fileLink",attrs:{href:e.model.fileDir,target:"_blank"}},[e._v(e._s(e.model.fileName))]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.removeFile}})],1):e._e(),e.model.fileName?e._e():r("div",[r("el-upload",{staticClass:"file-upload",attrs:{action:e.$http.defaults.baseURL+"/upload","on-success":e.afterSuccess,"before-upload":e.handleProgress,data:e.fileData}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 格式不限，但是不超过100M ")])],1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"save",attrs:{type:"primary","native-type":"subumit"}},[e._v("保存")])],1)],1)],1)},w=[],_=(r("99af"),r("b0c0"),r("d3b7"),r("96cf"),r("5873")),y=r("bc3a"),j=r.n(y),C=j.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API||"/api",withCredentials:!0});C.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),C.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&Ye.push("/login")),Promise.reject(e)}));var R=C,k=function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(R.get("/svgCaptcha"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},$=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(R.post("/user/login",e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},N=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(R.get("rest/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},P=function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(R.get("rest/".concat(e,"/").concat(t)));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))},S=function(e,t,r){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(R.put("rest/".concat(e,"/").concat(t),r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))},T=function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(R.post("rest/".concat(e),t));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))},E=function(e,t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(R.delete("rest/".concat(e,"/").concat(t)));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}))},O=function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(R.delete("deleteFile/".concat(e)));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},W=function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(R.get("/download/switch/excel2xmlTemplate.xlsx"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},L={name:"SoftWareCreate",props:{id:{}},data:function(){return{model:{fileName:""},versionType:["WebMc","Mc","An","Ac"],projectList:[],fileData:{fileName:""},rules:{versionNumber:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],relatedProject:[{type:"array",required:!0,message:"请选择关联项目",trigger:"blur"}],versionType:[{type:"string",required:!0,message:"请选择版本类型",trigger:"blur"}],versionFeatures:[{required:!0,message:"请输入版本特性",trigger:"blur"}]}}},components:{VueEditor:_["a"]},methods:{fetchProject:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(N("project"));case 2:e=t.sent,this.projectList=e.data;case 4:case"end":return t.stop()}}),null,this)},fetchEdit:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(P("softWare",this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},save:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$refs[e].validate());case 2:if(!this.id){t.next=9;break}return this.model.upDateTime=(new Date).toLocaleString(),t.next=6,regeneratorRuntime.awrap(S("softWare",this.id,this.model));case 6:t.sent,t.next=12;break;case 9:return t.next=11,regeneratorRuntime.awrap(T("softWare",this.model));case 11:t.sent;case 12:this.$router.push("/softWare/list"),this.$notify({title:"成功",type:"success",message:"保存成功"});case 14:case"end":return t.stop()}}),null,this)},afterSuccess:function(e){this.model.fileDir=e.url,this.model.fileName=e.filename},handleProgress:function(e){var t,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.size>1e8)){n.next=3;break}return this.$confirm("文件大小不可以超过100M"),n.abrupt("return",!1);case 3:if(""!=this.model.versionNumber){n.next=6;break}return this.$confirm("必须输入版本号"),n.abrupt("return",!1);case 6:if(""!=this.model.relatedProject){n.next=9;break}return this.$confirm("必须选择关联项目"),n.abrupt("return",!1);case 9:return t=this.model.relatedProject[0],this.id&&(t=this.model.relatedProject[0]._id),console.log("reID",t),n.next=14,regeneratorRuntime.awrap(P("project",t));case 14:return r=n.sent,n.abrupt("return",this.fileData.fileName="".concat(this.model.versionType,"_").concat(this.model.versionNumber,"_").concat(r.data.projectName,"_").concat(e.name));case 16:case"end":return n.stop()}}),null,this)},removeFile:function(){var e=this;return this.$confirm("确定移除 ".concat(this.model.fileName,"？")).then((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(O(e.model.fileName));case 2:t.sent,e.model.fileName="";case 4:case"end":return t.stop()}}))})).catch((function(e){console.log("删除文件错误：",e)}))}},created:function(){this.id&&this.fetchEdit(),this.fetchProject()}},z=L,F=(r("2ffc"),Object(o["a"])(z,x,w,!1,null,null,null)),M=F.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("软件列表:")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableProps.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),"default-sort":{prop:"items",order:"descending"}}},[r("el-table-column",{attrs:{sortable:"",prop:"createTime",label:"创建时间"}}),r("el-table-column",{attrs:{sortable:"",prop:"versionNumber",label:"版本号"}}),r("el-table-column",{attrs:{sortable:"",prop:"versionType",label:"版本类型"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300"},scopedSlots:e._u([{key:"header",fn:function(t){return[r("el-input",{key:t._id,attrs:{size:"mini",placeholder:"输入版本号搜索"},on:{input:e.SearchTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/softWare/view/"+t.row._id)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/softWare/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pagesize,layout:"total, prev, next, jumper",total:e.items.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},I=[],B=(r("4de4"),r("caad"),r("2532"),r("841c"),{name:"softWareList",props:{id:{}},data:function(){return{items:[],search:"",tableProps:[],currentPage:1,pagesize:10}},methods:{handleSizeChange:function(e){this.pagesize=e,console.log(this.pagesize)},findblogTag:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/findBlogTag/".concat(this.id)));case 2:e=t.sent,this.items=e.data,this.tableProps=this.items;case 5:case"end":return t.stop()}}),null,this)},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage),this.tableProps=this.items},fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(N("softWare"));case 2:e=t.sent,this.items=e.data,this.tableProps=this.items,console.log(e);case 6:case"end":return t.stop()}}),null,this)},SearchTable:function(){var e=this,t=this.items.filter((function(t){return!e.search||t.versionNumber.toLowerCase().includes(e.search.toLowerCase())}));this.tableProps=t},remove:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("确定删除 ".concat(e.versionNumber," 吗？,该操作不可逆"),"确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(E("softWare",e._id));case 2:if(" "!=!e.fileName&&void 0!=!e.fileName){r.next=5;break}return r.next=5,regeneratorRuntime.awrap(O(e.fileName));case 5:t.fetch(),t.$notify({title:"成功",type:"success",message:"删除成功"});case 7:case"end":return r.stop()}}))})).catch((function(e){console.log("删除错误",e)}));case 1:case"end":return r.stop()}}),null,this)}},created:function(){this.id?this.findblogTag():this.fetch()}}),q=B,A=Object(o["a"])(q,D,I,!1,null,null,null),U=A.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("版本："+e._s(e.model.versionNumber))]),r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"下载版本"}},[r("div",{staticClass:"versionItem"},[r("p",[e._v("版本号: "+e._s(e.model.versionNumber))])]),r("div",{staticClass:"versionItem"},[e._v(" 相关项目: "),e._l(e.model.relatedProject,(function(t){return r("el-tag",{key:t._id,attrs:{size:"small"}},[e._v(e._s(t.projectName))])}))],2),r("div",{staticClass:"versionItem"},[e._v(" 下载项目: "),r("el-link",{attrs:{href:e.model.fileDir,type:"info"}},[e._v(e._s(e.model.fileName))])],1)]),r("el-tab-pane",{attrs:{label:"版本信息"}},[r("div",{domProps:{innerHTML:e._s(e.model.versionFeatures)}})]),r("el-tab-pane",{attrs:{label:"版本审计"}},[e._v("版本审计")])],1)],1)},V=[],J={name:"softWareView",props:{id:{}},data:function(){return{model:{}}},methods:{fetchItem:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(P("softWare",this.id));case 2:e=t.sent,this.model=e.data,console.log(this.model);case 5:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetchItem()}},H=J,G=(r("2534"),Object(o["a"])(H,X,V,!1,null,"7a86c9f1",null)),K=G.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Mc"},[r("h1",{staticClass:"title"},[e._v(e._s(e.id?"编辑":"创建")+"用户")]),r("el-form",{ref:"model",attrs:{model:e.model,"label-width":"120px",name:"CreateProject"},nativeOn:{submit:function(t){return t.preventDefault(),e.save("model")}}},[r("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[r("el-input",{staticClass:"projectName",attrs:{maxlength:"10"},model:{value:e.model.userName,callback:function(t){e.$set(e.model,"userName",t)},expression:"model.userName"}})],1),r("el-form-item",{attrs:{label:"项目简介",prop:"passWord"}},[r("el-input",{staticClass:"projectFeatures",model:{value:e.model.passWord,callback:function(t){e.$set(e.model,"passWord",t)},expression:"model.passWord"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"sendProjectItem",attrs:{type:"primary","native-type":"subumit"}},[e._v("保存")])],1)],1)],1)},Y=[],Z={name:"createProject",props:{id:{}},data:function(){return{model:{},rules:{projectName:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],projectFeatures:[{required:!0,message:"请输入项目简介",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}]}}},methods:{fetchItem:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/user/".concat(this.id)));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},save:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$refs[e].validate());case 2:if(!this.id){t.next=7;break}return t.next=5,regeneratorRuntime.awrap(this.$http.put("rest/user/".concat(this.id),this.model));case 5:t.next=10;break;case 7:return t.next=9,regeneratorRuntime.awrap(this.$http.post("rest/user",this.model));case 9:this.$notify({title:"成功",type:"success",message:"添加项目成功"});case 10:this.$router.push("/user/list");case 11:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetchItem()}},ee=Z,te=Object(o["a"])(ee,Q,Y,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v("用户列表:")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items,border:""}},[r("el-table-column",{attrs:{prop:"userName",label:"用户名称"}}),r("el-table-column",{attrs:{prop:"passWord",label:"密码"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handleClick(t.row)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/user/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ae=[],se={name:"mcList",data:function(){return{items:[]}},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/user"));case 2:e=t.sent,this.items=e.data,console.log(e);case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("确定删除 ".concat(e._id," 吗？,该操作不可逆"),"确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e._id),r.next=3,regeneratorRuntime.awrap(t.$http.delete("/rest/user/".concat(e._id)));case 3:r.sent,t.$notify({title:"成功",type:"success",message:"删除成功"}),t.fetch();case 6:case"end":return r.stop()}}))}));case 1:case"end":return r.stop()}}),null,this)}},created:function(){this.fetch()}},oe=se,ie=Object(o["a"])(oe,ne,ae,!1,null,null,null),le=ie.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Mc"},[r("h1",{staticClass:"title"},[e._v("创建项目:")]),r("el-form",{ref:"model",attrs:{rules:e.rules,model:e.model,"label-width":"120px",name:"CreateProject"},nativeOn:{submit:function(t){return t.preventDefault(),e.save("model")}}},[r("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[r("el-input",{staticClass:"projectName",attrs:{maxlength:"10"},model:{value:e.model.projectName,callback:function(t){e.$set(e.model,"projectName",t)},expression:"model.projectName"}})],1),r("el-form-item",{attrs:{label:"项目简介",prop:"projectFeatures"}},[r("el-input",{staticClass:"projectFeatures",model:{value:e.model.projectFeatures,callback:function(t){e.$set(e.model,"projectFeatures",t)},expression:"model.projectFeatures"}})],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{staticClass:"sendProjectItem",attrs:{type:"primary","native-type":"subumit"}},[e._v("保存")])],1)],1)],1)},ue=[],me={name:"createProject",props:{id:{}},data:function(){return{model:{},rules:{projectName:[{required:!0,message:"请输入项目名称",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],projectFeatures:[{required:!0,message:"请输入项目简介",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}]}}},methods:{fetchItem:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(P("project",this.id));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},save:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$refs[e].validate());case 2:if(!this.id){t.next=7;break}return t.next=5,regeneratorRuntime.awrap(S("project",this.id,this.model));case 5:t.next=10;break;case 7:return t.next=9,regeneratorRuntime.awrap(T("project",this.model));case 9:this.$notify({title:"成功",type:"success",message:"添加项目成功"});case 10:this.$router.push("/project/list");case 11:case"end":return t.stop()}}),null,this)}},created:function(){this.id&&this.fetchItem()}},pe=me,de=Object(o["a"])(pe,ce,ue,!1,null,null,null),fe=de.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title"},[e._v("项目列表:")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items,border:""}},[r("el-table-column",{attrs:{prop:"projectName",label:"项目名称"}}),r("el-table-column",{attrs:{prop:"projectFeatures",label:"项目简介"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.handleClick(t.row)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/project/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ve=[],ge={name:"mcList",data:function(){return{items:[]}},methods:{fetch:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(N("project"));case 2:e=t.sent,this.items=e.data,console.log(e);case 5:case"end":return t.stop()}}),null,this)},remove:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:this.$confirm("确定删除 ".concat(e._id," 吗？,该操作不可逆"),"确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e._id),r.next=3,regeneratorRuntime.awrap(E("project",e._id));case 3:r.sent,t.$notify({title:"成功",type:"success",message:"删除成功"}),t.fetch();case 6:case"end":return r.stop()}}))}));case 1:case"end":return r.stop()}}),null,this)}},created:function(){this.fetch()}},be=ge,xe=Object(o["a"])(be,he,ve,!1,null,null,null),we=xe.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Excel2XML")]),r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"Excel2xml"}},[r("div",{staticClass:"downloadTemplate"},[r("el-link",{attrs:{href:e.url,type:"primary"}},[e._v("点击下载模板")])],1),r("div",{staticClass:"upload"},[r("p",[e._v("点击上传excel文件")]),e.model.filename?r("el-row",[r("el-link",{staticClass:"fileLink",attrs:{href:e.model.fileDir,target:"_blank"}},[e._v(e._s(e.model.filename))]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.removeFile}})],1):e._e(),e.model.filename?e._e():r("div",[r("el-upload",{staticClass:"file-upload",attrs:{action:e.$http.defaults.baseURL+"/excel2xml","on-success":e.afterSuccess,"before-upload":e.handleProgress,data:e.fileData,"auto-upload":!0,accept:".xls, .xlsx","on-error":e.errSuccess}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过xxxkb")])],1)],1)],1),e.model.XMLPath?r("div",{staticClass:"donwloadXml"},[r("el-link",{attrs:{href:e.model.XMLPath,type:"primary"}},[e._v("右键另存为下载XML")])],1):e._e()])],1)],1)},ye=[],je=(r("baa5"),{name:"excel2xml",data:function(){return{model:{fileName:""},url:"test",fileData:{fileName:""}}},methods:{afterSuccess:function(e){this.model=e,console.log(this.model)},handleProgress:function(e){var t,r,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(t=e.name.substring(e.name.lastIndexOf(".")+1),r="xls"===t,n="xlsx"===t,r||n){a.next=6;break}return this.$message({message:"上传文件只能是 xls、xlsx格式!",type:"warning"}),a.abrupt("return",Promise.reject());case 6:this.fileData.fileName=e.name;case 7:case"end":return a.stop()}}),null,this)},fetchTemplateURL:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(W());case 2:e=t.sent,this.url=e.config.url;case 4:case"end":return t.stop()}}),null,this)},errSuccess:function(e,t){this.$message({type:"error",message:e})},removeFile:function(){var e=this;return console.log(this.model),this.$confirm("确定移除 ".concat(this.model.filename,"？")).then((function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(O(e.model.filename));case 2:t.sent,e.model.filename="";case 4:case"end":return t.stop()}}))})).catch((function(e){console.log("删除文件错误：",e)}))}},created:function(){this.fetchTemplateURL()}}),Ce=je,Re=(r("0a98"),Object(o["a"])(Ce,_e,ye,!1,null,null,null)),ke=Re.exports,$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("2excel")])},Ne=[],Pe={name:"excel2xml",data:function(){return{}},methods:{}},Se=Pe,Te=Object(o["a"])(Se,$e,Ne,!1,null,null,null),Ee=Te.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{staticClass:"home box-card",attrs:{shadow:"always"}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card user",attrs:{shadow:"hover"}},[r("div",[e._v("用户信息展示")])])],1),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card quicklyDownLoad",attrs:{shadow:"hover"}},[r("div",[e._v("快速下载")])])],1),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card hotTag",attrs:{shadow:"hover"}},[r("hotTag")],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-card",{staticClass:"box-card echarts",attrs:{shadow:"hover"}},[r("div",[e._v("系统内数据统计")])])],1)],1)],1)],1)},We=[],Le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.model,(function(t){return r("el-tag",{key:t._id,staticClass:"hotTag",attrs:{"disable-transitions":!1,type:"info"},on:{click:function(r){return e.$router.push("/softWare/list/"+t._id)}}},[e._v(e._s(t.projectName))])})),1)},ze=[],Fe={name:"hotTag",data:function(){return{model:{}}},methods:{getProject:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(N("project"));case 2:e=t.sent,this.model=e.data;case 4:case"end":return t.stop()}}),null,this)},tagClick:function(e){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}},created:function(){this.getProject()}},Me=Fe,De=(r("bd9f"),Object(o["a"])(Me,Le,ze,!1,null,"761f96e9",null)),Ie=De.exports,Be={name:"home",data:function(){return{}},components:{hotTag:Ie}},qe=Be,Ae=(r("71d2"),Object(o["a"])(qe,Oe,We,!1,null,"85f64b92",null)),Ue=Ae.exports,Xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginPage"},[r("div",{staticClass:"loginBg"}),r("div",{staticClass:"login"},[r("el-card",{staticClass:"box-card",attrs:{header:"欢迎登陆信安软件管理系统"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{staticClass:"userName"},[r("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.model.userName,callback:function(t){e.$set(e.model,"userName",t)},expression:"model.userName"}})],1),r("el-form-item",{staticClass:"passWord"},[r("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.model.passWord,callback:function(t){e.$set(e.model,"passWord",t)},expression:"model.passWord"}})],1),r("el-form-item",{staticClass:"captcha"},[r("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}})],1),r("el-form-item",[r("div",{domProps:{innerHTML:e._s(e.codeSrc)},on:{click:e.getCodeSrc}})]),r("el-form-item",[r("el-button",{staticClass:"SubBtn",attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1),r("el-button",{staticClass:"ForgetPass",attrs:{type:"text"}},[e._v("忘记密码?")])],1)],1)],1)])},Ve=[],Je={name:"login",data:function(){return{model:{},codeSrc:""}},methods:{login:function(){var e,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(this.model.userName||this.model.passWord){r.next=3;break}return this.$message({type:"error",message:"账号或密码不能为空"}),r.abrupt("return");case 3:return r.next=5,regeneratorRuntime.awrap($(this.model));case 5:e=r.sent,localStorage.token=e.data,t=JSON.parse(e.config.data),localStorage.userName=t.userName,this.$router.push("/"),this.$message({type:"success",message:"登录成功"}),console.log(localStorage.token);case 12:case"end":return r.stop()}}),null,this)},getCodeSrc:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(k());case 2:e=t.sent,this.codeSrc=e.data;case 4:case"end":return t.stop()}}),null,this)}},created:function(){this.getCodeSrc()}},He=Je,Ge=(r("81ee"),Object(o["a"])(He,Xe,Ve,!1,null,"3c890bf6",null)),Ke=Ge.exports;n["default"].use(p["a"]);var Qe=new p["a"]({routes:[{path:"/login",name:"login",meta:{isPublic:!0},component:Ke},{path:"/",name:"Main",component:b,redirect:"/home",children:[{path:"/softWare/create",name:"softWareCreate",component:M},{path:"/softWare/edit/:id",name:"softWareEdit",component:M,props:!0},{path:"/softWare/view/:id",name:"softWareView",component:K,props:!0},{path:"/softWare/list",name:"softWareList",component:U},{path:"/softWare/list/:id",name:"softWareListFindTag",props:!0,component:U},{path:"/project/create",name:"projectCreate",component:fe},{path:"/project/edit/:id",name:"projectEdit",component:fe,props:!0},{path:"/project/list",name:"projectList",component:we},{path:"/user/create",name:"userCreate",component:re},{path:"/user/edit/:id",name:"userEdit",component:re,props:!0},{path:"/user/list",name:"userList",component:le},{path:"/home",name:"home",component:Ue},{path:"/tool/Excel2XML",name:"Excel2XML",component:ke},{path:"/tool/XML2Excel",name:"XML2Excel",component:Ee}]}]});Qe.beforeEach((function(e,t,r){e.meta.isPublic||localStorage.token||(Object(u["Message"])({type:"error",message:"请先登录"}),r("/login")),r()}));var Ye=Qe,Ze="",et={userName:Ze};n["default"].config.productionTip=!1,n["default"].prototype.$http=R,n["default"].prototype.$global=et,new n["default"]({router:Ye,render:function(e){return e(c)}}).$mount("#app")},"63d5":function(e,t,r){},6438:function(e,t,r){},"71d2":function(e,t,r){"use strict";var n=r("63d5"),a=r.n(n);a.a},"738f":function(e,t,r){},"81ee":function(e,t,r){"use strict";var n=r("ff17"),a=r.n(n);a.a},8319:function(e,t,r){},"85ec":function(e,t,r){},bd9f:function(e,t,r){"use strict";var n=r("fbbc"),a=r.n(n);a.a},fbbc:function(e,t,r){},ff17:function(e,t,r){}});
//# sourceMappingURL=app.aea44204.js.map