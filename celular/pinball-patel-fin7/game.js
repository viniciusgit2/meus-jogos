// Traduções
const translations = {
    pt: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'PONTUAÇÃO',
        ballsLabel: 'BOLAS',
        highScoreLabel: 'RECORDE',
        leftFlipperLabel: 'ESQUERDA',
        centerFlipperLabel: 'CENTRO',
        rightFlipperLabel: 'DIREITA',
        startLabel: 'INICIAR',
        instructionsTitle: 'INSTRUÇÕES',
        inst1: 'Use SETA ESQUERDA, SETA DIREITA e SETA PARA BAIXO para controlar os 3 flippers',
        inst2: 'A bola inicia automaticamente',
        inst3: 'Em dispositivos móveis, toque nos botões na tela',
        inst4: 'Acerte os alvos neon para ganhar pontos',
        inst5: 'Evite perder a bola na parte inferior',
        inst6: 'Você tem 3 bolas por jogo',
        inst7: 'Use a barra de rolagem para ver mais informações',
        inst8: 'O jogo detecta automaticamente seu idioma baseado na localização',
        inst9: 'Celular: suporte por toque otimizado para comandos na tela',
        inst10: 'Dica: em modo paisagem os controles ficam mais confortáveis',
        gameOver: 'JOGO ENCERRADO',
        newHighScore: 'NOVO RECORDE!',
        volumeLabel: '🔊 VOLUME:'
    },
    en: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'SCORE',
        ballsLabel: 'BALLS',
        highScoreLabel: 'HIGH SCORE',
        leftFlipperLabel: 'LEFT',
        centerFlipperLabel: 'CENTER',
        rightFlipperLabel: 'RIGHT',
        startLabel: 'START',
        instructionsTitle: 'INSTRUCTIONS',
        inst1: 'Use LEFT, RIGHT and DOWN ARROW keys to control the 3 flippers',
        inst2: 'Ball launches automatically',
        inst3: 'On mobile devices, tap the on-screen buttons',
        inst4: 'Hit neon targets to score points',
        inst5: 'Avoid losing the ball at the bottom',
        inst6: 'You have 3 balls per game',
        inst7: 'Use the scrollbar to see more information',
        inst8: 'The game automatically detects your language based on location',
        inst9: 'Mobile: touch controls are optimized for on-screen play',
        inst10: 'Tip: landscape mode offers the best control comfort',
        gameOver: 'GAME OVER',
        newHighScore: 'NEW HIGH SCORE!',
        volumeLabel: '🔊 VOLUME:'
    },
    es: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'PUNTUACIÓN',
        ballsLabel: 'BOLAS',
        highScoreLabel: 'RÉCORD',
        leftFlipperLabel: 'IZQUIERDA',
        centerFlipperLabel: 'CENTRO',
        rightFlipperLabel: 'DERECHA',
        startLabel: 'INICIAR',
        instructionsTitle: 'INSTRUCCIONES',
        inst1: 'Use las teclas FLECHA IZQUIERDA, FLECHA DERECHA y FLECHA ABAJO para controlar los 3 flippers',
        inst2: 'La bola se inicia automáticamente',
        inst3: 'En dispositivos móviles, toque los botones en la pantalla',
        inst4: 'Golpee los objetivos neón para ganar puntos',
        inst5: 'Evite perder la bola en la parte inferior',
        inst6: 'Tiene 3 bolas por juego',
        inst7: 'Use la barra de desplazamiento para ver más información',
        inst8: 'El juego detecta automáticamente su idioma según la ubicación',
        gameOver: 'JUEGO TERMINADO',
        newHighScore: '¡NUEVO RÉCORD!',
        volumeLabel: '🔊 VOLUMEN:'
    },
    fr: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'SCORE',
        ballsLabel: 'BALLES',
        highScoreLabel: 'MEILLEUR SCORE',
        leftFlipperLabel: 'GAUCHE',
        centerFlipperLabel: 'CENTRE',
        rightFlipperLabel: 'DROITE',
        startLabel: 'DÉMARRER',
        instructionsTitle: 'INSTRUCTIONS',
        inst1: 'Utilisez les touches FLÈCHE GAUCHE, FLÈCHE DROITE et FLÈCHE BAS pour contrôler les 3 flippers',
        inst2: 'La balle se lance automatiquement',
        inst3: 'Sur les appareils mobiles, appuyez sur les boutons à l\'écran',
        inst4: 'Frappez les cibles néon pour marquer des points',
        inst5: 'Évitez de perdre la balle en bas',
        inst6: 'Vous avez 3 balles par partie',
        inst7: 'Utilisez la barre de défilement pour voir plus d\'informations',
        inst8: 'Le jeu détecte automatiquement votre langue en fonction de votre localisation',
        gameOver: 'PARTIE TERMINÉE',
        newHighScore: 'NOUVEAU RECORD!',
        volumeLabel: '🔊 VOLUME:'
    },
    de: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'PUNKTZAHL',
        ballsLabel: 'BÄLLE',
        highScoreLabel: 'HÖCHSTPUNKTZAHL',
        leftFlipperLabel: 'LINKS',
        centerFlipperLabel: 'MITTE',
        rightFlipperLabel: 'RECHTS',
        startLabel: 'START',
        instructionsTitle: 'ANLEITUNG',
        inst1: 'Verwenden Sie die PFEIL LINKS, PFEIL RECHTS und PFEIL UNTEN Tasten um die 3 Flipper zu steuern',
        inst2: 'Der Ball startet automatisch',
        inst3: 'Auf mobilen Geräten tippen Sie auf die Bildschirmtasten',
        inst4: 'Treffen Sie Neon-Ziele um Punkte zu erzielen',
        inst5: 'Vermeiden Sie es den Ball unten zu verlieren',
        inst6: 'Sie haben 3 Bälle pro Spiel',
        inst7: 'Verwenden Sie die Scrollleiste um weitere Informationen zu sehen',
        inst8: 'Das Spiel erkennt automatisch Ihre Sprache basierend auf dem Standort',
        gameOver: 'SPIEL VORBEI',
        newHighScore: 'NEUER REKORD!',
        volumeLabel: '🔊 LAUTSTÄRKE:'
    },
    it: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'PUNTEGGIO',
        ballsLabel: 'PALLE',
        highScoreLabel: 'PUNTEGGIO MASSIMO',
        leftFlipperLabel: 'SINISTRA',
        centerFlipperLabel: 'CENTRO',
        rightFlipperLabel: 'DESTRA',
        startLabel: 'INIZIA',
        instructionsTitle: 'ISTRUZIONI',
        inst1: 'Usa i tasti FRECCIA SINISTRA, FRECCIA DESTRA e FRECCIA GIÙ per controllare i 3 flipper',
        inst2: 'La palla si avvia automaticamente',
        inst3: 'Sui dispositivi mobili, tocca i pulsanti sullo schermo',
        inst4: 'Colpisci i bersagli al neon per segnare punti',
        inst5: 'Evita di perdere la palla in basso',
        inst6: 'Hai 3 palle per partita',
        inst7: 'Usa la barra di scorrimento per vedere più informazioni',
        inst8: 'Il gioco rileva automaticamente la tua lingua in base alla posizione',
        gameOver: 'PARTITA FINITA',
        newHighScore: 'NUOVO RECORD!',
        volumeLabel: '🔊 VOLUME:'
    },
    ja: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'スコア',
        ballsLabel: 'ボール',
        highScoreLabel: 'ハイスコア',
        leftFlipperLabel: '左',
        centerFlipperLabel: '中央',
        rightFlipperLabel: '右',
        startLabel: 'スタート',
        instructionsTitle: '説明',
        inst1: '左矢印、右矢印、下矢印キーを使用して3つのフリッパーを制御します',
        inst2: 'ボールは自動的に発射されます',
        inst3: 'モバイルデバイスでは、画面上のボタンをタップします',
        inst4: 'ネオンターゲットに当ててポイントを獲得します',
        inst5: '下部でボールを失わないようにします',
        inst6: 'ゲームごとに3つのボールがあります',
        inst7: 'スクロールバーを使用して詳細情報を表示します',
        inst8: 'ゲームは位置情報に基づいて自動的に言語を検出します',
        gameOver: 'ゲームオーバー',
        newHighScore: '新記録！',
        volumeLabel: '🔊 音量:'
    },
    zh: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: '分数',
        ballsLabel: '球',
        highScoreLabel: '最高分',
        leftFlipperLabel: '左',
        centerFlipperLabel: '中',
        rightFlipperLabel: '右',
        startLabel: '开始',
        instructionsTitle: '说明',
        inst1: '使用左箭头、右箭头和下箭头键控制3个挡板',
        inst2: '球会自动发射',
        inst3: '在移动设备上，点击屏幕按钮',
        inst4: '击中霓虹目标获得分数',
        inst5: '避免在底部失去球',
        inst6: '每局游戏有3个球',
        inst7: '使用滚动条查看更多信息',
        inst8: '游戏会根据位置自动检测您的语言',
        gameOver: '游戏结束',
        newHighScore: '新纪录！',
        volumeLabel: '🔊 音量:'
    },
    ru: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'СЧЁТ',
        ballsLabel: 'ШАРЫ',
        highScoreLabel: 'РЕКОРД',
        leftFlipperLabel: 'ЛЕВО',
        centerFlipperLabel: 'ЦЕНТР',
        rightFlipperLabel: 'ПРАВО',
        startLabel: 'СТАРТ',
        instructionsTitle: 'ИНСТРУКЦИИ',
        inst1: 'Используйте клавиши СТРЕЛКА ВЛЕВО, СТРЕЛКА ВПРАВО и СТРЕЛКА ВНИЗ для управления 3 флипперами',
        inst2: 'Мяч запускается автоматически',
        inst3: 'На мобильных устройствах нажимайте кнопки на экране',
        inst4: 'Попадайте в неоновые цели для получения очков',
        inst5: 'Избегайте потери шара внизу',
        inst6: 'У вас есть 3 шара на игру',
        inst7: 'Используйте полосу прокрутки для просмотра дополнительной информации',
        inst8: 'Игра автоматически определяет ваш язык на основе местоположения',
        gameOver: 'ИГРА ОКОНЧЕНА',
        newHighScore: 'НОВЫЙ РЕКОРД!',
        volumeLabel: '🔊 ГРОМКОСТЬ:'
    },
    ar: {
        title: 'NEON SKULL PINBALL',
        scoreLabel: 'النقاط',
        ballsLabel: 'الكرات',
        highScoreLabel: 'أعلى نقاط',
        leftFlipperLabel: 'يسار',
        centerFlipperLabel: 'وسط',
        rightFlipperLabel: 'يمين',
        startLabel: 'ابدأ',
        instructionsTitle: 'التعليمات',
        inst1: 'استخدم مفاتيح السهم الأيسر والسهم الأيمن والسهم السفلي للتحكم في الزعانف الثلاثة',
        inst2: 'تُطلق الكرة تلقائيًا',
        inst3: 'على الأجهزة المحمولة، انقر على الأزرار الموجودة على الشاشة',
        inst4: 'اصطدم بالأهداف النيون للحصول على نقاط',
        inst5: 'تجنب فقدان الكرة في الأسفل',
        inst6: 'لديك 3 كرات لكل لعبة',
        inst7: 'استخدم شريط التمرير لرؤية المزيد من المعلومات',
        inst8: 'تكتشف اللعبة لغتك تلقائيًا بناءً على الموقع',
        gameOver: 'انتهت اللعبة',
        newHighScore: 'رقم قياسي جديد!',
        volumeLabel: '🔊 مستوى الصوت:'
    }
};

