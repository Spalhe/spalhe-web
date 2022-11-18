import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import Container from 'components/Container'
import Footer from 'components/Footer'
import React from 'react'
import { colors } from 'theme/colors'
import Header from '../components/Header'

const App: React.FC = () => {
  return (
    <Container>
      <Header title="Sua Rede Social" />

      <HStack>
        <Box flex="1" pb="180px">
          <Text fontSize={52} fontWeight="600">
            Sua Nova Rede Social
          </Text>
          <Text>
            Milhares de pessoas já estão usando! Venha conhecer o Spalhe agora
            mesmo.
          </Text>
          <Text>Crie sua conta e faça parte da comunidade Spalhe.</Text>

          <HStack pt="50px">
            <Button p="25px 70px" borderRadius="50px" bg={colors.primary}>
              Baixar o Spalhe
            </Button>

            <Button p="30px" variant="text">
              Conhecer o Spalhe
            </Button>
          </HStack>
        </Box>

        <Box>
          <Image src="app.png" w="550px" />
        </Box>
      </HStack>

      <Footer />
    </Container>
  )
}

export default App
