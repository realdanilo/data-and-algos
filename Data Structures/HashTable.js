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
    get(key){
        let index = this._hash(key)
       
        if(this.keyMap[index]){
            let mainArray = this.keyMap[index]
            for(let i = 0; i < mainArray.length; i++){
                if(mainArray[i][0]===key) return mainArray[i][1]
            }
        }
        return undefined
    }
    values(){
        let valuesArray = []
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!valuesArray.includes(this.keyMap[i][j][1])){
                        valuesArray.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArray
    }
    keys(){
        let keysArray = []
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!keysArray.includes(this.keyMap[i][j][0])){
                        keysArray.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArray
    }
}