function BuildQuery (params) {

    function pushFlatParam (key, value) {
        if (value || value === 0 || value === false) {
            var constructor = value.constructor
            if (constructor == Array || constructor == Object) {
                for (var i in value) {
                    pushFlatParam(key + '[' + i + ']', value[i])
                }
            } else {
                flatParams[encodeURIComponent(key)] = encodeURIComponent(value)
            }
        }
    }

    var flatParams = {}
    for (var i in params) {
        pushFlatParam(i, params[i])
    }

    var paramsArray = []
    for (var i in flatParams) {
        paramsArray.push(i + '=' + flatParams[i])
    }
    return paramsArray.join('&')

}
