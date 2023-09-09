/* Type complex case */
type Car = 'ICE' | 'EV';
type ChargeEV = (kws: number) => void;
type FillPetrol = (type: string, liters: number) => void;
type RefillHandler<A extends Car> = A extends 'ICE'
   ? FillPetrol
   : A extends 'EV'
   ? ChargeEV
   : never;
const chargeTesla: RefillHandler<'EV'> = (power) => {
   console.log('❄️ ~ file: Untitled-1:6 ~ power:', power);
   // Implementation for charging electric cars (EV)
};
const refillToyota: RefillHandler<'ICE'> = (fuelType, amount) => {
   // Implementation for refilling internal combustion engine cars (ICE)
};

/* Satisfies */

type MyState = StateName | StateCordinates;
type StateName = 'Washington' | 'Detriot' | 'New Jersey';
type StateCordinates = {
   x: number;
   y: number;
};
type User = {
   birthState: MyState;
   currentState: MyState;
};
const user = {
   birthState: 'Washington',
   currentState: { x: 8, y: 7 },
} satisfies User;
console.log(
   '❄️ ~ file: Untitled-1:16 ~ user.currentState.x:',
   user.currentState.x,
);

/* unknown instead of any*/
/* is */
/* Record <key,value>*/
/* Partial <Omit<>>*/
/* satisfies */
