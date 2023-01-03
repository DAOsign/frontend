import { Box, Spinner } from "theme-ui";
import Lottie from "lottie-react";
import loader from "../../../../../../img/json/loader.json";

const FileLoading = () => {
  return (
    <Box sx={{ m: "0 auto", width: "fit-content", mt: "20px" }}>
      <Box>Recovering your file...</Box>
      <Lottie style={{ height: "60px", marginBottom: "52px" }} animationData={loader} loop={true} />
    </Box>
  );
};

export default FileLoading;
