import { useState } from "react";
import { setData } from "../Redux/redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import Typewriteeffect from "./Typewriteeffect";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdMicNone } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const useStyles = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  inputBox: {
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dataBox:{
    width: "50%",
    // border:" 0.5px solid grey",
    padding: "15px",
    borderRadius: "13px",
    backgroundColor: "#F0F0F0",
  },
  content:{
    marginTop: "auto"
  },
  buttonIcon: {
    marginLeft: "10px",
    width: "100%",
    maxWidth: "150px",
    height: "100%",
    minHeight: "55px",
  },
  starIcon: {
    marginLeft: "5px",
    width: "100%",
    maxWidth: "25px",
    height: "100%",
    maxHeight: "25px",
    
  },
};

const Input = () => {
  const [question, setQuestion] = useState("");
  const [showTitle, setShowTitle] = useState(false);
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowTitle(true);
    const newData = `Here’s a detailed explanation of the formula for calculation,  The formula demonstrates how key concepts are derived and applied in various contexts. It provides a clear understanding of the relationship between variables and offers insight into the underlying principles of the specific field. ${question}`;
    dispatch(setData(newData));
    setQuestion("");
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  return (
    <Box sx={useStyles.mainBox}>
      <Box sx={useStyles.content}>
      <Box sx={showTitle ? useStyles.dataBox : {}}>
        {showTitle && <h2>Title: Maths formula</h2>}
       {showTitle && <h2>Description :</h2>} <Typewriteeffect text={data} />
      </Box>
      <Box sx={useStyles.inputBox}>
        <TextField
          placeholder="Give a prompt to generate lesson..."
          value={question}
          onChange={handleChange}
          variant="outlined"
          style={{border:'0.5px solid lightblue',width: "100%",
            maxWidth: "950px"}}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <MdMicNone style={{ color: "#3f51b5" }} />
                  <MdOutlineFileUpload
                    style={{ color: "#3f51b5", marginLeft: "5px" }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={useStyles.buttonIcon}
        >
          Generate
          <BsStars style={useStyles.starIcon} />
        </Button>
      </Box>
      </Box>
      
    </Box>
  );
};

export default Input;
