import social from "@/config/social.json";
import Social from "./Social";
export default function Footer(){
    return(    
        <footer className="bg-teal-800">
            <div className="container">
                <div className="lg:flex py-10 md:justify-around">          
                <div className="mb-8 text-center lg:text-left text-dark dark:text-darkmode-light">
                    <div style={{fontFamily:"arial", fontSize:"18px", fontWeight:"bold"}}>Our Store</div>
                    <Social source={social.store} className="social-store" />
                </div>
                <div className="mb-8 text-center lg:text-left text-dark dark:text-darkmode-light">
                    <div style={{fontFamily:"arial", fontSize:"18px", fontWeight:"bold"}}>Contact Us</div>
                    <Social source={social.contact} className="social-contact" />
                </div>
                <div className="mb-8 text-center lg:text-left text-dark dark:text-darkmode-light">
                    <div style={{fontFamily:"arial", fontSize:"18px", fontWeight:"bold"}}>Our Social Media</div>
                    <Social source={social.main} className="social-main" />
                </div>
                </div>
            </div>
            <div className="border-t border-border py-7 dark:border-darkmode-border">
                <div className="container text-center text-dark dark:text-darkmode-light">
                <p>Copyright Batigo.Exclusive&copy;2023. All reserved </p>
                </div>
            </div>
        </footer>
    )
}