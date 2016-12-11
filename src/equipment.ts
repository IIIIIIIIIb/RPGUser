class Equipment{

    private name = " ";

    private rare = 0;

    private AddAttack = 0;

    private AddDefense = 0;

    private dirtyFlag = false;

    constructor(name:string,rare:number,AddAttack:number,AddDefense:number){
        this.name = name;
        this.rare = rare;
        this.AddAttack = AddAttack;
        this.AddDefense = AddDefense;
    }

    get attack(){
        var attack = 0;
        attack = this.AddAttack*(this.rare/6);
        return attack;
    }

    get defense(){
        var defense = 0;
        defense= this.AddDefense*(this.rare/6);
        return defense;
    }

    public display(){
        console.log("装备:" + this.name);
        console.log("rare:" + this.rare);
        console.log("AddAttack:" + this.attack);
        console.log("AddDefense:" + this.defense);
    }

}