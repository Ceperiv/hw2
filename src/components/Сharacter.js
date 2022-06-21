// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів
import './Character.css'
function Character(props) {
    let {userId, userName, status, species, gender, image} =props
    // console.log(userId)
    return (
        <div className={'wrap'}>
            <h4>{userId}</h4>
            <h4>{userName}</h4>

        </div>
    )
}

export default Character;