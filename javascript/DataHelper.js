function loadJSONFromFile(pathStr)
{
    let x;
    fetch(pathStr)
        .then(response => response.json())
        .then(x = json => console.log(json));

    return x;
}