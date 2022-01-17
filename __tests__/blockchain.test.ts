import { Blockchain } from '../src/blockchain';

describe('Blockchain', () => {
  it('Should create a blockchain with no blocks in it', () => {
    const blockchain = new Blockchain();
    expect(blockchain.chain.length).toBe(0);
  });

  it('Should create a blockchain with no pendingTransaction in it', () => {
    const blockchain = new Blockchain();
    expect(blockchain.pendingTransactions.length).toBe(0);
  });
})
