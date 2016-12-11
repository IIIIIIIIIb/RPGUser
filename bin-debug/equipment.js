var Equipment = (function () {
    function Equipment(name, rare, AddAttack, AddDefense) {
        this.name = " ";
        this.rare = 0;
        this.AddAttack = 0;
        this.AddDefense = 0;
        this.dirtyFlag = false;
        this.name = name;
        this.rare = rare;
        this.AddAttack = AddAttack;
        this.AddDefense = AddDefense;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            var attack = 0;
            attack = this.AddAttack * (this.rare / 6);
            return attack;
        }
    );
    d(p, "defense"
        ,function () {
            var defense = 0;
            defense = this.AddDefense * (this.rare / 6);
            return defense;
        }
    );
    p.display = function () {
        console.log("装备:" + this.name);
        console.log("rare:" + this.rare);
        console.log("AddAttack:" + this.attack);
        console.log("AddDefense:" + this.defense);
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=equipment.js.map