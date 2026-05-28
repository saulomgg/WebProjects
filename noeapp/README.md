# NOE Cyber Hub - PWA

## 🚀 Bem-vindo ao NOE Hub

Um aplicativo web progressivo (PWA) com visual **Cyberpunk/Glitch** e layout estilo **App Nativo** para a Nova Ordem Estrutural.

## 📱 Características

- **Visual Cyberpunk**: Design futurista com efeitos glitch e grid cibernético
- **Layout de App**: Interface estilo aplicativo nativo com grid de ícones
- **Responsivo**: Funciona perfeitamente em qualquer dispositivo
- **PWA Ready**: Instalável como aplicativo no celular
- **Offline Support**: Funciona sem internet graças ao Service Worker
- **Animações Suaves**: Transições e efeitos visuais envolventes

## 📁 Estrutura de Pastas

```
noe_cyber_hub/
├── html/
│   ├── index.html          # Página principal (Hub)
│   ├── membros.html        # Página da Área de Membros
│   └── apoio.html          # Página de Apoio/Doações
├── css/
│   ├── style.css           # Estilos principais
│   └── pages.css           # Estilos das páginas internas
├── js/
│   └── main.js             # JavaScript interativo
├── assets/
│   ├── icon-192.png        # Ícone 192x192
│   └── icon-512.png        # Ícone 512x512
├── manifest.json           # Configuração PWA
├── sw.js                   # Service Worker
└── README.md               # Este arquivo
```

## 🎮 Como Usar

### 1. Abrir no Navegador
- Abra o arquivo `html/index.html` no seu navegador

### 2. Instalar como App (PWA)
- **Android**: Abra no Chrome → Menu (⋮) → "Instalar app"
- **iOS**: Abra no Safari → Compartilhar → "Adicionar à Tela de Início"
- **Desktop**: Abra no Chrome → Menu (⋮) → "Instalar NOE Hub"

### 3. Personalizar Perfil
- Clique no avatar para personalizar seu nome de usuário
- Dados salvos localmente no seu dispositivo

## 🎨 Cores e Temas

| Elemento | Cor | Hex |
|----------|-----|-----|
| Primário | Ciano | #00d4ff |
| Secundário | Rosa | #ff006e |
| Destaque | Amarelo | #ffbe0b |
| Fundo | Azul Escuro | #0a0e27 |

## 🔧 Personalizações

### Alterar Cores
Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary: #00d4ff;
    --secondary: #ff006e;
    --accent: #ffbe0b;
    /* ... */
}
```

### Adicionar Novos Cards
Edite `html/index.html` e adicione um novo card:

```html
<div class="app-card" onclick="navigateTo('seu-link-aqui')">
    <div class="card-glow"></div>
    <div class="card-content">
        <div class="card-icon">🎯</div>
        <h3>Seu Título</h3>
        <p>Descrição</p>
        <span class="card-tag">TAG</span>
    </div>
</div>
```

## 📱 Funcionalidades

### Hub Principal
- Grid de apps/serviços
- Links diretos para NoeSites, NoeApp, Telegram
- Área de Membros (Quadro)
- Seção de Apoio/Doações

### Área de Membros
- Informações sobre o programa Quadro
- Benefícios e como funciona
- Produtos para divulgar
- CTA para entrar no grupo

### Página de Apoio
- Formas de apoiar a NOE
- Informações sobre transparência
- Métodos de suporte
- Contato direto

## 🌐 Integração com Serviços

- **NoeSites**: https://noesites.pages.dev/
- **NoeApp**: https://noeapp.pages.dev/
- **Telegram Hub**: https://t.me/noehub
- **Telegram Privado**: https://t.me/+bkaEAqozRx03MWY5
- **TikTok**: https://www.tiktok.com/@saulomgg
- **YouTube**: https://youtube.com/@saulomgg

## 🔐 Privacidade

- Dados salvos **localmente** no seu dispositivo
- Nenhuma informação enviada para servidores
- Funciona completamente offline
- Seguro e privado

## 📝 Notas Técnicas

- **Compatibilidade**: Chrome, Firefox, Safari, Edge
- **Mínimo de Dados**: Apenas ~50KB
- **Performance**: Carregamento rápido e fluido
- **Acessibilidade**: Suporte a teclado e leitores de tela

## 🚀 Deploy

Para fazer deploy:

1. Copie todos os arquivos para seu servidor
2. Configure HTTPS (obrigatório para PWA)
3. Certifique-se de que `manifest.json` está acessível
4. Teste a instalação como app

## 📞 Suporte

Para dúvidas ou sugestões:
- Telegram: https://t.me/+bkaEAqozRx03MWY5
- Grupo NOE Hub: https://t.me/noehub

---

**NOE Hub v1.0** © 2024 Nova Ordem Estrutural
