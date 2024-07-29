import { Box, Button, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Footer: React.FC = () => {
  const { push } = useRouter()

  return (
    <Box pt="100px" pb="20px">
      <Stack
        justify="space-between"
        align="center"
        direction={['column', 'row']}
      >
        <Stack align={['center', 'start']} pb={['20px', 0]}>
          <Image cursor="pointer" src="/logo.svg" w="80px" />
          <Text fontSize="12px" pt="6px">
            Copyrigth © 2024
          </Text>
        </Stack>

        <HStack spacing="30px">
          <Button
            onClick={() => push('/terms')}
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            termos de uso
          </Button>
          <Button
            onClick={() => push('/policy')}
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            política de privacidade
          </Button>
          <Button
            onClick={() => push('/about')}
            color="black"
            textDecor="underline"
            fontSize="12px"
            variant="link"
          >
            sobre o app
          </Button>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer
