import Header from "./Header"
import Skull from "./Skull";
import react from "react";



export default function Page({ children }) {
    return(
        <>
        <Header />
        <main>{children}</main>
        <Skull />
        </>
    )
}