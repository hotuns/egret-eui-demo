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
var HeroScene = (function (_super) {
    __extends(HeroScene, _super);
    function HeroScene() {
        return _super.call(this) || this;
    }
    HeroScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 原始数组
        var dataArr = [
            { image: 'resource/art/heros_goods/heros01.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros02.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros03.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: true },
            { image: 'resource/art/heros_goods/heros04.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros05.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros06.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false },
            { image: 'resource/art/heros_goods/heros07.png', name: '亚特伍德', value: '评价: 很特么厉害, 为所欲为', isSelected: false }
        ];
        // 转成eui数据
        var euiArr = new eui.ArrayCollection(dataArr);
        // 把list_hero数据源设置成euiArr
        this.list_hero.dataProvider = euiArr;
        // 设置list_hero的项呈视器 (这里直接写类名,而不是写实例)
        this.list_hero.itemRenderer = heroList_item;
        // 点击返回按钮,回到主场景
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        // 点击确定按钮,回到主场景,显示出选择的项
        this.btn_select.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSelect, this);
    };
    /**
     * 点击确定按钮
     */
    HeroScene.prototype.onClickSelect = function (e) {
        SceneManager.toMainScene();
        SceneManager.instance.mainScene.toggleBtn(0);
        // 拿到数据源
        var dataProvider = this.list_hero.dataProvider;
        var arr = [];
        // 遍历数据源中所有项
        for (var i = 0; i < dataProvider.length; i++) {
            var item = dataProvider.getItemAt(i);
            if (item.isSelected) {
                arr.push(item.name);
            }
        }
        SceneManager.showInfo(arr);
    };
    return HeroScene;
}(eui.Component));
__reflect(HeroScene.prototype, "HeroScene", ["eui.UIComponent", "egret.DisplayObject"]);
