import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header";
import { TopBar } from "../components/TopBar/TopBar";



export const MainLayout = () => {


    return (<>
        <TopBar />
        <Header />
        <div className="main-content">
            <Outlet />
        </div>
     

    </>
    );
};