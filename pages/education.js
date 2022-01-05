import { Navbar } from "./components/Navbar";
import Image from "next/Image";
import yale from "./resources/yale.png";
import ucsd from "./resources/ucsd.png";
import nhs from "./resources/nhs.png";
import google from "./resources/google-logo.png";
import stanford from "./resources/stanford.png";

export default function Education() {
    return (
        <div className="min-h-screen bg-blue-900">
            <Navbar />
            <div className="flex px-8 mr-4 p-4 text-white justify-center items-center">
                <h1 className="text-4xl font-semibold font-sans tracking-wide">
                    Education
                </h1>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg px-6">
                    <Image src={yale} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Yale University (2021 - Present)</h5>
                        <p className="text-gray-700 text-base mb-2">
                            B.S. in Physics, Computer Science and Economics
                        </p>
                        <p className="text-gray-600 text-sm mb-2">Certificate in Statistics & Data Science</p>
                        <p className="text-gray-600 text-xs">Yale Entrepreneurship Society, YHack, Yale Undergraduate Diversified Investments, Yale Society for Physics Students, Yale Symphony Orchestra</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg px-6">
                    <Image src={nhs} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Northwood High School (2017 - 2021)</h5>
                        <p className="text-gray-700 text-base mb-2">
                            High School Diploma (Summa Cum Laude)
                        </p>

                        <p className="text-gray-600 text-sm mb-2">GPA: 4.41/4.00</p>
                        <p className="text-gray-600 text-xs">Philharmonic Orchestra, Physics Olympiad Club, Musicians United in Service and Entertainment, Math Team, Physics Bowl Team, TSA Teams Club</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg px-6">
                    <Image src={ucsd} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">University of California, San Diego (2019)</h5>
                        <p className="text-gray-700 text-base mb-2">
                            California State Summer School in Mathematics & Science Program (COSMOS)
                        </p>

                        <p className="text-gray-600 text-sm mb-2">Cluster 9: Music and Technology</p>
                        <p className="text-gray-600 text-xs">Gordon Center Engineering Fellow Award (Top 10%)</p>
                    </div>
                </div>
            </div>

            <div className="flex px-8 mr-4 py-4 text-white justify-center items-center">
                <h1 className="text-4xl font-semibold font-sans tracking-wide">
                    Certifications
                </h1>
            </div>

            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg p-6">
                    <Image src={google} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Google Data Analytics Professional Certificate</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Credential ID: 3JE3YN4Y5VNP
                        </p>

                        <p className="text-gray-600 text-sm hover:underline text-heavy"><a href="https://drive.google.com/drive/folders/1dhPedlnYVRtKeK0o0aJ58TnQ2dGDEh_8?usp=sharing">See credential</a></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <div className="flex flex-col md:flex-row md:max-w-3xl rounded-lg bg-white shadow-lg p-6">
                    <Image src={stanford} className="w-full object-scale-down rounded-t-lg md:rounded-none md:rounded-l-lg" height={128} width={128} alt="Yale" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Stanford University Algorithms Specialization &nbsp;</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Credential ID: B2RDYPHCELHG
                        </p>

                        <p className="text-gray-600 text-sm hover:underline text-heavy"><a href="https://drive.google.com/drive/folders/1mDxV9433K6pl0G3N_BgsJIJxLoIr7T2B?usp=sharing">See credential</a></p>
                    </div>
                </div>
            </div>
            <div className="p-2">

            </div>

        </div>

    )

}
