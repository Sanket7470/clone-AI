import { Box, IconButton, Drawer, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useStyles = {
  mainBox: {
    width: "100%",
    maxWidth: "250px",
    borderRight: "0.5px solid grey",
    borderRadius: "8px",
    height: "100vh",
    backgroundColor: "#F0F0F0",
    padding: "20px",
  },
  drawerPaper: {
    width: "250px",
  },
  iconButton: {
    position: "fixed",
    top: "10px",
    left: "10px",
    zIndex: 1300,
  },
  drawerContent: {
    padding: "20px",
  },
};

const Sidebar = () => {
  const data = useSelector((state) => state.data.value);
  const [sideText, setSideText] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setSideText((prev) => [...prev, data]);
    }
  }, [data]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile && (
        <IconButton
          sx={useStyles.iconButton}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={open || !isMobile}
        onClose={toggleDrawer}
        sx={{ 
          display: { xs: 'block', sm: 'none' }, 
          '& .MuiDrawer-paper': useStyles.drawerPaper 
        }}
      >
        <Box sx={useStyles.drawerContent}>
          {sideText.length > 0 && <h2>Search History</h2>}
          <ul>
            {sideText.length === 0 ? (
              <h3>No Search history</h3>
            ) : (
              sideText.map((text, index) => {
                const newData = text.split(" ").slice(0, 5).join(" ") + "...";
                return (
                  <li
                    key={index}
                    style={{
                      border: "1px solid",
                      padding: "10px",
                      borderRadius: "15px",
                      background: "white",
                      marginBottom: "5px",
                    }}
                  >
                    {newData}
                  </li>
                );
              })
            )}
          </ul>
        </Box>
      </Drawer>
      {!isMobile && (
        <Box sx={useStyles.mainBox}>
          {sideText.length > 0 && <h2>Search History</h2>}
          <ul>
            {sideText.length === 0 ? (
              <h3>No Search history</h3>
            ) : (
              sideText.map((text, index) => {
                const newData = text.split(" ").slice(0, 5).join(" ") + "...";
                return (
                  <li
                    key={index}
                    style={{
                      border: "1px solid",
                      padding: "10px",
                      borderRadius: "15px",
                      background: "white",
                      marginBottom: "5px",
                    }}
                  >
                    {newData}
                  </li>
                );
              })
            )}
          </ul>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