Object.values(translations).forEach((translation) => {
    translation.title = 'NEON SKULL PINBALL 6';
});

// Sistema de Áudio
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = AudioContext ? new AudioContext() : null;
let masterVolume = 0.7;

// Música de Fundo
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = masterVolume;

function iniciarMusicaAuto() {
    backgroundMusic.play().catch(() => {});
}

window.addEventListener('load', iniciarMusicaAuto);
window.addEventListener('pageshow', iniciarMusicaAuto);
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) iniciarMusicaAuto();
});
setInterval(iniciarMusicaAuto, 3000);

// Funções de som sintetizado
function playSound(type) {
    if (!audioCtx) return;
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    switch(type) {
        case 'flipper':
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(150, now);
            oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);
            gainNode.gain.setValueAtTime(masterVolume * 0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
            break;
            
        case 'hit':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.exponentialRampToValueAtTime(400, now + 0.15);
            gainNode.gain.setValueAtTime(masterVolume * 0.4, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            oscillator.start(now);
            oscillator.stop(now + 0.15);
            break;
            
        case 'launch':
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(100, now);
            oscillator.frequency.exponentialRampToValueAtTime(300, now + 0.2);
            gainNode.gain.setValueAtTime(masterVolume * 0.4, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            oscillator.start(now);
            oscillator.stop(now + 0.2);
            break;

            
        case 'wall':
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(200, now);
            gainNode.gain.setValueAtTime(masterVolume * 0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            oscillator.start(now);
            oscillator.stop(now + 0.05);
            break;
            
        case 'lose':
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(400, now);
            oscillator.frequency.exponentialRampToValueAtTime(50, now + 0.5);
            gainNode.gain.setValueAtTime(masterVolume * 0.5, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            oscillator.start(now);
            oscillator.stop(now + 0.5);
            break;
            
        case 'gameOver':
            // Som de game over (sequência descendente)
            const freqs = [400, 350, 300, 250, 200];
            freqs.forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'square';
                osc.frequency.setValueAtTime(freq, now + i * 0.15);
                gain.gain.setValueAtTime(masterVolume * 0.3, now + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.15);
                osc.start(now + i * 0.15);
                osc.stop(now + i * 0.15 + 0.15);
            });
            return;
            
        case 'highScore':
            // Som de novo recorde (sequência ascendente)
            const notesUp = [523, 587, 659, 784, 880];
            notesUp.forEach((freq, i) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.1);
                gain.gain.setValueAtTime(masterVolume * 0.4, now + i * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.2);
                osc.start(now + i * 0.1);
                osc.stop(now + i * 0.1 + 0.2);
            });
            return;
    }
}

