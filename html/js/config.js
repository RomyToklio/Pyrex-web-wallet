var config = {
    apiUrl: "http://pyrex-wallet.tokl.io:1984/",
    mainnetExplorerUrl: "http://pyrex-explorer.tokl.io:8081/",
    testnetExplorerUrl: "http://pyrex-explorer.tokl.io:8082/",
    stagenetExplorerUrl: "http://pyrex-explorer.tokl.io:8083/",
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
    addressPrefixTestnet: 53,
    integratedAddressPrefixTestnet: 54,

    subAddressPrefixTestnet: 63,
    addressPrefixStagenet: 24,
    integratedAddressPrefixStagenet: 25,
    subAddressPrefixStagenet: 36,
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
