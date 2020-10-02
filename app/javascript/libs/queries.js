import { gql } from '@apollo/client';

const INVENTORY = gql`
  query inventories {
    inventories {
      name
      metas {
        key
        value
      }
      category {
        name
      }
    }
  }
`;

const CATEGORIES = gql`
  query category {
    category {
      name
    }
  }
`

export {
  INVENTORY,
  CATEGORIES
};