// Controle de volume
const volumeControl = document.getElementById('volumeControl');
const volumeValue = document.getElementById('volumeValue');

volumeControl.addEventListener('input', (e) => {
    masterVolume = e.target.value / 100;
    volumeValue.textContent = e.target.value + '%';
    backgroundMusic.volume = masterVolume;
});



// Configuração do Canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Bumpers laterais que invertem direção (declaração inicial)
let bumpers = [
    {
        x: 40,
        y: 200,
        radius: 25,
        color: '#FFD700'
    },
    {
        x: 560,
        y: 200,
        radius: 25,
        color: '#FFD700'
    }
];

// Launcher (plunger) - bola pode entrar aqui e ser lançada com Espaço
let launcher = {
    x: canvas.width - 40,
    y: canvas.height - 60,
    width: 32,
    height: 56,
    color: '#00FFFF',
    inUse: false
};

// Configuração responsiva do canvas
function resizeCanvas() {
    const container = document.querySelector('.game-container');
    // Usar largura do container para preencher melhor a área disponível e aumentar o máximo
    // Garantir um mínimo razoável para telas pequenas, sem forçar overflow
    const maxWidth = Math.min(920, Math.max(360, window.innerWidth - 40, container.clientWidth - 20));
    const maxHeight = window.innerHeight * 0.78;
    
    canvas.width = maxWidth;
    canvas.height = Math.min(maxHeight, Math.round(maxWidth * 1.3));
    
    // Atualizar posição dos bumpers (altura intermediária)
    bumpers[0].x = 40;
    bumpers[0].y = canvas.height * 0.55;
    bumpers[1].x = canvas.width - 40;
    bumpers[1].y = canvas.height * 0.55;

    // Atualizar posição do launcher
    if (typeof launcher !== 'undefined') {
        launcher.x = canvas.width - 40;
        launcher.y = canvas.height - 60;
    }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Estado do jogo
let gameState = {
    score: 0,
    balls: 3,
    highScore: localStorage.getItem('highScore') || 0,
    gameActive: false,
    currentLanguage: 'pt',

};

// Bola (caveira em chamas)
let ball = {
    x: canvas.width * 0.5,
    y: canvas.height * 0.75,
    radius: 12,
    vx: 0,
    vy: 0,
    launched: false
};

const LAUNCH_VERTICAL_SPEED = -12.6;
const LAUNCH_HORIZONTAL_VARIATION = 3.2;
const FLIPPER_VERTICAL_BOOST = -12.4;
const FLIPPER_HORIZONTAL_BOOST = 0.35;

function launchBallFromLauncher() {
    if (!gameState.gameActive || !ball.inLauncher) return;

    ball.inLauncher = false;
    ball.launched = true;
    ball.vy = LAUNCH_VERTICAL_SPEED;
    ball.vx = (Math.random() - 0.5) * LAUNCH_HORIZONTAL_VARIATION;
    playSound('launch');
}

// Flippers
let leftFlipper = {
    x: canvas.width * 0.25,
    y: canvas.height - 50,
    width: 132,
    height: 18,
    angle: -0.3,
    targetAngle: -0.3,
    active: false
};

let rightFlipper = {
    x: canvas.width * 0.75,
    y: canvas.height - 50,
    width: 132,
    height: 18,
    angle: 0.3,
    targetAngle: 0.3,
    active: false
};

let centerFlipper = {
    x: canvas.width * 0.5,
    y: canvas.height - 80,
    width: 120,
    height: 18,
    angle: 0,
    targetAngle: 0,
    active: false
};

// Alvos
let targets = [];
function createTargets() {
    targets = [];
    const rows = 3;
    const cols = 5;
    const spacing = canvas.width / (cols + 1);
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            targets.push({
                x: spacing * (col + 1),
                y: 130 + row * 60,
                radius: 20,
                hit: false,
                hitTimer: 0,
                points: (rows - row) * 100
            });
        }
    }
}

