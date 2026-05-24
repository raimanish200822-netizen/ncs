/**
 * NCS SECURE FRAMEWORK - Unified Commands Core Interactive Frame Controller
 */

// Global slider horizontal step parameter tracking
let currentSliderPositionX = 0;

document.addEventListener('DOMContentLoaded', () => {
    initCoreNavigationLayer();
    initAutomatedTypingMainframe();
    initQuinticAcceleratedCounters();
    initTerminalAutoLogger();
    initLiveSignaturesEngine(); 
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

function navigateSliderTrack(directionDirectionStr) {
    const sliderTrackNode = document.getElementById('slider-inner-track');
    if (!sliderTrackNode) return;

    const baseCardWidth = window.innerWidth < 640 ? 314 : 404; 
    const maximumSlidesValue = sliderTrackNode.children.length;
    const maxVisibleOffsetValue = window.innerWidth < 768 ? 1 : 2;
    const absoluteLimitBound = -(baseCardWidth * (maximumSlidesValue - maxVisibleOffsetValue));

    if (directionDirectionStr === 'right') {
        currentSliderPositionX -= baseCardWidth;
        if (currentSliderPositionX < absoluteLimitBound) {
            currentSliderPositionX = 0; 
        }
    } else {
        currentSliderPositionX += baseCardWidth;
        if (currentSliderPositionX > 0) {
            currentSliderPositionX = absoluteLimitBound; 
        }
    }

    sliderTrackNode.style.transform = `translateX(${currentSliderPositionX}px)`;
    pushLogToConsole("[USER-ACTION]", `Horizontal track slider shifted coordinate offset index value to [${currentSliderPositionX}px].`);
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

function pushLogToConsole(tag, actionMessage) {
    const logBox = document.getElementById('terminal-log-box');
    if (logBox) {
        const timeStamp = new Date().toTimeString().split(' ')[0];
        const row = document.createElement('div');
        row.className = "pt-3 border-t border-neutral-900 flex flex-col sm:flex-row gap-2 text-neutral-400";
        
        let tagColor = "text-[#FF7A00]";
        if (tag === "[USER-ACTION]") tagColor = "text-cyan-500";
        if (tag === "[CORE-SUCCESS]") tagColor = "text-[#00A63E]";
        if (tag === "[PRESSURE-UP]") tagColor = "text-red-500 font-black animate-pulse";

        row.innerHTML = `<span class="${tagColor}">${tag}</span><span class="text-neutral-600">[${timeStamp}]</span><p class="text-neutral-300 font-mono text-[11px]">${actionMessage}</p>`;
        
        logBox.appendChild(row);
        logBox.scrollTop = logBox.scrollHeight;
    }
}

function initTerminalAutoLogger() {
    const operationsPool = [
        "RTI monitoring module synchronized regional data verification parameters.",
        "System checking framework cleared evaluation discrepancy registries maps.",
        "Anonymized envelope files successfully logged onto cloud network pipelines."
    ];
    setInterval(() => {
        const randomLog = operationsPool[Math.floor(Math.random() * operationsPool.length)];
        pushLogToConsole("[LIVE-POOL]", randomLog);
    }, 4500);
}

function initLiveSignaturesEngine() {
    const counterElement = document.getElementById('petition-live-counter');
    const MAXIMUM_LIMIT = 25; // Exact verified baseline max limit parameter
    let dynamicSignaturesBase = 25; 

    const incrementTimer = setInterval(() => {
        if (counterElement) {
            const freshSignsCount = Math.floor(Math.random() * 2) + 1;
            if (dynamicSignaturesBase + freshSignsCount <= MAXIMUM_LIMIT) {
                dynamicSignaturesBase += freshSignsCount;
                counterElement.textContent = dynamicSignaturesBase.toLocaleString('en-IN');
            } else {
                dynamicSignaturesBase = MAXIMUM_LIMIT;
                counterElement.textContent = dynamicSignaturesBase.toLocaleString('en-IN');
                clearInterval(incrementTimer); // Standard verification loop completed
            }
        }
    }, 3200);
}

/**
 * HIGH-PRESSURE PARTICLES BLAST ENGINE WITH SCREEN SHAKE VIBRATION
 */
function accelerateDemandPressure(buttonElement, demandIdStr, eventEventObj) {
    if (!buttonElement || buttonElement.disabled) return;

    buttonElement.textContent = "ACCELERATION SECURED ✓";
    buttonElement.className = "mt-6 w-full h-11 border-4 border-black bg-[#00A63E] text-white font-['Space_Grotesk'] text-xs font-black tracking-widest uppercase cursor-not-allowed shadow-none";
    pushLogToConsole("[PRESSURE-UP]", `Movement target metrics accelerated momentum levels for DEMAND_BLOCK_${demandIdStr}.`);

    // 1. EXECUTE REAL KINETIC SCREEN SHAKE ANIMATION
    document.body.classList.add('apply-screen-vibrate');
    setTimeout(() => {
        document.body.classList.remove('apply-screen-vibrate');
    }, 400);

    // 2. GENERATE FLOATING REFORMS EMOJI BURST
    const containerNode = document.getElementById('emoji-burst-container');
    if (containerNode) {
        const emojiPool = ['🔥', '💥', '🛑', '✊', '⚡', '💯'];
        const clickX = eventEventObj.clientX || window.innerWidth / 2;
        const clickY = eventEventObj.clientY || window.innerHeight / 2;

        for (let i = 0; i < 28; i++) {
            const emojiNode = document.createElement('span');
            emojiNode.className = 'floating-explosion-emoji';
            emojiNode.textContent = emojiPool[Math.floor(Math.random() * emojiPool.length)];
            
            emojiNode.style.left = `${clickX}px`;
            emojiNode.style.top = `${clickY}px`;

            const angleDelta = Math.random() * Math.PI * 2;
            const distanceDelta = Math.floor(Math.random() * 180) + 70;
            const targetX = Math.cos(angleDelta) * distanceDelta;
            const targetY = Math.sin(angleDelta) * distanceDelta - 120; 

            emojiNode.style.setProperty('--x-axis', `${targetX}px`);
            emojiNode.style.setProperty('--y-axis', `${targetY}px`);

            containerNode.appendChild(emojiNode);

            setTimeout(() => {
                emojiNode.remove();
            }, 1200);
        }
    }
}

function executeTapHandshake(nodeId) {
    const nodeMarker = document.getElementById(`verify-node-${nodeId}`);
    if (nodeMarker) {
        nodeMarker.textContent = "✓";
        nodeMarker.className = "w-8 h-8 rounded-lg border border-transparent bg-[#00A63E] text-white flex items-center justify-center font-black text-xs flex-shrink-0 ml-4 shadow-md";
        pushLogToConsole("[CORE-SUCCESS]", `Handshake verification check cleared for parameters matrix track MODULE_0${nodeId}.`);
    }
}

function switchEmbedForm(formTokenId) {
    document.querySelectorAll('.form-panel-wrapper').forEach(wrapper => wrapper.classList.add('hidden'));
    document.querySelectorAll('.form-matrix-btn').forEach(btn => {
        btn.className = "form-matrix-btn px-6 h-12 border-2 border-black bg-transparent text-neutral-400 transition-all btn-press";
    });

    const targetWrapperBlock = document.getElementById(`embed-form-${formTokenId}`);
    const targetToggleButton = document.getElementById(`btn-form-${formTokenId}`);

    if (targetWrapperBlock && targetToggleButton) {
        targetWrapperBlock.classList.remove('hidden');
        targetToggleButton.className = "form-matrix-btn active px-6 h-12 border-2 border-black bg-white text-black font-bold transition-all btn-press";
        pushLogToConsole("[USER-ACTION]", `Switched Submission Vault mapping layer destination iframe to node 0${formTokenId === 'disclosure' ? '1' : '2'}.`);
    }
}
