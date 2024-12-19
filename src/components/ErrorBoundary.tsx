import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error en el componente:', error);
    console.error('Información del error:', errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white">
          <div className="max-w-md w-full space-y-8 text-center">
            <h1 className="text-4xl font-bold text-red-500">¡Ups! Algo salió mal</h1>
            <p className="text-gray-400">
              Lo sentimos, ha ocurrido un error inesperado.
            </p>
            {this.state.error && (
              <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm overflow-auto">
                {this.state.error.message}
              </pre>
            )}
            <Button
              onClick={this.handleReload}
              className="mt-8 w-full bg-green-600 hover:bg-green-700"
            >
              Recargar la página
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 