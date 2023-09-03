import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import classes from "./Home.module.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import mock from "../utils/mock";

const categories = [
  {
    id: "all",
    name: "전체",
  },
  {
    id: "politics",
    name: "사회",
  },
  {
    id: "society",
    name: "정치",
  },
  {
    id: "life",
    name: "생활",
  },
  {
    id: "economy",
    name: "경제",
  },
  {
    id: "science",
    name: "과학",
  },
];

export default function Home() {
  const navigator = useNavigate();
  const [tab, setTab] = useState("all");

  const moveToDocs = (id) => {
    navigator("docs/" + id);
  };

  const keywords = mock.data[tab];

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <img src={logo} alt="logo" />
        <SearchIcon sx={{ fontSize: 30 }} />
      </Box>

      <Typography
        variant="h2"
        gutterBottom
        sx={{
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Now
        <br />
        Hot Keywords
      </Typography>
      <Box className={classes.chipContainer}>
        {categories.map((category) => (
          <Chip
            label={category.name}
            variant="outlined"
            className={classes.chip}
            key={category.id}
            onClick={() => setTab(category.id)}
            sx={{
              color: tab === category.id ? "#FFF" : "#888888",
              borderColor: tab === category.id ? "#FFF" : "#888888",
            }}
          />
        ))}
      </Box>
      <div
        className={classes.speechBubbleOne}
        onClick={() => moveToDocs(keywords[0].page)}
      >
        <Typography variant="h3">{keywords[0].title}</Typography>
      </div>
      <div className={classes.middleContainer}>
        <div
          className={classes.speechBubbleTwo}
          onClick={() => moveToDocs(keywords[1].page)}
        >
          <Typography variant="h3">{keywords[1].title}</Typography>
        </div>
        <div>
          <div
            className={classes.speechBubbleThree}
            onClick={() => moveToDocs(keywords[2].page)}
          >
            <Typography variant="h3">{keywords[2].title}</Typography>
          </div>
          <div
            className={classes.speechBubbleFour}
            onClick={() => moveToDocs(keywords[3].page)}
          >
            <Typography variant="h3">{keywords[3].title}</Typography>
          </div>
        </div>
      </div>
      <div className={classes.middleContainer2}>
        <div
          className={classes.speechBubbleFive}
          onClick={() => moveToDocs(keywords[4].page)}
        >
          <Typography variant="h3">{keywords[4].title}</Typography>
        </div>
        <div
          className={classes.speechBubbleSix}
          onClick={() => moveToDocs(keywords[5].page)}
        >
          <Typography variant="h3">{keywords[5].title}</Typography>
        </div>
      </div>
    </div>
  );
}
