import "./App.css";
import { Box, Text } from "@chakra-ui/react";
function App() {
  const appName = import.meta.env.VITE_APP_PROJECT_NAME;
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text color="blue.500" fontSize="2xl" fontWeight="bold">
          Welcome to {appName}
        </Text>
      </Box>
    </>
  );
}

export default App;
