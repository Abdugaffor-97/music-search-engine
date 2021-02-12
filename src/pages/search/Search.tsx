import React, { useState, useEffect } from "react";
// import { ISearchInterface } from "../../types/interfaces";
import SingleMusic from "../../components/single_music";
import InputBase from "@material-ui/core/InputBase";

import Progress from "../../common/Progress";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";

export default function Search() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });

        if (!res.ok) throw Error("Something went wrong");

        const result = await res.json();
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + searchQuery
    );
  });

  return (
    <div className={classes.grow}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {data && data.length > 0 && <Progress />}
        </Grid>
      </Grid>
    </div>
  );
}
