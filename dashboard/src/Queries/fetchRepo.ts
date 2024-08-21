import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({});
export async function postScanResult(result) {
  const response = await fetch("http://localhost:3002/submit-repo", {
    method: "POST",
    body: JSON.stringify(result),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurered while adding the data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const resData = await response.json();
  return resData;
}
export async function fetchFindings() {
  const response = await fetch("http://localhost:3002/findings");

  if (!response.ok) {
    const error = new Error("An Error occured while fetching the result");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const result = await response.json();

  return result;
}
