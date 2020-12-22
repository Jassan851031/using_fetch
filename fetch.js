fetch('https://zioz81rzhf.execute-api.us-east-1.amazonaws.com/Development', {
method: 'POST', // or 'PUT'
body:JSON.stringify('Hz65hlyuy0/QwqQY2xgEPt2v/Ke8/bbWLm0PqeWBoeI8JS7gatlNbSfM/p3/FLp3+3NZzSwL90UdbKkd7SVJ6pzaDd5/LCGJR45R1Th/qWSGyTMSqhMW8Q2zEgIVW98m9zYAgADx6SwUljmbzLnEVDkoyKydaFWSAROkFtmzgdstUUtgioeFbign5vzBesV2PszSdxcQpc9PslvELWXYViP5Vlrt7HsSWl1d8cZGAEVPooEPdphFMQ=='), // data can be `string` or {object}!
headers:{
'Content-Type': 'application/json'
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));