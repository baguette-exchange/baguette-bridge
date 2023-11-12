import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-baguette-bridge';

const tokens = [
  new Token(ChainId.FUJI, '0x6B23b44032eeabE2d4B543Fd043458a1f4a97C67', 18, 'SHIBX'),
  new Token(ChainId.ARBITRUM_GOERLI, '0x13A60f9bb70adcF2D72b8132e6F011AbeFA68490', 18, 'SHIBX'),
];

const proxy = [
  {
    chainId: ChainId.FUJI,
    address: '0x1589a034c8698FE7381364d1b0eE0e1E8a0bA369',
  },
];

export const testnet = {tokens, proxy};
