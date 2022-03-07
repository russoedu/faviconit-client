export const zh = {
  language: {
    name:            'Chinese',
    native:          '中文（简体）',
    helpUsTranslate: '请帮助我们翻译 😀',
    social:          'zh_CN',
  },
  pageTitle:                  'faviconit :: 免费的favicon和apple touch icon生成器，适用于所有设备和浏览器',
  socialImage:                '免费的favicon和apple touch icon\n生成器，适用于所有设备和浏览器',
  homeHighlight:              '<span class="brand">favicon<span class="orange">it</span></span>为所有设备和浏览器生成<i>favicon</i>、<i>apple touch icon</i>和<i>HTML header</i>。',
  homeSubHighlight:           '这是免费的！你从未见过的最简单易用的生成器。你所需要做的仅仅是上传一张图片！',
  fillTheForm:                '填写以下信息并免费生成你的favicon吧',
  faviconName:                'favicon名称',
  faviconNamePlaceholder:     '不填则使用“favicon”作为名称',
  faviconNameHelp:            '只能含有字母、数字、“.”、“-”和“_”',
  faviconVersionHelp:         '只能含有字母、数字、“.”、“-”和“_”',
  faviconLocationHelp:        '只能含有字母、数字、“:”、“.”和“/”',
  faviconVersion:             'favicon版本',
  faviconVersionPlaceholder:  '如果你不希望使用则无需填写',
  ogDescription:              '上传图标，生成favicon、apple touch icon和相应的HTML header，让你的图标适用于所有设备和浏览器',
  metaDescription:            '上传图标，生成favicon、apple touch icon和相应的HTML header，让你的图标适用于所有设备和浏览器',
  metaDownload:               '下载包含favicon、apple touch icon和HTML header信息的zip文件',
  metaFileNotFound:           '文件不可用。请上传一张图片来生成favicon、apple touch icon和HTML header',
  ogTitle:                    '免费的favicon和apple touch icon生成器',
  faviconFile:                '原图片',
  formFileChoose:             '选择文件',
  formFileDragNDrop:          '<span>或把它拖到这里</span>',
  formFileMultiDragError:     '请拖动单个文件',
  uploaderBlockMessage:       '正在上传文件',
  formFileAbortUpload:        '取消',
  formFileHelp:               '图片必须<strong>至少{{max}}x{{max}}像素</strong>并且<strong>最大{{max}}MB',
  swapImageText:              '切换图片',
  editImageText:              '编辑图片',
  uploadError:                '保存图片出错，请再次尝试。',
  advancedAccordionColapsed:  '高级模式',
  advancedAccordionExpanded:  '普通模式',
  downloadReady:              '你的favicon准备好了 :)',
  thanks:                     '感谢你使用faviconit生成你的favicon、apple touch icon和html header！',
  download:                   '下载我的favicon',
  availability:               '在至少一小时内，你可以在此链接中下载你的favicon',
  downloadNotFound:           '抱歉…我们在服务器中找不到这个favicon了',
  goBackLink:                 '返回',
  goBackText:                 '并上传图片来生成favicon、apple touch icon和HTML header',
  faviconLocation:            'favicon路径',
  faviconLocationPlaceholder: '不填则使用根目录',
  shareTheLove:               '很简单对吧？将这份爱分享给你的朋友们吧',
  pageNotFound:               '额…你访问的页面找不着了',
  instructionsTitle:          'faviconit说明',
  instructionThanks:          '感谢使用faviconit！',
  instructions:               '将文件拷贝到你的网站目录下并且将以下代码加入你的HTML<HEAD>标签：',
  instructionsBlock:          'faviconit.com favicon图标',
  helpUsTranslate:            '请帮助我们翻译 :)',
  donationButton:             `<div class="paypal-donate">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="LLEKQXHM7R6CY" />
        <input type="image" src="https://www.paypalobjects.com/zh_XC/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="使用PayPal按钮进行捐赠" />
        <img alt="" border="0" src="https://www.paypal.com/zh_C2/i/scr/pixel.gif" width="1" height="1" />
</form>
</div>`,
  validation: {
    max: {
      numeric: ':attribute 必须小于 {{max}} 。',
      file:    ':attribute 必须小于 {{max}} kb。',
      string:  ':attribute 必须小于 {{max}} 个字符。',
      array:   ':attribute 最多只有 {{max}} 个单元。',
    },
    regex:              ':attribute 格式不正确。',
    required:           ':attribute 不能为空。',
    image:              ':attribute 必须是一张图片。',
    squared_image:      ':attribute必须为边长至少310像素的<strong>正方形</strong>。<a href=\'https://picresize.com/\' target=\'_blamk\'>CROP HERE</a>。',
    squared_image_old:  ':attribute必须为边长至少310像素的<strong>正方形</strong>。请上传图片并点击“编辑图片”来裁剪它。',
    minimum_size_image: '<strong>favicon</strong>文件的宽度和高度都至少要有310像素，请上传一张更大的图片。',
    attributes:         {
      iconName:     '<strong>favicon名称</strong>',
      iconVersion:  '<strong>favicon版本</strong>',
      iconFile:     '<strong>原图片</strong>',
      iconImage:    '<strong>原图片</strong>',
      iconLocation: '<strong>favicon路径</strong>',
    },
  },
}