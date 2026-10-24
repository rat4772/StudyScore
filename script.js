
const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studytime = Number(
        document.getElementById("studytime").value
    );

    const failures = Number(
        document.getElementById("failures").value
    );

    const absences = Number(
        document.getElementById("absences").value
    );

    const previousGrade = Number(
        document.getElementById("previousGrade").value
    );

    let studyLabel;

    if (studytime === 1) {
        studyLabel = "Under 2 hours/week";
    } else if (studytime === 2) {
        studyLabel = "2–5 hours/week";
    } else if (studytime === 3) {
        studyLabel = "5–10 hours/week";
    } else {
        studyLabel = "Over 10 hours/week";
    }

    let attendanceLabel;

    if (absences <= 5) {
        attendanceLabel = "Few absences";
    } else if (absences <= 15) {
        attendanceLabel = "Some absences";
    } else {
        attendanceLabel = "Frequent absences";
    }

    let profileLabel;

    if (previousGrade >= 14 && failures === 0) {
        profileLabel = "Strong past results";
    } else if (previousGrade >= 10 && failures <= 1) {
        profileLabel = "Mixed past results";
    } else {
        profileLabel = "Needs further review";
    }

    result.innerHTML = `
        <div class="result-icon">✧</div>
        <p class="eyebrow">SAMPLE ANALYSIS</p>
        <h3>Your study profile</h3>
        <p class="muted">
            Here is a summary of the information you entered.
            This is not an ML prediction.
        </p>

        <div class="result-divider"></div>

        <div class="result-row">
            <span>Study time</span>
            <strong>${studyLabel}</strong>
        </div>

        <div class="result-row">
            <span>Attendance pattern</span>
            <strong>${attendanceLabel}</strong>
        </div>

        <div class="result-row">
            <span>Academic profile</span>
            <strong>${profileLabel}</strong>
        </div>

        <div class="result-row">
            <span>Past failures</span>
            <strong>${failures}</strong>
        </div>

        <p class="result-note">
            This summary uses simple rules written in JavaScript.
            We will replace it with a trained ML model later.
            It should not be treated as a reliable assessment
            of a student's actual performance.
        </p>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});


const progressForm = document.getElementById("progressForm");

if (progressForm) {
    progressForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const hours = Number(document.getElementById("hours").value);
        const total = Number(document.getElementById("totalTopics").value);
        const done = Number(document.getElementById("doneTopics").value);
        const message = document.getElementById("progressMessage");

        if (
            hours < 0 || hours > 168 ||
            total < 1 || !Number.isInteger(total) ||
            done < 0 || !Number.isInteger(done) ||
            done > total
        ) {
            message.textContent =
                "Please enter valid values. Completed topics cannot exceed total topics.";
            message.style.color = "#c0392b";
            return;
        }

        const completed = (done / total) * 100;
        const remaining = 100 - completed;

        document.getElementById("studyHours").innerHTML =
            `${hours} <span>hours</span>`;

        document.getElementById("completedPercent").textContent =
            `${completed.toFixed(1)}%`;

        document.getElementById("remainingPercent").textContent =
            `${remaining.toFixed(1)}%`;

        document.getElementById("completedBar").style.width =
            `${completed}%`;

        document.getElementById("remainingBar").style.width =
            `${remaining}%`;

        document.getElementById("completedTopics").textContent =
            `${done} of ${total} topics completed`;

        document.getElementById("remainingTopics").textContent =
            `${total - done} topics remaining`;

        message.textContent = "Your study records have been updated.";
        message.style.color = "#247a45";
    });
}

