class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            const arr=this.keyStore.get(key);
            this.keyStore.set(key,[...arr,[value,timestamp]]);
        }else{
            this.keyStore.set(key,[[value,timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr=this.keyStore.get(key)||[];
            let l=0; let r=arr.length-1; let res=""
            while(l<=r){
                let mid=Math.floor((l+r)/2);
                if(timestamp>=arr[mid][1]){
                    res=arr[mid][0];
                    l=mid+1
                }else{
                    r=mid-1
                }
            }

            return res;
    }
}
