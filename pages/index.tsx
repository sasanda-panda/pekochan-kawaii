import { Fragment, useEffect, useState, createRef } from 'react'
import Head from 'next/head'
import Image from 'next/image' 
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.scss'

import pekoraMainImage from '../public/text_main-pekora.png'
import pekoraProfileImage from '../public/image_profile-pekora.webp'
import yagooMainImage from '../public/text_main-yagoo.png'
import yagooProfileImage from '../public/image_profile-yagoo.png'
import profileIconYoutube from '../public/icon_profile-youtube.png'
import profileIconTwitter from '../public/icon_profile-twitter.png'
import secretImage from '../public/image_secret.png'
import headOgp from '../public/ogp.png'
import headFavicon from '../public/favicon.ico'
import headAppleTouchIcon from '../public/apple-touch-icon.png'

const data = {
  pekora: {
    title: 'pekochan-kawaii.com',
    main: {
      video: '/video_main-pekora.mov',
      text: pekoraMainImage
    },
    profile: {
      name: {
        primary: '兎田ぺこら',
        secondary: 'Usada Pekora',
      },
      description: {
        primary: ['寂しがり屋なうさ耳の女の子。', 'にんじんをこよなく愛し、', 'いつでも食べられるように持ち歩いている。'],
        secondary: [
          {
            title: 'デビュー日',
            text: '2019年7月17日'
          },
          {
            title: '誕生日',
            text: '1月12日'
          },
          {
            title: '身長',
            text: '153cm(うさ耳無し)'
          },
          {
            title: 'ファンネーム',
            text: '野うさぎ同盟'
          },
          {
            title: 'イラストレーター',
            text: '憂姫はぐれ'
          }
        ],
        sns: {
          youtube: 'https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ/featured',
          twitter: 'https://twitter.com/usadapekora'
        }
      },
      image: pekoraProfileImage,
    },
    video: [
      {
        id: '7k-r7P9TXdQ',
        time: '276'
      },
      {
        id: 'm8GNgLZHsL8',
        time: '5810'
      },
    ]
  },
  yagoo: {
    title: 'YAGOO-kawaii.com',
    main: {
      video: '/video_main-yagoo.mov',
      text: yagooMainImage
    },
    profile: {
      name: {
        primary: '谷郷元昭',
        secondary: 'YAGOO',
      },
      description: {
        primary: ['カバー株式会社のCEO。', 'ホロライブのベストガール。'],
        secondary: [
          {
            title: 'デビュー日',
            text: '2016年6月13日'
          },
          {
            title: '誕生日',
            text: '12月10日'
          },
          {
            title: '出身',
            text: '大阪府高槻市'
          }
        ],
        sns: {
          youtube: 'https://www.youtube.com/user/tanigox/featured',
          twitter: 'https://twitter.com/tanigox'
        }
      },
      image: yagooProfileImage,
    },
    video: [
      {
        id: 'CaLF0Imr8Yo',
        time: '456'
      },
      {
        id: 'k6mp_dnDaPE',
        time: '10'
      },
    ]
  }
}

const wait = (ms: number) => new Promise((resolve) => {
  setTimeout(() => { resolve }, ms)
})

