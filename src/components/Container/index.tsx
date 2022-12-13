import { Box, Center, Stack } from '@chakra-ui/react'
import React from 'react'

const Container: React.FC<any> = ({ children }) => {
  return (
    <Box w={['fit-content', 'full']}>
      <Center>
        <Stack maxW="1200px">{children}</Stack>
      </Center>
    </Box>
  )
}

export default Container
