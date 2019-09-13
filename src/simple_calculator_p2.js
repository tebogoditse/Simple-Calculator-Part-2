class Calculator{

  constructor(){
    this.arr = [];
    this.lastAns = 0;
  }

  add(...args){

    let i = 0;
    let sum = 0;
    for (; i < args.length; i++){
      if (args[i] === "LAST"){
        args[i] = this.lastAns;
      }
      if (args[i] === "SLOT_1"){
        args[i] = this.get_slot(1);
      }
      if (args[i] === "SLOT_2"){
        args[i] = this.get_slot(2);
      }
      sum = sum + args[i];
    }
    this.lastAns = sum;
    return sum;
  }

  multiply(...args){

    let i = 0;
    let product = 1;
    for (; i < args.length; i++){
      if (args[i] === "LAST"){
        args[i] = this.lastAns;
      }
      if (args[i] === "SLOT_1"){
        args[i] = this.get_slot(1);
      }
      if (args[i] === "SLOT_2"){
        args[i] = this.get_slot(2);
      }
      product = product * args[i];
    }
    this.lastAns = product;
    return product;
  }

  last(){
    return this.lastAns;
  }
  set_slot(n){
    this.arr.push(this.lastAns);
    return this.arr[n - 1];
  }

  get_slot(n){
    return this.arr[n - 1];
  }

}

let calculator_instance = new Calculator();
