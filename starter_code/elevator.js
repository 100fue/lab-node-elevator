class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.position   = this.floor;
    this.direction  = "up";
  }

  start() {
    setInterval(update,1000);
  }

  stop() { 
    let stopSetInterval = setInterval(update,1000);
    clearInterval(stopSetInterval);
  }
  
  update() { 
    // console.log(this.floor += 1);
  }

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() { 
    if(this.floor == 0){
      this.floor += 1;
    }
  }

  floorDown() {
    if(this.floor == this.MAXFLOOR){
      this.floor -= 1;
    }
  }

  call() {

  }

  log() {
    console.log(this.position);
    console.log(this.direction);
  }
}

module.exports = Elevator;


