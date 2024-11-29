document.getElementById("notifica1").addEventListener("click", () => {
  const impactoId = document.getElementById("impactoId").value;

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

function fillForm(impactoId) {
  const emails = [
    "ngcent@lg.com.br", "ngcalc@lg.com.br", "ngrecr@lg.com.br",
    "integracao@lg.com.br", "grupo-myway-autoatendimento@lg.com.br",
    "relatoriosreports@lg.com.br", "juliano.campos@lg.com.br",
    "kennedy.sampaio@lg.com.br", "farley.silva@lg.com.br",
    "regis.oliveira@lg.com.br", "hermes.junior@lg.com.br",
    "william.gama@lg.com.br", "edson.takeshi@lg.com.br",
    "grupo-gentefluiprocessos@lg.com.br", "ngrecr@lg.com.br"
  ];

  // Preenche o campo ID do Registro de Impacto
  const impactoField = document.querySelector('input[aria-label*="ID do Registro de Impacto"]');
  if (impactoField) {
    impactoField.value = impactoId;
    impactoField.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    console.log("Campo ID do Registro de Impacto não encontrado.");
  }

  // Busca todos os campos com a classe apropriada
  const emailFields = Array.from(document.querySelectorAll('input.ms-BasePicker-input')).filter(field => 
    field.getAttribute('aria-label')?.includes('Pessoa')
  );

  if (!emailFields.length) {
    console.error("Nenhum campo de e-mail encontrado.");
    return;
  }

  // Função para preencher um campo de e-mail sequencialmente
  const fillEmailFieldSequentially = async (field, email) => {
    return new Promise((resolve) => {
      if (field) {
        field.focus();
        field.value = email;
        field.dispatchEvent(new Event('input', { bubbles: true }));

        setTimeout(() => {
          const suggestionButton = document.querySelector('.ms-Suggestions-itemButton[role="option"]');
          if (suggestionButton) {
            suggestionButton.click();
            console.log(`Email ${email} selecionado com sucesso!`);
          } else {
            console.error(`Nenhuma sugestão encontrada para o email ${email}.`);
          }
          resolve();
        }, 1000); // Tempo suficiente para a sugestão ser exibida
      } else {
        console.error("Campo de e-mail não encontrado.");
        resolve();
      }
    });
  };

  // Preencher os campos sequencialmente
  const fillSequentially = async () => {
    for (let i = 0; i < emails.length && i < emailFields.length; i++) {
      await fillEmailFieldSequentially(emailFields[i], emails[i]);
    }
  };

  fillSequentially().then(() => {
    console.log("Todos os campos foram preenchidos.");
  });
}

document.getElementById("notifica2").addEventListener("click", () => {
  const impactoId = document.getElementById("impactoId").value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: fillForm2,
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

function fillForm2(impactoId) {
  const emails = [
    "bruno.bastos@lg.com.br", "diego.silva@lg.com.br", "thiago.gonzaga@lg.com.br", 
    "ellisson.campos@lg.com.br", "diego.alves@lg.com.br", "leandro.ferreira@lg.com.br",
    "ivan.moura@lg.com.br", "sergio.ribeiro@lg.com.br", "lorena.santos@lg.com.br",
    "marco.batista@lg.com.br", "renner.sousa@lg.com.br", "cristiano.silva@lg.com.br",
    "alessandro.guimel@lg.com.br", "jeremias.xavier@lg.com.br"
  ];

  // Preenche o campo ID do Registro de Impacto
  const impactoField = document.querySelector('input[aria-label*="ID do Registro de Impacto"]');
  if (impactoField) {
    impactoField.value = impactoId;
    impactoField.dispatchEvent(new Event("input", { bubbles: true }));
  } else {
    console.log("Campo ID do Registro de Impacto não encontrado.");
  }

  // Busca todos os campos com a classe apropriada
  const emailFields = Array.from(document.querySelectorAll('input.ms-BasePicker-input')).filter(field => 
    field.getAttribute('aria-label')?.includes('Pessoa')
  );

  if (!emailFields.length) {
    console.error("Nenhum campo de e-mail encontrado.");
    return;
  }

  // Função para preencher um campo de e-mail sequencialmente
  const fillEmailFieldSequentially = async (field, email) => {
    return new Promise((resolve) => {
      if (field) {
        field.focus();
        field.value = email;
        field.dispatchEvent(new Event('input', { bubbles: true }));

        setTimeout(() => {
          const suggestionButton = document.querySelector('.ms-Suggestions-itemButton[role="option"]');
          if (suggestionButton) {
            suggestionButton.click();
            console.log(`Email ${email} selecionado com sucesso!`);
          } else {
            console.error(`Nenhuma sugestão encontrada para o email ${email}.`);
          }
          resolve();
        }, 1000); // Tempo suficiente para a sugestão ser exibida
      } else {
        console.error("Campo de e-mail não encontrado.");
        resolve();
      }
    });
  };

  // Preencher os campos sequencialmente
  const fillSequentially = async () => {
    for (let i = 0; i < emails.length && i < emailFields.length; i++) {
      await fillEmailFieldSequentially(emailFields[i], emails[i]);
    }
  };

  fillSequentially().then(() => {
    console.log("Todos os campos foram preenchidos.");
  });
}
