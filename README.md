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
## 分页器 nujey-el-page
   ```javascript
        <nujey-el-page :total="pageInfo.total"
                    :pageSize="pageInfo.pageSize"
                    :currentPage="pageInfo.currentPage"
                    @on-change="handleChange"></nujey-el-page>  
  ```

## license
  MIT
