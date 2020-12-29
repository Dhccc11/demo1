<template>
<div class="login-context">
    <div class="login-box">
        <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
        <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
            <span class="login-title">欢迎登录</span>
            <div style="margin-top: 5px"></div>
            <el-form-item label="用户名" prop="loginName">
                <el-col :span="22">
                    <el-input type="text" v-model="loginForm.loginName"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="密码" prop="loginPassword">
                <el-col :span="22">
                    <el-input type="password" v-model="loginForm.loginPassword"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
                <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>    
</template>
<script>
    export default {
        name: "login",
        data() {
            return {
                isLogin:false,
                loginForm: {
                    loginName: '',
                    loginPassword: ''
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                loginFormRules: {
                    loginName: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    loginPassword: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            loginSubmit(formName) {
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                        console.log("to loginSuccess")
                        this.$router.push({path:"/Home",query : {username:this.loginForm.loginName,isLogin:this.isLogin} })
                        isLogin=true;
                    } else {
                        return false;
                    }
                    
                });
            }
        }
    }
</script>
<style scoped>
    .login-context{
        background: url("../assets/imagebox/14.jpg");
        height: 600px;
        width: 100%;
        position: relative;
        top: -150px;

    }
    .login-box {
        border: 1px solid #25407e;
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 20px;
        box-shadow: 0 0 25px rgb(228, 170, 45);
        position: relative;
        top: 120px;
        left: -270px;
        background: whitesmoke;
       
    }
    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #c53535;
        font-size: 30px;
        font-weight: bold;
    }
</style>
