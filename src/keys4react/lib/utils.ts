
export function findIndex(array:any, attr:string, value:string) {
   for (let i=0; i < array.length; i+=1) {
      if (array[i][attr] === value) {
         return i;
      }
   }
   return -1;
}

export function find(array:any, attr:string, value:string) {
   for (let ele in array) {
      if(array[ele][attr] === value) return array[ele]
   }
   return null;
}


export function isEmpty(array:any) {
  return !(array && Array.isArray(array) && array.length);

}

export function notEmpty(array:any) {
   return !isEmpty(array);
}
