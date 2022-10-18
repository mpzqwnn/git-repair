<template>
    <div>
        <el-container>
            <el-header>后台登录</el-header>
            <el-main>
                <el-input v-model="account" placeholder="请输入账号"></el-input>
                <el-input v-model="password" placeholder="请输入密码"></el-input>
                <el-button type="primary">登录</el-button>
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

</style>