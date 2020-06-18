import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // .MuiFormLabel-root{color:"#FFF"},
  block: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(4),
  },
  avatarTypography: {
    color: "#FFFF",
  },
  test: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    //   odleglosc formularza od nagłówka
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#333333",
    padding: theme.spacing(2),
    border: "#64DD17",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: "#64DD17",
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  input: {
    color: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: "#FFFF",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  media: {
    backgroundColor: "transparent",
    height: 0,
    paddingRight: "40%", // 16:9
  },
  image: {
    width: "130px",
    height: "120px",
  },
  icon: {
    color: "#64DD17",
  },
}));

export default useStyles;
