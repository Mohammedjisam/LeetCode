function isAnagram(s: string, t: string): boolean {
     let newS=s.split("").sort().join("")
    let newT=t.split("").sort().join("")
    if(newS==newT){
        return true
    }else{
        return false
    }
};