createTargets();

// túnel removido (feature deletada)


// Detecção automática de idioma
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    
    if (translations[langCode]) {
        return langCode;
    }
    return 'en'; // Padrão para inglês
}

// Aplicar tradução
function applyTranslation(lang) {
    gameState.currentLanguage = lang;
    const t = translations[lang];
    
    document.getElementById('title').textContent = t.title;
    document.getElementById('scoreLabel').textContent = t.scoreLabel;
    document.getElementById('ballsLabel').textContent = t.ballsLabel;
    document.getElementById('highScoreLabel').textContent = t.highScoreLabel;
    document.getElementById('leftFlipperLabel').textContent = t.leftFlipperLabel;
    document.getElementById('centerFlipperLabel').textContent = t.centerFlipperLabel;
    document.getElementById('rightFlipperLabel').textContent = t.rightFlipperLabel;
    document.getElementById('startLabel').textContent = t.startLabel;
    document.getElementById('instructionsTitle').textContent = t.instructionsTitle;
    document.getElementById('inst1').textContent = t.inst1;
    document.getElementById('inst2').textContent = t.inst2;
    document.getElementById('inst3').textContent = t.inst3;
    document.getElementById('inst4').textContent = t.inst4;
    document.getElementById('inst5').textContent = t.inst5;
    document.getElementById('inst6').textContent = t.inst6;
    document.getElementById('inst7').textContent = t.inst7;
    document.getElementById('inst8').textContent = t.inst8;
    document.getElementById('inst9').textContent = t.inst9 || translations.en.inst9;
    document.getElementById('inst10').textContent = t.inst10 || translations.en.inst10;
    document.getElementById('volumeLabel').textContent = t.volumeLabel;
}

