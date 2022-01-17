type Address = string;
type Amount = number;

interface Transaction {
  recipient: Address;
  sender: Address;
  amount: Amount;
}

interface Block {
  timestamp: number;
  hash: string;
  previousBlockHash: string;
  nonce: number;
  transactions: Transaction[];
}

const firstBlockHash = '0';

export class Blockchain {
  pendingTransactions: Transaction[];
  chain: Block[];

  constructor() {
    this.pendingTransactions = [];
    this.chain = [];
    this.addNewBlock('', firstBlockHash, 0);
  }

  addNewBlock(previousBlockHash: string, hash: string, nonce: number): void {
    const block = {
      timestamp: Date.now(),
      hash,
      previousBlockHash,
      nonce,
      transactions: this.pendingTransactions,
    };

    if (this.chain.length && this.chain[this.chain.length - 1].hash !== previousBlockHash)
      throw new Error('There is no previous hash to reference');
    this.chain.push(block);
    this.cleanTransactions();
  }

  cleanTransactions() {
    this.pendingTransactions = [];
  }
}
