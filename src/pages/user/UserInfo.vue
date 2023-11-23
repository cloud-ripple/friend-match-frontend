<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/models/user'
import { useRouter } from 'vue-router'

const router = useRouter()
// 导航栏左侧
const onClickLeft = () => history.back()
// 导航栏右侧
const onClickRight = () => {
  router.push({
    name: 'sousuo'
  })
}

// 当前用户信息
const user = ref<User>({
  id: 1, // id
  username: '云漪', // 用户昵称
  userAccount: 'ripple', // 用户账号
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg', // 用户头像
  gender: 0, // 用户性别
  userPassword: '11111111', //用户密码
  phone: '13267891234', // 电话
  email: '1493440094@qq.com', //邮箱
  userStatus: 0, //用户状态
  createTime: new Date('2023-11-23'), //创建时间
  updateTime: new Date('2023-11-23'), //更新时间
  isDelete: 0, //逻辑删除
  userRole: 1, //用户角色
  planetCode: 1, //星球编号
  tags: "['java', '网上冲浪']", //用户所拥有的标签
  area: '苏州市', //所在地区
  selfDesc: '心动不如行动', //自我描述，个性签名
  fansNum: 0 //粉丝数量
})

// 用户头像url
const avatarUrl = ref([{ url: user.value.avatarUrl }])

// 单选框的值，根据 name 标识符匹配
const checkedName = ref('')
// 单选框组的值
const changeRadio = () => {
  console.log('当前选择的性别，', checkedName.value)
}

// 控制选择器是否显示
const showPicker = ref(false)
// 选择提交、
const onConfirm = () => {
  console.log('确认选择')
}

// 控制弹窗是否显示
const showDialog = ref(false)
// 编辑信息，当前点击每一行单元格时触发该回调（接收修改字段的 name，具体的值）
const EditInfo = (name: any, val: any) => {
  console.log('修改资料-', name, val)
  switch (name) {
    case 'selfDesc':
      dialogTitle.value = '个性签名'
      break
    case 'username':
      dialogTitle.value = '昵称'
      break
    case 'gender':
      dialogTitle.value = '性别'
      break
    case 'phone':
      dialogTitle.value = '电话'
      break
    case 'email':
      dialogTitle.value = '邮箱'
      break
    case 'userStatus':
      dialogTitle.value = '用户状态(0-正常)'
      break
    case 'createTime':
      dialogTitle.value = '注册日期'
      break
    case 'userRole':
      dialogTitle.value = '用户角色'
      break
    case 'planetCode':
      dialogTitle.value = '星球编号'
      break
    case 'tags':
      dialogTitle.value = '我的标签'
      break
    case 'area':
      dialogTitle.value = '所在地区'
      break
    case 'fansNum':
      dialogTitle.value = '粉丝数量'
      break

    default:
      dialogTitle.value = '修改资料'
      break
  }
  // 修改当前弹窗的标题
  showDialog.value = true
  // 修改当前输入框的值
  fieldInput.value = val
}

// 弹窗标题
const dialogTitle = ref('')
// 输入框当前值
const fieldInput = ref('')

// 弹窗确认
const confirmDialog = () => {
  // todo 调用接口
}
// 弹窗取消
const cancelDialog = () => {}

// 提交表单
const onSubmit = () => {}
</script>

