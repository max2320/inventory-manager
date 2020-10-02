import { gql } from '@apollo/client';

const INFRASTRUCTURE_MAP_LAYERS = gql`
  query townInfrastructureMap($townId: Int!, $indicatorId: Int) {
    townInfrastructureMap(id: $townId, indicatorId: $indicatorId) {
      dataLayers {
        name
        source
        layer
        legend
        allowedKeys
      }

      styledLayers {
        name
        source
        layer
        legend
      }

      center
      zoom
    }
  }
`;


export {
  INFRASTRUCTURE_MAP_LAYERS
};
