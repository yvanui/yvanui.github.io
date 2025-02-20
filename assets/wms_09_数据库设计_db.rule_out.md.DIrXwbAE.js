import{_ as e,c as r,J as a,w as _,m as t,a as o,a6 as l,G as c,o as s}from"./chunks/framework.d-Ywx6yJ.js";const S=JSON.parse('{"title":"rule_out","description":"","frontmatter":{"title":"rule_out","desc":"出库分配规则","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.rule_out.md","filePath":"wms/09_数据库设计/db.rule_out.md"}'),h={name:"wms/09_数据库设计/db.rule_out.md"},i=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"出库分配规则",-1),u=l('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>rule_out_id</td><td>int8</td><td></td><td>出库规则ID</td><td></td><td></td><td></td></tr><tr><td>rule_out_code</td><td>varchar</td><td>255</td><td>出库规则编码</td><td></td><td></td><td></td></tr><tr><td>rule_name</td><td>varchar</td><td>255</td><td>名称</td><td></td><td></td><td></td></tr><tr><td>is_enable</td><td>varchar</td><td>50</td><td>是否启用</td><td></td><td></td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>remark</td><td>varchar</td><td>255</td><td>备注</td><td></td><td></td><td></td></tr><tr><td>rule_order</td><td>int4</td><td></td><td>排序</td><td></td><td></td><td></td></tr><tr><td>rule_condition</td><td>varchar</td><td>40960</td><td>规则适用条件</td><td></td><td></td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>255</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>255</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(p,b,f,v,N,x){const d=c("YvCallOut");return s(),r("div",null,[i,a(d,{type:"dbtable",title:"rule_out"},{default:_(()=>[n]),_:1}),u])}const T=e(h,[["render",m]]);export{S as __pageData,T as default};
