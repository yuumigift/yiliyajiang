import { createStore } from 'vuex'

export default createStore({
    state: {  //数据存放的位置
        data:'',
        username:'',
        message:{
            m1:'',
            poem:[]
        },
    },
    mutations: {//在mutations写方法更改state中的值
        data(state,data){
            state.data=data
        }
    },
    actions: {//通过actions触发mutations的方法
        dataone(context,data){
            context.commit('data',data);//带引号的data是mutation里的，第二个data，是页面上
                                        //传过来的参数
        }
    },
    getters:{
        getData:function (state){
            return state.data
        }
    },
    delChooseModuleAll (state, moduleNull) {
        state.chooseModule = moduleNull  // 清空
    },
    modules: {

    }
})