import React, { ReactNode } from 'react';

interface IRowProps {
    children: ReactNode;
}

export function Row({ children }: IRowProps) {
    return (
        <div className="row">
            {children}
        </div>
    );
}