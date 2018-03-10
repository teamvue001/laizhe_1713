import axios from 'axios';

const day = {
    // namespaced : true,
    state : {
        dataList : []
    },
    getters : {
        totalPage : (state) => {
            return Math.ceil(state.dataList.length/10);
        },
        currentList: (state) =>{
            return function(payload){
                return state.dataList.filter((value, index) => {
                    return ((payload*10-index) > 0 && (payload*10-index) <= 10)
                })
            }
        }
    },
    mutations : {
        updateState : (state, payload) => {
            state.dataList = payload.dataList;
        }
    },
    actions : {
        getData : (context) => {
            return new Promise((resolved, reject) => {
                axios.get("http://localhost:8080/api/getData").then((res) => {
                    context.commit('updateState', {
                        dataList : res.data.list
                    });
                    resolved();
                })
            })
        }
    }

}

export default day;
