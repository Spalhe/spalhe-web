import { Box, Button, Icon, Image, Stack, Text } from '@chakra-ui/react'
import Container from 'components/Container'
import Footer from 'components/Footer'
import React from 'react'
import Header from '../components/Header'

import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5'

const App: React.FC = () => {
  return (
    <Container>
      <Header title="Sua Rede Social" />

      <Stack direction={['column', 'row']} align="center">
        <Box flex="1" pb={[0, '100px']} px={[10, '70px']}>
          <Text fontSize="80px" lineHeight="80px" fontWeight="500">
            sua nova <b>rede social</b>
          </Text>
          <Text pt="30px">
            milhares de pessoas já estão usando! venha conhecer o Spalhe agora
            mesmo.
          </Text>
          <Text>crie sua conta e faça parte da comunidade Spalhe.</Text>

          <Stack pt="50px" direction={['column', 'row']}>
            <Button
              onClick={() =>
                window.open(
                  'https://apps.apple.com/br/app/spalhe-rede-social/id6444139282',
                  '_blank'
                )
              }
              p="25px"
              leftIcon={<Icon fontSize={26} as={IoLogoAppleAppstore} />}
              borderRadius="50px"
              bg="#000"
              _hover={{
                bg: '#222',
              }}
              _active={{
                bg: '#333',
              }}
              color="white"
            >
              baixar para iOS
            </Button>

            <Button
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/details?id=com.spalhe',
                  '_blank'
                )
              }
              p="25px"
              leftIcon={<Icon fontSize={26} as={IoLogoGooglePlaystore} />}
              borderRadius="50px"
              bg="#000"
              _active={{
                bg: '#333',
              }}
              _hover={{
                bg: '#222',
              }}
              color="white"
            >
              baixar para Android
            </Button>
          </Stack>
        </Box>

        <Box>
          <Image
            display={['none', 'block']}
            src={'app.png'}
            w={['full', '550px']}
          />
          <Image
            display={['block', 'none']}
            src={'images/profile.png'}
            w={['full', '550px']}
          />
        </Box>
      </Stack>

      <Footer />
    </Container>
  )
}

export default App
