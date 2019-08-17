/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 23:50:31
 * @LastEditTime: 2019-08-18 00:43:01
 * @LastEditors: Please set LastEditors
 */
// 引入 http 模块
let http = require('http')
let fs = require('fs')
let mime = require('mime')  // 使用 npm install mime 安装

function serve (request, response) {
  const url = request.url
  if( url == '/' ) {  // 根据请求 url 执行对应的响应体
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    fs.readFile('index.html', (err, data) => {
      response.write(data)  //将读取的 index.html 内容写入响应体
      response.end()
    })
  }else if ( url == '/index.css') {
    responseStatic( url, response )
  } else if ( url == '/index.js' ) {
    responseStatic( url, response )
  }

  function responseStatic( url, response ) {
    let type = mime.getType(url)
    response.statusCode = 200
    response.setHeader('Content-Type',mime.getType(url) + ';charset=utf-8')  // 修改响应文件类型为 css
    fs.readFile(url.slice(1), (err, data) => {
      response.write(data)
      response.end()
    })
  }
}

// 执行响应
let server = http.createServer(serve) 

// 监听
server.listen(8000, 'localhost')

