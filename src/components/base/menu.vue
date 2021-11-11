<template>
    <template v-for="item in children" >
        <a-sub-menu v-if="item.children" :key="item.id" :title="item.name">
            <MenuList :children="item.children"></MenuList>
        </a-sub-menu>
        <template v-else>
            <a-menu-item :key="item.id" @click="toRouter(item.path)">{{item.name}}</a-menu-item>
        </template>
    </template>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name:'MenuList',
    props: {
        children:{default:Object},
    },
    setup(props) {
        const children = props.children;
        const {proxy} = <any>getCurrentInstance()
        //页面跳转
        const toRouter = ((path:string) => {
            proxy.$router.push({
                path:path
            })
        })

        return {
            children,
            toRouter,
        }
    },
})
</script>
<style lang="scss" scoped>

</style>