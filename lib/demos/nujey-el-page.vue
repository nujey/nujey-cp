<template>
  <div>
    <nujey-el-page :total="pageInfo.total"
              :pageSize="pageInfo.pageSize"
              :currentPage="pageInfo.currentPage"
              @on-change="handleChange"></nujey-el-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageInfo: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    handleChange: function(info) {
      this.pageInfo.pageSize = info.pageSize
      this.pageInfo.currentPage = info.currentPage
      console.log(this.pageInfo)
      // 根据最新的分页信息来做业务请求
    }
  }
}
</script>