const Home = () => {

  const [character, setCharacter] = useState<'pekora'|'yagoo'>('pekora')
  const [isSecret, setIsSecret] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const mainRef = createRef<HTMLDivElement>()

  const resetMainHeight = () => {
    const div = mainRef.current;
    if (div) div.style.height = `${window.innerHeight}px`;
  }

  // const videoPlay = () => {
  //   const video = videoRef.current;
  //   if (video) video.play();
  // }

  const onScrollWindow = () => {
    if (window.pageYOffset + window.innerHeight !== document.body.clientHeight) return
    setIsLoading(true)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => {
        character === 'pekora' ? setCharacter('yagoo') : setCharacter('pekora')
        character === 'pekora' ? setIsSecret(false) : setIsSecret(true)
        resetMainHeight();
        setIsLoading(false)
      }, 800)
    }, 800)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScrollWindow)
  }, [character, isSecret])

  useEffect(() => {
    setTimeout(() => {
      resetMainHeight();
      setIsLoading(false);
    }, 3200);
  }, []);

  return (
    <div>
      <Head>
        <title>pekochan-kawaii.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="カバー,カバー株式会社,COVER,ホロライブ,ホロライブプロダクション,hololive,hololive production,ホロスターズ,holostars,HOLOSTARS,ぺこら,pekora,兎田ぺこら,Pekora Usada,ぺこちゃん,pekochan" />
        <meta name="description" content="pekochan kawaii!" />
        <meta property="og:url" content="https://www.pekochan-kawaii.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="pekochan-kawaii.com" />
        <meta property="og:site_name" content="pekochan-kawaii.com" />
        <meta property="og:description" content="pekochan kawaii!" />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogp.png" />
        <link rel="canonical" href="https://www.pekochan-kawaii.com/" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png"></link>
      </Head>
      <div className={`${styles.loading} ${isLoading ? styles.loadingTrue : styles.loadingFalse}`}></div>
      <main ref={mainRef} className={styles.main}>
        <h1 className={styles.main_text}><Image src={data[character].main.text} alt="mainImage" /></h1>
        <div className={styles.main_overlay}></div>
        <video className={styles.main_video} src={data[character].main.video} muted autoPlay loop playsInline></video>
      </main>
      <div className={styles.profile}>
        <div className={styles.profile_name}>
          <div className={styles.profileSub}>
            <h2 className={styles.profile_name_primary}>{data[character].profile.name.primary}</h2>
            <h3 className={styles.profile_name_secondary}>{data[character].profile.name.secondary}</h3>
          </div>
        </div>
        <motion.figure className={styles.profile_image} initial={{ scale: 0.0, rotate: -22.5 }} animate={{ scale: 1.0, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 20, bounce: 0.5, duration: 0.4, delay: 0.4 }} >
          <Image src={data[character].profile.image} alt="profileImage" />
        </motion.figure>
        <div className={styles.profile_description}>
          <div className={styles.profileSub}>
            <div className={styles.profile_description_primary}>
              <p>
                {data[character].profile.description.primary.map((item, index) => (
                  <Fragment key={index}>{item}<br /></Fragment>
                ))}
              </p>
            </div>
            {data[character].profile.description.secondary.map((item, index) => (
              <dl key={index} className={styles.profile_description_secondary}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </dl>
            ))}
            <div className={styles.profile_description_sns}>
              <a href={data[character].profile.description.sns.youtube} target="_blank" rel="noreferrer"><Image src={profileIconYoutube} alt="profileIconYoutube" /></a>
              <a href={data[character].profile.description.sns.twitter} target="_blank" rel="noreferrer"><Image src={profileIconTwitter} alt="profileIconTwitter" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.video}>
        {data[character].video.map((item, index) => (
          <div key={index} className={styles.videoSub}>
            <iframe width="480" height="270" src={`https://www.youtube.com/embed/${item.id}?start=${item.time}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <div className={styles.dummy}>
        <ul className={styles.dummy_list}>
          <motion.li className={styles.dummy_list_item} animate={{ scale: 2.0 }} transition={{ duration: 0.2, delay: 0.0, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }} />
          <motion.li className={styles.dummy_list_item} animate={{ scale: 2.0 }} transition={{ duration: 0.2, delay: 0.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }} />
          <motion.li className={styles.dummy_list_item} animate={{ scale: 2.0 }} transition={{ duration: 0.2, delay: 0.4, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }} />
        </ul>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyright_text}>&copy; 2016 COVER Corp.</p>
      </div>
      <div className={`${styles.secret} ${isSecret ? styles.secretTrue : styles.secretFalse}`}>
        <figure className={styles.secret_image}>
          <Image src={secretImage} alt="secretImage" />
        </figure>
      </div>
    </div>
  )
}

export default Home
