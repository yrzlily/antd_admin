<template>
    <div class="login_content">
        <div class="login_box">
            <div class="login_title">系统登录</div>
            <a-form  :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="用户名" v-bind="validateInfos.name">
                    <a-input v-model:value="modelRef.name" />
                </a-form-item>
                <a-form-item label="密码" v-bind="validateInfos.password">
                    <a-input type="password" v-model:value="modelRef.password" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
                    <a-button style="margin-left: 10px" @click="reset">重置</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, getCurrentInstance } from 'vue'
import { Form } from 'ant-design-vue';

const useForm = Form.useForm;
export default defineComponent({
    setup() {
        const {proxy} = <any>getCurrentInstance()

        const modelRef = reactive({
            name: '',
            password:'',
        });
        const { resetFields, validate, validateInfos } = useForm(
        modelRef,
            reactive({
                name: [
                    {
                        required: true,
                        message: '请输入姓名',
                    },
                    ],
                    password: [
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ],
            }),
        );
        const onSubmit = () => {
            validate()
                .then(res => {
                    localStorage.setItem('token',res.username)
                    proxy.$router.push({
                        name:'index'
                    })
                })
                .catch(err => {
                    console.log('error', err);
                });
        };
        const reset = () => {
            resetFields();
        };
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            validateInfos,
            reset,
            modelRef,
            onSubmit,
        };
    },
})
</script>
<style lang="scss" scoped>
    .login_content{
        display: flex; justify-content: center; align-items: center; height: 800px;
        .login_title{font-size: 28px; font-weight: bold; text-align: center; margin-bottom: 20px;}
        .login_box{
            width: 600px; 
        }
    }
    
</style>