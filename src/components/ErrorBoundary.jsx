import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="glass-panel text-center text-red-400 p-8" style={{ margin: '2rem' }}>
                    <h2 className="text-xl mb-4">Application Crashed</h2>
                    <pre className="text-sm bg-black/30 p-4 rounded text-left overflow-auto whitespace-pre-wrap">
                        {this.state.error && this.state.error.toString()}
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </pre>
                    <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-white/10 rounded hover:bg-white/20">Reload Application</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
