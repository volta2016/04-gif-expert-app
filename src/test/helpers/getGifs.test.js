const { getGifs } = require("../../helpers/getGifs");

describe("Pruebas con gitGifs Fetch", () => {
	test("debe traer 10 elementos", async () => {
		const gifs = await getGifs("One Punch");

		expect(gifs.length).toBe(10);
	});

	test("si el usuario no pasa category debe ser 0", async () => {
		const gifs = await getGifs("");
		//console.log(gifs);//gifs.length)[]
		expect(gifs.length).toBe(0);
	});

	// test("no debe de postiar la informacion con submit", () => {});
});
