// const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const { exit } = require('process');
const app = require('express')();
const PORT = process.env.PORT || 8080 ; 
const cors = require('cors')
var cron = require('node-cron');
const request = require('request');


app.use(cors())
app.listen(PORT,()=>console.log("Listening !"))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'data.json'));
    
  })
//console.time('Time') 30 // 16 
cron.schedule('20 16 * * *', () => { 
  let date_ob = new Date();
  let datenow = ("0" + date_ob.getDate()).slice(-2)
  GetData(datenow);
  console.log("testing")
},{
  scheduled: true,
  timezone: "Africa/Casablanca"
});


 GetData(GetTodayDate());
 function GetTodayDate(){
   let date_ob = new Date();
   return ("0" + date_ob.getDate()).slice(-2)
 }



async function GetTableData(selector ,obj,$ ){
  $(selector).each((index, element) => {
    let Data = $(element).text().trim().replace(/^\s*\n/gm,'').split("\n") //remove blink lines 
     TmpObj =  {NewCases : Number(Data[1] || 0) , DeathCases : Number(Data[2] || 0)};
      obj.City[Data[0]] = TmpObj ;
     });

}

async function GetData(datenow){
  request("https://covid.hespress.com/fr",(error,response,html)=>{
         const $ = cheerio.load(html)

          let Date = $('div.col-9 > span').text()
          
          if(datenow !== Date.replace( /^\D+/g, '').slice(0,2) ){
            setTimeout(()=>{
              GetData(datenow)
              console.log("ourdate makatsawich date dyal getdata")
            },10000)
              return ;
          }
          
          
         

    //       let Doses = $('body > div > div.row > div:nth-child(3) > div > div > h4').text().replace(/^\s*\n/gm,'').trim().split('\n')
    // console.log(Doses)
            let NewCases = Number($('div.col-3.text-right > span').text())
            let TotalCasesConfirmed = Number($('div:nth-child(4) > div > div.card-body.pb-2 > div > div.col-7.text-right > h4').text());
            let DeathCases = Number($('div.col-8.text-right > span').text())
            let TotalDeathCases = Number($('body > div > div.row > div:nth-child(7) > div > div.card-body.pb-2 > div > div.col-7.text-right > h4').text());
            let Recovery = Number($('body > div > div.row > div:nth-child(6) > div > div.card-footer > div > div.col-6.text-right > span').text())
            let TotalRecovery = Number($('body > div > div.row > div:nth-child(6) > div > div.card-body.pb-2 > div > div.col-7.text-right > h4').text())
            let CaseFatalityRate = Number($('body > div > div.row > div:nth-child(7) > div > div.card-footer > div > div.col-4 > span').text().slice(0,-1))
            let CaseRecoveryRates = Number($('body > div > div.row > div:nth-child(6) > div > div.card-footer > div > div:nth-child(1) > span').text().slice(0,-1))
            let ActiveCases = Number($('body > div > div.row > div:nth-child(8) > div > div.card-body.pb-2 > div > div.col-7.text-right > h4').text())
            let Test24h = Number($('body > div > div.row > div:nth-child(5) > div > div.card-footer > div > div.col-6.text-right > span').text())
            let TotalTest = Number($('body > div > div.row > div:nth-child(5) > div > div.card-body.pb-2 > div > div.col-7.text-right > h4').text())
             /*console.log(NewCases+"\n"+TotalCasesConfirmed+"\n"+DeathCases+"\n"+TotalDeathCases+"\n"+Recovery+"\n"+TotalRecovery+"\n"+CaseRecoveryRates+"\n"+CaseFatalityRate
            +"\n"+ ActiveCases+"\n"+Test24h+"\n"+TotalTest  )*/
              
            // for(i=0;i<3;i++){
            //   Doses[i] = Number(Doses[i].slice(9).replace(/\s/g,''))
            // }
            
            
            let obj = {Cases : {NewCases : NewCases, TotalCasesConfirmed:TotalCasesConfirmed} , Deaths :{NewDeathCases : DeathCases , TotalDeaths : TotalDeathCases } , RecoveryCases : {NewRecovery : Recovery  , TotalRecovered : TotalRecovery},
           // Doses : {Dose1 :Doses[0] ,Dose2 : Doses[1],Dose3 : Doses[2] },
  Tests : {Test24h : Test24h,TotalTest:TotalTest } , ActiveCases:ActiveCases ,
          CaseFatalityRate : CaseFatalityRate , CaseRecoveryRates:CaseRecoveryRates , Region :{},City:{}}
           
           //add Region data
           
            $("body > div > div.row > div:nth-child(17) > div > div.card-body.pt-0.pb-0 > table > tbody > tr ").each((index, element) => {
            let RegionData = $(element).text().trim().replace(/^\s*\n/gm,'').split("\n")
             TmpObj =  {NewCases : Number(RegionData[1]) , DeathCases : Number(RegionData[2] || 0)};
              obj.Region[RegionData[0]] = TmpObj ;
             });
            
             for (let i = 1 ; i<13 ; i++){
                 i = ("0" + i).slice(-2); // if x => 0X else XY => 0XY => slice(-2) => XY ✔️
               GetTableData("#region_ma"+i+" > div.card-body.pt-0.pb-0 > table > tbody > tr",obj,$)
             }
            
               
      
          
                fs.writeFile('data.json', JSON.stringify(obj), 'utf8', ()=>{
                 console.log("done");
                 //console.timeEnd('Time')
                 });
  })
         

}