<template>
    <div class="box">
        <div
        class="butto"
        v-for="button in buttons"
        v-on:click="select(button)">
            {{ button.name}}
        </div>
        <div>
            <img
            v-for="img in selectImg"
            :src="img.src"/>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    const classes =  ['bag','flower','tree'];
    return {
        buttons:[
            {
                name:'所有',
                class:classes,
            },{
                name:'分类A',
                class:['bag']
            },{
                name:'分类B',
                class:['flower']
            },{
                name:'分类C',
                class:['tree']
            },{
                name:'分类A+B',
                class:['bag','flower']
            },{
                name:'分类B+C',
                class:['flower','tree']
            },{
                name:'分类A+C',
                class:['bag','tree']
            }
        ],
        imgs:[
            {
                src:'imgs/bag/1.jpg',
                class:'bag'
            },{
                src:'imgs/bag/2.jpg',
                class:'bag'
            },{
                src:'imgs/bag/3.jpg',
                class:'bag'
            },{
                src:'imgs/bag/4.jpg',
                class:'bag'
            },{
                src:'imgs/bag/5.jpg',
                class:'bag'
            },{
                src:'imgs/bag/6.jpg',
                class:'bag'
            },{
                src:'imgs/bag/7.jpg',
                class:'bag'
            },{
                src:'imgs/flower/1.jpg',
                class:'flower'
            },{
                src:'imgs/flower/2.jpeg',
                class:'flower'
            },{
                src:'imgs/flower/3.jpeg',
                class:'flower'
            },{
                src:'imgs/flower/4.jpeg',
                class:'flower'
            },{
                src:'imgs/flower/5.jpeg',
                class:'flower'
            },{
                src:'imgs/flower/6.jpg',
                class:'flower'
            },{
                src:'imgs/flower/7.jpg',
                class:'flower'
            },{
                src:'imgs/flower/8.jpg',
                class:'flower'
            },{
                src:'imgs/flower/9.jpg',
                class:'flower'
            },{
                src:'imgs/tree/1.jpeg',
                class:'tree'
            },{
                src:'imgs/tree/2.jpg',
                class:'tree'
            },{
                src:'imgs/tree/3.jpg',
                class:'tree'
            },{
                src:'imgs/tree/4.jpg',
                class:'tree'
            },{
                src:'imgs/tree/5.jpeg',
                class:'tree'
            },{
                src:'imgs/tree/6.jpg',
                class:'tree'
            },{
                src:'imgs/tree/7.jpg',
                class:'tree'
            },{
                src:'imgs/tree/8.jpg',
                class:'tree'
            },{
                src:'imgs/tree/9.jpeg',
                class:'tree'
            },{
                src:'imgs/tree/10.jpg',
                class:'tree'
            },{
                src:'imgs/tree/11.jpeg',
                class:'tree'
            }
        ],
        selectClass: classes,
    }
  },
  methods:{
      select:function(button){
          this.selectClass = button.class;
      },
      range:function(arr){
          let len = arr.length;
               for (var i = 0; i < len - 1; i++) {
                   let idx = Math.floor(Math.random() * (len - i));
                   let temp = arr[idx];
                   arr[idx] = arr[len - i - 1];
                   arr[len - i - 1] = temp;
               }
           return arr;
      }
  },
  computed:{
      selectImg:function(){
          let all = [];
          this.imgs.forEach(img => {
              this.selectClass.forEach(classname =>{
                  if(img.class== classname){
                      all.push(img);
                  }
              });
          });
          return this.range(all);
      },
  }
}

</script>
<style lang="scss" scoped>
.box{
    width: 1200px;
    height: 1400px;
    margin: 0 auto;
    position: relative;
    .butto{
        width: 14%;
        height: 40px;
        background-color: black;
        display: inline-block;
        color: white;
        text-align: center;
        padding-top: 20px;
        cursor: pointer;
        margin-left: 3px;
    }
    img{
        width: 25%;
    }
}
</style>
