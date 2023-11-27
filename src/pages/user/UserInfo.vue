<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/models/user'
import { useRouter } from 'vue-router'
import { updateUserAPI } from '@/apis/userAPI'
import { showNotify } from 'vant'

const router = useRouter()
// 点击导航栏左侧
const onClickLeft = () => {
  // 保存用户修改信息
  save()
  // 返回
  history.back()
}

// 点击导航栏右侧
const onClickRight = () => {
  // 保存用户修改信息
  save()
  router.push({
    name: 'sousuo'
  })
}

// 当前登录用户信息
const user: any = ref<User>({
  id: 3, // id
  username: '云漪', // 用户昵称
  userAccount: 'ripple', // 用户账号
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg', // 用户头像
  gender: 1, // 用户性别
  userPassword: '11111111', //用户密码
  phone: '13267891234', // 电话
  email: '1493440094@qq.com', //邮箱
  userStatus: 0, //用户状态
  createTime: new Date('2023-11-23'), //创建时间
  updateTime: new Date('2023-11-23'), //更新时间
  isDelete: 0, //逻辑删除
  userRole: 1, //用户角色
  planetCode: 1, //星球编号
  tags: '["java", "网上冲浪"]', //用户所拥有的标签
  area: '苏州市', //所在地区
  selfDesc: '心动不如行动', //自我描述，个性签名
  fansNum: 0 //粉丝数量
})

// 用户头像url
const avatarUrl = ref([{ url: user.value.avatarUrl }])

// 单选框的值，根据 name 标识符匹配
const checkedName = ref(user.value.gender.toString())
// 切换单选框时触发
const changeRadio = (val: any) => {
  // console.log('当前选择的性别，', checkedName.value, val)
}

// 控制弹窗是否显示
const showDialog = ref(false)
// 编辑信息，当前点击每一行单元格时触发该回调（接收修改字段的 name，具体的值）
const EditInfo = (name: any, val: any) => {
  console.log('修改资料: ', name, val)
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
  // 修改当前编辑的属性字段名
  updateName.value = name
}

// 弹窗标题
const dialogTitle = ref('')
// 输入框当前值
const fieldInput = ref('')
// 标识当前正在编辑的属性名字段
const updateName = ref('')

// 弹窗确认时触发 - 先在内存中修改好user的用户信息，最后调用接口时再传入该user对象作为请求参数
const confirmDialog = () => {
  // console.log('当前正在修改的属性名 = ', updateName.value, ' 输入框值 = ', fieldInput.value)
  // todo 先修改内存中的当前用户属性信息，调用接口时直接传入该用户即可
  if (updateName.value === 'gender') {
    // 如果修改的是性别，需要把单选框的值赋给用户的性别
    user.value.gender = Number(checkedName.value)
  } else if (updateName.value === 'tags') {
    // 如果修改的是标签，需要把已选标签列表赋给用户的tags属性
    user.value.tags = selectedTagsList.value.toString()
  } else {
    // 其它属性都是输入框值修改
    user.value[`${updateName.value}`] = fieldInput.value
  }
  // 此处点击弹窗确认后，可以直接调用接口更新数据，但考虑到每次确认都会调用接口
  // 不如直接在导航栏的函数中调用，当用户点击返回、搜索时再更新保存
}

// 保存用户信息（此方法才是真正更新后台用户信息）
const save = () => {
  // 调用接口，并传入当前内存中的用户
  updateUserAPI(user.value)
    .then((res) => {
      if (res.data.code === 200) {
        // 成功通知
        showNotify({ type: 'success', message: '信息保存成功！', duration: 800 })
      }
    })
    .catch((error) => {
      // 错误通知
      showNotify({ type: 'danger', message: '保存失败了！', duration: 1000 })
    })
}

// 弹窗取消
const cancelDialog = () => {}

// 已选标签列表(里面存放标签名字符串)
const selectedTagsList: any = ref(['java', 'python', '前端', '网上冲浪', '男'])

// 点击关闭标签时触发
const onCloseTag = (tagName: any) => {
  // console.log(`当前要关闭的标签名：`, tagName)
  // 对当前要关闭的标签，通过名字在已选标签列表中进行比对，过滤出不需要关闭的标签，重新赋值数据渲染
  selectedTagsList.value = selectedTagsList.value.filter((item: any) => {
    return item !== tagName
  })
}
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
    @confirm="confirmDialog()"
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
        <van-radio name="1">男</van-radio>
        <van-radio name="0">女</van-radio>
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
      <van-row justify="space-around" v-if="dialogTitle === '我的标签'">
        <van-space align="center" size="5px" style="padding: 5px" fill wrap>
          <!-- show 指定是否展示标签(默认true), 添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。-->
          <van-tag
            plain
            round
            closeable
            color="#676767"
            size="large"
            @close="onCloseTag(tag)"
            v-for="tag in selectedTagsList"
            :key="tag"
            >{{ tag }}</van-tag
          >
        </van-space>
      </van-row>

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
      :value="user.gender === 1 ? '男' : '女'"
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
