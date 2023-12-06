<template>
    <div>
        <div class="operation" v-if="$route.path=='/scene'">
            <br>
            <br>
            <br>
            <div v-for="(item,index) in text" :key="index">
                <br v-if="index<5*num && index>=5*num-5">
                <notice @click.native="go(index)" v-if="index<5*num && index>=5*num-5" class="notice" :title="text[index].title" :message="text[index].message" />
            </div>
            <br>
            <br>
            <div class="button">
                <span><input v-if="num!=1" type="button" value="首页" @click="setNum(1)"></span>
                <span v-for="index in pageNum" :key="index">
                <input type="button" :value="index" @click="setNum(index)">
                </span>
                <span><input v-if="num!=pageNum" type="button" value="尾页" @click="setNum(pageNum)"></span>
            </div>
        </div>
        <div class="operation" v-show="$route.path!='/scene'">
            <br>
            <br>
            <br>
            <br>
            <a href="#" @click="go(-1)">《返回</a>
            <div class="sidebar" v-show="page!=0">
                <h2>其他操作教程</h2>
                <p v-show="page!=index+1" v-for="(item,index) in text" :key="index"><a href="#" @click="go(index)">{{text[index].title}}</a></p>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import notice from './notice.vue'
    export default {
        data() {
            return {
                home:0,
                num:1,
                page:0,
                information:"Big",
                text:[{title:'scene title',message:'scene message'}]
            }
        },
        components: {
            notice,
        },
        mounted () {
            var that = this
            axios.get("./db.json")
            .then(function (response) {
                for (let index = 0; index < response.data.scene.length; index++) {
                    let newData={
                        title:response.data.scene[index].title,
                        message:response.data.scene[index].message
                    }
                    that.text.push(newData)
                }
            },function(err){
                console.log(err)
            })
        },
        computed: {
            pageNum() {
                var i = this.text.length%5
                var num = 0
                i>0 ? num = (this.text.length - i)/5 +1 : num = this.text.length / 5
                return  num
            }
        },
        methods: {
            setNum(val) {
                this.num = val
            },
            go(val){
                this.page = val + 1
                if(this.page == 0){
                    this.$router.push({
                        name:'scene',
                    },()=>{},()=>{})
                }else{
                    this.$router.push({
                        name:'message3',
                    },()=>{},()=>{})
                    this.$store.dispatch('textTitle',this.text[val].title)
                    this.$store.dispatch('textMessage',this.text[val].message)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.operation{
    margin-top: 2%;
    background-color: azure;
}
.notice{
    margin-left: 10%;
    cursor : pointer;
}
.button{
    margin-right: 10%;
    margin-top: -30px;
    float: right;
}
.sidebar{
    background-color: rgba(100, 148, 237, 0.171);
    position:absolute;
    top:15%;
    right: 0;
    width: 20%;
}
.Big{
    margin-top: 5rem;
}
.Small{
    margin-top: 5%;
}
</style>