document.getElementById("fillButton").addEventListener("click", () => {
    const impactoId = document.getElementById("impactoId").value;

    // Executa o script de preenchimento diretamente na página ativa
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: fillForm,
        args: [impactoId]
      }, (result) => {
        if (chrome.runtime.lastError) {
          console.error("Erro ao injetar o content script:", chrome.runtime.lastError.message);
          alert("O content script não pôde ser carregado. Verifique a URL ou atualize a página.");
        } else {
          console.log("Script executado com sucesso:", result);
        }
      });
    });
  });

  // Função a ser injetada na página para preencher o formulário
  function fillForm(impactoId) {
    const emails = [
      "ngcent@lg.com.br", "ngcalc@lg.com.br", "ngrecr@lg.com.br",
      "integracao@lg.com.br", "grupo-myway-autoatendimento@lg.com.br",
      "relatoriosreports@lg.com.br", "juliano.campos@lg.com.br",
      "kennedy.sampaio@lg.com.br", "farley.silva@lg.com.br",
      "regis.oliveira@lg.com.br", "hermes.junior@lg.com.br",
      "william.gama@lg.com.br", "edson.takeshi@lg.com.br",
      "grupo-gentefluiprocessos@lg.com.br"
    ];

    // Preenche o campo ID do Registro de Impacto
    const impactoField = document.querySelector('input[aria-label*="ID do Registro de Impacto"]');
    if (impactoField) {
      impactoField.value = impactoId;
      impactoField.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      console.log("Campo ID do Registro de Impacto não encontrado.");
    }

    // Preenche os campos de Pessoa1 até Pessoa15, se existirem
    emails.forEach((email, index) => {
      const personField = document.querySelector(`input[aria-label*="Pessoa${index + 1}"]`);
      if (personField) {
        personField.value = email;
        personField.dispatchEvent(new Event("input", { bubbles: true }));
      } else {
        console.log(`Campo Pessoa${index + 1} não encontrado.`);
      }
    });
  }
