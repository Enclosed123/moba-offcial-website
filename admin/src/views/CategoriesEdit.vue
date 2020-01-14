<template>
  <div>
    <h1>{{id? "编辑":"新建"}}分类</h1>

    <el-form ref="form" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option v-for="(item, index) in parents" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
    </el-form>
    <el-row style="padding:0 120px">
      <el-button type="primary" native-type="submit" @click="save">保存</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {},
      parents: []
    };
  },
  props: {
    id: {}
  },
  methods: {
    // 保存按钮
    async save() {
      let res;
      if (this.id) {
        await this.$http.put(`rest/categories/${this.id}`,this.model);
      } else {
        await this.$http.post("rest/categories",this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
      console.log(res);
    },
    // 数据更新
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    async fetchParents() {
      const res = await this.$http.get(`rest/categories`);
      this.parents = res.data;
    },
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  }
};
</script>