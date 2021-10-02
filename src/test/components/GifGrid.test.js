import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");
//mock falsify something

describe("debe de hacer un snapshot de <GifGrid/>", () => {
	const category = "One Punch";

	test("debe de mostrar el componente correctamente", () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de mostrar items cuando se cargan imágenes con useFetchGifs", () => {
		const gifs = [
			{
				id: "ABC",
				url: "https://localhost/random/object.jpg",
				title: "Title pass test",
			},
			{
				id: "ABC",
				url: "https://localhost/random/object.jpg",
				title: "Title pass test",
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false); //el parrot no existe que esperaría yo toBe eso no debería de existir.
		expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
	});
});
