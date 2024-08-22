import React from "react";
import { Table } from "semantic-ui-react";
import { FindingsProps } from "../types/findingtypes";

const Findings: React.FC<FindingsProps> = ({ findings }) => {
  if (!findings || findings.length === 0) {
    return (
      <div
        style={{
          color: "#0b19d8c1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        No findings to display.
      </div>
    );
  }

  return (
    <div className="table-container">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rule ID</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Severity</Table.HeaderCell>
            <Table.HeaderCell>Path</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {findings.map((finding, index) => (
            <Table.Row key={index}>
              <Table.Cell style={{ width: "8rem" }}>
                {finding.ruleId}
              </Table.Cell>
              <Table.Cell>{finding.metadata.description}</Table.Cell>
              <Table.Cell>{finding.metadata.severity}</Table.Cell>
              <Table.Cell>{`${finding.location.path}:${finding.location.positions.begin.line}`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Findings;