// Inicializar idioma
const detectedLang = detectLanguage();
document.getElementById('languageSelect').value = detectedLang;
applyTranslation(detectedLang);

// Event listener para mudança de idioma
document.getElementById('languageSelect').addEventListener('change', (e) => {
    applyTranslation(e.target.value);
});

// Atualizar UI
function updateUI() {
    document.getElementById('scoreValue').textContent = gameState.score;
    document.getElementById('ballsValue').textContent = gameState.balls;
    document.getElementById('highScoreValue').textContent = gameState.highScore;
}

// Desenhar caveira em chamas
function drawSkullBall(x, y, radius) {
    // Chamas ao redor
    const flameCount = 8;
    for (let i = 0; i < flameCount; i++) {
        const angle = (Math.PI * 2 * i) / flameCount + Date.now() * 0.005;
        const flameX = x + Math.cos(angle) * radius * 1.2;
        const flameY = y + Math.sin(angle) * radius * 1.2;
        
        const gradient = ctx.createRadialGradient(flameX, flameY, 0, flameX, flameY, radius * 0.5);
        gradient.addColorStop(0, 'rgba(255, 100, 0, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(flameX, flameY, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Caveira
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    
    // Cabeça da caveira
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Olhos
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(x - radius * 0.3, y - radius * 0.2, radius * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x + radius * 0.3, y - radius * 0.2, radius * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    // Nariz
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - radius * 0.15, y + radius * 0.2);
    ctx.lineTo(x + radius * 0.15, y + radius * 0.2);
    ctx.closePath();
    ctx.fill();
    
    // Boca/dentes
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 1.5;
    for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(x + i * radius * 0.2, y + radius * 0.4);
        ctx.lineTo(x + i * radius * 0.2, y + radius * 0.7);
        ctx.stroke();
    }
    
    // Brilho neon vermelho
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 20;
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
}

// Desenhar flipper
function drawFlipper(flipper, isLeft) {
    ctx.save();
    ctx.translate(flipper.x, flipper.y);
    ctx.rotate(flipper.angle);
    
    // Gradiente neon
    const gradient = ctx.createLinearGradient(-flipper.width/2, 0, flipper.width/2, 0);
    gradient.addColorStop(0, '#ff0000');
    gradient.addColorStop(0.5, '#ff3333');
    gradient.addColorStop(1, '#ff0000');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 3;
    
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 15;
    
    ctx.beginPath();
    ctx.roundRect(-flipper.width/2, -flipper.height/2, flipper.width, flipper.height, 7);
    ctx.fill();
    ctx.stroke();
    
    ctx.shadowBlur = 0;
    ctx.restore();
}

// Desenhar alvo
function drawTarget(target) {
    const gradient = ctx.createRadialGradient(target.x, target.y, 0, target.x, target.y, target.radius);
    gradient.addColorStop(0, '#b44bff');
    gradient.addColorStop(0.5, '#7a22d1');
    gradient.addColorStop(1, '#4b0082');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#b44bff';
    ctx.lineWidth = 2;
    
    ctx.shadowColor = '#b44bff';
    ctx.shadowBlur = 20;
    
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Pontos no centro
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px Courier New';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(target.points, target.x, target.y + 3);

    // Mini animação ao acertar (pulso neon)
    if (target.hitTimer && target.hitTimer > 0) {
        const pulse = 1 + (target.hitTimer / 12) * 0.6;
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 80, 80, 0.9)';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#ff4d4d';
        ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.radius * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }

    ctx.shadowBlur = 0;
}

