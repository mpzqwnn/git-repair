<template>
    <div class="menu">
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>报修</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item @click.native="SetNum(0)" index="1-1">报修提交</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="更多功能敬请期待">
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="SetNum(1)">个人信息</el-dropdown-item>
              <el-dropdown-item @click.native="SetNum(2)">提交历史</el-dropdown-item>
              <el-dropdown-item @click.native="clear">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{$store.state.User}}</span>
        </el-header>
        <el-main>
          <el-form v-show="Snum==0" ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="报修地址" prop="address">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="报修时间" prop="date">
              <el-col :span="4">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1">——</el-col>
              <el-col :span="4">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="维修性质" prop="type">
              <el-radio-group v-model="form.type">
                <el-radio label="以旧换新"></el-radio>
                <el-radio label="普通维护"></el-radio>
                <el-radio label="紧急维修"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="维修原因" prop="desc">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native="Submit">立即提交</el-button>
              <el-button @click.native="cancel('form')">重写</el-button>
            </el-form-item>
            </el-form>
            <div v-show="Snum==1">
              <h1>当前账号：{{$store.state.User}}</h1>
              <h2>当前密码：{{$store.state.UserPassword}}</h2>
            </div>
            <el-table v-show="Snum==2" :data="tableData" :key="tableKey">
              <el-table-column prop="type" label="种类" width="100">
              </el-table-column>
              <el-table-column prop="date1" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
              <el-table-column prop="desc" label="需求" width="200">
              </el-table-column>
              <el-table-column prop="Progress" label="是否完成" width="200">
                <template slot-scope="scope">
                  <a v-show="scope.row.Progress">完成</a>
                  <a v-show="!scope.row.Progress">未完成</a>
                </template>
              </el-table-column>

            </el-table>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script>
import axios from 'axios'
import Buffer from 'vue-buffer'
    export default {
        data() {
            return {
              tableKey:0,
                Snum:0,
                token:"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",
                owern:"mpzqwnn",
                repo:"git-repair",
                path:"repair/dist/order.json",
                form:{
                  name: '',
                  address: '',
                  date1: '',
                  date2: '',
                  type: '',
                  desc: '',
                },
                tableData:[]
            }
        },
        mounted () {
          var that= this
          axios.get('./order.json')
          .then(function (response) {
            that.tableData = response.data.order
          }
          )
        },
        methods: {
          Submit() {
            if(this.form.address && this.form.date1 && this.form.date2 && this.form.desc && this.form.name && this.form.type){
              this.$set(this.form,'user',this.$store.state.User)
              this.$set(this.form,'Progress',false)
              this.$set(this.form,'id',this.tableData.length)
              this.form.date1= this.form.date1.toString().split(" ")[0]+' ' +this.form.date1.toString().split(" ")[1]+' ' +this.form.date1.toString().split(" ")[2]+' ' +this.form.date1.toString().split(" ")[3]+' '+this.form.date2.toString().split(' ')[4]
              var that = this
              axios.get(`https://api.github.com/repos/${this.owern}/${this.repo}/contents/${this.path}`, {
                  headers: {
                      Authorization: `token ${that.token}`,
                      Accept: 'application/vnd.github.v3.raw+json'
                  }
              })
              .then(response => {
                const data = response.data
                data.order.push(that.form)
                const content=JSON.stringify(data,'','\t')
                const body = {
                   message: 'update data',
                   content: Buffer.from(content).toString('base64'),
                   sha: response.headers.etag.replace(/"/g, '')
                };
                return axios({
                   method: 'PUT',
                   url: `https://api.github.com/repos/${that.owern}/${that.repo}/contents/${that.path}`,
                     headers: {
                       Authorization: `token ${that.token}`,
                       Accept: 'application/vnd.github.v3+json',
                       'Content-Type': 'application/json'
                   },
                   data: body
                });
              })
              .then(response => {
                  alert('提交成功');
                  that.$refs["form"].resetFields()
              })
              .catch(error => {
                  console.error('Error updating file:', error);
              });
              var that= this
              axios.get('./order.json')
              .then(function (response) {
                  that.tableData = response.data.order
                }
              )
            }else{
              alert('请输入完整信息')
            }
          },
          cancel(form){
            this.$refs[form].resetFields()
          },
          SetNum(x){
            this.Snum = x
          },
          clear(){
            this.$store.state.User =""
            this.$store.state.UserPassword =""
            this.$router.push({name:'user'})
          }
        },
        
    }
</script>

<style lang="scss" scoped>
  .menu{
    margin-top: 8%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  .line{
    text-align: center;
  }

</style>