import {format} from 'date-fns';
import localeEs from 'date-fns/locale/es';

export function formatNumber(number: number): string {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  return formattedNumber.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function formatDate(date: string): string {
  const formattedDate = format(new Date(date), "dd 'de' MMMM, yyyy", {
    locale: localeEs,
  });
  return formattedDate;
}

export function getMonth(date: Date): string {
  const monthName = new Intl.DateTimeFormat('es-ES', {
    month: 'long',
  }).format(date);

  return monthName;
}
