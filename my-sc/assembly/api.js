async function GetString()
{
    const str = await fetch("https://test.massa.net/api/v2" , {
        method: "POST",
        header: {
            'Content-Type': 'application/json',
            'User-Agent': 'PostmanRuntime/7.29.2',
            'Accept' : '*/*',
            'Accept-Encoding': 'gzip, deflate, br'

        },
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "{{METHOD}}",
            "params": [
                {
                    "start": {
                        "period": 104432,
                        "thread": 1
                    },
                    "end": null,
                    "emitter_address": "A1PgQszswocpFVMKs6NRk35csWf4WxMVTEQAsNxv1zfnxFZY6on",
                    "original_caller_address": null,
                    "original_operation_id": null,
                    "is_final": true
                }
            ]
        })
    })}

console.log(GetString())