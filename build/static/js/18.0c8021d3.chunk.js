(this.webpackJsonpmankan_admin_panel=this.webpackJsonpmankan_admin_panel||[]).push([[18],{740:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(e,t,n,o){return Object(a.useEffect)((function(){return t({name:e}),function(){n({name:e}),o()}}),[t,e,n,o]),{changePage:Object(a.useCallback)((function(n){t({name:e,page:n})}),[t,e])}}},778:function(e,t,n){"use strict";n.r(t);n(413);var a=n(250),o=(n(62),n(20)),r=(n(770),n(773)),c=(n(412),n(305)),i=n(43),s=n(8),u=n(143),d=(n(191),n(120)),l=n(0),g=n.n(l),m=n(794),f=n(795),b=n(772),p=n.n(b),v=n(30),O=n(740),w=n(6),h=n(31),j=n(58),D=n(91),y=d.a.confirm,k=-1,x={beginDrag:function(e){return k=e.index,{index:e.index}}},A=Object(m.a)("row",{drop:function(e,t){var n=t.getItem().index,a=e.index;n!==a&&(e.moveRow(n,a),t.getItem().index=a)}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))(Object(f.a)("row",x,(function(e){return{connectDragSource:e.dragSource()}}))((function(e){var t=e.isOver,n=e.connectDragSource,a=e.connectDropTarget,o=(e.moveRow,Object(u.a)(e,["isOver","connectDragSource","connectDropTarget","moveRow"])),r=Object(s.a)({},o.style,{cursor:"move"}),c=o.className;return t&&(o.index>k&&(c+=" drop-over-downward"),o.index<k&&(c+=" drop-over-upward")),n(a(g.a.createElement("tr",Object.assign({},o,{className:c,style:r}))))})));t.default=Object(v.b)((function(e){return{list:e.tables.list,mainPage:e.mainPage}}),{getTableDataAction:h.b,getTableDataResetAction:h.d,saveDragResultAction:j.a,toggleSectionVisibilityAction:j.e,searchResetAction:D.c})((function(e){var t=e.toggleSectionVisibilityAction,n=e.getTableDataResetAction,u=e.saveDragResultAction,d=e.getTableDataAction,m=e.mainPage,f=e.list,b=e.searchResetAction,v=Object(l.useState)(!1),h=Object(i.a)(v,2),j=h[0],D=h[1];Object(O.a)(w.c.MAIN_PAGE,d,n,b);var k=Object(l.useState)({data:[]}),x=Object(i.a)(k,2),R=x[0],E=x[1];Object(l.useEffect)((function(){E({data:f.sort((function(e,t){return e.order-t.order}))})}),[f]),Object(l.useEffect)((function(){m.drag.success&&D(!1)}),[m.drag.success,D]);var S=[{title:"Name",dataIndex:"names[0][name]",key:"name"},{title:"off-on",dataIndex:"on",key:"on",render:function(e,n){var a=n.status,o=n.id;return m.switcher.loadingItems[o]?g.a.createElement(c.a,null):g.a.createElement(r.a,{checked:"on"===a,onChange:function(e){y({title:"Do you Want to switch".concat(e?" on":" off"," these items?"),content:"the item will be ".concat(e?" visible":" not visible"," in home page"),onOk:function(){t({id:o,status:e,orderedList:f})}})}})}}],T=function(e,t){var n=R.data[e],a=p()(R,{data:{$splice:[[e,1],[t,0,n]]}});D(!0),E(a)},I={body:{row:A}};return g.a.createElement(g.a.Fragment,null,j&&g.a.createElement(o.a,{style:{marginLeft:"25px",marginTop:"25px"},type:"primary",disabled:m.drag.loading,onClick:function(){y({title:"Do you Want to new ordering  ?",content:"the orders of home page will be changed ",onOk:function(){u({orders:R.data.map((function(e,t){return Object(s.a)({},e,{order:t+1})}))})}})}},"save drag result"),g.a.createElement(a.a,{columns:S,dataSource:R.data,pagination:!1,components:I,loading:m.drag.loading,onRow:function(e,t){return{index:t,moveRow:T,key:e.key}}}))}))}}]);
//# sourceMappingURL=18.0c8021d3.chunk.js.map