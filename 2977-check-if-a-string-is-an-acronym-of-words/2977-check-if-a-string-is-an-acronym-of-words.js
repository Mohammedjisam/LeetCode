/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
     let array=[];
     let word=words.map(x=>{
        return x.slice(0,1)
     })
     let str=word.join('')
     console.log(str)

     if(str==s){
        return true;
     }else{
        return false
     }
};