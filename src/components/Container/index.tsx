import { Center, Stack } from '@chakra-ui/react'
import React from 'react'

const Container: React.FC<any> = ({ children }) => {
  return (
    <Center>
      <Stack w="full" maxW="1200px">
        {children}
      </Stack>
    </Center>
  )
}

export default Container
