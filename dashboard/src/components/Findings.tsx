import React from "react";
import { Table } from "semantic-ui-react";

function Findings({ findings }) {
  if (!findings || findings.length === 0) {
    return <div>No findings to display.</div>;
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
}

export default Findings;
