<template>
    <div class="box">
        <button v-on:click="changeframe">
            Toggle
        </button>
        <transition name="slide-fade">
             <!-- <p v-if="show">hello</p> -->

        </transition>
    </div>

</template>

<script>
export default {
  data(){
      return {
              show: true
      };
  },
  methods:{
      changeframe(){
          this.$router.push({   path:'/App', query:{ person:'ss',change:'sss',dd:'sss'}});
      }
  }
}
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
