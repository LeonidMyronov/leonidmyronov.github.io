webpackJsonp([1,4],{"/fcW":function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="/fcW"},1:function(n,l,u){n.exports=u("x35b")},"1A80":function(n,l,u){"use strict";function t(n){return o._26(0,[(n()(),o._27(0,null,null,22,"div",[["class","container"]],null,null,null,null,null)),(n()(),o._28(null,["\n  "])),(n()(),o._27(0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(n()(),o._28(null,["\n    "])),(n()(),o._27(0,null,null,10,"div",[["class","col-sm-2"]],null,null,null,null,null)),(n()(),o._28(null,["\n      "])),(n()(),o._27(0,null,null,7,"div",[["class","header-wrapper"]],null,null,null,null,null)),(n()(),o._28(null,["\n        "])),(n()(),o._27(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),o._28(null,["Main"])),(n()(),o._28(null,["\n        "])),(n()(),o._27(0,null,null,1,"app-header",[],null,null,null,r.a,r.b)),o._29(114688,null,0,s.a,[],null,null),(n()(),o._28(null,["\n      "])),(n()(),o._28(null,["\n    "])),(n()(),o._28(null,["\n    "])),(n()(),o._27(0,null,null,4,"div",[["class","col-sm-10"]],null,null,null,null,null)),(n()(),o._28(null,["\n      "])),(n()(),o._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o._29(212992,null,0,a.y,[a.q,o.W,o.e,[8,null],o.T],null,null),(n()(),o._28(null,["\n    "])),(n()(),o._28(null,["\n  "])),(n()(),o._28(null,["\n"])),(n()(),o._28(null,["\n"]))],function(n,l){n(l,12,0),n(l,19,0)},null)}function e(n){return o._26(0,[(n()(),o._27(0,null,null,1,"app-root",[],null,null,null,t,m)),o._29(49152,null,0,c.a,[],null,null)],null,null)}var i=u("Ni5f"),o=u("3j3K"),r=u("r8N4"),s=u("3avZ"),a=u("5oXY"),c=u("YWx4");u.d(l,"a",function(){return _});var d=[i.a],m=o._25({encapsulation:0,styles:d,data:{}}),_=o._30("app-root",c.a,e,{},{},[])},"3avZ":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},"52E5":function(n,l,u){"use strict";var t=u("Yt6S"),e=u("XH9Q"),i=u("L9wi"),o=u("Gvdl");u.n(o);u.d(l,"a",function(){return r});var r=function(){function n(n){this.userSessionService=n,this.selectedIndex=new o.Subject,this.deletedIndex=new o.Subject,this.updateItemsList=new o.Subject,this.checkRemoteStorage()}return n.prototype.getItems=function(){return this.items.slice()},n.prototype.getItemByIndex=function(n){return Object.assign({},this.items[n])},n.prototype.addCommentToItem=function(n,l){this.items[n].comments.push(l),this.storeData()},n.prototype.addItem=function(n){this.items.push(n),this.updateItemsList.next(this.getItems()),this.storeData()},n.prototype.deleteItem=function(n){this.items.splice(n,1),this.updateItemsList.next(this.getItems()),this.storeData()},n.prototype.storeData=function(){this.userSessionService.storeItems(this.getItems())},n.prototype.checkRemoteStorage=function(){this.userSessionService.isEmpty()?this.setTestData():this.items=this.userSessionService.getItems()},n.prototype.setTestData=function(){this.items=[new e.a("What is Lorem Ipsum?",[new i.a("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),new i.a("It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),new e.a("Section 1.10.32",[new i.a("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."),new i.a("Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."),new i.a("Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."),new i.a("Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")]),new e.a("1914 translation by H. Rackham"),new e.a("Section 1.10.33"),new e.a("4 translation by H. Rackham")]},n.ctorParameters=function(){return[{type:t.a}]},n}()},Cd9f:function(n,l,u){"use strict";var t=u("y3nq");u.d(l,"a",function(){return e});var e=(t.a,function(){function n(){}return n}())},Cife:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".search-panel[_ngcontent-%COMP%]{margin-bottom:20px}"]},"E/ub":function(n,l,u){"use strict";var t=u("52E5"),e=u("L9wi");u.d(l,"a",function(){return i});var i=function(){function n(n){this.itemService=n,this.isItemSelected=!1}return n.prototype.ngOnInit=function(){var n=this;this.selectedIndexSubscription=this.itemService.selectedIndex.subscribe(function(l){n.isItemSelected=!0,n.itemIndex=l,n.item=n.itemService.getItemByIndex(n.itemIndex)}),this.deletedIndexSubscription=this.itemService.deletedIndex.subscribe(function(l){n.isItemSelected=!1})},n.prototype.onSubmit=function(n){n.valid&&(this.itemService.addCommentToItem(this.itemIndex,new e.a(n.controls.comment.value)),n.reset())},n.prototype.ngOnDestroy=function(){this.selectedIndexSubscription&&this.selectedIndexSubscription.unsubscribe(),this.deletedIndexSubscription&&this.deletedIndexSubscription.unsubscribe(),this.updatingItemSubscription&&this.updatingItemSubscription.unsubscribe()},n.ctorParameters=function(){return[{type:t.a}]},n}()},IPlM:function(n,l,u){"use strict";function t(n){return r._26(0,[(n()(),r._27(0,null,null,11,"div",[["class","items-wrapper"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.onSelectItem(n.context.index)&&t}return t},null,null)),r._29(278528,null,0,s.n,[r.l,r.n,r.P,r._7],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),r._28(null,["\n                    "])),(n()(),r._27(0,null,null,4,"div",[["class","item"]],null,null,null,null,null)),(n()(),r._28(null,["\n                        ","  "])),(n()(),r._27(0,null,null,1,"span",[["class","badge color-info"]],null,null,null,null,null)),(n()(),r._28(null,["",""])),(n()(),r._28(null,["\n                    "])),(n()(),r._28(null,["\n                    "])),(n()(),r._27(0,null,null,1,"button",[["class","btn color-danger btn-default"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.onDeleteItem(n.context.index)&&t}return t},null,null)),(n()(),r._28(null,["Delete"])),(n()(),r._28(null,["\n\n                "]))],function(n,l){n(l,1,0,"items-wrapper",l.component.index==l.context.index?"active":"")},function(n,l){n(l,4,0,l.context.$implicit.name),n(l,6,0,l.context.$implicit.comments.length)})}function e(n){return r._26(0,[(n()(),r._27(0,null,null,22,"div",[["class","col-sm-6"]],null,null,null,null,null)),(n()(),r._28(null,["\n    "])),(n()(),r._27(0,null,null,19,"section",[],null,null,null,null,null)),(n()(),r._28(null,["\n        "])),(n()(),r._27(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),r._28(null,["items"])),(n()(),r._28(null,["\n\n        "])),(n()(),r._27(0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),r._28(null,["\n            "])),(n()(),r._27(0,null,null,4,"div",[["class","col-sm-12"]],null,null,null,null,null)),(n()(),r._28(null,["\n                "])),(n()(),r._27(0,null,null,1,"app-search-panel",[],null,null,null,a.a,a.b)),r._29(114688,null,0,c.a,[d.a],null,null),(n()(),r._28(null,["\n            "])),(n()(),r._28(null,["\n\n            "])),(n()(),r._27(0,null,null,4,"div",[["class","col-sm-12"]],null,null,null,null,null)),(n()(),r._28(null,["\n                "])),(n()(),r._33(16777216,null,null,1,null,t)),r._29(802816,null,0,s.o,[r.W,r._8,r.l],{ngForOf:[0,"ngForOf"]},null),(n()(),r._28(null,["\n            "])),(n()(),r._28(null,["\n        "])),(n()(),r._28(null,["\n    "])),(n()(),r._28(null,["\n"])),(n()(),r._28(null,["\n\n"])),(n()(),r._27(0,null,null,7,"div",[["class","col-sm-6"]],null,null,null,null,null)),(n()(),r._28(null,["\n    "])),(n()(),r._27(0,null,null,4,"section",[],null,null,null,null,null)),(n()(),r._28(null,["\n        "])),(n()(),r._27(0,null,null,1,"app-item",[],null,null,null,m.a,m.b)),r._29(245760,null,0,_.a,[d.a],null,null),(n()(),r._28(null,["\n    "])),(n()(),r._28(null,["\n"])),(n()(),r._28(null,["\n\n"]))],function(n,l){var u=l.component;n(l,12,0),n(l,18,0,u.items),n(l,29,0)},null)}function i(n){return r._26(0,[(n()(),r._27(0,null,null,1,"app-items-list",[],null,null,null,e,g)),r._29(245760,null,0,p.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var o=u("wz6p"),r=u("3j3K"),s=u("2Je8"),a=u("fDAU"),c=u("MlOo"),d=u("52E5"),m=u("qGE2"),_=u("E/ub"),p=u("y3nq");u.d(l,"a",function(){return h});var f=[o.a],g=r._25({encapsulation:0,styles:f,data:{}}),h=r._30("app-items-list",p.a,i,{},{},[])},Iksp:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},L9wi:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(n){this.name=this.getRandomName(),this.color=this.getRandomColor(),this.comment=n}return n.prototype.getRandomName=function(){return"user"+(1e3*Math.random()^0)},n.prototype.getRandomColor=function(){return["red","blue","gray","green","yellow","orange","black","brown"][8*Math.random()^0]},n}()},MlOo:function(n,l,u){"use strict";var t=u("52E5"),e=u("XH9Q");u.d(l,"a",function(){return i});var i=function(){function n(n){this.itemService=n}return n.prototype.ngOnInit=function(){},n.prototype.onSubmit=function(n){n.valid&&(this.itemService.addItem(new e.a(n.controls.itemName.value)),n.reset())},n.ctorParameters=function(){return[{type:t.a}]},n}()},Ni5f:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},XH9Q:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(n,l){this.name=n,this.comments=l||[]}return n}()},YWx4:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.title="empeek works!"}return n}()},Yt6S:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this._userStore="userStore"}return n.prototype.getItems=function(){try{return JSON.parse(localStorage.getItem(this._userStore))}catch(n){return console.log("Parsing data error. ",n.message),[]}},n.prototype.storeItems=function(n){localStorage.setItem(this._userStore,JSON.stringify(n))},n.prototype.flushStore=function(){localStorage.clear()},n.prototype.isEmpty=function(){return null===localStorage.getItem(this._userStore)},n.ctorParameters=function(){return[]},n}()},aNmd:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},fDAU:function(n,l,u){"use strict";function t(n){return o._26(0,[(n()(),o._27(0,null,null,20,"div",[["class","search-panel"]],null,null,null,null,null)),(n()(),o._28(null,["\n\n  "])),(n()(),o._27(0,null,null,17,"form",[["class","form-inline"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,e=n.component;if("submit"===l){t=!1!==o._32(n,4).onSubmit(u)&&t}if("reset"===l){t=!1!==o._32(n,4).onReset()&&t}if("ngSubmit"===l){t=!1!==e.onSubmit(o._32(n,4))&&t}return t},null,null)),o._29(16384,null,0,s.d,[],null,null),o._29(16384,[["searchForm",4]],0,s.e,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o._35(2048,null,s.f,null,[s.e]),o._29(16384,null,0,s.g,[s.f],null,null),(n()(),o._28(null,["\n\n    "])),(n()(),o._27(0,null,null,7,"input",[["class","form-control"],["id","item"],["name","itemName"],["ngModel",""],["placeholder","Type name here..."],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==o._32(n,9)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==o._32(n,9).onTouched()&&t}if("compositionstart"===l){t=!1!==o._32(n,9)._compositionStart()&&t}if("compositionend"===l){t=!1!==o._32(n,9)._compositionEnd(u.target.value)&&t}return t},null,null)),o._29(16384,null,0,s.h,[o.O,o.P,[2,s.i]],null,null),o._29(16384,null,0,s.j,[],{required:[0,"required"]},null),o._35(1024,null,s.k,function(n){return[n]},[s.j]),o._35(1024,null,s.l,function(n){return[n]},[s.h]),o._29(671744,null,0,s.m,[[2,s.f],[2,s.k],[8,null],[2,s.l]],{name:[0,"name"],model:[1,"model"]},null),o._35(2048,null,s.n,null,[s.m]),o._29(16384,null,0,s.o,[s.n],null,null),(n()(),o._28(null,["\n    "])),(n()(),o._27(0,null,null,1,"button",[["class","btn btn-default color-info"],["type","submit"]],null,null,null,null,null)),(n()(),o._28(null,["Add new"])),(n()(),o._28(null,["\n\n  "])),(n()(),o._28(null,["\n"])),(n()(),o._28(null,["\n"]))],function(n,l){n(l,10,0,""),n(l,13,0,"itemName","")},function(n,l){n(l,2,0,o._32(l,6).ngClassUntouched,o._32(l,6).ngClassTouched,o._32(l,6).ngClassPristine,o._32(l,6).ngClassDirty,o._32(l,6).ngClassValid,o._32(l,6).ngClassInvalid,o._32(l,6).ngClassPending),n(l,8,0,o._32(l,10).required?"":null,o._32(l,15).ngClassUntouched,o._32(l,15).ngClassTouched,o._32(l,15).ngClassPristine,o._32(l,15).ngClassDirty,o._32(l,15).ngClassValid,o._32(l,15).ngClassInvalid,o._32(l,15).ngClassPending)})}function e(n){return o._26(0,[(n()(),o._27(0,null,null,1,"app-search-panel",[],null,null,null,t,d)),o._29(114688,null,0,r.a,[a.a],null,null)],function(n,l){n(l,1,0)},null)}var i=u("Cife"),o=u("3j3K"),r=u("MlOo"),s=u("NVOs"),a=u("52E5");u.d(l,"b",function(){return d}),l.a=t;var c=[i.a],d=o._25({encapsulation:0,styles:c,data:{}});o._30("app-search-panel",r.a,e,{},{},[])},"i+fr":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},kZql:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},kke6:function(n,l,u){"use strict";var t=u("3j3K"),e=u("Iksp"),i=u("YWx4"),o=u("IPlM"),r=u("1A80"),s=u("2Je8"),a=u("Qbdm"),c=u("NVOs"),d=u("Fzro"),m=u("5oXY"),_=u("Yt6S"),p=u("52E5"),f=u("y3nq"),g=u("Cd9f");u.d(l,"a",function(){return h});var h=t.b(e.a,[i.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[o.a,r.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,s.a,s.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,a.b,a.c,[s.c]),t.d(6144,t.p,null,[a.b]),t.d(4608,a.d,a.e,[]),t.d(5120,a.f,function(n,l,u,t){return[new a.g(n),new a.h(l),new a.i(u,t)]},[s.c,s.c,s.c,a.d]),t.d(4608,a.j,a.j,[a.f,t.q]),t.d(135680,a.k,a.k,[s.c]),t.d(4608,a.l,a.l,[a.j,a.k]),t.d(6144,t.r,null,[a.l]),t.d(6144,a.m,null,[a.k]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,a.n,a.n,[s.c]),t.d(4608,a.o,a.o,[s.c]),t.d(4608,c.a,c.a,[]),t.d(4608,d.a,d.a,[]),t.d(4608,d.b,d.c,[]),t.d(5120,d.d,d.e,[]),t.d(4608,d.f,d.f,[d.a,d.b,d.d]),t.d(4608,d.g,d.h,[]),t.d(5120,d.i,d.j,[d.f,d.g]),t.d(5120,m.a,m.b,[m.c]),t.d(4608,m.d,m.d,[]),t.d(6144,m.e,null,[m.d]),t.d(135680,m.f,m.f,[m.c,t.t,t.u,t.v,m.e]),t.d(4608,m.g,m.g,[]),t.d(5120,m.h,m.i,[m.j]),t.d(5120,t.w,function(n){return[n]},[m.h]),t.d(4608,_.a,_.a,[]),t.d(4608,p.a,p.a,[_.a]),t.d(512,s.d,s.d,[]),t.d(1024,t.x,a.p,[]),t.d(1024,t.y,function(){return[m.k()]},[]),t.d(512,m.j,m.j,[t.v]),t.d(1024,t.z,function(n,l,u){return[a.q(n,l),m.l(u)]},[[2,a.r],[2,t.y],m.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,a.s,a.s,[[3,a.s]]),t.d(512,c.b,c.b,[]),t.d(512,c.c,c.c,[]),t.d(512,d.k,d.k,[]),t.d(1024,m.m,m.n,[[3,m.c]]),t.d(512,m.o,m.p,[]),t.d(512,m.q,m.q,[]),t.d(256,m.r,{},[]),t.d(1024,s.e,m.s,[s.f,[2,s.g],m.r]),t.d(512,s.h,s.h,[s.e]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,m.t,function(){return[[{path:"",redirectTo:"items-list",pathMatch:"full"},{path:"items-list",component:f.a},{path:"**",redirectTo:"items-list"}]]},[]),t.d(1024,m.c,m.u,[t.D,m.o,m.q,s.h,t.v,t.t,t.u,m.t,m.r,[2,m.v],[2,m.w]]),t.d(512,m.x,m.x,[[2,m.m],[2,m.c]]),t.d(512,g.a,g.a,[]),t.d(512,e.a,e.a,[])])})},qGE2:function(n,l,u){"use strict";function t(n){return a._26(0,[(n()(),a._27(0,null,null,11,"div",[["class","comment-wrapper"]],null,null,null,null,null)),(n()(),a._28(null,["\n    "])),(n()(),a._27(0,null,null,8,"div",[["class","comment"]],null,null,null,null,null)),(n()(),a._28(null,["\n      "])),(n()(),a._27(0,null,null,2,"div",[["class","comment-logo"]],null,null,null,null,null)),a._29(278528,null,0,c.p,[a.n,a.P,a._7],{ngStyle:[0,"ngStyle"]},null),a._34({backgroundColor:0}),(n()(),a._28(null,["\n      "])),(n()(),a._27(0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),a._28(null,["",""])),(n()(),a._28(null,["\n      ","\n    "])),(n()(),a._28(null,["\n  "]))],function(n,l){n(l,5,0,n(l,6,0,l.context.$implicit.color))},function(n,l){n(l,9,0,l.context.$implicit.name),n(l,10,0,l.context.$implicit.comment)})}function e(n){return a._26(0,[(n()(),a._27(0,null,null,28,"div",[["class","comments"]],null,null,null,null,null)),(n()(),a._28(null,["\n  "])),(n()(),a._27(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a._28(null,["comments #","#"])),(n()(),a._28(null,["\n  "])),(n()(),a._33(16777216,null,null,1,null,t)),a._29(802816,null,0,c.o,[a.W,a._8,a.l],{ngForOf:[0,"ngForOf"]},null),(n()(),a._28(null,["\n  "])),(n()(),a._27(0,null,null,19,"form",[["class","comments-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,e=n.component;if("submit"===l){t=!1!==a._32(n,10).onSubmit(u)&&t}if("reset"===l){t=!1!==a._32(n,10).onReset()&&t}if("ngSubmit"===l){t=!1!==e.onSubmit(a._32(n,10))&&t}return t},null,null)),a._29(16384,null,0,d.d,[],null,null),a._29(16384,[["form",4]],0,d.e,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),a._35(2048,null,d.f,null,[d.e]),a._29(16384,null,0,d.g,[d.f],null,null),(n()(),a._28(null,["\n    "])),(n()(),a._27(0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),a._28(null,["\n      "])),(n()(),a._27(0,null,null,0,"div",[["class","comment-logo gray-bg"]],null,null,null,null,null)),(n()(),a._28(null,["\n      "])),(n()(),a._27(0,null,null,7,"input",[["class","form-control"],["name","comment"],["ngModel",""],["placeholder","Type comment here..."],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==a._32(n,19)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==a._32(n,19).onTouched()&&t}if("compositionstart"===l){t=!1!==a._32(n,19)._compositionStart()&&t}if("compositionend"===l){t=!1!==a._32(n,19)._compositionEnd(u.target.value)&&t}return t},null,null)),a._29(16384,null,0,d.h,[a.O,a.P,[2,d.i]],null,null),a._29(16384,null,0,d.j,[],{required:[0,"required"]},null),a._35(1024,null,d.k,function(n){return[n]},[d.j]),a._35(1024,null,d.l,function(n){return[n]},[d.h]),a._29(671744,null,0,d.m,[[2,d.f],[2,d.k],[8,null],[2,d.l]],{name:[0,"name"],model:[1,"model"]},null),a._35(2048,null,d.n,null,[d.m]),a._29(16384,null,0,d.o,[d.n],null,null),(n()(),a._28(null,["\n    "])),(n()(),a._28(null,["\n  "])),(n()(),a._28(null,["\n\n"]))],function(n,l){n(l,6,0,l.component.item.comments),n(l,20,0,""),n(l,23,0,"comment","")},function(n,l){n(l,3,0,l.component.item.name),n(l,8,0,a._32(l,12).ngClassUntouched,a._32(l,12).ngClassTouched,a._32(l,12).ngClassPristine,a._32(l,12).ngClassDirty,a._32(l,12).ngClassValid,a._32(l,12).ngClassInvalid,a._32(l,12).ngClassPending),n(l,18,0,a._32(l,20).required?"":null,a._32(l,25).ngClassUntouched,a._32(l,25).ngClassTouched,a._32(l,25).ngClassPristine,a._32(l,25).ngClassDirty,a._32(l,25).ngClassValid,a._32(l,25).ngClassInvalid,a._32(l,25).ngClassPending)})}function i(n){return a._26(0,[(n()(),a._28(null,["\n  "])),(n()(),a._27(0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a._28(null,["Please, select item to view Comments"])),(n()(),a._28(null,["\n"]))],null,null)}function o(n){return a._26(0,[(n()(),a._33(16777216,null,null,1,null,e)),a._29(16384,null,0,c.q,[a.W,a._8],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),a._28(null,["\n"])),(n()(),a._33(0,[["noItem",2]],null,0,null,i))],function(n,l){n(l,1,0,l.component.isItemSelected,a._32(l,3))},null)}function r(n){return a._26(0,[(n()(),a._27(0,null,null,1,"app-item",[],null,null,null,o,f)),a._29(245760,null,0,m.a,[_.a],null,null)],function(n,l){n(l,1,0)},null)}var s=u("aNmd"),a=u("3j3K"),c=u("2Je8"),d=u("NVOs"),m=u("E/ub"),_=u("52E5");u.d(l,"b",function(){return f}),l.a=o;var p=[s.a],f=a._25({encapsulation:0,styles:p,data:{}});a._30("app-item",m.a,r,{},{},[])},r8N4:function(n,l,u){"use strict";function t(n){return o._26(0,[(n()(),o._27(0,null,null,14,"header",[],null,null,null,null,null)),(n()(),o._28(null,["\n  "])),(n()(),o._27(0,null,null,11,"ul",[],null,null,null,null,null)),(n()(),o._28(null,["\n    "])),(n()(),o._27(0,null,null,8,"li",[["routerLinkActive","active"]],null,null,null,null,null)),o._29(1720320,null,2,r.z,[r.c,o.P,o.O,o.T],{routerLinkActive:[0,"routerLinkActive"]},null),o._31(603979776,1,{links:1}),o._31(603979776,2,{linksWithHrefs:1}),(n()(),o._28(null,["\n      "])),(n()(),o._27(0,null,null,2,"a",[["routerLink","/items-list"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==o._32(n,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),o._29(671744,[[2,4]],0,r.A,[r.c,r.a,s.e],{routerLink:[0,"routerLink"]},null),(n()(),o._28(null,["\n        Overview\n      "])),(n()(),o._28(null,["\n    "])),(n()(),o._28(null,["\n  "])),(n()(),o._28(null,["\n"])),(n()(),o._28(null,["\n"]))],function(n,l){n(l,5,0,"active"),n(l,10,0,"/items-list")},function(n,l){n(l,9,0,o._32(l,10).target,o._32(l,10).href)})}function e(n){return o._26(0,[(n()(),o._27(0,null,null,1,"app-header",[],null,null,null,t,d)),o._29(114688,null,0,a.a,[],null,null)],function(n,l){n(l,1,0)},null)}var i=u("i+fr"),o=u("3j3K"),r=u("5oXY"),s=u("2Je8"),a=u("3avZ");u.d(l,"b",function(){return d}),l.a=t;var c=[i.a],d=o._25({encapsulation:0,styles:c,data:{}});o._30("app-header",a.a,e,{},{},[])},wz6p:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".items-wrapper[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:1px solid #eee;cursor:pointer}.items-wrapper[_ngcontent-%COMP%]:hover{background-color:#ddd}.items-wrapper.active[_ngcontent-%COMP%]{border-left:4px solid #ff1493}.item[_ngcontent-%COMP%]{display:inline-block;padding:6px 10px}.btn[_ngcontent-%COMP%]{float:right}"]},x35b:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("3j3K"),e=u("kZql"),i=u("Qbdm"),o=u("kke6");e.a.production&&u.i(t.a)(),u.i(i.a)().bootstrapModuleFactory(o.a)},y3nq:function(n,l,u){"use strict";var t=u("52E5");u.d(l,"a",function(){return e});var e=function(){function n(n){this.itemService=n}return n.prototype.ngOnInit=function(){var n=this;this.items=this.itemService.getItems(),this.itemsSubscription=this.itemService.updateItemsList.subscribe(function(l){n.items=l})},n.prototype.onSelectItem=function(n){this.index=n,this.itemService.selectedIndex.next(n)},n.prototype.onDeleteItem=function(n){n<this.index?this.index--:n==this.index&&(this.itemService.deletedIndex.next(n),this.index=null,console.log(n,this.items)),this.itemService.deleteItem(n)},n.prototype.ngOnDestroy=function(){this.itemsSubscription&&this.itemsSubscription.unsubscribe()},n.ctorParameters=function(){return[{type:t.a}]},n}()}},[1]);