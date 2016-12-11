var faction;
(function (faction) {
    faction[faction["平衡系"] = 1] = "平衡系";
    faction[faction["超越系"] = 2] = "超越系";
    faction[faction["治愈系"] = 3] = "治愈系";
})(faction || (faction = {}));
var Soul = (function () {
    function Soul(name, rare, AddAttack, AddHp, faction) {
        this.name = " ";
        this.rare = 0;
        this.AddAttack = 0;
        this.AddHp = 0;
        this.name = name;
        this.rare = rare;
        this.AddAttack = AddAttack;
        this.AddHp = AddHp;
        this.faction = faction;
    }
    var d = __define,c=Soul,p=c.prototype;
    d(p, "Hp"
        ,function () {
            var point = 0;
            if (this.faction == 1) {
                point = 1;
            }
            if (this.faction == 2) {
                point = 0.7;
            }
            if (this.faction == 3) {
                point = 1.5;
            }
            var Hp = 0;
            Hp = this.AddHp * (this.rare / 6) * point;
            return Hp;
        }
    );
    d(p, "attack"
        ,function () {
            var point = 0;
            if (this.faction == 1) {
                point = 1.5;
            }
            if (this.faction == 2) {
                point = 1;
            }
            if (this.faction == 3) {
                point = 0.7;
            }
            var attack = 0;
            attack = this.AddAttack * (this.rare / 6) * point;
            return attack;
        }
    );
    p.display = function () {
        console.log("念灵:" + this.name);
        console.log("rare:" + this.rare);
        console.log("AddAttack:" + this.attack);
        console.log("AddHp:" + this.Hp);
    };
    return Soul;
}());
egret.registerClass(Soul,'Soul');
//# sourceMappingURL=soul.js.map