// Desenhar bumpers
function drawBumper(bumper) {
    const gradient = ctx.createRadialGradient(bumper.x, bumper.y, 0, bumper.x, bumper.y, bumper.radius);
    gradient.addColorStop(0, '#FFFF00');
    gradient.addColorStop(0.5, bumper.color);
    gradient.addColorStop(1, '#FF8C00');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = bumper.color;
    ctx.lineWidth = 3;
    
    ctx.shadowColor = bumper.color;
    ctx.shadowBlur = 25;
    
    ctx.beginPath();
    ctx.arc(bumper.x, bumper.y, bumper.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Desenhar seta indicando inversão
    ctx.fillStyle = '#000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('↔', bumper.x, bumper.y);
    
    ctx.shadowBlur = 0;
}

// Física do jogo
// Desenhar túnel (entrada e saída)

function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;

    if (lenSq === 0) {
        const sx = px - x1;
        const sy = py - y1;
        return Math.sqrt(sx * sx + sy * sy);
    }

    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
    const projX = x1 + t * dx;
    const projY = y1 + t * dy;
    const distX = px - projX;
    const distY = py - projY;
    return Math.sqrt(distX * distX + distY * distY);
}

function updatePhysics() {
    if (!gameState.gameActive) return;

    const prevX = ball.x;
    const prevY = ball.y;
    
    // Gravidade
    ball.vy += 0.20;
    
    // Atualizar posição
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    // Colisão com paredes
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.vx *= -0.8;
        ball.x = ball.x < canvas.width / 2 ? ball.radius : canvas.width - ball.radius;
        playSound('wall');
    }
    
    if (ball.y - ball.radius < 0) {
        ball.vy *= -0.8;
        ball.y = ball.radius;
        playSound('wall');
    }
    

    // Perder a bola
    if (ball.y > canvas.height + ball.radius) {
        playSound('lose');
        gameState.balls--;
        if (gameState.balls > 0) {
            resetBall();
        } else {
            endGame();
        }
        updateUI();
    }
    
    // Colisão com alvos
    targets.forEach(target => {
        const dx = ball.x - target.x;
        const dy = ball.y - target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const pathDistance = pointToSegmentDistance(target.x, target.y, prevX, prevY, ball.x, ball.y);
        const hitRadius = ball.radius + target.radius;
        
        if (distance < hitRadius || pathDistance < hitRadius) {
            if (!target.hitTimer || target.hitTimer <= 0) {
                gameState.score += target.points;
                updateUI();
                playSound('hit');
                target.hitTimer = 12;
            }
            
            // Desviar trajetória com impulso
            const angle = Math.atan2(dy, dx);
            const speed = Math.max(7.8, Math.hypot(ball.vx, ball.vy));
            const jitter = (Math.random() - 0.5) * 0.5;
            ball.vx = Math.cos(angle + jitter) * speed;
            ball.vy = Math.sin(angle + jitter) * speed;
            
            // Afastar a bola do alvo para evitar múltiplos hits contínuos
            ball.x = target.x + Math.cos(angle) * (ball.radius + target.radius + 2);
            ball.y = target.y + Math.sin(angle) * (ball.radius + target.radius + 2);
        }
    });
    
    // Atualizar animação dos alvos
    targets.forEach(target => {
        if (target.hitTimer && target.hitTimer > 0) {
            target.hitTimer -= 1;
        }
    });

    // Colisão com bumpers (invertem direção horizontal)
    bumpers.forEach(bumper => {
        const dx = ball.x - bumper.x;
        const dy = ball.y - bumper.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < ball.radius + bumper.radius) {
            // Inverter direção horizontal
            ball.vx *= -1.0;
            // Manter ou amplificar direção vertical
            ball.vy *= 1.0;
            
            // Afastar a bola do bumper
            const angle = Math.atan2(dy, dx);
            ball.x = bumper.x + Math.cos(angle) * (ball.radius + bumper.radius + 2);
            ball.y = bumper.y + Math.sin(angle) * (ball.radius + bumper.radius + 2);
            
            gameState.score += 50;
            updateUI();
            playSound('hit');
        }
    });

    // Capturar a bola no launcher se ela entrar na área inferior e estiver descendo
    if (typeof launcher !== 'undefined' && !ball.inLauncher && ball.vy > 0) {
        const lx = launcher.x;
        const ly = launcher.y;
        const left = lx - launcher.width/2;
        const right = lx + launcher.width/2;
        const top = ly - launcher.height/2;
        const bottom = ly + launcher.height/2;
        if (ball.x > left && ball.x < right && (ball.y + ball.radius) > top && (ball.y - ball.radius) < bottom) {
            // Capturar
            ball.inLauncher = true;
            ball.vx = 0;
            ball.vy = 0;
            ball.x = lx;
            ball.y = top - ball.radius + 2;
            playSound('launch');
        }
    }

    // Se a bola estiver no launcher, mantê-la fixada na posição
    if (ball.inLauncher) {
        ball.x = launcher.x;
        ball.y = launcher.y - launcher.height/2 - ball.radius + 2;
    }
    
    // Colisão com flippers
    checkFlipperCollision(leftFlipper);
    checkFlipperCollision(rightFlipper);
    checkFlipperCollision(centerFlipper);
    
    // Atualizar ângulos dos flippers
    leftFlipper.angle += (leftFlipper.targetAngle - leftFlipper.angle) * 0.2;
    rightFlipper.angle += (rightFlipper.targetAngle - rightFlipper.angle) * 0.2;
    centerFlipper.angle += (centerFlipper.targetAngle - centerFlipper.angle) * 0.2;



}

