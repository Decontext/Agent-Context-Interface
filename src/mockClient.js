async function getContext(agentId) {
  return {
    agentId,
    context: {
      status: 'idle',
      goal: 'mock goal',
    },
  };
}

async function updateContext(agentId, payload) {
  return {
    agentId,
    updated: payload,
    message: 'Context updated (mock)',
  };
}

async function invokeAgent(agentId, action) {
  return {
    agentId,
    action,
    result: `Invoked ${action} successfully (mock)`,
  };
}

module.exports = {
  getContext,
  updateContext,
  invokeAgent,
};
