"use client";

import { useState, useEffect, type ChangeEvent } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

function OikosLogoIcon({ size = 40, color = "#4169E1" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L6 17H10V34H18V24H22V34H30V17H34L20 6Z" fill={color} strokeLinejoin="round" />
    </svg>
  );
}

// ─── Screen 16: Chat Profissional ───────────────────────────────────────────

function ProfessionalChatScreen({
  onBack,
  onOpenDashboard,
  onOpenRequests,
  onOpenEarnings,
  onOpenProfile,
}: {
  onBack: () => void;
  onOpenDashboard: () => void;
  onOpenRequests: () => void;
  onOpenEarnings: () => void;
  onOpenProfile: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-gray-600 text-lg">←</button>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Ana Paula S.</p>
            <p className="text-xs text-green-500">Cliente online</p>
          </div>
          <button className="text-gray-400">⋯</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        <div className="bg-blue-600 text-white text-xs rounded-xl px-3 py-2">Instalação de tomadas • Hoje 10:00</div>

        <div className="self-end max-w-[75%] bg-blue-600 text-white rounded-2xl px-3 py-2 text-xs">
          Olá, Ana! Estou a caminho e chego em 15 min.
        </div>
        <div className="self-start max-w-[75%] bg-white rounded-2xl px-3 py-2 text-xs text-gray-700 shadow-sm">
          Perfeito! Portão estará aberto.
        </div>
        <div className="self-end max-w-[75%] bg-blue-600 text-white rounded-2xl px-3 py-2 text-xs">
          Vou levar todas as ferramentas necessárias.
        </div>

        <div className="mt-2">
          <p className="text-[10px] text-gray-400">Respostas rápidas</p>
          <div className="flex gap-2 mt-2">
            {["Chego em 10 min", "Já estou na rua", "Pode confirmar endereço?"].map((text) => (
              <div key={text} className="px-3 py-1 rounded-full bg-gray-100 text-[10px] text-gray-600">
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 bg-white rounded-2xl p-3 shadow-sm">
          <p className="text-xs text-gray-500">Pedido #OIK-20260410-4521</p>
          <p className="text-xs text-gray-400">Instalação de tomadas • Hoje 10:00</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-green-600">Status: Confirmado</span>
            <button className="text-xs text-blue-600">Ver detalhes</button>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <div className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2 border border-gray-100">
          <button className="text-gray-400">＋</button>
          <input className="flex-1 text-xs text-gray-500" placeholder="Digite sua mensagem..." />
          <button className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">➤</button>
        </div>
      </div>

      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "pro-dashboard", label: "Início", icon: "home" as const, onClick: onOpenDashboard },
          { id: "pro-requests", label: "Pedidos", icon: "orders" as const, onClick: onOpenRequests },
          { id: "pro-earnings", label: "Ganhos", icon: "search" as const, onClick: onOpenEarnings },
          { id: "pro-chat", label: "Chat", icon: "chat" as const, onClick: () => {} },
          { id: "pro-profile", label: "Perfil", icon: "profile" as const, onClick: onOpenProfile },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: tab.id === "pro-chat" ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 17: Ganhos Profissional ─────────────────────────────────────────

function ProfessionalEarningsScreen({
  onBack,
  onOpenChat,
  onOpenProfile,
  onOpenRequests,
}: {
  onBack: () => void;
  onOpenChat: () => void;
  onOpenProfile: () => void;
  onOpenRequests: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-6" style={{ backgroundColor: "#4169E1" }}>
        <div className="flex items-center justify-between text-white">
          <button onClick={onBack} className="text-white text-lg">←</button>
          <span className="text-sm">Ganhos</span>
          <button className="text-white text-lg">⋯</button>
        </div>
        <div className="mt-6">
          <p className="text-blue-100 text-xs">Total no mês</p>
          <h2 className="text-2xl font-semibold text-white">R$ 1.840,00</h2>
          <p className="text-blue-200 text-xs">+12% em relação ao mês anterior</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 -mt-4 pb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900">Resumo da Semana</h3>
          <div className="mt-4 grid grid-cols-7 gap-2 items-end">
            {[50, 65, 40, 80, 55, 95, 60].map((value, idx) => (
              <div key={value} className="flex flex-col items-center gap-2">
                <div
                  className="w-4 rounded-full"
                  style={{ height: value, backgroundColor: idx === 5 ? "#2563EB" : "#E5E7EB" }}
                />
                <span className="text-[10px] text-gray-400">{["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"][idx]}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
            <span>R$ 460 nesta semana</span>
            <span className="text-green-600">+8%</span>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Últimos pagamentos</h3>
          {[
            { label: "Instalação de tomadas", value: "R$ 120", date: "09 Abr" },
            { label: "Troca de disjuntor", value: "R$ 90", date: "07 Abr" },
            { label: "Laudo elétrico", value: "R$ 150", date: "05 Abr" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b last:border-b-0">
              <div>
                <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                <p className="text-[10px] text-gray-400">{item.date}</p>
              </div>
              <span className="text-xs text-green-600 font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "pro-dashboard", label: "Início", icon: "home" as const, onClick: onBack },
          { id: "pro-requests", label: "Pedidos", icon: "orders" as const, onClick: onOpenRequests },
          { id: "pro-earnings", label: "Ganhos", icon: "search" as const, onClick: () => {} },
          { id: "pro-chat", label: "Chat", icon: "chat" as const, onClick: onOpenChat },
          { id: "pro-profile", label: "Perfil", icon: "profile" as const, onClick: onOpenProfile },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: tab.id === "pro-earnings" ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 18: Pedidos Concluídos ──────────────────────────────────────────

function ProfessionalCompletedScreen({
  onBack,
  onOpenChat,
  onOpenProfile,
  onOpenEarnings,
}: {
  onBack: () => void;
  onOpenChat: () => void;
  onOpenProfile: () => void;
  onOpenEarnings: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-gray-600 text-lg">←</button>
          <h2 className="text-lg font-semibold text-gray-900">Pedidos concluídos</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        {[
          { client: "Marcia Lima", service: "Instalação de tomadas", rating: "5,0", price: "R$ 120", date: "07 Abr" },
          { client: "Pedro Souza", service: "Troca de disjuntor", rating: "4,8", price: "R$ 90", date: "05 Abr" },
          { client: "Juliana Costa", service: "Laudo elétrico", rating: "4,9", price: "R$ 150", date: "03 Abr" },
        ].map((item) => (
          <div key={item.client} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.client}</p>
                <p className="text-xs text-blue-600">{item.service}</p>
              </div>
              <span className="text-xs text-green-600 font-semibold">{item.price}</span>
            </div>
            <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
              <span>{item.date}</span>
              <span className="text-yellow-500">★ {item.rating}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "pro-dashboard", label: "Início", icon: "home" as const, onClick: onBack },
          { id: "pro-requests", label: "Pedidos", icon: "orders" as const, onClick: onBack },
          { id: "pro-earnings", label: "Ganhos", icon: "search" as const, onClick: onOpenEarnings },
          { id: "pro-chat", label: "Chat", icon: "chat" as const, onClick: onOpenChat },
          { id: "pro-profile", label: "Perfil", icon: "profile" as const, onClick: onOpenProfile },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: tab.id === "pro-requests" ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 13: Dashboard Profissional ───────────────────────────────────────

function ProfessionalDashboardScreen({
  onOpenRequests,
  onOpenProfile,
  onOpenChat,
  onOpenEarnings,
  onLogout,
}: {
  onOpenRequests: () => void;
  onOpenProfile: () => void;
  onOpenChat: () => void;
  onOpenEarnings: () => void;
  onLogout: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-6" style={{ backgroundColor: "#4169E1" }}>
        <div className="flex items-center justify-between text-white">
          <div>
            <h2 className="text-lg font-semibold">Bom dia, Carlos!</h2>
            <p className="text-blue-100 text-xs">Você tem 3 novos pedidos hoje</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onLogout} className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">Sair</button>
            <button onClick={onOpenProfile} className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-white text-sm">C</button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Este mês", value: "R$ 1.840", color: "#10B981" },
            { label: "Avaliação", value: "4.9", color: "#F59E0B" },
            { label: "Serviços", value: "23", color: "#ffffff" },
          ].map((card) => (
            <div key={card.label} className="bg-white rounded-2xl px-3 py-3 shadow-sm">
              <p className="text-xs text-gray-400">{card.label}</p>
              <p className="text-base font-semibold" style={{ color: card.color === "#ffffff" ? "#111827" : card.color }}>
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Agenda de Hoje</h3>
          <p className="text-xs text-gray-400">Quinta, 9 de Abril</p>
        </div>
        {[
          { time: "10:00", title: "Instalação de tomadas", client: "Ana Paula - Rua das Flores, 123", status: "Confirmado", color: "#10B981" },
          { time: "14:00", title: "Troca de disjuntor", client: "Pedro Lima - Av. Paulista, 456", status: "Pendente", color: "#F59E0B" },
          { time: "16:30", title: "Laudo elétrico", client: "Maria Costa - R. Augusta, 789", status: "Agendado", color: "#2563EB" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-1 h-12 rounded-full" style={{ backgroundColor: item.color }} />
            <div className="flex-1">
              <p className="text-xs text-gray-400">{item.time}</p>
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              <p className="text-xs text-gray-400">{item.client}</p>
            </div>
            <span className="text-xs text-white px-3 py-1 rounded-full" style={{ backgroundColor: item.color }}>
              {item.status}
            </span>
          </div>
        ))}

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900">Ganhos da Semana</h3>
          <div className="mt-3 grid grid-cols-7 gap-2 items-end">
            {[40, 60, 30, 70, 45, 90, 55].map((value, idx) => (
              <div key={value} className="flex flex-col items-center gap-2">
                <div
                  className="w-4 rounded-full"
                  style={{ height: value, backgroundColor: idx === 5 ? "#2563EB" : "#E5E7EB" }}
                />
                <span className="text-[10px] text-gray-400">{["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"][idx]}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-green-600 mt-3">R$ 460 esta semana</p>
          <p className="text-[10px] text-gray-400">12% a mais que semana anterior</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Ações Rápidas</h3>
          <div className="grid grid-cols-3 gap-2">
            {["Nova Proposta", "Solicitações", "Meu Perfil"].map((label, idx) => (
              <button
                key={label}
                onClick={idx === 1 ? onOpenRequests : onOpenProfile}
                className="rounded-xl py-3 text-xs font-semibold"
                style={{ backgroundColor: idx === 0 ? "#F97316" : idx === 1 ? "#4169E1" : "#6B7280", color: "white" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "pro-dashboard", label: "Início", icon: "home" as const, onClick: () => {} },
          { id: "pro-requests", label: "Pedidos", icon: "orders" as const, onClick: onOpenRequests },
          { id: "pro-earnings", label: "Ganhos", icon: "search" as const, onClick: onOpenEarnings },
          { id: "pro-chat", label: "Chat", icon: "chat" as const, onClick: onOpenChat },
          { id: "pro-profile", label: "Perfil", icon: "profile" as const, onClick: onOpenProfile },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: tab.id === "pro-dashboard" ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 14: Solicitações Profissional ───────────────────────────────────

function ProfessionalRequestsScreen({
  onBack,
  onOpenChat,
  onOpenProfile,
  onOpenEarnings,
  onOpenCompleted,
}: {
  onBack: () => void;
  onOpenChat: () => void;
  onOpenProfile: () => void;
  onOpenEarnings: () => void;
  onOpenCompleted: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Solicitações</h2>
          <button className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Filtro</button>
        </div>
        <div className="flex gap-4 mt-4 text-xs font-semibold">
          <button className="text-white bg-blue-600 px-4 py-2 rounded-full">Novas (3)</button>
          <button className="text-gray-400">Aceitas</button>
          <button onClick={onOpenCompleted} className="text-gray-400">Concluídas</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        {[
          { name: "Ana Paula S.", service: "Instalação de tomadas", address: "Rua das Flores, 123", time: "Hoje 10:00", price: "R$ 80-120" },
          { name: "Roberto Lima", service: "Troca de disjuntor", address: "Av. Paulista, 456", time: "Hoje 14:00", price: "R$ 60-100" },
          { name: "Sandra Costa", service: "Laudo elétrico", address: "R. Augusta, 789", time: "Amanhã 09:00", price: "R$ 150-200" },
        ].map((req, idx) => (
          <div key={req.name} className={`bg-white rounded-2xl p-4 shadow-sm ${idx === 2 ? "border border-blue-500" : ""}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  {req.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{req.name}</p>
                  <p className="text-xs text-blue-600">{req.service}</p>
                </div>
              </div>
              <span className="text-[10px] text-white bg-orange-500 px-3 py-1 rounded-full">Nova</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">{req.address}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{req.time}</span>
              <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">{req.price}</span>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-green-500 text-white text-xs font-semibold py-2 rounded-xl">Aceitar</button>
              <button className="flex-1 bg-gray-100 text-gray-500 text-xs font-semibold py-2 rounded-xl">Recusar</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "pro-dashboard", label: "Início", icon: "home" as const, onClick: onBack },
          { id: "pro-requests", label: "Pedidos", icon: "orders" as const, onClick: () => {} },
          { id: "pro-earnings", label: "Ganhos", icon: "search" as const, onClick: onOpenEarnings },
          { id: "pro-chat", label: "Chat", icon: "chat" as const, onClick: onOpenChat },
          { id: "pro-profile", label: "Perfil", icon: "profile" as const, onClick: onOpenProfile },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: tab.id === "pro-requests" ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 15: Perfil Profissional ─────────────────────────────────────────

function ProfessionalProfileOwnerScreen({
  onOpenDashboard,
  onOpenRequests,
  onOpenChat,
  onOpenEarnings,
}: {
  onOpenDashboard: () => void;
  onOpenRequests: () => void;
  onOpenChat: () => void;
  onOpenEarnings: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-6" style={{ backgroundColor: "#4169E1" }}>
        <div className="flex items-center justify-between text-white">
          <button onClick={onOpenDashboard} className="text-white text-lg">←</button>
          <span className="text-sm">Meu Perfil</span>
          <button className="text-white text-sm">Editar</button>
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold">C</div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white" />
          </div>
          <h3 className="text-white text-lg font-semibold mt-3">Carlos Mendes</h3>
          <p className="text-blue-100 text-xs">Eletricista</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 -mt-6 pb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm grid grid-cols-4 gap-2 text-center text-xs">
          {[
            { label: "Avaliação", value: "4.9" },
            { label: "Aval.", value: "127" },
            { label: "Serviços", value: "23" },
            { label: "Anos", value: "8" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-blue-600 font-semibold">{stat.value}</p>
              <p className="text-gray-400 text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-green-500 text-white rounded-2xl px-4 py-3 text-center text-xs font-semibold">
          Profissional Verificado pelo Oikos
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Sobre mim</h3>
          <p className="text-xs text-gray-500">
            Eletricista com 8 anos de experiência em instalações residenciais e comerciais.
          </p>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Meus Serviços</h3>
          <div className="flex flex-col gap-2">
            {[
              { title: "Instalação de tomadas", price: "R$ 80-120" },
              { title: "Troca de disjuntor", price: "R$ 60-100" },
              { title: "Laudo elétrico", price: "R$ 150-200" },
              { title: "Projeto elétrico", price: "R$ 250-500" },
            ].map((service) => (
              <div key={service.title} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-3 text-xs">
                <span>{service.title}</span>
                <span className="text-green-600 font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Documentos e Certificações</h3>
          {[
            { doc: "CREA / CAU", status: "Verificado" },
            { doc: "NR-10", status: "Verificado" },
          ].map((item) => (
            <div key={item.doc} className="flex items-center justify-between text-xs text-gray-500 py-2 border-b last:border-b-0">
              <span>{item.doc}</span>
              <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "pro-dashboard", label: "Início", icon: "home" as const, onClick: onOpenDashboard },
          { id: "pro-requests", label: "Pedidos", icon: "orders" as const, onClick: onOpenRequests },
          { id: "pro-earnings", label: "Ganhos", icon: "search" as const, onClick: onOpenEarnings },
          { id: "pro-chat", label: "Chat", icon: "chat" as const, onClick: onOpenChat },
          { id: "pro-profile", label: "Perfil", icon: "profile" as const, onClick: () => {} },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: tab.id === "pro-profile" ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 7: Lista de Profissionais ───────────────────────────────────────

function ProfessionalsListScreen({
  category,
  onBack,
  onSelectProfessional,
}: {
  category: string;
  onBack: () => void;
  onSelectProfessional: (name: string) => void;
}) {
  const filteredProfessionals = professionals.filter((pro) => pro.category === category);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4" style={{ backgroundColor: "#4169E1" }}>
        <div className="flex items-center gap-3 text-white">
          <button onClick={onBack} className="text-white text-lg">←</button>
          <div>
            <p className="text-blue-100 text-xs">Categoria</p>
            <h2 className="text-lg font-semibold">{category}</h2>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
        {filteredProfessionals.map((pro) => (
          <button
            key={pro.name}
            onClick={() => onSelectProfessional(pro.name)}
            className="bg-white rounded-2xl p-4 shadow-sm text-left flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={pro.photo}
                alt={pro.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900">{pro.name}</p>
                  {pro.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Verificado</span>}
                </div>
                <p className="text-xs text-gray-500">{pro.role}</p>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <span className="text-yellow-400">★</span>
                  <span>{pro.rating}</span>
                  <span className="text-gray-400">({pro.reviews} avaliações)</span>
                </div>
              </div>
              <div className="text-xs text-blue-600 font-semibold">Ver perfil →</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-xl px-3 py-2 text-xs text-gray-600">📍 {pro.distance}</div>
              <div className="bg-gray-50 rounded-xl px-3 py-2 text-xs text-gray-600">⚡ {pro.response}</div>
              <div className="bg-blue-50 rounded-xl px-3 py-2 text-xs text-blue-700">💸 {pro.priceBadge}</div>
              <div className="bg-green-50 rounded-xl px-3 py-2 text-xs text-green-700">✅ {pro.qualityBadge}</div>
            </div>
          </button>
        ))}
        {filteredProfessionals.length === 0 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm text-xs text-gray-500">
            Nenhum profissional disponivel nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Screen 8: Perfil do Profissional ───────────────────────────────────────

function ProfessionalProfileScreen({
  professional,
  onBack,
  onSchedule,
}: {
  professional: (typeof professionals)[number];
  onBack: () => void;
  onSchedule: (service: string) => void;
}) {
  const [selectedService, setSelectedService] = useState(professional.services[0]?.title ?? "");
  const [selectedDay, setSelectedDay] = useState("Seg");

  useEffect(() => {
    setSelectedService(professional.services[0]?.title ?? "");
  }, [professional]);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-6" style={{ backgroundColor: "#4169E1" }}>
        <div className="flex items-center justify-between text-white">
          <button onClick={onBack} className="text-white text-lg">←</button>
          <span className="text-sm">Perfil do Profissional</span>
          <button className="text-white text-lg">♡</button>
        </div>
        <div className="flex flex-col items-center mt-6">
          <img
            src={professional.photo}
            alt={professional.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 -mt-6 pb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{professional.name}</h2>
              <p className="text-xs text-gray-400">{professional.role}</p>
            </div>
            {professional.verified && (
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">✓ Verificado</span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-medium text-gray-700">{professional.rating}</span>
            <span className="text-xs text-gray-400">({professional.reviews} avaliações)</span>
          </div>

          <div className="flex gap-2 mt-3">
            {["Eletricista", "Instalações", "Reformas"].map((tag) => (
              <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 text-sm mb-2">Sobre</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Especialista com 8 anos de experiência em instalações residenciais e comerciais. Foco em segurança, qualidade e atendimento rápido.
          </p>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">Serviços e Preços</h3>
            <button className="text-xs text-blue-600">Ver todos</button>
          </div>
          <div className="flex flex-col gap-2">
            {professional.services.map((service) => (
              <button
                key={service.title}
                onClick={() => setSelectedService(service.title)}
                className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm border ${
                  selectedService === service.title
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-50 text-gray-700 border-transparent"
                }`}
              >
                <span>{service.title}</span>
                <span className={selectedService === service.title ? "text-white font-semibold" : "text-blue-700 font-semibold"}>
                  {service.price}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 text-sm mb-2">Disponibilidade</h3>
          <div className="grid grid-cols-5 gap-2 text-xs">
            {[
              { label: "Seg", active: true },
              { label: "Ter" },
              { label: "Qua", active: true },
              { label: "Qui" },
              { label: "Sex", active: true },
            ].map((day) => (
              <button
                key={day.label}
                onClick={() => setSelectedDay(day.label)}
                className={`rounded-lg px-2 py-2 text-center ${
                  selectedDay === day.label
                    ? "bg-blue-600 text-white"
                    : day.active
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => onSchedule(selectedService || professional.services[0].title)}
          className="w-full py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: "#E8643C" }}
        >
          Agendar Serviço
        </button>
      </div>
    </div>
  );
}

// ─── Screen 9: Agendamento ───────────────────────────────────────────────────

function ScheduleScreen({
  professional,
  selectedService,
  onBack,
  onConfirm,
}: {
  professional: (typeof professionals)[number];
  selectedService: string;
  onBack: () => void;
  onConfirm: () => void;
}) {
  const [serviceChoice, setServiceChoice] = useState(selectedService);
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState("10:00");

  useEffect(() => {
    setServiceChoice(selectedService);
  }, [selectedService]);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 text-gray-800">
          <button onClick={onBack} className="text-gray-600 text-lg">←</button>
          <h2 className="text-base font-semibold">Agendar Serviço</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
          <img
            src={professional.photo}
            alt={professional.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">{professional.name}</p>
            <p className="text-xs text-gray-400">{professional.role} • {professional.rating}</p>
          </div>
          <span className="text-xs font-semibold text-gray-600">R$ 80-120</span>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Tipo de Serviço</h3>
          <div className="flex flex-col gap-2">
            {professional.services.map((service) => (
              <button
                key={service.title}
                onClick={() => setServiceChoice(service.title)}
                className={`rounded-xl px-4 py-3 text-sm border text-left ${service.title === serviceChoice ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-200 text-gray-600"}`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Selecione a Data</h3>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <button>←</button>
              <span>Abril 2026</span>
              <button>→</button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-xs text-gray-400">
              {"DSTQQSS".split("").map((d) => (
                <div key={d} className="text-center">{d}</div>
              ))}
              {Array.from({ length: 30 }).map((_, idx) => {
                const day = idx + 1;
                const active = day === selectedDate;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`text-center rounded-lg py-1 ${active ? "bg-blue-600 text-white" : "text-gray-500"}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Horário Disponível</h3>
          <div className="flex gap-2">
            {[
              { time: "08:00" },
              { time: "10:00" },
              { time: "14:00" },
              { time: "16:00" },
            ].map((slot) => (
              <button
                key={slot.time}
                onClick={() => setSelectedTime(slot.time)}
                className={`rounded-xl px-4 py-2 text-xs ${selectedTime === slot.time ? "bg-blue-600 text-white" : "bg-white text-gray-500 border border-gray-200"}`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button onClick={onConfirm} className="w-full py-3 rounded-xl text-white font-semibold" style={{ backgroundColor: "#E8643C" }}>
          Confirmar Agendamento
        </button>
        <p className="text-xs text-center text-gray-400 mt-2">Cancelamento gratuito até 24h antes</p>
      </div>
    </div>
  );
}

// ─── Screen 10: Pagamento ────────────────────────────────────────────────────

function PaymentScreen({
  professional,
  selectedService,
  onBack,
  onPay,
}: {
  professional: (typeof professionals)[number];
  selectedService: string;
  onBack: () => void;
  onPay: () => void;
}) {
  const [paymentMethod, setPaymentMethod] = useState("Cartão de crédito");
  const [installmentsOpen, setInstallmentsOpen] = useState(false);
  const [selectedInstallment, setSelectedInstallment] = useState("1x de R$ 105,00 (sem juros)");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const installments = [
    "1x de R$ 105,00 (sem juros)",
    "2x de R$ 52,50 (sem juros)",
    "3x de R$ 35,00 (sem juros)",
    "4x de R$ 26,90 (com juros)",
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 text-gray-800">
          <button onClick={onBack} className="text-gray-600 text-lg">←</button>
          <h2 className="text-base font-semibold">Pagamento</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Resumo do Pedido</h3>
          <div className="text-xs text-gray-500">
            {selectedService} - {professional.name}
          </div>
          <div className="text-xs text-gray-400 mb-2">Sex, 10 Abr • 10:00</div>
          <div className="border-t border-dashed border-gray-200 my-3" />
          <div className="flex justify-between text-xs text-gray-600">
            <span>Subtotal</span>
            <span>R$ 100,00</span>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Taxa de serviço</span>
            <span>R$ 5,00</span>
          </div>
          <div className="mt-3 bg-blue-600 text-white rounded-xl px-3 py-2 text-sm font-semibold flex justify-between">
            <span>Total</span>
            <span>R$ 105,00</span>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Forma de Pagamento</h3>
          <div className="flex flex-col gap-2">
            {[
              { label: "Cartão de crédito" },
              { label: "PIX", subtitle: "Instantâneo" },
              { label: "Boleto", subtitle: "Vencimento em 3 dias" },
            ].map((method) => (
              <button
                key={method.label}
                onClick={() => setPaymentMethod(method.label)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm ${
                  paymentMethod === method.label
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-600"
                }`}
              >
                <span>{method.label}</span>
                {method.subtitle && (
                  <span className={paymentMethod === method.label ? "text-blue-100 text-xs" : "text-xs text-gray-400"}>
                    {method.subtitle}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Cupom de Desconto</h3>
          <div className="flex gap-2">
            <input
              value={coupon}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setCoupon(event.target.value)}
              className="flex-1 bg-gray-50 rounded-xl px-3 py-2 text-xs text-gray-500"
              placeholder="Insira seu cupom"
            />
            <button
              onClick={() => setCouponApplied(Boolean(coupon.trim()))}
              className={`text-xs font-semibold px-4 rounded-xl ${couponApplied ? "bg-green-600 text-white" : "bg-blue-600 text-white"}`}
            >
              {couponApplied ? "Aplicado" : "Aplicar"}
            </button>
          </div>
          {couponApplied && (
            <p className="text-[10px] text-green-600 mt-2">Cupom aplicado com sucesso.</p>
          )}
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Parcelas</h3>
          <button
            onClick={() => setInstallmentsOpen(!installmentsOpen)}
            className="w-full flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 text-xs text-gray-600"
          >
            <span>{selectedInstallment}</span>
            <span>{installmentsOpen ? "⌃" : "⌄"}</span>
          </button>
          {installmentsOpen && (
            <div className="mt-2 flex flex-col gap-2">
              {installments.map((installment) => (
                <button
                  key={installment}
                  onClick={() => {
                    setSelectedInstallment(installment);
                    setInstallmentsOpen(false);
                  }}
                  className={`rounded-xl px-4 py-2 text-xs text-left ${
                    selectedInstallment === installment
                      ? "bg-blue-600 text-white"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {installment}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 pb-6">
        <button onClick={onPay} className="w-full py-3 rounded-xl text-white font-semibold" style={{ backgroundColor: "#10B981" }}>
          Pagar Agora
        </button>
        <p className="text-[10px] text-center text-gray-400 mt-2">Ao pagar você concorda com os Termos de Serviço</p>
      </div>
    </div>
  );
}

// ─── Screen 11: Pedido Confirmado ────────────────────────────────────────────

function OrderConfirmedScreen({ onTrack, onBack }: { onTrack: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 text-gray-800">
          <button onClick={onBack} className="text-gray-600 text-lg">←</button>
          <h2 className="text-base font-semibold">Pedido Confirmado</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-8">
        <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">✓</div>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mt-4">Pedido Confirmado!</h2>
        <p className="text-xs text-gray-500 text-center mt-1">Agendamento realizado com sucesso. Detalhes enviados por e-mail.</p>

        <div className="w-full mt-5 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Detalhes do Agendamento</h3>
          <div className="text-xs text-gray-500 flex justify-between">
            <span>Profissional</span>
            <span className="text-gray-800">Carlos Mendes</span>
          </div>
          <div className="text-xs text-gray-500 flex justify-between mt-1">
            <span>Serviço</span>
            <span className="text-gray-800">Instalação de tomadas</span>
          </div>
          <div className="text-xs text-gray-500 flex justify-between mt-1">
            <span>Data e Hora</span>
            <span className="text-gray-800">Sex, 10 Abr • 10:00</span>
          </div>
          <div className="text-xs text-gray-500 flex justify-between mt-1">
            <span>Valor Pago</span>
            <span className="text-green-600 font-semibold">R$ 105,00</span>
          </div>
          <div className="text-xs text-blue-600 mt-2">Código #OIK-20260410-4521</div>
        </div>

        <div className="w-full mt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">O que acontece agora?</h3>
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            {[
              "O profissional confirma o horário em até 30 min",
              "Você receberá lembrete 1h antes do serviço",
              "Após o serviço, avalie o profissional",
            ].map((item, idx) => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">{idx + 1}</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-8">
        <button onClick={onTrack} className="w-full py-3 rounded-xl text-white font-semibold" style={{ backgroundColor: "#4169E1" }}>
          Acompanhar Pedido
        </button>
      </div>
    </div>
  );
}

// ─── Screen 12: Chat ─────────────────────────────────────────────────────────

function ChatScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="px-5 pt-10 pb-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-gray-600 text-lg">←</button>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Carlos Mendes</p>
            <p className="text-xs text-green-500">Online agora</p>
          </div>
          <button className="text-gray-400">⋯</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        <div className="bg-blue-600 text-white text-xs rounded-xl px-3 py-2">Instalação de tomadas - Agendado Sex 10/04</div>

        <div className="self-start max-w-[75%] bg-white rounded-2xl px-3 py-2 text-xs text-gray-700 shadow-sm">
          Olá! Confirmo o agendamento para 10h. Qualquer dúvida, fale!
        </div>
        <div className="self-end max-w-[75%] bg-blue-600 text-white rounded-2xl px-3 py-2 text-xs">
          Perfeito! Vou deixar o portão aberto.
        </div>
        <div className="self-start max-w-[75%] bg-white rounded-2xl px-3 py-2 text-xs text-gray-700 shadow-sm">
          Ok! Trarei todas as ferramentas necessárias.
        </div>
        <div className="self-end max-w-[75%] bg-blue-600 text-white rounded-2xl px-3 py-2 text-xs">
          Obrigado! Até sexta.
        </div>

        <div className="mt-2">
          <p className="text-[10px] text-gray-400">Respostas rápidas</p>
          <div className="flex gap-2 mt-2">
            {[
              "Ok, confirmado!",
              "Qual endereço?",
              "Pode adiantar?",
            ].map((text) => (
              <div key={text} className="px-3 py-1 rounded-full bg-gray-100 text-[10px] text-gray-600">
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 bg-white rounded-2xl p-3 shadow-sm">
          <p className="text-xs text-gray-500">Pedido #OIK-20260410-4521</p>
          <p className="text-xs text-gray-400">Instalação de tomadas • Sex, 10 Abr • 10:00</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-green-600">Status: Confirmado</span>
            <button className="text-xs text-blue-600">Ver detalhes</button>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <div className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2 border border-gray-100">
          <button className="text-gray-400">＋</button>
          <input className="flex-1 text-xs text-gray-500" placeholder="Digite sua mensagem..." />
          <button className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">➤</button>
        </div>
      </div>
    </div>
  );
}

function ShieldCheckIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="28" height="32" rx="4" fill="white" opacity="0.9" />
      <rect x="14" y="12" width="20" height="24" rx="2" fill="white" opacity="0.3" />
      <path d="M16 23l5 5 11-11" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="44" height="38" rx="5" fill="white" opacity="0.95" />
      <rect x="4" y="10" width="44" height="14" rx="5" fill="white" />
      <rect x="4" y="18" width="44" height="6" fill="white" />
      <text x="26" y="16" textAnchor="middle" fill="#E8643C" fontSize="8" fontWeight="700" fontFamily="sans-serif">MAR</text>
      <text x="26" y="40" textAnchor="middle" fill="#E8643C" fontSize="20" fontWeight="700" fontFamily="sans-serif">9</text>
      <rect x="14" y="4" width="4" height="12" rx="2" fill="white" />
      <rect x="34" y="4" width="4" height="12" rx="2" fill="white" />
    </svg>
  );
}

function DollarIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="26" y="36" textAnchor="middle" fill="white" fontSize="36" fontWeight="700" fontFamily="sans-serif">$</text>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.77h5.4a4.6 4.6 0 01-2 3.02v2.5h3.24C18.36 15.8 19.6 13.26 19.6 10.23z" fill="#4285F4" />
      <path d="M10 20c2.7 0 4.97-.9 6.62-2.43l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.12H1.08v2.6A10 10 0 0010 20z" fill="#34A853" />
      <path d="M4.41 11.9A5.94 5.94 0 014.1 10c0-.66.11-1.3.31-1.9V5.5H1.08A10 10 0 000 10c0 1.61.39 3.14 1.08 4.5l3.33-2.6z" fill="#FBBC05" />
      <path d="M10 3.98c1.47 0 2.78.5 3.82 1.5l2.85-2.85C14.96.99 12.7 0 10 0A10 10 0 001.08 5.5L4.41 8.1C5.2 5.73 7.4 3.98 10 3.98z" fill="#EA4335" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path d="M14.96 10.6c-.02-2.27 1.85-3.36 1.93-3.41-1.05-1.54-2.68-1.75-3.27-1.78-1.4-.14-2.73.83-3.44.83-.7 0-1.79-.8-2.95-.78-1.52.02-2.92.89-3.7 2.26-1.58 2.74-.41 6.82 1.13 9.05.75 1.09 1.65 2.31 2.82 2.27 1.14-.05 1.57-.74 2.94-.74 1.38 0 1.77.74 2.97.72 1.21-.02 1.99-1.1 2.74-2.2.86-1.26 1.22-2.48 1.24-2.54-.03-.01-2.38-.91-2.41-3.68z" fill="white" />
      <path d="M12.7 3.56C13.3 2.83 13.72 1.82 13.6.79c-.87.05-1.91.58-2.53 1.3-.56.64-1.04 1.67-.91 2.65.96.07 1.94-.48 2.54-1.18z" fill="white" />
    </svg>
  );
}

// ─── Nav icons ───────────────────────────────────────────────────────────────

function NavIcon({ type }: { type: "home" | "search" | "orders" | "chat" | "profile" }) {
  const icons = {
    home: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    search: "M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z",
    orders: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    chat: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    profile: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z",
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type].split(" M").map((d, i) => (
        <path key={i} d={i === 0 ? d : "M" + d} />
      ))}
    </svg>
  );
}

// ─── Dot Indicators ──────────────────────────────────────────────────────────

function Dots({ total, active, color = "white" }: { total: number; active: number; color?: string }) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="rounded-full transition-all duration-300" style={{ width: i === active ? 20 : 8, height: 8, backgroundColor: i === active ? color : `${color}55` }} />
      ))}
    </div>
  );
}

// ─── Screen 1: Splash ────────────────────────────────────────────────────────

function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 flex-col items-center justify-center" style={{ backgroundColor: "#4169E1" }}>
        <div className="bg-white rounded-full p-5 shadow-lg mb-4">
          <OikosLogoIcon size={52} color="#4169E1" />
        </div>
        <h1 className="text-white text-3xl font-bold tracking-wide">Oíkos</h1>
      </div>
      <div className="flex flex-col items-center justify-between py-10 px-6" style={{ backgroundColor: "#1A2F7A", minHeight: "38%" }}>
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-1">Oíkos</h2>
          <p className="text-blue-200 text-sm">Conexão de Serviços</p>
        </div>
        <Dots total={3} active={0} color="white" />
      </div>
    </div>
  );
}

// ─── Screen 2: Onboarding 1 ──────────────────────────────────────────────────

function Onboarding1({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="flex flex-col items-center justify-center flex-1 bg-gray-100 relative">
        <div className="rounded-full flex items-center justify-center shadow-lg" style={{ width: 140, height: 140, backgroundColor: "#4169E1" }}>
          <ShieldCheckIcon size={60} />
        </div>
        <div className="absolute bottom-8 px-5 py-2 rounded-full" style={{ backgroundColor: "#22C55E" }}>
          <span className="text-white text-sm font-semibold">Verificado e Certificado</span>
        </div>
        <div className="absolute bottom-2"><Dots total={2} active={0} color="#4169E1" /></div>
      </div>
      <div className="flex flex-col px-8 py-8 gap-4" style={{ minHeight: "50%" }}>
        <h2 className="text-2xl font-bold text-gray-900">Profissionais Verificados</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Todos passam por verificação de identidade, certificação técnica e avaliação por histórico de serviços realizados.</p>
        <div className="flex-1" />
        <button onClick={onNext} className="w-full py-4 rounded-xl font-semibold text-white text-base" style={{ backgroundColor: "#4169E1" }}>Próximo</button>
        <button onClick={onSkip} className="text-center text-gray-400 text-sm py-1">Pular</button>
      </div>
    </div>
  );
}

// ─── Screen 3: Onboarding 2 ──────────────────────────────────────────────────

function Onboarding2({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#FDF0E8" }}>
      <div className="flex flex-col items-center justify-center flex-1 relative" style={{ backgroundColor: "#FEF3EC" }}>
        <div className="rounded-full flex items-center justify-center shadow-lg" style={{ width: 140, height: 140, backgroundColor: "#E8643C" }}>
          <CalendarIcon />
        </div>
        <div className="absolute bottom-4"><Dots total={2} active={1} color="#E8643C" /></div>
      </div>
      <div className="flex flex-col px-8 py-8 gap-4" style={{ minHeight: "50%" }}>
        <h2 className="text-2xl font-bold text-gray-900">Agende com Segurança</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Escolha data e horário, confirme o serviço e receba notificações em tempo real. Sem surpresas, sem preocupações.</p>
        <div className="flex-1" />
        <button onClick={onNext} className="w-full py-4 rounded-xl font-semibold text-white text-base" style={{ backgroundColor: "#E8643C" }}>Próximo</button>
        <button onClick={onSkip} className="text-center text-gray-400 text-sm py-1">Pular</button>
      </div>
    </div>
  );
}

// ─── Screen 4: Onboarding 3 ──────────────────────────────────────────────────

function Onboarding3({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#F0FDF4" }}>
      <div className="flex flex-col items-center justify-center flex-1 relative" style={{ backgroundColor: "#ECFDF5" }}>
        <div className="rounded-full flex items-center justify-center shadow-lg" style={{ width: 140, height: 140, backgroundColor: "#10B981" }}>
          <DollarIcon size={52} />
        </div>
        <div className="absolute bottom-4"><Dots total={3} active={2} color="#10B981" /></div>
      </div>
      <div className="flex flex-col px-8 py-8 gap-4" style={{ minHeight: "50%" }}>
        <h2 className="text-2xl font-bold underline text-gray-900">Pagamento Protegido</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Pague somente após o serviço concluído. Garantia contra danos e furtos em todos os contratos fechados.</p>
        <div className="flex-1" />
        <button onClick={onStart} className="w-full py-4 rounded-xl font-semibold text-white text-base" style={{ backgroundColor: "#10B981" }}>Começar Agora</button>
      </div>
    </div>
  );
}

// ─── Screen 5: Login ─────────────────────────────────────────────────────────

const CREDENTIALS: Record<"cliente" | "profissional", { email: string; senha: string }> = {
  cliente: { email: "cliente@oikos.com", senha: "123456" },
  profissional: { email: "profissional@oikos.com", senha: "123456" },
};

function LoginScreen({ onLogin }: { onLogin: (role: "cliente" | "profissional") => void }) {
  const [role, setRole] = useState<keyof typeof CREDENTIALS>("cliente");
  const [error, setError] = useState(false);

  const credentials = CREDENTIALS[role as keyof typeof CREDENTIALS];
  const email = credentials.email;
  const senha = credentials.senha;

  function handleLogin() {
    onLogin(role);
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Blue header */}
      <div className="flex flex-col items-center justify-center py-10 px-6 gap-3" style={{ backgroundColor: "#4169E1", minHeight: "30%" }}>
        <div className="bg-white rounded-full p-3 shadow">
          <OikosLogoIcon size={36} color="#4169E1" />
        </div>
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-blue-200 text-sm mt-1">Faça login ou crie sua conta</p>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col flex-1 px-6 py-6 gap-4 overflow-y-auto">
        {/* Role selector primeiro para mudar as credenciais */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Você é:</span>
          <div className="flex gap-3">
            {(["cliente", "profissional"] as const).map((r) => (
              <button
                key={r}
                onClick={() => { setRole(r); setError(false); }}
                className="flex-1 py-3 rounded-xl text-sm font-semibold border transition"
                style={role === r ? { backgroundColor: "#4169E1", color: "white", borderColor: "#4169E1" } : { backgroundColor: "white", color: "#6B7280", borderColor: "#E5E7EB" }}
              >
                {r === "cliente" ? "Cliente" : "Profissional"}
              </button>
            ))}
          </div>
        </div>

        {/* E-mail pré-preenchido */}
        <div className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 bg-gray-50">
          {email}
        </div>

        {/* Senha pré-preenchida (mascarada) */}
        <div className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-400 bg-gray-50 tracking-widest">
          {"•".repeat(senha.length)}
        </div>

        <div className="text-right -mt-2">
          <button className="text-sm font-medium" style={{ color: "#4169E1" }}>Esqueceu a senha?</button>
        </div>

        {error && (
          <p className="text-red-500 text-xs text-center -mt-2">Credenciais inválidas. Use as credenciais padrão.</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition active:opacity-80"
          style={{ backgroundColor: "#4169E1" }}
        >
          Entrar
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">ou continue com</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 bg-white">
            <GoogleIcon /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white" style={{ backgroundColor: "#111827" }}>
            <AppleIcon /> Apple
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          Não tem conta?{" "}
          <button className="font-semibold" style={{ color: "#4169E1" }}>Cadastre-se grátis</button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 6: Home Cliente ───────────────────────────────────────────────────

const categories = [
  { label: "Elétrica", color: "#F59E0B", icon: "⚡" },
  { label: "Limpeza", color: "#22C55E", icon: "🧼" },
  { label: "Jardim", color: "#16A34A", icon: "🌿" },
  { label: "Hidraul.", color: "#3B82F6", icon: "💧" },
  { label: "Reformas", color: "#EF4444", icon: "🧱" },
  { label: "Pintura", color: "#A855F7", icon: "🎨" },
];

const professionals = [
  {
    name: "Carlos Mendes",
    role: "Eletricista",
    category: "Elétrica",
    rating: 4.9,
    reviews: 127,
    initial: "C",
    color: "#4169E1",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
    verified: true,
    distance: "2,4 km",
    response: "Resposta em 15 min",
    priceBadge: "Melhor preço",
    qualityBadge: "Qualidade premium",
    services: [
      { title: "Instalação de tomadas", price: "R$ 80-120" },
      { title: "Troca de disjuntor", price: "R$ 60-100" },
      { title: "Laudo elétrico", price: "R$ 150-200" },
    ],
  },
  {
    name: "Ana Ribeiro",
    role: "Diarista",
    category: "Limpeza",
    rating: 4.8,
    reviews: 92,
    initial: "A",
    color: "#F97316",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    verified: true,
    distance: "3,1 km",
    response: "Resposta em 20 min",
    priceBadge: "Bom custo",
    qualityBadge: "Avaliação alta",
    services: [
      { title: "Limpeza completa", price: "R$ 120-180" },
      { title: "Organização", price: "R$ 80-120" },
      { title: "Passar roupa", price: "R$ 60-90" },
    ],
  },
  {
    name: "Joao Pires",
    role: "Jardineiro",
    category: "Jardim",
    rating: 4.7,
    reviews: 68,
    initial: "J",
    color: "#16A34A",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    verified: true,
    distance: "1,9 km",
    response: "Resposta em 10 min",
    priceBadge: "Entrega rapida",
    qualityBadge: "Muito elogiado",
    services: [
      { title: "Poda de jardim", price: "R$ 90-140" },
      { title: "Paisagismo", price: "R$ 200-350" },
      { title: "Manutencao mensal", price: "R$ 150-220" },
    ],
  },
  {
    name: "Marina Lopes",
    role: "Encanadora",
    category: "Hidraul.",
    rating: 4.8,
    reviews: 105,
    initial: "M",
    color: "#3B82F6",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop",
    verified: true,
    distance: "4,0 km",
    response: "Resposta em 25 min",
    priceBadge: "Melhor custo",
    qualityBadge: "Atendimento rapido",
    services: [
      { title: "Desentupimento", price: "R$ 120-200" },
      { title: "Troca de torneira", price: "R$ 70-110" },
      { title: "Reparo de vazamento", price: "R$ 150-240" },
    ],
  },
  {
    name: "Lucas Costa",
    role: "Reformas",
    category: "Reformas",
    rating: 4.6,
    reviews: 54,
    initial: "L",
    color: "#EF4444",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    verified: true,
    distance: "5,3 km",
    response: "Resposta em 30 min",
    priceBadge: "Equipe completa",
    qualityBadge: "Pontualidade",
    services: [
      { title: "Pequenas reformas", price: "R$ 300-500" },
      { title: "Drywall", price: "R$ 250-400" },
      { title: "Reparo de paredes", price: "R$ 150-280" },
    ],
  },
  {
    name: "Patricia Dias",
    role: "Pintora",
    category: "Pintura",
    rating: 4.9,
    reviews: 119,
    initial: "P",
    color: "#A855F7",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    verified: true,
    distance: "2,7 km",
    response: "Resposta em 12 min",
    priceBadge: "Acabamento fino",
    qualityBadge: "Nota maxima",
    services: [
      { title: "Pintura interna", price: "R$ 220-360" },
      { title: "Pintura externa", price: "R$ 320-480" },
      { title: "Textura decorativa", price: "R$ 180-260" },
    ],
  },
];

function HomeCliente({
  onLogout,
  onOpenCategory,
  onOpenProfessional,
}: {
  onLogout: () => void;
  onOpenCategory: (category: string) => void;
  onOpenProfessional: (name: string) => void;
}) {
  const [activeTab, setActiveTab] = useState("home");
  const highlightProfessionals = categories
    .map((cat) => professionals.find((pro) => pro.category === cat.label))
    .filter((pro): pro is (typeof professionals)[number] => Boolean(pro));

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="px-5 pt-10 pb-6" style={{ backgroundColor: "#4169E1" }}>
        <div className="flex justify-between items-start mb-1">
          <p className="text-blue-200 text-sm">Boa tarde, Robson!</p>
          <button onClick={onLogout} className="text-blue-200 text-xs border border-blue-300 rounded-lg px-2 py-1">Sair</button>
        </div>
        <h1 className="text-white text-xl font-bold mb-4">Que serviço precisa hoje?</h1>
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span className="text-gray-400 text-sm">Buscar serviço ou profissional...</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-5">
        {/* Categorias */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-gray-900 text-base">Categorias</span>
            <button className="text-xs font-medium" style={{ color: "#4169E1" }}>Ver todas</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => onOpenCategory(cat.label)}
                className="flex flex-col items-center gap-2 bg-white rounded-xl py-3 shadow-sm"
              >
                <div
                  className="rounded-full w-10 h-10 flex items-center justify-center text-lg"
                  style={{ backgroundColor: cat.color, color: "white" }}
                >
                  {cat.icon}
                </div>
                <span className="text-xs text-gray-600 font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Destaques */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-gray-900 text-base">Destaques</span>
            <button className="text-xs font-medium" style={{ color: "#4169E1" }}>Ver todos</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {highlightProfessionals.map((pro) => (
              <div key={pro.name} className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center gap-2">
                <img
                  src={pro.photo}
                  alt={pro.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-sm">{pro.name}</p>
                  <p className="text-gray-400 text-xs">{pro.role}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-xs text-gray-600 font-medium">{pro.rating}</span>
                </div>
                <button
                  onClick={() => onOpenProfessional(pro.name)}
                  className="w-full py-2 rounded-lg text-white text-xs font-semibold"
                  style={{ backgroundColor: "#4169E1" }}
                >
                  Agendar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex border-t border-gray-100 bg-white px-2 py-2">
        {([
          { id: "home", label: "Início", icon: "home" as const },
          { id: "search", label: "Buscar", icon: "search" as const },
          { id: "orders", label: "Pedidos", icon: "orders" as const },
          { id: "chat", label: "Chat", icon: "chat" as const },
          { id: "profile", label: "Perfil", icon: "profile" as const },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 flex flex-col items-center gap-1 py-1"
            style={{ color: activeTab === tab.id ? "#4169E1" : "#9CA3AF" }}
          >
            <NavIcon type={tab.icon} />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── App Shell ───────────────────────────────────────────────────────────────

type Screen =
  | "splash"
  | "onboarding1"
  | "onboarding2"
  | "onboarding3"
  | "login"
  | "home-cliente"
  | "profissionais"
  | "perfil"
  | "agendamento"
  | "pagamento"
  | "confirmado"
  | "chat"
  | "pro-dashboard"
  | "pro-requests"
  | "pro-profile"
  | "pro-chat"
  | "pro-earnings"
  | "pro-completed";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [userRole, setUserRole] = useState<"cliente" | "profissional" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Elétrica");
  const [selectedProfessional, setSelectedProfessional] = useState(professionals[0].name);
  const [selectedService, setSelectedService] = useState(professionals[0].services[0].title);

  const screenLabels: Record<Screen, string> = {
    splash: "01 – Splash",
    onboarding1: "02 – Onboarding 1",
    onboarding2: "03 – Onboarding 2",
    onboarding3: "04 – Onboarding 3",
    login: "05 – Login",
    "home-cliente": "06 – Home",
    profissionais: "07 – Profissionais",
    perfil: "08 – Perfil",
    agendamento: "09 – Agendamento",
    pagamento: "10 – Pagamento",
    confirmado: "11 – Confirmado",
    chat: "12 – Chat",
    "pro-dashboard": "P01 – Dashboard",
    "pro-requests": "P02 – Solicitações",
    "pro-profile": "P03 – Perfil",
    "pro-chat": "P04 – Chat",
    "pro-earnings": "P05 – Ganhos",
    "pro-completed": "P06 – Concluídos",
  };

  const professional = professionals.find((pro) => pro.name === selectedProfessional) ?? professionals[0];

  function handleLogin(role: "cliente" | "profissional") {
    setUserRole(role);
    if (role === "cliente") {
      setScreen("home-cliente");
    } else {
      setScreen("pro-dashboard");
    }
  }

  const navigationScreens: Screen[] = userRole === "profissional"
    ? ["pro-dashboard", "pro-requests", "pro-earnings", "pro-chat", "pro-profile"]
    : userRole === "cliente"
      ? ["home-cliente", "profissionais", "perfil", "agendamento", "pagamento", "confirmado", "chat"]
      : ["splash", "onboarding1", "onboarding2", "onboarding3", "login"];

  const screenContent = (
    <>
      {screen === "splash" && <SplashScreen onDone={() => setScreen("onboarding1")} />}
      {screen === "onboarding1" && <Onboarding1 onNext={() => setScreen("onboarding2")} onSkip={() => setScreen("login")} />}
      {screen === "onboarding2" && <Onboarding2 onNext={() => setScreen("onboarding3")} onSkip={() => setScreen("login")} />}
      {screen === "onboarding3" && <Onboarding3 onStart={() => setScreen("login")} />}
      {screen === "login" && <LoginScreen onLogin={handleLogin} />}
      {screen === "pro-dashboard" && (
        <ProfessionalDashboardScreen
          onOpenRequests={() => setScreen("pro-requests")}
          onOpenProfile={() => setScreen("pro-profile")}
          onOpenChat={() => setScreen("pro-chat")}
          onOpenEarnings={() => setScreen("pro-earnings")}
          onLogout={() => {
            setUserRole(null);
            setScreen("login");
          }}
        />
      )}
      {screen === "pro-requests" && (
        <ProfessionalRequestsScreen
          onBack={() => setScreen("pro-dashboard")}
          onOpenChat={() => setScreen("pro-chat")}
          onOpenProfile={() => setScreen("pro-profile")}
          onOpenEarnings={() => setScreen("pro-earnings")}
          onOpenCompleted={() => setScreen("pro-completed")}
        />
      )}
      {screen === "pro-profile" && (
        <ProfessionalProfileOwnerScreen
          onOpenDashboard={() => setScreen("pro-dashboard")}
          onOpenRequests={() => setScreen("pro-requests")}
          onOpenChat={() => setScreen("pro-chat")}
          onOpenEarnings={() => setScreen("pro-earnings")}
        />
      )}
      {screen === "pro-chat" && (
        <ProfessionalChatScreen
          onBack={() => setScreen("pro-dashboard")}
          onOpenDashboard={() => setScreen("pro-dashboard")}
          onOpenRequests={() => setScreen("pro-requests")}
          onOpenEarnings={() => setScreen("pro-earnings")}
          onOpenProfile={() => setScreen("pro-profile")}
        />
      )}
      {screen === "pro-earnings" && (
        <ProfessionalEarningsScreen
          onBack={() => setScreen("pro-dashboard")}
          onOpenChat={() => setScreen("pro-chat")}
          onOpenProfile={() => setScreen("pro-profile")}
          onOpenRequests={() => setScreen("pro-requests")}
        />
      )}
      {screen === "pro-completed" && (
        <ProfessionalCompletedScreen
          onBack={() => setScreen("pro-requests")}
          onOpenChat={() => setScreen("pro-chat")}
          onOpenProfile={() => setScreen("pro-profile")}
          onOpenEarnings={() => setScreen("pro-earnings")}
        />
      )}
      {screen === "home-cliente" && (
        <HomeCliente
          onLogout={() => {
            setUserRole(null);
            setScreen("login");
          }}
          onOpenCategory={(category) => {
            setSelectedCategory(category);
            setScreen("profissionais");
          }}
          onOpenProfessional={(name) => {
            setSelectedProfessional(name);
            setSelectedService(professionals.find((pro) => pro.name === name)?.services[0].title ?? selectedService);
            setScreen("perfil");
          }}
        />
      )}
      {screen === "profissionais" && (
        <ProfessionalsListScreen
          category={selectedCategory}
          onBack={() => setScreen("home-cliente")}
          onSelectProfessional={(name) => {
            setSelectedProfessional(name);
            setSelectedService(professionals.find((pro) => pro.name === name)?.services[0].title ?? selectedService);
            setScreen("perfil");
          }}
        />
      )}
      {screen === "perfil" && (
        <ProfessionalProfileScreen
          professional={professional}
          onBack={() => setScreen("profissionais")}
          onSchedule={(service) => {
            setSelectedService(service);
            setScreen("agendamento");
          }}
        />
      )}
      {screen === "agendamento" && (
        <ScheduleScreen
          professional={professional}
          selectedService={selectedService}
          onBack={() => setScreen("perfil")}
          onConfirm={() => setScreen("pagamento")}
        />
      )}
      {screen === "pagamento" && (
        <PaymentScreen
          professional={professional}
          selectedService={selectedService}
          onBack={() => setScreen("agendamento")}
          onPay={() => setScreen("confirmado")}
        />
      )}
      {screen === "confirmado" && (
        <OrderConfirmedScreen
          onTrack={() => setScreen("chat")}
          onBack={() => setScreen("pagamento")}
        />
      )}
      {screen === "chat" && <ChatScreen onBack={() => setScreen("confirmado")} />}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="hidden md:grid grid-cols-[260px_1fr] gap-6">
          <aside className="bg-white rounded-3xl shadow-lg p-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 rounded-2xl p-3">
                <OikosLogoIcon size={32} color="#4169E1" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Oíkos</p>
                <h2 className="text-lg font-semibold text-gray-900">Versão Desktop</h2>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-400">Tela ativa</p>
              <p className="text-sm font-semibold text-gray-800">{screenLabels[screen]}</p>
            </div>
            <div className="flex flex-col gap-2">
              {navigationScreens.map((s) => (
                <button
                  key={s}
                  onClick={() => setScreen(s)}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition"
                  style={screen === s ? { backgroundColor: "#4169E1", color: "white" } : { backgroundColor: "#f3f4f6", color: "#374151" }}
                >
                  {screenLabels[s]}
                </button>
              ))}
            </div>
            <div className="mt-auto text-xs text-gray-400">
              Layout otimizado para desktop e mobile.
            </div>
          </aside>

          <main className="bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ minHeight: 820 }}>
            {screenContent}
          </main>
        </div>

        <div className="md:hidden">
          <div className="w-full max-w-sm mx-auto">
            <p className="text-xs text-gray-400 mb-2 font-mono">{screenLabels[screen]}</p>
            <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: 40, height: 780, backgroundColor: "#fff" }}>
              {screenContent}
            </div>
            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              {navigationScreens.map((s) => (
                <button
                  key={s}
                  onClick={() => setScreen(s)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition"
                  style={screen === s ? { backgroundColor: "#4169E1", color: "white" } : { backgroundColor: "#e5e7eb", color: "#374151" }}
                >
                  {screenLabels[s].split("–")[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
