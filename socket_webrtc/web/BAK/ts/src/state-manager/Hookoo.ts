


class Hookoo{
    
    private static inst:Hookoo|null = null;

    private state:any = {
        hookoos:[],


    };

    constructor(){

    }

    public static get(){
        if(!this.inst){
            this.inst = new Hookoo();
        }

        return this.inst;
    }



    public initHookoo(){

    }
    public setHookooState(){

    }
    public getHookooState(){

    }






}




function hookooState<T>(defaultVal:T){
    
    let val = defaultVal;

    const setValue = (nv:T)=>{
        val = nv;
    }
    
    return [val, setValue];

}
function hookooGlobal<T>(defaultVal:T){
    const hookoo = Hookoo.get();


}


export {
    hookooState,
    hookooGlobal,


}