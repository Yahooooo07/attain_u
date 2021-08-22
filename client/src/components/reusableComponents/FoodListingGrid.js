import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card } from "@material-ui/core";
import { Image } from "semantic-ui-react";

const useStyles = makeStyles(() => ({
  main: {
    boxShadow: "0px 10px 20px #c8cbcc",
    zIndex: "2",
  },
  card: {
    flexWrap: "wrap",
    overflowWrap: "break-word",
  },
  foodImage: {
    width: "100%",
    height: "250px",
  },
  mainFont: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 12,
  },
}));

const FoodListingGrid = ({
  foodId,
  foodName,
  restaurantName,
  location,
  cuisineType,
  costForTwo,
}) => {
  const [img] = useState(
    foodId && {
      img: require(`../../images/${foodId}.PNG`),
    }
  );
  const classes = useStyles();

  return (
    <Card className={classes.main}>
      <div>
        <Card className={classes.card}>
          {foodId && (
            <Image src={img.img.default} className={classes.foodImage} />
          )}
          <Typography className={classes.mainFont}>
            Name : {foodName}
          </Typography>
          <Typography className={classes.mainFont}>
            Restaurant : {restaurantName}
          </Typography>
          <Typography className={classes.mainFont}>
            Location : {location}
          </Typography>
          <Typography className={classes.mainFont}>
            Cuisine : {cuisineType}
          </Typography>
          <Typography className={classes.mainFont}>
            Restaurant Cost for Two: {costForTwo}
          </Typography>
        </Card>
      </div>
    </Card>
  );
};

export default FoodListingGrid;
