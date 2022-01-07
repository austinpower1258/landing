import { Navbar } from "./components/Navbar"
import Image from "next/Image";
import musicizer from "./resources/musicizer.png";
import bestwestern from "./resources/bestwestern.png";
import yhack from "./resources/yhack.png";
import yes from "./resources/yes.png";
import yudi from "./resources/yudi.png";
import yalelogo from "./resources/yalelogo.png";
import yuqc from "./resources/yuqc.png";
import ycs from "./resources/ycs.png";

export default function Experience() {
    return (

        <div className="min-h-screen bg-blue-900">
            <Navbar />
            <div className="flex px-8 mr-4 p-4 text-white justify-center items-center">
                <h1 className="text-4xl font-semibold font-sans tracking-wide">
                    Work Experience
                </h1>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-purple-100 hover:shadow-purple-500/50 px-6 py-2">
                    <Image src={musicizer} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Founder and Inventor (Jun 2019 - Sep 2021) &nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Musicizer LLC
                        </p>
                        <p className="text-gray-600 text-sm mb-2">Irvine, CA</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-green-100 hover:shadow-green-500/50 px-6 py-2">
                    <Image src={bestwestern} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Software Engineering Intern (May - Aug 2020)</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Best Western Hotels
                        </p>
                        <p className="text-gray-600 text-sm mb-2">Los Angeles, CA</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-blue-100 hover:shadow-blue-500/50 px-6 py-2">
                    <Image src={yalelogo} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Astrophysics Researcher (Jun - Aug 2020)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Yale Department of Astronomy and Physics
                        </p>
                        <p className="text-gray-600 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex mt-4 py-4 text-white justify-center items-center">
                <h1 className="text-4xl font-semibold font-sans tracking-wide">
                    Extracurricular Activities
                </h1>
            </div>

           <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-yellow-100 hover:shadow-yellow-500/50 px-6 py-2">
                    <Image src={yhack} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Fullstack Developer (Sep 2021 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            YHack
                        </p>
                        <p className="text-gray-600 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-blue-100 hover:shadow-blue-500/50 px-6 py-2">
                    <Image src={yes} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Startup Incubator Team (Sep 2021 - Present) &nbsp;&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Yale Entrepreneurship Society
                        </p>
                        <p className="text-gray-600 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-green-100 hover:shadow-green-500/50 px-6 py-2">
                    <Image src={yudi} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">General Analyst Member (Sep 2021 - Present)&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Yale Undergraduate Diversified Investments
                        </p>
                        <p className="text-gray-600 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-red-100 hover:shadow-red-500/50 px-6 py-2">
                    <Image src={ycs} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Software Developer (Sep 2021 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Yale Computer Society
                        </p>
                        <p className="text-gray-600 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-2xl hover:bg-orange-100 hover:shadow-orange-500/50 px-6 py-2">
                    <Image src={yuqc} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">General Member (Sep 2021 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-700 text-base mb-2">
                            Yale Undergraduate Quantum Computing
                        </p>
                        <p className="text-gray-600 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-600 text-xs"></p>
                    </div>
                </div>
            </div>
            
            <div className="p-2">

            </div>

        </div>
    )

}
