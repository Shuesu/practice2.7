import { useContext } from "react"
import { AppContext } from "../../../../context"

export const UserPersonalInfo = () => {
   const { userData, dispatch } = useContext(AppContext)
   const { name, age, email, phone } = userData;

   const onUserUpdate = () => {
      const newUserData = { name, age: 30, email, phone };
      dispatch({ type: 'SET_USER_DATA', payload: newUserData })
   }

   const onUserAgeDecrease = () => {
      dispatch({ type: 'SET_USER_AGE', payload: 15 })
   }


   return (
      <div>
         <h3>Персональные данные:</h3>
         <div>Имя: {name}</div>
         <div>Возраст: {age}</div>
         <button onClick={onUserUpdate}> Обновить пользователя</button>
         <button onClick={onUserAgeDecrease}> Уменшить возраст пользователя</button>
      </div>
   )
}