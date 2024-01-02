import Image from "next/image"
export default function AboutUs(){
    return(
        <section className="section-sm mt-4">
        <div className="container">
          {/* <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
                <Image
                  className="mx-auto mb-6 rounded-lg"
                  src="/images/logo_batigo.png"
                  width={200}
                  height={200}                  
                />
              <h2 className="text-justify mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at.
              </h2>
            </div>
          </div>   */}
          <div className="ml-6 mr-6 md:justify-center mb-6">
            <div className="md:grid md:grid-cols-2">            
              <div className="bg-gray-300">
                <Image
                  className="mx-auto py-8 rounded-lg"
                  src="/images/logo_batigo.png"
                  width={200}
                  height={200}                  
                />
              </div>        
              <div className="md:ml-4">
                <h2 className="font-bold">Biography</h2>
                <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at.
                </p>
              </div>
            </div>
          </div>  

          <div className="ml-6 mr-6 md:justify-center mb-2">
            <div className="md:grid md:grid-cols-2">                            
              <div className="md:mr-4">
                <h2 className="font-bold">VISI & MISI</h2>
                <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at.
                </p>
              </div>
              <div className="bg-gray-300">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                  className="block w-full"
                  alt="..." />   
              </div>      
            </div>
          </div>       
        </div>
      </section>
    )
}