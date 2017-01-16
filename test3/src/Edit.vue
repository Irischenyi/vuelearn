<template>
    <div
        class="box"
        v-on:click = "disShow">
            <input
                class="inputbox"
                v-model="message"
                v-show="isShow"
                v-on:click.stop/>
            <div
                class = "showbox"
                v-on:click.stop = "change">
                    {{ message }}
            </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Edit me.',
      isShow:false
    }
  },
  methods:{
      change(){
          this.isShow = !this.isShow;
      },
      disShow(){
          this.isShow = false;
      },
  }
}
</script>
<style lang="scss" scoped>
.box{
    width: 600px;
    height: 1400px;
    margin: 0 auto;
    padding-top: 50px;
    position: relative;
    .inputbox{
        width: 100%;
        height: 60px;
        font-size: 30px;
        text-align: center;
        position: absolute;
        top:30;
    }
    .showbox{
        width: 100%;
        height: 60px;
        font-size: 25px;
        text-align: center;
        position: absolute;
        top:150px;
        text-align: center;
    }
}
</style>
