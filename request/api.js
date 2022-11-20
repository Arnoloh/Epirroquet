function GetString() {
    return new Promise((res) => {
        const str = fetch("https://test.massa.net/api/v2/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'User-Agent': 'PostmanRuntime/7.29.2',
                'Accept-Encoding': 'gzip, deflate, br'
    
    
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": 1,
                "method": "get_datastore_entries",
                "params": [[
                    {
                          "address": "A1NcPHTRwNnYBwd7poECHNtxxpLunQx5yHR8eEqmYcLHsjHZVWW",
                          "key": [100,97,116,97],
                    
            }]]
            })
        }).then(data => (data.json()
            .then(txt =>{
                res(txt.result[0].final_value)
            }
            )))
    });
}
function deserializeData(obj){
    let lobj = 0;
    for (let index = 0; index < obj.length; index++) {
        lobj += obj.charAt(index) === ";" ? 1 : 0;
    }
    const data = "";
    const items = obj.split(";");
    items.forEach((e) => {
        if (e.length > 4) {
            const split = e.split(",");
            data.push({
                id: i32.parse(split[0]),
                x: i32.parse(split[1]),
                y: i32.parse(split[2]),
                z: i32.parse(split[3])
            });
        }
    });
    return data;
}

async function main() {
    var request = await GetString()
    var str = ""
    request.forEach(elt => str+= `${String.fromCharCode(elt)}`
        )
    console.log(deserializeData(str))
}

main()