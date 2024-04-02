import { Link } from "react-router-dom";
export default function Home(){
    
    return (
        <>
        <h1>Home</h1>
        <Link to={"/about"}>
        <p>About us</p>
        </Link>
        <Link to={"/clicker"}>
        <p>Clicker</p>
        </Link>
        </>
    )
}
