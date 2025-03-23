/**
 * Classe que representa a máquina de doces.
 */
export default class CandyMachine {
    /**
     * Construtor da máquina de doces
     * Inicializa a lista de doces e seus preços.
     * Configura os eventos de clique para os botões.
     */
    constructor() {
        this.candies = [
            "Snickers", "Twix", "Milky Way", "Barras de cereais", "Balas Mentos",
            "Amendoins cobertos", "Gomas de mascar", "Wafers recheados", "Cookies",
            "Bolinhos industriais", "Brownies", "Muffins", "Donuts", "Mini-marshmallows",
            "Alfajor", "Chocolates recheados", "Pipoca doce", "Caramelos",
            "Jujubas", "Mini-cookies"
        ];

        // Gera preços aleatórios entre R$2,00 e R$7,00
        this.prices = this.candies.map(() => +(Math.random() * 5 + 2).toFixed(2));

        this.machineElement = document.querySelector(".candy_machine");
        this.menuElement = document.getElementById("menu");
        this.paymentElement = document.getElementById("payment");
        this.optionsListElement = document.getElementById("options-list");

        this.initEventListeners();
    }

    /**
     * Inicializa os eventos de clique nos botões.
     */
    initEventListeners() {
        document.querySelectorAll("[data-toggle='candy_machine']").forEach(button => {
            button.addEventListener("click", () => this.toggleMenu());
        });

        document.querySelectorAll("[data-toggle='payment']").forEach(button => {
            button.addEventListener("click", () => this.togglePayment());
        });

        document.querySelectorAll(".enter-number").forEach(button => {
            button.addEventListener("click", () => {
                const value = button.dataset.value;
                if (value === "C") {
                    this.clearValues();
                } else {
                    this.processValue(value);
                }
            });
        });
    }

    /**
     * Popula a lista de doces na interface.
     */
    populateOptions() {
        this.optionsListElement.innerHTML = this.candies
            .map((candy, index) => `<p>${index + 1}. ${candy} - R$ ${this.prices[index].toFixed(2)}</p>`)
            .join("");
    }

    /**
     * Alterna a exibição do menu de seleção de doces.
     */
    toggleMenu() {
        this.populateOptions();
        this.menuElement.classList.toggle("visible");
        this.machineElement.classList.toggle("zoom", this.menuElement.classList.contains("visible"));
    }

    /**
     * Alterna a exibição do menu de pagamento.
     */
    togglePayment() {
        this.populateOptions();
        this.paymentElement.classList.toggle("visible");
    }

    /**
     * Processa o valor inserido pelo usuário.
     * @param {string} value Valor inserido pelo usuário
     */
    processValue(value) {
        const currentValue = this.menuElement.querySelector("#selected-number");
        const newValue = currentValue.value + value;

        //-- Valida se o número existe na lista de doces
        const index = this.candies.findIndex((_, i) => i + 1 === +newValue);
        if (index === -1) {
            alert("Número inválido. Tente novamente.");
            return this.clearValues();
        }

        currentValue.value = newValue;
    }

    /**
     * Limpa o valor inserido pelo usuário.
     */
    clearValues() {
        const currentValue = this.menuElement.querySelector("#selected-number");
        currentValue.value = "";
    }
}