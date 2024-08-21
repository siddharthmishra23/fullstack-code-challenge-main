export async function postScanResult(result) {
  console.log(result);
  const response = fetch("http://localhost:3002/submit-repo", {
    method: "POST",
    body: JSON.stringify(result),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = (await response).json();
  if (!response.ok) {
    throw new Error("Failed to update user data");
  } else {
    console.log(resData);
  }
}
