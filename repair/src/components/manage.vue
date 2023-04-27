<template>
    <div class="manage">
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1" @click.native="SetNum(2)">所有订单</el-menu-item>
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
              <el-dropdown-item @click.native="clear">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{$store.state.Backstage}}</span>
        </el-header>
    
        <el-main>
            <div v-show="Snum==1">
              <h1>当前账号：{{$store.state.User}}</h1>
              <h2>当前密码：{{$store.state.UserPassword}}</h2>
            </div>
            <el-table v-show="Snum==2" :data="tableData">
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
              <el-table-column prop="Progress" label="是否完成" width="100" align="center">
                <template slot-scope="scope">
                  <a v-show="scope.row.Progress">完成</a>
                  <a v-show="!scope.row.Progress">未完成</a>
                  <br>
                  <el-button size="mini" class="optBtn"
                       type="danger" icon="el-icon-delete" circle
                       @click.native.prevent="del(scope.row.id)"></el-button>
                  <el-button size="mini" class="optBtn"
                       type="warning"
                       icon="el-icon-edit" circle
                       @click.native.prevent="progress(scope.row.id)"></el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script>
import axios from 'axios';
import fs from 'fs'
import ms from 'ms';
    export default {
      data() {
          return {
              Snum:2,
              address: '',
              number:'',
              text:'',
              date:'',
              radio:'',
              tableData:[
                {
                  name: '',
                  address: '',
                  date1: '',
                  date2: '',
                  type: '',
                  desc: '',
                  Progress:false
                }
              ]
          }
      },
      mounted () {
          var that= this
          axios.get('./order.json',{
            "user":that.$store.state.User
            })
          .then(function(response){
            console.log(response)
            that.tableData = response.data.order
          });
      },
      methods: {
        progress(id) {
          fs.readFile('./order.json',function(err,data){
                var msg = JSON.parse(data.toString());
                msg.order[id].Progress=!msg.order[id].Progress
                var str = JSON.stringify(msg,'','\t')
                fs.writeFile('./order.json',str,function(err) {
                  if (err) {
                    console.error(err);
                  }
                  alert('修改成功');
                  this.$router.go(0)
                })
              })
        },
        del(id){
          fs.readFile('./order.json',function(err,data){
                var msg = JSON.parse(data.toString());
                msg.order.splice(id,1)
                for(let i=0;i<msg.order.length;i++){
                  msg.order[i].id=i
                }
                var str = JSON.stringify(msg,'','\t')
                fs.writeFile('./order.json',str,function(err) {
                  if (err) {
                    console.error(err);
                  }
                  alert('删除成功');
                  this.$router.go(0)
                })
              })
        },
        SetNum(x){
            this.Snum = x
        },
        clear(){
          this.$store.state.Backstage =""
          this.$store.state.BackstagePassword =""
          this.$router.push({name:'backstage'})
        }
      },
    }
</script>

<style lang="scss" scoped>
  .manage{
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


</style>