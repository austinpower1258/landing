import { Navbar } from "../components/navbar";
import Image from "next/image";
import bestwestern from "./resources/bestwestern.png";
import yhack from "./resources/yhack.png";
import yes from "./resources/yes.png";
import yalelogo from "./resources/yalelogo.png";
import ycs from "./resources/ycs.png";
import yucg from "./resources/yucg.jpeg"
import upfund from "./resources/upfund.png";
import chesscom from "./resources/chesscom.png";
import datacy from "./resources/datacy.png";
import jpl from "./resources/jpl.jpg";
import yso from "./resources/yso.jpg";

export default function Experience() {
    return (
        <div className="min-h-screen bg-black-800">
            <Navbar />
            <div className="flex mt-4 px-8 mr-4 p-4 text-white justify-center items-center">
                <h1 className="text-4xl font-bold mt-6">
                    Professional Experience
                </h1>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex mt-4 md:flex-row md:max-w-2xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={jpl}
                        className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={144} width={144} alt="NASA JPL" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Software Developer Intern (Jun 2023 - Aug 2023)</h5>
                        <p className="text-gray-400 text-base mb-2">
                            NASA Jet Propulsion Laboratory                    </p>
                        <p className="text-gray-400 text-sm mb-2">Pasadena, CA</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex mt-4 md:flex-row md:max-w-2xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={datacy}
                        className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={140} width={140} alt="Datacy" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Machine Learning Engineer Intern (Jan - Apr 2023)</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Datacy                        </p>
                        <p className="text-gray-400 text-sm mb-2">San Francisco, CA</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex mt-4 md:flex-row md:max-w-3xl rounded-lgshadow-2xl px-6 py-2">
                    <Image src={chesscom}
                        className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={134} width={134} alt="Chess.com" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Software Engineering Intern (May - Sept 2022)</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Chess.com                        </p>
                        <p className="text-gray-400 text-sm mb-2">Mountain View, CA</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-3xl rounded-lgshadow-2xl px-6 py-2">
                    <Image src={bestwestern} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Software Engineering Intern (May - Aug 2021)</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Best Western Hotels
                        </p>
                        <p className="text-gray-400 text-sm mb-2">Los Angeles, CA</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-3xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={yalelogo} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Astrophysics Researcher (Jun - Aug 2020)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Yale Department of Astronomy and Physics
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex mt-4 px-8 mr-4 p-4 text-white justify-center items-center">
                <h1 className="text-4xl font-bold font-sans tracking-wide">
                    Extracurriculars
                </h1>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-2xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={yucg} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={126} width={126} alt="YUCG" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Head of Client Affairs & PM (Jan 2022 - Present)</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Yale Undergraduate Consulting Group
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-2xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={upfund} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="UPFund" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Head of TMT Investments (Feb 2022 - Present)</h5>
                        <p className="text-gray-400 text-base mb-2">
                            The Urban Philanthropic Fund
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>


            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-3xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={yhack} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="YHack" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Co-Director of Tech (Sep 2021 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-400 text-base mb-2">
                            YHack
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-3xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={yso} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="YES" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Executive Tour Liaison (Mar 2023 - Present) &nbsp;&nbsp;</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Yale Symphony Orchestra
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-3xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={yes} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="YES" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Startup Incubator Board (Sep 2021 - Present) &nbsp;&nbsp;</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Yale Entrepreneurship Society
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex md:flex-row md:max-w-3xl rounded-lg shadow-2xl px-6 py-2">
                    <Image src={ycs} className="object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="YCS" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-300 text-xl font-medium mb-2">Software Developer (Sep 2021 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
                        <p className="text-gray-400 text-base mb-2">
                            Yale Computer Society
                        </p>
                        <p className="text-gray-400 text-sm mb-2">New Haven, CT</p>
                        <p className="text-gray-400 text-xs"></p>
                    </div>
                </div>
            </div>
        </div>
    )

}