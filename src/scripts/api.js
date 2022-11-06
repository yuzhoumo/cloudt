import { apolloClient } from './apollo-client.js';
import { gql } from '@apollo/client';

export const calculateReputation = (stats, isVerified) => {
  if (!stats) {
    return 0;
  } else {
    let nums = [stats.stats.totalCollects,
           stats.stats.totalComments,
           stats.stats.totalFollowers,
           stats.stats.totalMirrors,
           stats.stats.totalPosts,
           stats.stats.totalPublications];
    
    let tot = 0;

    tot += nums[0] * 0.05;
    tot += nums[1] * 0.15;
    tot += nums[2] * 0.3;
    tot += nums[3] * 0.1;
    tot += nums[4] * 0.2;
    tot += nums[5] * 0.2;

    return Math.round(tot * 10);
  }
}

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
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
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