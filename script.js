// fetch('https://api.openweathermap.org/data/2.5/weather?q=London&apiKey=b7666d66337f12ac460752375bcc5c9d')
// .then((res)=>res.json())
// 	.then(data=>{
//         console.log(data);
//         console.log(data.coord)

//         let res=  `<h2>Headline</h2>`;
// 					res+=`<h4>Headline  ${data.main.temp}</h4>`;
// 				 document.getElementById('id1').innerHTML = res;
				 
				 
				
//     })
    
    function post(url){
        console.log(url)
        fetch(url).then((res)=>res.json())
        .then(data=>{
            let result;
            console.log('ddddddddddddddddddS',data)
            result=`${data.main.temp}&#8451;
            `;
            document.getElementById('id1').innerHTML=result;
            document.getElementById('side-temp').innerHTML=`${data.main.temp}&#8451`;
            document.getElementById('location').innerHTML=`${data.name}`;
            document.getElementById('main-stats').innerHTML=`${data.weather[0].description}`
            document.getElementById('humadity').innerHTML=`${data.main.humidity}%`;
        });
    }
function enter(elem,value){
    if(event.keyCode == 13){
        getPost(value);
    }
}
    function getPost(a){
        console.log(a)
        // let a=document.getElementById('search-location').value;
        var key='75587329b461717ad9368ea1869f7a39';
        if(a=="" || a==" ")
        
            alert("enter value");
            else{
                if(a.length > 0)
			    {
				    url=`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&apiKey=b7666d66337f12ac460752375bcc5c9d`;				
                    var dsproxylink=`https://cors-anywhere.herokuapp.com/`
                    forecast=`https://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7`;
                    // url=`${dsproxylink}https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;
                    post(url);
                    console.log('ssssssssss',url);
                    // post(forecast);
			    }
            }
    }