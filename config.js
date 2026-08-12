/**
 * CONFIGURAÇÃO CENTRALIZADA DO PAINEL INTELIGENTE
 * Secretaria de Estado da Saúde de Goiás
 * Superintendência de Regulação, Controle e Avaliação
 * Gerência de Regulação de Internações
 */

const CONFIG = {
  // ============================================
  // FONTE OFICIAL DOS DADOS
  // ============================================
  URL_BASE_DADOS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRak5nVb3L35cJeEi_CsL1qs60Y8OfCaf8u3jG7vBmb0VbjJCCR5QhA6f4lBPiLX-SnHJP0mwRMp7A9/pub?output=csv",

  // ============================================
  // INTERVALO DE ATUALIZAÇÃO AUTOMÁTICA
  // ============================================
  INTERVALO_ATUALIZACAO_MINUTOS: 10,

  // ============================================
  // CONFIGURAÇÕES DA INTERFACE
  // ============================================
  TITULO_SISTEMA: "Painel Inteligente do Fluxo Padrão da Regulação Estadual",
  INSTITUICAO: "Secretaria de Estado da Saúde de Goiás",
  SUPERINTENDENCIA: "Superintendência de Regulação, Controle e Avaliação",
  GERENCIA: "Gerência de Regulação e Ações de Urgência",

  // ============================================
  // CONFIGURAÇÕES DE DISTÂNCIA
  // ============================================
  UNIDADE_DISTANCIA: "KM",
  DISTANCIA_INVALIDA_PLACEHOLDER: "Distância não informada",

  // ============================================
  // MAPEAMENTO DE COLUNAS CSV
  // Adapte aos nomes exatos das colunas do Google Sheets
  // ============================================
  COLUNAS: {
    MUNICIPIO_SOLICITANTE: "Município Solicitante",
    REGIAO_SAUDE: "Região de Saúde",
    MACRORREGIAO: "Macrorregião",
    ESPECIALIDADE: "Especialidade",
    TIPO_LEITO: "Tipo de Leito",
    COMPLEXIDADE: "Complexidade",
    UNIDADE_EXECUTANTE: "Unidade Executante",
    MUNICIPIO_EXECUTANTE: "Município Executante",
    DISTANCIA_KM: "Distância (KM)",
    FLUXO_REGULATORIO: "Fluxo Regulatório",
    PARTICULARIDADES: "Particularidades",
    TIPO_ATENDIMENTO: "Tipo de Atendimento",
    OBSERVACOES: "Observações"
  },

  // ============================================
  // ALIASES E NORMALIZAÇÕES
  // ============================================
  ALIASES: {
    // Exemplo de aliases para equivalência
    "Alto": ["Alta", "alt"],
    "Médio": ["Media", "médio"],
    "Baixo": ["Baixa", "bx"]
  },

  // ============================================
  // CARACTERES ESPECIAIS E ACENTUAÇÃO
  // ============================================
  REMOVER_ACENTOS: true,
  NORMALIZAR_MAIUSCULAS: true,
  REMOVER_ESPACOS_EXTRAS: true,

  // ============================================
  // VALIDAÇÃO
  // ============================================
  CAMPOS_OBRIGATORIOS: ["Município Solicitante", "Especialidade", "Unidade Executante", "Município Executante"],

  // ============================================
  // INDICADORES E RELATÓRIOS
  // ============================================
  MOSTRAR_INDICADORES: true,
  MOSTRAR_QUALIDADE_DADOS: true,

  // ============================================
  // EXPORTAÇÃO
  // ============================================
  FORMATOS_EXPORTACAO: ["CSV", "Excel", "Impressão"],

  // ============================================
  // SEGURANÇA E PRIVACIDADE
  // ============================================
  AVISO_INSTITUCIONAL: "Este painel constitui ferramenta de apoio à Regulação Estadual. As informações apresentadas não substituem a análise técnica e a decisão do profissional regulador."
};
