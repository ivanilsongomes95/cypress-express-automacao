<<<<<<< HEAD
# cypress-express-automação
=======
# cypress-express-automacao

Este repositório contém o desafio técnico solicitado no processo seletivo para QA, incluindo automação de testes utilizando **Cypress**, com foco em simular uma pesquisa no Google, capturar screenshot e demonstrar fluxo completo da automação.

---

## 🚀 Tecnologias Utilizadas

* **Cypress 12.2.0**
* **Node.js 22**
* **Yarn** (gerenciador de pacotes)
* **Browser: Google Chrome** (GUI e headless)
* **Electron** (somente quando usado pelo Cypress, mas não recomendado para Google Search)

---

## 📁 Estrutura do Projeto

```
cypress/
  e2e/
    qa automation test.cy.js
    tasks.cy.js
  screenshots/
  videos/

cypress.config.js
package.json
yarn.lock
```

---

## 🧩 Sobre o Desafio

O objetivo da automação foi:

1. Acessar o Google (versão US para reduzir chances de bloqueio)
2. Realizar uma pesquisa
3. Evitar bloqueios de CAPTCHA sempre que possível
4. Capturar um **screenshot** da página de resultados
5. Encerrar o navegador ao fim da execução (no modo headless, o Cypress faz isso automaticamente)

---

## 🛠️ Como instalar o projeto

### 🔹 1. Clonar o repositório

```
git clone <seu-repositorio>
cd cypress-express-automação
```

### 🔹 2. Instalar dependências

```
yarn install
```

---

## ▶️ Como executar os testes

### ✔ Modo Visual (GUI) – recomendado

Evita CAPTCHA e permite gravar manualmente o vídeo.

```
yarn cypress open
```

Depois selecione **Chrome** e execute o teste desejado.

---

### ✔ Modo Headless no Chrome

Melhor opção quando deseja que o Cypress feche o navegador sozinho:

```
yarn cypress run --browser chrome
```

⚠️ Importante:
Se rodar:

```
yarn cypress run
```

o Cypress usa **Electron**, e o Google detecta automação → ativa CAPTCHA.

---

## 📸 Evidências geradas

Durante a execução, o Cypress produz automaticamente:

### ✔ Screenshot

Local:

```
cypress/screenshots/tasks.cy.js/resultado-google.png
```

### ✔ Vídeo da execução

Local:

```
cypress/videos/tasks.cy.js.mp4
```

---

## 🧠 Observações importantes

### 🔸 Sobre CAPTCHA

O Google tem mecanismos agressivos de detecção de automação. Para evitar bloqueios:

* Foi usada a versão **US /ncr?hl=en**
* Foi configurado comportamento humano na digitação
* O teste foi executado em **modo GUI para gravação limpa**

Mesmo assim, em **modo headless**, o Google pode ativar CAPTCHA mesmo após o teste terminar — isso é comportamento normal.

### 🔸 Sobre encerrar o navegador

O Cypress **não possui comando para fechar o navegador via código**.

Por isso:

* No **modo headless**, o Cypress encerra automaticamente.
* No **modo GUI**, o encerramento é **manual**.

---

## 📄 Código do teste principal (tasks.cy.js)

O teste realiza:

* Acesso ao Google
* Aceite de cookies
* Digitação com atraso humano
* Pesquisa por "QA automação de testes"
* Espera da renderização
* Screenshot

O código completo está no arquivo:

```
cypress/e2e/tasks.cy.js
```

---

## 🏁 Conclusão

Este projeto demonstra conhecimento em:

* Automação Web com Cypress
* Contorno de restrições como CAPTCHA
* Execução em diferentes modos (GUI/headless)
* Boas práticas de escrita e organização de testes

Caso seja necessário, posso fornecer o vídeo da execução e o PDF com as evidências.

---

## 👨‍💻 Autor

**Ivanilson Gomes**
QA Analyst


>>>>>>> 3bc350ea007f01ee919adfd2cdbb13fbe2b71902
