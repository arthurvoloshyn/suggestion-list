import { Box, Button } from "@mui/material";

export function MainActions() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button variant="contained" disabled>
        Add
      </Button>
    </Box>
  );
}
