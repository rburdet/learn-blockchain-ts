import { Blockchain } from '../src/blockchain';

describe('Blockchain', () => {
  describe('Constructor', () => {
    it('Should create a blockchain with no blocks in it', () => {
      const blockchain = new Blockchain();
      expect(blockchain.chain.length).toBe(1);
    });

    it('Should create a blockchain with no pendingTransaction in it', () => {
      const blockchain = new Blockchain();
      expect(blockchain.pendingTransactions.length).toBe(0);
    });
  });

  describe('addNewBlock', () => {
    it('Should add new block to the blockchain', () => {
      const blockchain = new Blockchain();
      blockchain.addNewBlock('0', 'AAA', 10);
      blockchain.addNewBlock('AAA', 'BBB', 10);
      expect(blockchain.chain.length).toBe(3);
    });

    it('Should clean pending transactions', () => {
      const blockchain = new Blockchain();
      blockchain.addNewBlock('0', 'AAA', 10);
      expect(blockchain.pendingTransactions.length).toBe(0);
    });

    it('Should throw an error if the new block does not reference the last block', () => {
      const blockchain = new Blockchain();
      blockchain.addNewBlock('0', 'AAA', 10);
      expect(() => blockchain.addNewBlock('0', 'BBB', 10)).toThrow('There is no previous hash to reference');
      expect(blockchain.chain.length).toBe(2);
    })
  });
});
