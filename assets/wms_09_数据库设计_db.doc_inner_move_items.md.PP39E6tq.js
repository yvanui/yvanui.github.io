import{_ as r,c as e,J as a,w as _,m as t,a as o,a6 as i,G as n,o as c}from"./chunks/framework.d-Ywx6yJ.js";const I=JSON.parse('{"title":"doc_inner_move_items","description":"","frontmatter":{"title":"doc_inner_move_items","desc":"移库单明细","category":"基础数据","type":"db","tags":["wms/db/基础数据"]},"headers":[],"relativePath":"wms/09_数据库设计/db.doc_inner_move_items.md","filePath":"wms/09_数据库设计/db.doc_inner_move_items.md"}'),s={name:"wms/09_数据库设计/db.doc_inner_move_items.md"},h=t("h1",{id:"title",tabindex:"-1"},[o("title "),t("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "title"'},"​")],-1),l=t("p",null,"移库单明细",-1),m=i('<h1 id="字段" tabindex="-1">字段 <a class="header-anchor" href="#字段" aria-label="Permalink to &quot;字段&quot;">​</a></h1><table><thead><tr><th>字段名</th><th>类型</th><th>大小</th><th>注释</th><th>主键</th><th>非空</th><th>关联</th></tr></thead><tbody><tr><td>inner_move_id</td><td>int8</td><td></td><td>库内库存转移单ID</td><td>√</td><td>√</td><td></td></tr><tr><td>inner_move_line_no</td><td>int4</td><td></td><td>库内库存转移单行号</td><td>√</td><td>√</td><td></td></tr><tr><td>inner_move_type</td><td>varchar</td><td>50</td><td>转移类型</td><td>√</td><td>√</td><td></td></tr><tr><td>sort_number</td><td>int4</td><td></td><td>排序号</td><td>√</td><td>√</td><td></td></tr><tr><td>item_id</td><td>int8</td><td></td><td>商品ID</td><td></td><td>√</td><td></td></tr><tr><td>lot_id</td><td>int8</td><td></td><td>批次ID</td><td></td><td>√</td><td></td></tr><tr><td>quality_status</td><td>varchar</td><td>50</td><td>质量状态</td><td></td><td>√</td><td></td></tr><tr><td>loc_id</td><td>int8</td><td></td><td>库位ID</td><td></td><td>√</td><td></td></tr><tr><td>source_loc_id</td><td>int8</td><td></td><td>原货位ID</td><td></td><td>√</td><td></td></tr><tr><td>pallet_code</td><td>varchar</td><td>128</td><td>托盘条码</td><td></td><td>√</td><td></td></tr><tr><td>source_pallet_code</td><td>varchar</td><td>128</td><td>原托盘条码</td><td></td><td>√</td><td></td></tr><tr><td>box_code</td><td>varchar</td><td>128</td><td>箱条码</td><td></td><td>√</td><td></td></tr><tr><td>source_box_code</td><td>varchar</td><td>128</td><td>箱条码</td><td></td><td>√</td><td></td></tr><tr><td>grid_no</td><td>varchar</td><td>128</td><td>格口号</td><td></td><td>√</td><td></td></tr><tr><td>source_grid_no</td><td>varchar</td><td>128</td><td>原格口号</td><td></td><td>√</td><td></td></tr><tr><td>tray_code</td><td>varchar</td><td>128</td><td>跟踪号</td><td></td><td>√</td><td></td></tr><tr><td>super_box_code</td><td>varchar</td><td>128</td><td>叠箱条码</td><td></td><td>√</td><td></td></tr><tr><td>inner_move_staff_id</td><td>int8</td><td></td><td>操作员ID</td><td></td><td>√</td><td></td></tr><tr><td>inner_move_status</td><td>varchar</td><td>50</td><td>行状态</td><td></td><td>√</td><td></td></tr><tr><td>create_by</td><td>varchar</td><td>64</td><td>创建者</td><td></td><td>√</td><td></td></tr><tr><td>create_at</td><td>timestamptz</td><td></td><td>建立时间</td><td></td><td>√</td><td></td></tr><tr><td>update_by</td><td>varchar</td><td>64</td><td>修改者</td><td></td><td>√</td><td></td></tr><tr><td>update_at</td><td>timestamptz</td><td></td><td>更新时间</td><td></td><td>√</td><td></td></tr></tbody></table>',2);function v(p,b,u,f,x,y){const d=n("YvCallOut");return c(),e("div",null,[h,a(d,{type:"dbtable",title:"doc_inner_move_items"},{default:_(()=>[l]),_:1}),m])}const T=r(s,[["render",v]]);export{I as __pageData,T as default};
