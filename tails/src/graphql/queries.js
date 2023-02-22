/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTestPost = /* GraphQL */ `
  query GetTestPost($id: ID!) {
    getTestPost(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTestPosts = /* GraphQL */ `
  query ListTestPosts(
    $filter: ModelTestPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTestPosts = /* GraphQL */ `
  query SyncTestPosts(
    $filter: ModelTestPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
