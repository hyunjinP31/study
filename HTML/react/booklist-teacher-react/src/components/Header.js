import React from 'react';
import { useBookDispatch, useBookList } from '../context/BookContext';

const List = ({year}) => {
    const dispatch = useBookDispatch();
    const onYearChange=()=>dispatch({
        type:'YEAR_LISTS',
        year: year
    })
    return (
        <li onClick={onYearChange}>{year}년도</li>
    )
}
const Header = () => {
    const { total } = useBookList();
    const dispatch = useBookDispatch();
    //1)map메서드를 활용 ["2022","2022","2021","2021"...]
    //2)new Set set을 생성(같은 값을 허용하지않음) { "2022","2021","2020","2019"} 
    //3)스프레드 구문으로 배열로 변경 [...Set] [ "2022","2021","2020","2019"]
    const yearArr = [...new Set(total.map(book => book.year))];
    const onClick = ()=>{
        dispatch({type:'TOTAL_LISTS'});
    } 
    return (
        <div className='header'>
            <h2  onClick={onClick}>booklist</h2>
            <ul>
                {yearArr.map((year,index)=><List year={year} key={index}/>)}
            </ul>
        </div>
    );
};

export default Header;