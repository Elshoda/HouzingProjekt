import useId from "../hooks/useId"
import HomePage from "../pages/Home"
import PropertiesPage from "../pages/Properties"

const navbar = [

    {
        id: useId,
        element: <HomePage/> ,
        title: 'Home',
        path: '/home',
        hidden: false,
        prvate: false,
    },
    {
        id: useId,
        element: <PropertiesPage/> ,
        title: 'Properties',
        path: '/properties',
        hidden: false,
        prvate: false,
    }
]
export default navbar