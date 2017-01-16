<template>
    <div>
        {{ counts }}
        computed:{{ increment}}
        <div v-on:click="change" class="change">change</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
     counts: 9,
    }
  },
  methods: {
      change (){
          this.$store.dispatch('increment');
      }
  },
  computed: {
      increment() {
          return this.$store.state.count;
      }
  }
}

</script>
<style lang="scss" scoped>
.change{
    cursor: pointer;
}
</style>
