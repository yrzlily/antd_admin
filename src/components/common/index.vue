<template>
  <div class="main">
    <a-button @click="toList">toList</a-button>
    <div v-for="item in newArr" :key="item">{{item}}</div>
  </div>
</template>
<script lang="ts">
import { ref, getCurrentInstance  } from 'vue'
import Common from '@/util/common'

export default {
  setup(){
    const {proxy} = <any>getCurrentInstance()
    const count = ref<number>(0)


    let x = [7, 8, 9, 10];
    let arr = [1, ...x];
    const newArr = arr.filter(res=>{
      return res%2 == 0
    })

    interface ContetStr{
      label?: string,
      name?: string,
    }

    const getCont = (ContetStr: ContetStr)=>{
      return ContetStr;
    }

    enum status{
      first = '正常',
      second = '关闭',
      third = '删除',
    }

    const common = new Common();
    common.title = '123';

    const toList = ()=>{
      proxy.$router.push({
        path:'list'
      })
    }

    return {
      newArr,
      toList,
      count,
    }
  }
}
</script>

<style lang="scss">
 
</style>
