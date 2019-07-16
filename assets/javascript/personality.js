// -------------Start of Quiz --------------//

//variable for quiz stored in an array where each question is its own object 
var prompts = [{
        prompt: '1. I see myself as someone who is reserved',
        trait: "Extraversion",
        class: 'group0',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '2. I see myself as someone who is generally trusting',
        trait: "Agreeableness",
        class: 'group1',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '3. I see myself as someone who tends to be lazy',
        trait: "Conscientiousness",
        class: 'group2',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '4. I see myself as someone whois relaxed, handles stress well',
        trait: "Neuroticism",
        class: 'group3',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '5. I see myself as someone who has few artistic interests',
        trait: "Openness to Experience",
        class: 'group4',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '6. I see myself as someone who is outgoing, sociable',
        trait: "Extraversion",
        class: 'group5',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '7. I see myself as someone who tends to find fault with others',
        trait: "Agreeableness",
        class: 'group6',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: 0
    },
    {
        prompt: '8. I see myself as someone who does a thorough job',
        trait: "Conscientiousness",
        class: 'group7',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '9. I see myself as someone who gets nervous easily',
        trait: "Neuroticism",
        class: 'group8',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    },
    {
        prompt: '10. I see myself as someone who has an active imagination',
        trait: "Openness to Experience",
        class: 'group9',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: 0
    }
]

// For each prompt, create a p tag to hold questions
function createPromptItems() {
    for (var i = 0; i < prompts.length; i++) {
        var inputlVal = prompts[i].prompt;
        var promptsVals = prompts[0].prompt_values;
        var promptsDiv = $(`<div class="questionCon" id="div${i}"></div>`)
        promptsDiv.append(`<p>${inputlVal}</p>`);
        $("#quiz").append(promptsDiv);
        //for each option create a radio button that groups questions together
        for (var x = 0; x < promptsVals.length; x++) {
            var radioVal = prompts[i].prompt_values[x].value;
            var radioWeight = prompts[i].prompt_values[x].weight;
            var inputGroup = i;
            promptsDiv.append(
               `
            <label>
            <input class="form-check-input" name="${inputGroup}" type="radio" value="${radioWeight}">
            <span  value="${radioVal}" name="${inputGroup}">${radioVal}</span>
            </label>
        
          `
            );
            
        }
    }
}
createPromptItems();

// function that stores user answer 
$('#quiz').on('change', '.form-check-input', function () {
    // GET question index out of "name" attribute so we know what question you answered
    const questionIndex = $(this).attr('name');
    // get value out of radio button selected
    const answer = $(this).val();
    // set answer to question's userAnswer property
    prompts[questionIndex].userChoice = parseInt(answer);
    console.log("userChoice" + answer)
    
});

//---------------------------------------RESPONSE / SUBMISSION LOGIC -------------------//   

//Global variables for response function
var eTotal = 0;
var aTotal = 0;
var cTotal = 0;
var nTotal = 0;
var oTotal = 0;

$("#submit-btn").on("click", function(event){ 
    event.preventDefault();
    console.log("results clicked");
    $("#quizForm").hide();
  
    
    eTotal = prompts[0].userChoice + prompts[5].userChoice;
    aTotal = prompts[1].userChoice + prompts[6].userChoice;
    cTotal = prompts[2].userChoice + prompts[7].userChoice;
    nTotal = prompts[3].userChoice + prompts[8].userChoice;
    oTotal = prompts[4].userChoice + prompts[9].userChoice;
    console.log("this is etotal" + eTotal);
    console.log("this is the openess total:" + oTotal + prompts[4].userChoice);

    var resultsArr = [eTotal, aTotal, cTotal, nTotal, oTotal];
    var sortedResults = resultsArr.sort();

    console.log("this is results Arr" + resultsArr)
    console.log("this is sorted Results" + sortedResults)
    $("#resultsP").append(
        `<h4>You Scored ${eTotal} on Extraversion Trait!</h4>
     <br>
     <p>BLAH BLAH BLAH BLAH</p>
     BLAH BALASDLIFJHALSDKJFHALIUFHALKSJDFHALSKDJFH`)
});


// <div id="conscientious">
//         <button type="button" class="btn btn-primary" id="cheersButton">Submit</button>
//         <div id="gif-image"></div>
//        <h1>Drink a Light Beer!</h1>
//            <div id="conscientious-img"></div>
//        <p>You spend a lot of time preparing and finish important tasks right away, you pay attention to detail and enjoy your set schedule.</p>
//        <p>A Light Beer would suit you best for it's refresing taste,low carbs and calories. Still allowing you to relax without taking away from the rest of your day!</p>
//        <!-- <img id="liteBeer" src="https://thumbor.thedailymeal.com/bpgw-cMCPbYL9E56fnPZFl14HbM=/870x565/https://www.thedailymeal.com/sites/default/files/2014/12/12/lightbeertastetestmainhp-coors-miller-heineken-amstel_0.jpg"
//        alt="Lite Beers"> -->
//     </div>
//    <div id="openness-to-experience">
//        <h1>Drink a Sour Beer!</h1>
//            <div id="openness-to-experience-img"></div>
//        <p>You are very open to new ideas and experiences. You love trying new things, tackling new challenges, and thinking about abstract concepts.</p>
//        <p>A sour would suit your need for something different and adventurous. Outside the norm, with a higher ABV and such a diverse flavor options, sours will surely keep you interested.</p>
//    </div>
//    <div id="agreeableness">
//        <h1>Drink a Belgian Wheat!</h1>
//            <div id="agreeableness-img"></div>
//        <p>You are a very empathetic person who cares for others. You enjoy helping and contributing to others happiness and are always there when someone needs assistance.</p>
//        <p>A Belgian Wheat would suit you best for its sweetness and accessibility. A popular people pleaser, the belgian wheat like you is always there when someone needs a little pick me up!</p>
//    </div>
//    <div id="extraversion">
//         <h1>Drink and IPA!</h1>
//         <div id="extraversion-img"></div>
//        <p>You are a very social person. You love being at the center of things, meeting new people and steering the conversation to new things. An IPA, like you is a strong personality that doesn't bite its tongue. They're trendy, chic and will get you feeling nice after just a couple!</p>
//     </div>
//     </div>
//     <div id="neroticism">
//         <h1>Drink a Strout!</h1>
//         <div id="neroticism-img"></div>
//         <p>You are an emotional person, more inclined to feelings of depression or anxiety. It takes you a little while to bounce back after stressful events. And a Stout like you is a little on the dark side, but heavy and warm like a blanket or a hug, it'll wrap itself around you and be just what you need to weather the storm.         </p>
//     </div>