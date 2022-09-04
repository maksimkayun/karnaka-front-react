import {Link, NavLink} from 'react-router-dom';

const Navigation = () => {
    const setNavStyle = ({isActive}) => {
        return isActive ? 'active' : undefined;
    }

    return (
        <>
            <NavLink className={setNavStyle} to="/">Домой</NavLink>
            <NavLink className={setNavStyle} to="/conspirators">Заговорщики</NavLink>
            <NavLink className={setNavStyle} to="/locations">Локации</NavLink>
            <NavLink className={setNavStyle} to="/plans">Части плана</NavLink>
        </>
    );
}

export default Navigation;