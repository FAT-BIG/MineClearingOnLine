import {App, Component} from 'vue'

interface FileType {
    [key: string]: Component
}

// 导入 demo 下面的 所有 .vue文件
const files: Record<string, FileType> = import.meta.globEager("/src/components/demo/*.vue")

export default (app: App): void => {
    Object.keys(files).forEach((c: string) => {
        const component = files[c]?.default
        // 挂载全局控件
        app.component(component.name as string, component)
    })
}
