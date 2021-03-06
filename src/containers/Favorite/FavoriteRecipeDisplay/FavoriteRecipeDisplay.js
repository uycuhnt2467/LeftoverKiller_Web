import React from "react";
import { Link } from "react-router-dom";
import classes from "./FavoriteRecipeDisplay.module.css";

const FavoriteRecipeDisplay = (props) => {
    let link_string = "/recipe/" + props.recipe_id;
    return (
        <div className={classes.item} key={props.recipe_id}>
            <span  className={classes.imgSize}>
                <Link to={link_string}>
                    <img
                        className={classes.imgRe}
                        src={props.image_url}
                        alt="lalala"
                    />
                </Link>
            </span>
            <div>
                <p className={classes.p}>{props.recipe_name}</p>
            </div>
        </div>
    );
};

export default FavoriteRecipeDisplay;
