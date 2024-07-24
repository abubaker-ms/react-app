import { fireEvent, render,screen } from '@testing-library/react';
import RES_MOCK from '../mocks/resturantDataMock.json';
import Body from '../Body';
import "@testing-library/jest-dom";
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Search from '../Search';

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RES_MOCK)
        },
    });
});
it("Should have search button",async()=>{
    await act(async()=> render(
        <BrowserRouter>
             <Body />
        </BrowserRouter>
))

const searchbutton = screen.getByRole("button",{name:"Search"})
expect(searchbutton).toBeInTheDocument();

    
const searchInput=screen.getByTestId("searchInput");
fireEvent.change(searchInput,{target:{value:"Ambika"}});

fireEvent.click(searchbutton)

// on fir event screen should load 1 card of ambika
const cards=screen.getAllByTestId("resCard");

expect(cards.length).toBe(1);
})

it("Should have top resturant filter",async()=>{
    await act(async()=> render(
        <BrowserRouter>
             <Body />
        </BrowserRouter>
))


const topRatedresButton=screen.getByTestId("topRatedres");

expect(topRatedresButton).toBeInTheDocument();

fireEvent.click(topRatedresButton);   
const topRedcards=screen.getAllByTestId("resCard");
expect(topRedcards.length).toBe(2);

})
