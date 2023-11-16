import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-baguette-bridge';

const tokens = [
  new Token(ChainId.ARBITRUM, '0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1', 18, 'SHIBX'),
  new Token(ChainId.AVALANCHE, '0x440aBbf18c54b2782A4917b80a1746d3A2c2Cce1', 18, 'SHIBX'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: '0x2f05FB1519f05651078Ba35D792a9A64DEE17345',
  },
];

export const mainnet = {tokens, proxy};
