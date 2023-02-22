/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTestPost = /* GraphQL */ `
  mutation CreateTestPost(
    $input: CreateTestPostInput!
    $condition: ModelTestPostConditionInput
  ) {
    createTestPost(input: $input, condition: $condition) {
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
export const updateTestPost = /* GraphQL */ `
  mutation UpdateTestPost(
    $input: UpdateTestPostInput!
    $condition: ModelTestPostConditionInput
  ) {
    updateTestPost(input: $input, condition: $condition) {
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
export const deleteTestPost = /* GraphQL */ `
  mutation DeleteTestPost(
    $input: DeleteTestPostInput!
    $condition: ModelTestPostConditionInput
  ) {
    deleteTestPost(input: $input, condition: $condition) {
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
