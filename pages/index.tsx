import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SiDiscord, SiTwitter, SiGithub, SiMedium, SiYoutube } from 'react-icons/si';

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
          absolute left-0 top-0 w-full h-full
          flex flex-col items-center justify-center
        `}
      >
        <span
          className={`
            px-5
            text-4xl text-[#73FFE3] font-bold uppercase text-center tracking-[.2em]
          `}
        >
          zeni finance
        </span>
        <span
          className={`
            w-full max-w-xl px-5 my-5
            text-white text-center
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae, ullamcorper ultrices vitae. Maecenas aenean ullamcorper amet sed quis. Magna bibendum eu hendrerit sed.
        </span>
        <div
          className={`
            w-full max-w-xl px-5
            flex flex-col
            sm:flex-row sm:items-center sm:justify-center
          `}
        >
          <Button content="enter app" />
          <Button content="bridge" />
          <Button content="docs" />
        </div>
      </div>
      <div
        className={`
          absolute left-0 bottom-5 w-full
          flex flex-row items-center justify-center
        `}
      >
        <SocialIcon Icon={SiDiscord} />
        <SocialIcon Icon={SiTwitter} />
        <SocialIcon Icon={SiGithub} />
        <SocialIcon Icon={SiMedium} />
        <SocialIcon Icon={SiYoutube} />
      </div>
    </div>
  )
}

export default Home
