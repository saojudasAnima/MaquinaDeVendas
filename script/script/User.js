/**
 * Classe responsável por gerenciar as moedas do usuário e salvar os dados no localStorage.
 */
export default class User {
    constructor() {
        this.coins = Number(localStorage.getItem("user_coins")) || 0; // Inicializa moedas do localStorage
        this.coinsElement = document.getElementById("user_coins");

        this.updateCoinsDisplay();
        this.initEventListeners();
    }

    /**
     * Inicializa os eventos dos botões de adicionar moedas.
     */
    initEventListeners() {
        document.querySelectorAll("[data-toggle='coin']").forEach(button => {
            // Torna o botão visível após 10 segundos se estiver oculto
            setInterval(() => {
                if (button.classList.contains("hidden")) {
                    button.classList.remove("hidden");
                }
            }, 10000);

            // Evento de clique para adicionar moedas
            button.addEventListener("click", () => {
                const value = Math.floor(Math.random() * 10) + 1; // Gera um valor aleatório entre 1 e 10
                this.addCoins(value);

                // Oculta o botão de moeda após o clique
                button.classList.add("hidden");
            });
        });

        // Se o usuário iniciar com 0 moedas, adiciona 10 automaticamente
        if (this.coins === 0) {
            this.addCoins(10);
        }
    }

    /**
     * Adiciona moedas ao saldo do usuário.
     * @param {number} value - Quantidade de moedas a adicionar.
     */
    addCoins(value) {
        this.coins += value;
        this.updateCoinsDisplay();

        // Atualiza o localStorage
        localStorage.setItem("user_coins", this.coins);

        // Notifica o usuário
        alert(`Você ganhou ${value} moedas!`);
        console.log(`Moedas adicionadas: ${value}, Total: ${this.coins}`);
    }

    /**
     * Atualiza o display das moedas do usuário na interface.
     */
    updateCoinsDisplay() {
        if (this.coinsElement) {
            this.coinsElement.textContent = this.coins;
        }
    }
}
