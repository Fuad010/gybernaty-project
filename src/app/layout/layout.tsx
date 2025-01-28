import { Outlet } from 'react-router-dom'
import { Flex } from 'shared/emotion-styles/Flex/ui/Flex'
import { Breadcrumb } from 'shared/ui/breadcrumb'
import { LayoutPathName } from 'shared/ui/layout-path-name'
import { Filter } from 'widgets/filter'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar/ui/sidebar'

export const Layout = () =>{
    return(
        <div style={{height:"100vh"}}>
            <Header />
            <Flex height="calc(100% - 80px)">
                <Sidebar />
                <main style={{padding:"25px 40px 67px 40px", width:"100%"}}>
                    <Breadcrumb />
                    <LayoutPathName />
                    <Filter />
                    <Outlet/>
                </main>
            </Flex>
        </div>
    )
}