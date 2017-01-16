<template>
    <div class="box">
        {{$route.params.id}}
        <div
            class="select"
            v-for="(item, index) in selections"
            @click="selects(index)"
            :class="{'text-danger': index === selectOne }">
            {{ item }}
        </div>
        <div class="selectone"> You chose {{answer}}</div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          selections:['home','project','services','contact'],
          selectOne:0,
      };
  },
  methods: {
    selects(index){
        this.selectOne = index;
    }
  },
  computed: {
      answer: function(){
          return this.selections[this.selectOne];
      }
  }
}
</script>
<style lang="scss" scoped>
.box {
    width:900px;
    height:150px;
    color: blue;
    margin:0 auto;
    .select{
        width: 25%;
        height:50px;
        background:grey;
        display:inline-block;
        color:white;
        text-align:center;
        padding-top:30px;
        cursor: pointer;
    }
    .selectone{
        font-size: 30px;
        color: black;
        text-align: center;
        padding-top: 30px;
    }
    .text-danger{
        background-color: red;
    }
}
</style>
