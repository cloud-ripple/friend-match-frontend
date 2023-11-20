<script setup lang="ts">
// 点击用户头像
const onClickUser = () => {}
</script>

<template>
  <!-- 顶部区域-提到、评论、点赞、粉丝、通知互动 -->
  <van-grid icon-size="30px" :column-num="5" :gutter="1" :border="false" :clickable="true" square>
    <van-grid-item icon="chat-o" icon-color="#B7AB6AFF" text="提到"></van-grid-item>
    <van-grid-item icon="comment-o" icon-color="#76BB0DFF" text="评论" />
    <van-grid-item icon="good-job-o" icon-color="#1989fa" text="点赞" />
    <van-grid-item icon="like-o" icon-color="#29A61CFF" text="粉丝" />
    <van-grid-item icon="volume-o" icon-color="#B024C9FF" text="通知互动" />
  </van-grid>
  <!-- 聊天区域 -->
  <van-space
    direction="vertical"
    fill
    style="padding: 5px; margin-bottom: 4px; background: #fbfafa"
  >
    <van-row>
      <van-col span="4">
        <!-- 用户头像-->
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          @click="onClickUser"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="15" />
          </template>
        </van-image>
      </van-col>
      <van-col span="14">
        <!-- 用户昵称（最大长度为6） -->
        <span
          class="custom-title"
          style="
            display: inline-block;
            color: #191818;
            font-size: 15px;
            margin-bottom: 6px;
            font-weight: 600;
          "
          >哈忘语今天咩来</span
        >
        <van-text-ellipsis
          rows="1"
          content="在干嘛尼，出来吃饭呀！"
          style="color: #868483; font-size: 14px"
        />
      </van-col>
      <van-col span="4">
        <span class="custom-title" style="display: inline-block; color: #b4b1ad; font-size: 12px"
          >2023-11-20
        </span>
        <van-badge :content="22" max="99" :show-zero="false" :offset="[5, 18]"></van-badge>
      </van-col>
    </van-row>
  </van-space>
  <van-space
    direction="vertical"
    fill
    style="padding: 5px; margin-bottom: 4px; background: #fbfafa"
  >
    <van-row>
      <van-col span="4">
        <!-- 用户头像-->
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          @click="onClickUser"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="15" />
          </template>
        </van-image>
      </van-col>
      <van-col span="14">
        <!-- 用户昵称（最大长度为6） -->
        <span
          class="custom-title"
          style="
            display: inline-block;
            color: #191818;
            font-size: 15px;
            margin-bottom: 6px;
            font-weight: 600;
          "
        >哈忘语今天咩来</span
        >
        <van-text-ellipsis
          rows="1"
          content="在干嘛尼，出来吃饭呀！"
          style="color: #868483; font-size: 14px"
        />
      </van-col>
      <van-col span="4">
        <span class="custom-title" style="display: inline-block; color: #b4b1ad; font-size: 12px"
        >2023-11-20
        </span>
        <van-badge :content="22" max="99" :show-zero="false" :offset="[5, 18]"></van-badge>
      </van-col>
    </van-row>
  </van-space>
  <van-space
    direction="vertical"
    fill
    style="padding: 5px; margin-bottom: 4px; background: #fbfafa"
  >
    <van-row>
      <van-col span="4">
        <!-- 用户头像-->
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          @click="onClickUser"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="15" />
          </template>
        </van-image>
      </van-col>
      <van-col span="14">
        <!-- 用户昵称（最大长度为6） -->
        <span
          class="custom-title"
          style="
            display: inline-block;
            color: #191818;
            font-size: 15px;
            margin-bottom: 6px;
            font-weight: 600;
          "
        >哈忘语今天咩来</span
        >
        <van-text-ellipsis
          rows="1"
          content="在干嘛尼，出来吃饭呀！"
          style="color: #868483; font-size: 14px"
        />
      </van-col>
      <van-col span="4">
        <span class="custom-title" style="display: inline-block; color: #b4b1ad; font-size: 12px"
        >2023-11-20
        </span>
        <van-badge :content="22" max="99" :show-zero="false" :offset="[5, 18]"></van-badge>
      </van-col>
    </van-row>
  </van-space>
  <van-space
    direction="vertical"
    fill
    style="padding: 5px; margin-bottom: 4px; background: #fbfafa"
  >
    <van-row>
      <van-col span="4">
        <!-- 用户头像-->
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          @click="onClickUser"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="15" />
          </template>
        </van-image>
      </van-col>
      <van-col span="14">
        <!-- 用户昵称（最大长度为6） -->
        <span
          class="custom-title"
          style="
            display: inline-block;
            color: #191818;
            font-size: 15px;
            margin-bottom: 6px;
            font-weight: 600;
          "
        >哈忘语今天咩来</span
        >
        <van-text-ellipsis
          rows="1"
          content="在干嘛尼，出来吃饭呀！"
          style="color: #868483; font-size: 14px"
        />
      </van-col>
      <van-col span="4">
        <span class="custom-title" style="display: inline-block; color: #b4b1ad; font-size: 12px"
        >2023-11-20
        </span>
        <van-badge :content="22" max="99" :show-zero="false" :offset="[5, 18]"></van-badge>
      </van-col>
    </van-row>
  </van-space>
  <van-space
    direction="vertical"
    fill
    style="padding: 5px; margin-bottom: 4px; background: #fbfafa"
  >
    <van-row>
      <van-col span="4">
        <!-- 用户头像-->
        <van-image
          round
          fit="cover"
          width="50"
          height="50"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          @click="onClickUser"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="15" />
          </template>
        </van-image>
      </van-col>
      <van-col span="14">
        <!-- 用户昵称（最大长度为6） -->
        <span
          class="custom-title"
          style="
            display: inline-block;
            color: #191818;
            font-size: 15px;
            margin-bottom: 6px;
            font-weight: 600;
          "
        >哈忘语今天咩来</span
        >
        <van-text-ellipsis
          rows="1"
          content="在干嘛尼，出来吃饭呀！"
          style="color: #868483; font-size: 14px"
        />
      </van-col>
      <van-col span="4">
        <span class="custom-title" style="display: inline-block; color: #b4b1ad; font-size: 12px"
        >2023-11-20
        </span>
        <van-badge :content="22" max="99" :show-zero="false" :offset="[5, 18]"></van-badge>
      </van-col>
    </van-row>
  </van-space>
</template>

<style scoped></style>
