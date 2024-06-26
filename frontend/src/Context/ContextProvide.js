import { createContext } from "react";
import { useState } from "react";

const Context = createContext()
function ContextProvider({ children }) {

    const [firstname, Setfirstname] = useState("");
    const [lastname, Setlastname] = useState("");
    const [wheel, SetWheel] = useState("");
    const [type, Settype] = useState("");
    const [model, Setmodel] = useState("")
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetendDate] = useState("");
    const [alert, Setalert] = useState(false);
    const [alertValue, SetalertValue] = useState();
    const [vehicle, SetVehicle] = useState();
    const[selected,SetSelected] = useState();
    const[data,SetData] = useState({
        firstname:"",
        lastname:"",
        wheel:"",
        model:"",
        from:"",
        to:""
    })
    return <Context.Provider value={{
        firstname, Setfirstname, lastname, Setlastname, wheel, SetWheel, type, Settype, model, Setmodel
        , startDate, SetStartDate, endDate, SetendDate, alert, Setalert, alertValue, SetalertValue, vehicle,
         SetVehicle,selected,SetSelected,data,SetData
    }}>
        {children}
    </Context.Provider>
}
export { Context, ContextProvider };