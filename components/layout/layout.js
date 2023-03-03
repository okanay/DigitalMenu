import Theme from "./theme";

const Layout = ({children}) => {

    return (
        <div className={'max-w-screen-tablet w-full mx-auto text-sm'}>
            <Theme>
                {children}
            </Theme>
        </div>
    )
}

export default Layout
