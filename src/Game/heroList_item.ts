// 必须要继承自 eui.ItemRenderer
class heroList_item extends eui.ItemRenderer{
	// 选择框
	public ce_select:eui.CheckBox;

	public constructor() {
		super()
		// 把这个 类和皮肤 联系起来
		this.skinName = 'resource/skins/skins_item/heroListItem.exml'
		// 当组件创建完成的时候触发
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)
	}
	private onComplete() {
		// 当select的选中状态发生改变的时候触发
		this.ce_select.addEventListener(eui.UIEvent.CHANGE, (e) => {
			// this.data 就是绑定的数据, 
			this.data.isSelected = this.ce_select.selected
			
		}, this)
	}
	// 当数据改变时，更新视图
	protected dataChanged() {
		// isSeleted 是我们提供数据的某个字段
		this.ce_select.selected = this.data.isSelected
	}
	
}