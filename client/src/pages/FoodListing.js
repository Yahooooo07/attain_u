import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFood, sortFood } from "../actions/food";
import {
  Grid,
  Typography,
  Paper,
  InputBase,
  makeStyles,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import FoodListingGrid from "../components/reusableComponents/FoodListingGrid";
import { Image } from "semantic-ui-react";
import Loader from "react-loader-spinner";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    backgroundColor: "#FFC629",
    minHeight: "100vh",
  },
  borderSections: {
    borderBottom: "3px solid black",
    width: "100%",
    paddingTop: 20,
  },
  flexGrid: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 10,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#123C69",
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 20,
  },
  searchBarGrid: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      margin: 25,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  root: {
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    flexBasis: null,
    width: 500,
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  foodMap: {
    padding: 50,
    width: "100%",
  },
  loaderGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 150,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    minWidth: "100px",
  },
}));

const FoodListing = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state);
  const classes = useStyles();
  const [foodSearch, setSearchedFood] = useState("");
  const [sortVal, setSortVal] = React.useState("");

  useEffect(() => {
    if (!localStorage.getItem("attainUToken")) {
      history.push("/login");
    } else {
      dispatch(getFood());
    }
  }, [dispatch]);

  const onChange = (event) => {
    setSearchedFood(event.target.value);
  };

  const handleChange = (event) => {
    let val = "";
    setSearchedFood("");
    setSortVal(event.target.value);
    if (event.target.value === "High to Low") {
      val = "high";
    } else {
      val = "low";
    }
    dispatch(sortFood(val));
  };

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Grid className={classes.mainGrid}>
      {console.log(store.FoodReducer.foodListings)}
      <Grid className={classes.borderSections} />
      <Grid className={classes.flexGrid}>
        <Image src={logo} className={classes.logo} />
        <Typography variant="h4" className={classes.mainText}>
          Top Listed Popular Dishes in India
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </Grid>
      <Grid className={classes.borderSections} />

      <Grid className={classes.searchBarGrid}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search for a Food Name"
            inputProps={{ "aria-label": "search food" }}
            onChange={onChange}
            value={foodSearch}
          />
        </Paper>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortVal}
            onChange={handleChange}
          >
            <MenuItem value={"High to Low"}>High To Low</MenuItem>
            <MenuItem value={"Low to High"}>Low to High</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid container spacing={5} className={classes.foodMap}>
        {store.FoodReducer && store.FoodReducer.foodListings.length !== 0 ? (
          store.FoodReducer.foodListings
            .filter(
              (food) =>
                food.food_name
                  .toLowerCase()
                  .includes(foodSearch.toLowerCase()) ||
                food.restaurant_name
                  .toLowerCase()
                  .includes(foodSearch.toLowerCase()) ||
                food.restaurant_place
                  .toLowerCase()
                  .includes(foodSearch.toLowerCase()) ||
                food.restaurant_cuisine
                  .toLowerCase()
                  .includes(foodSearch.toLowerCase())
            )
            .map((searchedFood) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={searchedFood.food_id}
                >
                  <FoodListingGrid
                    foodId={searchedFood.food_id}
                    foodName={searchedFood.food_name}
                    restaurantName={searchedFood.restaurant_name}
                    location={searchedFood.restaurant_place}
                    cuisineType={searchedFood.restaurant_cuisine}
                    costForTwo={searchedFood.restaurant_price}
                  />
                </Grid>
              );
            })
        ) : (
          <Grid className={classes.loaderGrid}>
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={250}
              width={250}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default FoodListing;
