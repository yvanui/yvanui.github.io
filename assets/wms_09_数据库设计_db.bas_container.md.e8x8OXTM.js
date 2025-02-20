import{_ as a,c as e,J as r,w as c,m as t,a as n,a6 as _,G as i,o}from"./chunks/framework.d-Ywx6yJ.js";const E=JSON.parse('{"title":"bas_container","description":"","frontmatter":{"title":"bas_container","desc":"容器资料表","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.bas_container.md","filePath":"wms/09_数据库设计/db.bas_container.md"}'),h={name:"wms/09_数据库设计/db.bas_container.md"},s=t("h1",{id:"title",tabindex:"-1"},[n("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"容器资料表",-1),m=_('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>container_id</td><td>int8</td><td></td><td>容器ID</td><td>√</td><td>√</td><td></td></tr><tr><td>wh_id</td><td>int8</td><td></td><td>仓库ID</td><td></td><td>√</td><td></td></tr><tr><td>container_code</td><td>varchar</td><td>128</td><td>容器编号</td><td></td><td>√</td><td></td></tr><tr><td>container_name</td><td>varchar</td><td>255</td><td>容器名称</td><td></td><td>√</td><td></td></tr><tr><td>container_type</td><td>varchar</td><td>50</td><td>容器类型</td><td></td><td>√</td><td><a href="/dict.CONTAINER_TYPE.html">dict.CONTAINER_TYPE</a></td></tr><tr><td>container_state</td><td>varchar</td><td>50</td><td>容器状态</td><td></td><td>√</td><td><a href="/dict.BAS_CONTAINER_STATE.html">dict.BAS_CONTAINER_STATE</a></td></tr><tr><td>ctn_length</td><td>numeric</td><td></td><td>长</td><td></td><td>√</td><td></td></tr><tr><td>ctn_width</td><td>numeric</td><td></td><td>宽</td><td></td><td>√</td><td></td></tr><tr><td>ctn_volume</td><td>numeric</td><td></td><td>体积</td><td></td><td>√</td><td></td></tr><tr><td>ctn_height</td><td>numeric</td><td></td><td>高</td><td></td><td>√</td><td></td></tr><tr><td>remark</td><td>varchar</td><td>255</td><td>备注</td><td></td><td>√</td><td></td></tr><tr><td>is_enable</td><td>varchar</td><td>50</td><td>是否启用</td><td></td><td>√</td><td><a href="/dict.SYS_IS_ENABLE.html">dict.SYS_IS_ENABLE</a></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function b(p,u,T,N,S,f){const d=i("YvCallOut");return o(),e("div",null,[s,r(d,{type:"dbtable",title:"bas_container"},{default:c(()=>[l]),_:1}),m])}const A=a(h,[["render",b]]);export{E as __pageData,A as default};
