import { render } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas en hook useFetchGifs", () => {
	test("debe de retornar el estado inicial", async () => {
		const { result, waitForNextUpdate, w } = renderHook(() =>
			useFetchGifs("One Punch")
		);
		const { data, loading } = result.current;
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test("debe de retornar un arreglo de imgs y en loading en false", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs("One Punch")
		);
		await waitForNextUpdate();
		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});
