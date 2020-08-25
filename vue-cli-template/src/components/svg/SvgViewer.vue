<!--
 * @Description: svg图标预览组件，建议新增路由页面加载
--> 

<script>
// 获取所有svg的名称
const icons = require
  .context("@/svg/icons", false, /\.svg$/)
  .keys()
  .map(name => name.replace(/^\.\/([\w-]+)\.svg/, "$1"));

export default {
  name: 'SvgViewer',
  methods: {
    async handleIconClick(iconName) {
      await navigator.clipboard.writeText(`<svg-icon name='${iconName}'></svg-icon>`);
      if (this.$ELEMENT) {
        this.$message.success({
          message: `复制成功<svg-icon name='${iconName}'></svg-icon>`,
          duration: 3000
        })
      } else {
         alert(`复制成功<svg-icon name='${iconName}'></svg-icon>`);
      }
    }
  },
  render() {
    const { SvgIcon } = this.$options.components;
    return (
      <div class="icon-view">
        {icons.map(iconName => (
          <div class="icon" on-click={() => this.handleIconClick(iconName)}>
            <SvgIcon name={iconName} />
            <span class="icon-name">{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
}

</script>
<style scoped>
.icon-view {
  width: 100%;
  height: 100%;
  font-size: 32px;
}
.icon-view .icon {
  display: inline-block;
  text-align: center;
  margin: 9px 8px;
  width: 100px;
  height: 80px;
  border-radius: 8%;
  cursor: pointer;
}

.icon-view .icon i {
  transition: transform 0.2s;
}

.icon-view .icon i:hover {
  transform: scale(1.5);
}

.icon-view .icon .icon-name {
  font-size: 12px;
  margin-top: 5px;
  display: block;
}
</style>
