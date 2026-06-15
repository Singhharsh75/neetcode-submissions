class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map=new Map();
        this.stack=[];
        this.cap=capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            const dum_ar=this.stack.filter(item=>item!==key);
            this.stack=dum_ar;
            this.stack.push(key);
            return this.map.get(key);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(!this.map.has(key)){
            if(this.map.size===this.cap){
                const k=this.stack.shift();
                this.map.delete(k);
            }
        }else{
            const dum_ar=this.stack.filter(item=>item!==key);
            this.stack=dum_ar;
        }
        this.map.set(key,value);
        this.stack.push(key);
    }
}
