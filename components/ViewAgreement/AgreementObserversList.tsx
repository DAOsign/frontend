import React, { useState } from "react";
import { Observer } from "../../modules/graphql/gql/graphql";
import { Box, Container, Flex } from "theme-ui";
import { participantsCard, participantsCardTitle, noObserversMessage } from "./styles";
import ObserverCardMobile from "./ObserverCardMobile";
import { ObserverRow } from "./ObserverRow";
import Icon from "../../components/icon";
import iconsObj from "../../assets/icons";

interface Props {
  observers: Observer[];
}

export const AgreementObserversList = ({ observers }: Props) => {
  return (
    <Container>
      <Flex sx={participantsCard}>
        <Box
          sx={{
            ...participantsCardTitle,
            "@media screen and (max-width: 720px)": {
              "&": {
                display: observers?.length ? "block" : "none",
                pl: "15px",
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
                  <th>Observer Address</th>
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
            <Box sx={{ width: "80px", height: "80px", m: "20px auto 12px" }}>
              <Icon src={iconsObj.whitoutUser} />
            </Box>
            The agreement has no observers yet
          </Box>
        )}
      </Flex>
    </Container>
  );
};
