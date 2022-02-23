import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Link  from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    alignItems: "center"
  }
});



const CardHome = () =>{
  const classes = useStyles();

  function sub(){
    alert("Thank you for subscribing")
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link gutterBottom underline="hover" variant="h5" component={Link} href="/beers">
          Click here to see our beer catalog
        </Link>
      </CardContent>
     
      <CardActions style={{paddingLeft: 40}}>
      <TextField id="filled-basic" label="Subscribe to our mailing list" variant="filled" />
        <Button size="small" color="primary" variant="outlined" onClick={sub}>
          Subscribe
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardHome