import { Box, Image, Stack, Text } from '@chakra-ui/react'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const About: React.FC = () => {
  return (
    <Container>
      <Header title="Sobre o App" />

      <Stack direction={['column-reverse', 'row']} align="center">
        <Box w={['full', '650px']}>
          <Image src="images/profile.png" />
        </Box>

        <Box flex="1" pb="100px" px="30px">
          <Text fontSize="70px" lineHeight="70px" fontWeight="500">
            Seu perfil do seu jeito
          </Text>
          <Text pt="30px">
            Você pode personalizar com uma foto de capa e uma foto de perfil,
            além da biografia.
          </Text>
        </Box>
      </Stack>

      <Stack direction={['column-reverse', 'row']} align="center">
        <Box flex="1" pb="100px" px="100px">
          <Text fontSize="70px" lineHeight="70px" fontWeight="500">
            Seu feed em ordem cronológica
          </Text>
          <Text pt="30px">
            Não usuamos algoritmos para ordenar as postagens, então você pode
            ver as postagens na ordem em que foram publicadas.
          </Text>
        </Box>

        <Box>
          <Image src="app.png" w={['full', '550px']} />
        </Box>
      </Stack>

      <Stack direction={['column-reverse', 'row']} align="center">
        <Box w={['full', '650px']}>
          <Image src="images/policy.png" />
        </Box>

        <Box flex="1" pb="100px" px="30px">
          <Text fontSize="70px" lineHeight="70px" fontWeight="500">
            Sua privacidade é importante!
          </Text>
          <Text pt="30px">
            Nós respeitamos isso. Tenha total controle da sua conta.
          </Text>
        </Box>
      </Stack>

      <Footer />
    </Container>
  )
}

export default About
