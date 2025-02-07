import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import FinanceChart from "./FinanceChart";
import { useTheme } from "../../hooks/useTheme";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useTheme();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/finance/dashboard")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Carregando...</p>;

  return (
    <div className={`${styles.dashboard} ${darkMode ? styles.dark : styles.light}`}>
      <button onClick={() => setDarkMode(!darkMode)} className={styles.themeToggle}>
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
      </button>
      <h1>Painel Financeiro - Finanext</h1>
      <p>Saldo: R$ {data.saldo}</p>
      <p>Despesas: R$ {data.despesas}</p>
      <p>Investimentos: R$ {data.investimentos}</p>
      <FinanceChart />
    </div>
  );
}