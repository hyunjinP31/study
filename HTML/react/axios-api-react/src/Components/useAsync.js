import { useReducer, useEffect } from 'react';

const initailState = {
    loding: false,
    data: null,
    error: null,
}
function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loding: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: null,
                data: null,
                error:action.error,
            };
        default:
            return state;
    }
}

function useAsync(callback, deps = [], skip=false){
    const [state, dispatch ] = useReducer(reducer,initailState);
    const fetchDate = async() =>{
        dispatch({type:'LOADING'});
        try{
            // await 뒤에는 원해 axios로 값을 받아왔는데, 이를 callback함수로 불러서(인자로 받기) 나중에 해당 함수를 불러서 인자만 각각 넣어주면 이 함수 하나로 여러 값을 받아 사용할 수 있다
            const data = await callback(); //해당 콜백함수를 부를 때까지 기다리기 위한 await
            dispatch({type:'SUCCESS', data: data})
        }
        catch(e){
            dispatch({type:'ERROR', error:e})
            console.log(e);
        }
    }
    useEffect(()=>{
        //skip이 true면 리턴 fetchDate()실행 안 됨
        if(skip) return;
        fetchDate();
        // eslint설정을 다음 줄에서만 비활성화 (해당 글의 다음 줄은 무시, 앞에 띄워줘야 함)
        // eslint-disable-next-line
    },deps)
    return [ state, fetchDate ];
}

export default useAsync;

