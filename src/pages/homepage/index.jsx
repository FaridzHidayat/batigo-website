import '@/app/globals.css'
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
import { RecoilRoot } from 'recoil'
export default function HomePage(){
    return(
        <>
        <RecoilRoot>
            <Header></Header>
            <Slider></Slider>
            <Footer></Footer>
        </RecoilRoot>
        </>
    )
}