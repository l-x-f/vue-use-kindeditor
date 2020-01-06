<template>
  <div class="margin-top-20">
    <textarea :id="id" name="content" v-model="outContent"></textarea>
    <input
      @change="selectedFile"
      style="visibility: hidden;height:0;"
      type="file"
      name
      id="inputFile"
    />
  </div>
</template>
<script>
import axios from 'axios'
import 'kindeditor/themes/default/default.css'
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/lang/zh-CN.js'
import items from './config/items'
import htmlTags from './config/htmlTags'
import fontSizeTable from './config/fontSizeTable'
import otherConfig from './config/otherConfig'

export default {
  name: 'kindeditor-component',
  props: {
    // 编辑器内容 url
    html: {
      type: String,
      default: ''
    },
    // 编辑器内容
    content: {
      type: String,
      default: ''
    },
    // 编辑器id
    id: {
      type: String,
      // required: true,
      default: 'kindeditor-id'
    },
    // 宽
    width: {
      type: String,
      default: `100%`
    },
    // 高
    height: {
      type: String,
      default: '400'
    },
    // 最小宽
    minWidth: {
      type: Number,
      default: 650
    },
    // 最小高
    minHeight: {
      type: Number,
      default: 400
    },
    // toolbar 工具栏配置
    items: {
      type: Array,
      default: function() {
        return [...items]
      }
    },
    // 标签配置
    htmlTags: {
      type: Object,
      default: function() {
        return { ...htmlTags }
      }
    },
    // 字号配置
    fontSizeTable: {
      type: Array,
      default: function() {
        return [...fontSizeTable]
      }
    },
    // 语言配置
    langType: {
      type: String,
      default: 'zh-CN'
    },
    // 主题配置
    themeType: {
      type: String,
      default: 'default'
    },
    // body 的样式
    bodyClass: {
      type: String,
      default: 'ke-content'
    },
    // 其他配置项
    ...otherConfig
  },
  data() {
    return {
      editor: null,
      outContent: this.content
    }
  },

  watch: {
    content(val) {
      this.editor && val !== this.outContent && this.editor.html(val)
    },
    // 分发编辑器内容改变事件
    outContent(val) {
      this.$emit('update:content', val)
      this.$emit('on-content-change', val)
      this.$emit('input', val)
    },
    // 初始化编辑器内容
    html(val) {
      if (
        this.html &&
        (this.html.startsWith('https://') || this.html.startsWith('http://'))
      ) {
        this.loadUrl(val)
      } else {
        this.outContent = ''
        this.outContent ? this.editor.appendHtml(this.outContent) : ''
      }
    }
  },
  created() {
    if (
      this.html &&
      (this.html.startsWith('https://') || this.html.startsWith('http://'))
    ) {
      this.loadUrl(this.html)
    } else {
      this.outContent = ''
      setTimeout(() => {
        this.outContent ? this.editor.appendHtml(this.outContent) : ''
      }, 1000)
    }
  },
  mounted() {
    // 初始访问时创建
    this.initEditor()
    //  添加焦点
    // this.editor.focus();
    // 添加点击图片回调函数
    this.editor.clickToolbar('image', () => {
      // 禁用自带的图片弹窗
      this.editor.hideDialog()
      // 打开文件
      this.handleOpenFile()
    })
  },
  activated() {
    // keep-alive 进入时创建
    this.initEditor()
  },
  deactivated() {
    // keep-alive 离开时移除
    this.removeEditor()
  },
  beforeDestroy() {
    // 实例销毁之前移除
    this.removeEditor()
  },
  methods: {
    // 打开文件
    handleOpenFile() {
      const input = document.getElementById('inputFile')
      // 解决同一个文件不能监听的问题
      input.addEventListener(
        'click',
        function() {
          this.value = ''
        },
        false
      )
      // 点击input
      input.click()
    },
    // 选择好文件
    async selectedFile($event) {
      const file = $event.target.files[0]
      console.log(file)

      // 把图片上传到后端服务器 拿到url  uploadImage 是自己后端上传图片的接口
      // 调用appendHtml方法把图片追加到富文本

      // const url= await  uploadImage (file)
      //   this.editor.appendHtml(
      //           `<img style="max-width:100%;" src="https://${data.Location}">`
      //         );
    },
    // 编辑器内容上传到cos，调用返回url
    async content2Url() {
      // 把html片段上传到后端服务器 拿到url  uploadHtml 是自己后端上传的接口
      //   try {
      //     const res = await uploadHtml(this.outContent)
      //     return res
      //   } catch (error) {
      //     this.$message({
      //       message: error.data.message,
      //       type: 'error'
      //     })
      //   }
    },
    // 加载html填充编辑器内容
    loadUrl(url) {
      if (url && url.length > 0) {
        axios
          .get(url)
          .then(response => {
            // 处理HTML显示
            this.outContent = response.data
            this.editor.appendHtml(this.outContent)
            this.$emit('subLoadUrlToHtml', response.data)
          })
          .catch(() => {
            this.outContent = '服务器数据加载失败，请重试!'
            this.editor.appendHtml(this.outContent)
          })
      }
    },
    // 移除编辑器实例
    removeEditor() {
      window.KindEditor.remove(`#${this.id}`)
    },
    // 初始化编辑器
    initEditor() {
      this.removeEditor()
      this.editor = window.KindEditor.create('#' + this.id, {
        width: this.width,
        height: this.height,
        minWidth: this.minWidth,
        minHeight: this.minHeight,
        items: this.items,
        noDisableItems: this.noDisableItems,
        filterMode: this.filterMode,
        htmlTags: this.htmlTags,
        wellFormatMode: this.wellFormatMode,
        resizeType: this.resizeType,
        themeType: this.themeType,
        langType: this.langType,
        designMode: this.designMode,
        fullscreenMode: this.fullscreenMode,
        basePath: this.basePath,
        themesPath: this.themesPath,
        pluginsPath: this.pluginsPath,
        langPath: this.langPath,
        minChangeSize: this.minChangeSize,
        loadStyleMode: this.loadStyleMode,
        urlType: this.urlType,
        newlineTag: this.newlineTag,
        pasteType: this.pasteType,
        dialogAlignType: this.dialogAlignType,
        shadowMode: this.shadowMode,
        zIndex: this.zIndex,
        useContextmenu: this.useContextmenu,
        syncType: this.syncType,
        indentChar: this.indentChar,
        cssPath: this.cssPath,
        cssData: this.cssData,
        bodyClass: this.bodyClass,
        colorTable: this.colorTable,
        afterCreate: this.afterCreate,
        // 编辑器内容改变回调
        afterChange: () => {
          this.editor ? (this.outContent = this.editor.html()) : ''
        },
        afterTab: this.afterTab,
        afterFocus: this.afterFocus,
        afterBlur: this.afterBlur,
        afterUpload: this.afterUpload,
        uploadJson: this.uploadJson,
        fileManagerJson: this.fileManagerJson,
        allowPreviewEmoticons: this.allowPreviewEmoticons,
        allowImageUpload: this.allowImageUpload,
        allowFlashUpload: this.allowFlashUpload,
        allowMediaUpload: this.allowMediaUpload,
        allowFileUpload: this.allowFileUpload,
        allowFileManager: this.allowFileManager,
        fontSizeTable: this.fontSizeTable,
        imageTabIndex: this.imageTabIndex,
        formatUploadUrl: this.formatUploadUrl,
        fullscreenShortcut: this.fullscreenShortcut,
        extraFileUploadParams: this.extraFileUploadParams,
        filePostName: this.filePostName,
        fillDescAfterUploadImage: this.fillDescAfterUploadImage,
        afterSelectFile: this.afterSelectFile,
        pagebreakHtml: this.pagebreakHtml,
        allowImageRemote: this.allowImageRemote,
        autoHeightMode: this.autoHeightMode,
        fixToolBar: this.fixToolBar,
        tabIndex: this.tabIndex
      })
    }
  }
}
</script>

<style></style>
