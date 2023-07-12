function calculateMetricWeight(lbs) {
    var weight = lbs*0.45359237;
    return weight;
}

function calculateMetricHeight(feet, inches) {
    var totalInches = feet*12+parseInt(inches);
    var height = totalInches*2.54;
    return height;
}

function calculateREE(kg, cm, age, gender) {
    if (gender == 1) {
        var ree = 10*kg+6.25*cm-5*age+5;
    } else if (gender == 2) {
        var ree = 10*kg+6.25*cm-5*age-161;
    }
    return ree;
}

function calculateTDEE(ree, activityLevel) {
    var tdee = ree*activityLevel;
    return tdee;
}

function goalCalories(tdee, goal) {
    if (goal == 1) {
        var calories = tdee;
    } else if (goal == .1) {
        var calories = tdee+tdee*0.1;
    } else if (goal == .2) {
        var calories = tdee-tdee*0.2;
    }
    return calories;
}

function calculateProtein(calories) {
    var protein = calories*0.4/4;
    return protein;
}

function calculateCarbs(calories) {
    var carbs = calories*0.3/4;
    return carbs;
}

function calculateFat(calories) {
    var fat = calories*0.3/9;
    return fat;
}

function eventListenerAction() {
    var weightImperial = document.getElementById("weight").value;
    var heightFeet = document.getElementById("feetHeight").value;
    var heightInches = document.getElementById("inchesHeight").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var activityLevel = document.getElementById("activityLevel").value;
    var goal = document.getElementById("goal").value;
    var weight = calculateMetricWeight(weightImperial);
    var height = calculateMetricHeight(heightFeet, heightInches);
    var ree = calculateREE(weight, height, age, gender);
    var tdee = calculateTDEE(ree, activityLevel);
    var calories = goalCalories(tdee, goal);
    var protein = calculateProtein(calories);
    var carbs = calculateCarbs(calories);
    var fat = calculateFat(calories);

    document.getElementById("calResults").innerText = Math.round(calories);
    document.getElementById("proResults").innerText = Math.round(protein) + "g";
    document.getElementById("carbResults").innerText = Math.round(carbs) + "g";
    document.getElementById("fatResults").innerText = Math.round(fat) + "g";
}

const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
    submitBtn.addEventListener("click", eventListenerAction);
}