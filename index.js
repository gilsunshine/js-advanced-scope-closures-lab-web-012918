function produceDrivingRange(blockRange){
  return function withinRange (block1, block2){
    let firstBlock = parseInt(block1, 10)
    let secondBlock = parseInt(block2, 10)
    let diff = Math.abs(firstBlock-secondBlock)
    if (diff <= blockRange){
      return `within range by ${blockRange - diff}`
    } else{
      return `${diff - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(rate){
  return function tipCalc(cost){
    return cost * rate
  }
}

function createDriver() {
  let counter = 0;
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = counter++;
    }
  }
}
