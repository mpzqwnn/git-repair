<template>
    <div>
        <el-container>
            <el-header>
                后台登录
            </el-header>
            <el-main>
                <div>账号：<el-input v-model="account" placeholder="请输入账号"></el-input></div>
                <div>密码：<el-input v-model="password" placeholder="请输入密码" show-password></el-input></div>
                <br>
                <el-button type="primary">登录</el-button><el-button type="primary">注册</el-button>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                account: '',
                password:''
            }
        },
    }
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 50px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-input{
    width: 20%;
  }
</style>