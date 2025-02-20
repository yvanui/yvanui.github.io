import{_ as i,c as o,J as n,w as r,m as e,a as l,a6 as c,G as t,o as p}from"./chunks/framework.d-Ywx6yJ.js";const k=JSON.parse('{"title":"库存分配","description":"","frontmatter":{"title":"库存分配","desc":"库存分配","name":"InvAllocate","type":"rule","navIgnore":false,"version":1,"tags":["wms/rule/InvAllocate"]},"headers":[],"relativePath":"wms/07_规则设计/rule.InvAllocate.md","filePath":"wms/07_规则设计/rule.InvAllocate.md"}'),d={name:"wms/07_规则设计/rule.InvAllocate.md"},_=e("h2",{id:"库位分配",tabindex:"-1"},[l("库位分配 "),e("a",{class:"header-anchor",href:"#库位分配","aria-label":'Permalink to "库位分配"'},"​")],-1),u=e("p",null,"库存分配",-1),h=e("p",null,"版本: 1",-1),v=c(`<h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>库存分配包含</span></span>
<span class="line"><span>1.按分配维度分配</span></span>
<span class="line"><span>2.分配维度中含库存是否需要满足、分配方式、目标包装级别、是否自动补货</span></span>
<span class="line"><span>3.先检查当前明细行是否需要分配前合并(拣货模式+合并类型)，1-分配前合并 先合并在分配 2-分配后合并 先分配后打包在一个任务中</span></span>
<span class="line"><span>4.先设置整个的挂起维度，</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="入口参数" tabindex="-1">入口参数 <a class="header-anchor" href="#入口参数" aria-label="Permalink to &quot;入口参数&quot;">​</a></h3>`,3),m=e("h3",{id:"出口参数",tabindex:"-1"},[l("出口参数 "),e("a",{class:"header-anchor",href:"#出口参数","aria-label":'Permalink to "出口参数"'},"​")],-1);function b(T,y,A,f,g,C){const s=t("YvCallOut"),a=t("YvBeanSchema");return p(),o("div",null,[_,n(s,{type:"rule",title:"InvAllocate"},{default:r(()=>[u,h]),_:1}),v,n(a,{content:`{
  "root": {
  "valueType" : "object",
  "title" : "入口参数",
  "properties" : { }
}
}
`}),m,n(a,{content:`{
"root": {
  "valueType" : "object",
  "title" : "返回结果",
  "properties" : {
    "whereSql" : {
      "valueType" : "string",
      "title" : "库存过滤条件"
    },
    "orderSql" : {
      "valueType" : "string",
      "title" : "库存排序条件"
    },
    "allocMode" : {
      "valueType" : "dict",
      "title" : "分配模式",
      "dict" : "ALLOC_MODE"
    },
    "invAllocMode" : {
      "valueType" : "dict",
      "title" : "库存匹配模式",
      "dict" : "INV_ALLOC_MODE"
    },
    "targetPackLevel" : {
      "valueType" : "dict",
      "title" : "目标包装级别",
      "dict" : "PACK_LEVEL"
    },
    "packLevel" : {
      "valueType" : "dict",
      "title" : "包装级别",
      "dict" : "PACK_LEVEL"
    },
    "autoRep" : {
      "valueType" : "boolean",
      "title" : "是否自动补货"
    },
    "isSplit" : {
      "valueType" : "boolean",
      "title" : "是否允许拆分"
    },
    "isOnWay" : {
      "valueType" : "boolean",
      "title" : "是否在途优先"
    },
    "orderType" : {
      "valueType" : "dict",
      "title" : "订单类型",
      "dict" : "ORDER_TYPE"
    }
  }
}
}
`})])}const x=i(d,[["render",b]]);export{k as __pageData,x as default};
