"use client";

import { useState, useEffect } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

function OikosLogoIcon({ size = 40, color = "#4169E1" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6L6 17H10V34H18V24H22V34H30V17H34L20 6Z"
        fill={color}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="28" height="32" rx="4" fill="white" opacity="0.9" />
      <path d="M17 24l5 5 9-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0" />
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.77h5.4a4.6 4.6 0 01-2 3.02v2.5h3.24C18.36 15.8 19.6 13.26 19.6 10.23z" fill="#4285F4" />
      <path d="M10 20c2.7 0 4.97-.9 6.62-2.43l-3.24-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.75-5.59-4.12H1.08v2.6A10 10 0 0010 20z" fill="#34A853" />
      <path d="M4.41 11.9A5.94 5.94 0 014.1 10c0-.66.11-1.3.31-1.9V5.5H1.08A10 10 0 000 10c0 1.61.39 3.14 1.08 4.5l3.33-2.6z" fill="#FBBC05" />
      <path d="M10 3.98c1.47 0 2.78.5 3.82 1.5l2.85-2.85C14.96.99 12.7 0 10 0A10 10 0 001.08 5.5L4.41 8.1C5.2 5.73 7.4 3.98 10 3.98z" fill="#EA4335" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.96 10.6c-.02-2.27 1.85-3.36 1.93-3.41-1.05-1.54-2.68-1.75-3.27-1.78-1.4-.14-2.73.83-3.44.83-.7 0-1.79-.8-2.95-.78-1.52.02-2.92.89-3.7 2.26-1.58 2.74-.41 6.82 1.13 9.05.75 1.09 1.65 2.31 2.82 2.27 1.14-.05 1.57-.74 2.94-.74 1.38 0 1.77.74 2.97.72 1.21-.02 1.99-1.1 2.74-2.2.86-1.26 1.22-2.48 1.24-2.54-.03-.01-2.38-.91-2.41-3.68z" fill="white" />
      <path d="M12.7 3.56C13.3 2.83 13.72 1.82 13.6.79c-.87.05-1.91.58-2.53 1.3-.56.64-1.04 1.67-.91 2.65.96.07 1.94-.48 2.54-1.18z" fill="white" />
    </svg>
  );
}

// ─── Dot Indicators ──────────────────────────────────────────────────────────

function Dots({ total, active, color = "white" }: { total: number; active: number; color?: string }) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === active ? 20 : 8,
            height: 8,
            backgroundColor: i === active ? color : `${color}55`,
          }}
        />
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
      {/* Top blue section */}
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{ backgroundColor: "#4169E1" }}
      >
        <div className="bg-white rounded-full p-5 shadow-lg mb-4">
          <OikosLogoIcon size={52} color="#4169E1" />
        </div>
        <h1 className="text-white text-3xl font-bold tracking-wide">Oíkos</h1>
      </div>

      {/* Bottom navy section */}
      <div
        className="flex flex-col items-center justify-between py-10 px-6"
        style={{ backgroundColor: "#1A2F7A", minHeight: "38%" }}
      >
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
      {/* Illustration area */}
      <div className="flex flex-col items-center justify-center flex-1 bg-gray-100 relative">
        <div
          className="rounded-full flex items-center justify-center shadow-lg"
          style={{ width: 140, height: 140, backgroundColor: "#4169E1" }}
        >
          <ShieldCheckIcon size={60} />
        </div>
        {/* Green badge */}
        <div
          className="absolute bottom-8 px-5 py-2 rounded-full"
          style={{ backgroundColor: "#22C55E" }}
        >
          <span className="text-white text-sm font-semibold">Verificado e Certificado</span>
        </div>
        {/* Dots */}
        <div className="absolute bottom-2">
          <Dots total={2} active={0} color="#4169E1" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col px-8 py-8 gap-4" style={{ minHeight: "50%" }}>
        <h2 className="text-2xl font-bold text-gray-900">Profissionais Verificados</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Todos passam por verificação de identidade, certificação técnica e avaliação por histórico
          de serviços realizados.
        </p>
        <div className="flex-1" />
        <button
          onClick={onNext}
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition active:opacity-80"
          style={{ backgroundColor: "#4169E1" }}
        >
          Próximo
        </button>
        <button onClick={onSkip} className="text-center text-gray-400 text-sm py-1">
          Pular
        </button>
      </div>
    </div>
  );
}

// ─── Screen 3: Onboarding 2 ──────────────────────────────────────────────────

function Onboarding2({ onNext, onSkip }: { onNext: () => void; onSkip: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#FDF0E8" }}>
      {/* Illustration area */}
      <div
        className="flex flex-col items-center justify-center flex-1 relative"
        style={{ backgroundColor: "#FEF3EC" }}
      >
        <div
          className="rounded-full flex items-center justify-center shadow-lg"
          style={{ width: 140, height: 140, backgroundColor: "#E8643C" }}
        >
          <CalendarIcon />
        </div>
        {/* Dots */}
        <div className="absolute bottom-4">
          <Dots total={2} active={1} color="#E8643C" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col px-8 py-8 gap-4" style={{ minHeight: "50%" }}>
        <h2 className="text-2xl font-bold text-gray-900">Agende com Segurança</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Escolha data e horário, confirme o serviço e receba notificações em tempo real.
          Sem surpresas, sem preocupações.
        </p>
        <div className="flex-1" />
        <button
          onClick={onNext}
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition active:opacity-80"
          style={{ backgroundColor: "#E8643C" }}
        >
          Próximo
        </button>
        <button onClick={onSkip} className="text-center text-gray-400 text-sm py-1">
          Pular
        </button>
      </div>
    </div>
  );
}

