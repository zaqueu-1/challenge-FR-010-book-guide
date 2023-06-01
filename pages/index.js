import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import AOS from 'aos'
import "aos/dist/aos.css"


export default function Home() {

  useEffect(() => {
    AOS.init()
    AOS.refresh();
  }, [])

  const genres = useRef(null)

  const { t, i18n: {changeLanguage, language}} = useTranslation()
  const [currentLang, setCurrentLang] = useState(language)

  const handleChange = () => {
    const newLang = currentLang==='pt' ? 'en' : currentLang==='en' ? 'es' : 'pt'
    changeLanguage(newLang)
    setCurrentLang(newLang)
  }

  const goTo = (ref) => {
    ref.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('content')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={() => handleChange()}><FaGlobeAmericas style={{fontSize:'2rem'}}/>{t('language')}</button>

        <div className="intro">
          <div data-aos={"fade-right"} data-aos-duration={"1200"} className="books-container">
            <h1>{t('section1Title')}</h1>
            <p>{t('section1')}</p>
          </div>

          <div data-aos={"fade-left"} data-aos-duration={"1500"} className="books-container2">
            <p style={{textAlign:'start'}}>{t('section2')}</p>
            <h1 style={{textAlign:'end'}}>{t('section2Title')}</h1>
          </div>
        </div>

        <div className="arrow" style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>
          <MdKeyboardDoubleArrowDown onClick={() => goTo(genres)} className='arrow-i' style={{fontSize:'4rem',color:'#333'}}/>
        </div>

        <div className="genres" ref={genres}>
          <div data-aos={"fade-right"} data-aos-duration={"1200"} className="genre">
            <h3>{t(`section3Title`)}</h3>
            <p>{t(`section3`)}</p>
          </div>

          <div data-aos={"fade-left"} data-aos-duration={"1500"} className="genre">
            <h3>{t(`section4Title`)}</h3>
            <p>{t(`section4`)}</p>
          </div>

          <div data-aos={"fade-right"} data-aos-duration={"1800"} className="genre">
            <h3>{t(`section5Title`)}</h3>
            <p>{t(`section5`)}</p>
          </div>
        </div>


      </main>
    </div>
  )
}
