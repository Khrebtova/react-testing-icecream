import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

test('update scoop subtotal when scoops change', async () => {
    render(<Options optionType="scoops" />);

    // make sure total starts out $0.00
    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    // update vanilla scoops to 1 and check the subtotal 
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');
    
    // update chocolate scoops to 2 and check the subtotal
    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopsSubtotal).toHaveTextContent('6.00');

});

test ('do not update total if scoops input is invalid', async () => {
    render(<Options optionType="scoops" />);

    // make sure total starts out $0.00
    const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    // update vanilla scoops to -1 and check the subtotal
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '-1');
    expect(scoopsSubtotal).toHaveTextContent('0.00');

    // update chocolate scoops to 10 and check the subtotal
    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '10');
    expect(scoopsSubtotal).toHaveTextContent('20.00');
});

test('update toppings subtotal when toppings change', async () => {
    render(<Options optionType="toppings" />);

    // make sure total starts out $0.00
    const toppingsSubtotal = screen.getByText('Toppings total: $', { exact: false });
    expect(toppingsSubtotal).toHaveTextContent('0.00');

    // update cherries topping to mark as checked and check the subtotal
    const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' });
    userEvent.click(cherriesCheckbox);
    expect(toppingsSubtotal).toHaveTextContent('1.50');

    // update hot fudge topping to checked and check the subtotal
    const hotFudgeCheckbox = await screen.findByRole('checkbox', { name: 'Hot fudge' });
    userEvent.click(hotFudgeCheckbox);
    expect(toppingsSubtotal).toHaveTextContent('3.00');

    // uncheck cherries topping and check the subtotal
    userEvent.click(cherriesCheckbox);
    expect(toppingsSubtotal).toHaveTextContent('1.50');
})

describe('grand total', () => {
    test('grand total updates properly if scoop is added first', async () => {
        render(<OrderEntry />);

        // check that the grand total starts out at $0.00
        const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i });
        expect(grandTotal).toHaveTextContent('0.00');

        // update vanilla scoops to 1 and check the grand total
        const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput, '1');
        expect(grandTotal).toHaveTextContent('2.00');

        // add cherries topping and check grand total
        const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' });
        userEvent.click(cherriesCheckbox);
        expect(grandTotal).toHaveTextContent('3.50');
    });

    test('grand total updates properly if topping is added first', async () => {
        render(<OrderEntry />);

        // check that the grand total starts out at $0.00
        const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i });
        expect(grandTotal).toHaveTextContent('0.00');

        // add cherries topping and check grand total
        const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' });
        userEvent.click(cherriesCheckbox);
        expect(grandTotal).toHaveTextContent('1.50');

        // update vanilla scoops to 1 and check the grand total
        const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput, '1');
        expect(grandTotal).toHaveTextContent('3.50');
    });
});

