<template>
    <div class="style1">
        <h1>{{$store.state.title}}</h1>
        <div class="style2">
            <video controls>
                <source :src="$store.state.video" type="video/mp4">
                <source :src="$store.state.video" type="video/ogg">
                <source :src="$store.state.video" type="video/webm">
                你的浏览器不支持播放视频
            </video>
        </div>
        <br>
        <span>{{$store.state.message}}</span>
        <br>
        <div class="style2">
            <img src="../../public/微信图片_20220918151159.jpg">
        </div>
    </div>
</template>

<script>
    export default { 
    }  
</script>

<style lang="scss" scoped>
.style1{
    margin-left: 5%;
    margin-right: 25%;
}
.style2{
    text-align: center;
}
span{
    text-align: left;
}
h1{
    text-align:center;
}
img{
    max-width: 90%;
}
</style>