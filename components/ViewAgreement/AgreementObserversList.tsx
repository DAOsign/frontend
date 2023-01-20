import React from "react";
import { Observer } from "../../modules/graphql/gql/graphql";
import { Box, Flex } from "theme-ui";
import { participantsCard, participantsCardTitle, noObserversMessage } from "./styles";
import { ObserverRow } from "./ObserverRow";

interface Props {
  observers: Observer[];
}

export const AgreementObserversList = ({ observers }: Props) => {
  return (
    <Flex sx={participantsCard}>
      <Box sx={participantsCardTitle}>List of Observers</Box>
      {observers?.length ? (
        <table className="participantsTable">
          <thead>
            <tr>
              <th>Observer Name</th>
              <th>Signer Address</th>
            </tr>
          </thead>
          <tbody>
            {observers?.map((observer, index) => (
              <ObserverRow observer={observer} key={index} />
            ))}
          </tbody>
        </table>
      ) : (
        <Box sx={noObserversMessage}>Agreement has no observers</Box>
      )}
    </Flex>
  );
};
