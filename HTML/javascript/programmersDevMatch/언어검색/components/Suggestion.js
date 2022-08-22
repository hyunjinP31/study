export default function Suggestion({
    $target,
    initialState,
    onSelect
}){
    this.$element = document.createElement('div');
    this.$element.className = 'Suggestion';
    $target.appendChild(this.$element);

    //현재키가 어디를 순회하는 지 지정하는 selectedIndex를 추가
    this.state = {
        selectedIndex: 0,
        items: initialState.items
    }
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    this.render = () => {
        const { items = [], selectedIndex } = this.state
        if( items.length > 0){
            this.$element.style.display = 'block';
            this.$element.innerHTML = `
                <ul>
                    ${items.map((item, index)=>`
                        <li class="${index === selectedIndex ? 'Suggestion_item--selected': ''}" data-index='${index}'>${item}</li>`
                    ).join('')}
                </ul>
            `
        }else {
            this.$element.style.display = 'none';
            this.$element.innerHTML = '';
        }
    }
    this.render();

    //화살표 위, 아래 입력으로 selectedIndex 변경하기
    window.addEventListener('keyup', (e)=>{
        //검색된 항목의 배열의 길이가 0보다 클 때
        if(this.state.items.length > 0){
            //현재 selectedIndex 값을 selectedIndex에 할당
            const { selectedIndex } = this.state;
            //검색된 배열의 마지막 인덱스를 lastIndex에 할당
            const lastIndex = this.state.items.length -1;
            const navigationKeys = ['ArrowUp', 'ArrowDown'];
            let nextIndex = selectedIndex;
            //클릭한 키 값이 navigationKeys 배열에 있으면
            if(navigationKeys.includes(e.key)){
                if(e.key === 'ArrowUp'){
                    nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1
                }else if( e.key === 'ArrowDown'){
                    nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1
                }
                this.setState({
                    ...this.state,
                    selectedIndex: nextIndex
                })
                //현재 커서의 위치의 검색어를 파라미터로 전달
            }else if(e.key === 'Enter'){
                onSelect(this.state.items[this.state.selectedIndex])
            }
        }
    })

    //마우스 클릭 이벤트
    this.$element.addEventListener('click', (e)=>{
        const $li = e.target.closest('li');
        if($li) {
            const {index} = $li.dataset;
            try {
                onSelect(this.state.items[parseInt(index)])
            }
            catch(e){
                alert('선택할 수 없습니다.')
            }
        }
    })
}