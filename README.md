# 🐟 AquaSmart Tilapia

**AquaSmart Tilapia** é uma solução de monitorização inteligente para a criação de tilápias, desenvolvida para acompanhar dados ambientais da água e disponibilizá-los através de um dashboard web.

O projeto combina **IoT, sensores, comunicação serial, backend e frontend**, permitindo transformar dados recolhidos no ambiente de criação em informações visualmente acessíveis.

## 🎯 Objetivo

O objetivo do AquaSmart é facilitar a **monitorização das condições da água na criação de tilápias**, permitindo acompanhar os dados dos sensores através de uma interface web.

A solução foi pensada para ajudar a identificar alterações nas condições da água e fornecer uma visão centralizada dos dados recolhidos.

## 🏗️ Arquitetura

```text
┌─────────────────────┐
│      Sensores       │
│                     │
│     PIC16F887       │
└──────────┬──────────┘
           │
           │ UART
           ▼
┌─────────────────────┐
│     USB → TTL       │
│   Comunicação Serial│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       Backend       │
│      C# / .NET      │
└──────────┬──────────┘
           │
           │ REST API
           ▼
┌─────────────────────┐
│      Frontend       │
│ React + TypeScript  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      Dashboard      │
│  Gráficos e dados   │
└─────────────────────┘
```

## 🚀 Funcionalidades

* 📊 Dashboard para monitorização dos dados
* 📈 Visualização dos dados através de gráficos
* 🔌 Comunicação com sensores através de UART
* 🔄 Comunicação entre hardware e backend
* 🌐 Consumo de dados através de API REST
* 🐟 Monitorização aplicada à criação de tilápias
* 🗄️ Persistência de dados
* 🐳 Ambiente de desenvolvimento com Docker

## 🛠️ Tecnologias

### Hardware / IoT

* **PIC16F887**
* Sensores
* UART
* USB-to-TTL

### Backend

* **C#**
* **.NET**
* REST API

### Frontend

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **shadcn/ui**
* **React Query**
* **Recharts**

### Database & Infrastructure

* **PostgreSQL**
* **Docker**
* **Docker Compose**

## 💻 Frontend

O dashboard foi desenvolvido com React e TypeScript, com foco na apresentação dos dados provenientes dos sensores.

### Principais tecnologias

```text
React
TypeScript
Vite
Tailwind CSS
shadcn/ui
React Query
Recharts
```

O **React Query** é utilizado para gerir o consumo e atualização dos dados provenientes da API, enquanto o **Recharts** permite representar os dados através de gráficos.

## 🔌 Comunicação

Os dados são inicialmente recolhidos pelos sensores conectados ao **PIC16F887**.

A comunicação entre o microcontrolador e o sistema é realizada através de:

```text
PIC16F887
    ↓
UART
    ↓
USB-to-TTL
    ↓
Backend
    ↓
REST API
    ↓
React Dashboard
```

## 🗄️ Database

O projeto utiliza **PostgreSQL** para armazenamento dos dados.

O ambiente pode ser executado através de **Docker Compose**, permitindo configurar os serviços necessários de forma consistente.

## ⚙️ Configuração

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Entrar na pasta

```bash
cd aquasmart-tilapia
```

### 3. Instalar as dependências

Com pnpm:

```bash
pnpm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` com as configurações necessárias para comunicação com a API.

Exemplo:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### 5. Executar o projeto

```bash
pnpm dev
```

## 🐳 Docker

O projeto também pode utilizar Docker para executar os serviços de backend e PostgreSQL.

```bash
docker compose up -d
```

Para parar os serviços:

```bash
docker compose down
```

## 📊 Dashboard

O dashboard permite acompanhar os dados recolhidos pelos sensores de forma visual, utilizando gráficos e componentes de interface para facilitar a interpretação das informações.

> Adicione aqui screenshots do dashboard para apresentar visualmente o projeto no GitHub.

## 👨‍💻 Meu papel no projeto

Neste projeto, trabalhei principalmente no **desenvolvimento do frontend**, construindo o dashboard responsável por apresentar os dados provenientes da API.

### Responsabilidades

* Desenvolvimento da interface com React e TypeScript
* Criação do dashboard de monitorização
* Integração com a REST API
* Consumo e gestão dos dados com React Query
* Criação de gráficos com Recharts
* Desenvolvimento dos componentes da interface
* Implementação do layout responsivo
* Integração do frontend com o backend e a base de dados

## 📚 O que o projeto demonstra

O AquaSmart demonstra a integração de diferentes áreas da tecnologia:

```text
IoT
 ↓
Hardware
 ↓
Comunicação Serial
 ↓
Backend
 ↓
REST API
 ↓
Frontend
 ↓
Data Visualization
```

Este projeto permitiu trabalhar não apenas com desenvolvimento frontend, mas também compreender como diferentes camadas de uma aplicação podem comunicar entre si para transformar dados físicos em informação acessível através de uma aplicação web.

## 👨‍💻 Autor

**Augusto Manuel**

Software Developer | Engenharia de Telecomunicações

### Stack

`React` · `TypeScript` · `Vite` · `Tailwind CSS` · `React Query` · `Recharts` · `REST API` · `Docker` · `PostgreSQL`

---

⭐ Se gostaste do projeto, considera deixar uma estrela no repositório.
