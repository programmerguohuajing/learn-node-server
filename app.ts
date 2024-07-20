import { createExpressServer } from "routing-controllers";
import { json, urlencoded } from "body-parser";
import 'reflect-metadata'
import ds from './data-source'
import UserController from './src/controller/user.controller'

ds.initialize().then(() => {
    console.log("db connected")
}).catch(err => {
    console.log(err)
})

const app = createExpressServer({
    controllers: [UserController]
})

// body 解析相关中间件
// 解析json 格式
app.use(json())
// 解析urlencoded body
// 会在request 对象上挂载body属性 包含解析后的数据
// 这个新的body对象包含key-value 键值对 若设置extended为true 则键值对可以是任意累计，否则只能是字符串或数组。
app.use(urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log("server is running on port 3000")
})