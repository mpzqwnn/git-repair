<template>
    <div>
        <div class="navigation">
            <img align="left" class="logo" src="../assets/logo.png" :alt="title">
            <span class="title">
                {{title}}
                <img class="img" align="right" :src="optionimg" v-show="Width<=1000" @click="open">
                <div class="option" v-show="Width>1000">
                    <a>
                        <router-link replace class="optionTitle" active-class="check" :to="{name:option[0]}">{{optiontitle[0]}}</router-link>
                        <router-link replace class="optionTitle" active-class="check" :to="{name:option[1]}">{{optiontitle[1]}}</router-link>
                        <router-link replace class="optionTitle" active-class="check" :to="{name:option[2]}">{{optiontitle[2]}}</router-link>
                        <router-link replace class="optionTitle" active-class="check" :to="{name:option[3]}">{{optiontitle[3]}}</router-link>
                        <router-link replace class="optionTitle" active-class="check" :to="{name:option[4]}">{{optiontitle[4]}}</router-link>
                    </a>
                </div>
                <div class="option" v-show="Width<1000&&!optionType">
                    <div>
                        <router-link class="optionTitle" active-class="check" :to="{name:option[0]}">{{optiontitle[0]}}</router-link>
                    </div>
                    <div>
                        <router-link class="optionTitle" active-class="check" :to="{name:option[1]}">{{optiontitle[1]}}</router-link>
                    </div>
                    <div>
                        <router-link class="optionTitle" active-class="check" :to="{name:option[2]}">{{optiontitle[2]}}</router-link>
                    </div>
                    <div>
                        <router-link class="optionTitle" active-class="check" :to="{name:option[3]}">{{optiontitle[3]}}</router-link>
                    </div>
                    <div>
                        <router-link class="optionTitle" active-class="check" :to="{name:option[4]}">{{optiontitle[4]}}</router-link>
                    </div>
                </div>
            </span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:"报修系统",
                optionimg:"http://www.zhihuibaoxiu.com/tpl/manage/category/images/menu.png",
                optiontitle:["首页","操作教程","视频教程","场景模板","常见问题"],
                Width:0,
                option:["login","operation","video","scene","problem"],
                optionImg:true,
                optionType:true
            }
        },
        methods: {
            open() {
                this.optionImg ? this.optionimg = "http://www.zhihuibaoxiu.com/tpl/manage/category/images/icon-close.png" : this.optionimg="http://www.zhihuibaoxiu.com/tpl/manage/category/images/menu.png"
                this.optionImg = !this.optionImg
                this.optionType = !this.optionType
                console.log(this.option)
            },
        },
        mounted () {
            setInterval(() => {
                this.Width = window.outerWidth
            },16);
        },
    }
</script>

<style lang="scss" scoped>
.navigation{
    z-index: 999999;
    position:fixed ;
    top: 0;
    width: 100%;
    text-align: center;
    background-color: azure;
}
.img{
    cursor : pointer;
}
.logo{
    width: 50px;
}
.title{
    font-size: 40px;
}
.option{
    text-align: center;
}
.optionTitle{
    font-size: 20px;
    margin-left: 3rem;
    color: #000;
}
.check{
    color:aquamarine;
}

</style>