import Image from "next/image";
import Link from "next/link";
import {footerLinks} from '@/constants';

const Footer = () => {
  return (
    <footer className=" flex flex-col text-black-100 mt-5 border-y border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.svg" width={118} height={18} alt="logo" className="objext-contain"/>
            <p className=" text-base text-gray-700">
                Carhub 2023 <br />
                All rights reserved &copy;
            </p>
            </div>
            <div className="footer__links">
                {
                    footerLinks.map(link=>{
                        return(
                            <div className="footer__link" key={link.title}>
                                <h3 className="font-bold">{link.title}</h3>
                                {
                                    link.links.map(item=>{
                                        return(
                                            <Link
                                            key={item.title} href={item.url} className="text-gray-500">
                                                {item.title}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
            <div className="flex justify-between items-center mt-10 border-gray-100 flex-wrap border-t sm:px-16 py-10">
                <p>@2023 Carhu. All Rights Reserved.</p>
                <div className="footer__copyright-link">
                    <Link href="/" className="text-gray-500">Privacy Policy</Link>
                    <Link href="/" className="text-gray-500">Terms od Use</Link>
                </div>
            </div>
        
    </footer>
  )
}

export default Footer
