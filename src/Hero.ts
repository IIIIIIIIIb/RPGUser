var AttackCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

    const method = desc.value;

    desc.value = function () {

        if (this["AttackCache"] != null && this["dirtyFlag"] == false) {
          
            console.log("use AttackCache");
            return target["AttackCache"];
        } 
        else {

            this["dirtyFlag"] = false;
            this["AttackCache"] = method.apply(this);
            return method.apply(this);
        }

    }
    return desc;
}

var HpCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

    const method = desc.value;

    desc.value = function () {

        if (this["HpCache"] != null && this["dirtyFlag"] == false) {
          
            console.log("use HpCache");
            return target["HpCache"];
        } 
        else {

            this["dirtyFlag"] = false;
            this["HpCache"] = method.apply(this);
            return method.apply(this);
        }

    }
    return desc;
}


var DefenseCache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {

    const method = desc.value;

    desc.value = function () {

        if (this["DefenseCache"] != null && this["dirtyFlag"] == false) {
          
            console.log("use DefenseCache");
            return target["DefenseCache"];
        } 
        else {

            this["dirtyFlag"] = false;
            this["DefenseCache"] = method.apply(this);
            return method.apply(this);
        }

    }
    return desc;
}


class Hero{

    public isInteam : boolean = false;

    private name = " ";

    private level = 0;

    private rare = 0;

    dirtyFlag = false;

    private AttackCache = null;

    private HpCache = null;

    private DefenseCache = null;

    private equipments : Equipment[] = [];

    private souls : Soul[] = [];

    constructor(level:number,name:string,rare:number){

        this.level = level;
        this.name = name;
        this.rare = rare;
        this.isInteam = true;
    }

    get hp(){
        var result = 0;
        this.souls.forEach(e => result += e.Hp);
        return this.level*10 + result*0.8;
    }

    get attack(){
        var result1 = 0;
        var result2 = 0;
        this.equipments.forEach(e => result1 += e.attack);
        this.souls.forEach(e => result2 += e.attack);
        return result1*0.5 + result2*0.8 + this.level*1.2*(this.rare/6);
    }

    get defense(){
        var result = 0;
        this.equipments.forEach(e => result += e.defense);
        return result*0.5 + this.level*1.1*(this.rare/6);
    }

     get limit(){
        return this.level*2 +10;
    }

    public addEquipment(equipment : Equipment){

        this.equipments.push(equipment);
        this.dirtyFlag = true;
    }

    public addSoul(soul : Soul){

        this.souls.push(soul);
        this.dirtyFlag = true;
    }

    public display(){

        console.log("Hero:"+this.name);
        console.log("level:" + this.level);
        console.log("HP:" + this.hp);
        console.log("Attack:" + this.attack);
        console.log("Defense:" + this.defense);
        console.log("limit:" + this.limit);
    }

}