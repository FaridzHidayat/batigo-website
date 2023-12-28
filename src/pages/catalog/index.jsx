import '@/app/globals.css'
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import Catalog from '@/components/Catalog'
import { RecoilRoot } from 'recoil'
export default function CatalogPage(){
    return(
        <>
        <RecoilRoot>
            <Header></Header>
            <Catalog></Catalog>
            <Footer></Footer>
        </RecoilRoot>
        </>
    )
}