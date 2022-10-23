import data from './api/data.json';
import style from './index.module.scss';
import {useAppContext} from "../context/states";
import Head from 'next/head'
import Image from 'next/image'
import MainMenu from "../components/MainMenu";
import ListWrapper from "../components/ListWrapper";
import Popup from "../components/Popup";

export default function Home({content}) {
  const {activeMenu, setActiveMenu} = useAppContext()
  const {activePopup, setActivePopup} = useAppContext();

  return (
    <>
      <Head>
        <title>Dudex-Trailer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainMenu menuList={content.categories}/>

        <div className={`${style['logo-container']}`}>

          <div className={`${style['logo']}`}>
            <Image
              src={`/dudex-logo-small.jpg`}
              alt={'dudextrailer-logo'}
              width={800}
              height={400}
              quality={75}
              unoptimized={false}
            />
          </div>
          <div className={`${style['slogan']}`}>
            <h1>MINDEN AMI UTÁNFUTÓ</h1>
            <h2>Egyedi utánfutók gyártása</h2>
          </div>
          <div className={`${style['info-text']}`}>
            Aki minden kérdésére válaszol: IFJ. DUDÁS LÁSZLÓ,
            ahol kérdezhet: <a href="tel:+36309085873">{content.phone}</a> telefonon vagy
            <a href="mailro:dudextrailer.futo@gmail.com">{content.email}</a> email címen vagy
            személyesen Nyíregyházán, a <a
            href="https://www.google.hu/maps/place/Ny%C3%ADregyh%C3%A1za,+Csal%C3%A1d+u.+84,+4400/@47.9578322,21.7331283,17z/data=!3m1!4b1!4m5!3m4!1s0x47389fb029edfaa5:0xa8e2b78b6227f5dc!8m2!3d47.9578286!4d21.7353223"
            target="_blank" rel={"noreferrer"}>Család út 84.</a> szám alatt!
          </div>
        </div>

        {activeMenu !== null && <ListWrapper content={data.categories[activeMenu].list}/>}

        {activePopup !== null &&  <Popup content={activePopup}/>}

      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {content: data},
    revalidate: 10
  }
}
