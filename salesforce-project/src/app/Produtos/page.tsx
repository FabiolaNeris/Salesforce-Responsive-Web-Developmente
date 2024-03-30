import Image from "next/image"

const Produtos = () => {
    return (
        <>
            <main>
                <div className="container-header">
                    <h1>
                        Produtos Salesforce
                    </h1>
                    <h2>Veja o mundo com os olhos dos seus clientes</h2>
                </div>
                <div className="side-bar">
                    <Image
                        src="/assets/salescloud-icon-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/service-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/marketing-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/placeholder29.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/slack.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/products-sustainability-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/integration-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/commerce-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/einstein.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/tableau.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                    <Image
                        src="/assets/product-smb-day.svg"
                        alt="icone"
                        height={57}
                        width={47}
                    />
                </div>

                <section className="produtos">

                    <div className="vendas">
                        <h2>Vendas</h2>
                        <Image
                            src="/assets/sc-product-promoblade.webp"
                            alt="vendas"
                            height={252}
                            width={266}
                        />
                        <p>
                            Feche mais negócios e acelere o crescimento com o CRM nº1. O Sales  Cloud otimiza a produtividade da sua equipe de vendas para fechar sempre as melhores oportunidades
                        </p>
                    </div>


                    <div className="atendimento">
                        <h2>Atendimento</h2>
                        <Image
                            src="/assets/success-ecosystem-min.webp"
                            alt="atendimento"
                            height={252}
                            width={266}
                        />
                        <p>
                            Gaste menos com serviços escaláveis que os clientes adoram. O Sale Cloud Permite que seus clientes tenham acesso à sua equipe de relacionamento através de canais conectados
                        </p>
                    </div>



                    <div className="marketing-product">
                        <h2>Marketing</h2>
                        <Image
                            src="/assets/marketing-overview-jt.png"
                            alt="mkt"
                            height={252}
                            width={266}
                        />
                        <p>
                            Atraia clientes. Gere mais engajamento.Construa relações duradouras.Tudo isso graças ao marketing digital baseado em dados.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Produtos;