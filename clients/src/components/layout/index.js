import React from "react";
import { useRoutes } from "../../routes";
import { Header } from "../Header";


export const MainLayout = () => {
    const routers = useRoutes();

    return (
        <div className='layout'>
            <Header />
            { routers }
        </div>
    )
}
