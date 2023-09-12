fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a31b1dd1")
    .then(response => response.json())
    .then(data => console.log(data))