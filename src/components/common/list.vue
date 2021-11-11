<template>
    123
    <a-button @click="toIndex">toIndex</a-button>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    setup() {
        const {proxy} = <any>getCurrentInstance();

        const toIndex = ()=>{
            proxy.$router.push({
                path:'/index'
            })
        }

        return {
            toIndex,
        }
    },
})
</script>
<style lang="scss" scoped>

</style>