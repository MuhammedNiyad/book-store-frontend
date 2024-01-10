import victor from '../assets/victor.png';

export default function Pages() {
  return (
    <section className='px-7 md:px-20 lg:px-52 mx-auto'>
        <div>
        <div className='flex flex-col items-center py-14 justify-center w-full md:mt-5'>
              <div className='flex-col items-start py-3'>
                <h2 className='font-[prata,serif] text-3xl sm:text-4xl md:text-5xl '>Our pages</h2>
              </div>
              <img src={victor} alt='victor img' className='w-12' />
          </div>
          <div className='bg-[#edebe4] px-10 md:px-20 xl:px-28 py-7 md:py-14 xl:py-20 rounded-[30px] md:rounded-[70px]  leading-7 text-lg duration-300 scale-95 hover:scale-100 mb-20 md:mb-40 2xl:mb-60 '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur, reiciendis, ratione ducimus, vitae quidem magnam cumque autem itaque ex atque? Neque non quam vero, quidem laboriosam consequuntur repellendus deleniti.
            Error incidunt, beatae vero molestiae dicta totam consequatur dolore repellendus assumenda dolor quo illum quis dignissimos obcaecati voluptas eius saepe deleniti tenetur officiis. Repudiandae labore corrupti asperiores vel, unde assumenda.
            Cupiditate accusamus assumenda vel architecto libero, nobis suscipit ad delectus eveniet deleniti ut provident facere et neque! Ea accusamus sapiente obcaecati, magnam voluptatem optio dolor eum minus! Aperiam, incidunt eaque?
            Laudantium distinctio omnis nulla ullam vero hic officiis laboriosam dolorem eum beatae numquam, aspernatur iste aperiam voluptates nihil minus quae earum ab temporibus perspiciatis totam nisi in fuga. Necessitatibus, aut!
            Maiores illo repudiandae fugit vitae neque quod libero odio? Facere repudiandae rem ad. Est quibusdam fugit beatae sit vel modi ratione quia repellat dolor quasi? Corrupti earum est molestias tempore.
            Laborum repudiandae vero corporis placeat, dolorum mollitia cumque harum molestiae aspernatur tenetur! Labore vero praesentium soluta rem hic sequi recusandae nesciunt ab, ipsum, eos aspernatur, perspiciatis nobis corrupti modi eius!
            </p>
          </div>
        </div>
    </section>
  )
}
