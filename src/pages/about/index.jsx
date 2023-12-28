import '@/app/globals.css'
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'
import { RecoilRoot } from 'recoil'
export default function About(){
    return(
        <>
        <RecoilRoot>
            <Header></Header>
                <AboutUs></AboutUs>
            <Footer></Footer>
        </RecoilRoot>
        </>
    )
}