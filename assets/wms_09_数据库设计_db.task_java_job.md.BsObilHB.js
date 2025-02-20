import{_ as a,c as e,J as s,w as r,m as t,a as _,a6 as o,G as c,o as i}from"./chunks/framework.d-Ywx6yJ.js";const T=JSON.parse('{"title":"task_java_job","description":"","frontmatter":{"title":"task_java_job","desc":"js脚本任务","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.task_java_job.md","filePath":"wms/09_数据库设计/db.task_java_job.md"}'),h={name:"wms/09_数据库设计/db.task_java_job.md"},l=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),n=t("p",null,"js脚本任务",-1),m=o('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>id</td><td>int8</td><td></td><td>主键id</td><td>√</td><td>√</td><td></td></tr><tr><td>namespace</td><td>varchar</td><td>63</td><td>命名空间</td><td></td><td>√</td><td></td></tr><tr><td>job_id</td><td>int8</td><td></td><td>任务ID</td><td></td><td>√</td><td></td></tr><tr><td>is_static</td><td>int2</td><td></td><td>是否是静态方法(函数)，0：非静态，1：静态</td><td></td><td>√</td><td></td></tr><tr><td>class_name</td><td>varchar</td><td>255</td><td>java class全路径</td><td></td><td>√</td><td></td></tr><tr><td>class_method</td><td>varchar</td><td>63</td><td>java class method</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamp</td><td></td><td>创建时间</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamp</td><td></td><td>更新时间</td><td></td><td></td><td></td></tr></tbody></table>',2);function b(p,j,v,u,f,k){const d=c("YvCallOut");return i(),e("div",null,[l,s(d,{type:"dbtable",title:"task_java_job"},{default:r(()=>[n]),_:1}),m])}const w=a(h,[["render",b]]);export{T as __pageData,w as default};
