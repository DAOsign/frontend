import { Button, Flex, Text } from "theme-ui";
import { useCreateAgreement } from "../../../../../../hooks/useCreateAgreement";

const HashPreviewScreen = () => {
  const { values, changeValue } = useCreateAgreement();
  return (
    <Flex sx={{ flexDirection: "column", gap: "20px" }}>
      <Text>Your agreement hash is: {values.agreementHash}</Text>
      <Button onClick={e => changeValue("agreementHash", "")}>Clear</Button>
    </Flex>
  );
};

export default HashPreviewScreen;
