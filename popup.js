const setAnswer = response => {
    document.getElementById("answer").textContent = response;
};

window.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(["gameState"], result => {
      if (result.gameState) {
          const solution = JSON.parse(result.gameState).solution.toUpperCase();
          setAnswer(solution);
      } else {
          setAnswer("not found :(");
      }
  });
});
