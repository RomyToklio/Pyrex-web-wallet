var config = {
    apiUrl: "https://wallet-api.pyrexcoin.com/",
    mainnetExplorerUrl: "https://explorer.pyrexcoin.com/#/",
    testnetExplorerUrl: "https://explorer.pyrexcoin.com/",
    stagenetExplorerUrl: "https://explorer.pyrexcoin.com/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Pyrexcoin
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Pyrexcoin
    coinSymbol: 'PYX',
    openAliasPrefix: "pyx",
    coinName: 'Pyrex',
    coinUriPrefix: 'Pyrex:',
    addressPrefix: 0xe2386,
    integratedAddressPrefix: 0xe6606,
    subAddressPrefix: 0x146806,
    addressPrefixTestnet: 0x27e386,
    integratedAddressPrefixTestnet: 0x62886,
    subAddressPrefixTestnet: 0xaa886,
    addressPrefixStagenet: 0x276386,
    integratedAddressPrefixStagenet: 0x296806,
    subAddressPrefixStagenet: 0x2de806,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 10, // minimum mixin for hardfork v8 is 10 (ring size 11)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};