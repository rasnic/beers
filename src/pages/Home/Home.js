import React  from "react";
import Typography from '@mui/material/Typography';
import CardHome from '../../components/CardHome';
import "./style.css";

const Home = () => {
    return (
        <div>
            <div>
                <Typography id="breadcrumbs" color="text.primary">home</Typography>
            </div>
            <div id="wallpaper">
                <div id="card">
                <CardHome />
                </div >
            </div>
        </div>
    )
}
  export default Home;
 