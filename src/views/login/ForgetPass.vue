<template>
  <div class="forgetPass">
    <!-- 找回密码页面 -->
    <!-- 头部 -->
    <div class="header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>找回密码</p>
      <p></p>
    </div>
    <!-- 找回密码 -->
    <van-form @submit="onSubmit">
      <div class="yan">
        <van-field v-model="mobile" name="用户名" label placeholder="请输入手机号" />
        <span @click="editPass">获取验证码</span>
      </div>
      <van-field v-model="sms_code" name="验证码" label placeholder="请输入验证码" />
      <van-field v-model="password" name="密码" label placeholder="请输入密码" />
      <div style="margin: 0.3rem;">
        <van-button round block type="warning" native-type="submit">确定</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { AjaxPass, AjaxSmsLogin } from "@/utils/api";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      sms_code: "",
      password: "",
      mobile: "",
      sms_type: "getPassword"
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async onSubmit(values) {
      let res = await AjaxPass({
        mobile: this.mobile,
        password: this.password,
        sms_code: this.sms_code,
        type: this.type
      });
      // 修改密码
      console.log("submit", values);
      console.log(res);
      if (res.code == 200) {
        this.$toast.success("修改成功");
        this.$router.push("/login");
      }
    },
    // 验证码
    async editPass() {
      let res = await AjaxSmsLogin({
        mobile: this.mobile,
        sms_type: this.sms_type
      });
      if (res.code == 200) {
        this.$toast.success("发送成功");
      }
      console.log(res);
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {}
};
</script> 

<style scoped lang="scss">
.forgetPass {
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    box-sizing: border-box;
    height: 0.45rem;
    align-items: center;
    font-size: 0.18rem;
  }
  .van-form {
    .yan {
      position: relative;
      span {
        position: absolute;
        z-index: 999;
        top: 0.1rem;
        right: 0.2rem;
        font-size: 0.12rem;
        color: #eb6100;
      }
    }
    .van-field {
      line-height: 0.4rem;
    }
  }
}
</style>
