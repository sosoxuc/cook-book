function GetRequest (method, loadListener) {
    var request = new XMLHttpRequest
    request.open('get', method)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send()
    request.onload = loadListener
    return request
}
