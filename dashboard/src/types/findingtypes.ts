export interface Position {
  line: number;
}

export interface Location {
  path: string;
  positions: {
    begin: Position;
  };
}

export interface Metadata {
  description: string;
  severity: string;
}

export interface Finding {
  ruleId: string;
  location: Location;
  metadata: Metadata;
}

export interface FindingsProps {
  findings: Finding[];
}
