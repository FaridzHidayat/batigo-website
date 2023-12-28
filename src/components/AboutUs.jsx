import Image from "next/image"
export default function AboutUs(){
    return(
        <section className="section-sm mt-4">
        <div className="container">
          <div className="row justify-center">
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
          </div>         
        </div>
      </section>
    )
}