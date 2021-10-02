expect() > lo que espera del dom
toBe() > lo que tienen que ser o lo que esperamos que sea
shallow hace una captura del
find() > busca un elemento del DOM

```js
const can = {
	name: "pamplemousse",
	ounces: 12,
};

describe("the can", () => {
	test("has 12 ounces", () => {
		expect(can.ounces).toBe(12);
	});

	test("has a sophisticated name", () => {
		expect(can.name).toBe("pamplemousse");
	});
});
```

const img = wrapper.find("img");
// console.log(img.prop('src'));
console.log(img.html());
expect(img.prop("src")).toBe(url); > lo que quiere dedecir que expect espera que sea igual a const que
tengo definida ahí
expect(img.prop("alt")).toBe(title);
console.log(img.html()); > para ver las propiedades del html

const wrapper = shallow(<GifGridItem title={title} url={url} />); > el contenedor y lo que recibe nuestro parrafo
wrapper.find("div"); > wrapper después ya me sirve para buscar dentro del componente ya que es como un contenedor

const className = div.prop("className");
como esto es un string ahora puedo preguntar si className.include("nameclass") es true
expect(className.includes("animate\_\_fadeIn")).toBe(true);

expect(className.includes("animate\_\_fadeIn”)).not.toBe(true); > para hacer la negación o pasando toBe(false)

const drink = jest.fn(); > para referenciar una función con jest puede ser pasada como un callback drink

.toHaveBeenCalled(); > para asgurarse que ha llamado una función simulada
