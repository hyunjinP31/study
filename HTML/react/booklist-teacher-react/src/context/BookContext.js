import React,{createContext, useContext, useReducer} from 'react';


const initialLists = {
    //전체 리스트 배열
    total: [
        {id:1, writer:"공유",title:"나는 나로 살기로 했다.",year:"2022"},
        {id:2, writer:"전지현",title:"경이로운 소문",year:"2022"},
        {id:3, writer:"손예진",title:"UI/UX 디자인 이론과 실습",year:"2022"},
        {id:4, writer:"현빈",title:"만들면서 배우는 제이쿼리",year:"2022"},
        {id:5, writer:"공유",title:"이상한 나라의 엘리스",year:"2021"},
        {id:6, writer:"신채경",title:"인어공주",year:"2021"},
        {id:7, writer:"유진",title:"일러스트레이터 강의",year:"2021"},
        {id:8, writer:"박소담",title:"인터렉티브 웹디자인",year:"2020"},
        {id:9, writer:"정우성",title:"코어 자바스크립트",year:"2020"},
        {id:10, writer:"이정재",title:"기초부터 배우는 html css",year:"2020"},
        {id:11, writer:"한가인",title:"디자이너의 포토샵 스킬북",year:"2019"},
        {id:12, writer:"이유리",title:"인디자인 프로",year:"2019"},
        {id:13, writer:"김태희",title:"좋은사람에게만 좋은 사람이고 싶다.",year:"2019"},
        {id:14, writer:"케이윌",title:"내일죽고 싶지만 떡볶이는 먹고싶어",year:"2019"}
    ],
    //필터링을 한 값을 받을 배열
    filterList: [
        {id:1, writer:"공유",title:"나는 나로 살기로 했다.",year:"2022"},
        {id:2, writer:"전지현",title:"경이로운 소문",year:"2022"},
        {id:3, writer:"손예진",title:"UI/UX 디자인 이론과 실습",year:"2022"},
        {id:4, writer:"현빈",title:"만들면서 배우는 제이쿼리",year:"2022"},
        {id:5, writer:"공유",title:"이상한 나라의 엘리스",year:"2021"},
        {id:6, writer:"신채경",title:"인어공주",year:"2021"},
        {id:7, writer:"유진",title:"일러스트레이터 강의",year:"2021"},
        {id:8, writer:"박소담",title:"인터렉티브 웹디자인",year:"2020"},
        {id:9, writer:"정우성",title:"코어 자바스크립트",year:"2020"},
        {id:10, writer:"이정재",title:"기초부터 배우는 html css",year:"2020"},
        {id:11, writer:"한가인",title:"디자이너의 포토샵 스킬북",year:"2019"},
        {id:12, writer:"이유리",title:"인디자인 프로",year:"2019"},
        {id:13, writer:"김태희",title:"좋은사람에게만 좋은 사람이고 싶다.",year:"2019"},
        {id:14, writer:"케이윌",title:"내일죽고 싶지만 떡볶이는 먹고싶어",year:"2019"}
    ] 
}

//reducer함수
function bookReducer(state, action){
    switch(action.type){
        //년도로 필터링
        //모든 상태를 펼친 후에 filterList에는 total을 filtering 한 값을 담는다.(filtering 비교는 리스트에 담긴 year의 값과 action에서 받아온 year의 값을 비교)
        case "YEAR_LISTS":
        return {
            ...state,
            filterList: state.total.filter(list=>list.year === action.year)
        }
        //전체 리스트를 확인
        //모든 state를 반환한다.
        case "TOTAL_LISTS":
        return {
            ...state,
            filterList: state.total
        };
        //리스트 지우기.
        //total data와 filterlist의 data를 같이 지워주어야 하기 때문에 두 개를 전부 배열 메소드를 써서 새로 값을 반환해준다.
        case "DELETE_LIST":
        return {
            total:state.total.filter(list=>list.id !== action.id),
            filterList:state.filterList.filter(list=>list.id !== action.id)
        }
        default:
        return state;
    }
}
//context 선언
const BookListContext = createContext();
const BookDispatchContext = createContext();

//useReducer 구조분해할당해주고 각 context에 value 넣어주기
export function BookProvider({children}){
    const [state, dispatch] = useReducer(bookReducer, initialLists);
    return (
        <BookListContext.Provider value={state}>
            <BookDispatchContext.Provider value={dispatch}>    
                {children}
            </BookDispatchContext.Provider>
        </BookListContext.Provider>
    )
}
//context 함수에 담아서 쓰기 쉽도록 하기
export function useBookList(){
    return useContext(BookListContext);
}
export function useBookDispatch(){
    return useContext(BookDispatchContext);
}

