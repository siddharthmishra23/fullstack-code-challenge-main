import { QueryClient } from "@tanstack/react-query";

// Define the structure of a finding
interface Finding {
  ruleId: string;
  description: string;
  severity: string;
  path: string;
  line: number;
}

// Define the structure of the scan results
interface ScanResult {
  repositoryName: string;
  status: "Queued" | "In Progress" | "Success" | "Failure";
  findings: Finding[];
}

// Define the structure of the error response
interface ErrorResponse {
  message?: string;
}

// Define a custom error class for handling fetch errors
class CustomError extends Error {
  code?: number;
  info?: ErrorResponse;

  constructor(message: string, code?: number, info?: ErrorResponse) {
    super(message);
    this.code = code;
    this.info = info;
  }
}

// Create a QueryClient instance for React Query
export const queryClient = new QueryClient({});

// Function to post scan results
export async function postScanResult(result: ScanResult) {
  const response = await fetch("http://localhost:3002/submit-repo", {
    method: "POST",
    body: JSON.stringify(result),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorInfo: ErrorResponse = await response.json();
    throw new CustomError(
      "An error occurred while adding the data",
      response.status,
      errorInfo
    );
  }
  return response.json();
}

// Function to fetch findings
export async function fetchFindings() {
  const response = await fetch("http://localhost:3002/findings");

  if (!response.ok) {
    const errorInfo: ErrorResponse = await response.json();
    throw new CustomError(
      "An error occurred while fetching the results",
      response.status,
      errorInfo
    );
  }
  return response.json();
}
