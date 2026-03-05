import { index, onchainTable } from 'ponder'

export const vaultDeposit = onchainTable(
  'vault_deposit',
  (t) => ({
    id: t.text().primaryKey(),
    vault: t.hex().notNull(),
    sender: t.hex().notNull(),
    owner: t.hex().notNull(),
    assets: t.bigint().notNull(),
    shares: t.bigint().notNull(),
    chainId: t.integer().notNull(),
    blockNumber: t.integer().notNull(),
    timestamp: t.timestamp({ withTimezone: true }).notNull(),
    txnHash: t.hex().notNull(),
  }),
  (t) => ({
    vaultIdx: index('vault_deposit_vault_idx').on(t.vault),
    ownerIdx: index('vault_deposit_owner_idx').on(t.owner),
  }),
)

export const vaultWithdraw = onchainTable(
  'vault_withdraw',
  (t) => ({
    id: t.text().primaryKey(),
    vault: t.hex().notNull(),
    sender: t.hex().notNull(),
    receiver: t.hex().notNull(),
    owner: t.hex().notNull(),
    assets: t.bigint().notNull(),
    shares: t.bigint().notNull(),
    chainId: t.integer().notNull(),
    blockNumber: t.integer().notNull(),
    timestamp: t.timestamp({ withTimezone: true }).notNull(),
    txnHash: t.hex().notNull(),
  }),
  (t) => ({
    vaultIdx: index('vault_withdraw_vault_idx').on(t.vault),
    ownerIdx: index('vault_withdraw_owner_idx').on(t.owner),
  }),
)

export const vaultSnapshot = onchainTable(
  'vault_snapshot',
  (t) => ({
    id: t.text().primaryKey(),
    vault: t.hex().notNull(),
    totalAssets: t.bigint().notNull(),
    totalShares: t.bigint().notNull(),
    sharePrice: t.bigint().notNull(),
    blockNumber: t.integer().notNull(),
    timestamp: t.timestamp({ withTimezone: true }).notNull(),
  }),
  (t) => ({
    vaultIdx: index('vault_snapshot_vault_idx').on(t.vault),
  }),
)
