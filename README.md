> Projeto desenvolvido para fins acadêmicos 🎓🍭  
 
# 🎡 USJT Candy Machine  

Este é um projeto que simula uma máquina de doces utilizando PHP no **back-end** e HTML/CSS/JS no **front-end**.  

## 📁 Estrutura do Projeto  

A estrutura de diretórios está organizada da seguinte forma:  

```
candy-machine/
│── app/                    # Diretório do back-end
│   ├── Config/             # Configuração do sistema
│   │   ├── Config.php      # Inicialização do sistema
│   │   ├── Database.php    # Configuração do banco de dados
│   │   ├── Routes.php      # Definição das rotas
│   │
│   ├── Controllers/        # Controladores (Lógica das rotas)
│   │   ├── Api/            # Endpoints da API
│   │   │   ├── Login.php   # Controle de login
│   │   ├── Core/           # Classes base para controladores
│   │   │   ├── BaseController.php
│   │
│   ├── Helpers/        # Funções auxiliares
│   │   ├── framework.php
│   │
│   ├── Views/          # Arquivos HTML das views
│   │   ├── pages/      # Páginas HTML do front-end
│   │   │   ├── index.html
│
│── public/                 # Diretório acessível ao navegador (Front-end)
│   ├── css/                # Estilos CSS
│   │   ├── script.css  
│   │
│   ├── img/                # Imagens do projeto
│   │   ├── candy_machine.png
│   │   ├── fundo.jpg
│   │   ├── img base maquina.png
│   │
│   ├── script/             # Scripts JS do front-end
│   │   ├── main.js
│   │
│   ├── .htaccess           # Arquivo de configuração do servidor Apache
│   ├── index.php           # Arquivo de entrada para requisições do projeto
│
│── vendor/                 # Dependências do Composer
│── composer.json           # Configuração do Composer
│── .gitignore              # Arquivos ignorados pelo Git
│── .env                    # Arquivo de configurações de ambiente
│── README.md               # Documentação do projeto
│── LICENSE.md              # Licença do projeto
```

## 🖥️ **Back-end (PHP)**
A lógica do sistema está contida dentro do diretório `app/`, incluindo controladores, configurações e a lógica do banco de dados.  
- As **rotas** são definidas em `config/Routes.php`.  
- O **controle de fluxo** fica dentro de `Controllers/`.  
- O **banco de dados** é configurado no arquivo `config/Database.php`.  

## 🎨 **Front-end (HTML/CSS/JS)**
O código do front-end está dentro do diretório `public/`, que contém:  
- `app/Views/pages/` → Páginas HTML.  
- `public/css/` → Estilos CSS.  
- `public/script/` → Arquivos JavaScript.  
- `public/img/` → Imagens utilizadas na interface.  

## 🚀 Como rodar o projeto?
1. Instale as dependências com o **Composer**:  
   ```sh
   composer install
   ```
2. Inicie um servidor local (por exemplo, usando o **PHP**):  
   ```sh
   php -S localhost:8000 -t public
   ```
3. Acesse no navegador:  
   ```
   http://localhost:8000
   ```