import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import Container from 'components/Container'
import Footer from 'components/Footer'
import React from 'react'
import { colors } from 'theme/colors'
import Header from '../components/Header'

const App: React.FC = () => {
  return (
    <Container>
      <Header title="Sua Rede Social" />

      <Stack direction={['column-reverse', 'row']} align="center">
        <Box flex="1" pb="100px" px="100px">
          <Text fontSize="70px" lineHeight="70px" fontWeight="500">
            Sua Nova <b>Rede Social</b>
          </Text>
          <Text pt="30px">
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
          <Image src="app.png" w={['full', '550px']} />
        </Box>
      </Stack>

      <Footer />
    </Container>
  )
}

export default App
