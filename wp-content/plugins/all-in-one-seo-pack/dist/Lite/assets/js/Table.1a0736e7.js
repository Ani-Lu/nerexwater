import{_ as F,o as s,c as l,F as h,i as y,f as i,t as d,q as B,O as R,h as g,w as f,e as P,n as _,g as T,k as C,u as V,y as q,r as w,d as I,a as r,x as N,p as j,a5 as O,A as W}from"./_plugin-vue_export-helper.2d9794a3.js";import{C as x,d as D}from"./Caret.42a820e0.js";import{C as M}from"./Tooltip.ae0bcccb.js";import{T as E}from"./Slide.cd756e61.js";const z={emits:["process-additional-filters"],props:{additionalFilters:{type:Array,required:!0},selectedFilters:{type:Object,default(){return{}}}},data(){return{strings:{filter:this.$t.__("Filter",this.$td)}}},mounted(){this.setInitialOptions()},updated(){this.setInitialOptions()},methods:{setInitialOptions(){this.additionalFilters.forEach(t=>{this.selectedFilters[t.name]||(this.selectedFilters[t.name]=t.options[0].value)})}}},K={class:"aioseo-wp-additional-filters alignleft actions"},G={for:"filter-by-date",class:"screen-reader-text"},J=["name","onUpdate:modelValue","onChange"],Q=["value"];function X(t,a,e,v,o,c){return s(),l("div",K,[(s(!0),l(h,null,y(e.additionalFilters,(u,p)=>(s(),l(h,{key:p},[i("label",G,d(u.label),1),B(i("select",{name:u.name,"onUpdate:modelValue":k=>e.selectedFilters[u.name]=k,onChange:k=>t.$emit("change",{name:u.name,selectedValue:k.target.value})},[(s(!0),l(h,null,y(u.options,(k,S)=>(s(),l("option",{key:S,value:k.value},d(k.label),9,Q))),128))],40,J),[[R,e.selectedFilters[u.name]]])],64))),128)),i("button",{class:"button action",onClick:a[0]||(a[0]=u=>t.$emit("process-additional-filters",e.selectedFilters))},d(o.strings.filter),1)])}const Y=F(z,[["render",X]]);const Z={emits:["process-bulk-action"],props:{bulkOptions:{type:Array,required:!0},disableTable:Boolean},data(){return{bulkAction:"-1",strings:{bulkActions:this.$t.__("Bulk Actions",this.$td),apply:this.$t.__("Apply",this.$td)}}}},$={class:"aioseo-wp-bulk-actions alignleft actions bulkactions"},ee=["disabled"],te={value:"-1"},se=["value"],ae=["disabled"];function le(t,a,e,v,o,c){return s(),l("div",$,[B(i("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>o.bulkAction=u),disabled:e.disableTable},[i("option",te,d(o.strings.bulkActions),1),(s(!0),l(h,null,y(e.bulkOptions,(u,p)=>(s(),l("option",{key:p,value:u.value},d(u.label),9,se))),128))],8,ee),[[R,o.bulkAction]]),i("button",{class:"button action",onClick:a[1]||(a[1]=u=>o.bulkAction!=="-1"?t.$emit("process-bulk-action",o.bulkAction):null),disabled:e.disableTable},d(o.strings.apply),9,ae)])}const ne=F(Z,[["render",le]]);const oe={props:{modelValue:Number,disableTable:Boolean},data(){return{items:[5,10,20,25,50,100],itemsPerPage:20,strings:{itemsPerPage:this.$t.__("items per page",this.$td)}}},watch:{itemsPerPage(t){this.$emit("update:modelValue",t)}},mounted(){this.itemsPerPage=this.modelValue}},ie={class:"aioseo-wp-items-per-page alignleft"},re=["disabled"],ue=["value"];function ce(t,a,e,v,o,c){return s(),l("div",ie,[i("label",null,[B(i("select",{"onUpdate:modelValue":a[0]||(a[0]=u=>o.itemsPerPage=u),disabled:e.disableTable},[(s(!0),l(h,null,y(o.items,(u,p)=>(s(),l("option",{key:p,value:u},d(u),9,ue))),128))],8,re),[[R,o.itemsPerPage]]),i("span",null,d(o.strings.itemsPerPage),1)])])}const de=F(oe,[["render",ce]]),be={emits:["paginate"],props:{totals:{type:Object,required:!0},initialPageNumber:{type:Number,default(){return 1}},disableTable:Boolean},data(){return{pageNumber:1,strings:{of:this.$t.__("of",this.$td),items:this.$t.__("items",this.$td)}}},watch:{initialPageNumber(t){t!==this.pageNumber&&(this.pageNumber=t)}},methods:{toPage(t){this.pageNumber=t,this.$emit("paginate",parseInt(t))}},created(){this.pageNumber=this.initialPageNumber}},me={class:"tablenav-pages pagination"},he={class:"displaying-num"},ge={class:"pagination-links"},_e={class:"paging-input"},pe=["max","disabled"],ke={class:"tablenav-paging-text"};function ye(t,a,e,v,o,c){return s(),l("div",me,[i("span",he,d(t.$numbers.numberFormat(e.totals.total))+" "+d(o.strings.items),1),i("span",ge,[(s(),g(C(o.pageNumber===1?"span":"a"),{href:"#",class:_(o.pageNumber===1?"tablenav-pages-navspan button disabled":"first-page button"),onClick:a[0]||(a[0]=T(u=>o.pageNumber===1?null:c.toPage(1),["prevent"]))},{default:f(()=>[P(" « ")]),_:1},8,["class"])),(s(),g(C(o.pageNumber===1?"span":"a"),{href:"#",class:_(o.pageNumber===1?"tablenav-pages-navspan button disabled":"prev-page button"),onClick:a[1]||(a[1]=T(u=>o.pageNumber===1?null:c.toPage(o.pageNumber-1),["prevent"]))},{default:f(()=>[P(" ‹ ")]),_:1},8,["class"])),i("span",_e,[B(i("input",{class:"current-page",type:"number",name:"paged","onUpdate:modelValue":a[2]||(a[2]=u=>o.pageNumber=u),size:"2",min:1,max:e.totals.pages||1,step:1,"aria-describedby":"table-paging",onKeyup:a[3]||(a[3]=q(u=>c.toPage(o.pageNumber),["enter"])),disabled:!e.totals.pages||e.disableTable},null,40,pe),[[V,o.pageNumber]]),i("span",ke,d(o.strings.of)+" "+d(e.totals.pages||0),1)]),(s(),g(C(o.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(o.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"next-page button"),onClick:a[4]||(a[4]=T(u=>o.pageNumber===e.totals.pages||!e.totals.pages?null:c.toPage(o.pageNumber+1),["prevent"]))},{default:f(()=>[P(" › ")]),_:1},8,["class"])),(s(),g(C(o.pageNumber===e.totals.pages||!e.totals.pages?"span":"a"),{href:"#",class:_(o.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"last-page button"),onClick:a[5]||(a[5]=T(u=>o.pageNumber===e.totals.pages||!e.totals.pages?null:c.toPage(e.totals.pages),["prevent"]))},{default:f(()=>[P(" » ")]),_:1},8,["class"]))])])}const fe=F(be,[["render",ye]]);const ve={emits:["sort-column"],components:{CoreTooltip:M},props:{column:{type:Object,required:!0},disableTable:Boolean,allowTooltipIcon:Boolean}},we={key:0,class:"aioseo-table-header-tooltip-icon"},Pe=i("span",{class:"sorting-indicator"},null,-1);function Ne(t,a,e,v,o,c){const u=w("core-tooltip");return s(),l("th",{scope:"col",style:j({width:e.column.width}),class:_(["aioseo-manage-column manage-column",[{sortable:!e.disableTable&&e.column.sortable,asc:e.column.sortDir==="asc"&&e.column.sortable,desc:e.column.sortDir==="desc"&&e.column.sortable,sorted:e.column.sortable&&e.column.sorted},e.column.slug]])},[e.allowTooltipIcon&&e.column.tooltipIcon?(s(),l("div",we,[I(u,{class:"action",type:"action"},{tooltip:f(()=>[P(d(e.column.label),1)]),default:f(()=>[(s(),g(C(e.column.tooltipIcon)))]),_:1})])):r("",!0),!e.allowTooltipIcon||!e.column.tooltipIcon?(s(),l(h,{key:1},[e.column.sortable?(s(),l("a",{key:0,href:"#",onClick:a[0]||(a[0]=T(p=>t.$emit("sort-column",e.column,p),["prevent"]))},[i("span",null,d(e.column.label),1),Pe])):r("",!0),e.column.sortable?r("",!0):(s(),l(h,{key:1},[t.$slots.headerFooter?N(t.$slots,"headerFooter",{key:0}):r("",!0),t.$slots.headerFooter?r("",!0):(s(),l(h,{key:1},[P(d(e.column.label),1)],64))],64))],64)):r("",!0)],6)}const Te=F(ve,[["render",Ne]]);const Fe={emits:["sort-column","process-bulk-action","paginate","search","filter-table","process-change-items-per-page","process-additional-filters"],components:{CoreLoader:x,CoreWpAdditionalFilters:Y,CoreWpBulkActions:ne,CoreWpItemsPerPage:de,CoreWpPagination:fe,CoreWpTableHeaderFooter:Te,TransitionSlide:E},props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},filters:{type:Array,required:!1},totals:{type:Object,required:!1},loading:Boolean,showSearch:{type:Boolean,default(){return!0}},showBulkActions:{type:Boolean,default(){return!0}},showPagination:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},searchLabel:{type:String,default(){const t=W();return t.appContext.app.$t.__("Search",t.appContext.app.$td)}},initialPageNumber:{type:Number,default(){return 1}},initialItemsPerPage:{type:Number,default(){return 20}},initialSearchTerm:{type:String,default(){return""}},noResultsLabel:{type:String},bulkOptions:Array,additionalFilters:Array,selectedFilters:Object,itemsPerPageFilter:String,blurRows:Boolean,disableTable:Boolean,showItemsPerPage:Boolean},data(){return{itemsPerPage:null,searchTerm:"",pageNumber:1,activeRow:null,strings:{items:this.$t.__("items",this.$td),noResults:this.$t.__("No items found.",this.$td)}}},watch:{initialPageNumber(t){this.pageNumber=t},pageNumber(t){if(Math.abs(t)!==t){this.pageNumber=Math.floor(t);return}if(this.totals&&t>this.totals.pages){this.pageNumber=this.totals.pages;return}1>t&&(this.pageNumber=1)},itemsPerPage(t,a){a!==null&&this.processChangeItemsPerPage()}},methods:{showFilterCount(t){return Object.prototype.hasOwnProperty.call(t,"count")},editRow(t){if(t===null||this.activeRow===t){this.activeRow=null;return}this.activeRow=t},processSearch(){D(()=>{this.$emit("search",this.searchTerm)},100)},processChangeItemsPerPage(){this.$emit("process-change-items-per-page",this.itemsPerPage)},processBulkAction(t){this.$emit("process-bulk-action",{action:t,selectedRows:this.selectedItems()}),this.resetSelectedItems()},processPaginate(t){this.pageNumber=t,this.$emit("paginate",t,this.searchTerm)},processFilter(t){this.pageNumber=1,this.searchTerm="",this.$emit("filter-table",t)},processAdditionalFilters(t){this.pageNumber=1,this.searchTerm="",this.$emit("process-additional-filters",{filters:t})},selectedItems(){const t=this.$refs.table.querySelectorAll("tbody tr.main-row"),a=[];return t.forEach(e=>{const v=e.querySelector("th.check-column input");v&&v.checked&&a.push(e.dataset.rowId)}),a},resetSelectedItems(){const t=this.$refs.table.querySelectorAll(".check-column input:checked");t&&t.forEach(a=>a.checked=!1)},setPageNumber(t){this.pageNumber=t}},computed:{filteredColumns(){return this.columns.filter(t=>"show"in t?t.show:!0)},noResults(){return this.noResultsLabel||this.strings.noResults}},created(){this.pageNumber=this.initialPageNumber,this.searchTerm=this.initialSearchTerm,this.itemsPerPage=this.initialItemsPerPage}},Ae={class:"aioseo-wp-table"},Ce={key:0,class:"aioseo-wp-table-header"},Be={class:"subsubsub"},Se=["onClick"],Ie={key:0},Re={key:0},Oe={key:0,class:"separator"},Ve={key:0,class:"search-box"},qe=["disabled"],He=["value","disabled"],Le={class:"tablenav top"},Ue=i("br",{class:"clear"},null,-1),je={class:"wp-table"},We={key:0,class:"manage-column column-cb check-column"},xe=["disabled"],De={key:0,id:"the-list"},Me={key:0,class:"loader-overlay-table"},Ee=["data-row-id","data-row-index"],ze={key:0,scope:"row",class:"check-column"},Ke=["disabled"],Ge=["colspan"],Je={key:1},Qe=["colspan"],Xe={class:"border"},Ye=["colspan"],Ze={class:"no-results"},$e={key:0},et={key:1},tt={key:0,class:"manage-column column-cb check-column"},st=["disabled"],at={key:1,class:"tablenav bottom"},lt=i("div",{class:"alignleft actions"},null,-1),nt=i("br",{class:"clear"},null,-1);function ot(t,a,e,v,o,c){const u=w("core-wp-bulk-actions"),p=w("core-wp-additional-filters"),k=w("core-wp-pagination"),S=w("core-wp-table-header-footer"),H=w("core-loader"),L=w("transition-slide"),U=w("core-wp-items-per-page");return s(),l("div",Ae,[e.showHeader?(s(),l("div",Ce,[i("ul",Be,[(s(!0),l(h,null,y(e.filters,(n,b)=>(s(),l("li",{key:b,class:_(n.slug)},[i("span",{class:_(["name",{active:n.active}])},[!n.active&&!e.disableTable?(s(),l("a",{key:0,href:"#",onClick:T(m=>c.processFilter(n),["prevent"])},[P(d(n.name)+" ",1),c.showFilterCount(n)?(s(),l("span",Ie," ("+d(t.$numbers.numberFormat(n.count))+")",1)):r("",!0)],8,Se)):r("",!0),n.active||e.disableTable?(s(),l(h,{key:1},[P(d(n.name)+" ",1),c.showFilterCount(n)?(s(),l("span",Re," ("+d(t.$numbers.numberFormat(n.count))+")",1)):r("",!0)],64)):r("",!0)],2),b+1<e.filters.length?(s(),l("span",Oe,"|")):r("",!0)],2))),128))]),e.showSearch?(s(),l("p",Ve,[B(i("input",{type:"search",id:"post-search-input",name:"s","onUpdate:modelValue":a[0]||(a[0]=n=>o.searchTerm=n),onKeyup:a[1]||(a[1]=q((...n)=>c.processSearch&&c.processSearch(...n),["enter"])),onSearch:a[2]||(a[2]=(...n)=>c.processSearch&&c.processSearch(...n)),disabled:e.disableTable},null,40,qe),[[V,o.searchTerm]]),i("input",{type:"submit",id:"search-submit",class:"button",value:e.searchLabel,onClick:a[3]||(a[3]=T((...n)=>c.processSearch&&c.processSearch(...n),["prevent"])),disabled:e.disableTable},null,8,He)])):r("",!0),i("div",Le,[N(t.$slots,"tablenav"),e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(s(),g(u,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:c.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.additionalFilters&&e.additionalFilters.length?(s(),g(p,{key:1,"additional-filters":e.additionalFilters,"selected-filters":e.selectedFilters,onChange:a[4]||(a[4]=n=>t.$emit("additional-filter-option-selected",n)),onProcessAdditionalFilters:c.processAdditionalFilters},null,8,["additional-filters","selected-filters","onProcessAdditionalFilters"])):r("",!0),e.showPagination?(s(),g(k,{key:2,totals:e.totals,"initial-page-number":o.pageNumber,"disable-table":e.disableTable,onPaginate:c.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),Ue])])):r("",!0),i("div",je,[i("table",{class:_(["wp-list-table widefat fixed",{blurred:e.blurRows}]),ref:"table",cellpadding:"0",cellspacing:"0","aria-label":"Paginated Table"},[i("thead",null,[i("tr",null,[e.showBulkActions?(s(),l("td",We,[i("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,xe)])):r("",!0),(s(!0),l(h,null,y(e.columns,(n,b)=>(s(),g(S,{key:b,column:n,"disable-table":e.disableTable,onSortColumn:(m,A)=>t.$emit("sort-column",m,A),"allow-tooltip-icon":""},O({_:2},[t.$slots[n.slug+"HeaderFooter"]?{name:"headerFooter",fn:f(()=>[N(t.$slots,n.slug+"HeaderFooter",{area:"header"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])]),e.rows?(s(),l("tbody",De,[e.loading?(s(),l("div",Me,[I(H)])):r("",!0),(s(!0),l(h,null,y(e.rows,(n,b)=>(s(),l(h,{key:b},[i("tr",{class:_(["main-row",{even:b%2===0,enabled:n.enabled||!n.hasOwnProperty("enabled")}]),"data-row-id":n.rowIndex&&n[n.rowIndex]||n.id||n.url||b,"data-row-index":b},[e.showBulkActions?(s(),l("th",ze,[n.preventBulkAction?r("",!0):(s(),l("input",{key:0,type:"checkbox",disabled:e.disableTable},null,8,Ke))])):r("",!0),(s(!0),l(h,null,y(c.filteredColumns,(m,A)=>(s(),l("td",{class:_(["manage-column",m.slug]),key:A,colspan:m!=null&&m.colspan?m.colspan:1},[t.$slots[m.slug]?N(t.$slots,m.slug,{key:0,row:n,column:n[m.slug],editRow:c.editRow,index:b,editRowActive:o.activeRow===b}):r("",!0),t.$slots[m.slug]?r("",!0):(s(),l("span",Je,d(n[m.slug]),1))],10,Ge))),128))],10,Ee),i("tr",{class:_(["edit-row",{even:b%2===0}])},[i("td",{colspan:e.showBulkActions?e.columns.length+1:e.columns.length,class:"edit-row-content"},[I(L,{tag:"div",class:"wrapper",active:b===o.activeRow},{default:f(()=>[i("div",Xe,[N(t.$slots,"edit-row",{row:n,index:b,editRow:c.editRow})])]),_:2},1032,["active"])],8,Qe)],2)],64))),128)),e.rows.length?r("",!0):(s(),l("td",{key:1,colspan:e.columns.length},[i("div",Ze,[e.loading?r("",!0):(s(),l("span",$e,d(c.noResults),1))])],8,Ye))])):r("",!0),e.showTableFooter?(s(),l("tfoot",et,[i("tr",null,[e.showBulkActions?(s(),l("td",tt,[i("input",{type:"checkbox",disabled:e.loading||e.disableTable},null,8,st)])):r("",!0),(s(!0),l(h,null,y(e.columns,(n,b)=>(s(),g(S,{key:b,column:n,"disable-table":e.disableTable,onSortColumn:(m,A)=>t.$emit("sort-column",m,A)},O({_:2},[t.$slots[n.slug+"HeaderFooter"]?{name:"headerFooter",fn:f(()=>[N(t.$slots,n.slug+"HeaderFooter",{area:"footer"})]),key:"0"}:void 0]),1032,["column","disable-table","onSortColumn"]))),128))])])):r("",!0)],2),N(t.$slots,"cta")]),e.showTableFooter?(s(),l("div",at,[e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?(s(),g(u,{key:0,"bulk-options":e.bulkOptions,onProcessBulkAction:c.processBulkAction,"disable-table":e.disableTable},null,8,["bulk-options","onProcessBulkAction","disable-table"])):r("",!0),e.showItemsPerPage?(s(),g(U,{key:1,modelValue:o.itemsPerPage,"onUpdate:modelValue":a[5]||(a[5]=n=>o.itemsPerPage=n),"disable-table":e.disableTable},null,8,["modelValue","disable-table"])):r("",!0),lt,e.showPagination?(s(),g(k,{key:2,totals:e.totals,"initial-page-number":o.pageNumber,"disable-table":e.disableTable,onPaginate:c.processPaginate},null,8,["totals","initial-page-number","disable-table","onPaginate"])):r("",!0),nt])):r("",!0)])}const dt=F(Fe,[["render",ot]]);export{dt as C};
