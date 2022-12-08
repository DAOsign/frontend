import { Box, Spinner } from "theme-ui";

const FileLoading = () => {
  return (
    <Box sx={{ m: "0 auto", width: "fit-content", mt: "20px" }}>
      <Box>Recovering your file...</Box>
      <Box sx={{ mt: "20px" }}>
        <Spinner size={100} />
      </Box>
    </Box>
  );
};

export default FileLoading;
