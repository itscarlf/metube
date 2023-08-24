import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCat, setSelectedCat }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        overflowY: "auto",
        mb: "15px",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => setSelectedCat(category.name)}
          startIcon={category.icon}
          sx={{
            px: "70px",
            borderRadius: "30px",
            color: category.name === selectedCat && "#fff",
            backgroundColor:
              category.name === selectedCat
                ? "rgb(251, 3, 7)"
                : "primary.faded",
            background:
              category.name === selectedCat
                ? "linear-gradient(180deg,rgba(251, 3, 7, 1) 0%,rgba(255, 41, 106, 1) 79%)"
                : "primary.faded",
          }}
        >
          <span>{category.name}</span>
        </Button>
      ))}
    </Stack>
  );
};

export default SideBar;
