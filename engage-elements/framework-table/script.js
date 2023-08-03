var text1 = "PICO-TS";
var descriptions1 = {
    'P': 'atient: The subjects of interest.',
    'I': 'ntervention: The process being tested.',
    'C': 'omparison: What the process is being tested against (if applicable).',
    'O': 'utcome: The result of interest.',
    'T': 'iming: The timeframe of measurement or the category of question asked.',
    'S': 'etting: The environment or method used to conduct the measurement.'
};


var text2 = "SPIDER";
var descriptions2 = {
    'S': 'ample: The subjects of interest.',
    'P': 'henomenon of...: The how and why being studied.',
    'I': 'nterest: The how and why being studied.',
    'D': 'esign: How the method is created/implemented.',
    'E': 'valuation: The measurement of outcome.',
    'R': 'esearch type: The specific approach.'
};


var text3 = "SPICE";
var descriptions3 = {
    'S': 'etting: The context of the question.',
    'P': 'erspective: Stakeholders (potential or actual).',
    'I': 'ntervention: The action taken.',
    'C': 'omparison: The alternative action .',
    'E': 'valuation: Measurement of the success.'
};


var text4 = "ECLIPSE";
var descriptions4 = {
    'E': 'xpectation: The subjects of interest.',
    'C': 'lient group: The process being tested.',
    'L': 'ocation: What the process is being tested against (if applicable).',
    'I': 'mpact: The result of interest.',
    'P': 'rofessionals: The timeframe of measurement or the category of question asked.',
    'S': 'rvice: The environment or method used to conduct the measurement.',
    'E': 'etting: The environment or method used to conduct the measurement.'
};

function createApplication(appId, text, descriptions) {
    var contentId = 'content-' + appId;
    var learnMoreId = 'learn-more-' + appId;
    var componentsId = 'components-' + appId;
    var descriptionId = 'description-' + appId;

    var verticalText = '';

    for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var description = descriptions[letter] || '';

        if (letter === '-') {
            verticalText += '<span class="letter-' + appId + ' dash">-</span><br>';
        } else {
            var parts = description.split(':');
            var beforeColon = parts[0] + ':';
            var afterColon = parts.slice(1).join(':');
            verticalText += '<span class="letter-' + appId + '">' + letter + '</span><span class="bloop-text-before-colon-' + appId + '">' + beforeColon + '</span><span class="bloop-text-after-colon-' + appId + '">' + afterColon + '</span><br>';
        }
    }

    document.getElementById(contentId).innerHTML = verticalText;

    var letters = document.getElementById(contentId).getElementsByClassName('letter-' + appId);

    for (var i = 0; i < letters.length; i++) {
        if (text[i] !== '-') {
            letters[i].addEventListener('mouseover', function(event) {
                var beforeColon = event.target.nextSibling;
                var afterColon = beforeColon.nextSibling;
                beforeColon.style.opacity = 1;
                afterColon.style.opacity = 1;
                document.getElementById(descriptionId).style.opacity = 1;
                document.getElementById(componentsId).style.opacity = 1;
            });
        }

        if (i === letters.length - 1) {
            letters[i].addEventListener('mouseover', function() {
                document.getElementById(learnMoreId).style.opacity = 1;
            });
        }
    }
}

createApplication(1, text1, descriptions1);
createApplication(2, text2, descriptions2);
createApplication(3, text3, descriptions3);
createApplication(4, text4, descriptions4);