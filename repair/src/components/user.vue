<template>
    <div>
        <el-button @click="back">返回</el-button>
        <el-container>
            <el-header>
                <div v-if="$store.state.User==''">用户登录</div>
                <div v-if="$store.state.User!=''">{{$store.state.User}}</div>
            </el-header>
            <el-main>
                <div v-if="$store.state.User==''">账号：<el-input v-model="account" placeholder="请输入账号"></el-input></div>
                <div v-if="$store.state.User==''">密码：<el-input v-model="password" placeholder="请输入密码" show-password></el-input></div>
                <br>
                <el-button type="primary" @click="Sign">登录</el-button><el-button type="primary" v-if="$store.state.User==''">注册</el-button>
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
        methods: {
            back() {
                this.$router.go(-1)
            },
            Sign(){
                if (this.account == '' || this.password == '') {
                    alert('账号或密码不能为空')
                } else if(this.account.split('%').length>1 || this.password.split('%').length>1) {
                    alert('账号或密码不能包含%')
                } else {
                    var token = this.account + '%' + this.password
                    this.$store.dispatch('userSign',token)
                    this.$router.push({name:'menu'})
                }
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