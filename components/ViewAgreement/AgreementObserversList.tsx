import React from "react";
import { Observer } from "../../modules/graphql/gql/graphql";
import { Box, Flex } from "theme-ui";
import { participantsCard, participantsCardTitle, noObserversMessage } from "./styles";
import ObserverCardMobile from "./ObserverCardMobile";
import { ObserverRow } from "./ObserverRow";

interface Props {
  observers: Observer[];
}

export const AgreementObserversList = ({ observers }: Props) => {
  return (
    <Flex sx={participantsCard}>
      <Box
        sx={{
          ...participantsCardTitle,
          "@media screen and (max-width: 720px)": {
            "&": {
              display: observers?.length ? "block" : "none",
              pl: 0,
            },
          },
        }}
      >
        List of Observers
      </Box>
      {observers?.length ? (
        <>
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
          <Flex className="participantsTableMobile">
            {observers?.map((observer, index) => (
              <ObserverCardMobile observer={observer} key={index} />
            ))}
          </Flex>
        </>
      ) : (
        <Box
          sx={{
            ...noObserversMessage,
            "@media screen and (max-width: 720px)": {
              "&": {
                display: observers?.length ? "block" : "none",
              },
            },
          }}
        >
          Agreement has no observers
        </Box>
      )}
    </Flex>
  );
};
