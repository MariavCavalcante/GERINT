# 🏥 Painel Inteligente do Fluxo Padrão da Regulação Estadual

**Secretaria de Estado da Saúde de Goiás**  
Superintendência de Regulação, Controle e Avaliação  
Gerência de Regulação e Ações de Urgência

---

## 📋 Descrição

Sistema web responsivo e intuitivo para consultar o Fluxo Padrão da Regulação Estadual, permitindo que profissionais identifiquem rapidamente as unidades executantes relacionadas à necessidade assistencial, priorizando a menor distância entre o município solicitante e executante.

**Nota Importante**: Este painel constitui ferramenta de apoio à Regulação Estadual. As informações apresentadas não substituem a análise técnica e a decisão do profissional regulador.

---

## 🎯 Objetivos

- ✅ Consultar o Fluxo Padrão da Regulação Estadual
- ✅ Cruzar informações de município solicitante, especialidade, tipo de leito e complexidade
- ✅ Identificar automaticamente unidades executantes por distância
- ✅ Ordenar resultados sempre pela menor distância (regra de ouro)
- ✅ Funcionar como ferramenta de apoio à decisão regulatória
- ✅ Garantir atualização automática da base de dados

---

## 🏗️ Arquitetura

```
Painel-Regulacao-Estadual/
├── index.html                 # HTML principal
├── config.js                  # Configuração centralizada
├── css/
│   └── style.css             # Estilos customizados
├── js/
│   ├── app.js                # Aplicação principal
│   ├── util.js               # Funções utilitárias
│   ├── normalizacao.js       # Normalização de dados
│   ├── leitorDados.js        # Leitura e validação CSV
│   ├── distancia.js          # Cálculo de distância
│   ├── filtros.js            # Gerenciamento de filtros
│   ├── pesquisa.js           # Lógica de pesquisa
│   ├── tabela.js             # Renderização de tabela
│   └── qualidadeDados.js     # Análise de qualidade
├── assets/
│   └── logo-goias.png        # Logo institucional
└── README.md                 # Este arquivo
```

---

## 🔌 Fonte de Dados

O painel utiliza como fonte oficial a planilha Google Sheets publicada em CSV no endereço:

```
https://docs.google.com/spreadsheets/d/e/2PACX-1vRak5nVb3L35cJeEi_CsL1qs60Y8OfCaf8u3jG7vBmb0VbjJCCR5QhA6f4lBPiLX-SnHJP0mwRMp7A9/pub?output=csv
```

**Configuração**: A URL está centralizada no arquivo `config.js`, permitindo fácil atualização.

---

## ⚙️ Configuração

### config.js

```javascript
const CONFIG = {
  // URL oficial do Google Sheets
  URL_BASE_DADOS: "https://...",
  
  // Intervalo de atualização automática (em minutos)
  INTERVALO_ATUALIZACAO_MINUTOS: 10,
  
  // Nomes das colunas
  COLUNAS: { /* ... */ }
};
```

### Como Alterar a URL da Base

1. Abra `config.js`
2. Localize `URL_BASE_DADOS`
3. Substitua pela nova URL do Google Sheets (em formato CSV)
4. Salve o arquivo

### Como Alterar o Intervalo de Atualização

1. Abra `config.js`
2. Modifique `INTERVALO_ATUALIZACAO_MINUTOS` (padrão: 10)
3. Salve o arquivo

---

## 📊 Estrutura de Dados Esperada

O CSV deve conter as seguintes colunas:

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|-------------|-----------|
| Município Solicitante | Texto | Sim | Município que solicita internação |
| Região de Saúde | Texto | Não | Região de saúde do solicitante |
| Macrorregião | Texto | Não | Macrorregião do solicitante |
| Especialidade | Texto | Sim | Especialidade solicitada |
| Tipo de Leito | Texto | Não | Tipo de leito necessário |
| Complexidade | Texto | Não | Nível de complexidade |
| Unidade Executante | Texto | Sim | Unidade que executará |
| Município Executante | Texto | Sim | Município da unidade |
| Distância (KM) | Número | Não | Distância em quilômetros |
| Fluxo Regulatório | Texto | Não | Informações do fluxo |
| Particularidades | Texto | Não | Detalhes especiais |
| Tipo de Atendimento | Texto | Não | Tipo de atendimento |
| Observações | Texto | Não | Observações adicionais |

---

## 🚀 Como Usar Localmente

### Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para acessar Google Sheets)
- Servidor HTTP simples

### Execução Local com Python

```bash
# Python 3.x
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

### Execução Local com Node.js

```bash
# Instale http-server globalmente
npm install -g http-server

# Na pasta do projeto
http-server

# Acesse: http://localhost:8080
```

### Execução Local com VS Code

```bash
# Instale a extensão "Live Server"
# Clique com botão direito em index.html
# Selecione "Open with Live Server"
```

---

## 📤 Como Publicar na Vercel

### 1. Prepare o Projeto

```bash
# Crie arquivo vercel.json na raiz
```

### 2. Crie arquivo `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "buildCommand": "",
  "framework": "static"
}
```

### 3. Publicar

```bash
# Instale Vercel CLI
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel --prod
```

### 4. Acesse

Seu painel estará disponível em uma URL como:
```
https://seu-projeto.vercel.app
```

---

## 📤 Como Publicar no GitHub Pages

### 1. Crie repositório no GitHub

```bash
# Inicialize git
git init
git add .
git commit -m "Inicial"

# Adicione remote
git remote add origin https://github.com/seu-usuario/painel-regulacao.git

