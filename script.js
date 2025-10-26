const rules = {
    'material': ['that', 'and'],
    'affordance': ['of', 'and'],
    'appear': ['in', 'and'],
    'appears': ['in', 'and'],
    'reappears': ['in', 'and'],
    'reappear': ['in', 'and'],
    'art': ['and'],
    'do': ['with', 'and'],
    'idea': ['of', 'and'],
    'what': ['surrounds', 'alters', 'becomes', 'combines', 'is', 'can', 'a', 'the', 'an'],
    'thrives': ['on', 'by', 'with'],
    'shuffle': ['in', 'around', 'and'],
    'recombination': ['of', 'that'],
    'recombinations': ['of', 'that'],
    'combination': ['of', 'that'],
    'combinations': ['of', 'that'],
    'a': ['combination', 'fragment', 'future', 'material', 'piece', 'recombination', 'remix', 'remixed', 'sample', 'source', 'way', 'world'],
    'alive': ['in', 'and'],
    'allows': ['for', 'and'],
    'alter': ['their', 'its', 'a', 'an', 'the'],
    'alters': ['their', 'its', 'a', 'an', 'the'],
    'ambiguity': ['allows', 'and'],
    'an': ['affordance', 'authorship', 'idea', 'object'],
    'and': ['are', 'claim', 'combine', 'a', 'the', 'an', 'digital', 'everything', 'fragment', 'fragments', 'interact', 'is', 'never', 'reinforce', 'objects', 'paste', 'recombine', 'remix', 'takes', 'zombifies'],
    'are': ['a', 'an', 'breaking', 'fragmenting', 'in', 'living', 'moving', 'remixing', 'sampling', 'the'],
    'authority': ['and', 'obscured', 'of'],
    'authorship': ['by', 'and'],
    'be': ['a', 'the', 'an'],
    'become': ['new', 'a', 'an', 'the', 'what', 'remixed'],
    'becomes': ['new', 'a', 'an', 'the', 'what', 'remixed'],
    'break': ['a', 'an', 'out', 'the', 'through'],
    'breaking': ['a', 'an', 'out', 'the', 'through', 'down'],
    'by': ['breaking', 'combining', 'fragmenting', 'inverting', 'keeping', 'making', 'reappearing', 'recombining', 'sampling'],
    'can': ['be', 'break', 'claim', 'fragment', 'imagine', 'make', 'move', 'present', 'remix', 'sample', 'reinforce'],
    'claim': ['a', 'an', 'authorship', 'by', 'control', 'of', 'the', 'through', 'to', 'what'],
    'claiming': ['a', 'an', 'authorship', 'by', 'control', 'the', 'through', 'to', 'what'],
    'combining': ['a', 'an', 'and', 'by', 'the', 'through', 'what', 'with'],
    'recombining': ['a', 'an', 'and', 'by', 'the', 'through', 'what', 'with'],
    'combines': ['a', 'an', 'and', 'by', 'the', 'through', 'what', 'with'],
    'combine': ['a', 'an', 'and', 'by', 'the', 'through', 'what', 'with'],
    'context': ['and'],
    'consciousness': ['can', 'of'],
    'control': ['of', 'and'],
    'copy': ['and'],
    'creates': ['ambiguity', 'and'],
    'destruction': ['that', 'and'],
    'digital': ['processes', 'and'],
    'down': ['the', 'and'],
    'endless': ['in', 'objects', 'remix', 'sampling', 'combinations'],
    'everything': ['alters', 'becomes', 'can', 'is'],
    'existing': ['material', 'objects', 'thought'],
    'familiar': ['in', 'to'],
    'flow': ['around', 'between', 'into', 'through'],
    'flows': ['around', 'between', 'into', 'through'],
    'into': ['a', 'an', 'the'],
    'around': ['a', 'the', 'an', 'what'],
    'through': ['what', 'a', 'an', 'the', 'and', 'art', 'photography', 'combining', 'destruction', 'digital', 'everything', 'fragmenting', 'fragments', 'intention', 'our', 'pieces', 'processes', 'remixing', 'samples', 'sampling'],
    'between': ['a', 'an', 'the', 'what'],
    'for': ['new', 'and'],
    'forward': ['by', 'in', 'through'],
    'fragment': ['a', 'an', 'and', 'that', 'the', 'what'],
    'fragmenting': ['a', 'an', 'and', 'that', 'the', 'what'],
    'fragmentary': ['impulse', 'and'],
    'fragments': ['it', 'and'],
    'future': ['through', 'and'],
    'imagine': ['a', 'and'],
    'impulse': ['can', 'and'],
    'in': ['a', 'an', 'combinations', 'everything', 'fragments', 'its', 'new', 'objects', 'pieces', 'remixed', 'sources', 'the', 'ways'],
    'interact': ['with', 'and'],
    'inverting': ['an', 'a', 'the'],
    'involves': ['this', 'and'],
    'is': ['a', 'an', 'not', 'remixed', 'the'],
    'not': ['a', 'the', 'an'],
    'it': ['in', 'to', 'into'],
    'its': ['fragmentary', 'and'],
    'keeping': ['it', 'and'],
    'like': ['copy', 'and'],
    'living': ['in', 'and'],
    'make': ['a', 'an', 'do', 'involves', 'new', 'of', 'our', 'representations', 'the', 'what', 'with'],
    'making': ['a', 'an', 'do', 'involves', 'new', 'of', 'our', 'the', 'what', 'with', 'representations'],
    'may': ['reinforce', 'and'],
    'mode': ['of', 'and'],
    'move': ['a', 'an', 'around', 'by', 'in', 'pieces', 'the', 'through', 'we', 'with'],
    'must': ['be', 'do', 'go', 'imagine', 'make', 'move', 'remix', 'understand'],
    'never': ['dies', 'can'],
    'new': ['mutations', 'resonances'],
    'object': ['alters', 'appears', 'becomes', 'flows', 'interacts', 'reappears', 'that'],
    'objects': ['alter', 'appear', 'become', 'flow', 'interact', 'reappear', 'that'],
    'of': ['a', 'an', 'authority', 'consciousness', 'context', 'objects', 'our', 'pieces', 'remix', 'source', 'surroundings', 'the', 'us'],
    'on': ['the', 'and'],
    'our': ['consciousness', 'surroundings'],
    'pieces': ['break', 'in', 'of', 'shuffle', 'that', 'this'],
    'power': ['we', 'and'],
    'present': ['a', 'the'],
    'processes': ['like', 'and'],
    'rather': ['than', 'and'],
    'reality': ['is', 'remixed', 'that', 'then'],
    'reappearing': ['in', 'and'],
    'recombine': ['and', 'by', 'claiming', 'through', 'with'],
    'regenerative': ['remix', 'and'],
    'reinforce': ['existing', 'an', 'the', 'a'],
    'relying': ['on', 'and'],
    'remix': ['a', 'allows', 'an', 'can', 'creates', 'endless', 'fragments', 'is', 'may', 'never', 'obscures', 'rather', 'strips', 'takes', 'that', 'the', 'thrives', 'through', 'with'],
    'remixing': ['a', 'allows', 'an', 'can', 'creates', 'endless', 'fragments', 'is', 'may', 'never', 'obscures', 'rather', 'strips', 'takes', 'that', 'the', 'thrives', 'through', 'with'],
    'remixed': ['reality', 'remix'],
    'representations': ['in', 'of', 'that'],
    'resonances': ['to', 'and'],
    'sample': ['a', 'an', 'of', 'our', 'sources', 'that', 'the'],
    'sampling': ['a', 'an', 'of', 'our', 'sources', 'that', 'the'],
    'sources': ['obscure', 'of', 'that', 'can', 'by'],
    'source': ['obscures', 'of', 'that', 'can'],
    'strips': ['source', 'and'],
    'stuff': ['that', 'of'],
    'surrounds': ['us', 'and'],
    'take': ['a', 'an', 'fragments', 'our', 'pieces', 'samples', 'the'],
    'takes': ['a', 'an', 'fragments', 'it', 'our', 'pieces', 'samples', 'the'],
    'than': ['relying', 'and'],
    'that': ['alter', 'can', 'make', 'surrounds', 'we'],
    'the': ['authority', 'combination', 'familiar', 'fragment', 'fragmentary', 'material', 'object', 'objects', 'recombination', 'remix', 'source', 'stuff', 'world'],
    'their': ['context', 'and'],
    'then': ['we', 'and'],
    'this': ['destruction', 'mode'],
    'thought': ['by', 'and'],
    'samples': ['that', 'and', 'of'],
    'to': ['a', 'an', 'be', 'break', 'claim', 'combine', 'everything', 'fragment', 'make', 'move', 'objects', 'pieces', 'recombine', 'sample', 'the'],
    'understand': ['that', 'and'],
    'way': ['forward', 'and'],
    'ways': ['that', 'and'],
    'we': ['are', 'break', 'can', 'claim', 'combine', 'fragment', 'imagine', 'make', 'move', 'must', 'recombine', 'remix', 'sample', 'take', 'understand'],
    'with': ['ambiguity', 'authority', 'care', 'intent', 'intention', 'itself', 'power'],
    'world': ['by', 'in', 'of', 'to'],
    'zombifies': ['an', 'the', 'it', 'a'],
    'obscured': ['and'],
    'out': ['and'],
    'obscures': ['and'],
    'obscure': ['and'],
    'mutations': ['and'],
    'dies': ['and'],
    'interacts': ['and'],
    'go': ['and'],
    'us': ['and'],
    'you': ['and']
};

