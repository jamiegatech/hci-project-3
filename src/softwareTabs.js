import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SoftwareListItem from "./softwareListItem";
import SoftwareSelected from "./softwareSelected";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

var ref_new;

function updateList(e) {
  const node = ref_new.current;
  console.log(ref_new);
  // node.forceUpdate();
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}
var counter = 1;

function checkSelected(item) {
  return item.selected;
}

function noneChecked(data3) {
  console.log(`loading: ${data3.filter(checkSelected).length == 0}`);
  return data3.filter(checkSelected).length == 0;
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);
  const [data1, setData1] = React.useState(props.software);

  const [state, setState] = React.useState(`counter-${counter}`);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (newValue) => {
    counter = counter + 1;
    console.log(counter);
    setState(`counter-${counter}`);
  };

  ref_new = React.createRef();

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#eeeeee",
        display: "flex",
        height: 700
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Web Browsers"
          {...a11yProps(0)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="File Sharing"
          {...a11yProps(1)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Developer Tools"
          {...a11yProps(2)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Messaging"
          {...a11yProps(3)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Media"
          {...a11yProps(4)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Runtimes"
          {...a11yProps(5)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Utilities"
          {...a11yProps(6)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Imaging"
          {...a11yProps(7)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Documents"
          {...a11yProps(8)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Online Storage"
          {...a11yProps(9)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Security"
          {...a11yProps(10)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Compression"
          {...a11yProps(11)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
        <Tab
          label="Other"
          {...a11yProps(12)}
          sx={{
            "&:hover": {
              // backgroundColor: "#fff",
              color: "#1d3366",
              opacity: [0.7, 0.7, 0.7]
            }
          }}
        />
      </Tabs>
      <Grid container spacing={-4}>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: "#eeeeee"
          }}
        >
          <TabPanel value={value} index={0}>
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={0}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={1}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={2}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={3}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={4}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={5}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={6}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={7}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={8}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={9}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={10}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={11}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={12}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={13}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={14}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={15}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={16}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={17}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={18}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={19}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={20}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={3}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={21}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={22}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={23}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={24}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={25}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={26}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={4}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={27}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={28}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={29}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={30}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={31}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={32}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={33}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={34}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={35}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={36}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={37}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={38}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={39}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={5}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={40}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={41}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={42}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={43}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={44}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={45}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={46}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={6}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={47}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={48}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={49}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={50}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={51}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={52}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={53}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={54}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={55}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={56}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={57}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={58}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={7}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={59}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={60}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={61}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={62}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={63}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={64}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={65}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={66}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={67}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={68}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={8}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={69}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={70}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={71}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={72}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={73}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={9}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={74}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={75}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={76}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={77}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={10}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={78}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={79}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={80}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={81}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={82}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={83}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={84}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={11}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={85}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={86}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={87}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={12}>
            {" "}
            <FormGroup
              sx={{
                width: "100%",
                maxWidth: 1000,
                bgcolor: "#eeeeee"
              }}
            >
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={88}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={89}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={90}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={91}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={92}
                updateListEvent={handleChange2}
              />
              <SoftwareListItem
                data={data1}
                setData={setData1}
                index={93}
                updateListEvent={handleChange2}
              />
            </FormGroup>
          </TabPanel>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: "#eeeeee"
          }}
        >
          <p key={state}>
            <span>
              <Button
                disabled={noneChecked(data1)}
                onClick={() => {
                  alert("You've downloaded the installer to your computer!");
                }}
                variant="contained"
                startIcon={<FileDownloadSharpIcon />}
              >
                Download MultiSoftware Installer
              </Button>
            </span>
            <Box
              container
              sx={{
                width: "100%",
                maxWidth: 338,
                display: "flex",
                bgcolor: "#fff"
              }}
            >
              <SoftwareSelected data={data1} />
            </Box>
          </p>
        </Grid>
      </Grid>
    </Box>
  );
}
