function work(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cb6898d59bmsh9201d8e25a50a78p1962a5jsnc2857aafcc69',
            'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', options)
        .then(response => response.json())
        .then(response => {console.log(response)
            out.innerHTML=response[0].fact;
        })
        .catch(err => console.error(err));
}
work();