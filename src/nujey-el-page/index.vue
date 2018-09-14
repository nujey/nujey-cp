<template>
  <div class="nujey-page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nujeyElPage',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSizeChange: function(val) {
      const info = {
        pageSize: val,
        currentPage: this.currentPage
      }
      this.$emit('on-change', info)
    },
    handleCurrentChange: function(val) {
      const info = {
        pageSize: this.pageSize,
        currentPage: val
      }
      this.$emit('on-change', info)
    }
  }
}
</script>

