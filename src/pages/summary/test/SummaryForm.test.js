import { render, screen } from '@testing-library/react';

import SummaryForm from '../SummaryForm';

test('initial conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
    
    const confirmButton = screen.getByRole('button', {
        name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
});

test('checkbox enables button on first click and disables on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button', {
        name: /confirm order/i,
    });
    checkbox.click();
    expect(confirmButton).toBeEnabled();
    checkbox.click();
    expect(confirmButton).toBeDisabled();
});