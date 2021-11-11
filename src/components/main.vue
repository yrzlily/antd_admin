<template>
  <a-layout id="main_content">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="item in menuList" :key="item.id">
          <a-sub-menu v-if="item.children">
            <template #icon>
              <DesktopOutlined />
            </template>
            <template #title>{{item.name}}</template>
            <MenuList :children='item.children' ></MenuList>
          </a-sub-menu>
          <a-menu-item v-else key="item.id" @click="toRouter(item.path)">
            <template #icon>
              <DesktopOutlined />
            </template>
            <span>{{item.name}}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header id="main_header" style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <div class="userBox">
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                个人信息
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <a @click="logoutBtn" href="javascript:;">退出登录</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined ,
  DesktopOutlined ,
} from '@ant-design/icons-vue';
import { defineComponent, ref, getCurrentInstance } from 'vue';
import MenuList from '@/components/base/menu.vue'

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    MenuList,
    DesktopOutlined
  },
  setup() {
    const {proxy} = <any>getCurrentInstance()
    //页面跳转
    const toRouter = ((path:string) => {
      proxy.$router.push({
        path:path
      })
    })
    //菜单列表
    const menuList = <any>[
      {
        id:1, name:'主页面', children:[
          {id:2, name:'子页面2', children:[
            {id:4, name:'子页面4', path:'/index', children:[
              {id:6, name:'子页面6', path:'/index'},
            ]},
            {id:5, name:'子页面5', path:'/user'},
          ]},
          {id:3, name:'子页面3', path:'/doct'},
        ]
      },
      {id:4, name:'列表页面', path:'/list'}
    ];

    //退出登录
    const logoutBtn = (() => {
      localStorage.removeItem('token');
      proxy.$router.push({
        name:'login'
      })
    })

    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>([]),
      menuList,
      logoutBtn,
      toRouter,
    };
  },
});
</script>
<style scoped lang="scss">
  #main_content{
    height: 100%;
    #main_header{
      display: flex; justify-content: space-between;
      .userBox{
        display: inline-block; padding: 0 20px;
      }
    }
    
  }
  #main_content .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #main_content .trigger:hover {
    color: #1890ff;
  }

  #main_content .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
</style>
