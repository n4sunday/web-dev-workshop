import Nav from '../components/nav'

const MainLayout = props => {
    return (
        <>
            <Nav UserDisplay={props.UserDisplay} />
            {props.children}
        </>
    )
}

export default MainLayout