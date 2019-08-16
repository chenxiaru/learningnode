/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 23:50:31
 * @LastEditTime: 2019-08-16 16:22:37
 * @LastEditors: Please set LastEditors
 */
// 引入 http 模块
let http = require('http')
let fs = require('fs')

function serve (request, response) {
  console.log('请求方法', request.method)
  console.log('请求URL', request.url)
  console.log('请求头', request.headers)

  response.statusCode = 200
  response.setHeader('111', 111) // 响应头
  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  fs.readFile('index.html', (err, data) => {
    response.write(data)  //将读取的 index.html 内容写入响应体
    response.end()
  })
  // response.write(new Date().toString())  // 响应体
  // response.end()  //响应结束
}

// 执行响应
let server = http.createServer(serve) 

// 监听
server.listen(8000, '10.187.60.56')

