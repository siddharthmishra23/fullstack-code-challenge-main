import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFindings } from "../Queries/fetchRepo";
import ScanResult from "./ScanResult";
import Findings from "./Findings";
import "./Details.css";

interface Finding {
  ruleId: string;
  location: {
    path: string;
    positions: {
      begin: {
        line: number;
      };
    };
  };
  metadata: {
    description: string;
    severity: string;
  };
}

interface ScanResultProps {
  content: Finding[]; // Adjust based on actual data structure returned by the API
  onSelect: (findings: Finding[]) => void;
}
const Details: React.FC = () => {
  // If findings can be null initially, define the state with proper typing
  const [selectedFindings, setSelectedFindings] = useState<Finding[] | null>(
    null
  );

  const { data, isLoading } = useQuery<Finding[]>({
    queryKey: ["details"],
    queryFn: fetchFindings,
    staleTime: 1000,
  });

  const handleSelectFindings = (findings: Finding[]) => {
    setSelectedFindings(findings);
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <ScanResult content={data || []} onSelect={handleSelectFindings} />
      <Findings findings={selectedFindings || []} />
    </div>
  );
};

export default Details;
