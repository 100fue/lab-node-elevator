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
      this._passengersLeave();
      this._passengersEnter();
    },1000);
  }

  stop() { 
    clearInterval(this.setInterval);
  }
  
  update() { 
    
    return this.log();
  }

  _passengersEnter() {
    this.watingList.forEach( (e,i) => {
      if(e.originFloor == this.floor){
        this.passengers.push(e);
        console.log(e.name + " get into the elevator");
        this.watingList.splice(i,1);
      }
    })
  }

  _passengersLeave() {
    this.passengers.forEach( (e,i) => {
      if(e.destinationFloor == this.floor){
        this.passengers.splice(i,1);
        console.log(e.name + " get out of the elevator");
        this.requests.splice(i,1);
      }
    })
  }

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
    this.watingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log("you are in floor: " + this.floor);
    console.log("you direction is " + this.direction);
  }
}

module.exports = Elevator;


