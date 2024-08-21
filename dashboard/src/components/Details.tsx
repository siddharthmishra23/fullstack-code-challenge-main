import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFindings } from "../Queries/fetchRepo";
import ScanResult from "./ScanResult";
import Findings from "./Findings";
import "./Details.css";

function Details() {
  // pass caching key
  const { data, isLoading, isError } = useQuery({
    queryKey: ["details"],
    queryFn: fetchFindings,
    staleTime: 1000,
  });

  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <ScanResult content={data} />
      <Findings content={data} />
    </div>
  );
}

export default Details;
