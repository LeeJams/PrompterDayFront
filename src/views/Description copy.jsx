import { Alert, Box, Button, Chip, Snackbar, Typography } from "@mui/material";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import classes from "./Description.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

import sa from "../assets/images/sa.png";
import na from "../assets/images/na.png";
import { useState } from "react";

export default function Description() {
  const navigator = useNavigate();
  const vertical = "bottom";
  const horizontal = "center";
  const [open, setOpen] = useState(false);

  const share = async () => {
    window.navigator.clipboard
      .writeText(window.location.href)
      .then(() => setOpen(true));
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <ArrowBackIosNewOutlinedIcon
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={() => navigator(-1)}
        />
        <IosShareOutlinedIcon
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={share}
        />
      </Box>
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
        [인기 급상승] 추석연휴
        <span className={classes.keyword}> 나흘</span>
        에서 엿새로?! 10월 2일 임시공휴일이 될 수 있어요.
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
        2023-08-31 13:52
      </Typography>
      <Box
        sx={{
          margin: "30px 0",
        }}
      >
        <Swiper spaceBetween={20} slidesPerView={1.3}>
          <SwiperSlide>
            <img src={sa} alt="sa" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={na} alt="na" />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontWeight: "400",
          lineHeight: "1.8",
          fontSize: "1.5rem",
        }}
      >
        [앵커] 총 나흘인 이번 추석연휴가 엿새로 길어질 가능성이 있습니다. 정부가
        추석과 개천절 사이인 10월2일을 임시공휴일로 지정하는 방안을 검토하는
        것으로 알려졌는데요. 임시공휴일 검토 소식 알아봅니다. 정윤형 기자,
        정부가 임시공휴일 지정을 검토한다고요?
        <br />
        <br />
        [기자] 오는 9월28일부터 10월1일까지 추석 연휴고 이후 10월3일이
        개천절인데요. 그 사이인 10월2일 하루를 임시공휴일로 지정하는 방안을
        정부가 검토하고 있습니다. 이렇게 되면 총 엿새의 연휴가 생기는 것인데요.
        만약 개천절 이후인 10월 4~6일, 사흘간 휴가를 낸다면 9일 한글날까지 더해
        총 12일간 휴가를 즐길 수도 있습니다. 대통령실은 "여당인 국민의힘으로부터
        임시공휴일 지정 건의를 받았다"며 "현재 검토 중"이라고 밝혔습니다. 추후
        당정 간 논의를 거쳐 임시공휴일 지정이 결정되면 국무회의 안건으로 상정해
        심의·의결할 것으로 보입니다.
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
            href="https://biz.sbs.co.kr/article/20000132984"
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
  );
}
