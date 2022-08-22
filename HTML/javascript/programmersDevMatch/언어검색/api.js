export const API_END_POINT = 'http://localhost:3002';

//fetch 실행(url 인자로 받기)
const request = async(url) => {
    const res = await fetch(url)
    //결과값이 트루면 응답을 json 파일로 변경 해당 파일 리턴
    if(res.ok){
        const json = await res.json();
        return json;
    }
    //응답이 false면 에러 던지기
    throw new Error('요청 실패');
}
export const fetchLanguages = async (keyword) => request(`${API_END_POINT}/languages?keyword=${keyword}`)