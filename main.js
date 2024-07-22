const howmanyletters=(phrase)=>{
  //counter
  let result =0;
  for(const index in phrase)
    {
      console.log(Number(index)+1)
      result=Number(index)+1
    }
  return {result}
}
const phrase=prompt("write your phrase")
console.log(howmanyletters(phrase))



// also do this with
const howmanyletters=(phrase)=>{
  //counter
  return {result:phrase.length}
}
const phrase=prompt("write your phrase")
console.log(howmanyletters(phrase))
