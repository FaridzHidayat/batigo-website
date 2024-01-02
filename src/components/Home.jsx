import Slider from '@/components/Slider'
import Image from 'next/image'
import advantage from '@/config/advantage.json'
export default function Home(){
    return(
        <section className="section">
            <Slider></Slider>
            <div className="mt-8 text-center mb-8">
                <h1 className="font-bold text-2xl">Kenapa Harus Memilih Batigo.Exclusive?</h1>
            </div>
            <div className="container">
                <div className="lg:flex justify-between">
                  {advantage.main.map((advantage,i) =>{
                    return (
                      <div key={i} className="bg-gray-100 px-7 py-10 mr-1 ml-1">                                                  
                          <div className="mt-5 flex justify-center mb-2">                            
                            <Image
                              width={150}
                              height={150}
                              src={advantage.image}
                              alt=""                                                                                       
                            />                                                        
                          </div>
                          <p>{advantage.desc}</p>
                      </div>
                    )
                  })}                                    
                </div>
            </div>
        </section>
    )
}