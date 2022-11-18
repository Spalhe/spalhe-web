import { Box, Stack, Text } from '@chakra-ui/react'
import Footer from 'components/Footer'
import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'

const TermsPage: React.FC = () => {
  return (
    <Container>
      <Header title="Política de Privacidade" />

      <Box
        textAlign="center"
        p="20px"
        alignSelf="center"
        w={['full', 'full']}
        bg="rgb(0,0,0,0.05)"
        borderRadius="4px"
      >
        <Text fontSize="32px" fontWeight="600">
          Política de privacidade
        </Text>
        <Text pb="20px">Atualizado 18 de nov. de 2022</Text>

        <Box py="30px">
          <Text>
            Esta política de privacidade descreve como Spalhe ("Spalhe", "nós",
            "nós") coleta, protege e usa o informações de identificação pessoal
            que você pode fornecer através do site Spalhe ou sua API. A política
            também descreve o opções disponíveis para você em relação ao uso de
            seus dados pessoais informações e como você pode acessar e atualizar
            essas informações. este política não se aplica às práticas de
            empresas que Spalhe não possui ou controla, ou para indivíduos que
            Spalhe não emprega ou gerencia.
          </Text>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Quais são as informações que coletamos?
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text as="li">
              <b>Informações básicas da conta:</b> Se você se registrar neste
              servidor, poderá ser solicitado a inserir um nome de usuário, um
              endereço de e-mail e uma senha. Você também pode inserir
              informações de perfil adicionais, como nome de exibição e
              biografia, e fazer upload de uma foto de perfil e imagem de
              cabeçalho. O nome de usuário, nome de exibição, biografia, foto de
              perfil e imagem de cabeçalho são sempre listados publicamente.
            </Text>

            <Text as="li">
              <b>Postagens, seguidores e outras informações públicas:</b> a
              lista de pessoas que você segue é listada publicamente, o mesmo
              vale para seus seguidores. Quando você envia uma mensagem, a data
              e a hora são armazenadas, assim como o aplicativo do qual você
              enviou a mensagem. As mensagens podem conter anexos de mídia, como
              fotos e vídeos. Suas postagens são entregues aos seus seguidores.
              A ação de spalhar ou gostar de outra postagem é sempre listada
              para seus seguidores.
            </Text>

            <Text as="li">
              <b>Postagens diretas e apenas para seguidores:</b> todas as
              postagens são armazenadas e processadas no servidor. As postagens
              apenas para seguidores são entregues aos seus seguidores e
              usuários mencionados nelas, e as postagens diretas são entregues
              apenas aos usuários mencionados nelas. Em alguns casos, isso
              significa que eles são entregues em servidores diferentes e as
              cópias são armazenadas lá. Fazemos um esforço de boa fé para
              limitar o acesso a essas postagens apenas a pessoas autorizadas,
              mas outros usuários podem não fazê-lo. Portanto, é importante
              revisar os usuarios aos quais seus seguidores pertencem. Você pode
              alternar uma opção para aprovar e rejeitar novos seguidores
              manualmente nas configurações. Lembre-se de que os seus usuários
              podem visualizar essas publicações e que os destinatários podem
              fazer capturas de tela, copiá-las ou compartilhá-las novamente.
              <b> Não compartilhe nenhuma informação sensível no Spalhe.</b>
            </Text>

            <Text as="li">
              <b>IPs e outros metadados:</b> quando você faz login, registramos
              o endereço IP do qual você faz login, bem como o nome do seu
              aplicativo de navegador. Todas as sessões conectadas em breve
              estarão disponíveis para sua revisão e revogação nas
              configurações. O último endereço IP usado é armazenado por até 12
              meses. Também podemos reter logs do servidor que incluem o
              endereço IP de cada solicitação ao nosso servidor.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Pra que usamos suas informações?
          </Text>

          <Text>
            Qualquer informação que coletamos de você pode ser usada das
            seguintes maneiras:
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text as="li">
              Para fornecer a funcionalidade principal do Spalhe. Você só pode
              interagir com o conteúdo de outras pessoas e postar seu próprio
              conteúdo quando estiver conectado. Por exemplo, você pode seguir
              outras pessoas para ver suas postagens combinadas em sua própria
              linha do tempo personalizada.
            </Text>

            <Text as="li">
              Para ajudar na moderação da comunidade, por exemplo, comparando
              seu endereço IP com outros conhecidos para determinar evasão de
              banimento ou outras violações.
            </Text>

            <Text as="li">
              O endereço de e-mail que você fornece pode ser usado para enviar
              informações, notificações sobre outras pessoas interagindo com seu
              conteúdo ou enviando mensagens para você e para responder a
              consultas e/ou outras solicitações ou perguntas.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Como protegemos os seus dados?
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Implementamos uma variedade de medidas de segurança para manter a
              segurança de suas informações pessoais quando você insere, envia
              ou acessa suas informações pessoais. Entre outras coisas, sua
              sessão do navegador, bem como o tráfego entre seus aplicativos e a
              API, são protegidos com SSL, e sua senha é criptografada usando um
              forte algoritmo unidirecional.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Qual é a nossa política de retenção de dados?
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>Faremos um esforço de boa fé para:</Text>
            <Text as="li">
              Reter logs do servidor contendo o endereço IP de todas as
              solicitações a este servidor, desde que tais logs sejam mantidos,
              não mais que 90 dias.
            </Text>

            <Text as="li">
              Retenha os endereços IP associados aos usuários registrados por
              não mais de 12 meses.
            </Text>
            <Text>
              <b>
                Você pode excluir irreversivelmente sua conta a qualquer
                momento.
              </b>
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Usamos cookies?
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Sim. Cookies são pequenos arquivos que um site ou seu provedor de
              serviços transfere para o disco rígido do seu computador por meio
              do navegador da Web (se você permitir). Esses cookies permitem que
              o site reconheça seu navegador e, se você tiver uma conta
              registrada, associe-a à sua conta registrada. Usamos cookies para
              entender e salvar suas preferências para futuras visitas.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Nós revelamos qualquer informação a terceiros?
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Não vendemos, trocamos ou transferimos para terceiros suas
              informações de identificação pessoal. Isso não inclui terceiros
              confiáveis que nos ajudam a operar nosso site, conduzir nossos
              negócios ou atendê-lo, desde que essas partes concordem em manter
              essas informações confidenciais. Também podemos liberar suas
              informações quando acreditarmos que a liberação é apropriada para
              cumprir a lei, fazer cumprir as políticas de nosso site ou
              proteger nossos direitos, propriedade ou segurança, ou de
              terceiros.
            </Text>

            <Text>
              Seu conteúdo do perfil pode ser visualizado por outros usuários.
              Suas postagens são entregues aos somente aos seus seguidores, e as
              mensagens diretas são entregues somente ao seu destinatário.
            </Text>

            <Text>
              Quando você autoriza um aplicativo a usar sua conta, dependendo do
              escopo das permissões que você aprova, ele pode acessar suas
              informações de perfil público, sua lista de seguidores, seus
              seguidores, suas listas, todas as suas postagens e seus favoritos.
              Os aplicativos nunca podem acessar seu endereço de e-mail ou
              senha.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Uso do site por crianças
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Se este servidor estiver na UE ou no EEE: Nosso site, produtos e
              serviços são todos direcionados a pessoas com pelo menos 16 anos
              de idade. Se você tem menos de 16 anos, de acordo com os
              requisitos do GDPR (Regulamento Geral de Proteção de Dados), não
              use este site.
            </Text>

            <Text>
              Se este servidor estiver nos EUA: Nosso site, produtos e serviços
              são todos direcionados a pessoas com pelo menos 13 anos de idade.
              Se você tem menos de 13 anos, de acordo com os requisitos da COPPA
              (Lei de Proteção à Privacidade Online das Crianças), não use este
              site.
            </Text>

            <Text>
              Os requisitos legais podem ser diferentes se este servidor estiver
              em outra jurisdição.
            </Text>
          </Stack>
        </Box>
      </Box>

      <Footer />
    </Container>
  )
}

export default TermsPage
