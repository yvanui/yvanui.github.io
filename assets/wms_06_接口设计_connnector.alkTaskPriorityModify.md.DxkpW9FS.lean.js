import{_ as r,c as o,J as n,w as i,m as s,a as l,a6 as p,G as t,o as h}from"./chunks/framework.d-Ywx6yJ.js";const w=JSON.parse('{"title":"alkTaskPriorityModify","description":"","frontmatter":{"title":"alkTaskPriorityModify","desc":"3.3.2-多穿任务优先级调整","type":"connector","apiType":"External","system":"MFC","date":"2024-03-29 10:56","author":"yvan","navIgnore":true,"url":"/mfc/alkTaskPriorityModify","tags":["wms/connector","wms/connector3-WCS接口/3_3-穿梭车库","wms/connector/mfc/alkTaskPriorityModify"]},"headers":[],"relativePath":"wms/06_接口设计/connnector.alkTaskPriorityModify.md","filePath":"wms/06_接口设计/connnector.alkTaskPriorityModify.md"}'),k={name:"wms/06_接口设计/connnector.alkTaskPriorityModify.md"},d=s("h3",{id:"_3-3-2-多穿任务优先级调整",tabindex:"-1"},[l("3.3.2-多穿任务优先级调整 "),s("a",{class:"header-anchor",href:"#_3-3-2-多穿任务优先级调整","aria-label":'Permalink to "3.3.2-多穿任务优先级调整"'},"​")],-1),c=s("p",null,"描述: 3.3.2-多穿任务优先级调整",-1),u=s("p",null,"名称: alkTaskPriorityModify",-1),E=s("p",null,"内部方法：com.galaxis.wms.connector.MFC@alkTaskPriorityModify",-1),y=s("p",null,"内部编号: d7c5eeb7-2366-40ae-8e48-7b6ea8441e36",-1),_=s("h4",{id:"请求",tabindex:"-1"},[l("请求 "),s("a",{class:"header-anchor",href:"#请求","aria-label":'Permalink to "请求"'},"​")],-1),m=s("p",null,null,-1),g=s("p",null,null,-1),b=p("",2),C=s("p",null,null,-1),F=s("p",null,null,-1),q=p("",1);function T(v,f,B,P,M,x){const a=t("YvCallOut"),e=t("YvBeanSchema");return h(),o("div",null,[d,n(a,{type:"connector",title:"URL: /mfc/alkTaskPriorityModify"},{default:i(()=>[c,u,E,y]),_:1}),_,n(a,{type:"info",title:"数据结构"},{default:i(()=>[m]),_:1}),n(e,{content:`{
  "root": {
  "valueType" : "object",
  "properties" : {
    "reqCode" : {
      "title" : "请求编号",
      "valueType" : "string",
      "desc" : "请求编号，每个请求都要一个唯一编号，同一个请求重复提交，使用同一编号"
    },
    "reqTime" : {
      "title" : "请求时间戳",
      "valueType" : "string",
      "desc" : "请求时间戳，格式: “yyyy-MM-dd HH:mm:ss”"
    },
    "data" : {
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : {
          "taskNo" : {
            "title" : "任务号",
            "valueType" : "string",
            "required" : true
          },
          "priority" : {
            "title" : "优先级",
            "valueType" : "number",
            "required" : true
          },
          "containerCode" : {
            "title" : "容器号",
            "valueType" : "string",
            "required" : true
          }
        }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"请求示例 1"},{default:i(()=>[g]),_:1}),b,n(a,{type:"info",title:"数据结构"},{default:i(()=>[C]),_:1}),n(e,{content:`{
"root": {
  "valueType" : "object",
  "properties" : {
    "success" : {
      "title" : "状态标记",
      "valueType" : "number",
      "desc" : "返回状态，0 表示成功、大于0表示失败"
    },
    "msg" : {
      "title" : "消息",
      "valueType" : "string",
      "desc" : "一般在success字段返回大于0的时候，返回错误信息"
    },
    "reqCode" : {
      "title" : "请求编号",
      "valueType" : "string",
      "desc" : "返回请求时的 reqCode"
    },
    "data" : {
      "valueType" : "array",
      "items" : {
        "valueType" : "object",
        "properties" : { }
      }
    }
  }
}
}
`}),n(a,{type:"example",title:"响应示例 1"},{default:i(()=>[F]),_:1}),q])}const j=r(k,[["render",T]]);export{w as __pageData,j as default};
