 /* eslint-disable */
import { getTemplate, getSlotContent, getStringTypeAttr } from '@/views/designerPage/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
            src: {
                type: 'text',
                value: 'http://img.hb.aicdn.com/94651ef194a0fcaab03e7215ba4ecb9e865052736b722-CAcFuk_fw658'
            },
            alt:{
                type:'text',
                value:''
            },
            width:{
                type:'text',
                value:''
            },
            height:{
                type:'text',
                value:''
            }
        },
        slots = {}

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots) || '&nbsp;'
        //设置当前组件的slot
    if (attributes.slot && attributes.slot !== 'default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<img ${stringAttr} />`

    return { template, attributes, slots }
}
export default handle