function checkFlipperCollision(flipper) {
    const dx = ball.x - flipper.x;
    const dy = ball.y - flipper.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < ball.radius + flipper.height && 
        Math.abs(dx) < flipper.width / 2 && 
        Math.abs(dy) < flipper.height * 2) {
        
        ball.vy = FLIPPER_VERTICAL_BOOST;
        ball.vx += (ball.x - flipper.x) * FLIPPER_HORIZONTAL_BOOST;
        ball.y = flipper.y - ball.radius - flipper.height;
        playSound('flipper');
    }
}

// Desenhar launcher (plunger)
function drawLauncher() {
    const lx = launcher.x;
    const ly = launcher.y;
    ctx.save();
    ctx.fillStyle = launcher.color;
    ctx.strokeStyle = '#003333';
    ctx.lineWidth = 2;
    // corpo do launcher
    ctx.beginPath();
    ctx.roundRect(lx - launcher.width/2, ly - launcher.height/2, launcher.width, launcher.height, 6);
    ctx.fill();
    ctx.stroke();

    // indicador de instrução
    if (ball.inLauncher) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        const hint = (translations[gameState.currentLanguage] && translations[gameState.currentLanguage].inst2) ? translations[gameState.currentLanguage].inst2 : 'Press SPACE to launch';
        ctx.fillText(hint, lx, ly - launcher.height/2 - 10);
    }
    ctx.restore();
}

// Resetar bola
function resetBall() {
    ball.x = canvas.width * 0.5;
    ball.y = canvas.height * 0.75;
    ball.vx = 0;
    ball.vy = 0;
    ball.launched = false;
    ball.inLauncher = false;
}


// Iniciar jogo
function startGame() {
    gameState.score = 0;
    gameState.balls = 3;
    gameState.gameActive = true;
    createTargets();
    resetBall();

    // Colocar a bola no launcher para começar imediatamente
    ball.inLauncher = true;
    // Lançamento automático após pequeno atraso (corresponde à mensagem "A bola inicia automaticamente")
    setTimeout(() => {
        if (gameState.gameActive && ball.inLauncher) {
            launchBallFromLauncher();
        }
    }, 400);

    updateUI();

    // Desativar botão iniciar enquanto o jogo estiver ativo
    if (typeof startBtn !== 'undefined' && startBtn) {
        startBtn.disabled = true;
        startBtn.textContent = translations[gameState.currentLanguage] ? translations[gameState.currentLanguage].startLabel + '…' : 'INICIAR…';
    }
    
    // Iniciar música de fundo
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log('Áudio bloqueado pelo navegador'));
    }
}

