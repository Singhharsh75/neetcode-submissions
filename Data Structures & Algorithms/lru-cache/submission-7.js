class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity;
        this.cache=new Map();
        this.keyArr=[];
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            this.keyArr=[...this.keyArr.filter(item=>item!==key)];
            this.keyArr.push(key);
            return this.cache.get(key)
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.keyArr=[...this.keyArr.filter(item=>item!==key)];
            this.keyArr.push(key);
            this.cache.set(key,value);
        }else{
            if(this.cache.size===this.capacity){
                const delKey=this.keyArr.shift();
                this.cache.delete(delKey);
            }
            this.keyArr.push(key);
            this.cache.set(key,value);
        }
    }
}
