<template>
    <div>
        <el-button @click="back">返回</el-button>
        <el-container>
            <el-header>
                <div v-if="$store.state.Backstage==''">后台登录</div>
                <div v-if="$store.state.Backstage!=''">{{$store.state.Backstage}}</div>
            </el-header>
            <el-main>
                <div v-if="$store.state.Backstage==''">账号：<el-input v-model="account" placeholder="请输入账号"></el-input></div>
                <div v-if="$store.state.Backstage==''">密码：<el-input v-model="password" placeholder="请输入密码" show-password></el-input></div>
                <br>
                <el-button type="primary" @click="Sign">登录</el-button>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                account: this.$store.state.Backstage,
                password: this.$store.state.BackstagePassword
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
                    this.$store.dispatch('backstageSign',token)
                    if (this.account != '' || this.password != '') {
                        this.$router.push({name:'manage'})
                    }
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