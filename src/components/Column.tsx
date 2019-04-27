import React, { ReactNode } from 'react';

interface IRowProps {
    children: ReactNode;
}

export function Column({ children }: IRowProps) {
    return (
        <div className="column">
            {children}
        </div>
    );
}