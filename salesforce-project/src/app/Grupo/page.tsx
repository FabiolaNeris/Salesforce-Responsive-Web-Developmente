import Image from "next/image";
import Link from "next/link";

const Grupo = () => {
    return (
        <>
            <main>
                <div className="integrantes-titulo">
                    <h1>Integrantes do grupo</h1>
                </div>

                <div className="grupo">

                    <div className="perfil">

                        <Image
                            src="/assets/fabiola.jpg"
                            alt=""
                            width={250}
                            height={250}
                        />
                        <p>Fabiola Falcão Neris Santos</p>
                        <p> RM 552715</p>
                        <Link href="https://github.com/FabiolaNeris">
                            <Image
                                src="/assets/github.png"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>


                    <div className="perfil">
                        <Image
                            src="/assets/gabriel.jpg"
                            alt=""
                            width={250}
                            height={250}
                        />
                        <p>Gabriel Leal Onodera</p>
                        <p> RM 553779</p>
                        <Link href="https://github.com/GLOnodera">
                            <Image
                                src="/assets/github.png"
                                alt=""
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )

}
export default Grupo;