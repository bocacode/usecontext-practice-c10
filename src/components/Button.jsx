// 1) Import useContext Hook
import { useContext } from "react";

// 2) Import context object which is UserStatus
import { UserStatus } from "../App.js";

export default function Button () {
    // 3) Utilized context object
    const[signedIn, setSignedIn] = useContext(UserStatus);

    return (
        <>
            <button onClick={ () => setSignedIn(!signedIn) }>
                {signedIn ? "Sign Out" : "Sign In"}
            </button>
        </>
    )
}