# Push
git push -u origin main
```

### 2. Configure GitHub Pages

1. Vá em **Settings** do repositório
2. Selecione **Pages**
3. Escolha "Deploy from a branch"
4. Selecione branch `main` e pasta `/ (root)`
5. Clique em **Save**

### 3. Acesse

Seu painel estará disponível em:
```
https://seu-usuario.github.io/painel-regulacao
```

---

## 🔍 Regras de Busca

### 1. Filtros Obrigatórios

- **Município Solicitante**: Campo obrigatório com autocomplete
- **Especialidade**: Campo obrigatório com opções da base

### 2. Filtros Opcionais

- **Tipo de Leito**: Filtra por tipo específico
- **Complexidade**: Filtra por nível de complexidade
- **Macrorregião**: Preenchida automaticamente
- **Particularidades**: Busca textual em observações

### 3. Hierarquia de Priorização

1. Especialidade compatível
2. Tipo de Leito (se selecionado)
3. **Menor distância** (REGRA DE OURO)
4. Compatibilidade com critérios
5. Particularidades

### 4. Regra da Distância

A distância é calculada entre **MUNICÍPIO SOLICITANTE → MUNICÍPIO EXECUTANTE**, não entre unidades.

Quando várias unidades estão no mesmo município, todas usam a mesma distância.

Resultados **sempre aparecem do menor para o maior KM**.

---

## 📈 Indicadores

Os indicadores no topo mostram:

- **Especialidades Cadastradas**: Total de especialidades na base
- **Unidades Executantes**: Total de unidades
- **Municípios Executantes**: Total de municípios
- **Resultados Encontrados**: Após pesquisa
- **Menor Distância**: Menor KM dos resultados
- **Última Atualização**: Data/hora da sincronização

---

## 🔄 Atualização da Base

### Automática

O painel atualiza a cada 10 minutos (configurável em `config.js`).

### Manual

Clique em **↻ Atualizar Base** no cabeçalho para sincronizar imediatamente.

### Indicador de Status

- 🟢 **Verde**: Base atualizada
- 🔴 **Vermelho**: Erro na atualização
- ⏳ **Atualizando...**: Sincronização em progresso

---

## 📊 Qualidade da Base

Acesse **Qualidade da Base** no rodapé para:

- Identificar registros duplicados
- Encontrar campos vazios
- Listar distâncias inválidas
- Detectar variações de grafia
- Exportar inconsistências em CSV

---

## 💾 Exportação

### Formatos Suportados

- **CSV**: Arquivo separado por vírgulas
- **Impressão**: Otimizado para impressora

### Como Exportar

1. Realize uma pesquisa
2. Clique em **📥 Exportar**
3. Selecione o formato
4. Arquivo será baixado automaticamente

---

## 🔒 Segurança e Privacidade

- ✅ Sem persistência de dados pessoais
- ✅ Sem conexão direta com servidores privados
- ✅ Acesso apenas ao Google Sheets público
- ✅ Processamento 100% no navegador
- ✅ Cache apenas de dados públicos

---

## ⚠️ Solução de Problemas

### "Não foi possível atualizar a base de dados"

**Causa**: Sem conexão internet ou URL incorreta

**Solução**:
1. Verifique conexão
2. Verifique se Google Sheets está acessível
3. Verifique URL em `config.js`

### Filtros vazios

**Causa**: CSV com colunas incorretas

**Solução**:
1. Verifique estrutura do CSV
2. Verifique nomes das colunas em `config.js`
3. Atualize a base

### Distâncias incorretas

**Causa**: Valores não numéricos no CSV

**Solução**:
1. Acesse **Qualidade da Base**
2. Verifique distâncias inválidas
3. Corrija no Google Sheets
4. Atualize a base

### Resultados lentos

**Causa**: Muitos registros ou navegador lento

**Solução**:
1. Feche abas desnecessárias
2. Limpe cache (Ctrl+Shift+Delete)
3. Use navegador mais recente

---

## 🧪 Testes Recomendados

### Teste 1: Pesquisa Básica
- [ ] Selecione um município e especialidade
- [ ] Clique em Pesquisar
- [ ] Verifique se resultados aparecem

### Teste 2: Ordenação por Distância
- [ ] Confirme que resultados vêm do menor para maior KM
- [ ] Primeiro resultado deve estar mais próximo

### Teste 3: Destaque Visual
- [ ] KM deve estar em negrito
- [ ] Primeiro resultado recebe "MAIS PRÓXIMA"

### Teste 4: Filtros Interdependentes
- [ ] Ao selecionar município, Macrorregião preenche automaticamente
- [ ] Tipo de Leito mostra apenas opções disponíveis

### Teste 5: Responsividade
- [ ] Teste em desktop, tablet e smartphone
- [ ] Layout adapta automaticamente

---

## 📝 Requisitos Técnicos Implementados

✅ HTML5 semântico  
✅ CSS3 responsivo com Flexbox/Grid  
✅ JavaScript ES6+  
✅ Bootstrap 5  
✅ PapaParse para CSV  
✅ Font Awesome 6  
✅ Sem dependências de backend  
✅ Sem serviços pagos obrigatórios  
✅ Tratamento de erros  
✅ Cache de dados  
✅ Exportação em múltiplos formatos  
✅ Interface amigável  
✅ Performance otimizada  

---

## 👥 Suporte e Contribuições

Para dúvidas, sugestões ou relatórios de bugs, entre em contato com:

**Secretaria de Estado da Saúde de Goiás**  
Superintendência de Regulação, Controle e Avaliação  
Gerência de Regulação e Ações de Urgência

---

## 📄 Licença

Sistema desenvolvido para a Secretaria de Estado da Saúde de Goiás.

---

## 🎯 Versão

**v1.0.0** - Agosto 2026

**Desenvolvido com ❤️ para a Regulação Estadual**
