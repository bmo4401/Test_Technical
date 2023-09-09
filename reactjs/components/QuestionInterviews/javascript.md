1. regular func & arrow func

-  'this' keyword
-  'new' keyword
-  argument objects

---

-  automatically binds “this” to the surrounding code’s context

2. comparator

-  string, number, booleans, null, undefined => compare values
-  object, arrays -> compare address

3. keyword 'key'

-  Don't use the index of the array as the key prop, reordering an item in the
   array make changes it. Then React will get confused and re-render the
   incorrect element

4. || -> false || 3 => 3; ?? -> false ?? 3 => false; ??= -> if undefined, null
   -> assign to right value

### React

1. useCallback caches a function between re-renders until its dependencies
   change.
2. use React.memo to prevent re-render component
