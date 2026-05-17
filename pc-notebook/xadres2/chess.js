// ─────────────────────────────────────────────────────────────────
//  XADREZ  –  Jogo completo com modo PvP e PvC (minimax + alpha-beta)
// ─────────────────────────────────────────────────────────────────

// Tipos de peça (positivo = brancas, negativo = pretas)
const KING   = 1;
const QUEEN  = 2;
const ROOK   = 3;
const BISHOP = 4;
const KNIGHT = 5;
const PAWN   = 6;

// Símbolos Unicode
const SYM = {
     1:'♔',  2:'♕',  3:'♖',  4:'♗',  5:'♘',  6:'♙',
    '-1':'♚','-2':'♛','-3':'♜','-4':'♝','-5':'♞','-6':'♟'
};

// Valor material
const VAL = { 1:20000, 2:900, 3:500, 4:330, 5:320, 6:100 };

// Tabelas posicionais (perspectiva das brancas; linha 0 = fileira 8)
const PST = {
    6: [  // Peão
        [  0,  0,  0,  0,  0,  0,  0,  0],
        [ 50, 50, 50, 50, 50, 50, 50, 50],
        [ 10, 10, 20, 30, 30, 20, 10, 10],
        [  5,  5, 10, 27, 27, 10,  5,  5],
        [  0,  0,  0, 20, 20,  0,  0,  0],
        [  5, -5,-10,  0,  0,-10, -5,  5],
        [  4, 10, 10,-20,-20, 10, 10,  4],
        [  0,  0,  0,  0,  0,  0,  0,  0]
    ],
    5: [  // Cavalo
        [-50,-40,-30,-30,-30,-30,-40,-50],
        [-40,-20,  0,  0,  0,  0,-20,-40],
        [-30,  0, 10, 15, 15, 10,  0,-30],
        [-30,  5, 15, 20, 20, 15,  5,-30],
        [-30,  0, 15, 20, 20, 15,  0,-30],
        [-30,  5, 10, 15, 15, 10,  5,-30],
        [-40,-20,  0,  5,  5,  0,-20,-40],
        [-50,-40,-30,-30,-30,-30,-40,-50]
    ],
    4: [  // Bispo
        [-20,-10,-10,-10,-10,-10,-10,-20],
        [-10,  0,  0,  0,  0,  0,  0,-10],
        [-10,  0,  5, 10, 10,  5,  0,-10],
        [-10,  5,  5, 10, 10,  5,  5,-10],
        [-10,  0, 10, 10, 10, 10,  0,-10],
        [-10, 10, 10, 10, 10, 10, 10,-10],
        [-10,  5,  0,  0,  0,  0,  5,-10],
        [-20,-10,-10,-10,-10,-10,-10,-20]
    ],
    3: [  // Torre
        [  0,  0,  0,  0,  0,  0,  0,  0],
        [  5, 10, 10, 10, 10, 10, 10,  5],
        [ -5,  0,  0,  0,  0,  0,  0, -5],
        [ -5,  0,  0,  0,  0,  0,  0, -5],
        [ -5,  0,  0,  0,  0,  0,  0, -5],
        [ -5,  0,  0,  0,  0,  0,  0, -5],
        [ -5,  0,  0,  0,  0,  0,  0, -5],
        [  0,  0,  0,  5,  5,  0,  0,  0]
    ],
    2: [  // Dama
        [-20,-10,-10, -5, -5,-10,-10,-20],
        [-10,  0,  0,  0,  0,  0,  0,-10],
        [-10,  0,  5,  5,  5,  5,  0,-10],
        [ -5,  0,  5,  5,  5,  5,  0, -5],
        [  0,  0,  5,  5,  5,  5,  0, -5],
        [-10,  5,  5,  5,  5,  5,  0,-10],
        [-10,  0,  5,  0,  0,  0,  0,-10],
        [-20,-10,-10, -5, -5,-10,-10,-20]
    ],
    1: [  // Rei (meio de jogo)
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-20,-30,-30,-40,-40,-30,-30,-20],
        [-10,-20,-20,-20,-20,-20,-20,-10],
        [ 20, 20,  0,  0,  0,  0, 20, 20],
        [ 20, 30, 10,  0,  0, 10, 30, 20]
    ]
};