let sentences = [];
let blocks = [];
let currentSentence = [];
let selectedIndex = 0;
let optionElements = [];
let isBuilding = true;
let draggedWord = null;

const colors = ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF', '#06FFC4', '#00F5FF', '#FF2E63'];

function getColorForWord(word) {
    return colors[word.length % colors.length];
}

function getNextOptions() {
    if (currentSentence.length === 0) return [];
    const lastWord = currentSentence[currentSentence.length - 1].word.toLowerCase();
    return rules[lastWord] || [];
}

function measureText(text) {
    const tempEl = document.createElement('div');
    tempEl.style.position = 'absolute';
    tempEl.style.visibility = 'hidden';
    tempEl.style.padding = '8px 12px';
    tempEl.style.fontSize = '28px';
    tempEl.style.fontWeight = '900';
    tempEl.style.fontFamily = '"PPModelPlastic-Medium", sans-serif';
    tempEl.style.textTransform = 'uppercase';
    tempEl.style.letterSpacing = '-1px';
    tempEl.style.whiteSpace = 'nowrap';
    tempEl.style.border = '3px solid #000';
    tempEl.style.boxSizing = 'border-box';
    tempEl.textContent = text.toUpperCase();
    document.body.appendChild(tempEl);
    const rect = tempEl.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    document.body.removeChild(tempEl);
    return { width: width, height: height };
}

