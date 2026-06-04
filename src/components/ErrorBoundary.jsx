import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary-light dark:bg-primary-dark p-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong.</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">The application crashed. Please check the console for more details.</p>
            <details className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto max-h-96 text-sm text-gray-800 dark:text-gray-200">
              <summary className="font-bold cursor-pointer mb-2">Error Details</summary>
              <pre>{this.state.error && this.state.error.toString()}</pre>
              <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
            </details>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
