import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Button from '../components/Button'
import SocialIcon from '../components/SocialIcon'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zeni Finance</title>
        <meta name="description" content="Zeni Finance Landing Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src={require('../assets/images/background.png')}
        layout="fill"
        alt=""
      />
      
      <div
        className={`
          absolute left-1/2 bottom-14 translate-x-[-50%]
        `}
      >
        <Image
          src={require("../assets/images/logo.png")}
          width={200}
          height={200}
          alt="Z"
        />
      </div>
      
      <div
        className={`
          absolute left-0 top-0 w-full h-full
          flex flex-col items-center justify-center
        `}
      >
        <span
          className={`
            px-5 mt-44
            uppercase text-[#73FFE3] text-center text-[100px] leading-[100px] tracking-[5px]
          `}
          style={{fontFamily: 'NEW ACADEMY'}}
        >
          zeni finance
        </span>
        <span
          className={`
            w-full max-w-[1100px] px-5 my-5
            text-white text-center text-[45px] leading-[45px]
          `}
          style={{fontFamily: 'Tenali Ramakrishna'}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae, ullamcorper ultrices vitae. Maecenas aenean ullamcorper amet sed quis. Magna bibendum eu hendrerit sed.
        </span>
        <div
          className={`
            w-full px-5 mt-12
            flex flex-col
            sm:flex-row sm:items-center sm:justify-center
          `}
        >
          <Button name="Enter app" link={process.env.APP_LINK || ""} />
          <Button name="Bridge" link={process.env.BRIDGE_LINK || ""} />
          <Button name="Docs" link={process.env.DOCS_LINK || ""} />
        </div>
      </div>
      
      <div
        className={`
          absolute left-0 bottom-0 w-full
          flex flex-row items-center justify-center
        `}
      >
        <SocialIcon name="discord" link={process.env.DISCORD_LINK || ""} />
        <SocialIcon name="twitter" link={process.env.TWITTER_LINK || ""} />
        <SocialIcon name="github" link={process.env.GITHUB_LINK || ""} />
        <SocialIcon name="medium" link={process.env.MEDIUM_LINK || ""} />
        <SocialIcon name="gitbook" link={process.env.GITBOOK_LINK || ""} />
      </div>
    </div>
  )
}

export default Home
