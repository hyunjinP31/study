import { fetchLanguages } from "./api.js"
import SearchInput from "./components/SearchInput.js"
import SelectedLanguages from "./components/SelectedLanguages.js"
import Suggestion from "./components/Suggestion.js"

export default function App({ $target }){
    this.state = {
        fetchedLanguages : [],
        selectedLanguages: []
    }
    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        suggestion.setState({
            selectedIndex: 0,
            items: this.state.fetchedLanguages
        })
        selectedLanguages.setState(this.state.selectedLanguages);
    }
    const  selectedLanguages = new SelectedLanguages({
        $target,
        initialState: []
    })
    const searchInput = new SearchInput({
        $target,
        initialState: '',
        onChange: async (keyword) => {
            //인풋에 입력한 키워드가 없을 때
            if(keyword.length === 0){
                this.setState({
                    fetchedLanguages: [],
                })
            }else {
                const languages = await fetchLanguages(keyword);
                this.setState({
                    fetchedLanguages: languages.langArr
                })
            }
        }
    })
    const suggestion = new Suggestion({
        $target,
        initialState: {
            cursor: 0,
            items: []
        },
        onSelect: (language) => {
            alert(language);
            //이미 선택된 언어의 경우 맨 뒤로 보내버리는 처리
            const nextSelectedLanguage = [...this.state.selectedLanguages]
            //선택된 언어 배열에 클릭한 값이 있으면 그 값의 index값을 반환, 없으면 -1 반환
            const index = nextSelectedLanguage.findIndex((selectedLanguages) => selectedLanguages === language)
            if(index > -1 ){
                //splice(index, num)
                nextSelectedLanguage.splice(index, 1)
            }
            nextSelectedLanguage.push(language)
            this.setState({
                ...this.state,
                selectedLanguages: nextSelectedLanguage
            })
        }
    })
}