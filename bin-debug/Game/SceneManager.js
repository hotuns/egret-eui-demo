var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理类
 */
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
        this.heroScene = new HeroScene();
        this.goodsScene = new GoodsScene();
        this.aboutScene = new AboutScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置根场景
     */
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
     * 删除其他场景
     * @param scene 不需要删除的场景
     */
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var arr = [this.playerScene, this.heroScene, this.goodsScene, this.aboutScene];
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this.mainScene.removeChild(item);
            }
        });
    };
    /**
     * 在主场景显示选择的数据
     */
    SceneManager.showInfo = function (arr) {
        var text = '你选择了: ';
        if (arr.length === 0) {
            text = '厉害了什么都不选';
        }
        else {
            text += arr.toString();
        }
        // 新建一个消息背景图
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        // 新建一个label用来显示
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    /**
     * 主场景
     */
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage; // (根) 舞台
        var mainScene = SceneManager.instance.mainScene; // 主场景
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if (!mainScene.parent) {
            // 未被添加到场景
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene);
        }
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
    };
    /**
     * 玩家场景
     */
    SceneManager.toPlayerScene = function () {
        this.instance.removeOther(this.instance.heroScene);
        // 把玩家场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    /**
     * 英雄场景
     */
    SceneManager.toHeroScene = function () {
        this.instance.removeOther(this.instance.heroScene);
        this.instance.mainScene.addChild(this.instance.heroScene);
    };
    /**
     * 物品场景
     */
    SceneManager.toGoodsSene = function () {
        this.instance.removeOther(this.instance.goodsScene);
        this.instance.mainScene.addChild(this.instance.goodsScene);
    };
    /**
     * 关于场景
     */
    SceneManager.toAboutSene = function () {
        this.instance.removeOther(this.instance.aboutScene);
        this.instance.mainScene.addChild(this.instance.aboutScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
