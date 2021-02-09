//working with prime nums reduces collision
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size)
    }
    _hash(key){
        let total = 0 ;
        let PRIME_NUM = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0)-96
            total = (total*PRIME_NUM+value)%this.keyMap.length
        }
        return total
    }
    
}