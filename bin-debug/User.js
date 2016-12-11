var User = (function () {
    function User() {
        this.level = 0; //等级
        this.EXP = 0; //经验
        this.coin = 0; //念灵币
        this.heroes = [];
        this.level = 0;
        this.EXP = 0;
        this.coin = 0;
    }
    var d = __define,c=User,p=c.prototype;
    p.addHero = function (hero) {
        this.heroes.push(hero);
    };
    p.display = function () {
        console.log("User:");
        console.log("Userlevel:" + this.level);
        console.log("UserEXP：" + this.EXP);
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map