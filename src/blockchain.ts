type Address = string;
type Amount = number;

interface Transaction {
  recipient: Address;
  sender : Address;
  amount: Amount;
}

interface Block {
  timestamp: number;
  hash: string
  previousBlockHash: string;
  nonce: number;
  transactions: Transaction[];
}

export class Blockchain {
  pendingTransactions: Transaction[];
  chain: Block[];

  constructor() {
    this.pendingTransactions = [];
    this.chain = [];
  }

  addNewBlock(previousBlockHash: string, hash: string, nonce: number): void {
    const block = {
      timestamp: Date.now(),
      hash,
      previousBlockHash,
      nonce,
      transactions: this.pendingTransactions
    };
    this.chain.push(block);
    this.cleanTransactions();
  }

  cleanTransactions() {
    this.pendingTransactions = [];
  } 
}
