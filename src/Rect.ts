export class Rect
{
    X : number;
    Y : number;
    Width : number;
    Height : number;

    constructor(x : number, y : number, width : number, height : number){
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
    }

    DrawFill(cxt : CanvasRenderingContext2D) {
        cxt.fillRect(this.X, this.Y, this.Width, this.Height);
    }
}