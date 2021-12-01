<template>
  <div class="main">
    <Table :form="form" :formData="formData">
    </Table>
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

    let assList = {a:1, b:2}
    // let obsList = assList;
    let obsList = <any>{};
    for(let item in assList){
      obsList[item] = assList[item];
    }
    obsList.b = 3;
    console.log(assList, obsList)

    let mapList = <any>[1, 2, 4, 5];
    mapList.some((res:any) => {
      console.log(res)
      return true;
    })

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
      {label:'年龄',value:'age',type:'select',selectList:[
        {name:'12',value:12},
        {name:'18',value:18},
      ]},
      {label:'性别',value:'sex',type:'radio',radioList:[
        {name:'男',value:1},
        {name:'女',value:2},
      ]},
    ]);

    const form = ref({
      name:'admin',
      age:18,
      sex:1,
    })

    const msg = ref(0)

    return {
      newArr,
      toList,
      count,
      formData,
      form,
      msg,
    }
  }
}
</script>

<style lang="scss">
 
</style>
