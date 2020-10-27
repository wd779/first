<template>
  <div class="box">
    <!-- 头像 -->
    <div class="user">
      <div class="user_icon">
        <img
          src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1603795521&di=1416ed2b5c31f98b6443c31cacc2ce34&src=http://img2.woyaogexing.com/2018/04/10/4c1707466af6018b!360x360_big.jpg"
        />
        <b @click="toLogin">立即登录</b>
      </div>
      <div class="user_bottom">
        <div v-for="item in 3" :key="item">
          <div class="red">1</div>
          <p>我的特色课</p>
          <span> 已购特色课程的学习 </span>
        </div>
      </div>
    </div>
    <!-- 邀请好友注册 -->
    <div class="bar">
      <p>邀请好友注册app，享多重好礼</p>
      <p>限时特惠，多邀多得</p>
      <div class="bar_right">
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 课程相关 -->
    <div class="con">
      <p>课程相关</p>
      <div class="iconButton">
        <div>
          <van-icon name="friends" class="icon" /><br />
          <span>关注的老师</span>
        </div>
        <div>
          <van-icon name="friends" class="icon" /><br />
          <span>我的收藏</span>
        </div>
      </div>
    </div>
    <!-- 订单相关 -->
    <div class="con">
      <p>订单相关</p>
      <div class="iconButton">
        <div>
          <van-icon name="balance-list" class="icon" /><br />
          <span>课程订单</span>
        </div>
        <div>
          <van-icon name="balance-list" class="icon" /><br />
          <span>会员订单</span>
        </div>
        <div>
          <van-icon name="balance-list" class="icon" /><br />
          <span>约课订单</span>
        </div>
      </div>
    </div>
    <!-- 我的账户 -->
     <div class="con">
      <p>我的账户</p>
      <div class="iconButton">
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>优惠劵</span>
        </div>
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>学习卡</span>
        </div>
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>会员</span>
        </div>
      </div>
    </div>
      <!-- 自助服务 -->
    <div class="con">
      <p>自助服务</p>
      <div class="iconButton">
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>我的消息</span>
        </div>
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>意见反馈</span>
        </div>
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>在线客服</span>
        </div>
        <div>
          <van-icon name="todo-list" class="icon" /><br />
          <span>设置</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {};
  }, // 计算属性
  computed: {}, // 侦听器
  watch: {}, // 组件方法
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    },
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */ created() {},
  mounted() {},
};
</script> 

<style lang="scss" scoped >
.box{
    width: 100%;
    height: 90vh;
    overflow: scroll;
}
.user_icon {
  width: 100%;
  padding: 0.5rem 0.5rem 0.2rem 0.7rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #ccc;
  img {
    width: 0.5rem;
    border-radius: 50%;
  }
}
.user_bottom {
  width: 100%;
  margin: 0.1rem 0;
  display: flex;
  div {
    flex: 1;
    text-align: center;
    .red {
      color: red;
      font-size: 0.3rem;
    }
    span {
      color: #666;
      font-size: 0.12rem;
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
}
.bar {
  width: 90%;
  margin: 0 5%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  background: orange;
  color: white;
  line-height: 0.25rem;
  border-radius: 0.25rem;
  position: relative;
  .bar_right {
    position: absolute;
    right: 0.1rem;
    top: 0.15rem;
  }
}
.con {
  padding: 0.2rem 0.2rem 0 0.2rem;
  box-sizing: border-box;

  .iconButton {
    display: flex;
    margin-top: 0.2rem;
    width: 100%;
    text-align: center;
    font-size: 0.1rem;
    div {
      width: 0.8rem;
    }
    span {
      color: #666;
    }
    .icon {
      font-size: 0.3rem;
      color: red;
    }
  }
}
</style>
