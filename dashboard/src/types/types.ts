export interface Position {
  begin: {
    line: number;
  };
}

export interface Location {
  path: string;
  positions: Position;
}

export interface Metadata {
  description: string;
  severity: string;
}

export interface Finding {
  type: string;
  ruleId: string;
  location: Location;
  metadata: Metadata;
}

export interface Item {
  repositoryName: string;
  scanStatus: string;
  findingsCount: Finding[];
  timestamp: string;
}

export interface ScanResultProps {
  content: Item[];
  onSelect: (findingsCount: Finding[]) => void;
}
