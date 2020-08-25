<template>
  <div>
    <img width="300px" height="300px" :src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      imgUrl: 'http://weichuanginfo.cn/cloud.jpg'
    }
  },
  methods: {
    handlClick() {
      this.msg++
      if (this.msg > 10) {
        this.msg = 0
      }
    }
  }
}
</script>

<style>

</style>