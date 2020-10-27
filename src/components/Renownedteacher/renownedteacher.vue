<template>
  <div>
    <div class="Renowned_teacher_con">
      <div class="Renowned_teacher_warpper">
        <div class="Renowned_teacher_border">
          <p>明星讲师</p>
        </div>

        <div class="Renowned_teacher_content">
          <div class="Renowned_teacher_content_warpper">
            <!-- 左侧图片盒子 -->
            <div class="Renowned_teacher_content_left">
              <van-image
                round
                width="10rem"
                height="10rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                style="width: 40px; height: 40px"
              />
            </div>
            <!-- 描述盒子 -->
            <div class="Renowned_teacher_content_right">
              <div class="right_title">杨老师</div>

              <div class="right_msg">
               中学一级教师,16年教学经验学校骨干...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Renowned_teacher_con {
  width: 100%;
  height: 3.5rem;
}
.Renowned_teacher_warpper {
  width: 100%;
  height: 3.5rem;
  /* border: 1px solid #000; */
}
.Renowned_teacher_border {
  width: 100%;
  height: 0.23rem;
  display: flex;
}
.Renowned_teacher_border p {
  width: 90%;
  text-indent: 0.1rem;
  color: #595959;
  /* background: #f0f2f5; */
  border-left: 3px solid red;
  margin-left: 10px;
}
.Renowned_teacher_content {
  width: 100%;
  height: 0.8rem;
}
.Renowned_teacher_content_warpper {
  width: 95%;
  height: 0.8rem;
  background-color: #fff;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_msg {
  color: #b7b7b7;
}
.right_title {
  color: #595959;
}
</style>