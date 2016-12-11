var AttackCache = function (target, propertyName, desc) {
    var method = desc.value;
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
    };
    return desc;
};
var HpCache = function (target, propertyName, desc) {
    var method = desc.value;
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
    };
    return desc;
};
var DefenseCache = function (target, propertyName, desc) {
    var method = desc.value;
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
    };
    return desc;
};
var Hero = (function () {
    function Hero(level, name, rare) {
        this.isInteam = false;
        this.name = " ";
        this.level = 0;
        this.rare = 0;
        this.dirtyFlag = false;
        this.AttackCache = null;
        this.HpCache = null;
        this.DefenseCache = null;
        this.equipments = [];
        this.souls = [];
        this.level = level;
        this.name = name;
        this.rare = rare;
        this.isInteam = true;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "hp"
        ,function () {
            var result = 0;
            this.souls.forEach(function (e) { return result += e.Hp; });
            return this.level * 10 + result * 0.8;
        }
    );
    d(p, "attack"
        ,function () {
            var result1 = 0;
            var result2 = 0;
            this.equipments.forEach(function (e) { return result1 += e.attack; });
            this.souls.forEach(function (e) { return result2 += e.attack; });
            return result1 * 0.5 + result2 * 0.8 + this.level * 1.2 * (this.rare / 6);
        }
    );
    d(p, "defense"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.defense; });
            return result * 0.5 + this.level * 1.1 * (this.rare / 6);
        }
    );
    d(p, "limit"
        ,function () {
            return this.level * 2 + 10;
        }
    );
    p.addEquipment = function (equipment) {
        this.equipments.push(equipment);
        this.dirtyFlag = true;
    };
    p.addSoul = function (soul) {
        this.souls.push(soul);
        this.dirtyFlag = true;
    };
    p.display = function () {
        console.log("Hero:" + this.name);
        console.log("level:" + this.level);
        console.log("HP:" + this.hp);
        console.log("Attack:" + this.attack);
        console.log("Defense:" + this.defense);
        console.log("limit:" + this.limit);
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map