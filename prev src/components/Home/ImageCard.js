// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

// import "../../assets/notices.css"
// import { Grid } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     // maxWidth: 745,
//     // background: " rgba(0,0,0,0.5)",
//     margin: "20px",
//     // width: 2000,
//     // display: "flex",
//     // flexDirection: "column-reverse",
//     // justifyContent: "center",
//     // alignItems: "center",
//   },
//   media: {
//     // height: 440,
//     // width: 1500
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: "2rem",
//     // width: 5000,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     // height: 2000
//   },
//   desc: {
//     fontSize: "1.1 rem",
//     color: "#ddd  ",
//   },
// });

// export default function ImageCard(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//     {/* <Grid item xs={12} md= {4}> */}
//       {/* <CardMedia
//         className={classes.media}
//         image={process.env.PUBLIC_URL + "/assets/c1.jpg"}
//         title="Contemplative Reptile"
//       /> */}
//       <CardContent className="image_card" >
//         <Typography
//           gutterBottom
//           variant="h5"
//           component="h1"
//           className={classes.title}
//         >
//           {props.title}
//         </Typography>
//         {/* <Typography
//           variant="body2"
//           color="textSecondary"
//           component="p"
//           className={classes.desc}
//         >
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography> */}
//       </CardContent>
//       {/* </Grid> */}
//     </Card>
//   );
// }

import React from "react";
// import "../../assets/card.css";
import Marquee from "react-fast-marquee";

function ImageCard(props) {
  return (
    <div className="cards">
      <div className="card_style">
        <div className="card_info">
          <h3 className="card_title">{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
