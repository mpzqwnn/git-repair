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
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
        </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
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
            
            <el-table v-show="Snum==2" :data="tableData">
              <el-table-column prop="object" label="种类" width="100">
              </el-table-column>
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
              <el-table-column prop="text" label="需求" width="200">
                <el-link type="primary">查看</el-link>
              </el-table-column>
              <el-table-column prop="type" label="订单类型" width="100">
              </el-table-column>
            </el-table>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                Snum:0,
                form:{
                  name: '',
                  address: '',
                  date1: '',
                  date2: '',
                  type: '',
                  desc: '',
                },
                tableData:[
                  {
                    name: '',
                    address: '',
                    date1: '',
                    date2: '',
                    type: '',
                    desc: ''
                  }
                ]
            }
        },
        methods: {
          
          Submit() {
            var that = this
            axios({
              method:"post",
              url:"../../public/order.json/order",
              data:{
              "user":that.$store.state.User,
              "name":that.form.name,
              "address":that.form.address,
              "date1":that.form.date1,
              "date2":that.form.date2,
              "type":that.form.type,
              "desc":that.form.desc
              },
              headers:{
                 "Content-Type":"application/json"
                },
              transformRequest(data) {
                return JSON.stringify(data);
              }
            }).then(function (response) {
              console.log(response);
              that.$refs['form'].resetFields()
            }).catch(function (error) {
              console.log(error);
            });
          },
          cancel(form){
            this.$refs[form].resetFields()
          },
          SetNum(x){
            this.Snum = x
          },
          clear(){
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