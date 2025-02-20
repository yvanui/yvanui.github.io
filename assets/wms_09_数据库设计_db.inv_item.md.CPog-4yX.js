import{_ as e,c as r,J as a,w as i,m as t,a as _,a6 as n,G as o,o as c}from"./chunks/framework.d-Ywx6yJ.js";const I=JSON.parse('{"title":"inv_item","description":"","frontmatter":{"title":"inv_item","desc":"商品库存","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.inv_item.md","filePath":"wms/09_数据库设计/db.inv_item.md"}'),s={name:"wms/09_数据库设计/db.inv_item.md"},l=t("h1",{id:"title",tabindex:"-1"},[_("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),h=t("p",null,"商品库存",-1),m=n('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>wh_id</td><td>int8</td><td></td><td>仓库ID</td><td>√</td><td>√</td><td></td></tr><tr><td>owner_id</td><td>int8</td><td></td><td>货主ID</td><td>√</td><td>√</td><td></td></tr><tr><td>item_id</td><td>int8</td><td></td><td>产品ID</td><td>√</td><td>√</td><td></td></tr><tr><td>quality_status</td><td>varchar</td><td>50</td><td>质量状态</td><td>√</td><td>√</td><td><a href="/dict.INV_QUALITY_STATUS.html">dict.INV_QUALITY_STATUS</a></td></tr><tr><td>qty</td><td>numeric</td><td></td><td>库存数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_in</td><td>numeric</td><td></td><td>计划入库数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_pre_allocated</td><td>numeric</td><td></td><td>预分配数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_allocated</td><td>numeric</td><td></td><td>分配数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_on_hold</td><td>numeric</td><td></td><td>冻结数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_lock</td><td>numeric</td><td></td><td>锁定数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_profit</td><td>numeric</td><td></td><td>计划溢数量</td><td></td><td>√</td><td></td></tr><tr><td>qty_loss</td><td>numeric</td><td></td><td>计划损数量</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function u(p,b,y,v,f,T){const d=o("YvCallOut");return c(),r("div",null,[l,a(d,{type:"dbtable",title:"inv_item"},{default:i(()=>[h]),_:1}),m])}const S=e(s,[["render",u]]);export{I as __pageData,S as default};
