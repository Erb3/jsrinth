import axios from "axios";

interface nodeStatsResponse {
  projects: number,
  versions: number,
  files: number,
  authors: number,
}

async function getNodeStats(): Promise<nodeStatsResponse> {
  const response = await axios.get("https://api.modrinth.com/v2/statistics");
  return response.data;
}

export { getNodeStats, nodeStatsResponse };