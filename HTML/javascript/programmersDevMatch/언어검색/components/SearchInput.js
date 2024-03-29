export default function SearchInput( {
    $target,
    initialState,
    onChange
}){
    this.$element = document.createElement('form');
    this.$element.className = "SearchInput";
    this.state = initialState;

    $target.appendChild(this.$element);

    this.render = () => {
        this.$element.innerHTML = `
        <input class="SearchInput_input" type="text"
        placeholder="프로그램 언어를 입력하세요" value="${this.state}" />
        `
    }
    this.render();

    //이벤트 구현
    this.$element.addEventListener('keyup', (e)=>{
        const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if(!actionIgnoreKeys.includes(e.key)){
            onChange(e.target.value)
        }
    })
    //submit 이벤트 처리하기
    this.$element.addEventListener('submit', (e)=>{
        e.preventDefault();
    })
}