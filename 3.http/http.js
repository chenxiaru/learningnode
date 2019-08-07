// 引入 http 模块
let http = require('http')

function serve (request, response) {
  console.log('请求方法', request.method)
  console.log('请求URL', request.url)
  console.log('请求头', request.headers)

  response.statusCode = 200
  response.setHeader('111', 111) // 响应头
  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  response.write(new Date().toString())  // 响应体
  response.end()  //响应结束
}

// 执行响应
let server = http.createServer(serve) 

// 监听
server.listen(8000, 'localhost')

