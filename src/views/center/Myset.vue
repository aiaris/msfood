<template>
  <div class="recipe" v-if="userData">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="个人资料" name="1">
        <div class="avatar">
          <p>头像</p>
          <img
            :src="`http://39.103.66.129:3001/${
              form.img ? form.img : userData.avatar_image
            }`"
            alt=""
          />
        </div>
        <el-form ref="form" label-position="top" label-width="80px">
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="http://39.103.66.129:3001/create/upload"
              multiple
              name="uploadFile"
              :on-success="uploadimg"
            >
              <el-button size="small" type="danger" plain>点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex" fill="#ff6767">
              <el-radio-button label="男"></el-radio-button>
              <el-radio-button label="女"></el-radio-button>
              <el-radio-button label="保密"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="电子邮箱" style="width: 35%">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="个人签名" style="width: 70%">
            <el-input v-model="form.signature"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="setData">保存修改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="2">
        <el-form ref="form" label-position="top" label-width="80px">
          <el-form-item label="当前密码" style="width: 35%">
            <el-input v-model="form.upwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码" style="width: 35%">
            <el-input v-model="form.rpwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" style="width: 35%">
            <el-input v-model="form.repwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="setPwd">保存修改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
export default {
  data() {
    return {
      activeName: "1",
      userData: null,
      form: {
        sex: "男",
        email: "",
        signature: "",
        img: "",
        upwd: "",
        rpwd: "",
        repwd: "",
      },
    }
  },
  computed: {
    ...mapState(["username"]),
  },
  watch: {
    imgs(newValue, oldValue) {
      this.updataUsername({
        name: this.username,
        avatar: this.form.img,
      })
    },
  },
  mounted() {
    var imgs = this.form.img
    console.log(this.$store.state.username)
    this.getuserData()
  },
  methods: {
    ...mapMutations(["updataUsername"]),
    setPwd() {
      const url = "create/setpwd"
      const body = `upwd=${this.form.upwd}&repwd=${this.form.repwd}&username=${this.$store.state.username}`
      if (this.form.upwd != "") {
        if (this.form.rpwd != "") {
          if (this.form.repwd != "") {
            if (this.form.rpwd == this.form.repwd) {
              this.axios.post(url, body).then(res => {
                if (res.data.code == 1) {
                  alert("修改成功")
                } else {
                  alert("当前密码不正确")
                }
              })
            } else {
              alert("确认密码不一致")
            }
          } else {
            alert("请输入确认密码")
          }
        } else {
          alert("请输入新密码")
        }
      } else {
        alert("请输入当前密码")
      }
    },
    setData() {
      const url = `create/setuser`
      const body = `sex=${this.form.sex === "男" ? 1 : 0}&email=${
        this.form.email
      }&avatar_img=${this.form.img}&signature=${this.form.signature}&username=${
        this.$store.state.username
      }`
      this.axios.post(url, body).then(res => {
        console.log(res)
        if (res.data.code == 1) {
          this.$alert("修改成功", "修改成功", {
            confirmButtonText: "关闭",
          })
        }
      })
    },
    uploadimg(res, file, filelist) {
      console.log(res)
      this.form.img = res.urls[0].split("/").pop()
      console.log(this.form.img)
    },
    getuserData() {
      const url = `create/user?username=${this.$store.state.username}`
      this.axios.get(url).then(res => {
        console.log(res)
        this.userData = res.data.data[0]
        this.userData.sex ? (this.form.sex = "男") : (this.form.sex = "女")
        this.form.email = this.userData.email
        this.form.signature = this.userData.signature
      })
    },
  },
}
</script>

<style>
.el-tabs__item.is-active {
  color: #f56c6c;
}
.el-tabs__item:hover {
  color: #f56c6c;
}
.el-tabs__active-bar {
  background-color: #f56c6c;
}
</style>
<style src="@/assets/center/myset.css" scoped></style>
