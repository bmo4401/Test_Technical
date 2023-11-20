/_ spellchecker: disable _/

<!-- prettier-ignore-start -->
1. 
Solved: 
   function maxXor(lo, hi, k) {
    let a = lo, b = hi, ans = 0, arr = []
    if(a > b)
        [a,b] = [b, a];

    for(let i = a + 1; i < b; i++)
    {
        arr.push(i);
    }
    for(let i = 0; i < arr.length; i++)
    {
        const m1 = a ^ arr[i], m2 = b ^ arr[i];
        if(m1 <= k && m1 > ans)
        {
            ans = m1
        }
        if(m2 > m1 && m2 <= k && m2 > ans)
        {
            ans = m2;
        }
    }
    return ans

}

2. 
   - Box Model : margins, borders, padding, and the actual content. 
   - The height and width properties do not include padding, borders, or margins.

10. JSON data type
  <code>
      const arr = [null,undefined,true,false,3,3.5]
      let arr2 = []
      for(let e of arr)
      {
         arr2.push(JSON.stringify(e))
      }
      console.log(arr2)
      <!-- "null", undefined, "true", "false","3", "3.5" -->
  </code>

12. Student Record Manipulation
 Solved:
<code>
      function manipulateStudentRecord(obj, operation, prop, newValue) {
         if(!(prop in obj))
            {
               return obj
            }
         if(operation === "edit")
         {
               return {...obj,[prop]:newValue}
         }
         if(operation === "delete")
         {
            delete obj[prop]
            return obj
         }  
      }
</code>
16. How doest specifying the height and width of image help faster loading
   Let browser know to space need to reserve and avoid to relocate text and content

<!-- prettier-ignore-end -->
