<!-- 组件说明 -->
<template>
  <div class>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="primary" size="big">编辑</el-button>
          <el-button @click="remove(scope.row)" type="primary" size="big">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      items: []
    };
  },
  computed: {},
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/categories");
      this.items = res.data;
    },
    // // 编辑键跳转
    // edit(row) {
    //   this.$router.push(`rest/${row}`);
    // },
    // 删除键
    
    async remove(row){
      this.$confirm(`是否删除"${row.name}"`,"提示",{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }).then(async ()=>{
        const res = await this.$http.delete(`rest/categories/${row._id}`);
        console.log(res);
        this.$message({
          type:"success",
          message:"删除成功!"
        });
        this.fetch()
      })
      console.log(row);
      
    },
  },
  created() {
    this.fetch();
  }
};
</script>