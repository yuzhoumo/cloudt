import { apolloClient } from './apollo-client.js';
import { gql } from '@apollo/client';

export const queryVerificationStatus = async (id) => {
  const query  = `
  query Profile {
    profile(request: { profileId: "${id}" }) {
      onChainIdentity {
        worldcoin {
          isHuman
        }
      }
    }
  }
  `;

  const response = await apolloClient.query({
    query: gql(query),
  });

  console.log(response);

  return response.data.onChainIdentity?.wordlcoin?.isHuman;
}

export const queryAddress = async (address) => {

  const query  = `
  query DefaultProfile {
    defaultProfile(request: { ethereumAddress: "${address}" }) {
      id
      name
      handle
      ownedBy
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
    }
  }
  `;

  const response = await apolloClient.query({
    query: gql(query),
  });

  console.log(response);

  return response.data?.defaultProfile;
}