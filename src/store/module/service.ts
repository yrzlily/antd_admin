const service = {
    state:()=>({
        token:'',
    }),
    mutations:{
        changeNumber(state:any){
            state.number*2;
        }
    },
    getters:{
        getToken (state:any) {
            state.token = localStorage.getItem('token');
            return state.token
        }
    }
}

export default service