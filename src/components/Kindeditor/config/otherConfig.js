// 其他非主要配置项
const otherConfig = {
  noDisableItems: {
    type: Array,
    default: function() {
      return ['source', 'fullscreen']
    }
  },
  filterMode: {
    type: Boolean,
    default: true
  },

  wellFormatMode: {
    type: Boolean,
    default: true
  },
  resizeType: {
    type: Number,
    default: 2
  },

  designMode: {
    type: Boolean,
    default: true
  },
  fullscreenMode: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String
  },
  themesPath: {
    type: String
  },
  pluginsPath: {
    type: String,
    default: ''
  },
  langPath: {
    type: String
  },
  minChangeSize: {
    type: Number,
    default: 5
  },
  loadStyleMode: {
    type: Boolean,
    default: true
  },
  urlType: {
    type: String,
    default: ''
  },
  newlineTag: {
    type: String,
    default: 'p'
  },
  pasteType: {
    type: Number,
    default: 2
  },
  dialogAlignType: {
    type: String,
    default: 'page'
  },
  shadowMode: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 811213
  },
  useContextmenu: {
    type: Boolean,
    default: true
  },
  syncType: {
    type: String,
    default: 'form'
  },
  indentChar: {
    type: String,
    default: '\t'
  },
  cssPath: {
    type: [String, Array]
  },
  cssData: {
    type: String
  },

  colorTable: {
    type: Array
  },
  afterCreate: {
    type: Function
  },

  afterTab: {
    type: Function
  },
  afterFocus: {
    type: Function
  },
  afterBlur: {
    type: Function
  },
  afterUpload: {
    type: Function
  },
  uploadJson: {
    type: String
  },
  fileManagerJson: {
    type: String
  },
  allowPreviewEmoticons: {
    type: Boolean,
    default: true
  },
  allowImageUpload: {
    type: Boolean,
    default: true
  },
  allowFlashUpload: {
    type: Boolean,
    default: true
  },
  allowMediaUpload: {
    type: Boolean,
    default: true
  },
  allowFileUpload: {
    type: Boolean,
    default: true
  },
  allowFileManager: {
    type: Boolean,
    default: false
  },

  imageTabIndex: {
    type: Number,
    default: 0
  },
  formatUploadUrl: {
    type: Boolean,
    default: true
  },
  fullscreenShortcut: {
    type: Boolean,
    default: false
  },
  extraFileUploadParams: {
    type: Object,
    default: function() {
      return {}
    }
  },
  filePostName: {
    type: String,
    default: 'imgFile'
  },
  fillDescAfterUploadImage: {
    type: Boolean,
    default: false
  },
  afterSelectFile: {
    type: Function
  },
  pagebreakHtml: {
    type: String,
    default: '<hr style="page-break-after: always;" class="ke-pagebreak" />'
  },
  allowImageRemote: {
    type: Boolean,
    default: true
  },
  autoHeightMode: {
    type: Boolean,
    default: false
  },
  fixToolBar: {
    type: Boolean,
    default: false
  },
  tabIndex: {
    type: Number
  }
}

export default otherConfig
