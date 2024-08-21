import React from "react";
import { Table, Label, Icon } from "semantic-ui-react";
import "./ScanResult.css";
function ScanResult({ content }) {
  if (!content || content.length === 0) {
    return <div>No scan results found.</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleString();
  };
  return (
    <div className="table-container">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repository Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Findings</Table.HeaderCell>
            <Table.HeaderCell>Timestamp</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {content.map((item: any, index: number) => (
            <Table.Row key={index}>
              <Table.Cell>{item.repositoryName}</Table.Cell>
              <Table.Cell>{item.scanStatus}</Table.Cell>
              <Table.Cell style={{ fontSize: "2rem" }}>
                <Label style={{ display: "flex" }}>
                  <Icon name="bug" /> {item.findingsCount?.length || 0}
                </Label>
              </Table.Cell>
              <Table.Cell>
                {item.timestamp ? formatDate(item.timestamp) : "No timestamp"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ScanResult;
