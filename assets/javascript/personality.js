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
        var promptsDiv = $(`<div class="questionCon" id="div${i}"></div>`);
        promptsDiv.append(`<p>${inputlVal}</p>`);
        $("#quiz").append(promptsDiv);

        //for each option create a radio button that groups questions together
        for (var x = 0; x < promptsVals.length; x++) {
            var radioVal = prompts[i].prompt_values[x].value;
            var radioWeight = prompts[i].prompt_values[x].weight;
            var inputGroup = i;

            promptsDiv.append(
                `<label>
                <input class="form-check-input" name="${inputGroup}" type="radio" value="${radioWeight}">
                <span  value="${radioVal}" name="${inputGroup}">${radioVal}</span>
                </label>`
            );
        }
    }
};
createPromptItems();

// ------------------------------function that stores user answer 
$('#quiz').on('change', '.form-check-input', function () {
    // GET question index out of "name" attribute so we know what question you answered
    const questionIndex = $(this).attr('name');
    // get value out of radio button selected
    const answer = $(this).val();
    // set answer to question's userAnswer property
    prompts[questionIndex].userChoice = parseInt(answer);
});

//---------------------------------------RESPONSE / SUBMISSION LOGIC -------------------//   
//Global variables for response function
var eTotal = 0;
var aTotal = 0;
var cTotal = 0;
var nTotal = 0;
var oTotal = 0;

//Global function for ajax call
var ajaxGifCall = function (strID) {
    var queryUrl =
        "https://api.giphy.com/v1/gifs/" +
        strID +
        "?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        var gifResults = response.data.images.fixed_height.url;
        var gifImage = $("<img>");
        gifImage.attr("src", gifResults);
        gifImage.attr("class", "giffyResult")
        gifImage.attr("alt", "cheers");
        $("#resultsP").prepend(gifImage);
    });
};

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    $("#quizForm").hide();

    //weight total of each personality trait
    eTotal = prompts[0].userChoice + prompts[5].userChoice;
    aTotal = prompts[1].userChoice + prompts[6].userChoice;
    cTotal = prompts[2].userChoice + prompts[7].userChoice;
    nTotal = prompts[3].userChoice + prompts[8].userChoice;
    oTotal = prompts[4].userChoice + prompts[9].userChoice;

    //array of result totals that can be sorted to find strongest trait -- at last index of 4
    var resultsArr = [eTotal, aTotal, cTotal, nTotal, oTotal];
    var sortedResults = resultsArr.sort(function (a, b) {
        return a - b;
    });
    // default result if all traits are low / less than a weight of 6
    if (sortedResults[4] < 6) {
        ajaxGifCall("3o752gZdDHjObx309W");
        $("#resultsP").append(
            `<h1>You're clearly a Wine person!</h1>
            <br>
            <p>Based on your results, 
            wine would be a better option for you! You enjoy the finer things in life and taking quizzes is not one of them!</p>
            <a href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">
            Click here to learn more about Big 5 Personality Traits</a>`
        )
    }
    //results for Extraversion trait as highest weight
    else if (eTotal === sortedResults[4]) {
        ajaxGifCall("l1J9Ox4goQckiAb1m");
        $("#resultsP").append(
            `<h1>Drink an IPA!</h1>
            <h4>You Scored ${eTotal} out of 10 on Extraversion Trait!</h4>
            <br>
            <p>You are a very social person. You love being at the center of things, meeting new people, and 
            steering the conversation to new things. An IPA, like you is a strong personality that doesn't bite its 
            tongue. IPAs are trendy, chic, and will get you feeling nice after just a couple!</p>
            <a href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">
            Click here to learn more about Big 5 Personality Traits</a>`
        )
    }
    //results for Consciensciousness trait as highest weight
    else if (cTotal === sortedResults[4]) {
        ajaxGifCall("lz4APvJRdLxLBwZOG9");
        $("#resultsP").append(
            `<h1>Drink a Light Beer!</h1>
            <h4>You Scored ${cTotal} out of 10 on Conscientiousness Trait!</h4>
            <br>
            <p>You are detail oriented and enjoy structure. You spend a lot of time preparing and prioritize finishing important tasks.</p>
            <p>A Light Beer would suit you best for it's refresing taste, low carbs, and low calories. 
            A light beer allows you to relax without taking away from the rest of your day!</p>
            <a href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">
            Click here to learn more about Big 5 Personality Traits</a>`
        )
    }
    //results for Openness to New Experience trait as highest weight
    else if (oTotal === sortedResults[4]) {
        ajaxGifCall("BcP32J8pMXAzqEkGDj");
        $("#resultsP").append(
            `<h1>Drink a Sour Beer!</h1>
            <h4>You Scored ${oTotal} out of 10 on Openness to New Experiences Trait!</h4>
            <br>
            <p>You are very open to new ideas and experiences. You love trying new things, tackling new challenges, 
            and thinking about abstract concepts.</p>
            <p>A sour would suit your need for something unique and adventurous. Outside the norm, sours have a higher 
            ABV and such diverse flavors, they will surely keep you interested.</p>
            <a href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">
            Click here to learn more about Big 5 Personality Traits</a>`
        )
    }
    //results for Agreeableness trait as highest weight
    else if (aTotal === sortedResults[4]) {
        ajaxGifCall("ycDclgXI40MGcpA5pK");
        $("#resultsP").append(
            `<h1>Drink a Belgian Wheat or a Tasty Cider!</h1>
            <h4>You Scored ${aTotal} out of 10 on Agreeableness Trait!</h4>
            <br>
            <p>You are a very empathetic person who cares for others. You enjoy helping and contributing to others' 
            happiness and are always there when someone needs assistance.</p>
            <p>These sweet drinks would suit you best for their sweetness and accessibility. A popular people pleaser, 
            the Belgian Wheat like you is always there when someone needs a little pick me up!</p>
            <a href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">
            Click here to learn more about Big 5 Personality Traits</a>`
        )
    }
    //results for Neuroticism trait as highest weight
    else if (nTotal === sortedResults[4]) {
        ajaxGifCall("2WHcT6O69wS3vouGVP");
        $("#resultsP").append(
            `<h1>Drink a Stout!</h1>
            <h4>You Scored ${nTotal} out of 10 on Neuroticism Trait!</h4>
            <br>
            <p>You are sensitive person more inclined to feelings of anxiety. 
            It takes you a little while to bounce back after stressful events. And a Stout like you is a little on the dark side, 
            but heavy and warm like a blanket or a hug, it'll wrap itself around you and be just what you need to weather the storm.</p>
            <p>Brown, porter, and stout crafts bristle with dark, creamy flavors are your brand. These are the kinds of beers one drinks leisurely, 
            with each sip savored and appreciated. Fans of these beers mirror this sipping style in other aspects of their lives, 
            making them contemplative and intelligent. They love engaging in meaningful conversations among intimate circles of friends. 
            They much prefer small social settings, and avoid large, loud, crowded environments.<p>      
            <a href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422">
            Click here to learn more about Big 5 Personality Traits</a>`
        )
    }
});