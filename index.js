function calculate(){
    var midtermNote = document.getElementById("midterm").value;
    var finalNote = document.getElementById("final").value;
    var calculateBtn = document.getElementById("calculate");

    var calculate = 0.4 * midtermNote + 0.6 * finalNote;
    console.log(calculate);


    if(calculate >= 90 && calculate <= 100){
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> AA";
    }
    else if (calculate >= 75 && calculate < 90) {
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> BA";
    }
    else if (calculate >= 65 && calculate < 75) {
        console.log(calculate);
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> BB";
    }
    else if (calculate >= 55 && calculate < 65) {
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> CB";
    }
    else if (calculate >= 50 && calculate < 55) {
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> CC";
    }
    else if (calculate >= 45 && calculate < 50) {
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> DC";
    }
    else if (calculate >= 40 && calculate < 45) {
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> DD";
    }
    else{
        document.getElementById("result").innerHTML = "Average :" + calculate + "=> FF";
    }  
    

}