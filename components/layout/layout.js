import {useState, useEffect} from "react";
import Theme from "./theme";

const Layout = ({children}) => {

    return (
        <div className={'mx-auto max-w-screen-tablet mx-auto flex flex-col justify-start text-sm'}>
            <Theme>
                {children}
            </Theme>
        </div>
    )
}

export default Layout