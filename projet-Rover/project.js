//prompt 
let prompt = require("prompt");
prompt.start();

let grid = [
	["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
let rover = {direction: "N", x:0,y:0, travelLog:[]};
  

let turnLeft =rover=>rover.direction="W";
let turnRight =rover=>rover.direction="E";
let turnUpward =rover=>rover.direction="N";
let turnDownward =rover=>rover.direction="S";

//moveforward

let moveForward = rover=>{
    rover.travelLog.push([rover.y][rover.x]);
    grid[rover.y][rover.x]=" ";
    if(rover.direction=='N')rover.y-=1; return console.log("i'm on the edge");
    if(rover.direction=='S')rover.y+=1; return console.log("i'm on the edge");
    if(rover.direction=='E')rover.x+=1; return console.log("i am on the edge");
    if(rover.direction=='W')rover.x-=1; return console.log("i am on the edge");
}

//moveBackword
let moveBackward = rover=>{
    rover.travelLog.push([rover.y][rover.x]);
    grid[rover.y][rover.x]=" ";
    if(rover.direction=="N")rover.y+=1; return console.log("i'm on the edge");
    if(rover.direction=="S")rover.y-=1; return console.log("i'm on the edge");
    if(rover.direction=="E")rover.x-=1; return console.log("i'm on the edge");
    if(rover.direction=="W")rover.x+=1; return console.log("i'm on the edge");
}

//pilotRover

let pilotRover = (string, rover)=>{
    for(let i = 0; i <string.length; i++){
        if (string[i]== "l") turnLeft(rover);
        else if (string[i]== "r") turnRight(rover);
        else if (string[i]== "u") turnUpward(rover);
        else if (string[i]== "d") turnDownward(rover);
        else if (string[i]== "f") moveForward(rover);
        else if (string[i]== "b") moveBackward(rover);
        else{
            return console.log(error);
        }
    }
    grid[rover.y][rover.x]=rover.direction
    console.table(grid);
    // console.table(grid.join("\\n"));

};
//prompt
grid[rover.y][rover.x]=rover.direction;
console.table(grid);
// console.log(grid.join("\\n"));
prompt.get("commands", function(err,res){
    if (err) console.log(err);
    pilotRover(res.commands, rover);
});
