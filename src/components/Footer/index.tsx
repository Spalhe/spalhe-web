import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Box pt="100px" pb="20px">
      <HStack justify="space-between">
        <Box>
          <Image cursor="pointer" src="/logo_white.svg" w="70px" />

          <Text pt="6px">Todos os Direitos Reservados</Text>
        </Box>

        <HStack spacing="30px">
          <Button
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            termos de uso
          </Button>
          <Button
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            sobre o app
          </Button>
          <Button
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            baixar
          </Button>
          <Button
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            cookies
          </Button>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Footer
