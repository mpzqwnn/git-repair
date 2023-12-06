<template>
    <div class="notice" :class="background" @mouseout="out()" @mouseover="over()">
        <br>
        <div :class="background">
            <div class="frame">
                <img :class="imgStyle" src="../../public/微信图片_20220918151159.jpg">
                <div :class="background" class="w1">
                    <a href="#" class="text w3 font">{{title}}</a>
                    <a href="#" class="text w2">{{message}}</a>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgStyle: "img Big",
                background:""
            }
        },
        methods: {
            over() {
                this.background = "background"
            },
            out(){
                this.background = ""
            }
        },
        props:['title','message']
    }
</script>

<style lang="scss" scoped>
.notice{
    width: 80%;
    height: auto;
    border-radius: 18px;
    border-width: 1px;
    border-color: rgb(146, 146, 146);
    background-color: #fff;
}
.background{
    background-color:rgb(209, 209, 209);
}
.img{
    margin-left: 1%;
    border-radius: 18px;
}
.Big{
    width: 300px;
    height: 100%;
}
.Small{
    width: 40%;
    height: 40%;
    max-width: 100%;
    max-height: 100%;
}
.frame{
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
}
.text{
    text-align: left;
}
.font{
    font-size: 20px;
}
.w1{
    width: 55%;
    height: 10%;
}
.w2{
    margin-left: 3%;
    height: 87px;
    color:darkgray;
}
.w3{
    margin-left: 3%;
    color:#000;
}
a{
    overflow:hidden;
    word-wrap: break-word;
    display: block;
}
</style>