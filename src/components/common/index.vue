<template>
  <div class="main">
    <Table :form="form" :formData="formData"></Table>
  </div>
</template>
<script lang="ts">
import { ref, getCurrentInstance, reactive  } from 'vue'
import Common from '@/util/common'
import Table from '@/components/table/index.vue'
export default {
  components:{
    Table
  },
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

    const formData = reactive([
      {label:'姓名',value:'name',type:'input'},
      {label:'年龄',value:'select',type:'select',selectList:[
        {name:'12',value:12},
        {name:'18',value:18},
      ]},
    ]);

    const form = ref({
      name:'test',
      select:18,
    })

    return {
      newArr,
      toList,
      count,
      formData,
      form,
    }
  }
}
</script>

<style lang="scss">
 
</style>
