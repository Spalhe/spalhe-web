import { Button, HStack, Image } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { colors } from '../../theme/colors'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  const { push } = useRouter()

  return (
    <HStack display={['none', 'flex']} p="20px 0" justify="space-between">
      <Image
        cursor="pointer"
        onClick={() => push('/')}
        src="/logo_white.svg"
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
          _hover={{ boxShadow: `0px 0px 30px  ${colors.primary}` }}
          variant="ghost"
          onClick={() => push('/terms')}
        >
          termos de uso
        </Button>

        <Button p="20px 40px" borderRadius="50px" bg={colors.primary}>
          Baixar o Spalhe
        </Button>
      </HStack>
    </HStack>
  )
}

export default Header
