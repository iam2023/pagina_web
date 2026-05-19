import React, { Component } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#001a2e] flex flex-col items-center justify-center text-center p-8 text-white select-none">
          <div className="max-w-md w-full bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 text-red-500 flex items-center justify-center rounded-full mb-6">
              <AlertTriangle size={32} className="animate-pulse" />
            </div>
            
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-4 font-heading text-white">
              Algo Salió Mal
            </h1>
            
            <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-8 leading-relaxed">
              Ocurrió un error inesperado al procesar la interfaz. Por favor, intenta recargar la página.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white py-4 px-8 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-primary-dark transition-all flex items-center gap-3 shadow-lg hover:scale-105"
            >
              <RefreshCw size={14} /> RECARGAR PÁGINA
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
