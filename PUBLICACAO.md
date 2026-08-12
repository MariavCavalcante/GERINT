/**
 * GUIA COMPLETO DE PUBLICAÇÃO
 * Painel Inteligente da Regulação Estadual
 * 
 * Instruções para colocar o painel em produção
 */

==============================================
📤 PUBLICAÇÃO NA VERCEL (RECOMENDADO)
==============================================

VANTAGENS:
✓ Deploy automático via Git
✓ HTTPS incluído
✓ Performance otimizada
✓ CDN global
✓ Grátis para sites estáticos
✓ Suporta domain customizado

PASSO 1: Prepare o Repositório Git
──────────────────────────────────
  
  1. Abra terminal na pasta do projeto
  2. Inicialize git:
     $ git init
  
  3. Adicione todos os arquivos:
     $ git add .
  
  4. Faça commit inicial:
     $ git commit -m "Painel Inteligente - Versão 1.0.0"

PASSO 2: Crie Repositório no GitHub
─────────────────────────────────────

  1. Acesse https://github.com/new
  2. Nome: painel-regulacao-estadual
  3. Descrição: Painel Inteligente do Fluxo Padrão da Regulação Estadual
  4. Selecione "Public"
  5. Clique em "Create repository"

PASSO 3: Conecte Git Remote
────────────────────────────

  Copie os comandos do GitHub:
  
  $ git remote add origin https://github.com/SEU-USUARIO/painel-regulacao-estadual.git
  $ git branch -M main
  $ git push -u origin main

PASSO 4: Configure na Vercel
─────────────────────────────

  1. Acesse https://vercel.com
  2. Clique em "Sign Up" (crie conta com GitHub)
  3. Clique em "New Project"
  4. Procure por "painel-regulacao-estadual"
  5. Clique em "Import"
  6. Configurações:
     - Framework: Other (Static)
     - Deploy: Deixe em branco
     - Clique em "Deploy"

PASSO 5: Aguarde Deploy
───────────────────────

  A Vercel irá:
  1. Fazer build do projeto
  2. Publicar automaticamente
  3. Fornecerá URL: https://painel-regulacao-xxxx.vercel.app

PASSO 6: Configure Domain Customizado (Opcional)
──────────────────────────────────────────────────

  1. No painel da Vercel
  2. Vá em "Settings" → "Domains"
  3. Digite seu domínio: painel-regulacao.ses.go.gov.br
  4. Siga instruções de configuração de DNS
  5. Aguarde propagação (até 48h)

==============================================
📤 PUBLICAÇÃO NO GITHUB PAGES
==============================================

VANTAGENS:
✓ Integrado com GitHub
✓ HTTPS incluído
✓ Grátis
✓ Fácil deploy

PASSO 1: Configure GitHub Pages
────────────────────────────────

  1. Vá ao repositório GitHub
  2. Clique em "Settings"
  3. Role até "GitHub Pages"
  4. "Source": Selecione "Deploy from a branch"
  5. "Branch": Selecione "main"
  6. "Folder": Selecione "/ (root)"
  7. Clique em "Save"

PASSO 2: Aguarde Deploy
───────────────────────

  GitHub irá gerar URL:
  https://seu-usuario.github.io/painel-regulacao-estadual

PASSO 3: Acesse
───────────────

  Abra a URL no navegador
  Pronto! Site está online

PASSO 4: Updates
────────────────

  Qualquer push para main atualiza automaticamente:
  
  $ git add .
  $ git commit -m "Atualização: descrição da mudança"
  $ git push

==============================================
📤 PUBLICAÇÃO NA NETLIFY
==============================================

VANTAGENS:
✓ Deploy por drag-and-drop
✓ HTTPS incluído
✓ Grátis
✓ Boa performance

PASSO 1: Prepare Deploy
────────────────────────

  Crie pasta /dist com todos os arquivos
  OU deixe os arquivos na raiz

PASSO 2: Deploy via GitHub
──────────────────────────

  1. Acesse https://netlify.com
  2. Clique em "Sign up" (use GitHub)
  3. Autorize Netlify
  4. Clique em "Add new site"
  5. "Import an existing project"
  6. Selecione repositório do GitHub
  7. Clique em "Deploy site"

PASSO 3: Configure
──────────────────

  Netlify automaticamente detecta e publica
  URL será: https://seu-projeto.netlify.app

==============================================
📤 PUBLICAÇÃO EM SERVIDOR OWN/AWS
==============================================

Se sua instituição tiver próprio servidor:

PASSO 1: Copie Arquivos
───────────────────────

  1. Conecte via SFTP/SSH
  2. Navegue até /var/www/html/
  3. Copie todos os arquivos do projeto

PASSO 2: Configure HTTPS
────────────────────────

  Recomendação: Instale Let's Encrypt

  Para nginx:
  $ sudo certbot certonly --nginx -d painel-regulacao.ses.go.gov.br

  Para Apache:
  $ sudo certbot certonly --apache -d painel-regulacao.ses.go.gov.br

