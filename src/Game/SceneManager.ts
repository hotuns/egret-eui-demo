/**
 * 场景管理类
 */
class SceneManager {
    private _stage:egret.DisplayObjectContainer // 设置所有场景所在的舞台(根)

    public mainScene:MainScene //主场景
    public playerScene:PlayerScene //玩家场景
    public heroScene:HeroScene //英雄场景
    public goodsScene:GoodsScene //物品场景
    public aboutScene:AboutScene //关于场景

    constructor() {
        this.mainScene = new MainScene()
        this.playerScene = new PlayerScene()
        this.heroScene = new HeroScene()
        this.goodsScene = new GoodsScene()
        this.aboutScene = new AboutScene()
    }

    /**
     * 获取实例
     */
    static sceneManager:SceneManager
    static get instance(){
        if(!this.sceneManager) {
            this.sceneManager =  new SceneManager()
        } 
        return this.sceneManager
    }
    /**
     * 设置根场景
     */
    public setStage(s:egret.DisplayObjectContainer) {
        this._stage = s
    }

    /**
     * 删除其他场景
     * @param scene 不需要删除的场景
     */
    private removeOther(scene) {
        let arr = [this.playerScene, this.heroScene, this.goodsScene, this.aboutScene]
        arr.forEach((item)=> {
            if(scene === item) {
                return 
            }
            if(item.parent) {
                this.mainScene.removeChild(item)
            }
        })
    }

    /**
     * 在主场景显示选择的数据
     */
    static showInfo(arr:string[]) {
        let text:string = '你选择了: '
        if (arr.length === 0) {
            text = '厉害了什么都不选'
        } else {
            text += arr.toString()
        }
        // 新建一个消息背景图
        let img:egret.Bitmap = new egret.Bitmap()
        img.texture = RES.getRes('toast-bg_png')
        SceneManager.instance.mainScene.addChild(img)
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2
        img.y = 500
        img.height = 40

        // 新建一个label用来显示
        let label:egret.TextField = new egret.TextField(); 
        label.text = text
        label.size = 20
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2
        label.y = 510
        label.height = 40

        // 创建一个定时器,1000毫秒后删除label
        let timer:egret.Timer = new egret.Timer(1000, 1)
        timer.start()
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, (e)=>{
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(img)
        }, this)
    }

    /**
     * 主场景
     */
    static toMainScene() {
        let stage:egret.DisplayObjectContainer = this.instance._stage // (根) 舞台
        let mainScene = SceneManager.instance.mainScene // 主场景
    
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if(!mainScene.parent){
            // 未被添加到场景
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene)
        } 

        SceneManager.instance.removeOther(SceneManager.instance.mainScene)
    }

    /**
     * 玩家场景
     */
    static toPlayerScene() {
        this.instance.removeOther(this.instance.heroScene)
        // 把玩家场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.playerScene)
    }

    /**
     * 英雄场景
     */
    static toHeroScene() {
        this.instance.removeOther(this.instance.heroScene)
        this.instance.mainScene.addChild(this.instance.heroScene)
    }

    /**
     * 物品场景
     */
    static toGoodsSene() {
        this.instance.removeOther(this.instance.goodsScene)
        this.instance.mainScene.addChild(this.instance.goodsScene)
    }

    /**
     * 关于场景
     */
    static toAboutSene() {
        this.instance.removeOther(this.instance.aboutScene)
        this.instance.mainScene.addChild(this.instance.aboutScene)
    }
}