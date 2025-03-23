import CandyMachine from "./script/CandyMachine.js";
import User from "./script/User.js";

// Instancia a máquina de doces após o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    window.user = new User();
    window.candyMachine = new CandyMachine();
});