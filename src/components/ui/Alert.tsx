import { FC } from 'react';
import { cn } from '@/lib/utils.ts';

interface AlertsProps {
    title: string;
    variant: 'error' | 'success' | 'info';
}

export const Alerts: FC<AlertsProps> = ({ title, variant = 'info' }) => {
    const alertVariant = {
        error: {
            title: 'Error',
            container: 'border-red-500 bg-red-50',
            text: 'text-red-500',
        },
        success: {
            title: 'Exito',
            container: 'border-green-500 bg-green-50',
            text: 'text-green-500',
        },
        info: {
            title: 'Información',
            container: 'border-gray-500 bg-gray-50',
            text: 'text-gray-500',
        },
    };
    return (
        <div
            className={cn(
                'min-h-16 h-auto border py-2 px-4  rounded-2xl flex flex-col justify-center',
                alertVariant[variant].container
            )}>
            <strong className={cn('uppercase', alertVariant[variant].text)}>
                {alertVariant[variant].title}
            </strong>
            <p className={cn(alertVariant[variant].text)}>{title}</p>
        </div>
    );
};
