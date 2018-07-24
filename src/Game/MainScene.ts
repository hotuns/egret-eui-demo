class MainScene extends eui.Component implements  eui.UIComponent {

	public Group_mbtn:eui.Group;
	public mgtnPlayer:eui.ToggleButton;
	public mbtnHero:eui.ToggleButton;
	public mbtnGoods:eui.ToggleButton;
	public mbtnAbout:eui.ToggleButton;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		// 让Group可以点击
		this.Group_mbtn.touchEnabled = true
		// 事件委托, 点击按钮的时候触发toggleBtn
		this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
			// 如果target有子元素,说明点到的是Group,而不是里面的按钮
			if(e.target.numElements) {
				return
			}
			let theBtn = <eui.ToggleButton>e.target
			// 在点击触发这个事件的时候,点击的那个btn已经变成了选中状态
			// 判断theBtn是否为true
			if (theBtn.selected) {
				this.toggleBtn(theBtn)
			} else {
				// 当selected为false的时候,说明按钮在点击之前就是选中状态
				// 点击后变成了false,所以这里改回选中状态
				theBtn.selected = true
			}
		}, this)

	}

	/**
	 * 切换按钮
	 * @param btn 参数是eui.ToggleButton的时候切换按钮, 参数是0的时候设置为全部不选中
	 */
	public toggleBtn(btn:eui.ToggleButton | number) {
		console.log('切换')
		
		// 先把所有的按钮都设置为不选中
		for (let i = 0; i < this.Group_mbtn.numChildren; i++) {
			let theBtn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i)
			theBtn.selected = false
		}
		if(btn===0){
			console.log('返回');
			return
		}
		// 把传进来的btn设置为选中状态
		btn = <eui.ToggleButton>btn
		btn.selected = true

		// 获取当前点击的按钮的下标, 用来实现不同按钮对应的功能
		// 0 1 2 3 对应 玩家, 英雄, 物品, 关于
		let index = this.Group_mbtn.getChildIndex(<eui.ToggleButton>btn)
		
		switch (index) {
			case 0:
				// 调用静态方法切换到玩家场景
				SceneManager.toPlayerScene()
				// 把按钮的层级提高	
				// this.numChildren表示所有的子元素数量
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 1:
				SceneManager.toHeroScene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 2:
				SceneManager.toGoodsSene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break
			case 3:
				SceneManager.toAboutSene()
				this.setChildIndex(this.Group_mbtn, this.numChildren)
			default:
				break
		}
	}
}