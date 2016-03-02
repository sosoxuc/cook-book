function PostRequest (method, params, loadListener) {
    var request = new XMLHttpRequest
    request.open('post', method)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send(BuildQuery(params))
    request.onload = loadListener
    return request
}
