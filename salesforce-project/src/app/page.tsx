import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div className="nav-icone">
        <Link href="/">
          <Image
            src="/assets/Salesforce.com_logo.svg.png"
            alt="logo salesforce"
            height={67}
            width={96}
          />
        </Link>

        <nav>
          <ul className="nav-home">
            <li><Link href="/Produtos" />PRODUTOS</li>
            <li><Link href="/" />SALESFORCE</li>
          </ul>
        </nav>
      </div>
      <div className="caixa-pesquisa">
          <Image
          className="botao-pesquisa"
          src="/assets/lupa.png"
          alt="lupa"
          height={16}
          width={16}
          />
          <input type="text" className="texto-pesquisa" placeholder="Faça sua busca no portal Salesforce"/>
      </div>
      <div className="component-main">
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
    </main>
  );
}
