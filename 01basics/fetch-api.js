fetch('https://jsonplaceholder.typicode.com/posts').then(res => 
{
    if(!res.ok){
        throw new Error(`Http error: {res.status}`)
    }
    return res.json();
}
)
.then(data => console.log(data))
.catch(err => console.error(`Fetch problem: ${err.message}` ));