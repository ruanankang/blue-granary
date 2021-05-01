<template>
  <div id="data-collection">
    <el-row :gutter="20">
      <el-col :span="16">
        <!-- 视频 -->
        <div class="grid-content bg-purple left-contain">
          <div class="video-contain">
            视频区域
          </div>
          <div class="control">
            <el-button type="primary">识别</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <!-- 表单 -->
        <div class="grid-content bg-purple right-contain">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="图像名称">
              <el-input v-model="form.pictureName"></el-input>
            </el-form-item>
            <el-form-item label="参数名称">
              <el-input v-model="form.parameterName1"></el-input>
            </el-form-item>
            <el-form-item label="参数值">
              <el-input v-model="form.parameterValue1"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button>修正</el-button>
              <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "DataCollection",
  data() {
    return {
      form: {
        pictureName: "",
        parameterName1: "",
        parameterValue1: "",
        parameterName2: "",
        parameterValue2: "",
        parameterName3: "",
        parameterValue3: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss">
#data-collection,
.el-row,
.el-col {
  height: 100%;
}

/* 左边 */
#data-collection .left-contain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#data-collection .video-contain {
  height: 60vh;
  width: 80vh;
  border: 3px solid #eee;
  margin: 10vh 0 20px;
}

/* 右边 */
#data-collection .right-contain {
  height: 100%;
  box-sizing: border-box;
  border-left: 3px solid #eee;
  padding: 40px 20px;
}
</style>
