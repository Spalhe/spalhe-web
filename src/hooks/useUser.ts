import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const useUser = (username?: string) => {
  const { data, loading } = useQuery<IUserByUsername>(GET_USER_QUERY, {
    variables: { username },
    fetchPolicy: 'no-cache',
  })

  return {
    user: data?.findPublicUserByUsername,
    loading,
  }
}

const GET_USER_QUERY = gql`
  query findPublicUserByUsername($username: String!) {
    findPublicUserByUsername(username: $username) {
      id
      email
      name
      username
      avatar
      cover
      biography
      active
      verified
      privated
      profile_details {
        mentions
        medias
        posts
        followed
        followers
      }
    }
  }
`

export interface Profile_detail {
  mentions: number
  medias: number
  posts: number
  followed: number
  followers: number
}

export interface FindPublicUserByUsername {
  id: number
  email: string
  name: string
  username: string
  avatar: string
  cover: string
  biography: string
  active: boolean
  verified: boolean
  privated: boolean
  profile_details: Profile_detail
}

export interface IUserByUsername {
  findPublicUserByUsername: FindPublicUserByUsername
}
