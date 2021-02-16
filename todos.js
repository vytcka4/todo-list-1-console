let magic = prompt("enter what you want todo");
const list = ["2","mmm"];
while (magic!=="quit" && magic!=="q"){
  if( magic === "list"){
    for ( let i=0; i<list.length; i++){
      console.log(`${i}:${list[i]}`);
    }
  }else if(magic==="new"){
    list.push(prompt("enter new"));
  }
  else if(magic === "delete"){
    list.splice(prompt("item to delete"),prompt("item to delete-count"))
  }
magic = prompt("enter what you want todo");
}
console.log("GG")