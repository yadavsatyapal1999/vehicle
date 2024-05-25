import { createContext } from "react";
import { useState } from "react";

const Context = createContext()
export default function ContextProvider({ children }) {

    const [firstname, Setfirstname] = useState("");
    const [lastname, Setlastname] = useState("");
    const [wheel, SetWheel] = useState("");
    const [type, Settype] = useState("");
    const [model, Setmodel] = useState("")
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetendDate] = useState("");


    return <Context.Provider value={{
        firstname, Setfirstname, lastname, Setlastname, wheel, SetWheel, type, Settype, model, Setmodel
        , startDate, SetStartDate, endDate, SetendDate
    }}>
        {children}
    </Context.Provider>
}