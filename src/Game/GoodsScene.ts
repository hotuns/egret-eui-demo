class GoodsScene extends eui.Component implements  eui.UIComponent {
	public btn_return:eui.Button;
	public scr_goods:eui.Scroller;
	public list_goods:eui.List;

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

		// 原始数据
		let dataArr:any[] = [
			{image: 'resource/art/heros_goods/goods01.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'},
			{image: 'resource/art/heros_goods/goods02.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'},
			{image: 'resource/art/heros_goods/goods03.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'},
			{image: 'resource/art/heros_goods/goods04.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'},
			{image: 'resource/art/heros_goods/goods05.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'},
			{image: 'resource/art/heros_goods/goods06.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'},
			{image: 'resource/art/heros_goods/goods07.png', name: '亚特伍德', value: '评价: 力量+100, 智力 -500'}
		]
		// eui数据
		let euiArr:eui.ArrayCollection = new eui.ArrayCollection(dataArr)
		this.list_goods.dataProvider = euiArr

		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)
	}
	
}