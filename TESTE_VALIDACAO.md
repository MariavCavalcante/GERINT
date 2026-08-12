/* ==========================================
   INSTRUÇÕES DE TESTE E VALIDAÇÃO
   Painel Inteligente da Regulação Estadual
   ========================================== */

📋 CHECKLIST DE VALIDAÇÃO ANTES DA ENTREGA

✅ TESTE 1: CARREGAMENTO INICIAL
[ ] Abra index.html no navegador
[ ] Verifique se cabeçalho institucional aparece
[ ] Verifique se logo carrega
[ ] Verifique se indicadores aparecem
[ ] Verifique se base de dados carrega

✅ TESTE 2: PREENCHIMENTO DE FILTROS
[ ] Clique em Município Solicitante
[ ] Verifique se autocomplete funciona
[ ] Digite "Goiânia" e verifique sugestões
[ ] Clique em uma sugestão
[ ] Verifique se Macrorregião e Região preenchem automaticamente
[ ] Verifique se Especialidade mostra opções
[ ] Selecione uma especialidade

✅ TESTE 3: FILTROS INTERDEPENDENTES
[ ] Após selecionar especialidade, verifique se Tipo de Leito mostra apenas opções relacionadas
[ ] Verifique se Complexidade mostra apenas opções relacionadas
[ ] Mude de especialidade e confirme que opções atualizam

✅ TESTE 4: PESQUISA E RESULTADOS
[ ] Selecione Município Solicitante: "Goiânia"
[ ] Selecione uma Especialidade
[ ] Clique em "Pesquisar"
[ ] Verifique se tabela de resultados aparece
[ ] Verifique se há resultados

✅ TESTE 5: ORDENAÇÃO POR DISTÂNCIA
[ ] Confirme que primeira linha tem menor distância
[ ] Confirme que distâncias aumentam para baixo
[ ] Verifique se KM está em destaque com ícone 📍
[ ] Verifique se primeira opção tem "🏆 MAIS PRÓXIMA"

✅ TESTE 6: COLUNAS CORRETAS
[ ] Verifique se Ranking aparece
[ ] Verifique se Distância está destacada
[ ] Verifique se Unidade Executante aparece
[ ] Verifique se Município Executante aparece
[ ] Verifique se Especialidade aparece
[ ] Verifique se Complexidade aparece
[ ] Verifique se Tipo de Leito NÃO aparece no resultado principal
[ ] Verifique se Macrorregião NÃO aparece no resultado principal

✅ TESTE 7: BOTÃO VER DETALHES
[ ] Clique em "Detalhes" de um resultado
[ ] Verifique se modal abre
[ ] Verifique se Tipo de Leito aparece nos detalhes
[ ] Verifique se Macrorregião aparece nos detalhes
[ ] Verifique se Fluxo Regulatório aparece nos detalhes
[ ] Verifique se Particularidades aparecem
[ ] Feche o modal

✅ TESTE 8: FILTRO DE PARTICULARIDADES
[ ] Limpe todos os filtros
[ ] Selecione Município e Especialidade
[ ] Digite "gestante" em Particularidades
[ ] Clique em Pesquisar
[ ] Verifique se resultados filtram por esse termo
[ ] Abra detalhes e veja se "gestante" aparece destacado

✅ TESTE 9: BOTÃO LIMPAR FILTROS
[ ] Preencha todos os filtros
[ ] Clique em "Limpar Filtros"
[ ] Verifique se todos os campos ficam vazios
[ ] Verifique se resultados desaparecem
[ ] Verifique se mensagens de erro desaparecem

✅ TESTE 10: ATUALIZAR BASE
[ ] Clique em "Atualizar Base"
[ ] Verifique se "Atualizando dados..." aparece
[ ] Aguarde carregamento
[ ] Verifique se data de sincronização atualiza
[ ] Verifique se status fica verde

✅ TESTE 11: EXPORTAÇÃO
[ ] Faça uma pesquisa
[ ] Clique em "Exportar"
[ ] Confirme se arquivo CSV é baixado
[ ] Abra o CSV em um editor de texto
[ ] Verifique se dados estão corretos
[ ] Verifique se está ordenado por distância

✅ TESTE 12: IMPRESSÃO
[ ] Faça uma pesquisa
[ ] Clique em "Imprimir"
[ ] Verifique se Ctrl+P abre diálogo de impressão
[ ] Verifique se tabela de resultados aparece
[ ] Verifique se filtros NÃO aparecem
[ ] Cancele impressão

✅ TESTE 13: RESPONSIVIDADE - DESKTOP
[ ] Abra em monitor grande (1920x1080+)
[ ] Verifique se layout é adequado
[ ] Verifique se tabela mostra todas as colunas
[ ] Redimensione janela
[ ] Verifique se layout adapta

✅ TESTE 14: RESPONSIVIDADE - TABLET
[ ] Abra em tablet (768px aprox)
[ ] Verifique se filtros se reorganizam
[ ] Verifique se tabela fica responsiva
[ ] Verifique se botões funcionam