// Finalizar jogo
function endGame() {
    gameState.gameActive = false;
    
    // Pausar música de fundo
    backgroundMusic.pause();
    
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('highScore', gameState.highScore);
        playSound('highScore');
        setTimeout(() => {
            alert(translations[gameState.currentLanguage].newHighScore);
        }, 800);
    } else {
        playSound('gameOver');
    }
    
    updateUI();

    // Reativar botão iniciar
    if (typeof startBtn !== 'undefined' && startBtn) {
        startBtn.disabled = false;
        startBtn.textContent = translations[gameState.currentLanguage] ? translations[gameState.currentLanguage].startLabel : 'INICIAR';
    }

    setTimeout(() => {
        alert(translations[gameState.currentLanguage].gameOver + '\n' + 
              translations[gameState.currentLanguage].scoreLabel + ': ' + gameState.score);
    }, gameState.score > gameState.highScore ? 1000 : 800);
}

// Loop de renderização
function render() {
    // Limpar canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar alvos
    targets.forEach(drawTarget);
    
    // Desenhar bumpers
    bumpers.forEach(drawBumper);
    
    // Desenhar flippers
    drawFlipper(leftFlipper, true);
    drawFlipper(rightFlipper, false);
    drawFlipper(centerFlipper, false);

    // Desenhar launcher
    if (typeof launcher !== 'undefined') {
        drawLauncher();
    }    

    // Desenhar bola (se estiver subindo, manter visível)
    drawSkullBall(ball.x, ball.y, ball.radius);
    
    // Atualizar física
    updatePhysics();
    
    requestAnimationFrame(render);
}

// Ativar áudio no primeiro clique (necessário para navegadores)
document.addEventListener('click', () => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    // Tentar reproduzir música de fundo se o jogo estiver ativo
    if (gameState.gameActive && backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log('Áudio bloqueado'));
    }
}, { once: true });

// Controles de teclado
document.addEventListener('keydown', (e) => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    if (e.code === 'ArrowLeft') {
        leftFlipper.targetAngle = -0.8;
        leftFlipper.active = true;
        playSound('flipper');
    }
    if (e.code === 'ArrowRight') {
        rightFlipper.targetAngle = 0.8;
        rightFlipper.active = true;
        playSound('flipper');
    }
    if (e.code === 'ArrowDown') {
        e.preventDefault();
        centerFlipper.targetAngle = -0.6;
        centerFlipper.active = true;
        playSound('flipper');
    }

    // Espaço: lançar a bola se estiver no launcher
    if (e.code === 'Space') {
        if (gameState.gameActive && ball.inLauncher) {
            e.preventDefault();
            launchBallFromLauncher();
        }
    }

});

document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft') {
        leftFlipper.targetAngle = -0.3;
        leftFlipper.active = false;
    }
    if (e.code === 'ArrowRight') {
        rightFlipper.targetAngle = 0.3;
        rightFlipper.active = false;
    }
    if (e.code === 'ArrowDown') {
        centerFlipper.targetAngle = 0;
        centerFlipper.active = false;
    }
});

// Controles de toque/mouse
const leftBtn = document.getElementById('leftFlipper');
const centerBtn = document.getElementById('centerFlipper');
const rightBtn = document.getElementById('rightFlipper');
const startBtn = document.getElementById('startBtn');

leftBtn.addEventListener('mousedown', () => {
    leftFlipper.targetAngle = -0.8;
});
leftBtn.addEventListener('mouseup', () => {
    leftFlipper.targetAngle = -0.3;
});
leftBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    leftFlipper.targetAngle = -0.8;
});
leftBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    leftFlipper.targetAngle = -0.3;
});

centerBtn.addEventListener('mousedown', () => {
    centerFlipper.targetAngle = -0.6;
});
centerBtn.addEventListener('mouseup', () => {
    centerFlipper.targetAngle = 0;
});
centerBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    centerFlipper.targetAngle = -0.6;
});
centerBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    centerFlipper.targetAngle = 0;
});

rightBtn.addEventListener('mousedown', () => {
    rightFlipper.targetAngle = 0.8;
});
rightBtn.addEventListener('mouseup', () => {
    rightFlipper.targetAngle = 0.3;
});
rightBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    rightFlipper.targetAngle = 0.8;
});
rightBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    rightFlipper.targetAngle = 0.3;
});


function handleStartBtn() {
    if (!gameState.gameActive) {
        startGame();
    }
}
startBtn.addEventListener('click', handleStartBtn);
startBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    handleStartBtn();
}, {passive: false});

// Inicializar
updateUI();
render();
