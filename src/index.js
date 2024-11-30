import app from "./app.js";

const main = () => {
    app.listen(app.get("port"), () => {
        console.log(`Server corriendo en el puerto: ${app.get("port")} http://localhost:3000`);
    });
};

main();
