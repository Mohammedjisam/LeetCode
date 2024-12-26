class MyStack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    push(x){
        while(this.q1.length!==0){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(x)
        while(this.q2.length!==0){
            this.q1.push(this.q2.shift())
        }
    }
    pop(){
        if(this.empty()){
            console.log("stack is empty")
            return undefined
        }
     return this.q1.shift()
    }
    top(){
        if(this.empty()){
            console.log("stack is empty")
            return undefined
        }
        return this.q1[0];
    }
    empty(){
        return this.q1.length===0
    }
}