// ─── Screen 4: Onboarding 3 ──────────────────────────────────────────────────

function Onboarding3({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#F0FDF4" }}>
      {/* Illustration area */}
      <div
        className="flex flex-col items-center justify-center flex-1 relative"
        style={{ backgroundColor: "#ECFDF5" }}
      >
        <div
          className="rounded-full flex items-center justify-center shadow-lg"
          style={{ width: 140, height: 140, backgroundColor: "#10B981" }}
        >
          <DollarIcon size={52} />
        </div>
        {/* Dots */}
        <div className="absolute bottom-4">
          <Dots total={3} active={2} color="#10B981" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col px-8 py-8 gap-4" style={{ minHeight: "50%" }}>
        <h2 className="text-2xl font-bold underline text-gray-900">Pagamento Protegido</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Pague somente após o serviço concluído. Garantia contra danos e furtos em todos
          os contratos fechados.
        </p>
        <div className="flex-1" />
        <button
          onClick={onStart}
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition active:opacity-80"
          style={{ backgroundColor: "#10B981" }}
        >
          Começar Agora
        </button>
      </div>
    </div>
  );
}

// ─── Screen 5: Login ─────────────────────────────────────────────────────────

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"cliente" | "profissional">("cliente");

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Blue header */}
      <div
        className="flex flex-col items-center justify-center py-10 px-6 gap-3"
        style={{ backgroundColor: "#4169E1", minHeight: "30%" }}
      >
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
        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 outline-none focus:border-blue-400 transition placeholder-gray-400"
          />
        </div>

        {/* Forgot password */}
        <div className="text-right -mt-2">
          <button className="text-sm font-medium" style={{ color: "#4169E1" }}>
            Esqueceu a senha?
          </button>
        </div>

        {/* Login button */}
        <button
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition active:opacity-80"
          style={{ backgroundColor: "#4169E1" }}
        >
          Entrar
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">ou continue com</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 bg-white transition active:bg-gray-50">
            <GoogleIcon />
            Google
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition active:opacity-80"
            style={{ backgroundColor: "#111827" }}
          >
            <AppleIcon />
            Apple
          </button>
        </div>

        {/* Register link */}
        <div className="text-center text-sm text-gray-500">
          Não tem conta?{" "}
          <button className="font-semibold" style={{ color: "#4169E1" }}>
            Cadastre-se grátis
          </button>
        </div>

        {/* Role selector */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Você é:</span>
          <div className="flex gap-3">
            <button
              onClick={() => setRole("cliente")}
              className="flex-1 py-3 rounded-xl text-sm font-semibold border transition"
              style={
                role === "cliente"
                  ? { backgroundColor: "#4169E1", color: "white", borderColor: "#4169E1" }
                  : { backgroundColor: "white", color: "#6B7280", borderColor: "#E5E7EB" }
              }
            >
              Cliente
            </button>
            <button
              onClick={() => setRole("profissional")}
              className="flex-1 py-3 rounded-xl text-sm font-semibold border transition"
              style={
                role === "profissional"
                  ? { backgroundColor: "#4169E1", color: "white", borderColor: "#4169E1" }
                  : { backgroundColor: "white", color: "#6B7280", borderColor: "#E5E7EB" }
              }
            >
              Profissional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App Shell ───────────────────────────────────────────────────────────────

type Screen = "splash" | "onboarding1" | "onboarding2" | "onboarding3" | "login";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("splash");

  const screenLabels: Record<Screen, string> = {
    splash: "01 – Splash",
    onboarding1: "02 – Onboarding 1",
    onboarding2: "03 – Onboarding 2",
    onboarding3: "04 – Onboarding 3",
    login: "05 – Login",
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Screen label (for design reference) */}
        <p className="text-xs text-gray-400 mb-2 font-mono">{screenLabels[screen]}</p>

        {/* Phone frame */}
        <div
          className="relative overflow-hidden shadow-2xl"
          style={{
            borderRadius: 40,
            height: 780,
            backgroundColor: "#fff",
          }}
        >
          {screen === "splash" && (
            <SplashScreen onDone={() => setScreen("onboarding1")} />
          )}
          {screen === "onboarding1" && (
            <Onboarding1
              onNext={() => setScreen("onboarding2")}
              onSkip={() => setScreen("login")}
            />
          )}
          {screen === "onboarding2" && (
            <Onboarding2
              onNext={() => setScreen("onboarding3")}
              onSkip={() => setScreen("login")}
            />
          )}
          {screen === "onboarding3" && (
            <Onboarding3 onStart={() => setScreen("login")} />
          )}
          {screen === "login" && <LoginScreen />}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {(["splash", "onboarding1", "onboarding2", "onboarding3", "login"] as Screen[]).map(
            (s) => (
              <button
                key={s}
                onClick={() => setScreen(s)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition"
                style={
                  screen === s
                    ? { backgroundColor: "#4169E1", color: "white" }
                    : { backgroundColor: "#e5e7eb", color: "#374151" }
                }
              >
                {screenLabels[s].split("–")[0].trim()}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
