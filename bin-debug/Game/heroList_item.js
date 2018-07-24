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
// 必须要继承自 eui.ItemRenderer
var heroList_item = (function (_super) {
    __extends(heroList_item, _super);
    function heroList_item() {
        var _this = _super.call(this) || this;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/skins/skins_item/heroListItem.exml';
        // 当组件创建完成的时候触发
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    heroList_item.prototype.onComplete = function () {
        var _this = this;
        // 当select的选中状态发生改变的时候触发
        this.ce_select.addEventListener(eui.UIEvent.CHANGE, function (e) {
            // this.data 就是绑定的数据, 
            _this.data.isSelected = _this.ce_select.selected;
        }, this);
    };
    // 当数据改变时，更新视图
    heroList_item.prototype.dataChanged = function () {
        // isSeleted 是我们提供数据的某个字段
        this.ce_select.selected = this.data.isSelected;
    };
    return heroList_item;
}(eui.ItemRenderer));
__reflect(heroList_item.prototype, "heroList_item");
