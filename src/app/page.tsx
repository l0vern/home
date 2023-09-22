'use client';

import FadeIn from 'react-fade-in';
import { useLastFM } from 'use-last-fm';
import { Analytics } from '@vercel/analytics/react';

import { Speaker } from '../../public/speaker';
import { TbBrandGithub, TbMail, TbBrandX } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';

const key = 'b1875bc0c40c941df88c4e61297bcf31';

export default function Home() {
  const lastFm = useLastFM('l0vern', key);
  return (
    <FadeIn>
      <div className="flex flex-col space-y-4 md:space-y-6 items-center justify-center min-h-screen py-2 px-4">
        <h1 className="text-xl font-bold text-center">👋 hey, i’m james</h1>

        <div className="text-center space-y-1">
          <h2 className="text-lg font-bold text-white/60">
            undergrad & software developer from the uk.
          </h2>

          <h2 className="md:text-base font-bold text-white/60">
            {/* currently interning at &lt;<i>company</i>&gt; */}
            currently scouting for internships.
          </h2>
        </div>

        <FadeIn>
          <div className="flex items-center space-x-6 text-indigo-300">
            <a href="https://github.com/l0vern">
              <TbBrandGithub
                size={28}
                className="hover:text-indigo-500 transition-all duration-200"
              />
            </a>
            <a href="https://twitter.com/_jameslovern">
              <TbBrandX
                size={28}
                className="hover:text-indigo-500 transition-all duration-200"
              />
            </a>
            <a href="https://linkedin.com/in/JLovern">
              <FiLinkedin
                size={28}
                className=" hover:text-indigo-500 transition-all duration-200"
              />
            </a>
            <a href="mailto:hey@lovern.io">
              <TbMail
                size={28}
                className="hover:text-indigo-500 transition-all duration-200"
              />
            </a>
          </div>
        </FadeIn>
        <footer className="fixed bottom-6 text-left text-sm space-y-1 px-4">
          <div className="flex flex-row items-center justify-center">
            <div className="flex space-x-2 md:space-x-0.5 items-center">
              <div className="w-6">
                <Speaker className="text-spotify/100 h-5" />
              </div>
              {lastFm.status === 'playing' ? (
                <p className="text-white/50 text-left">
                  currently listening to{' '}
                  <span className="text-white/75">{lastFm.song.name}</span> by{' '}
                  <span className="text-white/75">{lastFm.song.artist}</span>.
                </p>
              ) : (
                <p className="text-white/50 text-left">
                  not currently listening to anything.
                </p>
              )}
            </div>
          </div>

          <h3 className="text-white/30 text-left px-8 md:px-0 md:text-center">
            copyright © {new Date().getFullYear()} lovern.io
          </h3>
          <Analytics />
        </footer>
      </div>
    </FadeIn>
  );
}
