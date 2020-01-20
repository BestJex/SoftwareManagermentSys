module.exports = () => { //xml数据结构
    let switchObj = {
        SNetManSwitchConfig: {
            SwitchList: {
                Switch: [{
                    OpMode: 'snmp',
                    CmdQueueThreshold: '100',
                    BaseInfo: {
                        Ip: undefined,
                        SwitchIpUpLayer: undefined,
                        ReadCommunity: 'shga_public',
                        WriteCommunity: 'shga_private',
                        ListenPort: '161',
                    },
                    QOS: {
                        Timeout: 1500,
                        Retry: 1,
                        Threads: 1
                    },
                    IfStatics: {
                        Enable: false,
                        Interval: 60,
                        SyncToMC: false
                    },
                    ProcessTrap: {
                        Delay: 90
                    },
                    UnmanagedPorts: [{
                        // Port: []
                    }],
                    Mib: {
                        // vlanState: {
                        // Enable: true,
                        // Addin: 'h3cs5500vlanaddin.dll'
                        // },
                        // PrivateBridge: {
                        // Enable: true,
                        // Addin: 'h3c-s5500.dll'
                        // }
                    }
                }]
            }
        }
    }

    return switchObj
};