const falsy = [false, null, undefined, '', 0, NaN];
for (const e of falsy) {
   if (e) {
      console.log({ e });
   } else {
      console.log({ e });
   }
}

const res = undefined;
console.log(!!res);
