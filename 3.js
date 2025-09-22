// 1. 定义Reducer（纯函数！）
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function myCreateStore(reducer) {
  let currentState;
  let listteners=[];

  function getState(){
    return currentState;
  }
  function dispatch(action){
    currentState=reducer(currentState,action);
    listteners.forEach((i)=>{
        i();
    })
  }

  function subscribe(i){
    listteners.push(i);
    return ()=>{
        const index=listteners.indexOf(i);
        listteners.splice(index,1);
    }
  }

  dispatch({type: '@@INIT'});
  return {
    getState,
    dispatch,
    subscribe
  }
}


// 2. 创建Store
const store = myCreateStore(counterReducer);

// 3. 触发Action
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // 输出：1

















function loggerMiddleware(store) {
  return function(next) {
    return function(action) {
      console.log('dispatching:', action);
      const result = next(action);
      console.log('next state:', store.getState());
      return result;
    };
  };
}
