// Leer el archivo JSON
function getScoreData() {
    return JSON.parse(localStorage.getItem("scoreData")) || { score: 0, levelsCompleted: [] };
  }
  
  // Actualizar el puntaje y los niveles completados
  function updateScoreData(points, levelCompleted) {
    var scoreData = getScoreData();
    scoreData.score += points;
    scoreData.levelsCompleted.push(levelCompleted);
    localStorage.setItem("scoreData", JSON.stringify(scoreData));
  }
  
  // Mostrar el puntaje y los niveles completados
  function displayScore() {
    var scoreData = getScoreData();
    document.getElementById("score-display").innerHTML = "Puntaje: " + scoreData.score;
    document.getElementById("levels-completed-display").innerHTML = "Niveles completados:" + "\n"+ scoreData.levelsCompleted.join("\n");
  }
  function goToNextLevel(level) {
    window.location.href = 'nivel' + level + '.html';
  }
  function resetScore() {
    localStorage.removeItem("scoreData");
    displayScore();
  }

  function goScore() {
    window.location.href = 'puntajes.html';
  }