function addBlock(word, x, y, isHorizontal, isCompleted) {
    const block = document.createElement('div');
    block.className = 'block' + (isCompleted ? ' completed' : ' placed');
    block.textContent = word.toUpperCase();
    block.style.backgroundColor = getColorForWord(word);

    const size = measureText(word);

    block.style.left = x + 'px';
    block.style.top = y + 'px';
    block.style.width = size.width + 'px';
    block.style.height = size.height + 'px';

    if (!isHorizontal) {
        block.style.transformOrigin = '0 0';
        block.style.transform = 'rotate(90deg)';
    }

    const blockData = {
        element: block,
        word: word,
        x: x,
        y: y,
        width: size.width,
        height: size.height,
        isHorizontal: isHorizontal
    };

    setTimeout(function() {
        block.draggable = true;
        block.dataset.word = word;

        block.addEventListener('dragstart', function(e) {
            if (!isBuilding || isCompleted) {
                draggedWord = word;
                block.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            }
        });

        block.addEventListener('dragend', function(e) {
            block.classList.remove('dragging');
            draggedWord = null;
        });
    }, 200);

    document.getElementById('canvas').appendChild(block);

    if (!isCompleted) {
        currentSentence.push(blockData);
    }

    // Auto-scroll to show the new block
    setTimeout(function() {
        // Ensure canvas is large enough to contain the block
        updateCanvasSize();

        block.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, 100);

    return blockData;
}

function updateCanvasSize() {
    const canvas = document.getElementById('canvas');
    const blocks = canvas.querySelectorAll('.block');

    let maxX = window.innerWidth;
    let maxY = window.innerHeight;

    blocks.forEach(function(block) {
        const rect = block.getBoundingClientRect();
        const blockRight = block.offsetLeft + rect.width + 200; // Add margin
        const blockBottom = block.offsetTop + rect.height + 200; // Add margin

        if (blockRight > maxX) maxX = blockRight;
        if (blockBottom > maxY) maxY = blockBottom;
    });

    canvas.style.minWidth = maxX + 'px';
    canvas.style.minHeight = maxY + 'px';
}

function clearOptions() {
    optionElements.forEach(function(el) { el.remove(); });
    optionElements = [];
}

function renderOptions() {
    clearOptions();

    if (currentSentence.length === 0 || !isBuilding) return;

    const options = getNextOptions();
    if (options.length === 0) return;

    const lastBlock = currentSentence[currentSentence.length - 1];
    const lineHeight = 50;

    options.forEach(function(option, index) {
        const optionEl = document.createElement('div');
        optionEl.className = 'option-text';
        if (index === selectedIndex) {
            optionEl.classList.add('selected');
        }
        optionEl.textContent = option.toUpperCase();

        if (lastBlock.isHorizontal) {
            optionEl.style.left = (lastBlock.x + lastBlock.width + 20) + 'px';
            optionEl.style.top = (lastBlock.y + index * lineHeight) + 'px';
        } else {
            optionEl.style.left = (lastBlock.x + 20) + 'px';
            optionEl.style.top = (lastBlock.y + lastBlock.width + index * lineHeight) + 'px';
        }

        document.getElementById('canvas').appendChild(optionEl);
        optionElements.push(optionEl);
    });
}

function selectOption() {
    const options = getNextOptions();
    if (selectedIndex >= 0 && selectedIndex < options.length) {
        const word = options[selectedIndex];
        const lastBlock = currentSentence[currentSentence.length - 1];

        const newSize = measureText(word);

        let newX, newY, newIsHorizontal;

        // First block after "we" should be horizontal
        if (currentSentence.length === 1) {
            newIsHorizontal = true;
        } else {
            // Continue in same direction by default, unless it would go off screen
            newIsHorizontal = lastBlock.isHorizontal;
        }

        const gap = 0; // Gap between blocks

        if (lastBlock.isHorizontal && newIsHorizontal) {
            // Horizontal → Horizontal: continue straight right
            newX = lastBlock.x + lastBlock.width + gap;
            newY = lastBlock.y;
        } else if (lastBlock.isHorizontal && !newIsHorizontal) {
            // Horizontal → Vertical: perpendicular corner, going down
            newX = lastBlock.x + lastBlock.width + gap;
            newY = lastBlock.y + lastBlock.height + gap;
        } else if (!lastBlock.isHorizontal && newIsHorizontal) {
            // Vertical → Horizontal: perpendicular corner, going right
            newX = lastBlock.x + lastBlock.height + gap;
            newY = lastBlock.y + lastBlock.width + gap;
        } else {
            // Vertical → Vertical: continue straight down
            newX = lastBlock.x;
            newY = lastBlock.y + lastBlock.width + gap;
        }

        addBlock(word, newX, newY, newIsHorizontal);
        selectedIndex = 0;
        renderOptions();
    }
}

function endSentence() {
    if (currentSentence.length === 0) return;

    const lastBlock = currentSentence[currentSentence.length - 1];
    let periodX, periodY;

    if (lastBlock.isHorizontal) {
        periodX = lastBlock.x + lastBlock.width;
        periodY = lastBlock.y;
    } else {
        periodX = lastBlock.x - 50;
        periodY = lastBlock.y + lastBlock.width;
    }

    const periodBlock = document.createElement('div');
    periodBlock.className = 'block completed';
    periodBlock.textContent = '.';
    periodBlock.style.backgroundColor = getColorForWord('period');
    periodBlock.style.color = '#000';
    periodBlock.style.left = periodX + 'px';
    periodBlock.style.top = periodY + 'px'; 
    periodBlock.style.padding = '8px 12px';
    periodBlock.style.fontSize = '28px';
    periodBlock.style.fontWeight = '900';
    periodBlock.style.border = '3px solid #000';
    periodBlock.style.boxSizing = 'border-box';
    periodBlock.style.display = 'flex';
    periodBlock.style.alignItems = 'center';
    periodBlock.style.justifyContent = 'center';

    document.getElementById('canvas').appendChild(periodBlock);

    // Auto-scroll to show th//.e period
    setTimeout(function() {
        updateCanvasSize();
        periodBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, 100);

    isBuilding = false;
    clearOptions();

    sentences.push(currentSentence.slice());
    currentSentence = [];
}

function startNewSentence(word, x, y) {
    isBuilding = true;
    currentSentence = [];
    selectedIndex = 0;
    addBlock(word, x, y, true);
    renderOptions();
}

function undo() {
    if (currentSentence.length > 1) {
        const lastBlock = currentSentence.pop();
        lastBlock.element.remove();
        selectedIndex = 0;
        renderOptions();
    }
}

const canvas = document.getElementById('canvas');

canvas.addEventListener('dragover', function(e) {
    e.preventDefault();
});

canvas.addEventListener('drop', function(e) {
    e.preventDefault();

    if (draggedWord && !isBuilding) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left - 50;
        const y = e.clientY - rect.top - 22;
        startNewSentence(draggedWord, x, y);
        draggedWord = null;
    }
});

document.addEventListener('keydown', function(e) {
    if (!isBuilding) return;

    const options = getNextOptions();

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % options.length;
        renderOptions();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + options.length) % options.length;
        renderOptions();
    } else if (e.key === ' ') {
        e.preventDefault();
        selectOption();
    } else if (e.key === '.') {
        e.preventDefault();
        endSentence();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        undo();
    }
});

const startX = window.innerWidth / 2 - 50;
const startY = window.innerHeight / 2 - 22;
addBlock('we', startX, startY, true);
renderOptions();
