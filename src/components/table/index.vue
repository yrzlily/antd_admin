<template>
    <div id="table">
        <a-form :model="formBase" :label-col="labelCol" :wrapper-col="wrapperCol">
            <template v-for="(item, index) in formData" :key="index + '_form'">
                <a-form-item v-if="item.type == 'input'" :label="item.label">
                    <a-input allowClear v-model:value.trim="formBase[item.value]" />
                </a-form-item>
                <a-form-item v-if="item.type == 'select'" :label="item.label">
                    <a-select v-model:value="formBase[item.value]" placeholder="请选择">
                        <a-select-option v-for="item_select in item.selectList" :key="item_select.name" :value="item_select.value">{{item_select.name}}</a-select-option>
                    </a-select>
                </a-form-item>
                 <a-form-item  v-if="item.type == 'switch'" :label="item.label">
                    <a-switch v-model:checked="formBase[item.value]" />
                </a-form-item>
                <a-form-item v-if="item.type == 'checkbox'" :label="item.label">
                    <a-checkbox-group v-model:value="formBase[item.value]">
                        <a-checkbox v-for="item_checkbox in item.checkboxList" :key="item_checkbox.value" :value="item_checkbox.value" :name="item_checkbox.type">{{item_checkbox.name}}</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>
                 <a-form-item v-if="item.type == 'radio'" :label="item.label">
                    <a-radio-group v-model:value="formBase[item.value]">
                        <a-radio v-for="item_radio in item.radioList" :key="item_radio.value" :value="item_radio.value">{{item_radio.name}}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item v-if="item.type == 'textarea'" :label="item.label">
                    <a-input v-model:value="formBase[item.value]" type="textarea" />
                </a-form-item>
            </template>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">提交</a-button>
                <a-button style="margin-left: 10px">取消</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Dayjs } from 'dayjs';
import type { UnwrapRef } from 'vue';


export default defineComponent({
    props:['formData','form'],
    setup(props) {
        const formData = props.formData;
        
        const formBase:any = props.form;
        const onSubmit = () => {
            console.log('submit!', toRaw(formBase));
        };

        for(let item in formBase){
            console.log(item)
        }
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            formData,
            onSubmit,
            formBase,
        };
    },
})
</script>
<style lang="scss" scoped>

</style>