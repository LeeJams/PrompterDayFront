import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Snackbar,
  Typography,
} from "@mui/material";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import classes from "./Description.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mock from "../utils/mock";
import LoadingBar from "../components/LoadingBar";

export default function Description() {
  const navigator = useNavigate();
  const { id } = useParams();
  const vertical = "bottom";
  const horizontal = "center";
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const share = async () => {
    window.navigator.clipboard
      .writeText(window.location.href)
      .then(() => setOpen(true));
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    try {
      const data = mock.news[id];
      if (!data) {
        alert("콘텐츠 준비중입니다.");
        navigator("/PrompterDayFront/");
      }
      const titleArr = data.title.split(data.keyword);
      setData({
        ...data,
        title1: titleArr[0],
        title2: titleArr[1],
      });
    } catch (error) {
      alert("콘텐츠 준비중입니다.");
      navigator("/PrompterDayFront/");
    } finally {
      setIsLoading(false);
    }
  }, [id, navigator]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <ArrowBackIosNewOutlinedIcon
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={() => navigator(-1)}
        />
        <IosShareOutlinedIcon
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={share}
        />
      </Box>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <div>
          <div className={classes.category}>
            <Chip
              label="사회"
              sx={{
                padding: "15px 3px",
                fontSize: "1.2rem",
                borderRadius: "10px",
              }}
            />
          </div>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "400",
              lineHeight: "1.3",
            }}
          >
            {data?.title1}
            <span className={classes.keyword}>{data?.keyword}</span>
            {data?.title2}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{
              fontSize: "1.2rem",
              color: "#999999",
            }}
          >
            {data?.date}
          </Typography>
          <Box
            sx={{
              margin: "20px 0",
            }}
          >
            <Swiper spaceBetween={20} slidesPerView={1.3}>
              {data?.imgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.src} alt={img.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Typography
            variant="caption"
            display="block"
            sx={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            {data?.mean}
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: "400",
              lineHeight: "1.8",
              fontSize: "1.5rem",
              whiteSpace: "pre-line",
              marginTop: "20px",
            }}
          >
            {data?.content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 0",
              marginTop: "30px",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                borderRadius: "10px",
                fontSize: "1.2rem",
              }}
            >
              <a
                href={data?.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                원문기사 바로가기
              </a>
            </Button>
          </Box>
          <Box sx={{ width: 500 }}>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={1500}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="info">
                <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
                  링크가 클립보드에 복사되었습니다.
                </Typography>
              </Alert>
            </Snackbar>
          </Box>
        </div>
      )}
    </>
  );
}
