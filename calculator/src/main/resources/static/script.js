const history = [];

function calculate(operation) {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    fetch(`/api/calculator/${operation}?a=${a}&b=${b}`)
        .then(response => response.text())
        .then(result => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerText = `Result: ${result}`;

            // Animate result
            resultDiv.classList.add("animate");
            setTimeout(() => resultDiv.classList.remove("animate"), 300);

            // Update history
            const entry = `${a} ${operation} ${b} = ${result}`;
            history.unshift(entry);
            updateHistory();
        })
        .catch(error => {
            document.getElementById("result").innerText = `Error: ${error}`;
        });
}

function updateHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "<h3>History</h3>";
    history.slice(0, 5).forEach(item => {
        const p = document.createElement("p");
        p.innerText = item;
        historyDiv.appendChild(p);
    });
}
