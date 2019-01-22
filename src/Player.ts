export class Player
{
    Rank : number;
    Name : string;
    Score : number;

    //constructor 
    constructor(rank : number, name : string, score : number) { 
        this.Rank = rank;
        this.Name = name;
        this.Score = score;
    } 
}