<template>
  <div class="fillcontain">
      <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="usercode"
        label="账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_data"
        label="注册时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "InfoShow",
  data() {
    return {
        userList: []
    };
  },
  computed: {
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      // 获取表格数据
      this.$axios("/v1/user/getUserAllList").then(res => {
          console.log(res);
          this.userList = res.data
      });
    }
  }
};
</script>
<style scoped>
.fillcontain {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>