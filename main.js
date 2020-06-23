document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kgIp').addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible';
    let Kg = e.target.value;
    var gm = Kg * 1000;  
    var oz = Kg * 35.274;
    var lbs = Kg * 2.20462;
    gm = gm.toString();
    oz = oz.toString();
    lbs = lbs.toString();
    gm = gm.concat(" gm");
    oz = oz.concat(" oz");
    lbs = lbs.concat(" lbs");
    document.getElementById('gramsOP').innerHTML=gm;
    document.getElementById('ounceOP').innerHTML=oz;
    document.getElementById('poundOP').innerHTML=lbs;
});


