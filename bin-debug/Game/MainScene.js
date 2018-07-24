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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // 让Group可以点击
        this.Group_mbtn.touchEnabled = true;
        // 事件委托, 点击按钮的时候触发toggleBtn
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            // 如果target有子元素,说明点到的是Group,而不是里面的按钮
            if (e.target.numElements) {
                return;
            }
            var theBtn = e.target;
            // 在点击触发这个事件的时候,点击的那个btn已经变成了选中状态
            // 判断theBtn是否为true
            if (theBtn.selected) {
                _this.toggleBtn(theBtn);
            }
            else {
                // 当selected为false的时候,说明按钮在点击之前就是选中状态
                // 点击后变成了false,所以这里改回选中状态
                theBtn.selected = true;
            }
        }, this);
    };
    /**
     * 切换按钮
     * @param btn 参数是eui.ToggleButton的时候切换按钮, 参数是0的时候设置为全部不选中
     */
    MainScene.prototype.toggleBtn = function (btn) {
        console.log('切换');
        // 先把所有的按钮都设置为不选中
        for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
            var theBtn = this.Group_mbtn.getChildAt(i);
            theBtn.selected = false;
        }
        if (btn === 0) {
            console.log('返回');
            return;
        }
        // 把传进来的btn设置为选中状态
        btn = btn;
        btn.selected = true;
        // 获取当前点击的按钮的下标, 用来实现不同按钮对应的功能
        // 0 1 2 3 对应 玩家, 英雄, 物品, 关于
        var index = this.Group_mbtn.getChildIndex(btn);
        switch (index) {
            case 0:
                // 调用静态方法切换到玩家场景
                SceneManager.toPlayerScene();
                // 把按钮的层级提高	
                // this.numChildren表示所有的子元素数量
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 1:
                SceneManager.toHeroScene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 2:
                SceneManager.toGoodsSene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
            case 3:
                SceneManager.toAboutSene();
                this.setChildIndex(this.Group_mbtn, this.numChildren);
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
