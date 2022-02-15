import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next';

import Slider from '../components/slider'
import About from '../components/about';
import Projects from '../components/projects';
import Services from '../components/services';
import Works from '../components/work';
import Contact from '../components/contact';

import { fetchData } from '../utils/fetching';
import { Carousel, ServerData } from '../types/common'

const HomePage: NextPage<{
  slider:Carousel[],
  products:ServerData[],
  work:ServerData[],
  service:ServerData[]
}> = ({slider,products,work,service}) => {
  return (
      <>
        <Head>
          <title>СК СТРОЙПРОЕКТ</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Slider data={slider} />
        <About />
        <Projects data={products} />
        <Services data={service} />
        <Works data={work} />
        <Contact path={'tech'} />
      </>
  )
}

export const  getServerSideProps: GetServerSideProps = async () => {
  const slider = await fetchData<Carousel[]>('tech','carousel/all/')
  const products = await fetchData<ServerData[]>('tech','products/all/')
  const work = await fetchData<ServerData[]>('tech','work/all/')
  const service = await fetchData<ServerData[]>('tech','service/all/')


  return {
      props: {
          slider,
          products,
          work,
          service
      }
  }
}


export default HomePage
