import { Box, Center, Stack } from '@chakra-ui/react'
import React from 'react'

const Container: React.FC<any> = ({ children }) => {
  return (
    <Box w={['fit-content', 'full']}>
      <Center>
        <Stack w={['full', '1120px']} maxW={['full', '1120px']}>
          {children}
        </Stack>
      </Center>
    </Box>
  )
}

export default Container
