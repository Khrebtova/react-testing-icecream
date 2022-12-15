import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
    // render Options component
    render(<Options optionType="scoops" />);
    
    // find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);
    
    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
    // render Options component
    render(<Options optionType="toppings" />);
    
    // find images, expect 3 based on the data
    const toppingImages = await screen.findAllByRole("img", { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);
    
    // confirm alt text of images
    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
});