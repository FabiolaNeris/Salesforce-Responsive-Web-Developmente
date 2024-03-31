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


                        <li><Link href="https://www.instagram.com/salesforce/">
                            <Image
                                src="/assets/instagram.png"
                                alt="instagram"
                                height={28}
                                width={28}
                            />
                        </Link></li>

                        <li><Link href="/Grupo">
                            <Image
                                src="/assets/conversa-em-grupo.png"
                                alt="grupo"
                                height={30}
                                width={30}
                            />
                        </Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header