// ─────────────────────────────────────────────────────────────────
//  Classe principal
// ─────────────────────────────────────────────────────────────────
// Profundidade minimax por dificuldade
const DEPTH = { easy: 1, medium: 2, hard: 4 };
// Chance de lance aleatório no modo fácil (0–1)
const RANDOM_CHANCE = { easy: 0.45, medium: 0, hard: 0 };

class ChessGame {
    constructor(mode, playerColor = 'white', difficulty = 'medium') {
        this.mode = mode;              // 'pvp' | 'pvc'
        this.playerColor = playerColor; // cor do jogador humano
        this.cpuColor = playerColor === 'white' ? 'black' : 'white';
        this.difficulty = difficulty;   // 'easy' | 'medium' | 'hard'
        // Se PvP, a cor do fundo é sempre quem está embaixo (playerColor)
        this.flipped = playerColor === 'black'; // tabuleiro invertido
        this.board = this._initBoard();
        this.turn = 'white';
        this.selected = null;      // {row,col}
        this.validMoves = [];      // [{row,col,special}]
        this.castling = {
            white: { k: true, q: true },
            black: { k: true, q: true }
        };
        this.enPassant = null;     // {row,col}
        this.lastMove = null;      // {from,to}
        this.capByWhite = [];      // peças capturadas pelas brancas (valores negativos)
        this.capByBlack = [];      // peças capturadas pelas pretas  (valores positivos)
        this.history = [];         // [{notation, color}]
        this.gameOver = false;
        this.statusMsg = '';
        this.promotionPending = null;
        this.cpuThinking = false;
    }

