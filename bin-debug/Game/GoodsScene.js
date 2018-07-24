var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GoodsScene = (function (_super) {
    __extends(GoodsScene, _super);
    function GoodsScene() {
        return _super.call(this) || this;
    }
    GoodsScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GoodsScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 原始数据
        var dataArr = [
            { image: 'resource/art/heros_goods/goods01.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
            { image: 'resource/art/heros_goods/goods02.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
            { image: 'resource/art/heros_goods/goods03.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
            { image: 'resource/art/heros_goods/goods04.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
            { image: 'resource/art/heros_goods/goods05.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
            { image: 'resource/art/heros_goods/goods06.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' },
            { image: 'resource/art/heros_goods/goods07.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500' }
        ];
        // eui数据
        var euiArr = new eui.ArrayCollection(dataArr);
        this.list_goods.dataProvider = euiArr;
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
    };
    return GoodsScene;
}(eui.Component));
__reflect(GoodsScene.prototype, "GoodsScene", ["eui.UIComponent", "egret.DisplayObject"]);
