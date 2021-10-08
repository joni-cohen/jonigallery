import React from 'react';
import './ErrorBoundary.css';
import {ErrorProps} from "./ErrorInterface";

export const ErrorBoundary: React.FC<ErrorProps> = ({text}: ErrorProps) => {
        return <div>
            <p className='error'>
                {text}
            </p>
        </div>;
}

export default ErrorBoundary;