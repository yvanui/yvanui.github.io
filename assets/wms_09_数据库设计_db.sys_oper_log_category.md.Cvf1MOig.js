import{_ as e,c as a,J as r,w as o,m as t,a as s,a6 as _,G as c,o as l}from"./chunks/framework.d-Ywx6yJ.js";const T=JSON.parse('{"title":"sys_oper_log_category","description":"","frontmatter":{"title":"sys_oper_log_category","desc":"操作日志分类提取表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.sys_oper_log_category.md","filePath":"wms/09_数据库设计/db.sys_oper_log_category.md"}'),h={name:"wms/09_数据库设计/db.sys_oper_log_category.md"},i=t("h1",{id:"title",tabindex:"-1"},[s("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"操作日志分类提取表",-1),p=_('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>log_category_id</td><td>int8</td><td></td><td>主键</td><td>√</td><td>√</td><td></td></tr><tr><td>action</td><td>varchar</td><td>64</td><td>操作行为</td><td></td><td></td><td></td></tr><tr><td>url</td><td>varchar</td><td>255</td><td>正则抓取ANT表达式</td><td></td><td></td><td></td></tr><tr><td>attext1</td><td>varchar</td><td>255</td><td>需要抓取的报文 body 属性名1</td><td></td><td></td><td></td></tr><tr><td>attext2</td><td>varchar</td><td>255</td><td>需要抓取的报文 body 属性名2</td><td></td><td></td><td></td></tr><tr><td>attext3</td><td>varchar</td><td>255</td><td>需要抓取的报文 body 属性名3</td><td></td><td></td><td></td></tr><tr><td>success</td><td>int4</td><td></td><td>1=success是true情况下命中 / 0=success是false情况下命中</td><td></td><td></td><td></td></tr><tr><td>remark_disp</td><td>varchar</td><td>255</td><td>形成操作备注字段的toString字符串描述</td><td></td><td></td><td></td></tr><tr><td>sort</td><td>int4</td><td></td><td>排序</td><td></td><td></td><td></td></tr></tbody></table>',2);function y(g,b,m,u,f,v){const d=c("YvCallOut");return l(),a("div",null,[i,r(d,{type:"dbtable",title:"sys_oper_log_category"},{default:o(()=>[n]),_:1}),p])}const N=e(h,[["render",y]]);export{T as __pageData,N as default};
