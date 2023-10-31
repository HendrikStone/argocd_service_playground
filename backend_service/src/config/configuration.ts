export default () => ({
  port: parseInt(process.env.port, 10) || 3000,
  key: process.env.key || 'not set',
});
