// const { getContext, updateContext, invokeAgent } = require('../src/client'); // ← for real
const { getContext, updateContext, invokeAgent } = require('../src/mockClient'); // ← dev mode

const AGENT_ID = 'mock-agent';

(async () => {
  try {
    console.log('Fetching context...');
    const context = await getContext(AGENT_ID);
    console.log('Context:', context);

    console.log('Updating context...');
    const update = await updateContext(AGENT_ID, { key: 'goal', value: 'build-context' });
    console.log('Update Result:', update);

    console.log('Invoking agent...');
    const result = await invokeAgent(AGENT_ID, 'start-analysis');
    console.log('Invocation Result:', result);
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
