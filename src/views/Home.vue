<template>
  <div>
    <Kind-editor
      ref="kindeditor"
      :html="html"
      @input="getContent"
    ></Kind-editor>
  </div>
</template>

<script>
import KindEditor from '@/components/Kindeditor'
export default {
  name: 'GoodsForm',
  components: {
    KindEditor
  },
  data() {
    return {
      html:
        'https://ebusiness-1255313385.cosbj.myqcloud.com/image/20190823/center2019082304054532.html',
      content: ''
    }
  },
  methods: {
    // 获取编辑器内容
    getContent(content) {
      console.log('content', content)
      this.content = content
    },
    // 编辑器内容转换成在线url
    async getcontent2Url() {
      try {
        const htmlUrl = await this.$refs.kindeditor.content2Url()
        return htmlUrl
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
