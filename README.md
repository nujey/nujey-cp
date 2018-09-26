# nujey-cp
这是一个npm包，关于vue+element封装的一些通用组件,所以需要子在vue和element的基础上配套使用
==============================================================================

## build Setup
  ``` bash
  npm i nujey-cp

  ```
## 目录
  > src 对应组件
  > lib/demos 对应调用的demo
## 分页器 nujey-el-page 基于elementUI
   ```javascript
        <nujey-el-page :total="pageInfo.total"
                    :pageSize="pageInfo.pageSize"
                    :currentPage="pageInfo.currentPage"
                    @on-change="handleChange"></nujey-el-page>  
  ```
## xlsx表格导出组件 nujey-xlsx-export
  #### 安装依赖
  ``` bash
    npm install xlsx
    npm install file-saver
  ```
  ``` javascript
    <nujey-xlsx-export :exportName="'export-cp'"
                 :exportTag="'out-table'"
                 @on-export="handleExport"></nujey-xlsx-export>
  ```
  exportName: 导出文件的名称 字符串
  exportTag: 到处表格的标签名称 字符串
  on-export: 返回的回调信息 成功还是失败
## license
  MIT
