import { Navbar } from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import musicizer from "./resources/musicizer.jpeg";
import computervision from "./resources/computervision.jpg";
import nif2020 from './resources/t17img.png';
import blackhole from './resources/blackhole.png';
import docs from './resources/docs.jpeg';

export default function Projects() {
  return (

    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex px-8 mr-4 p-4 text-white justify-center items-center">
        <h1 className="mt-10 text-4xl font-bold">
          Projects
        </h1>
      </div>
      <main className="py-6 md:px-20 sm:px-14 px-6">
        <div className="p-6 sm:flex items-center shadow-md bg-gray-800">
          <div className="md:px-10 sm:px-5">
            <h1 className="text-gray-800 font-bold text-2xl my-2 hover:text-blue-700"><Link href="https://github.com/austinpower1258/Musicizer">Musicizer</Link></h1>
            <p className="text-gray-500 mb-2 md:mb-6">Musicizer is a lifestyle-driven, complimentary music-streaming Flutter application that uses real-time tempo modification of music synced with physical intensity to incentivize running at a consistent pace.</p>
            <div className="flex justify-between mb-2">
              <span className="font-thin text-sm">Jan 2021</span>
              <span className="sm:block hidden mb-2 text-gray-800 font-bold hover:underline"><Link href="https://drive.google.com/file/d/1F6ghUvvP9Tlr9KaD2RtLNrSfPzKvT-wv/view">See demo</Link></span>
            </div>
          </div>
          <div className="p-6">
            <Image className="bg-cover" src={musicizer} height={300} width={300} alt="" />
          </div>
        </div>
        <div className="mt-6 md:flex space-x-6">
          <div className="shadow-md bg-gray-800">
            <Image src={computervision} width={450} height={325} alt="" />
            <div className="px-6">
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2"><Link href="https://www.bestwestern.com/en_US.html">Automated Social Distancing Tracker in Hotels</Link></h1>
              <p className="text-gray-500 mb-2">A computer vision software solution for the hospitality industry that uses computer vision to enforce social distancing during the COVID-19 pandemic. Tracked number of social distancing violations using Python&apos;s OpenCV package.</p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">Sep 2020</span>
                <span className="mb-2 text-gray-800 font-bold py-4 hover:underline"><Link href="https://github.com/austinpower1258/sdv-cv">See more</Link></span>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-gray-800">
            <Image className="" src={nif2020} alt="" />
            <div className="px-6">
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-2"><Link href="https://yspa.yale.edu/">Supernovae Research</Link></h1>
              <p className="text-gray-500 mb-2">Modeling the light curves of extragalactic supernovae 2020nif through photometric filters. Computed results of Type II-L classification and co-authored final paper to present in a conference hosted by the Yale Department of Astronomy. </p>
              <div className="flex justify-between mt-4">
                <span className="font-thin text-sm">Aug 2020</span>
                <span className="mb-2 text-gray-800 py-4 font-bold pp-2 hover:underline"><Link href="https://drive.google.com/file/d/1wbFlBgX4IxZLxqvwu9eekNs7PPOgDsj5/view">See more</Link></span>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-gray-800">
            <Image src={blackhole} alt="" />
            <div className="px-6">
              <h1 className="mt-3 text-gray-800 text-2xl font-bold my-3"><Link href="https://yale.edu">The First Black Hole Image by the Event Horizon Telescope &nbsp;</Link></h1>
              <p className="text-gray-500 mb-2 py-1">The first image of a supermassive black hole at the center of the Messier 87 galaxy was successfully imaged by the Event Horizon Telescope in 2017, released in April 2019. My paper aims to synthesize various areas of black hole research and future implications of black hole imaging on our fundamental understanding of gravity & the universe.</p>
              <div className="flex justify-between mt-6">
                <span className="font-thin text-sm">Dec 2021</span>
                <span className="mb-2 text-gray-800 font-bold py-4 pp-2 hover:underline"><Link href="https://drive.google.com/file/d/15f3L9kEIZQkX9NwVjkFTWEP6Oth1RRQ2/view?usp=sharing">See more</Link></span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center bg-gray-800 shadow-md mt-10">
          <div>
            <Image className="bg-cover" src={docs} alt="" />
          </div>
          <div className="p-6 md:px-10 sh sm:px-5">
            <h1 className=" text-gray-800 text-2xl font-bold my-3"><Link href="https://github.com/austinpower1258/strauss">Real Time Collaborative Editor with Presence</Link></h1>
            <p className="text-gray-500 mb-2 md:mb-6">Used Svelte and TailwindCSS to build a collaborative editor with presence, including file system tree stored in database. Developed websocket server to facilitate open collaboration from different IP&apos;s and devices on a host server.
            </p>
            <div className="flex justify-between mb-2">
              <span className="font-thin text-sm">Jun 2021</span>
              <span className="mb-2 py-4 text-gray-800 font-bold hover:underline"><Link href="https://twitter.com/austinywang/status/1424288644181893122?s=20">See demo</Link></span>
            </div>
          </div>
        </div>
      </main>

    </div>

  )

}
