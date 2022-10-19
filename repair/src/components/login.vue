<template>
    <div class="login" activity>
        <img :class="imgStyle" src="../../public/src=http___article-fd.zol-img.com.cn_t_s640x2000_g6_M00_09_0A_ChMkKV_1khqIJODWAADtS0jBx4gAAH47gO3dYYAAO1j557.jpg&refer=http___article-fd.zol-img.png">
        <div :class="entranceStyle">
            <div class="title">报修管理系统</div>
            <hr size="5" color="yellow"/>
            <input :class="buttonStyle" type="button" value="后台登录" @click="GoBackstage">
            <input :class="buttonStyle" type="button" value="用户登录" @click="GoUser">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgStyle: "img",
                entranceStyle:"entrance",
                buttonStyle:"button"
            }
        },
        mounted () {
            setInterval(() => {
                if(window.outerWidth>1300){
                    this.imgStyle = "img Big"
                    this.entranceStyle = "entrance Big"
                    this.buttonStyle = "button Big"
                    }else{
                        this.imgStyle = "img Small"
                        this.entranceStyle = "entrance img Small"
                        this.buttonStyle = "button Small"
                    }
            },16);
        },
        methods: {
            GoBackstage() {
                if (this.$store.state.Backstage != '') {
                    this.$router.push({name:'manage'})
                } else {
                    this.$router.push({name:'backstage'})
                }
            },
            GoUser() {
                if (this.$store.state.User != '') {
                    this.$router.push({name:'menu'})
                } else {
                    this.$router.push({name:'user'})
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.title{
    font-size: 50px;
}
.login{
    background-color: #edf7fd;
    background-image: linear-gradient(to top , #f4f6fa ,#dee3ef );
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.img{
    margin-top: 5%;
    margin-left: 10%;
}
.Big{
    margin-top: 10%;
    width: 400px;
}
.Small{
    margin-top: 10%;
    width: 80%;
}
.entrance{
    text-align: center;
    margin-right: 10%;
}
.button{
    background-color: sandybrown;
    border-radius: 18px;
    margin-top: 5%;
    margin-block-end: 5%;
    font-size: 30px;
}
</style>