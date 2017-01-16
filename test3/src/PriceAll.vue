<template>
    <div class="box">
        <div
            class="item"
            v-for="(item,index) in items"
            @click="change(index)"
            v-bind:class="{'back': item.isChoose}" >
                <div class="name">
                    {{ item.name }}
                </div>
                <div class="price">
                    {{ item.price }}
                </div>
        </div>
        <div class="total">
            Total:{{total}}
        </div>
    </div>
</template>

<script>
export default {
      data () {
        return {
          items:[
              {
                  name:'Web Development',
                  price:300,
                  isChoose:true
              },{
                  name:'Design',
                  price:400,
                  isChoose:false
              },{
                  name:'Integration',
                  price:250,
                  isChoose:false
              },{
                  name:'Training',
                  price:220,
                  isChoose:false
              }
          ]
        }
     },
     methods: {
         change(index) {
             this.items[index].isChoose =! this.items[index].isChoose;
         }
     },
     computed: {
         total() {
             let all = 0;
             this.items.forEach(item => all = all + (item.isChoose ? item.price : 0));
             return all;
         }
     }
}

</script>
<style lang="scss" scoped>
.box{
    width: 500px;
    height: 420px;
    margin: 0 auto;
    position: relative;
    margin-top: 60px;
    padding-top: 60px;
    background-color: #61a1bc;

    .item{
        width: 80%;
        height: 65px;
        margin: 0 auto;
        margin-top: 8px;
        background-color: #e35885;
        color: white;
        cursor: pointer;
        .name{
            width: 50%;
            height: 50px;
            padding-top: 20px;
            font-size: 20px;
            float: left;
            margin-left: 20px;
        }
        .price{
            width: 20%;
            float: right;
            padding-top: 20px;
            font-size: 20px;
        }

    }
    .back{
        background-color: green;
    }
    .total{
        width: 80%;
        height: 150px;
        border-top: 1px solid white;
        margin: 0 auto;
        margin-top: 50px;
        font-size: 30px;
        text-align: right;
        padding-top: 5px;
        color: white;
    }
}
</style>
