function animateProgress() {
    const progressData = [
        { element: document.getElementById('animaLabiales'), target: 70 },
        { element: document.getElementById('animaBases'), target: 85 },
        { element: document.getElementById('animaSombras'), target: 60 }
    ];

    function animateBar(progressElement, targetPercentage) {
        let currentPercentage = parseInt(progressElement.style.width);
        let step = 1;

        function updateBar() {
            if (currentPercentage < targetPercentage) {
                currentPercentage += step;
                progressElement.style.width = currentPercentage + '%';
                progressElement.textContent = currentPercentage + '% ' + progressElement.getAttribute('data-label');
                requestAnimationFrame(updateBar);
            } else {
                progressElement.style.width = targetPercentage + '%';
                progressElement.textContent = targetPercentage + '% ' + progressElement.getAttribute('data-label');
            }
        }

        updateBar();
    }

    progressData.forEach(data => {
        animateBar(data.element, data.target);
    });
}