const questions = {
  q1: ["Has the club lost more members than it has gained during the past twelve months?", "Use the club’s actual membership experience rather than a general impression.", [["Yes", "q2"], ["No", "q7"]]],
  q2: ["Does the club know why members are leaving?", "Use direct feedback rather than assumptions.", [["Yes", "q3"], ["No", "unknown_departures", true]]],
  q3: ["Are most departures caused by circumstances outside the club’s control?", "Examples include death, relocation, health, employment, or family responsibilities.", [["Yes", "q7"], ["No", "q4"]]],
  q4: ["Are members dissatisfied with meetings, communication, or club organization?", "Consider meeting times, meeting length, agendas, communication methods, and decision making.", [["Yes", "meeting_communication", true], ["No", "q5"]]],
  q5: ["Are members losing interest because they are not involved in meaningful service?", "Consider whether members have regular opportunities to participate in service that matters to them.", [["Yes", "service_engagement", true], ["No", "q6"]]],
  q6: ["Are conflict, leadership concerns, dues, or lack of recognition affecting membership?", "Choose Yes only when one or more concerns have been identified through direct feedback.", [["Yes", "q6a"], ["No", "hidden_retention_issue", true]]],
  q6a: ["Which concern appears to be having the greatest effect?", "Select the concern that best matches what members have communicated.", [["Conflict or leadership", "conflict_leadership", true], ["Dues or cost", "dues_value", true], ["Recognition or appreciation", "recognition", true], ["More than one concern", "multiple_retention", true]]],
  q7: ["Is the club consistently inviting prospective members?", "Consistently means throughout the year, not only during one event.", [["Yes", "q8"], ["No", "not_inviting", true]]],
  q8: ["Are invited guests attending club activities?", "Activities may include service projects, meetings, social events, or membership events.", [["Yes", "q9"], ["No", "invitation_message", true]]],
  q9: ["Are guests attending but not joining?", "Choose Yes when guests participate but are not becoming members.", [["Yes", "q10"], ["No", "q11"]]],
  q10: ["Does the club clearly explain what Lions do and directly invite guests to join?", "A clear invitation explains service, expectations, dues, and the next step.", [["Yes", "guest_experience", true], ["No", "no_direct_ask", true]]],
  q11: ["Are new members remaining active after joining?", "Consider participation during the first year, not only roster status.", [["Yes", "q12"], ["No", "new_member_support", true]]],
  q12: ["Are members being prepared for future leadership?", "Look for mentoring, committee experience, project leadership, and officer development.", [["Yes", "healthy_process", true], ["No", "leadership_pipeline", true]]]
};

const results = {
  unknown_departures: ["The club does not yet understand why members are leaving", "Without direct feedback, the club may solve the wrong problem.", ["Contact former members privately and respectfully.", "Ask what influenced their decision to leave.", "Look for repeated themes.", "Share themes without identifying individuals."], ["Who can contact former members neutrally?", "What reasons are confirmed?", "What change could be tested first?"]],
  meeting_communication: ["Meeting, communication, or organization concerns", "The way the club operates may no longer fit member needs.", ["Ask members what should change.", "Review meeting time, length, agendas, and communication methods.", "Test one or two changes.", "Ask whether the changes improved the experience."], ["Which part causes the most frustration?", "Are meetings serving a clear purpose?", "How do members prefer to receive information?"]],
  service_engagement: ["Members are not sufficiently connected to meaningful service", "Members may disengage when they do not see a clear role or connection to service.", ["Ask which community needs matter most.", "Offer more hands on service opportunities.", "Give each interested member a defined role.", "Connect meetings more directly to service."], ["Which projects create the strongest participation?", "Who wants to serve but does not know where they fit?", "What new service opportunity could be tested?"]],
  conflict_leadership: ["Conflict or leadership concerns", "Unresolved conflict can reduce trust, participation, and retention.", ["Identify the specific concern privately.", "Separate personal conflict from process concerns.", "Request neutral district support when appropriate.", "Clarify expectations for communication and decision making."], ["What facts are known?", "Who could facilitate neutrally?", "What process needs clarification?"]],
  dues_value: ["Members may not understand or experience the value of their dues", "Cost becomes a stronger concern when the value of membership is unclear.", ["Explain dues and other costs clearly.", "Show how dues support club, district, and international work.", "Review avoidable local expenses.", "Strengthen the member experience."], ["Do members understand what dues support?", "Are there avoidable costs?", "What benefits are members not receiving?"]],
  recognition: ["Members may not feel appreciated or recognized", "Members can disengage when their contributions are overlooked.", ["Recognize participation regularly.", "Recognize more than officers and major donors.", "Thank members privately and publicly.", "Ask how members prefer to be recognized."], ["Whose work is going unnoticed?", "Is recognition timely and specific?", "Does the club recognize many kinds of contribution?"]],
  multiple_retention: ["Several retention concerns are affecting the club", "The club may be dealing with connected concerns rather than one cause.", ["List each confirmed concern separately.", "Identify the concern causing the greatest harm.", "Choose one priority action.", "Request district support when conflict or leadership is involved."], ["Which concern is most urgent?", "Which can the club influence directly?", "What action would improve trust first?"]],
  hidden_retention_issue: ["The cause of member disengagement is not yet visible", "Individual conversations are needed before choosing a solution.", ["Speak privately with a representative group of members.", "Ask about expectations, participation, culture, and barriers.", "Listen for themes that do not surface in meetings.", "Return to the assessment after gathering feedback."], ["Who may speak candidly?", "What questions will invite honest answers?", "How will confidentiality be protected?"]],
  not_inviting: ["The club is not inviting enough prospective members", "Growth is unlikely when personal invitations are uncommon.", ["Set a realistic invitation goal.", "Encourage each member to invite someone personally.", "Invite people to service or fellowship first.", "Give members simple invitation wording."], ["Why are members hesitant to invite?", "Which activity is easiest to invite someone to?", "Who already supports the club’s work?"]],
  invitation_message: ["The invitation is not leading people to attend", "The invitation may be too general, unclear, or disconnected from the person’s interests.", ["Use personal invitations.", "Explain exactly what the guest is invited to do.", "Connect the invitation to the person’s interests.", "Make the date, time, location, and experience clear."], ["What does the current invitation sound like?", "Would a guest understand what will happen?", "Do interests match the activity?"]],
  guest_experience: ["The guest experience or membership offer needs improvement", "Guests are attending, but something is preventing the next step.", ["Ask guests what influenced their decision.", "Review how guests are welcomed and included.", "Explain dues, expectations, and service opportunities clearly.", "Follow up personally after the visit."], ["Do guests feel included?", "Is membership explained clearly?", "Does the club follow up promptly?"]],
  no_direct_ask: ["Guests are not receiving a clear invitation to join", "People may enjoy the club without realizing membership is available.", ["Create a simple invitation process.", "Explain what the club does and what membership involves.", "Describe dues and expectations honestly.", "Directly ask whether the guest would like to join."], ["Who speaks with guests?", "When should the invitation be made?", "What information should every guest receive?"]],
  new_member_support: ["New members are not being integrated into the club", "New members need relationships, understanding, and meaningful participation.", ["Provide practical orientation.", "Assign a mentor or point of contact.", "Involve the member in service quickly.", "Give the member a meaningful responsibility."], ["What happens during the first ninety days?", "Does the member know whom to contact?", "Has the club asked what the member wants to do?"]],
  leadership_pipeline: ["The club needs stronger leadership development", "Future sustainability is at risk when leadership stays with a small number of members.", ["Identify members interested in leadership.", "Offer project and committee leadership opportunities.", "Use mentoring before asking someone to become an officer.", "Create a simple succession plan."], ["Which responsibilities depend on one person?", "Who could lead a small project?", "What support would make leadership manageable?"]],
  healthy_process: ["The club appears to have a healthy membership process", "Recruitment, retention, new member support, and leadership development appear to be functioning reasonably well.", ["Continue inviting throughout the year.", "Keep listening to members and former members.", "Maintain orientation, mentoring, and service involvement.", "Review the process periodically."], ["Which practices are producing results?", "How can those practices remain consistent?", "What early warning signs should be watched?"]]
};

