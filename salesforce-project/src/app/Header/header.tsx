import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <Link href="/">
                        <Image
                            src="/assets/Salesforce.com_logo.svg.png"
                            alt="logo salesforce"
                            height={55}
                            width={80}
                        />
                    </Link>
                </div>
                <nav>
                    <ul className="icones-header">
                        <li><Link href="https://www.linkedin.com/company/salesforce/">
                            <Image
                                src="/assets/linkedin.png"
                                alt="linkedin"
                                height={28}
                                width={28}
                            />
                        </Link></li>


                        <li><Link href="https://twitter.com/salesforce">
                            <Image
                                src="/assets/twitter.png"
                                alt="linkedin"
                                height={28}
                                width={30}
                            />
                        </Link></li>

                        <li><Link href="https://www.instagram.com/salesforce/">
                            <Image
                                src="/assets/instagram.png"
                                alt="linkedin"
                                height={30}
                                width={31}
                            />
                        </Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header