import {Component} from 'react'
import { ErrorInfo } from 'react-dom/client'


type State = {
    hasError: boolean,
    errorInfo: ErrorInfo | null,
    error: Error | null
}

type Props = {
    children : JSX.Element
}

class ErrorBoundary extends Component<Props , State> {
    state:State = {
        hasError: false,
        errorInfo: null,
        error: null
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {hasError : true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({error, errorInfo})
    }

    render() {
        // render fallback UI in case of error
        if (this.state.hasError) {
            return (
                <div>
                    <p>Something Went Wrong!</p>
                    <p> {this.state.error && this.state.error.toString() } </p>
                </div>
            )
        }

        return this.props.children
    }
}
export default ErrorBoundary