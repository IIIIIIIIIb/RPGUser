class User{

    level = 0;    //等级

    EXP = 0;   //经验

    coin = 0;  //念灵币

    heroes : Hero[] = [];

    constructor(){

        this.level = 0;
        this.EXP = 0;
        this.coin = 0;

    }

    public addHero(hero : Hero){

        this.heroes.push(hero);
    }

    public display(){

        console.log("User:");
        console.log("Userlevel:" + this.level);
        console.log("UserEXP：" + this.EXP);
    }

}