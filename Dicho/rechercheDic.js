
function dicho(valeur, array){
    
    var m = Math.floor(array.length / 2);
    if(array[m] == valeur) 
        return m;
    if(array.length == 1) 
        throw new Error("l'element n'est pas trouver");
      
    if (array[m] < valeur) {
      return dicho(valeur,array.slice(m,array.length)) + m;
    }
    else {
      return dicho(valeur,array.slice(0,m));
    }
  }
  /* console.log(dicho(3,[1,2,3,4,5,6]))*/
 
module.exports={dicho}