import { Alert } from "@mui/material"
import { Context } from "../Context/ContextProvide"
import { useContext } from "react"


export default function Error() {
    const { alertValue } = useContext(Context);
    return <Alert severity="error">
        {alertValue}
    </Alert>
}