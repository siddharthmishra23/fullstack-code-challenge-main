import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchRepo from "../Queries/fetchRepo";
function Details() {
  // pass caching key
  const results = useQuery(["details", id], fetchRepo);
  if (results.isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }
  const repo = results.data;
  return <div>Details</div>;
}

export default Details;
