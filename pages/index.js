import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Politica de privacidade</title>
      </Head>

      <main>
        <Header title="Política de Privacidade do Sistema WebCOL da Gera Sinergia" />
        <p className="description">
          A privacidade dos usuários é uma prioridade para a Gera Sinergia. Esta Política de Privacidade descreve como as informações pessoais dos usuários são coletadas, usadas e compartilhadas quando se utiliza o Sistema WebCOL da Gera Sinergia.
        </p>
        <p className="description">
          Informações Coletadas
          O Sistema WebCOL da Gera Sinergia coleta informações pessoais dos usuários, incluindo nome, endereço de e-mail e informações de contato. Também coletamos informações sobre o uso do sistema, incluindo logs de acesso e outras informações de uso.
        </p>
        <p className="description">
          Uso das Informações
          As informações coletadas são usadas para fornecer acesso e suporte aos usuários do Sistema WebCOL da Gera Sinergia, bem como para melhorar a qualidade do sistema e seus serviços. Não utilizamos essas informações para fins de marketing, como enviar e-mails informativos e promocionais aos usuários.
        </p>
        <p className="description">
          Compartilhamento de Informações
          A Gera Sinergia não compartilha informações pessoais dos usuários com terceiros.
        </p>
        <p className="description">
          Segurança das Informações
          A Gera Sinergia toma medidas para garantir que as informações pessoais dos usuários sejam protegidas contra acesso não autorizado ou divulgação. Isso inclui o uso de criptografia de dados e outras medidas de segurança para proteger as informações durante a transmissão e armazenamento.
        </p>
        <p className="description">
          Alterações nesta Política de Privacidade
          Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de privacidade. Notificaremos os usuários de quaisquer mudanças significativas na política e obteremos o consentimento do usuário, quando exigido por lei.
        </p>
        <p className="description">
          Contato
          Se os usuários tiverem dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de suas informações pessoais pelo Sistema WebCOL da Gera Sinergia, devem entrar em contato conosco através do e-mail support@gerasinergia.zendesk.com.
        </p>
        <p className="description">
          Atualizada em 06 de abril de 2023.
        </p>
      </main>

    </div>
  )
}