    _initBoard() {
        return [
            [-3,-5,-4,-2,-1,-4,-5,-3],
            [-6,-6,-6,-6,-6,-6,-6,-6],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 0, 0, 0, 0],
            [ 6, 6, 6, 6, 6, 6, 6, 6],
            [ 3, 5, 4, 2, 1, 4, 5, 3]
        ];
    }

    // ── Utilitários básicos ──────────────────────────────────────
    _color(p) { return p > 0 ? 'white' : p < 0 ? 'black' : null; }
    _enemy(p, c) { return c === 'white' ? p < 0 : p > 0; }
    _friendly(p, c) { return c === 'white' ? p > 0 : p < 0; }
    _inBounds(r, c) { return r >= 0 && r < 8 && c >= 0 && c < 8; }

    // ── Geração de lances pseudo-legais ─────────────────────────
    _pseudoMoves(board, r, c, castling, ep) {
        const p = board[r][c];
        if (!p) return [];
        const color = this._color(p);
        const type  = Math.abs(p);
        const moves = [];
        const add   = (nr, nc, special = null) => moves.push({ row: nr, col: nc, special });

        if (type === PAWN) {
            const dir      = color === 'white' ? -1 : 1;
            const startRow = color === 'white' ? 6 : 1;
            const promRow  = color === 'white' ? 0 : 7;

            // Avanço simples
            if (this._inBounds(r + dir, c) && board[r + dir][c] === 0) {
                add(r + dir, c, r + dir === promRow ? 'promotion' : null);
                // Avanço duplo
                if (r === startRow && board[r + 2 * dir][c] === 0)
                    add(r + 2 * dir, c, 'doublepush');
            }
            // Capturas
            for (const dc of [-1, 1]) {
                const nr = r + dir, nc = c + dc;
                if (!this._inBounds(nr, nc)) continue;
                if (this._enemy(board[nr][nc], color))
                    add(nr, nc, nr === promRow ? 'promotion' : null);
                if (ep && nr === ep.row && nc === ep.col)
                    add(nr, nc, 'enpassant');
            }

        } else if (type === KNIGHT) {
            for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) {
                const nr = r + dr, nc = c + dc;
                if (this._inBounds(nr, nc) && !this._friendly(board[nr][nc], color))
                    add(nr, nc);
            }

        } else if (type === BISHOP || type === ROOK || type === QUEEN) {
            const dirs =
                type === BISHOP ? [[-1,-1],[-1,1],[1,-1],[1,1]] :
                type === ROOK   ? [[-1,0],[1,0],[0,-1],[0,1]] :
                                  [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]];
            for (const [dr, dc] of dirs) {
                let nr = r + dr, nc = c + dc;
                while (this._inBounds(nr, nc)) {
                    if (board[nr][nc] === 0)          { add(nr, nc); }
                    else if (this._enemy(board[nr][nc], color)) { add(nr, nc); break; }
                    else break;
                    nr += dr; nc += dc;
                }
            }

        } else if (type === KING) {
            for (const [dr, dc] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) {
                const nr = r + dr, nc = c + dc;
                if (this._inBounds(nr, nc) && !this._friendly(board[nr][nc], color))
                    add(nr, nc);
            }
            // Roque
            const bk = color === 'white' ? 7 : 0;
            const rights = castling[color];
            if (r === bk && c === 4) {
                if (rights.k && board[bk][5] === 0 && board[bk][6] === 0 &&
                    Math.abs(board[bk][7]) === ROOK)
                    add(bk, 6, 'castle-k');
                if (rights.q && board[bk][3] === 0 && board[bk][2] === 0 &&
                    board[bk][1] === 0 && Math.abs(board[bk][0]) === ROOK)
                    add(bk, 2, 'castle-q');
            }
        }
        return moves;
    }

    // ── Aplicar lance num clone do tabuleiro ─────────────────────
    _apply(board, from, to, special, promPiece, castling, ep) {
        const nb = board.map(row => [...row]);
        const p  = nb[from.row][from.col];
        const c  = this._color(p);
        const nc = {
            white: { ...castling.white },
            black: { ...castling.black }
        };
        let nep = null;

        // Lances especiais antes de mover
        if (special === 'enpassant') {
            const d = c === 'white' ? 1 : -1;
            nb[to.row + d][to.col] = 0;
        } else if (special === 'castle-k') {
            const bk = c === 'white' ? 7 : 0;
            nb[bk][5] = nb[bk][7];
            nb[bk][7] = 0;
        } else if (special === 'castle-q') {
            const bk = c === 'white' ? 7 : 0;
            nb[bk][3] = nb[bk][0];
            nb[bk][0] = 0;
        } else if (special === 'doublepush') {
            const d = c === 'white' ? 1 : -1;
            nep = { row: to.row + d, col: to.col };
        }

        // Mover peça
        nb[to.row][to.col] = p;
        nb[from.row][from.col] = 0;

        // Promoção
        if (special === 'promotion' && promPiece) {
            nb[to.row][to.col] = c === 'white' ? promPiece : -promPiece;
        }

        // Atualizar direitos de roque
        if (Math.abs(p) === KING) { nc[c].k = false; nc[c].q = false; }
        if (Math.abs(p) === ROOK) {
            const bk = c === 'white' ? 7 : 0;
            if (from.row === bk && from.col === 0) nc[c].q = false;
            if (from.row === bk && from.col === 7) nc[c].k = false;
        }
        // Roque adversário invalidado por captura da torre
        if (to.row === 0 && to.col === 0) nc.black.q = false;
        if (to.row === 0 && to.col === 7) nc.black.k = false;
        if (to.row === 7 && to.col === 0) nc.white.q = false;
        if (to.row === 7 && to.col === 7) nc.white.k = false;

        return { board: nb, castling: nc, ep: nep };
    }

    // ── Encontrar rei ────────────────────────────────────────────
    _findKing(board, color) {
        const target = color === 'white' ? KING : -KING;
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (board[r][c] === target) return { row: r, col: c };
        return null;
    }

    // ── Verificar se uma casa está sob ataque ────────────────────
    _isAttacked(board, row, col, byColor, castling) {
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (this._color(board[r][c]) === byColor) {
                    const ms = this._pseudoMoves(board, r, c, castling, null);
                    if (ms.some(m => m.row === row && m.col === col)) return true;
                }
        return false;
    }

    // ── Verificar xeque ─────────────────────────────────────────
    _inCheck(board, color, castling) {
        const kp = this._findKing(board, color);
        if (!kp) return false;
        const enemy = color === 'white' ? 'black' : 'white';
        return this._isAttacked(board, kp.row, kp.col, enemy, castling);
    }

    // ── Lances legais de uma peça ────────────────────────────────
    _legalMoves(board, r, c, castling, ep) {
        const p = board[r][c];
        if (!p) return [];
        const color  = this._color(p);
        const enemy  = color === 'white' ? 'black' : 'white';
        const pseudo = this._pseudoMoves(board, r, c, castling, ep);
        const legal  = [];

        for (const m of pseudo) {
            // Verificações extras para roque
            if (m.special === 'castle-k') {
                if (this._inCheck(board, color, castling)) continue;
                if (this._isAttacked(board, r, 5, enemy, castling)) continue;
                if (this._isAttacked(board, r, 6, enemy, castling)) continue;
            }
            if (m.special === 'castle-q') {
                if (this._inCheck(board, color, castling)) continue;
                if (this._isAttacked(board, r, 3, enemy, castling)) continue;
                if (this._isAttacked(board, r, 2, enemy, castling)) continue;
            }

            const { board: nb } = this._apply(board, { row: r, col: c }, m, m.special, QUEEN, castling, ep);
            if (!this._inCheck(nb, color, castling)) legal.push(m);
        }
        return legal;
    }

    // ── Todos os lances legais de uma cor ────────────────────────
    _allLegal(board, color, castling, ep) {
        const all = [];
        for (let r = 0; r < 8; r++)
            for (let c = 0; c < 8; c++)
                if (this._color(board[r][c]) === color)
                    for (const m of this._legalMoves(board, r, c, castling, ep))
                        all.push({ from: { row: r, col: c }, to: m, special: m.special });
        return all;
    }

    // ── Avaliação estática ───────────────────────────────────────
    _evaluate(board) {
        let score = 0;
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const p = board[r][c];
                if (!p) continue;
                const color = p > 0 ? 'white' : 'black';
                const type  = Math.abs(p);
                const mat   = VAL[type];
                let pos = 0;
                if (PST[type]) pos = color === 'white' ? PST[type][r][c] : PST[type][7 - r][c];
                score += color === 'white' ? mat + pos : -(mat + pos);
            }
        }
        return score;
    }

    // ── Minimax com alpha-beta ───────────────────────────────────
    _minimax(board, depth, alpha, beta, maximizing, castling, ep) {
        const color = maximizing ? 'white' : 'black';
        const moves = this._allLegal(board, color, castling, ep);

        if (depth === 0 || moves.length === 0) {
            if (moves.length === 0)
                return this._inCheck(board, color, castling)
                    ? (maximizing ? -100000 - depth : 100000 + depth)
                    : 0; // afogamento
            return this._evaluate(board);
        }

        // Ordenação básica: capturas primeiro
        moves.sort((a, b) => {
            const va = board[a.to.row][a.to.col] !== 0 ? VAL[Math.abs(board[a.to.row][a.to.col])] : 0;
            const vb = board[b.to.row][b.to.col] !== 0 ? VAL[Math.abs(board[b.to.row][b.to.col])] : 0;
            return vb - va;
        });

        if (maximizing) {
            let best = -Infinity;
            for (const mv of moves) {
                const { board: nb, castling: nc, ep: ne } =
                    this._apply(board, mv.from, mv.to, mv.special, QUEEN, castling, ep);
                const s = this._minimax(nb, depth - 1, alpha, beta, false, nc, ne);
                best  = Math.max(best, s);
                alpha = Math.max(alpha, s);
                if (beta <= alpha) break;
            }
            return best;
        } else {
            let best = Infinity;
            for (const mv of moves) {
                const { board: nb, castling: nc, ep: ne } =
                    this._apply(board, mv.from, mv.to, mv.special, QUEEN, castling, ep);
                const s = this._minimax(nb, depth - 1, alpha, beta, true, nc, ne);
                best = Math.min(best, s);
                beta = Math.min(beta, s);
                if (beta <= alpha) break;
            }
            return best;
        }
    }

    // ── Melhor lance para a CPU ──────────────────────────────────
    _bestMove() {
        const cpu    = this.cpuColor;
        const maxing = cpu === 'white'; // CPU branca maximiza
        const moves  = this._allLegal(this.board, cpu, this.castling, this.enPassant);
        if (!moves.length) return null;

        // Embaralha sempre para quebrar empates e imprevisibilidade
        moves.sort(() => Math.random() - 0.5);

        // Nível FÁCIL: lance totalmente aleatório com probabilidade
        if (this.difficulty === 'easy' && Math.random() < RANDOM_CHANCE.easy) {
            return moves[0];
        }

        const depth  = DEPTH[this.difficulty] ?? 2;
        let best = null;
        let bestScore = maxing ? -Infinity : Infinity;
        for (const mv of moves) {
            const { board: nb, castling: nc, ep: ne } =
                this._apply(this.board, mv.from, mv.to, mv.special, QUEEN, this.castling, this.enPassant);
            const s = this._minimax(nb, depth, -Infinity, Infinity, !maxing, nc, ne);
            if (maxing ? s > bestScore : s < bestScore) { bestScore = s; best = mv; }
        }
        return best;
    }

    // ── Click no tabuleiro ───────────────────────────────────────
    // Recebe coordenadas lógicas (já convertidas do visual)
    handleClick(r, c) {
        if (this.gameOver || this.promotionPending || this.cpuThinking) return;
        if (this.mode === 'pvc' && this.turn === this.cpuColor) return;

        const p = this.board[r][c];

        if (this.selected) {
            const mv = this.validMoves.find(m => m.row === r && m.col === c);
            if (mv) {
                if (mv.special === 'promotion') {
                    this.promotionPending = { from: this.selected, to: mv };
                    this._showPromotion();
                } else {
                    this._execute(this.selected, mv, mv.special);
                }
            } else if (this._color(p) === this.turn) {
                this.selected = { row: r, col: c };
                this.validMoves = this._legalMoves(this.board, r, c, this.castling, this.enPassant);
            } else {
                this.selected = null;
                this.validMoves = [];
            }
        } else {
            if (this._color(p) === this.turn) {
                this.selected = { row: r, col: c };
                this.validMoves = this._legalMoves(this.board, r, c, this.castling, this.enPassant);
            }
        }
        this.render();
    }

    // ── Executar um lance ────────────────────────────────────────
    _execute(from, to, special, promPiece = QUEEN) {
        const p        = this.board[from.row][from.col];
        const captured = this.board[to.row][to.col];
        const color    = this._color(p);

        // Registrar captura
        if (captured) {
            (color === 'white' ? this.capByWhite : this.capByBlack).push(captured);
        }
        if (special === 'enpassant') {
            const d = color === 'white' ? 1 : -1;
            const ep = this.board[to.row + d][to.col];
            (color === 'white' ? this.capByWhite : this.capByBlack).push(ep);
        }

        // Notação
        const notation = this._notation(from, to, p, captured, special, promPiece);

        // Aplicar lance
        const res = this._apply(this.board, from, to, special, promPiece, this.castling, this.enPassant);
        this.board     = res.board;
        this.castling  = res.castling;
        this.enPassant = res.ep;
        this.lastMove  = { from, to };

        this.history.push({ notation, color });

        // Trocar vez
        this.turn      = this.turn === 'white' ? 'black' : 'white';
        this.selected  = null;
        this.validMoves = [];

        this._checkState();

        if (!this.gameOver && this.mode === 'pvc' && this.turn === this.cpuColor) {
            this.cpuThinking = true;
            this.statusMsg   = '🤔 CPU pensando…';
            this._applyStatus();
            setTimeout(() => this._cpuMove(), 120);
        }
    }

    _cpuMove() {
        const mv = this._bestMove();
        this.cpuThinking = false;
        if (!mv) { this._checkState(); this.render(); return; }
        this._execute(mv.from, mv.to, mv.special, QUEEN);
    }

    // ── Promoção ─────────────────────────────────────────────────
    _showPromotion() {
        const color   = this.turn;
        const choices = [QUEEN, ROOK, BISHOP, KNIGHT];
        const names   = { 2:'Dama', 3:'Torre', 4:'Bispo', 5:'Cavalo' };
        const modal   = document.getElementById('promotion-modal');
        const box     = document.getElementById('promotion-choices');
        box.innerHTML = '';
        for (const pc of choices) {
            const sym = SYM[color === 'white' ? pc : -pc];
            const btn = document.createElement('button');
            btn.textContent = sym;
            btn.title = names[pc];
            btn.onclick = () => {
                modal.style.display = 'none';
                const { from, to } = this.promotionPending;
                this.promotionPending = null;
                this._execute(from, to, 'promotion', pc);
            };
            box.appendChild(btn);
        }
        modal.style.display = 'flex';
    }

    // ── Verificar fim de jogo ────────────────────────────────────
    _checkState() {
        const color  = this.turn;
        const moves  = this._allLegal(this.board, color, this.castling, this.enPassant);
        const check  = this._inCheck(this.board, color, this.castling);

        if (moves.length === 0) {
            this.gameOver = true;
            this.statusMsg = check
                ? `Xeque-mate! ${color === 'white' ? '⬛ Pretas' : '⬜ Brancas'} venceram! 🏆`
                : 'Empate por afogamento!';
        } else if (check) {
            this.statusMsg = `⚠️ Xeque! Vez das ${color === 'white' ? '⬜ Brancas' : '⬛ Pretas'}`;
        } else {
            this.statusMsg = `Vez das ${color === 'white' ? '⬜ Brancas' : '⬛ Pretas'}`;
        }
        this.render();
    }

    // ── Notação algébrica simplificada ───────────────────────────
    _notation(from, to, piece, captured, special, prom) {
        if (special === 'castle-k') return 'O-O';
        if (special === 'castle-q') return 'O-O-O';
        const FILES = 'abcdefgh', RANKS = '87654321';
        const sep = (captured || special === 'enpassant') ? 'x' : '-';
        const promNames = { 2:'D', 3:'T', 4:'B', 5:'C' };
        let n = FILES[from.col] + RANKS[from.row] + sep + FILES[to.col] + RANKS[to.row];
        if (special === 'promotion') n += '=' + (promNames[prom] || 'D');
        return n;
    }

    // ── Renderização ─────────────────────────────────────────────
    render() {
        this._renderBoard();
        this._applyStatus();
        this._renderCaptured();
        this._renderHistory();
    }

    _applyStatus() {
        const el = document.getElementById('status');
        el.textContent = this.statusMsg ||
            `Vez das ${this.turn === 'white' ? '⬜ Brancas' : '⬛ Pretas'}`;
        el.className = this.gameOver ? 'gameover'
            : this.statusMsg.includes('Xeque') ? 'check'
            : this.cpuThinking ? 'cpu-thinking' : '';
    }

    _renderBoard() {
        const el = document.getElementById('board');
        el.innerHTML = '';

        const inCheck = this._inCheck(this.board, this.turn, this.castling);
        const kingPos = inCheck ? this._findKing(this.board, this.turn) : null;
        const fl      = this.flipped;

        // Iterar nas casas visuais (vr, vc) → converter para lógicas (r, c)
        for (let vr = 0; vr < 8; vr++) {
            for (let vc = 0; vc < 8; vc++) {
                const r = fl ? 7 - vr : vr;
                const c = fl ? 7 - vc : vc;

                const sq = document.createElement('div');
                sq.className = 'square ' + ((r + c) % 2 === 0 ? 'light' : 'dark');

                // Último lance
                if (this.lastMove) {
                    if (r === this.lastMove.from.row && c === this.lastMove.from.col)
                        sq.classList.add('last-from');
                    if (r === this.lastMove.to.row && c === this.lastMove.to.col)
                        sq.classList.add('last-to');
                }

                // Selecionada
                if (this.selected && this.selected.row === r && this.selected.col === c)
                    sq.classList.add('selected');

                // Lances válidos
                const isValid = this.validMoves.some(m => m.row === r && m.col === c);
                if (isValid) {
                    sq.classList.add('valid-move');
                    if (this.board[r][c] !== 0) sq.classList.add('capture-hint');
                }

                // Rei em xeque
                if (kingPos && r === kingPos.row && c === kingPos.col)
                    sq.classList.add('in-check');

                // Peça
                const p = this.board[r][c];
                if (p) {
                    const span = document.createElement('span');
                    span.className = 'piece';
                    span.textContent = SYM[p];
                    sq.appendChild(span);
                }

                // Coordenadas: rank à esquerda, file embaixo
                if (vc === 0) {
                    const lbl = document.createElement('span');
                    lbl.className = 'rank-label';
                    lbl.textContent = fl ? r + 1 : 8 - r;
                    sq.appendChild(lbl);
                }
                if (vr === 7) {
                    const lbl = document.createElement('span');
                    lbl.className = 'file-label';
                    lbl.textContent = fl ? 'hgfedcba'[c] : 'abcdefgh'[c];
                    sq.appendChild(lbl);
                }

                sq.addEventListener('click', () => this.handleClick(r, c));
                el.appendChild(sq);
            }
        }
    }

    _renderCaptured() {
        // Top (brancas capturadas pelas pretas)  → peças brancas positivas
        // Bot (pretas capturadas pelas brancas)  → peças pretas  negativas
        // A barra de cima fica próxima às pretas  → mostra o que as brancas capturaram
        const sortByValue = arr =>
            [...arr].sort((a, b) => Math.abs(b) - Math.abs(a))
                    .map(v => SYM[v] || '').join('');

        document.getElementById('cap-top-pieces').textContent = sortByValue(this.capByWhite);
        document.getElementById('cap-bot-pieces').textContent = sortByValue(this.capByBlack);
    }

    _renderHistory() {
        const list = document.getElementById('moves-list');
        list.innerHTML = '';
        for (let i = 0; i < this.history.length; i += 2) {
            const num = Math.floor(i / 2) + 1;
            const w   = this.history[i]?.notation || '';
            const b   = this.history[i + 1]?.notation || '';
            const row = document.createElement('div');
            row.className = 'move-row';
            row.innerHTML =
                `<span class="move-num">${num}.</span>` +
                `<span class="move-w">${w}</span>` +
                `<span class="move-b">${b}</span>`;
            list.appendChild(row);
        }
        list.scrollTop = list.scrollHeight;
    }
}

