


enum faction{

    "平衡系" = 1,
    "超越系" = 2,
    "治愈系" = 3
}



class Soul{
    private name = " ";

    private rare = 0;

    private AddAttack = 0;

    private AddHp = 0;

    private faction : faction;

    constructor(name:string,rare:number,AddAttack:number,AddHp:number,faction:faction){
        this.name = name;
        this.rare = rare;
        this.AddAttack = AddAttack;
        this.AddHp = AddHp;
        this.faction = faction;
    }

    get Hp(){
        var point = 0;
        if(this.faction == 1){
            point = 1;
        }
        if(this.faction == 2){
            point = 0.7;
        }
        if(this.faction == 3){
            point = 1.5;
        }
        var Hp = 0;
        Hp = this.AddHp*(this.rare/6)*point;
        return Hp;
    }

    get attack(){
        var point = 0;
       if(this.faction == 1){
            point = 1.5;
        }
        if(this.faction == 2){
            point = 1;
        }
        if(this.faction == 3){
            point = 0.7;
        }
        var attack = 0;
        attack = this.AddAttack*(this.rare/6)*point;
        return attack;
    }

    public display(){
        console.log("念灵:" + this.name);
        console.log("rare:" + this.rare);
        console.log("AddAttack:" + this.attack);
        console.log("AddHp:" + this.Hp);
    }

}