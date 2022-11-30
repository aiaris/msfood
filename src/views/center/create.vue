<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="菜单名称" prop="input">
        <el-input v-model="form.input" placeholder="请输入菜单名称"> </el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="6"
          placeholder="请输入菜单描述信息"
          v-model="form.textarea"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          action="http://39.103.66.129:3001/create/upload"
          list-type="picture-card"
          name="uploadFile"
          :on-success="handleAvatarSuccess"
        >
          <div slot="tip" class="el-upload__tip">
            只能上传jpg文件，且不超过500kb
          </div>
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button
          type="danger"
          @click="onSubmit"
          class="create"
          :disabled="open"
        >
          创建菜单
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: "",
        textarea: "",
      },
      rules: {
        input: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
      },
      dialogImageUrl: "",
      dialogVisible: false,
      img: "",
      open: true,
    }
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log(res)
      this.img = res.urls[0].split("/").pop()
      this.open = false
    },
    onSubmit() {
      //console.log(this.form);
      // console.log(this.img);
      const { input, textarea } = this.form
      const now = new Date()
      const params = `cname=${input}&cdetail=${textarea}&cimg=${
        this.img
      }&ctime=${now.getTime() / 1000}&username=${this.$store.state.username}`
      this.axios.post("/create/store", params).then(res => {
        console.log(res)
        if (res.data.code == 1) {
          this.$router.push("/center/mycollect")
          this.$message({
            message: "发布成功！！",
            type: "success",
          })
          //console.log(this.form)
        } else {
          this.$message.error("发布失败")
        }
      })
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      //console.log(file);
    },
  },
}
</script>

<style lang="scss" scoped></style>
<style scoped>
form {
  width: 800px;
  margin: 10px auto 0;
}
.create {
  width: 170px;
}
</style>
