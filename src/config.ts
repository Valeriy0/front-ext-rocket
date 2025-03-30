export default {
    backendBaseUrl: process.env.REACT_APP_BACKEND_BASE_URL || '',
    pollingTimeoutMs: Number(process.env.REACT_APP_POLLING_TIMEOUT_MS) || 30000,
    pollingIntervalMs: Number(process.env.REACT_APP_POLLING_INTERVAL_MS) || 1000,
    solanaNetwork: process.env.REACT_APP_SOLANA_NETWORK || 'mainnet-beta',
    solanaRpcUrl: process.env.REACT_APP_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com'
}; 