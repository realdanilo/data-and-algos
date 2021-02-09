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
    set(key, value){
        let index = this._hash(key)
        let n = [key, value]
        if(!this.keyMap[index]){
            this.keyMap[index] = [n]
        }else{
            this.keyMap[index].push(n)
        }


        return index
    }
}