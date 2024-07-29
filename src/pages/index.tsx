import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import Container from 'components/Container'
import Footer from 'components/Footer'
import React from 'react'
import Header from '../components/Header'
import { PiShootingStarDuotone } from 'react-icons/pi'
import { FaStar } from 'react-icons/fa'

import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5'
import { usersAvatars } from '../constants/avatar'

const App: React.FC = () => {
  return (
    <Container>
      <Header title="Sua Rede Social" />

      <Stack
        direction={['column', 'row']}
        align="center"
        justify="space-between"
        px="30px"
        pt={['20px', '0']}
      >
        <Box flex="1">
          <HStack pb="10px">
            <HStack
              fontSize="12px"
              borderRadius="100px"
              bg="#ffc1072b"
              p="6px 14px"
            >
              <Icon as={PiShootingStarDuotone} fontSize="20px" color="black" />
              <Text fontWeight="700" color="black">
                Seja um dos primeiros a usar o Spalhe
              </Text>
            </HStack>
          </HStack>

          <Text
            fontSize={['50px', '80px']}
            lineHeight={['58px', '80px']}
            fontWeight="500"
          >
            Sua nova
            <b> Rede Social</b> favorita 🥰
          </Text>

          <Text pt="10px" opacity={0.7}>
            Milhares de pessoas já estão usando o Spalhe, venha conhecer agora
            mesmo!
          </Text>

          <HStack pt="20px">
            <HStack spacing="0">
              <Avatar
                border="2px solid white"
                src={usersAvatars[0]}
                w="32px"
                h="32px"
              />
              <Avatar
                border="2px solid white"
                src={usersAvatars[1]}
                w="32px"
                h="32px"
                ml="-10px"
              />
              <Avatar
                border="2px solid white"
                src={usersAvatars[2]}
                w="32px"
                h="32px"
                ml="-10px"
              />
            </HStack>

            <HStack spacing="5px">
              <Icon as={FaStar} fontSize="18px" color="yellow.400" />
              <Icon as={FaStar} fontSize="18px" color="yellow.400" />
              <Icon as={FaStar} fontSize="18px" color="yellow.400" />
              <Icon as={FaStar} fontSize="18px" color="yellow.400" />
              <Icon as={FaStar} fontSize="18px" color="yellow.400" />
            </HStack>
          </HStack>

          <HStack pt="50px" display={['flex', 'none']}>
            <Image
              src={'/images/feature1.png'}
              h={['full', '650px']}
              objectFit="contain"
            />
          </HStack>

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
              _hover={{ bg: '#222' }}
              _active={{ bg: '#333' }}
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

        <HStack flex={1} display={['none', 'flex']} justify="center">
          <Image
            src={'/images/feature1.png'}
            h={['full', '650px']}
            objectFit="contain"
          />
        </HStack>
      </Stack>

      <Footer />
    </Container>
  )
}

export default App
