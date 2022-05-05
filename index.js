const { path } = require("@vuepress/utils");

module.exports = (options = {}, context) => ({
  define() {
    const {
      showIcon = '',
      showText = '(/≧▽≦/)咦！又好了！',
      hideIcon = '',
      hideText = '(●—●)喔哟，崩溃啦！',
      recoverTime = 2000,
    } = options

    return {
      SHOW_ICON: showIcon,
      SHOW_TEXT: showText,
      HIDE_ICON: hideIcon,
      HIDE_TEXT: hideText,
      RECOVER_TIME: recoverTime,
    }
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './lib/client.js'),
  clientAppRootComponentFiles: path.resolve(__dirname,'./lib/components/DynamicTitle.vue'),
})