<template>
  <!-- 顶部导航栏 -->
  <van-nav-bar
    title="编辑资料"
    left-text="返回"
    right-text="按钮"
    left-arrow
    fixed
    placeholder
    safe-area-inset-top
    clickable
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <!--导航栏右侧-内容插槽 -->
    <template #right>
      <van-icon name="search" size="25" />
    </template>
  </van-nav-bar>

  <!-- 头像 -->
  <van-row justify="center">
    <van-uploader
      v-model="avatarUrl"
      preview-size="90"
      accept="image/png, image/jpeg, image/jpg"
      reupload
      :show-upload="false"
      :deletable="false"
    />
  </van-row>
  <!-- 弹窗-用于修改资料 -->
  <van-dialog
    v-model:show="showDialog"
    :title="dialogTitle"
    show-cancel-button
    @confirm="confirmDialog"
    @cancel="cancelDialog"
  >
    <van-cell-group inset>
      <!-- 个性签名 -->
      <van-field
        v-if="dialogTitle === '个性签名'"
        v-model="fieldInput"
        rows="2"
        autosize
        type="textarea"
        maxlength="30"
        placeholder="请输入留言"
        show-word-limit
        style="border: 2px #e5e3e3 solid"
      />
      <!--昵称 -->
      <van-field
        v-if="dialogTitle === '昵称'"
        v-model="fieldInput"
        placeholder="请输入昵称"
        style="border: 2px #e5e3e3 solid"
      />

      <!-- 性别 -->
      <van-radio-group v-model="checkedName" @change="changeRadio" v-if="dialogTitle === '性别'">
        <van-radio name="男">男</van-radio>
        <van-radio name="女">女</van-radio>
      </van-radio-group>

      <!--电话 -->
      <van-field
        v-if="dialogTitle === '电话'"
        v-model="fieldInput"
        placeholder="请输入11位号码"
        style="border: 2px #e5e3e3 solid"
      />
      <!--邮箱 -->
      <van-field
        v-if="dialogTitle === '邮箱'"
        v-model="fieldInput"
        placeholder="请输入邮箱"
        style="border: 2px #e5e3e3 solid"
      />
      <!--用户状态 -->
      <van-field
        readonly
        v-if="dialogTitle === '用户状态(0-正常)'"
        v-model="fieldInput"
        style="border: 2px #e5e3e3 solid"
      />
      <!--注册日期 -->
      <van-field
        readonly
        v-if="dialogTitle === '注册日期'"
        v-model="fieldInput"
        style="border: 2px #e5e3e3 solid"
      />
      <!--用户角色 -->
      <van-field
        readonly
        v-if="dialogTitle === '用户角色'"
        v-model="fieldInput"
        style="border: 2px #e5e3e3 solid"
      />
      <!--星球编号 -->
      <van-field
        readonly
        v-if="dialogTitle === '星球编号'"
        v-model="fieldInput"
        style="border: 2px #e5e3e3 solid"
      />
      <!--我的标签 -->
      <van-field
        v-if="dialogTitle === '我的标签'"
        v-model="fieldInput"
        rows="6"
        autosize
        type="textarea"
        maxlength="255"
        placeholder="请输入留言"
        show-word-limit
        style="border: 2px #e5e3e3 solid"
      />
      <!--所在地区 -->
      <van-field
        v-if="dialogTitle === '所在地区'"
        v-model="fieldInput"
        style="border: 2px #e5e3e3 solid"
      />
      <!--粉丝数量 -->
      <van-field
        readonly
        v-if="dialogTitle === '粉丝数量'"
        v-model="fieldInput"
        style="border: 2px #e5e3e3 solid"
      />
    </van-cell-group>
  </van-dialog>

  <van-cell-group inset>
    <!--  个性签名 -->
    <van-cell
      title="个性签名"
      is-link
      :value="user.selfDesc"
      size="large"
      @click="EditInfo('selfDesc', user.selfDesc)"
    />

    <!--  昵称 -->
    <van-cell
      title="昵称"
      is-link
      :value="user.username"
      size="large"
      @click="EditInfo('username', user.username)"
    />
    <!--  性别 -->
    <van-cell
      title="性别"
      is-link
      :value="user.gender === 0 ? '男' : '女'"
      size="large"
      @click="EditInfo('gender', user.gender)"
    />

    <!--  电话 -->
    <van-cell
      title="电话"
      is-link
      :value="user.phone"
      size="large"
      @click="EditInfo('phone', user.phone)"
    />
    <!--  邮箱 -->
    <van-cell
      title="邮箱"
      is-link
      :value="user.email"
      size="large"
      @click="EditInfo('email', user.email)"
    />

    <!--  用户状态 -->
    <van-cell
      title="用户状态(0-正常)"
      :value="user.userStatus"
      size="large"
      @click="EditInfo('userStatus', user.userStatus)"
    />

    <!--  注册日期 -->
    <van-cell
      title="注册日期"
      :value="user.createTime.toDateString()"
      size="large"
      @click="EditInfo('createTime', user.createTime)"
    />
    <!--  用户角色 -->
    <van-cell
      title="用户角色"
      :value="user.userRole"
      size="large"
      @click="EditInfo('userRole', user.userRole)"
    />
    <!--  星球编号 -->
    <van-cell
      title="星球编号"
      :value="user.planetCode"
      size="large"
      @click="EditInfo('planetCode', user.planetCode)"
    />
    <!--  我的标签 -->
    <van-cell
      title="我的标签"
      is-link
      :value="user.tags"
      size="large"
      @click="EditInfo('tags', user.tags)"
    />
    <!--  所在地区 -->
    <van-cell
      title="所在地区"
      is-link
      :value="user.area"
      size="large"
      @click="EditInfo('area', user.area)"
    />
    <!--  粉丝数量 -->
    <van-cell
      title="粉丝数量"
      :value="user.fansNum"
      size="large"
      @click="EditInfo('fansNum', user.fansNum)"
    />
  </van-cell-group>
</template>

<style scoped></style>
