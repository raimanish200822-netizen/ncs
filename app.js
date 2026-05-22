/**
 * NCS Continuous Dashboard Platform Core Interactive Framework Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    initCoreNavigationLayer();
    initAutomatedTypingMainframe();
    initQuinticAcceleratedCounters();
    initArchiveGridFilters();
    initTerminalAutoLogger();
});

function initCoreNavigationLayer() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    
    const footerYearNode = document.getElementById('year');
    if (footerYearNode) footerYearNode.textContent = new Date().getFullYear();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hashSelector = this.getAttribute('href');
            if (hashSelector.length > 1) {
                const domElementTarget = document.querySelector(hashSelector);
                if (domElementTarget) {
                    e.preventDefault();
                    window.scrollTo({ top: domElementTarget.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                    mobileMenu?.classList.add('hidden');
                }
            }
        });
    });
}

function initAutomatedTypingMainframe() {
    const typingStringData = "VOICE OF THE SYSTEMIC REFORMS.";
    const typingNodeContainer = document.getElementById('typing-text');
    let dynamicIndex = 0;

    function runTypeSequence() {
        if (typingNodeContainer && dynamicIndex < typingStringData.length) {
            if (typingStringData.substring(dynamicIndex, dynamicIndex + 8) === "SYSTEMIC") {
                typingNodeContainer.innerHTML += `<span class="text-[#FF7A00] font-black">SYSTEMIC</span>`;
                dynamicIndex += 8;
            } else {
                typingNodeContainer.innerHTML += typingStringData.charAt(dynamicIndex);
                dynamicIndex++;
            }
            setTimeout(runTypeSequence, 75);
        }
    }
    if (typingNodeContainer) setTimeout(runTypeSequence, 400);
}

function initQuinticAcceleratedCounters() {
    const dataNodesList = document.querySelectorAll('.counter');
    
    const counterIntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNode = entry.target;
                const absoluteTargetValue = +targetNode.dataset.target;
                const runtimeTimelineDuration = 1600; 
                const baseTimestampValue = performance.now();

                function executeTickerFrame(currentTimestamp) {
                    const elapsedFractionProgress = Math.min(1, (currentTimestamp - baseTimestampValue) / runtimeTimelineDuration);
                    const quinticEaseOutFactor = 1 - Math.pow(1 - elapsedFractionProgress, 5);
                    targetNode.textContent = Math.floor(absoluteTargetValue * quinticEaseOutFactor).toLocaleString('en-IN');
                    
                    if (elapsedFractionProgress < 1) {
                        requestAnimationFrame(executeTickerFrame);
                    }
                }
                requestAnimationFrame(executeTickerFrame);
                counterIntersectionObserver.unobserve(targetNode);
            }
        });
    }, { threshold: 0.25 });

    dataNodesList.forEach(counterNode => counterIntersectionObserver.observe(counterNode));
}

function initArchiveGridFilters() {
    const categoryButtons = document.querySelectorAll('.filter-btn');
    const operationalCards = document.querySelectorAll('.archive-card-frame');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.className = 'filter-btn px-5 h-11 border-2 border-black bg-white text-black shadow-[2px_2px_0px_#000]');
            button.className = 'filter-btn active px-5 h-11 border-2 border-black bg-black text-white';
            
            const targetCriteriaQuery = button.dataset.filter;
            operationalCards.forEach(card => {
                if (targetCriteriaQuery === 'all' || card.dataset.cat === targetCriteriaQuery) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initTerminalAutoLogger() {
    const logBox = document.getElementById('terminal-log-box');
    const operationsPool = [
        "RTI Tracker pipeline #1109 synced response parameters from audit nodes.",
        "Systemic evaluation gap caught in Sector-2 testing data boards.",
        "Anonymized disclosure envelope successfully queued in direct Drive matrix ledger.",
        "Statewide structural safety verification complete across central operation units."
    ];
    
    setInterval(() => {
        if (logBox) {
            const timeStamp = new Date().toISOString().replace('T', ' ').substring(0, 19).replace(/-/g, '.');
            const randomLog = operationsPool[Math.floor(Math.random() * operationsPool.length)];
            
            const row = document.createElement('div');
            row.className = "pt-3 flex flex-col sm:flex-row gap-2 border-t border-neutral-900 animate-fade-in";
            row.innerHTML = `<span class="text-[#FF7A00]">[LIVE-SYS]</span><span class="text-neutral-600">[${timeStamp}]</span><p class="text-neutral-300 font-mono">${randomLog}</p>`;
            
            logBox.appendChild(row);
            logBox.scrollTop = logBox.scrollHeight;
        }
    }, 4000); // Appends data line outputs seamlessly every 4 seconds
}

function switchEmbedForm(formTokenId) {
    document.querySelectorAll('.form-panel-wrapper').forEach(wrapper => {
        wrapper.classList.add('hidden');
    });
    document.querySelectorAll('.form-matrix-btn').forEach(btn => {
        btn.className = "form-matrix-btn px-6 h-12 border-2 border-black bg-transparent text-neutral-400 transition-all btn-press";
    });

    const targetWrapperBlock = document.getElementById(`embed-form-${formTokenId}`);
    const targetToggleButton = document.getElementById(`btn-form-${formTokenId}`);

    if (targetWrapperBlock && targetToggleButton) {
        targetWrapperBlock.classList.remove('hidden');
        targetToggleButton.className = "form-matrix-btn active px-6 h-12 border-2 border-black bg-white text-black font-bold transition-all btn-press";
    }
}
