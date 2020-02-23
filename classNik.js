
class BaseClass{
    constructor(firstName, lastName, years, national, club, position){
      this.firstName = firstName;
      this.lastName = lastName;
      this.years = years;
      this.national = national;
      this.club = club;
      this.position = position;
    }
  
    get firstName(){
      return this._firstName;
    }
    get lastName(){
      return this._lastName;
    }
    get years(){
      return this._years;
    }
    get national(){
      return this._national;
    }
    get club(){
      return this._club;
    }
    get position(){
      return this._position;
    }
   
  
   
  
    set firstName(value){
      if(value.length == " "){
        alert("Введите firstName");
      }
      this._firstName = value;
    }
    set lastName(value){
      if(value.length == " "){
        alert("Введите lastName");
      }
      this._lastName = value;
    }
  
    set years(value){
      if(value.length == " "){
        alert("Введите years");
      }
      this._years = value;
    }
    set national(value){
      if(value.length == " "){
        alert("Введите national");
      }
      this._national = value;
    }
    set club(value){
      if(value.length == " "){
        alert("Введите club");
      }
      this._club = value;
    }
    set position(value){
      if(value.length == " "){
        alert("Введите position");
      }
      this._position = value;
    }
  
  }
  
  
  class OneExtendsClass extends BaseClass{
    constructor(firstName, lastName, years, national, club, position, parameters, foot){
      super(firstName, lastName, years, national, club, position);
      this.parameters = parameters;
      this.foot = foot;
      this.type = "footballplayer";
    }
  
    get parameters(){
      return this._parameters;
    }
    get foot(){
      return this._foot;
    }
  
    set parameters(value){
      if(value.length == " "){
        alert("Введите parameters");
      }
      this._parameters = value;
    }
    set foot(value){
      if(value.length == " "){
        alert("Введите foot");
      }
      this._foot = value;
    }
  
  }
  
  class TwoExtendsClass extends BaseClass{
    constructor(firstName, lastName, years, national, club, position, grip, team){
      super(firstName, lastName, years, national, club, position);
      this.grip = grip;
      this.team = team;
      this.type = "hockeyplayer";
    }
  
    get grip(){
      return this._grip;
    }
    get team(){
      return this._team;
    }
  
    set grip(value){
      if(value.length == " "){
        alert("Введите grip");
      }
      this._grip = value;
    }
    set team(value){
      if(value.length == " "){
        alert("Введите team");
      }
      this._team = value;
    }

   
  
  }

  
let bandit1 = new OneExtendsClass("John", "Yung", "32", "Arg", "Real M", "Forward", "Pass", "Right");
arrBandits.push(bandit1);
let bandit2 = new OneExtendsClass("John123123", "Yung", "21", "Fra", "PSG", "Goalkeeper", "Endurance", "Left");
arrBandits.push(bandit2);
let bandit3 = new TwoExtendsClass("John12", "Yung", "20", "Bra", "Milan", "Defender", "Left", "Fourth");
arrBandits.push(bandit3);
let bandit4 = new TwoExtendsClass("John12", "Yung", "20", "Bra", "Milan", "Defender", "Left", "Second");
arrBandits.push(bandit4);
display("information");
printInfo(arrBandits);
