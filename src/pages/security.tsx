import { Box,  Text } from '@chakra-ui/react'
import Footer from 'components/Footer'
import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'

const TermsPage: React.FC = () => {
  return (
    <Container>
      <Header title="Política de Padrões de Segurança Infantil" />

      <Box
        textAlign="center"
        p="40px"
        alignSelf="center"
        w={['full', '800px']}
        bg="rgb(0,0,0,0.05)"
        borderRadius="4px"
      >
        <Text fontSize="32px" fontWeight="600">
        Política de Padrões de Segurança Infantil
        </Text>
        

        <Box py="30px">
          <Text>
            {`No Spalhe, estamos comprometidos em garantir a proteção e a segurança das crianças em todas as nossas operações. Para isso, seguimos rigorosamente padrões de segurança reconhecidos e publicados por entidades confiáveis e implementamos políticas claras para evitar quaisquer riscos.

            Padrões de Segurança Publicados
            Adotamos padrões de segurança reconhecidos internacionalmente, garantindo que nossas práticas e tecnologias estejam alinhadas às melhores diretrizes para a proteção infantil. Esses padrões abrangem medidas preventivas, monitoramento constante e atualizações periódicas para manter nossa plataforma segura e em conformidade com as regulamentações vigentes.

            Dados de Contato para Suporte e Denúncias
            Disponibilizamos canais dedicados para atender quaisquer questões relacionadas à segurança infantil. Se você precisar reportar uma preocupação, esclarecer dúvidas ou buscar suporte, entre em contato conosco através dos seguintes meios:
            • E-mail: segurança@spalhe.com
            • Telefone: 0800-123-456

            Estamos à disposição para garantir que qualquer preocupação seja tratada de forma rápida, confidencial e eficiente. A segurança infantil é uma prioridade para nós, e estamos comprometidos em oferecer um ambiente seguro e transparente para todos os nossos usuários.`}
          </Text>
        </Box>
      </Box>
      <Footer />
    </Container>
  )
}

export default TermsPage
