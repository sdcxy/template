<template>
  <div>
    <el-button type="primary" @click="baidufunction">按钮</el-button>
    <el-button type="info" @click="baidufunction">按钮</el-button>
    <el-button type="success" @click="baidufunction">按钮</el-button>
    <el-button type="danger" @click="baidufunction">按钮</el-button>
    <svg-viewer></svg-viewer>
  </div>
</template>

<script>
import SvgViewer from '@/components/svg/SvgViewer.vue'
export default {
  name: 'Home',
  components: { SvgViewer },
  methods: {
    async baidufunction(){
      console.log(this.$axios)
      const data = await this.$axios.get('http://localhost:8081/')
      console.log(data)
    }
  },
  mounted() {
    this.baidufunction()
  }
}
</script>
