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

var text4 = "ECLIPS";
var descriptions4 = {
    'E': 'xpectation: The subjects of interest.',
    'C': 'lient group: The process being tested.',
    'L': 'ocation: What the process is being tested against (if applicable).',
    'I': 'mpact: The result of interest.',
    'P': 'rofessionals: The timeframe of measurement or the category of question asked.',
    'S': 'rvice: The environment or method used to conduct the measurement.'
};

function createApplication(appId, text, descriptions, subscripts) {
    var contentId = 'content-' + appId;
    var learnMoreId = 'learn-more-' + appId;
    var componentsId = 'components-' + appId;
    var descriptionId = 'description-' + appId;

    var verticalText = '';
    var hoveredLetters = 0;

    for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var subscript = subscripts[i] || '';
        var description = descriptions[letter] || '';

        if (letter === '-') {
            verticalText += '<span class="letter-' + appId + ' dash">-</span><br>';
        } else {
            var parts = description.split(':');
            var beforeColon = parts[0] + ':';
            var afterColon = parts.slice(1).join(':');
            verticalText += '<span class="letter-' + appId + '" data-hovered="false">' + letter + '<sub>' + subscript + '</sub></span><span class="bloop-text-before-colon-' + appId + '" data-text="' + beforeColon + '"></span><span class="bloop-text-after-colon-' + appId + '" data-text="' + afterColon + '"></span><br>';
        }
    }

    document.getElementById(contentId).innerHTML = verticalText;

    var boxId = appId === 1 ? 'box' : 'box-' + appId;
    var box = document.getElementById(boxId);
    var initialBoxWidth = box.offsetWidth;
    var finalBoxWidth = 605;
    var currentBoxWidth = initialBoxWidth;

    var letters = document.getElementById(contentId).getElementsByClassName('letter-' + appId);

    for (var i = 0; i < letters.length; i++) {
        if (text[i] !== '-') {
            letters[i].addEventListener('mouseover', function(event) {
                if (event.target.getAttribute('data-hovered') === 'false') {
                    event.target.setAttribute('data-hovered', 'true');
                    hoveredLetters++;

                    document.getElementById(componentsId).style.opacity = 1;
                    document.getElementById(descriptionId).style.opacity = 1;

                    var beforeColon = event.target.nextSibling;
                    var afterColon = beforeColon.nextSibling;
                    var beforeText = beforeColon.getAttribute('data-text');
                    var afterText = afterColon.getAttribute('data-text');

                    var typeText = function(target, text, widthPerLetter, callback) {
                        var index = 0;
                        var interval = setInterval(function() {
                            target.innerHTML += text[index];
                            currentBoxWidth += widthPerLetter;
                            target.style.width = (index + 1) * widthPerLetter + 'px';
                            if (currentBoxWidth <= finalBoxWidth) {
                                box.style.width = currentBoxWidth + 'px';
                            }
                            index++;
                            if (index === text.length) {
                                clearInterval(interval);
                                callback();
                            }
                        }, 10);
                    };

                    var beforeWidth = 114 / beforeText.length;
                    var afterWidth = 450 / afterText.length;

                    typeText(beforeColon, beforeText, beforeWidth, function() {
                        typeText(afterColon, afterText, afterWidth, function() {
                            if (hoveredLetters === text.replace(/-/g, '').length) {
                                document.getElementById(learnMoreId).style.opacity = 1;
                            }
                        });
                    });
                }
            });
        }
    }
}

var subscripts1 = ['', '', '', '', '', ''];
var subscripts2 = ['', '', '', '', '', ''];
var subscripts3 = ['', '', '', '', ''];
var subscripts4 = ['', '', '', '', '', 'E', ''];

createApplication(1, text1, descriptions1, subscripts1);
createApplication(2, text2, descriptions2, subscripts2);
createApplication(3, text3, descriptions3, subscripts3);
createApplication(4, text4, descriptions4, subscripts4);
