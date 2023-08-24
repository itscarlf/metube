import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/search/${keyword}`);

      setKeyword("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#fff",
        height: "40px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        pl: "10px",
        mb: "4px",
        border: "1px solid #212121",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <IconButton type="submit" sx={{ color: "#212121" }}>
        <Search sx={{ width: "40px", height: "40px" }} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
