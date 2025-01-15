import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { GET_USER_QUERY } from 'hooks/useUser'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import React from 'react'
import { colors } from 'theme/colors'
import { GraphqlClient } from '../services/graphql'

export const runtime = 'edge';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const username = ctx.params?.username

  const user = await new GraphqlClient().client.query({
    query: GET_USER_QUERY,
    variables: { username },
  })

  return {
    props: {
      username,
      user: user?.data?.findPublicUserByUsername ?? {},
    },
  }
}

interface Props {
  user: any
  username: string
}

const Username: React.FC<Props> = ({ user, username }) => {
  return (
    <Box bg="black">
      <Head>
        <title>{username ? `@${username} | Spalhe` : 'Spalhe'}</title>
        <meta
          name="description"
          content={username ? `@${username} | Spalhe` : 'Spalhe'}
        />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
                html, body {
                    background-color: black !important;
                    height: 100%;
                    margin: 0 auto;
                }
            
            `}
        </style>
      </Head>

      <Center h="full" pt="20px">
        <Box w="350px">
          <Box
            bgColor={colors.primary}
            bgImage={`url(${user?.cover})`}
            bgSize="cover"
            h="150px"
            position="relative"
            borderRadius="8px"
          >
            <Image
              src={user?.avatar}
              w="120px"
              h="120px"
              borderRadius="100px"
              position="absolute"
              bottom="-40px"
              left="115px"
              right="0"
              border="3px solid white"
              objectFit="cover"
            />
          </Box>

          <Stack align="center" color="white" pt="50px" spacing="0">
            <Text fontWeight="bold">{user?.name}</Text>
            <Text fontSize="12px">@{user?.username}</Text>

            <HStack spacing="20px" pt="10px">
              <Text fontSize="12px">
                <b>{user?.profile_details.followed}</b> seguindo
              </Text>
              <Text fontSize="12px">
                <b>{user?.profile_details.followers}</b> seguidores
              </Text>
            </HStack>

            <Box px="30px" pt="20px">
              <Text textAlign="center">{user?.biography}</Text>
            </Box>

            <Box pt="20px">
              <Button
                onClick={() => window.open(`spalhe://${username}`, '_blank')}
                p="20px 40px"
                borderRadius="50px"
                bg={colors.primary}
                color="black"
              >
                Abrir no Spalhe
              </Button>
            </Box>
          </Stack>
        </Box>
      </Center>
    </Box>
  )
}

export default Username
