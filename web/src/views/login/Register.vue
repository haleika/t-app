<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">后台管理系统</span>
        <el-form
          :model="registerUser"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="85px"
          class="registerForm"
        >
          <el-form-item label="账号" prop="usercode">
            <el-input
              type="text"
              v-model="registerUser.usercode"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="registerUser.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input
              type="password"
              v-model="registerUser.checkPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <div>
            <el-button
              class="submit_btn"
              type="primary"
              @click="submitForm('ruleForm')"
              >提交</el-button
            >
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        username:'何',
        usercode: "",
        password: "",
        checkPassword: "",
      },
      rules: {
        usercode: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "长度在6~20字符之间",
            trigger: "blur"
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "长度在6~20字符之间",
            trigger: "blur"
          },
        ],
        checkPassword: [
          {
            required: true,
            message: "确认密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "长度在6~20字符之间",
            trigger: "blur"
          },
          {
            validator: validatePass,
            trigger: "blur"
          },
        ],
      },
    };
  },
  methods: {
      async submitForm(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.$axios);
            this.$axios
            .post("/v1/user/register", this.registerUser)
            .then(res => {
              console.log('-----',res);
              this.$router.push("/Login");
            })
            .catch(err=>{
              console.log(err);
            })
            this.$router.push("/Login");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
};
</script>

<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../../assets/image/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  /* color: #fff; */
}
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  margin-left: 30px;
  width: 80%;
}
</style>
