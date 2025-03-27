import React from 'react'
import BlurIn from './magicui/blur-in'

function Work() {
  return (
    <BlurIn
      duration={1}
      word={
        <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row flex-1 justify-center sm:justify-between mx-auto w-[90vw] sm:max-w-[53vw]">
          <p className="font-medium">Work Experience</p>
          <div className="w-[90vw] sm:w-[70%] mt-4 sm:mt-0">
            <div className="border border-[#242424] rounded-lg p-4 bg-[#151515]">
              <p className="text-[#9C9C9C] text-sm opacity-90">
                Software Developer (Full Stack)
              </p>
              <div className="flex flex-col md:flex-row justify-between md:items-center font-medium my-1">
                <p>Mercurie</p>
                <p className="text-xs">Oct 2023 - Oct 2024</p>
              </div>
              <div className="my-2">
                <p className="text-sm">
                  1. <span className="underline">Social Proof App:</span>
                </p>
                <p className="text-[#9C9C9C] text-xs sm:text-sm opacity-90 mt-2">
                  Developed a Shopify application to{" "}
                  <span className="text-white">collect product feedback</span>, enabling
                  eCommerce stores to gather and display social proof effectively.
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm">
                  2. <span className="underline">Airtable Integration:</span>
                </p>
                <p className="text-[#9C9C9C] text-xs sm:text-sm opacity-90 mt-2">
                  Integrated Airtable to{" "}
                  <span className="text-white">help marketing teams utilize install data</span>,
                  enabling better insights and targeted marketing campaigns.
                </p>
              </div>
              <div className="my-2">
                <p className="text-sm">
                  3. <span className="underline">Mercurie App Dashboard:</span>
                </p>
                <p className="text-[#9C9C9C] text-xs sm:text-sm opacity-90 mt-2">
                  Built a dashboard for the Mercurie app using{" "}
                  <span className="text-white">React, Next.js, and TailwindCSS</span>, improving
                  user experience and data visualization.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default Work
