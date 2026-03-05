import { createConfig } from 'ponder'
import type { HttpTransport } from 'viem'
import { ERC4626Abi } from './abis/ERC4626Abi'

// Vault addresses will be populated once deployed
// Example: AI narrative vault, RWA vault, ZK vault
export const getConfig = (rpc: HttpTransport) => {
  return createConfig({
    chains: {
      mainnet: {
        id: 1,
        rpc,
      },
    },
    contracts: {
      ZynethVault: {
        chain: 'mainnet',
        abi: ERC4626Abi,
        // Placeholder addresses - update with deployed vault contracts
        address: [],
        startBlock: 0,
      },
    },
  })
}