✅ TESTE 15: RESPONSIVIDADE - MOBILE
[ ] Abra em smartphone (480px aprox)
[ ] Verifique se cabeçalho adapta
[ ] Verifique se filtros ficam em coluna única
[ ] Verifique se tabela pode fazer scroll horizontal
[ ] Verifique se tudo é clicável sem zoom

✅ TESTE 16: QUALIDADE DA BASE
[ ] Clique em "Qualidade da Base" no rodapé
[ ] Verifique se modal abre
[ ] Verifique se indicadores aparecem
[ ] Verifique se duplicados são listados (se houver)
[ ] Verifique se campos vazios são listados (se houver)
[ ] Clique em "Exportar Inconsistências"
[ ] Verifique se CSV é baixado
[ ] Feche modal

✅ TESTE 17: TRATAMENTO DE ERROS
[ ] Desconecte da internet
[ ] Clique em "Atualizar Base"
[ ] Verifique se mensagem de erro aparece
[ ] Verifique se interface NÃO fica branca ou quebrada
[ ] Reconecte internet
[ ] Clique em Atualizar Base novamente
[ ] Verifique se recupera normalmente

✅ TESTE 18: INDICADORES
[ ] Verifique se total de especialidades está correto
[ ] Verifique se total de unidades está correto
[ ] Verifique se total de municípios está correto
[ ] Faça uma pesquisa
[ ] Verifique se "Resultados Encontrados" atualiza
[ ] Verifique se "Menor Distância" mostra corretamente

✅ TESTE 19: DADOS EM TEMPO REAL
[ ] Faça uma pesquisa e anote 1º resultado
[ ] Aguarde 10 minutos (ou clique Atualizar)
[ ] Verifique se dados atualizam automaticamente
[ ] Confirm

e se estrutura de dados é mantida

✅ TESTE 20: VALIDAÇÃO DE CAMPOS OBRIGATÓRIOS
[ ] Clique em Pesquisar sem preencher Município
[ ] Verifique se erro aparece
[ ] Preencha Município mas não Especialidade
[ ] Clique em Pesquisar
[ ] Verifique se erro aparece
[ ] Preencha ambos
[ ] Clique em Pesquisar
[ ] Verifique se funciona

===========================================
REGRAS DE NEGÓCIO VALIDADAS
===========================================

🔍 REGRA DA DISTÂNCIA
[ ] Sempre menor distância primeiro
[ ] Cálculo é Município → Município, não Unidade → Unidade
[ ] Distância não informada aparece por último
[ ] Formato: 📍 XX,X KM

🏆 MAIS PRÓXIMA
[ ] Apenas primeira opção recebe badge
[ ] Badge em amarelo com ícone 🏆
[ ] Visualmente destacado

📊 HIERARQUIA DE PRIORIZAÇÃO
[ ] 1º: Especialidade compatível
[ ] 2º: Tipo de Leito (se selecionado)
[ ] 3º: Menor Distância
[ ] 4º: Compatibilidade com critérios
[ ] 5º: Particularidades

📋 NORMALIZAÇÃO
[ ] "Goiânia" = "GOIANIA" (sem acentos)
[ ] "Cardio" = "CARDIOLOGIA" (abreviações)
[ ] Espaços extras removidos
[ ] Maiúsculas/minúsculas equivalentes

✅ SEM SUBSTITUIÇÃO DE ANÁLISE TÉCNICA
[ ] Aviso institucional aparece nos detalhes
[ ] Painel aparece como FERRAMENTA DE APOIO
[ ] Dados completos disponíveis para análise

===========================================
DESEMPENHO
===========================================

⚡ TEMPO DE CARREGAMENTO
[ ] Primeira página < 3 segundos
[ ] Pesquisa < 1 segundo
[ ] Atualização base < 5 segundos

💾 MEMÓRIA
[ ] Aplicação não trava com muitos dados
[ ] Cache funciona adequadamente

===========================================
NAVEGADORES TESTADOS
===========================================

[ ] Chrome 120+
[ ] Firefox 121+
[ ] Safari 17+
[ ] Edge 120+

===========================================
CONFIGURAÇÃO FINAL
===========================================

[ ] Logo oficial está em assets/
[ ] config.js tem URL correta
[ ] Intervalo de atualização configurado
[ ] README.md atualizado
[ ] Não há erros no console (F12)
[ ] Sem warnings desnecessários

===========================================
PRONTO PARA PRODUÇÃO
===========================================

[ ] Todos os 20 testes passaram
[ ] Todas as regras de negócio validadas
[ ] Performance adequada
[ ] Responsivo em todos dispositivos
[ ] Documentação completa
[ ] Código comentado em português
[ ] Sem dados sensíveis no código

✅ PAINEL PRONTO PARA PUBLICAÇÃO!
