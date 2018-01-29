class Elevator {
  constructor(){
    this.floor        = 0;
    this.MAXFLOOR     = 10;
    this.watingList   = [];
    this.passengers   = [];
    this.requests     = [];
    this.direction    = "up";
    this.setInterval;
    
  }

  start() {
    this.setInterval = setInterval(() => {
      this.update();
      this.floorUp();
    },1000);
  }

  stop() { 
    clearInterval(this.setInterval);
  }
  
  update() { 
     return this.log();
  }

  _passengersEnter() {

  }
  _passengersLeave() { }

  floorUp() {

    if(this.floor < this.MAXFLOOR && this.direction == "up"){
      this.floor++;
    }else{
      this.direction = "down";
      this.floorDown();
    }
 
 }

  floorDown() {
    if(this.floor > 0 && this.direction == "down"){
      this.floor --;
    }else{
      this.direction = "up";
      this.floorUp();
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log("you are in floor: " + this.floor);
    console.log("you direction is " + this.direction);
    // console.log(Person.name + "get into");
  }
}

module.exports = Elevator;


