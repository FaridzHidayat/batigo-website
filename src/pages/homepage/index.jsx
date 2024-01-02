import '@/app/globals.css'
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import { RecoilRoot } from 'recoil'
export default function HomePage(){
    return(
        <>
        <RecoilRoot>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </RecoilRoot>
        </>
    )
}