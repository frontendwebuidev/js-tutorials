fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title:'My Frist Post.....',
        body: 'This is my first post description...............'
    })
}).then(res => 
    {
        if(!res.ok){
            throw new Error(`Http error: {res.status}`)
        }
        return res.json();
    }
    )
    .then(data => console.log(data))
    .catch(err => console.error(`Fetch problem: ${err.message}` ));