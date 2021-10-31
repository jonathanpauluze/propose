import { useRef } from 'react';
import FlipPage from 'react-flip-page';

import {
  MagazineContainer,
  PageContainer,
  PageWrapper,
  RiskedText,
  Proposal
} from './styles';

import pic1 from '../../assets/together.jpg';
import pic2 from '../../assets/frajola.gif';
import pic3 from '../../assets/coisinhas.jpeg';

interface FlipPageProps {
  gotoNextPage: () => void;
  gotoPreviousPage: () => void;
}

export function Magazine() {
  const flipPage = useRef<FlipPageProps>(null);

  function gotoNext() {
    flipPage.current?.gotoNextPage();
  }

  function gotoPrev() {
    flipPage.current?.gotoPreviousPage();
  }

  return (
    <MagazineContainer>
      <button onClick={gotoPrev}>anterior</button>

      <FlipPage
        width={750}
        height={600}
        orientation="horizontal"
        ref={flipPage}
      >
        <PageContainer>
          <PageWrapper>
            <strong>Agradecimento</strong>

            <p>
              Oi amor, você não deve tá entendendo nada. Do nada te chamei pra ver algo que criei e você vem ver isso, algo que notoriamente foi feito as pressas... Mas é por uma boa causa.
            </p>

            <p>
              Quero te agradecer por fazer você parte da minha vida, te agradecer por você me mudar e me transformar numa pessoa melhor, quero te agradecer por me motivar e por cuidar de mim todos os dias, por me motivar quando eu tô desmotivado e por me levantar sempre que me vê caído. Você me da forças pra continuar todos os dias, e me motiva a querer crescer e conseguir trazer uma vidinha melhor pra gente.
            </p>

            <p>
              Obrigado por me fazer feliz.
            </p>
          </PageWrapper>

          <img src={pic1} alt="Juntos..." />
        </PageContainer>

        <PageContainer>
          <img src={pic2} alt="Frajola" />

          <PageWrapper>
            <strong>Pensamentos</strong>

            <p>
              Às vezes eu paro do nada e tento me imaginar sem você, daí percebo que não consigo imaginar isso e logo me dá vontade de te agarrar e te aproveitar ao máximo. Sei que às vezes falta tempo, seja por trabalho, estudo, <RiskedText>League of Legends: Wild Rift,</RiskedText> ou qualquer outra coisa que nos toma tempo. Mas se pudesse eu ficaria <RiskedText>quase</RiskedText> 100% do meu tempo com você.
            </p>

            <p>
              Também me pego pensando em como seria nossa vida caso tivéssemos uma condição financeira melhor, fico imaginando a gente saindo junto pra ir a praia, museus, diversos pontos turísticos... Tudo isso com uma boa cantoria no carro com nossa playlist totalmente aleatória que vai de The Weeknd à Matanza. Isso me motiva a continuar estudando e trabalhando duro pra conseguirmos ter essa vidinha melhor.
            </p>

            <p>
              Fico pensando em como sou sortudo em ter você do meu lado e acabo ficando muito feliz em minha mãe ter me inscrevido pra trabalhar de <RiskedText>escravo</RiskedText> aprendiz naquele mercado. Você foi a melhor coisa que me aconteceu lá, foi a melhor coisa que me aconteceu em toda minha vida... Até hoje me lembro da primeira coisa que ouvi você falando:
            </p>

            <blockquote>"Oi, meu nome é Winona... WINONA, com W"</blockquote>
            <cite>Vieira, Winona</cite>
          </PageWrapper>
        </PageContainer>

        <PageContainer>
          <PageWrapper>
            <strong>Decisões</strong>

            <p>
              Ao longo do tempo que passamos juntos tivemos que tomar muitas decisões juntos, uma das mais difíceis foi escolher o que seguir de carreira. Eu odiava ver você se rebaixando e dizendo que não tinha vocação pra nada e que iria trabalhar em mercado mesmo. Acabou que por uma inventivação que eu fiz brincando você começou a gostar de design. Hoje em dia ainda reclama <RiskedText>e muito</RiskedText> sobre algumas coisas em relação a profissão, mas olha o quanto você evoluiu... Posso dizer que agora você virou uma designer da porra, mesmo sendo júnior, já tá usando até Mac rsrsrs.
            </p>

            <p>
              Apesar das decisões difíceis, acredito que a mais importante foi quando decidimos morar juntos <RiskedText>porque tive que aprender a aturar sua chatice</RiskedText>, mesmo tendo um empurrãozinho da sua mãe nós já estávamos pensando nisso, agora que estamos juntos no nosso cantinho posso dizer que, apesar de nossas brigas, sou muito feliz e grato por ter você do meu lado!
            </p>

            <p>
              Apesar das decisões importantes que tivemos, teve uma que ainda não foi concluída porque mal foi planejada. Mesmo não tendo planejado isso direito, pensei bem e cheguei a conclusão que isso não é algo que precise de planejamento, mas sim de espontaneidade. Quando fui comprar o tênis no shopping eu te disse que tomei uma decisão, é aqui que eu vou te falar o que é...
            </p>
          </PageWrapper>

          <img src={pic3} alt="Nossas coisinhas" />
        </PageContainer>

        <Proposal>
          <h1>Quer casar comigo?</h1>
        </Proposal>
      </FlipPage>

      <button onClick={gotoNext}>próxima</button>
    </MagazineContainer>
  )
}