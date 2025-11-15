import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header";
import { TopBar } from "../components/TopBar/TopBar";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";


export const MainLayout = () => {


    return (<>
        <TopBar />
        <Header />
        <div className="main-content">
            <Outlet />
        </div>
        {/* 📦 Contenedor global de notificaciones */}
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            theme="light"
            transition={Zoom}
        />

    </>
    );
};