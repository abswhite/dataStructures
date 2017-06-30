// CONSTANT 
const getLast = (items) => {
   return items[items.length-1]; 
};

// LINEAR
const findIndex = (items, match) => {
   for (let i=0, total=items.length; i < total; i++)
      if (items[i] == match)
         return i;
   return -1;
};

// QUADRATIC
const buildSquareMatrix = (items) => {
   let matrix= [];
   for (let i=0, total=items.length; i < total; i++){ 
      matrix[i] = [];
      for (let j=0, total=items.length; j < total; j++)
         matrix[i].push(items[j]);
   }
   return matrix;
};
