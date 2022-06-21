import './App.css';
import Character from "./components/Сharacter";


async function getInfo(link) {
    try {
        let response = await fetch(link);
        let responseResult = await response.json();
        if (response.ok) {
            for (const item of [responseResult]) {
                // console.log(responseResult)
                console.log(item.name)
                return (
                    <Character
                        userId={item.id}
                        userName={item.name}
                    />
                )
            }
        }
    } catch (err) {
        console.warn(err)
    }
}
getInfo('https://rickandmortyapi.com/api/character/1')

function App() {
    return(
        <Character
            userId={item.id}
            userName={item.name}
        />
    )
}


export default App;