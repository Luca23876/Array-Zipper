var functionOne = function(){
  var emptyArray = [];
  var longestArray = 0;
  var numberOfArrays = arguments.length;
    for(var r = 0; r < numberOfArrays; r++){
     if(arguments[r].length > longestArray){
       longestArray = arguments[r].length;
     }
     longestArray = longestArray;
     }
   for(var i = 0; i < longestArray ; i++){ 
    for(var x = 0; x < numberOfArrays; x++){
      if(i < arguments[x].length){
        emptyArray.push(arguments[x][i])
      }
    }
   }
  return emptyArray;
};
console.log(functionOne([],[],[],[]));