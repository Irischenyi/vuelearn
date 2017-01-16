<template>
    <div class="box">
        <input
        class="input"
        v-model="inputmessage"
        placeholder="Enter you search term">
        <div
        class="item"
        v-for="item in items"
        v-show="isShow(item)">
            {{item}}
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      inputmessage: '',
      items:[
          'What You Need To Know About CSS Variables',
          'Freebie: 4 Great Looking Pricing Tables',
          '20 Interesting JavaScript and CSS Libraries for February 2016',
          'Quick Tip: The Easiest Way To Make Responsive Headers',
          'Learn SQL In 20 Minutes',
          'Creating Your First Desktop App With HTML, JS and Electron'
      ]
    }
  },
  methods: {
      isShow: function(item){
         if(item.toLowerCase().indexOf(this.inputmessage.toLowerCase())>=0){
             return true;
         }
         if(this.inputmessage.length==0){
             return true;
         }
      }
  }
}
</script>
<style lang="scss" scoped>
.box{
    width: 500px;
    height: 800px;
    margin: 0 auto;
    .input{
        width: 80%;
        height: 60px;
        font-size: 30px;
        border: 15px solid red;
        margin: 0 auto;
    }
    .item{
        width: 86%;
        height: 60px;
        background-color: white;
        margin-top: 2px;
        font-size: 20px;
        padding-top: 20px;
        text-align: center;
        background-color: red;
        color: white;
    }
}
</style>
