function display(){
    const name = 'Clavis';
    const displayName = () =>{
        console.log(name);
    }
    return displayName();
}
//display()
const newFunction = display();
newFunction;