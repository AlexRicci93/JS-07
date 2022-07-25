





const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];



 const nick_names = persons.forEach( element =>  {
  return  element.name + element.age;
  /*console.log(element.name + element.age); */   /* tramite questo console.log funziona*/
  }

  );

  
  


console.log(persons);
console.log(nick_names); /* in console log "nick_names" appare indefinito, ma il codice sembra essere corretto,
visto che la variabile nick_names è stata dichiarata alla riga n.22 */ 

