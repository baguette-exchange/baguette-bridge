import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-baguette-bridge';

const tokens = [
  new Token(ChainId.ARBITRUM, '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07', 18, 'SHIBX'),
  new Token(ChainId.AVALANCHE, '0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd', 18, 'SHIBX'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
  },
];

export const mainnet = {tokens, proxy};
