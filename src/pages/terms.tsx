import { Box, Stack, Text } from '@chakra-ui/react'
import Footer from 'components/Footer'
import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'

const TermsPage: React.FC = () => {
  return (
    <Container>
      <Header title="Termos de Uso" />

      <Box
        textAlign="center"
        p="40px"
        alignSelf="center"
        w={['full', '800px']}
        bg="rgb(0,0,0,0.05)"
        borderRadius="4px"
      >
        <Text fontSize="32px" fontWeight="600">
          Termos de uso
        </Text>
        <Text fontSize="12px" color="gray.600" pb="20px" pt="10px">
          Atualizado 31 de jul. de 2024
        </Text>

        <Box py="30px">
          <Text>
            Estes Termos de Uso (“Termos”) estabelecem as diretrizes gerais e os
            usos aceitáveis e proibidos do aplicativo móvel “Spalhe”
            (“Aplicativo Móvel” ou “Serviço”) e de quaisquer de seus produtos e
            serviços relacionados (coletivamente, “Serviços”). Estes Termos
            constituem um acordo legalmente vinculativo entre você (“Usuário”,
            “você” ou “seu”) e o desenvolvedor do Aplicativo Móvel (“Operador”,
            “nós”, “nosso” ou “nos”). Se você estiver celebrando este acordo em
            nome de uma empresa ou outra entidade legal, você declara que tem
            autoridade para vincular tal entidade a este acordo, caso em que os
            termos “Usuário”, “você” ou “seu” referem-se a tal entidade. Se você
            não tiver tal autoridade, ou se não concordar com os termos deste
            acordo, você não deve aceitar este acordo e não pode acessar e usar
            o Aplicativo Móvel e os Serviços. Ao acessar e usar o Aplicativo
            Móvel e os Serviços, você reconhece que leu, entendeu e concorda em
            se vincular aos termos deste Acordo. Você reconhece que este Acordo
            é um contrato entre você e o Operador, mesmo que seja eletrônico e
            não seja fisicamente assinado por você, e rege o uso do Aplicativo
            Móvel e dos Serviços.
          </Text>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Atividades e Usos Proibidos
          </Text>

          <Text fontSize="16px" color="gray.600" pb="30px" pt="20px">
            Você não pode usar o Aplicativo Móvel e os Serviços para publicar
            conteúdo ou engajar-se em atividades que sejam ilegais sob a lei
            aplicável, que sejam prejudiciais a outros ou que nos sujeitem a
            responsabilidade, incluindo, sem limitação, qualquer uma das
            seguintes atividades, cada uma das quais é proibida sob esta
            Política:
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text as="li">
              Distribuição de malware ou outro código malicioso.
            </Text>

            <Text as="li">
              Divulgação de informações pessoais sensíveis de terceiros.
            </Text>

            <Text as="li">
              Coleta ou tentativa de coleta de informações pessoais sobre
              terceiros sem seu conhecimento ou consentimento.
            </Text>

            <Text as="li">
              Distribuição de pornografia ou conteúdo relacionado a adultos.
            </Text>

            <Text as="li">
              Promoção ou facilitação de prostituição ou quaisquer serviços de
              acompanhantes.
            </Text>

            <Text as="li">
              Hospedagem, distribuição ou link para pornografia infantil ou
              conteúdo que seja prejudicial a menores.
            </Text>

            <Text as="li">
              Promoção ou facilitação de jogos de azar, violência, atividades
              terroristas ou venda de armas ou munições.
            </Text>

            <Text as="li">
              Engajamento na distribuição ilegal de substâncias controladas,
              contrabando de drogas ou medicamentos prescritos.
            </Text>

            <Text as="li">
              Gerenciamento de agregadores de pagamento ou facilitadores, como
              processamento de pagamentos em nome de outras empresas ou
              instituições de caridade.
            </Text>

            <Text as="li">
              Facilitação de esquemas de pirâmide ou outros modelos destinados a
              buscar pagamentos de atores públicos.
            </Text>

            <Text as="li">
              Ameaçar dano a pessoas ou propriedade ou comportamento de assédio.
            </Text>

            <Text as="li">
              Infringir direitos de propriedade intelectual ou outros direitos
              proprietários de terceiros.
            </Text>

            <Text as="li">
              Facilitar, auxiliar ou encorajar qualquer uma das atividades acima
              através do Aplicativo Móvel e dos Serviços.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Abuso do Sistema
          </Text>

          <Text fontSize="16px" color="gray.600" pb="30px" pt="20px">
            Qualquer Usuário em violação da segurança do Aplicativo Móvel e dos
            Serviços está sujeito a responsabilidade criminal e civil, bem como
            à rescisão imediata da conta. Exemplos incluem, mas não se limitam
            a:
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text as="li">
              Uso ou distribuição de ferramentas projetadas para comprometer a
              segurança do Aplicativo Móvel e dos Serviços.
            </Text>

            <Text as="li">
              Transmissão intencional ou negligente de arquivos contendo vírus
              de computador ou dados corrompidos.
            </Text>

            <Text as="li">
              Acesso a outra rede sem permissão, incluindo sondar ou escanear
              vulnerabilidades ou violar medidas de segurança ou autenticação.
            </Text>

            <Text as="li">
              Escaneamento ou monitoramento não autorizado de dados em qualquer
              rede ou sistema sem a devida autorização do proprietário do
              sistema ou da rede.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Recursos do Serviço
          </Text>

          <Text fontSize="16px" color="gray.600" pb="30px" pt="20px">
            Você não pode consumir quantidades excessivas dos recursos do
            Aplicativo Móvel e dos Serviços ou usar o Aplicativo Móvel e os
            Serviços de qualquer forma que resulte em problemas de desempenho ou
            que interrompa os Serviços para outros Usuários. Atividades
            proibidas que contribuem para o uso excessivo incluem, sem
            limitação:
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text as="li">
              Tentativas deliberadas de sobrecarregar o Aplicativo Móvel e os
              Serviços e ataques de transmissão (ou seja, ataques de negação de
              serviço).
            </Text>

            <Text as="li">
              Engajamento em qualquer outra atividade que degrade a usabilidade
              e o desempenho do Aplicativo Móvel e dos Serviços.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Política de Spam
          </Text>
          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Você não pode usar o Aplicativo Móvel e os Serviços para enviar
              spam ou mensagens em massa não solicitadas. Mantemos uma política
              de tolerância zero para o uso do Aplicativo Móvel e dos Serviços
              de qualquer maneira associada à transmissão, distribuição ou
              entrega de qualquer e-mail em massa, incluindo e-mail comercial
              não solicitado, ou ao envio, assistência ou comissionamento da
              transmissão de e-mail comercial que não cumpra com a Lei CAN-SPAM
              de 2003 (“SPAM”) dos EUA. Seus produtos ou serviços anunciados via
              SPAM (ou seja, spamvertised) não podem ser usados em conjunto com
              o Aplicativo Móvel e os Serviços. Esta disposição inclui, mas não
              se limita a, SPAM enviado via fax, telefone, correio postal,
              e-mail, mensagens instantâneas ou grupos de notícias.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Difamação e Conteúdo Objectionável
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Valorizamos a liberdade de expressão e encorajamos os Usuários a
              serem respeitosos com o conteúdo que publicam. Não somos um editor
              de conteúdo do Usuário e não estamos em posição de investigar a
              veracidade de reclamações individuais de difamação ou de
              determinar se determinado material, que podemos considerar
              objetável, deve ser censurado. No entanto, reservamo-nos o direito
              de moderar, desativar ou remover qualquer conteúdo para prevenir
              danos a outros ou a nós ou ao Aplicativo Móvel e aos Serviços,
              conforme determinado a nosso exclusivo critério.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Conteúdo com Direitos Autorais
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Material protegido por direitos autorais não deve ser publicado
              através do Aplicativo Móvel e dos Serviços sem a permissão
              explícita do proprietário dos direitos autorais ou de uma pessoa
              explicitamente autorizada a dar tal permissão pelo proprietário
              dos direitos autorais. Após o recebimento de uma reivindicação de
              violação de direitos autorais, ou de uma notificação de tal
              violação, realizaremos uma investigação completa. No entanto,
              geralmente exigimos uma ordem judicial de um tribunal competente,
              conforme determinado a nosso exclusivo critério, para remover
              material supostamente infrator do Aplicativo Móvel e dos Serviços.
              Podemos encerrar o Serviço de Usuários com repetidas violações de
              direitos autorais. Procedimentos adicionais podem ser realizados,
              se necessário. Não assumimos qualquer responsabilidade para
              qualquer Usuário do Aplicativo Móvel e dos Serviços pela remoção
              de qualquer material dessa natureza. Se você acredita que seus
              direitos autorais estão sendo infringidos por uma pessoa ou
              pessoas usando o Aplicativo Móvel e os Serviços, entre em contato
              conosco para relatar a violação de direitos autorais.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Segurança
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Você assume total responsabilidade por manter precauções de
              segurança razoáveis para sua conta. Você é responsável por
              proteger e atualizar qualquer conta de login fornecida a você para
              o Aplicativo Móvel e os Serviços. Você deve proteger a
              confidencialidade de seus dados de login e deve alterar sua senha
              periodicamente.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Relatar Violações
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Se você descobriu e gostaria de relatar uma violação desta
              Política, entre em contato conosco imediatamente. Investigaremos a
              situação e forneceremos toda a assistência necessária.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Alterações e Emendas
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Reservamo-nos o direito de modificar esta Política ou seus termos
              relacionados ao Aplicativo Móvel e aos Serviços a qualquer
              momento, a nosso critério. Quando o fizermos, revisaremos a data
              atualizada na parte inferior desta página. Podemos também fornecer
              notificação a você de outras maneiras, a nosso critério, como
              através das informações de contato que você forneceu. Uma versão
              atualizada desta Política entrará em vigor imediatamente após a
              publicação da Política revisada, a menos que especificado de outra
              forma. Seu uso continuado do Aplicativo Móvel e dos Serviços após
              a data efetiva da Política revisada (ou de outro ato especificado
              naquele momento) constituirá seu consentimento a essas mudanças.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Aceitação Desta Política
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Você reconhece que leu esta Política e concorda com todos os seus
              termos e condições. Ao acessar e usar o Aplicativo Móvel e os
              Serviços, você concorda em se vincular a esta Política. Se você
              não concordar em cumprir os termos desta Política, você não está
              autorizado a acessar ou usar o Aplicativo Móvel e os Serviços.
            </Text>
          </Stack>
        </Box>

        <Box pt="40px">
          <Text fontSize="24px" fontWeight="600">
            Contato
          </Text>

          <Stack
            py="20px"
            textAlign="start"
            as="ul"
            listStylePos="inside"
            spacing="20px"
          >
            <Text>
              Se você tiver alguma dúvida, preocupação ou reclamação em relação
              a esta Política, encorajamos você a nos contatar
            </Text>

            <Text as="li">
              <b>Email 1:</b> contact@spalhe.com
            </Text>
            <Text as="li">
              <b>Email 2:</b> suport@spalhe.com
            </Text>
          </Stack>
        </Box>
      </Box>

      <Footer />
    </Container>
  )
}

export default TermsPage
