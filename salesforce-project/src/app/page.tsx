import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div className="caixa-pesquisa">
        <Image
          className="botao-pesquisa"
          src="/assets/lupa.png"
          alt="lupa"
          height={16}
          width={16}
        />
        <input type="text" className="texto-pesquisa" placeholder="Faça sua busca no portal Salesforce" />
      </div>


      <div className="component-main">
        <Link href="/Produtos" style={{ textDecoration: 'none' }}>
          <div className="card">
            <h1>
              Saiba como os produtos Salesforce te ajudam a reduzir custos e economizar tempo.
            </h1>
            <Image
              className="imagem-salesforce"
              src="/assets/salesforce-main-page-image.webp"
              alt="lupa"
              height={249}
              width={259}
            />
          </div>
        </Link>
      </div>


      <div className="caixas">
        <div className="sales">
          <Image
            className="salescloud-icon"
            src="/assets/salescloud-icon-day.svg"
            alt="icone sales"
            height={92}
            width={102}
          />
          <h3>Sales Cloud</h3>
        </div>



        <div className="service">
          <Image
            className="service-icon"
            src="/assets/service-day.svg"
            alt="icone sales"
            height={92}
            width={102}
          />
          <h3>Service Cloud</h3>
        </div>



        <div className="marketing">
          <Image
            className="marketing-icon"
            src="/assets/marketing-day.svg"
            alt="icone sales"
            height={92}
            width={102}
          />
          <h3>Marketing Cloud</h3>
        </div>
      </div>
    </main>
  );
}
