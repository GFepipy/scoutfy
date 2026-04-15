(function () {
  const corpoPagina = document.body;
  const botaoMenu = document.getElementById("botao-menu-mobile");
  const painelMenu = document.getElementById("painel-menu-mobile");
  const botoesFechar = document.querySelectorAll("[data-fechar-menu]");
  const linksDoMenu = document.querySelectorAll("[data-link-menu-mobile]");

  if (botaoMenu && painelMenu) {
    function abrirMenu() {
      corpoPagina.classList.add("menu-mobile-aberto");
      botaoMenu.setAttribute("aria-expanded", "true");
      painelMenu.setAttribute("aria-hidden", "false");
    }

    function fecharMenu() {
      corpoPagina.classList.remove("menu-mobile-aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
      painelMenu.setAttribute("aria-hidden", "true");
    }

    function alternarMenu() {
      const menuEstaAberto = corpoPagina.classList.contains("menu-mobile-aberto");

      if (menuEstaAberto) {
        fecharMenu();
        return;
      }

      abrirMenu();
    }

    botaoMenu.addEventListener("click", alternarMenu);

    botoesFechar.forEach((botao) => {
      botao.addEventListener("click", fecharMenu);
    });

    linksDoMenu.forEach((link) => {
      link.addEventListener("click", fecharMenu);
    });

    window.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        fecharMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1075) {
        fecharMenu();
      }
    });
  }

  const cartaoFiltros = document.querySelector(".cartao-filtros");
  const botaoExpandirFiltros = document.querySelector("[data-botao-expandir-filtros]");
  const tituloExpandirFiltros = document.querySelector("[data-titulo-expandir-filtros]");
  const conteudoFiltros = document.querySelector("[data-conteudo-filtros]");
  const limiteMobileFiltros = Number(cartaoFiltros?.dataset?.limiteFiltros) || 1100;

  if (cartaoFiltros && botaoExpandirFiltros && conteudoFiltros) {
    function abrirFiltros() {
      cartaoFiltros.classList.add("filtros-abertos");
      botaoExpandirFiltros.setAttribute("aria-expanded", "true");
      botaoExpandirFiltros.setAttribute("aria-label", "Recolher filtros");
      if (tituloExpandirFiltros) {
        tituloExpandirFiltros.setAttribute("aria-expanded", "true");
      }
      conteudoFiltros.hidden = false;
    }

    function fecharFiltros() {
      cartaoFiltros.classList.remove("filtros-abertos");
      botaoExpandirFiltros.setAttribute("aria-expanded", "false");
      botaoExpandirFiltros.setAttribute("aria-label", "Expandir filtros");
      if (tituloExpandirFiltros) {
        tituloExpandirFiltros.setAttribute("aria-expanded", "false");
      }
      conteudoFiltros.hidden = true;
    }

    function atualizarFiltrosPorTamanho() {
      const telaMenor = window.innerWidth <= limiteMobileFiltros;

      if (telaMenor) {
        botaoExpandirFiltros.hidden = false;

        if (!botaoExpandirFiltros.dataset.estadoInicialAplicado) {
          fecharFiltros();
          botaoExpandirFiltros.dataset.estadoInicialAplicado = "true";
        }

        return;
      }

      botaoExpandirFiltros.hidden = true;
      abrirFiltros();
      delete botaoExpandirFiltros.dataset.estadoInicialAplicado;
    }

    function alternarFiltros() {
      if (window.innerWidth > limiteMobileFiltros) {
        return;
      }

      const filtrosEstaoAbertos = cartaoFiltros.classList.contains("filtros-abertos");

      if (filtrosEstaoAbertos) {
        fecharFiltros();
        return;
      }

      abrirFiltros();
    }

    botaoExpandirFiltros.addEventListener("click", alternarFiltros);
    if (tituloExpandirFiltros) {
      tituloExpandirFiltros.addEventListener("click", alternarFiltros);
      tituloExpandirFiltros.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          alternarFiltros();
        }
      });
    }
    window.addEventListener("resize", atualizarFiltrosPorTamanho);
    atualizarFiltrosPorTamanho();
  }

  const painelConversas = document.querySelector(".painel-conversas");
  const botaoExpandirConversas = document.querySelector("[data-botao-expandir-conversas]");
  const tituloExpandirConversas = document.querySelector("[data-titulo-expandir-conversas]");
  const conteudoConversas = document.querySelector("[data-conteudo-conversas]");
  const limiteMobileConversas = 900;

  if (painelConversas && botaoExpandirConversas && conteudoConversas) {
    function abrirConversas() {
      painelConversas.classList.add("conversas-abertas");
      botaoExpandirConversas.setAttribute("aria-expanded", "true");
      botaoExpandirConversas.setAttribute("aria-label", "Recolher mensagens");
      if (tituloExpandirConversas) {
        tituloExpandirConversas.setAttribute("aria-expanded", "true");
      }
      conteudoConversas.hidden = false;
    }

    function fecharConversas() {
      painelConversas.classList.remove("conversas-abertas");
      botaoExpandirConversas.setAttribute("aria-expanded", "false");
      botaoExpandirConversas.setAttribute("aria-label", "Expandir mensagens");
      if (tituloExpandirConversas) {
        tituloExpandirConversas.setAttribute("aria-expanded", "false");
      }
      conteudoConversas.hidden = true;
    }

    function atualizarConversasPorTamanho() {
      const telaMenor = window.innerWidth <= limiteMobileConversas;

      if (telaMenor) {
        botaoExpandirConversas.hidden = false;

        if (!botaoExpandirConversas.dataset.estadoInicialAplicado) {
          fecharConversas();
          botaoExpandirConversas.dataset.estadoInicialAplicado = "true";
        }

        return;
      }

      botaoExpandirConversas.hidden = true;
      abrirConversas();
      delete botaoExpandirConversas.dataset.estadoInicialAplicado;
    }

    function alternarConversas() {
      if (window.innerWidth > limiteMobileConversas) {
        return;
      }

      const conversasEstaoAbertas = painelConversas.classList.contains("conversas-abertas");

      if (conversasEstaoAbertas) {
        fecharConversas();
        return;
      }

      abrirConversas();
    }

    botaoExpandirConversas.addEventListener("click", alternarConversas);
    if (tituloExpandirConversas) {
      tituloExpandirConversas.addEventListener("click", alternarConversas);
      tituloExpandirConversas.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          alternarConversas();
        }
      });
    }
    window.addEventListener("resize", atualizarConversasPorTamanho);
    atualizarConversasPorTamanho();
  }
})();
