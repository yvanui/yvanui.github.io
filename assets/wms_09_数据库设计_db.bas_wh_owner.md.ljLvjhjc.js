import{_ as e,c as a,J as r,w as _,m as t,a as o,a6 as s,G as h,o as n}from"./chunks/framework.d-Ywx6yJ.js";const T=JSON.parse('{"title":"bas_wh_owner","description":"","frontmatter":{"title":"bas_wh_owner","desc":"仓库货主关系表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.bas_wh_owner.md","filePath":"wms/09_数据库设计/db.bas_wh_owner.md"}'),c={name:"wms/09_数据库设计/db.bas_wh_owner.md"},i=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"仓库货主关系表",-1),b=s('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>wh_id</td><td>int8</td><td></td><td>仓库ID</td><td>√</td><td>√</td><td></td></tr><tr><td>owner_id</td><td>int8</td><td></td><td>货主ID</td><td>√</td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td></td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td></td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td></td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function m(w,p,u,f,v,x){const d=h("YvCallOut");return n(),a("div",null,[i,r(d,{type:"dbtable",title:"bas_wh_owner"},{default:_(()=>[l]),_:1}),b])}const C=e(c,[["render",m]]);export{T as __pageData,C as default};
