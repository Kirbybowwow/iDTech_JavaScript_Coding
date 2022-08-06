function greet(name) {
    let allcaps = name 
    if (name.length > 1 && Array.isArray(name) == true) {
        return 'Hello, ' + name
    } else if (name == null || name == '' || name == ' ') {
        return 'Hello there!'
    } else if (allcaps.toUpperCase() == name) {
        return 'HELLO, ' + name + '!'
    } else {
       return 'Hello, ' + name
    } 
        
    
    
}
let multipleNames

console.log(greet(''))