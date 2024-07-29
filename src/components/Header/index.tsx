import { Button, HStack, Image } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  const { push } = useRouter()

  return (
    <HStack p={['20px', '20px 0']} justify={['center', 'space-between']}>
      <Image
        cursor="pointer"
        onClick={() => push('/')}
        src="logo.svg"
        w="100px"
      />

      <Head>
        <meta
          name="google-site-verification"
          content="NX8Bd_Rl7Mg2zBplaNCq34s7EY3COs_AlzaRbBPj6Rc"
        />
        <title>{`${title} - Spalhe Rede Social`}</title>
      </Head>

      <HStack>
        <Button
          display={['none', 'flex']}
          variant="text"
          onClick={() => push('/about')}
        >
          sobre o app
        </Button>
      </HStack>
    </HStack>
  )
}

export default Header
