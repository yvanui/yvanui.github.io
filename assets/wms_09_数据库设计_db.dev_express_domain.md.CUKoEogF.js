import{_ as e,c as a,J as r,w as _,m as t,a as s,a6 as o,G as i,o as n}from"./chunks/framework.d-Ywx6yJ.js";const S=JSON.parse('{"title":"dev_express_domain","description":"","frontmatter":{"title":"dev_express_domain","desc":"表达式业务域定义","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.dev_express_domain.md","filePath":"wms/09_数据库设计/db.dev_express_domain.md"}'),c={name:"wms/09_数据库设计/db.dev_express_domain.md"},h=t("h1",{id:"title",tabindex:"-1"},[s("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"表达式业务域定义",-1),m=o('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>form_name</td><td>varchar</td><td>255</td><td>表达式环境名</td><td>√</td><td>√</td><td></td></tr><tr><td>domain_table</td><td>varchar</td><td>255</td><td>业务领域表</td><td>√</td><td>√</td><td></td></tr><tr><td>is_enable</td><td>int4</td><td></td><td>是否启用</td><td></td><td>√</td><td><a href="/dict.IS_ENABLE.html">dict.IS_ENABLE</a></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建人</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>更新人</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>创建时间</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function p(b,v,x,f,u,N){const d=i("YvCallOut");return n(),a("div",null,[h,r(d,{type:"dbtable",title:"dev_express_domain"},{default:_(()=>[l]),_:1}),m])}const T=e(c,[["render",p]]);export{S as __pageData,T as default};
