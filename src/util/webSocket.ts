class Socket{
    //初始化
    socket:any = {};
    path:string = '';
    parent:any = {};
    num = 0;
    heart = {}
    constructor(path:string){
        this.path = path;
        this.num = 1;
        this.heart = this.heartCheck(this);
        this.init();
    }
    //配置连接属性
    init(){
        console.log('初始化事件')
        this.socket = new WebSocket(this.path);
        this.socket.parent  = <any>this;
        this.socket.onopen = this.open;
        this.socket.onerror  = this.error;
        this.socket.onclose  = this.close;
    }
    //建立连接
    open(){
        console.log("socket连接成功");
        //连接后心跳开始
        this.parent.heart.start();
    }
    //错误信息
    error(event:object) {
        console.log(event)
        console.log("连接错误");
        //重连
        this.parent.reConnect(3);
    }
    //关闭事件
    close() {
        console.log("socket已经关闭");
        this.parent.heart.clean();
    }
    //重连
    reConnect(number:number) {
        let timer = <any>{};
        let that = this;
        if(this.num > number) {
          console.log('重连失败');
          clearTimeout(timer);
       
          this.num = 1;
          return;
        } //三分钟重连
        timer = setTimeout(() => {
            that.num ++;
            that.init();
        },1000);
    }
    //心跳
    heartCheck(obj:any){
        let timeout =  5000;
        let timeoutObj = <any>null;

        //清空定时任务
        function clean(){
            clearInterval(timeoutObj);
        }

        //开始心跳任务
        function start(){
            timeoutObj && clearInterval(timeoutObj);
            timeoutObj = setInterval(function(){
                obj.socket.send('heartbeat');
            }, timeout)
        }

        return {
            start,
            clean
        };
    }
}

export default Socket;