📊 Aquaculture Sensor Dashboard
📖 Documentação do Projeto
🧭 Visão Geral

O Aquaculture Sensor Dashboard é uma aplicação frontend desenvolvida para simular um sistema de monitorização de sensores em ambientes de aquacultura. O sistema exibe dados ambientais em tempo real de forma visual, permitindo análise rápida do estado da qualidade da água.

O projeto simula um cenário real de IoT (Internet of Things), onde sensores recolhem dados como temperatura, pH, oxigénio dissolvido, turbidez e amónio, e esses dados são apresentados num dashboard interativo.

🎯 Objetivos
Simular um sistema de monitorização IoT
Visualizar dados ambientais de forma clara e intuitiva
Praticar React com TypeScript
Aplicar Recharts para visualização de dados
Utilizar hooks personalizados para organização da lógica
Criar uma arquitetura escalável e modular
⚙️ Funcionalidades
📈 Visualização de Dados
Gráficos de linha (LineChart) para evolução de sensores
Gráficos de pizza (PieChart) para estado geral dos sensores
🟢 Sistema de Status
Classificação automática dos sensores:
OK (normal)
Warn (atenção)
Crit (crítico)
Attn (atenção especial)
📊 Dashboard
Leituras em tempo real simuladas
Cards informativos de sensores
Indicadores visuais com cores dinâmicas
🧩 Arquitetura Modular
Hooks personalizados para lógica reutilizável
Componentes separados por responsabilidade
Dados desacoplados da interface
🧱 Estrutura do Projeto
src/
│
├── components/
│   ├── SensorStatusPie.tsx
│   ├── SensorReadings.tsx
│   ├── charts/
│   └── layout/
│
├── hooks/
│   ├── useSensorStatus.ts
│   ├── useReadings.ts
│   ├── useChartData.ts
│
├── data/
│   └── sensors.ts
│
└── App.tsx
🪝 Hooks Personalizados
🔹 useSensorStatus

Gerencia estados dos sensores e suas cores associadas.

ok → verde
warn → laranja
crit → vermelho
attn → laranja escuro
🔹 useReadings

Processa e organiza os dados dos sensores, adicionando informações derivadas como alertas e estatísticas.

🔹 useChartData

Transforma os dados brutos em formato compatível com os gráficos da biblioteca Recharts.

📊 Visualizações
📈 LineChart

Usado para representar a evolução temporal dos sensores.

Exemplo:

variação da temperatura ao longo do tempo
variação do oxigénio na água
🍩 PieChart

Usado para representar a distribuição do estado dos sensores:

Normal
Atenção
Crítico
🧠 Arquitetura

O projeto segue princípios de frontend moderno:

Separação de lógica e UI
Reutilização de código com hooks
Componentes pequenos e reutilizáveis
Estado derivado (derived state)
Estrutura escalável
🎨 UI/UX
Interface limpa e moderna
Uso de TailwindCSS para estilização
Cores baseadas em status
Layout responsivo
Design focado em dashboards industriais
🔮 Possíveis melhorias futuras
🔴 Integração com dados em tempo real (WebSocket)
📡 API backend (Node.js / Express)
🔔 Sistema de alertas automáticos
📱 Versão mobile otimizada
☁️ Persistência de dados (database)
📊 Filtros por intervalo de tempo
▶️ Como executar
Instalação
pnpm install
Rodar em desenvolvimento
pnpm dev
🏗️ Build de produção
pnpm build
👀 Preview da build
pnpm preview
👨‍💻 Autor

Desenvolvido por Augusto Manuel
Projeto focado em frontend moderno, visualização de dados e simulação de sistemas IoT.

🧩 Conclusão

Este projeto demonstra a construção de um dashboard moderno e escalável, aplicando conceitos fundamentais de React, visualização de dados e arquitetura frontend. Ele serve como base para sistemas reais de monitorização em ambientes industriais e de aquacultura.
