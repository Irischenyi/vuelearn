<template>
    <div class = "boxs">
        <div
        class = "tab"
        v-on:click="changeframe('edit')">
            edit
        </div>
        <div
        class = "tab"
        v-on:click="changeframe('PriceAll')">
            PriceAll
        </div>
        <div
        class = "tab"
        v-on:click="changeframe('Search')">
            Search
        </div>
        <div>{{ this.$route.query.plan}}</div>
        <router-view>

        <router-view>
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
      changeframe: function(edit){

              this.$http.get('https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9')
              .then((response)=>{
                  console.log(response);
              });
            console.log('ssss');

          this.$router.push({ path:'Animation?', query:{ edit:'ss'}  });
      }
  }
}
</script>
<style lang="scss" scoped>

.boxs{
    width: 800px;
    height: 100px;
    margin: 0 auto;
    .tab{
        width: 25%;
        height: 60px;
        padding-top: 30px;
        background-color: grey;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
}
</style>
