import Nav from '../components/nav'
const MainLayout = props => {
    return (
        <>
            <Nav />
            {props.children}
        </>
    )
}

export default MainLayout