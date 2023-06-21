import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Username: React.FC = () => {
  const { query, push } = useRouter()
  const { username } = query

  useEffect(() => {
    if (username) {
      push(`spalhe://${username}`)
    }
  }, [username])

  return (
    <Box>
      <Head>
        <title>@{username} | Spalhe</title>
        <meta name="description" content={`@${username} | Spalhe`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Username</h1>
    </Box>
  )
}

export default Username
