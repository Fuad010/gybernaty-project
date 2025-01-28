import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar/ui/sidebar'

export const Layout = () =>{
    return(
        <div style={{height:"100vh"}}>
            <Header />
            <Sidebar />
            <main style={{padding:'25px 40px 67px 40px'}}>
                <Outlet/>
            </main>
        </div>
    )
}