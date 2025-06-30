let counter = document.getElementById("counter");
let count = parseInt(counter.textContent);
let timer = setInterval(incrementCounter, 1000);

function incrementCounter() {
  count++;
  counter.textContent = count;
}

document.getElementById("plus").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("minus").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});


const likesList = document.querySelector(".likes");
const likeCounts = {};

document.getElementById("heart").addEventListener("click", () => {
  if (likeCounts[count]) {
    likeCounts[count]++;
    document.getElementById(`like-${count}`).textContent = `${count} has been liked ${likeCounts[count]} times`;
  } else {
    likeCounts[count] = 1;
    const li = document.createElement("li");
    li.id = `like-${count}`;
    li.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  }
});

const pauseBtn = document.getElementById("pause");
let isPaused = false;

pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(timer);
    pauseBtn.textContent = "resume";
    toggleButtons(true);
  } else {
    timer = setInterval(incrementCounter, 1000);
    pauseBtn.textContent = "pause";
    toggleButtons(false);
  }
});

function toggleButtons(disabled) {
  document.getElementById("plus").disabled = disabled;
  document.getElementById("minus").disabled = disabled;
  document.getElementById("heart").disabled = disabled;
  document.getElementById("submit").disabled = disabled;
}

document.getElementById("comment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;
  if (commentText.trim() !== "") {
    const p = document.createElement("p");
    p.textContent = commentText;
    document.getElementById("list").appendChild(p);
    commentInput.value = "";
  }
});