PASSO 3: Configure Web Server
──────────────────────────────

  NGINX:
  ──────
  server {
    listen 443 ssl http2;
    server_name painel-regulacao.ses.go.gov.br;
    
    ssl_certificate /etc/letsencrypt/live/.../fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/.../privkey.pem;
    
    root /var/www/html/painel-regulacao;
    
    location / {
      try_files $uri /index.html;
    }
  }

  APACHE:
  ───────
  <VirtualHost *:443>
    ServerName painel-regulacao.ses.go.gov.br
    DocumentRoot /var/www/html/painel-regulacao
    
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/.../fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/.../privkey.pem
    
    <Directory /var/www/html/painel-regulacao>
      Options Indexes FollowSymLinks
      AllowOverride All
      Require all granted
      
      <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^ index.html [QSA,L]
      </IfModule>
    </Directory>
  </VirtualHost>

PASSO 4: Acesse
───────────────

  https://painel-regulacao.ses.go.gov.br

==============================================
✅ CHECKLIST PRÉ-PUBLICAÇÃO
==============================================

[ ] Todos os testes passaram
[ ] config.js tem URL correta do Google Sheets
[ ] config.js tem intervalo de atualização correto
[ ] Logo oficial está em assets/
[ ] Nenhum erro no console (F12)
[ ] Funciona offline parcialmente (dados em cache)
[ ] Responsivo em mobile/tablet/desktop
[ ] Exportação de CSV funciona
[ ] Qualidade da Base funciona
[ ] Atualização automática configurada
[ ] README.md atualizado
[ ] Documentação completa
[ ] Aviso institucional presente
[ ] Nenhum dado sensível no código
[ ] Performance aceitável
[ ] Testes em diferentes navegadores

==============================================
📝 PÓS-PUBLICAÇÃO
==============================================

PRIMEIRO DIA:
1. Monitore erros (abra console do navegador)
2. Verifique se base carrega corretamente
3. Teste pesquisa simples
4. Verifique se atualização automática funciona
5. Teste em diferentes dispositivos

PRIMEIROS DIAS:
1. Coletar feedback dos usuários
2. Verificar performance
3. Monitorar logs de erro
4. Testar com dados maiores se necessário

MANUTENÇÃO CONTÍNUA:
1. Verificar se Google Sheets está acessível
2. Monitorar performance do painel
3. Manter documentação atualizada
4. Atualizar dependências regularmente
5. Fazer backups do código

==============================================
🔄 ATUALIZAÇÕES
==============================================

Para atualizar o painel após publicação:

PAINEL ESTÁTICO (Sem backend):

1. Edite os arquivos localmente
2. Teste localmente
3. Commit e push:
   $ git add .
   $ git commit -m "Descrição da mudança"
   $ git push
4. Deploy acontece automaticamente

Se publicado em servidor próprio:
1. Edite os arquivos localmente
2. Teste localmente
3. Copie arquivos via SFTP/SSH
4. Pronto! Mudanças visíveis imediatamente

==============================================
🚨 TROUBLESHOOTING
==============================================

PROBLEMA: "Não foi possível carregar a base"
SOLUÇÃO:
  1. Verifique URL do Google Sheets em config.js
  2. Verifique se Google Sheets está público
  3. Teste URL no navegador
  4. Verifique console (F12 → Console)

PROBLEMA: Painel carrega lento
SOLUÇÃO:
  1. Verifique velocidade internet
  2. Teste com arquivo menor no Google Sheets
  3. Limpe cache do navegador
  4. Tente outro navegador

PROBLEMA: CORS Error
SOLUÇÃO:
  1. Google Sheets deve estar públic
  2. URL deve terminar com ?output=csv
  3. Sem headers customizados
  4. Reload page

PROBLEMA: Dados não atualizam
SOLUÇÃO:
  1. Clique em "Atualizar Base"
  2. Aguarde a mensagem "Atualizada"
  3. Faça nova pesquisa
  4. Verifique data de última atualização

==============================================
📞 SUPORTE
==============================================

Para dúvidas sobre:

VERCEL:
  https://vercel.com/docs
  https://vercel.com/support

GITHUB PAGES:
  https://docs.github.com/en/pages
  https://github.community

GOOGLE SHEETS API:
  https://developers.google.com/sheets

DESENVOLVIMENTO:
  Documentação no README.md
  Arquitetura em ARQUITETURA.md
  Testes em TESTE_VALIDACAO.md

==============================================

✅ PAINEL PRONTO PARA PUBLICAÇÃO EM PRODUÇÃO!

Escolha a plataforma mais adequada para sua instituição
e siga os passos acima.

Recomendação: VERCEL (mais fácil e mantém performance)
