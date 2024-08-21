import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFindings } from "../Queries/fetchRepo";
import ScanResult from "./ScanResult";
import Findings from "./Findings";
import "./Details.css";

function Details() {
  const [selectedFindings, setSelectedFindings] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: fetchFindings,
    staleTime: 1000,
  });
  const handleSelectFindings = (findings) => {
    setSelectedFindings(findings);
  };
  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <ScanResult content={data} onSelect={handleSelectFindings} />
      <Findings findings={selectedFindings} />
    </div>
  );
}

export default Details;
