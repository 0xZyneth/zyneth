import { getConfig } from '@zyneth/ponder/config'
import { http } from 'viem'

const PONDER_RPC_URL_8453 = process.env.PONDER_RPC_URL_8453

if (!PONDER_RPC_URL_8453) {
  throw new Error('PONDER_RPC_URL_8453 env var is required')
}

export default getConfig(http(PONDER_RPC_URL_8453))
