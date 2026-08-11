# Painel Inteligente do Fluxo Padrão da Regulação Estadual

Secretaria de Estado da Saúde de Goiás.

Sistema web de apoio à tomada de decisão dos Analistas de Regulação e Médicos Reguladores.

## Bases

O painel utiliza:

- BASE_ATUALIZADA
- DISTÂNCIA

As duas bases são carregadas diretamente do Google Sheets.

## Regra de distância

A distância considerada é:

Município Solicitante → Município Executante

A distância não é calculada entre hospitais.

## Arquivos

- index.html
- style.css
- config.js
- normalizacao.js
- leitorDados.js
- ranking.js
- dashboard.js
- script.js

## Brasão

O Brasão Oficial do Estado de Goiás deve ser colocado em:

assets/brasao-goias.png

## GitHub Pages

Depois de enviar todos os arquivos:

1. Abra Settings.
2. Clique em Pages.
3. Em Source, escolha Deploy from a branch.
4. Escolha main.
5. Escolha /root.
6. Clique em Save.

## Atualização dos dados

As bases são consultadas diretamente do Google Sheets.

Quando a planilha publicada for atualizada, o painel poderá consultar os novos dados por meio do botão Atualizar Base.

## Aviso

O painel é uma ferramenta de apoio à decisão regulatória e não substitui avaliação clínica, protocolos assistenciais ou decisão do médico regulador.
