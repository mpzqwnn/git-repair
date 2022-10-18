<template>
    <div class="tailText">
        <div class="tail">
            <div class="text text1">
                <span>报修系统</span>
                <hr size="5" color="yellow">
                <span>自己做的网页，主要功能为浏览教程和常见问题，登录功能暂时未编写</span>
            </div>
            <div class="text text2">
                <span>联系方式</span>
                <hr size="5" color="yellow">
                <p>QQ：854066014</p>
                <p>手机：18050117071</p>
            </div>
            <div class="text text3">
                <img class="img" src="../../public/微信图片_20220918151159.jpg" title="微信二维码">
                <p>微信:mpzqwnn</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.tail{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.img{
    text-align: center;
    width:100px
}
.text{
    margin-top: 1%;
}
.text1{
    margin-left: 5%;
    width: 40%;
    text-align: left;
}
.text2{
    margin-left: 1%;
    margin-right: 5%;
    width: 180px;
}
.text3{
    margin-left: 5%;
    margin-right: 5%;
}
.tailText{
    background-color: slategrey;
    text-align: center;
}
</style>