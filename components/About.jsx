export default function About() {
  return (
    <section
      className='bg-[#2863EF] sm:px-16 px-6 py-10 pb-72 mx-auto relative overflow-auto'
      id='about'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        xmlnsxlink='http://www.w3.org/1999/xlink'
        xmlnssvgjs='http://svgjs.dev/svgjs'
        viewBox='0 0 800 800'
        id='qqquad'
        height={200}
        width={200}
        className='absolute sm:right-0 -top-32 sm:-top-28 w-100  lg:left-auto rig lg:right-60 ml-0 xl:rigth sm:rigth-0 '
      >
        <g shape-rendering='crispEdges' stroke-linejoin='round' fill='#fff'>
          <polygon points='600,0 800,200 800,0'></polygon>
          <polygon points='600,100 600,0 500,100'></polygon>
          <polygon points='500,100 400,100 400,0'></polygon>
          <polygon points='400,200 500,100 400,100'></polygon>
          <polygon points='500,100 600,100 600,200'></polygon>
          <polygon points='600,200 500,200 600,300'></polygon>
          <polygon points='500,200 500,300 400,200'></polygon>
          <polygon points='500,400 500,300 400,300'></polygon>
          <polygon points='600,400 600,300 500,400'></polygon>
          <polygon points='800,200 600,200 600,400'></polygon>
          <polygon points='400,200 400,0 200,200'></polygon>
          <polygon points='200,200 0,0 200,0'></polygon>
          <polygon points='200,400 200,200 0,200'></polygon>
          <polygon points='400,200 300,200 300,300'></polygon>
          <polygon points='300,200 200,200 200,300'></polygon>
          <polygon points='200,300 300,300 300,400'></polygon>
          <polygon points='400,300 300,400 400,400'></polygon>
          <polygon points='400,600 200,400 400,400'></polygon>
          <polygon points='200,400 0,600 0,400'></polygon>
          <polygon points='0,600 200,600 200,800'></polygon>
          <polygon points='200,600 400,800 400,600'></polygon>
          <polygon points='800,500 800,400 700,500'></polygon>
          <polygon points='700,400 700,500 600,500'></polygon>
          <polygon points='700,600 700,500 600,500'></polygon>
          <polygon points='800,500 800,600 700,600'></polygon>
          <polygon points='500,400 500,500 600,400'></polygon>
          <polygon points='500,400 500,500 400,400'></polygon>
          <polygon points='500,500 400,600 400,500'></polygon>
          <polygon points='600,600 500,500 500,600'></polygon>
          <polygon points='500,700 600,700 600,600'></polygon>
          <polygon points='400,700 500,600 500,700'></polygon>
          <polygon points='400,800 500,700 400,700'></polygon>
          <polygon points='500,800 500,700 600,700'></polygon>
          <polygon points='800,800 600,800 800,600'></polygon>
        </g>
        <g
          fill='hsl(220, 62%, 45%)'
          stroke-width='3'
          stroke='hsl(220, 43%, 13%)'
        ></g>
      </svg>

      <div className='mx-auto flex flex-col max-w-7xl py-10 text-white  '>
        <p className=' font-medium  uppercase'>Sobre Mi</p>
        <h2 className=' text-[40px]  font-extrabold'>Resumen.</h2>

        <p className='mt4 text-[20px] pt-5'>
          Mi enfoque se basa en la fusión de la tecnología para crear
          experiencias digitales únicas y atractivas. Creo firmemente que cada
          desafío trae consigo una oportunidad para innovar y superar las
          expectativas de los usuarios.
        </p>

        <p className='mt4 text-[20px] pt-5'>
          Te invito a explorar mi portafolio para descubrir cómo mis soluciones
          multimedia pueden agregar valor a tu proyecto.
        </p>
      </div>
    </section>
  );
}