// ─────────────────────────────────────────────────────────────────
//  Interface global
// ─────────────────────────────────────────────────────────────────
let game           = null;
let pendingMode    = null;  // modo aguardando escolha de cor
let pendingColor   = null;  // cor escolhida aguardando dificuldade

// ── Funções de navegação entre telas ────────────────────────────
function _hideAll() {
    ['menu','color-picker','difficulty-picker','game','instructions-overlay']
        .forEach(id => document.getElementById(id).style.display = 'none');
}

function showMenu() {
    _hideAll();
    document.getElementById('menu').style.display = 'flex';
    game = null;
}

function showColorPicker() {
    _hideAll();
    document.getElementById('color-picker').style.display = 'flex';
}

function showInstructions() {
    _hideAll();
    document.getElementById('instructions-overlay').style.display = 'flex';
}

function hideInstructions() { showMenu(); }

// ── Fluxo de início de partida ───────────────────────────────────
// 1) Botão do menu
function askColor(mode) {
    pendingMode = mode;
    _hideAll();
    document.getElementById('color-picker').style.display = 'flex';

    const pvp = mode === 'pvp';
    document.getElementById('cp-icon').textContent      = pvp ? '👥' : '🤖';
    document.getElementById('cp-title').textContent     = pvp ? 'Jogador vs Jogador' : 'Jogador vs CPU';
    document.getElementById('cp-black-sub').textContent = pvp ? 'Joga por último' : 'CPU começa primeiro';
}

