import { Link } from "react-router-dom";
import "./Clicker.css";
import { useState, useEffect } from "react";

export default function Clicker(){
    //[naze_promene, nazev setteru] - useState(vychozi hodnota)
    //bunka je use
    const [cookies, setCookies] = useState(0);
    //setter - funkce ktera prednastavuje promennou
    const increaseCookies = () => {
        setCookies(cookies + 1);
    }

    useEffect(() => {
        document.title = "Cookie clicker loaded"
    }, []);//kdyz [] prayne - funkce se spusti kdyz se stranka nacte

    useEffect(() => {
        document.title = cookies;
    }, [cookies]);
    return(
        <>
        <h1>Clicker</h1>
        <button onClick={increaseCookies} className="clicker-button">Click me</button>
        <p>Cookies: {cookies}</p>
        <Link to={"/"}>
        <p>Go home</p>
        </Link>
        </>
    )
}