const $ = id => document.getElementById(id);
const screens = [$('startScreen'), $('questionScreen'), $('resultScreen')];
let currentQuestion = null;
let history = [];
let deferredPrompt = null;

function show(screen) {
  screens.forEach(item => item.classList.add('hidden'));
  screen.classList.remove('hidden');
}

function progress() {
  if (!currentQuestion) {
    $('progressText').textContent = 'Ready to begin';
    $('stepText').textContent = '';
    $('progressBar').style.width = '0%';
    return;
  }
  $('progressText').textContent = 'Membership review in progress';
  $('stepText').textContent = `Step ${history.length + 1}`;
  $('progressBar').style.width = `${Math.min(100, Math.round(((history.length + 1) / 8) * 100))}%`;
}

function renderQuestion(id) {
  const [text, help, answers] = questions[id];
  currentQuestion = id;
  $('questionNumber').textContent = `Question ${history.length + 1}`;
  $('questionText').textContent = text;
  $('questionHelp').textContent = help;
  $('answerButtons').innerHTML = '';
  answers.forEach(([label, target, isResult]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-button';
    button.textContent = label;
    button.addEventListener('click', () => {
      history.push(currentQuestion);
      isResult ? renderResult(target) : renderQuestion(target);
    });
    $('answerButtons').appendChild(button);
  });
  $('backButton').disabled = history.length === 0;
  progress();
  show($('questionScreen'));
}

function renderResult(id) {
  const [title, reason, actions, discussion] = results[id];
  currentQuestion = null;
  $('resultTitle').textContent = title;
  $('resultReason').textContent = reason;
  $('resultActions').innerHTML = actions.map(item => `<li>${item}</li>`).join('');
  $('resultDiscussion').innerHTML = discussion.map(item => `<li>${item}</li>`).join('');
  $('progressText').textContent = 'Assessment complete';
  $('stepText').textContent = '';
  $('progressBar').style.width = '100%';
  show($('resultScreen'));
}

function goBack() {
  if (!history.length) return;
  renderQuestion(history.pop());
}

function restart() {
  currentQuestion = null;
  history = [];
  progress();
  show($('startScreen'));
}

$('startButton').addEventListener('click', () => { history = []; renderQuestion('q1'); });
$('backButton').addEventListener('click', goBack);
$('resultBackButton').addEventListener('click', goBack);
$('restartButton').addEventListener('click', restart);
$('resultRestartButton').addEventListener('click', restart);
$('printButton').addEventListener('click', () => window.print());

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  $('installButton').classList.remove('hidden');
});

$('installButton').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $('installButton').classList.add('hidden');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js'));
}
