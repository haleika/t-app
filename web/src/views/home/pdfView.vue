<template>
  <div class="fillcontain">
    <div class="search">
      <el-input
        v-model="val"
        placeholder="请输入内容"
        @keydown.enter="search"
      ></el-input
      ><el-button @click="search">搜索</el-button>
    </div>
    <div v-for="(i, index) in pdfArr" :key="index" style="width: 100%">
      <!-- <a :href="pathName + i" target="_blank">{{pathName + i}}</a> -->
      <div class="item" @click="copyValue(pathName + i)">
        <div>{{ i }}</div>
        <div>{{ pathName + i }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "pdfView",
  data() {
    return {
      pdfArr: [],
      val: "",
      pathName: "",
      pafArr_c: [],
    };
  },
  computed: {},
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      // 获取表格数据
      console.log(window.document.location.href);
      this.$axios("/v1/pdfApi/getAllPdf").then((res) => {
        console.log(res);
        this.pdfArr = res.data.arr;
        this.pafArr_c = _.cloneDeep(this.pdfArr);
        this.pathName = res.data.pathName;
      });
    },
    search() {
      this.pdfArr = this.pafArr_c.filter((e) => {
        return e.indexOf(this.val) !== -1;
      });
    },
    copyValue(item) {
      var _input = document.createElement("input"); // 直接构建input
      _input.value = item; // 设置内容
      document.body.appendChild(_input); // 添加临时实例
      _input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      document.body.removeChild(_input); // 删除临时实例
      this.$message({
        type: "success",
        message: "复制链接成功",
      });
    },
  },
};
</script>
<style scoped>
.search {
  display: flex;
}
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
.item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
</style>