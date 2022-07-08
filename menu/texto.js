class ColorTexto extends String{
    constructor(string, color){
        super(string)
        this.color = color;
    }

    print(){
        console.log(`%c${this.toString()}`,`color: ${this.color}`);
    }
}


export default ColorTexto