// 2) Cor escolhida
function onColorChosen(playerColor) {
    pendingColor = playerColor;
    if (pendingMode === 'pvc') {
        // Mostrar seletor de dificuldade
        _hideAll();
        document.getElementById('difficulty-picker').style.display = 'flex';
    } else {
        // PvP → iniciar direto
        _launchGame(pendingMode, playerColor, 'medium');
    }
}

// 3) Dificuldade escolhida (só PvC)
function startGameWithDifficulty(difficulty) {
    _launchGame(pendingMode, pendingColor, difficulty);
}

// ── Inicializar o jogo ───────────────────────────────────────────
function _launchGame(mode, playerColor, difficulty) {
    _hideAll();
    document.getElementById('game').style.display = 'flex';

    game = new ChessGame(mode, playerColor, difficulty);

    const flipped  = game.flipped;
    const topColor = flipped ? 'white' : 'black';

    if (mode === 'pvc') {
        const playerName = playerColor === 'white' ? 'Brancas ⬜' : 'Pretas ⬛';
        const cpuName    = playerColor === 'white' ? 'Pretas ⬛' : 'Brancas ⬜';
        const diffLabel  = { easy: '🌱 Fácil', medium: '⚔️ Médio', hard: '💀 Difícil' }[difficulty];
        const badgeClass = { easy: 'badge-easy', medium: 'badge-medium', hard: 'badge-hard' }[difficulty];

        document.getElementById('cap-top-label').textContent = `CPU (${cpuName}) capturou`;
        document.getElementById('cap-bot-label').textContent = `Você (${playerName}) capturou`;
        document.getElementById('mode-info').innerHTML =
            `🤖 Você joga com as ${playerName}<br>` +
            `<span id="diff-badge" class="${badgeClass}">${diffLabel}</span>`;
    } else {
        const topName = topColor === 'white' ? 'Brancas ⬜' : 'Pretas ⬛';
        const botName = topColor === 'white' ? 'Pretas ⬛' : 'Brancas ⬜';
        document.getElementById('cap-top-label').textContent = `${topName} capturaram`;
        document.getElementById('cap-bot-label').textContent = `${botName} capturaram`;
        document.getElementById('mode-info').textContent     = '👥 Jogador vs Jogador';
    }

    game.render();
    game._checkState();

    // CPU joga primeiro quando o jogador escolheu pretas
    if (mode === 'pvc' && game.cpuColor === 'white') {
        game.cpuThinking = true;
        game.statusMsg   = '🤔 CPU pensando…';
        game._applyStatus();
        setTimeout(() => game._cpuMove(), 400);
    }
}

// ── Atalhos de UI ────────────────────────────────────────────────
// Compatibilidade: startGameWithColor ainda pode ser chamado do HTML antigo
function startGameWithColor(playerColor) { onColorChosen(playerColor); }

function restartGame() {
    if (game) _launchGame(game.mode, game.playerColor, game.difficulty);
}

// ── Tema claro / escuro ──────────────────────────────────────────
(function initTheme() {
    const saved = localStorage.getItem('chess-theme') || 'dark';
    if (saved === 'light') document.body.classList.add('light');
    _updateThemeBtn();
})();

function toggleTheme() {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('chess-theme', isLight ? 'light' : 'dark');
    _updateThemeBtn();
}

function _updateThemeBtn() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const isLight = document.body.classList.contains('light');
    btn.textContent = isLight ? '🌙' : '☀️';
    btn.title = isLight ? 'Mudar para modo escuro' : 'Mudar para modo claro';
}
