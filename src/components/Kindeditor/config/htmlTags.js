const htmlTags = {
  font: ['color', 'size', 'face', '.background-color'],
  span: ['style'],
  div: ['class', 'align', 'style'],
  table: [
    'class',
    'border',
    'cellspacing',
    'cellpadding',
    'width',
    'height',
    'align',
    'style'
  ],
  'td,th': [
    'class',
    'align',
    'valign',
    'width',
    'height',
    'colspan',
    'rowspan',
    'bgcolor',
    'style'
  ],
  a: ['class', 'href', 'target', 'name', 'style'],
  embed: [
    'src',
    'width',
    'height',
    'type',
    'loop',
    'autostart',
    'quality',
    'style',
    'align',
    'allowscriptaccess',
    '/'
  ],
  img: [
    'src',
    'width',
    'height',
    'border',
    'alt',
    'title',
    'align',
    'style',
    '/'
  ],
  hr: ['class', '/'],
  br: ['/'],
  'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6': ['align', 'style'],
  'tbody,tr,strong,b,sub,sup,em,i,u,strike': []
}

export default htmlTags
