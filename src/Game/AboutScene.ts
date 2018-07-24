class AboutScene extends eui.Component implements  eui.UIComponent {
	public btn_close:eui.Button;
	public lab_about:eui.Label;

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
		
		this.lab_about.text = `关于我们
		关于我们`

		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)
	}
	
}