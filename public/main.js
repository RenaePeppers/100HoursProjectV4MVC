document.getElementById('see-results').addEventListener('click', calcGoalWeight);

function calcGoalWeight() {
    let startWeight=document.querySelector('#start-weight').value;
    let dailyDefGoal=document.querySelector('#deficit-goal').value;
    let dbusername=document.querySelector('#user-name').value;
    goalWeight = startWeight - dailyDefGoal*35/3500;
    console.log(startWeight);
    console.log(goalWeight);
    document.querySelector('#startWeightOut').innerText =startWeight
    document.querySelector('#calDefOut').innerText=dailyDefGoal
    document.querySelector('#goal-weight-output').innerText=goalWeight

    goalArray=[]
    for(i=0; i<=35; i++){
       goalArray[i]=startWeight-i*dailyDefGoal/3500
    }
    //let weekArray=goalArray
    goalChart.data.datasets[0].data=goalArray
    goalChart.update();
}
   
