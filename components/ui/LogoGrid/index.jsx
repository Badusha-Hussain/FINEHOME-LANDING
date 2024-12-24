import Image from 'next/image'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import layers from '../../../public/logos/layers.svg'
import adobe from '../../../public/logos/adobe.svg'


import finehome_logo from '../../../public/logos/finehome_logo.png'
import logo from '../../../public/logos/logo.png'
import bayut from '../../../public/logos/bayut.png'
import dubizzle from '../../../public/logos/dubizzle.png'

const logos = [
    {
        src: finehome_logo,
        alt: "finehome"
    },
    {
        src: logo,
        alt: "aqary"
    },
    {
        src: bayut,
        alt: "bayut"
    },
    {
        src: dubizzle,
        alt: "dubizzle"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                TRUSTED BY COMPANIES FROM AROUND THE WORLD
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} width={150} height={80} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid