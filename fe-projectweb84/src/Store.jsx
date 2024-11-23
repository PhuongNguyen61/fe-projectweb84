import { createContext, useState } from "react"

export const Store = createContext()

const StoreProvider = (props) => {
    const [car, setCar] = useState([])
    return <Store.Provider value={{
        car: car,
        setCar,
    }}
    >
        {props.children}
    </Store.Provider>
}

export default StoreProvider