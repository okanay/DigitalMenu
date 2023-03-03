import Theme from "./theme";

const Layout = ({children}) => {

    return (
        <div className={'w-full mx-auto text-sm'}>
            <Theme>
                {children}
            </Theme>
        </div>
    )
}

export default Layout
