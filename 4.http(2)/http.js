/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 23:50:31
 * @LastEditTime: 2019-08-18 00:13:28
 * @LastEditors: Please set LastEditors
 */
// 引入 http 模块
let http = require('http')
let fs = require('fs')

function serve (request, response) {
  console.log('请求方法', request.method)
  console.log('请求URL', request.url)
  console.log('请求头', request.headers)
  const url = request.url
  if( url == '/' ) {  // 根据请求 url 执行对应的响应体
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    fs.readFile('index.html', (err, data) => {
      response.write(data)  //将读取的 index.html 内容写入响应体
      response.end()
    })
  }else if ( url== '/index.css') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')  // 修改响应文件类型为 css
    fs.readFile('index.css', (err, data) => {
      response.write(data)
      response.end()
    })
  } else if ( url == '/index.js' ) {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/x-javascript;charset=utf-8')  // 修改响应文件类型为 css
    fs.readFile('index.js', (err, data) => {
      response.write(data)
      response.end()
    })
  }

  // response.write(new Date().toString())  // 响应体
  // response.end()  //响应结束
}

// 执行响应
let server = http.createServer(serve) 

// 监听
server.listen(8000, 'localhost')

