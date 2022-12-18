const table = document.getElementById("table");
fetch("https://a-d-i-t-h-y-a.github.io/request/req.json")
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        return new Error("ERRRRROR")
    }
}).then((value)=>{
    let jsonval = value["Employees"];
    let keys = Object.keys(jsonval[0]);
    let row1 = table.insertRow(0);
    for(let i = 0;i<keys.length;i++){
        let cell = row1.insertCell(i)
        cell.innerHTML = keys[i]
    }
    for(let i = 1;i<(jsonval.length+1);i++){
        let row = table.insertRow(i);
        for(let j = 0;j<keys.length;j++){
            if(jsonval[i-1][keys["Salary"]]<50000)
                break;
            else if(jsonval[i-1]["DateOfJoining"].split("-")[1]!=12)
                break;
            let cell = row.insertCell(j);
            cell.innerHTML = jsonval[i-1][keys[j]];
        }
    }
}).catch((err)=>{
    console.log(new Error("An Error Occured"))
})