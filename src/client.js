const axios = require('axios');

const BASE_URL = 'https://aci.dctx.ai'; // Replace with actual endpoint

async function getContext(agentId) {
  const { data } = await axios.get(`${BASE_URL}/agents/${agentId}/context`);
  return data;
}

async function updateContext(agentId, payload) {
  const { data } = await axios.post(`${BASE_URL}/agents/${agentId}/context`, payload);
  return data;
}

async function invokeAgent(agentId, action) {
  const { data } = await axios.post(`${BASE_URL}/agents/${agentId}/invoke`, { action });
  return data;
}

module.exports = {
  getContext,
  updateContext,
  invokeAgent
};
