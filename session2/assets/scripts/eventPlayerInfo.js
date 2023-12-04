import { AccountManager } from "./AccountManager";
cc.Class({
    extends: cc.Component,

    properties: {
        spriteAvatar:cc.Sprite,
        labelUsername:cc.Label,
        newImagePath:null,
    },

    onLoad () {
        this.accountManager=new AccountManager()
        let account=this.accountManager.getCurrentAccount()
        cc.log(account)
        this.labelUsername.string=account[0]
        this.newImagePath=account[2]
        this.changeSpriteImage();
    },
    changeSpriteImage() {
        // Load hình mới từ đường dẫn
        cc.loader.load(this.newImagePath+".png", (err, texture) => {
            if (err) {
                console.error("Error loading new image:", err);
                return;
            }

            // Tạo một SpriteFrame mới từ texture
            const spriteFrame = new cc.SpriteFrame(texture);
            
            // Đặt hình mới cho Sprite
            this.spriteAvatar.spriteFrame = spriteFrame;
        });
    },
    start () {

    },

    // update (dt) {},
});





