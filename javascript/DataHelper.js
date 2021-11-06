function loadJSONFromFile(pathStr)
{
    let returnval;
    let requestURL = 'data/data.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        returnval = request.response;
    }

    return returnval;
}