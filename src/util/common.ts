class common{
    title:string = 'test';
    constructor(){
        
    }
    identity<T>(arg: T): T {
        return arg;
    }
}

export default common;